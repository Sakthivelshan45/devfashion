"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
  type PanInfo,
} from "framer-motion";
import { ArrowUpRight, Maximize2, Star, X } from "lucide-react";

export type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  photo?: string;
};

/* Show the customer's city under the name on the small cards? (the pop-up always shows it) */
const SHOW_LOCATION = false;

/* ---------- small pieces ---------- */

export function Stars({ n, className = "h-3.5 w-3.5" }: { n: number; className?: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < n ? "fill-[#f5b301] text-[#f5b301]" : "text-stone-300"}`}
        />
      ))}
    </div>
  );
}

const initials = (name: string) =>
  name
    .replace(/\./g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

/* Customer photo, cropped to keep the FACE in view */
function Avatar({ r, className = "h-11 w-11" }: { r: Review; className?: string }) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full bg-gold-100 shadow-sm ring-2 ring-white ${className}`}
    >
      {r.photo ? (
        <Image
          src={r.photo}
          alt={`${r.name}, Dev Fashion customer`}
          fill
          sizes="128px"
          quality={90}
          draggable={false}
          className="object-cover object-top"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gold-200 to-gold-400 font-serif text-sm font-semibold text-gold-800">
          {initials(r.name)}
        </span>
      )}
    </span>
  );
}

/* ---------- responsive sizing ---------- */

type Geo = { w: number; cardW: number; gap: number };

/* Phones: one wide card with a peek of its neighbours. Tablets and desktops: three to four cards. */
function layoutFor(w: number): Omit<Geo, "w"> {
  if (w < 640) return { cardW: Math.min(320, Math.round(w * 0.84)), gap: 12 };
  if (w < 1024) return { cardW: 300, gap: 16 };
  return { cardW: 340, gap: 20 };
}

/* x position that puts card number `p` exactly in the middle of the viewport */
const targetFor = (p: number, g: Geo) => g.w / 2 - (p * (g.cardW + g.gap) + g.cardW / 2);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Where the pop-up grows out from (the card that was clicked) */
type Opened = { review: Review; from: { x: number; y: number; scale: number } };

/* ---------- gentle curve ---------- */

/* How strong the curve is. Make these smaller for a flatter row, bigger for a rounder arc. */
const CURVE_TILT_DEG = 8; // how much a card leans outward, in degrees, at the edge of the arc
const CURVE_DROP_PX = 40; // how far a card sinks, in pixels, at the edge of the arc

/* Wraps one card. While the track slides, every card is lowered and tilted a little more
   the further it is from the centre, so the whole row follows a soft arch (centre highest).
   It reads the track's x position directly, so it stays smooth during swipes and autoplay. */
function CurveSlot({
  x,
  geo,
  index,
  isCenter,
  cardW,
  gap,
  children,
}: {
  x: MotionValue<number>;
  geo: Geo | null;
  index: number;
  isCenter: boolean;
  cardW: number;
  gap: number;
  children: ReactNode;
}) {
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  useIsoLayoutEffect(() => {
    if (!geo) return;
    const step = geo.cardW + geo.gap;
    /* the arch spans about 2.4 cards each side on desktop, 1.8 on phones */
    const span = step * (geo.w < 640 ? 1.8 : 2.4);
    const update = (latest: number) => {
      const fromCenter = index * step + geo.cardW / 2 + latest - geo.w / 2;
      const t = Math.max(-1.8, Math.min(1.8, fromCenter / span));
      y.set(t * t * CURVE_DROP_PX);
      rotate.set(t * CURVE_TILT_DEG);
    };
    update(x.get());
    return x.on("change", update);
  }, [x, geo, index, y, rotate]);

  return (
    <motion.div
      className={`relative flex shrink-0 ${isCenter ? "z-10" : ""}`}
      style={{ width: cardW, marginRight: gap, y, rotate }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- the carousel ---------- */

export default function ReviewsCarousel({
  reviews,
  autoplaySeconds = 4,
  googleUrl,
}: {
  reviews: Review[];
  autoplaySeconds?: number;
  googleUrl?: string;
}) {
  const N = reviews.length;
  /* three copies, so the loop is endless in both directions */
  const items = useMemo(() => [...reviews, ...reviews, ...reviews], [reviews]);
  const reduce = useReducedMotion();

  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const anim = useRef<ReturnType<typeof animate> | null>(null);
  const posRef = useRef(N);

  const [geo, setGeo] = useState<Geo | null>(null);
  const [pos, setPos] = useState(N); // index of the centre card inside `items`
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [inView, setInView] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useState<Opened | null>(null);

  useEffect(() => setMounted(true), []);

  /* measure the viewport; re-measure on resize / rotate */
  useIsoLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      if (w) setGeo({ w, ...layoutFor(w) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* keep the position correct whenever the size changes */
  useIsoLayoutEffect(() => {
    if (!geo) return;
    anim.current?.stop();
    x.set(targetFor(posRef.current, geo));
  }, [geo, x]);

  /* pause when the carousel is scrolled out of view */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goTo = useCallback(
    (target: number) => {
      if (!geo) return;
      const p = Math.max(0, Math.min(3 * N - 1, target));
      posRef.current = p;
      setPos(p);
      anim.current?.stop();

      /* After landing, silently jump back to the middle copy so the loop never runs out.
         The cards look identical there, so nobody sees the jump. */
      const onComplete = () => {
        const home = p >= 2 * N ? p - N : p < N ? p + N : p;
        if (home !== p) {
          posRef.current = home;
          setPos(home);
          x.set(targetFor(home, geo));
        }
      };
      anim.current = animate(
        x,
        targetFor(p, geo),
        reduce
          ? { duration: 0.2, onComplete }
          : { type: "spring", stiffness: 210, damping: 30, mass: 0.9, onComplete }
      );
    },
    [geo, N, reduce, x]
  );

  const next = useCallback(() => goTo(posRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(posRef.current - 1), [goTo]);

  /* autoplay: restarts after every move, pauses on hover, drag, pop-up, hidden tab or off-screen */
  const running = !reduce && !hovered && !dragging && !opened && inView && !!geo;
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      if (!document.hidden) next();
    }, autoplaySeconds * 1000);
    return () => window.clearInterval(id);
  }, [running, pos, next, autoplaySeconds]);

  /* swipe / drag */
  const onDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    setDragging(false);
    if (!geo) return;
    const step = geo.cardW + geo.gap;
    const projected = info.offset.x + info.velocity.x * 0.18;
    let delta = Math.round(-projected / step);
    if (delta === 0 && Math.abs(info.offset.x) > 36) delta = info.offset.x < 0 ? 1 : -1;
    delta = Math.max(-3, Math.min(3, delta));
    goTo(posRef.current + delta);
  };

  /* ----- pop-up ----- */
  const openReview = (r: Review, el: Element | null) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const panelW = Math.min(576, window.innerWidth * 0.92);
    setOpened({
      review: r,
      from: {
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
        scale: Math.min(1, rect.width / panelW),
      },
    });
  };
  const close = useCallback(() => setOpened(null), []);

  /* Esc closes, and the page behind does not scroll while the pop-up is open */
  useEffect(() => {
    if (!opened) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [opened, close]);

  const cardW = geo?.cardW ?? 320;
  const gap = geo?.gap ?? 16;

  return (
    <div
      ref={sectionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
    >
      <style>{`@keyframes rc-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>

      {/* Viewport: full width, cards are simply cut off at both edges (no fade).
          Extra top and bottom space so the lifted centre card and its shadow are never clipped. */}
      <div ref={viewportRef} className="overflow-hidden pb-16 pt-8">
        <motion.div
          className="flex w-max cursor-grab items-stretch active:cursor-grabbing"
          style={{ x, touchAction: "pan-y", opacity: geo ? 1 : 0 }}
          drag="x"
          dragMomentum={false}
          onDragStart={() => {
            anim.current?.stop();
            setDragging(true);
          }}
          onDragEnd={onDragEnd}
        >
          {items.map((r, i) => {
            /* every copy of the centre review counts as "centre", so the endless-loop jump is invisible */
            const isCenter = (((i - pos) % N) + N) % N === 0;
            const isMainCopy = i >= N && i < 2 * N;
            return (
              <CurveSlot
                key={i}
                x={x}
                geo={geo}
                index={i}
                isCenter={isCenter}
                cardW={cardW}
                gap={gap}
              >
              <motion.figure
                role="button"
                aria-label={`Read ${r.name}'s full review`}
                aria-hidden={!isMainCopy}
                tabIndex={isCenter && isMainCopy ? 0 : -1}
                onTap={(e) => openReview(r, (e.target as Element).closest("figure"))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openReview(r, e.currentTarget);
                  }
                }}
                animate={{ scale: isCenter ? 1.06 : 1, y: isCenter ? -6 : 0 }}
                transition={
                  reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20 }
                }
                className={`relative flex w-full select-none flex-col justify-between rounded-[28px] p-6 outline-none transition-[background-color,box-shadow] duration-500 focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  isCenter
                    ? "z-10 bg-white shadow-[0_24px_50px_-22px_rgba(140,100,30,0.55)]"
                    : "bg-stone-100 hover:bg-gold-50"
                }`}
              >
                {/* soft gold glow that breathes while the card is in the centre */}
                {isCenter && !reduce && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[28px] border-2 border-gold-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.85, 0.2] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                {/* The review */}
                <blockquote className="line-clamp-4 text-[13px] leading-[1.8] text-stone-700">
                  {r.text}
                </blockquote>

                {/* Who said it: photo, name and stars. Quote mark turns into an "open" button in the centre. */}
                <figcaption className="mt-5 flex items-center gap-3">
                  <Avatar r={r} />
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-stone-900">{r.name}</p>
                    {SHOW_LOCATION && (
                      <p className="truncate text-[10px] uppercase tracking-wider text-stone-500">
                        {r.location}
                      </p>
                    )}
                    <div className="mt-0.5">
                      <Stars n={r.rating} className="h-3 w-3" />
                    </div>
                  </div>

                  <span className="relative ml-auto h-10 w-10 shrink-0 self-end">
                    <span
                      aria-hidden
                      className={`absolute inset-0 flex items-end justify-end font-serif text-5xl leading-[0.6] text-stone-300 transition-opacity duration-300 ${
                        isCenter ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      ”
                    </span>
                    <span
                      aria-hidden
                      className={`absolute inset-0 flex items-center justify-center rounded-full bg-gold-600 text-white shadow-md transition-all duration-300 ${
                        isCenter ? "scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}
                    >
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
              </CurveSlot>
            );
          })}
        </motion.div>
      </div>

      {/* Progress line: fills while the current position is showing */}
      <div className="flex justify-center">
        <div className="h-[2px] w-16 overflow-hidden bg-stone-200" aria-hidden>
          <div
            key={`${pos}-${running}`}
            className="h-full w-full origin-left bg-gold-500"
            style={{
              transform: "scaleX(0)",
              animation: running ? `rc-progress ${autoplaySeconds}s linear forwards` : "none",
            }}
          />
        </div>
      </div>

      {/* ================= Pop-up: the clicked review, big ================= */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {opened && (
              <motion.div
                key="rc-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`Review by ${opened.review.name}`}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={close}
              >
                <div aria-hidden className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm" />

                {/* The panel grows out of the card that was clicked and shrinks back into it */}
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-[32px] bg-white p-7 shadow-2xl sm:p-10"
                  initial={
                    reduce
                      ? { opacity: 0 }
                      : { opacity: 0, x: opened.from.x, y: opened.from.y, scale: opened.from.scale }
                  }
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  exit={
                    reduce
                      ? { opacity: 0 }
                      : { opacity: 0, x: opened.from.x, y: opened.from.y, scale: opened.from.scale }
                  }
                  transition={
                    reduce ? { duration: 0.15 } : { type: "spring", stiffness: 280, damping: 28 }
                  }
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"
                  />

                  <button
                    type="button"
                    autoFocus
                    onClick={close}
                    aria-label="Close review"
                    className="absolute right-4 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold-200 text-stone-700 transition-colors hover:border-gold-600 hover:bg-gold-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <span aria-hidden className="block font-serif text-7xl leading-[0.7] text-gold-300">
                    “
                  </span>

                  <p className="mt-4 text-base leading-[1.9] text-stone-700 sm:text-lg">
                    {opened.review.text}
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-gold-100 pt-6">
                    <Avatar r={opened.review} className="h-16 w-16" />
                    <div className="min-w-0">
                      <p className="truncate font-serif text-xl font-semibold text-stone-950">
                        {opened.review.name}
                      </p>
                      <p className="mb-1.5 truncate text-[11px] uppercase tracking-wider text-stone-500">
                        {opened.review.location}
                      </p>
                      <Stars n={opened.review.rating} className="h-4 w-4" />
                    </div>
                  </div>

                  {googleUrl && (
                    <a
                      href={googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-stone-800 underline decoration-gold-500 decoration-2 underline-offset-8 transition-colors hover:text-gold-600"
                    >
                      See all reviews on Google
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}