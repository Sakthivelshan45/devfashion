"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, ArrowDown, Scissors } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  THE DEV FASHION COUTURE UNIVERSE: colour system (one place)        */
/* ------------------------------------------------------------------ */

const THEME = {
  "--wine": "#421322",
  "--plum": "#190E13",
  "--gold": "#C7A568",
  "--ivory": "#FAF7F1",
  "--rose": "#D8B6B6",
} as React.CSSProperties;

/** Blush & burgundy palette, scoped to the archive section only */
const ARCHIVE_THEME = {
  "--bg": "#fdf3f0",
  "--paper": "#fffaf8",
  "--ink": "#2b1820",
  "--muted": "#7d6068",
  "--accent": "#8b2346",
  "--accent-deep": "#5e1530",
  "--gold": "#c79a3b",
  "--line": "#efd3cf",
  "--tint": "#fbe6e6",
  "--tape": "#f3dcab",
} as React.CSSProperties;

/* ------------------------------------------------------------------ */
/*  DATA (unchanged: 29 items, same paths, titles, categories, ids)    */
/* ------------------------------------------------------------------ */

interface RawItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}
interface GalleryItem extends RawItem {
  id: number;
}

const rawItems: RawItem[] = [
  { src: "/images/dev_fashion/deeps2.jpeg", alt: "Luxury custom tailored ethnic gown", category: "Custom Designs", title: "Luxury Ethnic Editorial", description: "Intricately detailed custom gown with bespoke neckline contours, handcrafted embellishments and smooth pastel lining." },
  { src: "/images/dev_fashion/sai.jpeg", alt: "Bridal zardozi blouse", category: "Bridal Collection", title: "Royal Crimson Zardozi Blouse", description: "Premium velvet bridal blouse with rich handwoven gold zardozi patterns and a deep sweetheart back." },
  { src: "/images/dev_fashion/ammu.jpeg", alt: "Designer saree blouse with cutwork", category: "Designer Blouses", title: "Sheer Cutwork Blouse", description: "Modern sheer net back with floral cutwork, fine bead borders and structured elbow-length sleeves." },
  { src: "/images/dev_fashion/deeps1.jpeg", alt: "Traditional silk saree outfit", category: "Traditional Wear", title: "Banarasi Heritage Styling", description: "A luxury drape paired with a raw-silk elbow-sleeve blouse finished with handcrafted zari borders." },
  { src: "/images/dev_fashion/ammu_deeps.jpeg", alt: "Festive lehenga design", category: "Festive Collection", title: "Pastel Meadow Lehenga", description: "A lightweight layered georgette lehenga with hand-painted floral elements, made for festive evenings." },
  { src: "/images/dev_fashion/ammu_sai.jpeg", alt: "Premium tailoring detail", category: "Custom Designs", title: "Tailoring Perfection", description: "Every pattern is hand-drafted by our master tailors to guarantee a flawless custom fit." },
  { src: "/images/dev_fashion/dd_black.png", alt: "Bridal lehenga embroidery detail", category: "Bridal Collection", title: "Midnight Bridal Lehenga", description: "Heavy zari and stone embroidery panels crafted over weeks by skilled karigars." },
  { src: "/images/dev_fashion/deeps.jpg", alt: "Indo-western party wear", category: "Party Wear", title: "Contemporary Indo-Western", description: "Off-shoulder designer silhouette in premium raw silk with soft pleating details." },
  { src: "/dev_hero.png", alt: "Dev Fashion signature look", category: "Custom Designs", title: "The Signature Look", description: "Our house signature: bespoke tailoring with an editorial finish." },
  { src: "/images/dev_f1.png", alt: "Dev Fashion featured design", category: "Designer Blouses", title: "Featured Couture Piece", description: "A showpiece blouse design crafted with fine hand detailing." },
  { src: "/images/kan.jpg", alt: "Kanchipuram style outfit", category: "Traditional Wear", title: "Kanchi Silk Elegance", description: "Timeless silk styling with a custom-fitted blouse and rich borders." },
  { src: "/images/dev_fashion/blouse_back.jpg", alt: "Blouse back neck design", category: "Designer Blouses", title: "Statement Back Neck", description: "A sculpted back-neck design with delicate tassels and precise finishing." },
  { src: "/images/dev_fashion/bride1.jpg", alt: "Bride in custom outfit", category: "Bridal Collection", title: "The Radiant Bride", description: "A complete bridal look tailored to the bride's exact vision and measurements." },
  { src: "/images/dev_fashion/couple1.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition I", description: "Perfectly coordinated outfits for the two of you." },
  { src: "/images/dev_fashion/couple2.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition II", description: "Matching palettes and fabrics, tailored for a seamless pair." },
  { src: "/images/dev_fashion/couple3.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition III", description: "Festive couple styling with coordinated embroidery." },
  { src: "/images/dev_fashion/couple4.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition IV", description: "A refined pairing for weddings and receptions." },
  { src: "/images/dev_fashion/couple5.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition V", description: "Soft tones and detailed finishing for a graceful duo." },
  { src: "/images/dev_fashion/couple6.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition VI", description: "Complementary silhouettes designed to photograph beautifully." },
  { src: "/images/dev_fashion/couple7.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition VII", description: "Rich fabrics and clean tailoring for an elegant couple look." },
  { src: "/images/dev_fashion/couple9.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition VIII", description: "Celebration-ready outfits coordinated down to the details." },
  { src: "/images/dev_fashion/custom_drs1.jpg", alt: "Custom dress", category: "Custom Designs", title: "Made-to-Measure Dress", description: "A custom dress drafted from scratch around your measurements." },
  { src: "/images/dev_fashion/family.jpg", alt: "Family in matching outfits", category: "Couples & Family", title: "The Family Collection", description: "Coordinated looks for the whole family, from elders to little ones." },
  { src: "/images/dev_fashion/group.jpg", alt: "Group in coordinated outfits", category: "Party Wear", title: "Celebration Ensemble", description: "Group styling for bridesmaids, sangeet and festive gatherings." },
  { src: "/images/dev_fashion/kid_mom1.jpg", alt: "Mother and child in matching outfits", category: "Couples & Family", title: "Mother & Child", description: "Twinning outfits with matching embroidery for mom and little one." },
  { src: "/images/dev_fashion/kid1.jpg", alt: "Kids ethnic wear", category: "Kids Wear", title: "Little Royals I", description: "Comfortable, beautifully finished ethnic wear for kids." },
  { src: "/images/dev_fashion/kid2.jpg", alt: "Kids ethnic wear", category: "Kids Wear", title: "Little Royals II", description: "Soft fabrics and playful detailing for festive days." },
  { src: "/images/dev_fashion/kid3.jpg", alt: "Kids ethnic wear", category: "Kids Wear", title: "Little Royals III", description: "Tailored for movement, styled for the spotlight." },
  { src: "/images/dev_fashion/old_blouse1.jpg", alt: "Classic blouse design", category: "Designer Blouses", title: "Classic Heirloom Blouse", description: "A timeless blouse pattern reimagined with a modern fit." },
];

const galleryItems: GalleryItem[] = rawItems.map((item, i) => ({ ...item, id: i + 1 }));

const categories = [
  "All",
  "Bridal Collection",
  "Designer Blouses",
  "Party Wear",
  "Traditional Wear",
  "Festive Collection",
  "Custom Designs",
  "Couples & Family",
  "Kids Wear",
];

/** Craft chapters: each uses an existing photo and that photo's own description */
const craftChapters = [
  { label: "Embroidery and zari", src: "/images/dev_fashion/sai.jpeg" },
  { label: "Neckline", src: "/images/dev_fashion/deeps2.jpeg" },
  { label: "Sleeves", src: "/images/dev_fashion/ammu.jpeg" },
  { label: "Back-neck", src: "/images/dev_fashion/blouse_back.jpg" },
  { label: "Custom fitting", src: "/images/dev_fashion/ammu_sai.jpeg" },
].map((c) => ({ ...c, item: galleryItems.find((g) => g.src === c.src)! }));

const journey = [
  ["Explore a design", "Browse the archive and open any piece."],
  ["Request customization", "Send the design you love through the booking form."],
  ["Share measurements", "Virtually, or arrange an in-person measurement."],
  ["Coordinate with your stylist", "Settle neckline, sleeves, back and embroidery together."],
  ["Confirm the order", "Agree the order and delivery arrangements."],
];

const WA = "https://wa.me/918098558923";

/* ------------------------------------------------------------------ */
/*  OPENING SCENE                                                      */
/* ------------------------------------------------------------------ */

function Hero({ onExplore }: { onExplore: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const k = reduce ? 0 : 1;
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 110 * k]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, -90 * k]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50 * k]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[var(--plum)] text-[var(--ivory)]">
      <motion.div style={{ y: yMain }} className="absolute inset-x-0 top-0 h-[68svh] sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:w-[58%]">
        <motion.div
          initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="relative h-full w-full"
        >
          <Image src="/dev_hero.png" alt="Dev Fashion signature look" fill priority sizes="(max-width: 640px) 100vw, 58vw" className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum)] via-[var(--plum)]/30 to-transparent sm:bg-gradient-to-r sm:from-[var(--plum)] sm:via-transparent sm:to-transparent" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: ySub }}
        className="absolute left-[7%] top-[16%] hidden w-[17%] max-w-[260px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] sm:block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image src="/images/dev/nivi.jpeg" alt="Bridal zardozi blouse" fill sizes="17vw" className="object-cover" />
        </div>
        <p className="mt-3 text-xs tracking-wide text-[var(--rose)]">Royal Crimson Zardozi Blouse</p>
      </motion.div>

      <motion.div style={{ y: yText }} className="relative z-10 px-5 pb-10 pt-[52svh] sm:px-[7%] sm:pb-16 sm:pt-32">
        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--gold)]">Dev Fashion Atelier</p>
        <h2 className="mt-4 font-serif font-light leading-[0.98] tracking-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}>
          Crafted to
          <br />
          <span className="italic text-[var(--rose)] sm:ml-[8%]">become your</span>
          <br />
          heirloom.
        </h2>
        <motion.span
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.4, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
          className="mt-6 block h-px w-40 bg-[var(--gold)] sm:w-64"
        />
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-[var(--ivory)]/75 sm:text-base">
            Bespoke South Indian bridal blouses, hand-finished embroidery and tailoring drafted around your measurements.
          </p>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 bg-[var(--gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--plum)] transition-colors hover:bg-[var(--ivory)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
            >
              Explore the Collection
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <span className="text-xs text-[var(--rose)]/80">
              <span className="hidden sm:inline">Click any piece to open it. </span>
              <span className="sm:hidden">Tap any piece to open it. </span>
              Swipe or use the arrow keys inside.
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ARCHIVE DECORATIONS: hanger, measuring tape, sewing line           */
/* ------------------------------------------------------------------ */

/** Clothes hanger that hangs from the rail */
function Hanger() {
  return (
    <svg
      viewBox="0 0 120 46"
      className="relative z-10 mx-auto -mb-[10px] h-[34px] w-[80px] drop-shadow-sm sm:-mb-[14px] sm:h-[46px] sm:w-[110px]"
      fill="none"
      aria-hidden
    >
      <path d="M60 2c-6 0-9.5 3.5-9.5 7.5 0 3.5 3 5 6 7" stroke="#b08226" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M60 17 L10 38 Q4 41 10 42 H110 Q116 41 110 38 Z" fill="#f7e6c4" stroke="#b08226" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M22 37 L60 21 L98 37" stroke="#fffaf0" strokeWidth="1.2" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

/** Sliding measuring tape divider */
function MeasuringTape({ label }: { label: string }) {
  return (
    <div className="relative mx-auto my-10 h-8 w-full max-w-5xl overflow-hidden rounded-[3px] bg-[var(--tape)] shadow-[0_6px_18px_-8px_rgba(94,21,48,0.45)] ring-1 ring-[var(--gold)]/30 sm:my-14 sm:h-10">
      <style>{`@keyframes tape-slide{to{background-position-x:-100px}}`}</style>
      <div
        className="absolute inset-0"
        style={{
          animation: "tape-slide 6s linear infinite",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0 0",
          backgroundImage:
            "linear-gradient(90deg, rgba(94,21,48,.6) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(94,21,48,.8) 1.5px, transparent 1.5px)," +
            "linear-gradient(90deg, rgba(94,21,48,.95) 2px, transparent 2px)",
          backgroundSize: "10px 8px, 50px 13px, 100px 19px",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[5%] whitespace-nowrap rounded-full border border-[var(--gold)]/40 bg-[var(--bg)] px-3 py-0.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)] sm:-translate-y-[10%] sm:px-5 sm:text-[10px] sm:tracking-[0.35em]">
        {label}
      </div>
    </div>
  );
}

/** A running stitch being sewn across, with a needle at the leading edge */
function SewingLine() {
  return (
    <div className="relative mx-auto mt-6 h-6 w-44 sm:mt-7 sm:w-96">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 h-0 border-t-2 border-dashed border-[var(--gold)]"
      >
        <svg viewBox="0 0 32 20" className="absolute -right-6 -top-[13px] h-5 w-8" aria-hidden>
          <line x1="3" y1="17" x2="30" y2="3" stroke="#7d6068" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="4.5" cy="16" rx="1.2" ry="3" transform="rotate(30 4.5 16)" fill="#fffaf8" stroke="#7d6068" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HANGING 3D CARD                                                    */
/* ------------------------------------------------------------------ */

function HangingCard({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 160, damping: 18 });
  const sy = useSpring(my, { stiffness: 160, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-11, 11]);
  const rotateX = useTransform(sy, [0, 1], [9, -9]);
  const gx = useTransform(sx, (v) => `${v * 100}%`);
  const gy = useTransform(sy, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.45), transparent 55%)`;

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const swingDuration = 4.2 + (index % 5) * 0.55;
  const swingDelay = (index % 7) * 0.25;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay: (index % 2) * 0.08 }}
      className="relative pt-2"
    >
      {/* brass rail segment (joins neighbours in the same row) */}
      <div className="absolute -left-1.5 -right-1.5 top-0 h-[5px] rounded-full bg-gradient-to-b from-[#f7e6c4] via-[var(--gold)] to-[#8c6a1f] shadow-[0_3px_6px_rgba(94,21,48,0.25)] sm:-left-3.5 sm:-right-3.5 sm:h-[6px]" />

      <motion.div
        style={{ transformOrigin: "50% 0%" }}
        animate={reduce ? undefined : { rotate: [-1.3, 1.3, -1.3] }}
        transition={{ duration: swingDuration, repeat: Infinity, ease: "easeInOut", delay: swingDelay }}
        whileHover={{ rotate: 0, transition: { duration: 0.5 } }}
      >
        <Hanger />

        <div style={{ perspective: 900 }}>
          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            onClick={onOpen}
            role="button"
            tabIndex={0}
            aria-label={`Open ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen();
              }
            }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileTap={{ scale: 0.97 }}
            className="group relative cursor-pointer bg-[var(--paper)] p-2 shadow-[0_22px_40px_-22px_rgba(94,21,48,0.5)] ring-1 ring-[var(--line)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:p-3"
          >
            {/* photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--tint)]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              {/* running-stitch frame */}
              <div className="pointer-events-none absolute inset-2 border border-dashed border-white/80 transition-all duration-500 group-hover:border-[var(--gold)] sm:inset-3 sm:group-hover:inset-4" />
              {/* moving light */}
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: glare }}
              />
              {/* tag with punched hole */}
              <div
                className="absolute left-2 top-2 flex items-center gap-1 rounded-sm bg-[var(--bg)] py-0.5 pl-1 pr-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow sm:left-3 sm:top-3 sm:gap-1.5 sm:py-1 sm:pl-1.5 sm:pr-2.5 sm:text-[9px] sm:tracking-[0.25em]"
                style={{ transform: "translateZ(40px)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--gold)] bg-white sm:h-2 sm:w-2" />
                No. {String(item.id).padStart(2, "0")}
              </div>
            </div>

            {/* caption */}
            <div
              className="flex items-end justify-between gap-2 px-0.5 pb-0.5 pt-3 sm:gap-3 sm:px-1 sm:pt-4"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="min-w-0">
                <span className="block truncate text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.25em]">
                  {item.category}
                </span>
                <h3 className="mt-0.5 line-clamp-2 font-serif text-[13px] leading-snug text-[var(--ink)] sm:mt-1 sm:text-lg">
                  {item.title}
                </h3>
              </div>
              <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white sm:flex">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */

export default function GalleryLightbox() {
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const [craft, setCraft] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const filteredItems = useMemo(
    () => (selectedCategory === "All" ? galleryItems : galleryItems.filter((i) => i.category === selectedCategory)),
    [selectedCategory]
  );
  const n = filteredItems.length;
  const open = activeImageIndex !== null;
  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const go = useCallback(
    (step: number) => {
      setDir(step);
      setActiveImageIndex((i) => (i === null ? i : (i + step + n) % n));
    },
    [n]
  );
  const prev = () => go(-1);
  const next = () => go(1);
  const close = () => setActiveImageIndex(null);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
      lastFocus.current?.focus?.();
    };
  }, [open, go]);

  const explore = () =>
    document.getElementById("archive")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  const slide = reduce ? 0 : 48;

  return (
    <div style={THEME} className="relative w-full overflow-x-clip bg-[var(--plum)]">
      <Hero onExplore={explore} />

      {/* ------------------------- THE ARCHIVE ------------------------- */}
      <section
        id="archive"
        style={ARCHIVE_THEME}
        className="relative w-full overflow-hidden bg-[var(--paper)] px-3 py-14 text-[var(--ink)] sm:px-8 sm:py-24"
      >
        {/* pattern-paper dots + soft glows */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "radial-gradient(rgba(139,35,70,0.14) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <motion.div
            animate={reduce ? undefined : { x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f6c4cc]/50 blur-3xl sm:h-80 sm:w-80"
          />
          <motion.div
            animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 40, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#f3dca8]/50 blur-3xl sm:h-96 sm:w-96"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* heading */}
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--gold)] sm:text-[11px] sm:tracking-[0.45em]"
            >
              <Scissors className="h-3.5 w-3.5" /> Dev Fashion Atelier
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-3 font-serif text-[2rem] font-light leading-[1.15] tracking-wide text-[var(--ink)] sm:mt-4 sm:text-6xl"
            >
              Blouses, <span className="italic text-[var(--gold)]">Stitched</span> to Your Story
            </motion.h2>
            <p className="mx-auto mt-3 max-w-md px-2 text-[13px] leading-relaxed text-[var(--muted)] sm:mt-4 sm:max-w-xl sm:text-base">
              Every design below is hand-drafted, hand-finished and cut to your measurements. Pick a hanger and make it yours.
            </p>
            <SewingLine />
          </div>

          <MeasuringTape label="Made to your measure" />

          {/* category tabs: swipeable row on mobile, wrapped on desktop */}
          <div className="-mx-3 mb-10 overflow-x-auto px-3 [scrollbar-width:none] sm:mx-auto sm:mb-14 sm:max-w-5xl sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
              {categories.map((category) => {
                const selected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={(e) => {
                      setSelectedCategory(category);
                      setActiveImageIndex(null);
                      e.currentTarget.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
                    }}
                    aria-pressed={selected}
                    className={`relative shrink-0 whitespace-nowrap border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-widest ${
                      selected
                        ? "border-[var(--accent)] text-white"
                        : "border-[var(--line)] bg-white/70 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="tab-bg"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 bg-[var(--accent)]"
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* grid of hanging designs: 2 columns on phones */}
          {n === 0 ? (
            <p className="py-24 text-center text-[var(--muted)]">No designs in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-7 sm:gap-y-14 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item, index) => (
                <HangingCard
                  key={`${selectedCategory}-${item.id}`}
                  item={item}
                  index={index}
                  onOpen={() => {
                    setDir(1);
                    setActiveImageIndex(index);
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <SewingLine />
      </section>
          
      {/* ------------------------- CRAFTSMANSHIP ------------------------- */}
      <section className="bg-[var(--ivory)] px-4 py-20 text-[var(--plum)] sm:px-[10%] sm:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:pt-6">
            <h2 className="font-serif font-light leading-[1.05]" style={{ fontSize: "clamp(2rem, 4.6vw, 4rem)" }}>
              Made by hand,
              <br />
              down to the last stitch.
            </h2>
            <ul className="mt-8 divide-y divide-[var(--plum)]/10 border-y border-[var(--plum)]/10 sm:mt-12">
              {craftChapters.map((c, i) => (
                <li key={c.label}>
                  <button
                    onClick={() => setCraft(i)}
                    onMouseEnter={() => setCraft(i)}
                    onFocus={() => setCraft(i)}
                    aria-pressed={craft === i}
                    className="group flex w-full items-start gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wine)] sm:py-5"
                  >
                    <span className={`mt-3 h-px transition-all duration-500 ${craft === i ? "w-10 bg-[var(--wine)]" : "w-4 bg-[var(--plum)]/30"}`} />
                    <span className="min-w-0">
                      <span className={`block font-serif text-xl transition-colors sm:text-2xl ${craft === i ? "text-[var(--wine)]" : "text-[var(--plum)]/60"}`}>
                        {c.label}
                      </span>
                      {craft === i && <span className="mt-2 block max-w-md text-sm leading-relaxed text-[var(--plum)]/70">{c.item.description}</span>}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[640px] overflow-hidden bg-[var(--wine)] lg:ml-auto">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={craftChapters[craft].src}
                  initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image src={craftChapters[craft].src} alt={craftChapters[craft].item.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <p className="absolute bottom-0 left-0 bg-[var(--plum)]/85 px-4 py-2 text-xs tracking-wide text-[var(--ivory)]">
                {craftChapters[craft].item.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- COMMISSION JOURNEY ------------------------- */}
      {/* <section className="bg-[var(--wine)] px-4 py-20 text-[var(--ivory)] sm:px-[5%] sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif font-light leading-[1.05]" style={{ fontSize: "clamp(1.9rem, 4vw, 3.4rem)" }}>
              From first look to final fitting
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--ivory)]/70">
              Measurements can be shared virtually or taken in person. Standard stitching takes 7-10 business days, and expedited delivery is available.
            </p>
          </div>
          <ol className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {journey.map(([title, text], i) => (
              <li key={title} className="border-t border-[var(--gold)]/60 pt-4">
                <span className="font-serif text-2xl text-[var(--gold)]">{i + 1}</span>
                <h3 className="mt-3 font-serif text-lg leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ivory)]/65">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--plum)] transition-colors hover:bg-[var(--ivory)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
            >
              Request Customization <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`${WA}?text=${encodeURIComponent("Hi Dev Fashion, I would like to start a custom design.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[var(--ivory)]/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
            >
              WhatsApp Stylist
            </a>
          </div>
        </div>
      </section> */}






        <section className="relative overflow-hidden bg-[var(--ivory)] px-4 py-10 text-[var(--plum)] sm:px-[6%] sm:py-12">
  {/* thin orbit circle */}
  <div
    aria-hidden
    className="pointer-events-none absolute -right-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[var(--gold)]/25"
  />

  <div className="relative mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-[0.8fr_1.3fr_1fr] lg:gap-10">
    {/* photograph */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div className="relative h-52 overflow-hidden bg-[var(--gold)]/20 sm:h-64 lg:h-[300px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dev_fashion/group_temp.png"
          alt="Dev Fashion"
          className="h-full w-full object-cover"
        />
      </div>

      {/* gold asterisk badge */}
      <span
        aria-hidden
        className="absolute -right-3 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-white shadow-md"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
        </svg>
      </span>

      {/* white floating card */}
      <div className="absolute -bottom-4 -right-3 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.3)]">
        <p className="font-serif text-2xl leading-none text-[var(--plum)]">7–10</p>
        <p className="mt-1 text-[11px] text-[var(--plum)]/60">Business days</p>
        <p className="text-[11px] font-medium text-[var(--gold)]">Express available</p>
      </div>
    </motion.div>

    {/* headline, copy, buttons */}
    <div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-medium tracking-[0.2em] text-[var(--gold)]"
      >
        THE COMMISSION
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-2 font-serif font-normal leading-[1.1] text-[var(--plum)]"
        style={{ fontSize: "clamp(2rem, 3.4vw, 3.1rem)" }}
      >
        From first look
        <br />
        to <span className="italic text-[var(--gold)]">final fitting.</span>
      </motion.h2>

      <p className="mt-3 max-w-md text-[13px] leading-6 text-[var(--plum)]/65">
        Measurements can be shared virtually or taken in person. Standard stitching takes 7-10 business days, and expedited delivery is available.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href="/contact#booking"
          className="inline-flex items-center justify-center bg-[var(--gold)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
        >
          Request Customization
        </Link>
        <a
          href={`${WA}?text=${encodeURIComponent("Hi Dev Fashion, I would like to start a custom design.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
        >
          WhatsApp Stylist
        </a>
      </div>
    </div>

    {/* compact steps */}
    <ol className="space-y-3.5 border-t border-[var(--gold)]/40 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      {journey.map(([title, text], i) => (
        <motion.li
          key={title}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] text-xs text-[var(--gold)]">
            {i + 1}
          </span>
          <div>
            <h3 className="font-serif text-base leading-tight text-[var(--plum)]">{title}</h3>
            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-[var(--plum)]/60">{text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  </div>
</section>



{/* 0--------------------------- */}







<section className="relative overflow-hidden bg-[#f6e8d0] px-4 py-14 text-[#3b1d0e] sm:px-[6%] sm:py-20">
  {/* shared temple-niche arch clip path */}
  <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
    <defs>
      <clipPath id="dfTempleArch" clipPathUnits="objectBoundingBox">
        <path d="M0,1 L0,0.24 C0,0.12 0.26,0.06 0.5,0 C0.74,0.06 1,0.12 1,0.24 L1,1 Z" />
      </clipPath>
    </defs>
  </svg>

  {/* warm sun-glow + thin terracotta frame */}
  <div
    aria-hidden
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(224,149,43,0.28),transparent_60%)]"
  />
  <div
    aria-hidden
    className="pointer-events-none absolute inset-3 border border-[#b4532a]/40 sm:inset-5"
  />

  <div className="relative mx-auto max-w-[1240px]">
    {/* header */}
    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#b4532a]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#e0952b]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#b4532a]">
            The Lookbook
          </p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-serif font-light leading-[1.05]"
          style={{ fontSize: "clamp(2.1rem, 4vw, 3.5rem)" }}
        >
          Heritage, <span className="italic text-[#b4532a]">draped for you.</span>
        </motion.h2>
      </div>

      <Link
        href="/gallery"
        className="inline-flex items-center gap-3 bg-[#b4532a] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#fbf1df] transition-colors hover:bg-[#3b1d0e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4532a]"
      >
        View Gallery <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    {/* four temple shrines */}
       <div className="mt-12 flex flex-col gap-2 lg:h-[560px] lg:flex-row lg:gap-3">
      {[
        // replace these paths and titles with your own looks
        ["/images/dev_fashion/main.jpeg", "The Bride", "Heirloom drapes for the big day"],
        ["/images/dev_fashion/durga.jpg", "The Festive", "Colour and zari for celebrations"],
        ["/images/dev_fashion/sadhana_red_chudi.png", "The Everyday", "Easy tradition, all week long"],
        ["/images/dev_fashion/deeps2.jpeg", "The Heirloom", "Pieces made to be passed down"],
      ].map(([src, title, line], i) => (
        <motion.article
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative h-72 overflow-hidden bg-[#1a1613] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-80 lg:h-auto lg:flex-1 lg:hover:flex-[3.2]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          {/* light shade only at the bottom for caption legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

          {/* number */}
          <span className="absolute left-5 top-5 font-serif text-sm tracking-[0.25em] text-white/90">
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* collapsed: vertical title (desktop) */}
          <p
            className="absolute bottom-6 left-5 hidden origin-bottom-left font-serif text-2xl italic text-white transition-opacity duration-300 group-hover:opacity-0 lg:block"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {title}
          </p>

          {/* expanded caption (always shown on mobile) */}
          <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 sm:p-7 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:delay-200">
            <p className="font-serif text-3xl italic leading-tight text-white sm:text-4xl">{title}</p>
            <p className="mt-2 max-w-xs text-sm text-white/80">{line}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e6c88e]">
              View look <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>






{/* 2nd one */}

<section className="relative overflow-hidden bg-[#f8e9c8] text-[#3a1a10]">
  {/* shared clip path: rounded temple niche */}
  <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
    <defs>
      <clipPath id="dfTempleNiche" clipPathUnits="objectBoundingBox">
        <path d="M0,1 L0,0.3 C0,0.1 0.22,0 0.5,0 C0.78,0 1,0.1 1,0.3 L1,1 Z" />
      </clipPath>
    </defs>
  </svg>

  {/* turmeric glow */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(243,162,26,0.28),transparent_60%)]"
  />

  {/* TOP: temple border (Kanchipuram saree style) */}
  <div aria-hidden className="relative border-b-2 border-[#c9973f] bg-[#8f1d1d]">
    <svg className="block h-7 w-full">
      <defs>
        <pattern id="dfTempleBorder" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M0,28 L14,3 L28,28 Z" fill="#c9973f" />
          <path d="M7,28 L14,13 L21,28 Z" fill="#8f1d1d" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dfTempleBorder)" />
    </svg>
  </div>

  {/* mango-leaf toranam hanging from the border */}
  <svg aria-hidden className="relative block h-10 w-full">
    <defs>
      <pattern id="dfToranam" width="34" height="40" patternUnits="userSpaceOnUse">
        <path d="M17,0 V6" stroke="#3f7a3a" strokeWidth="1.2" />
        <path d="M17,6 C9,14 11,28 17,36 C23,28 25,14 17,6 Z" fill="#3f7a3a" />
        <path d="M17,8 V32" stroke="#6fa65a" strokeWidth="0.8" />
        <circle cx="17" cy="38" r="2.2" fill="#f3a21a" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dfToranam)" />
  </svg>

  <div className="relative mx-auto max-w-[1240px] px-4 pb-14 pt-6 sm:px-[6%] sm:pb-20 sm:pt-10 xl:px-0">
    {/* header with copy */}
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center gap-3"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path d="M12 2 C14.5 6 16.5 8 12 12.5 C7.5 8 9.5 6 12 2 Z" fill="#f3a21a" />
          <path d="M4 15 Q12 23 20 15 Z" fill="#c9973f" />
        </svg>
        <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#a61e22]">
          Rooted in Tradition
        </p>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path d="M12 2 C14.5 6 16.5 8 12 12.5 C7.5 8 9.5 6 12 2 Z" fill="#f3a21a" />
          <path d="M4 15 Q12 23 20 15 Z" fill="#c9973f" />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 font-serif font-light leading-[1.05]"
        style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
      >
        Woven in heritage,
        <br />
        <span className="italic text-[#a61e22]">worn with grace.</span>
      </motion.h2>

      <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#3a1a10]/75 sm:text-base sm:leading-8">
        Inspired by the sacred silks, temple borders and soaring gopurams of South India, every
        Dev Fashion creation is tailored to celebrate who you are, from the first look to the
        final fitting.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#7a1717]">
        <span>Tradition</span>
        <span className="h-1.5 w-1.5 rotate-45 bg-[#c9973f]" />
        <span>Grace</span>
        <span className="h-1.5 w-1.5 rotate-45 bg-[#c9973f]" />
        <span>Craft</span>
      </div>
    </div>

    {/* four gopuram shrines */}
    <div className="mt-14 grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-7">
      {[
        // replace these paths and titles with your own looks
        ["/images/dev_fashion/main.jpeg", "The Bride", "Heirloom drapes for the big day"],
        ["/images/dev_fashion/durga.jpg", "The Festive", "Colour and zari for celebrations"],
        ["/images/dev_fashion/sadhana_red_chudi.png", "The Everyday", "Easy tradition, all week long"],
        ["/images/dev_fashion/deeps2.jpeg", "The Heirloom", "Pieces made to be passed down"],
      ].map(([src, title, line], i) => (
        <motion.figure
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          {/* gopuram tower: five tiers, barrel roof, three kalasams */}
          <svg viewBox="0 0 100 72" className="mx-auto -mb-px block w-[74%]" aria-hidden>
            {/* kalasams */}
            {[38, 50, 62].map((cx) => (
              <g key={cx}>
                <line x1={cx} y1="6" x2={cx} y2="10" stroke="#c9973f" strokeWidth="1" />
                <ellipse cx={cx} cy="4.5" rx="2" ry="2.6" fill="#f3a21a" />
              </g>
            ))}
            {/* barrel roof */}
            <path d="M31,20 Q50,6 69,20 Z" fill="#7a1717" stroke="#c9973f" strokeWidth="0.8" />
            {/* tiers with little windows */}
            {[
              [2, 96, 60],
              [9, 82, 50],
              [16, 68, 40],
              [23, 54, 30],
              [30, 40, 20],
            ].map(([x, w, y]) => (
              <g key={y}>
                <rect x={x} y={y} width={w} height="10" fill="#a61e22" stroke="#c9973f" strokeWidth="0.8" />
                {Array.from({ length: Math.floor((w - 6) / 11) }).map((_, k, arr) => {
                  const gap = (w - 6) / arr.length;
                  return (
                    <rect
                      key={k}
                      x={x + 3 + k * gap + (gap - 5) / 2}
                      y={y + 2.5}
                      width="5"
                      height="6"
                      rx="2.5"
                      fill="#f3c96a"
                    />
                  );
                })}
              </g>
            ))}
          </svg>

          {/* pillared shrine panel */}
          <div className="relative border-2 border-[#c9973f] bg-[#7a1717] px-5 pb-3 pt-3 shadow-[0_30px_60px_-30px_rgba(90,20,20,0.7)] sm:px-6">
            {/* carved pillars */}
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-2.5 bg-[repeating-linear-gradient(to_bottom,#c9973f_0_6px,#5a1010_6px_12px)] sm:w-3"
            />
            <span
              aria-hidden
              className="absolute inset-y-0 right-0 w-2.5 bg-[repeating-linear-gradient(to_bottom,#c9973f_0_6px,#5a1010_6px_12px)] sm:w-3"
            />
            <div
              className="relative aspect-[3/4] overflow-hidden bg-[#3a1a10]"
              style={{ clipPath: "url(#dfTempleNiche)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a1a10]/45 via-transparent to-transparent" />
            </div>
          </div>

          {/* stepped plinth */}
          <div className="h-2 w-full bg-[#c9973f]" />
          <div className="h-2 w-[104%] -translate-x-[2%] bg-[#a61e22]" />

          <figcaption className="mt-4 text-center">
            <p className="font-serif text-xl italic text-[#7a1717]">{title}</p>
            <p className="mt-1 text-xs leading-snug text-[#3a1a10]/65">{line}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-14 text-center">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-3 bg-[#a61e22] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#fbf1df] transition-colors hover:bg-[#3a1a10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a61e22]"
      >
        View Gallery <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>

  {/* BOTTOM: temple border */}
  <div aria-hidden className="relative border-t-2 border-[#c9973f] bg-[#8f1d1d]">
    <svg className="block h-7 w-full -scale-y-100">
      <rect width="100%" height="100%" fill="url(#dfTempleBorder)" />
    </svg>
  </div>
</section>



{/* 3rd dewali oen */}

<section className="relative overflow-hidden bg-[#f8e9c8] text-[#3a1a10]">
  {/* shared clip path: rounded temple niche */}
  <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
    <defs>
      <clipPath id="dfTempleNiche" clipPathUnits="objectBoundingBox">
        <path d="M0,1 L0,0.3 C0,0.1 0.22,0 0.5,0 C0.78,0 1,0.1 1,0.3 L1,1 Z" />
      </clipPath>
    </defs>
  </svg>

  {/* diya glow */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(243,162,26,0.32),transparent_60%)]"
  />

  {/* TOP: temple border */}
  <div aria-hidden className="relative border-b-2 border-[#c9973f] bg-[#8f1d1d]">
    <svg className="block h-7 w-full">
      <defs>
        <pattern id="dfTempleBorder" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M0,28 L14,3 L28,28 Z" fill="#c9973f" />
          <path d="M7,28 L14,13 L21,28 Z" fill="#8f1d1d" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dfTempleBorder)" />
    </svg>
  </div>

  {/* mango-leaf toranam with marigold beads */}
  <svg aria-hidden className="relative block h-10 w-full">
    <defs>
      <pattern id="dfToranam" width="34" height="40" patternUnits="userSpaceOnUse">
        <path d="M17,0 V6" stroke="#3f7a3a" strokeWidth="1.2" />
        <path d="M17,6 C9,14 11,28 17,36 C23,28 25,14 17,6 Z" fill="#3f7a3a" />
        <path d="M17,8 V32" stroke="#6fa65a" strokeWidth="0.8" />
        <circle cx="17" cy="38" r="2.4" fill="#f3a21a" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dfToranam)" />
  </svg>

  <div className="relative mx-auto max-w-[1240px] px-4 pb-14 pt-6 sm:px-[6%] sm:pb-20 sm:pt-10 xl:px-0">
    {/* header with copy */}
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center gap-3"
      >
        {/* diya */}
        <svg viewBox="0 0 24 24" className="h-6 w-6 motion-safe:animate-pulse" aria-hidden>
          <path d="M12 1.5 C14.6 5 15.4 7.4 12 10.5 C8.6 7.4 9.4 5 12 1.5 Z" fill="#f3a21a" />
          <path d="M12 4.8 C13 6.4 13.2 7.4 12 8.6 C10.8 7.4 11 6.4 12 4.8 Z" fill="#fff3c4" />
          <path d="M2.5 13 H21.5 Q20 21.5 12 21.5 Q4 21.5 2.5 13 Z" fill="#c9973f" />
          <path d="M2.5 13 H21.5" stroke="#7a1717" strokeWidth="1" />
        </svg>
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#a61e22]">
          Diwali &amp; Pongal Sale
        </p>
        {/* pongal pot */}
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <line x1="5" y1="30" x2="9" y2="4" stroke="#3f7a3a" strokeWidth="2" strokeLinecap="round" />
          <line x1="27" y1="30" x2="23" y2="4" stroke="#3f7a3a" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 12 C9 7 14 8 16 6 C18 8 23 7 23 12 Z" fill="#fff8e6" stroke="#c9973f" strokeWidth="0.8" />
          <path d="M8 12 H24 C26 18 24 27 16 27 C8 27 6 18 8 12 Z" fill="#a61e22" stroke="#c9973f" strokeWidth="1" />
          <path d="M8.6 17 H23.4" stroke="#f3c96a" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 font-serif font-light leading-[1.05]"
        style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
      >
        Light the lamps,
        <br />
        <span className="italic text-[#a61e22]">let the pot overflow.</span>
      </motion.h2>

      <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#3a1a10]/75 sm:text-base sm:leading-8">
        From Deepavali evenings to Thai Pongal mornings, dress both festivals in Dev Fashion
        silks and stitching, now at festival prices.
      </p>

      {/* offer badge (replace the offer, code and date with your own) */}
      <div className="relative mx-auto mt-8 max-w-md border-2 border-[#c9973f] bg-[#7a1717] px-6 py-5 text-[#fbf1df] shadow-[0_24px_50px_-28px_rgba(90,20,20,0.8)]">
        <span aria-hidden className="absolute -left-[7px] -top-[7px] h-3 w-3 rotate-45 bg-[#f3a21a]" />
        <span aria-hidden className="absolute -right-[7px] -top-[7px] h-3 w-3 rotate-45 bg-[#f3a21a]" />
        <span aria-hidden className="absolute -bottom-[7px] -left-[7px] h-3 w-3 rotate-45 bg-[#f3a21a]" />
        <span aria-hidden className="absolute -bottom-[7px] -right-[7px] h-3 w-3 rotate-45 bg-[#f3a21a]" />
        <p className="font-serif text-4xl font-light text-[#f3c96a] sm:text-5xl">Up to 30% off</p>
        <p className="mt-1 text-sm text-[#fbf1df]/85">On sarees, chudis and custom stitching</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
          <span className="border border-dashed border-[#c9973f] px-3 py-1 font-semibold tracking-[0.2em] text-[#f3c96a]">
            Use code DIWALIPONGAL
          </span>
          <span className="text-[#fbf1df]/75">Valid till 18 January</span>
        </div>
      </div>
    </div>

    {/* four gopuram shrines */}
    <div className="mt-14 grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-7">
      {[
        // replace these paths and titles with your own looks
        ["/images/dev_fashion/main.jpeg", "Diwali Silks", "Zari and jewel tones for the festival of lights", "Diwali"],
        ["/images/dev_fashion/durga.jpg", "Lamp-lit Festive", "Statement drapes for puja and parties", "Diwali"],
        ["/images/dev_fashion/sadhana_red_chudi.png", "Pongal Morning", "Cotton silk and red-gold chudis for the kolam", "Pongal"],
        ["/images/dev_fashion/deeps2.jpeg", "Thai Pongal Heirloom", "Pieces to wear first and pass down later", "Pongal"],
      ].map(([src, title, line, festival], i) => (
        <motion.figure
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          {/* gopuram tower: five tiers, barrel roof, three kalasams */}
          <svg viewBox="0 0 100 72" className="mx-auto -mb-px block w-[74%]" aria-hidden>
            {[38, 50, 62].map((cx) => (
              <g key={cx}>
                <line x1={cx} y1="6" x2={cx} y2="10" stroke="#c9973f" strokeWidth="1" />
                <ellipse cx={cx} cy="4.5" rx="2" ry="2.6" fill="#f3a21a" />
              </g>
            ))}
            <path d="M31,20 Q50,6 69,20 Z" fill="#7a1717" stroke="#c9973f" strokeWidth="0.8" />
            {[
              [2, 96, 60],
              [9, 82, 50],
              [16, 68, 40],
              [23, 54, 30],
              [30, 40, 20],
            ].map(([x, w, y]) => (
              <g key={y}>
                <rect x={x} y={y} width={w} height="10" fill="#a61e22" stroke="#c9973f" strokeWidth="0.8" />
                {Array.from({ length: Math.floor((w - 6) / 11) }).map((_, k, arr) => {
                  const gap = (w - 6) / arr.length;
                  return (
                    <rect
                      key={k}
                      x={x + 3 + k * gap + (gap - 5) / 2}
                      y={y + 2.5}
                      width="5"
                      height="6"
                      rx="2.5"
                      fill="#f3c96a"
                    />
                  );
                })}
              </g>
            ))}
          </svg>

          {/* pillared shrine panel */}
          <div className="relative border-2 border-[#c9973f] bg-[#7a1717] px-5 pb-3 pt-3 shadow-[0_30px_60px_-30px_rgba(90,20,20,0.7)] sm:px-6">
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-2.5 bg-[repeating-linear-gradient(to_bottom,#c9973f_0_6px,#5a1010_6px_12px)] sm:w-3"
            />
            <span
              aria-hidden
              className="absolute inset-y-0 right-0 w-2.5 bg-[repeating-linear-gradient(to_bottom,#c9973f_0_6px,#5a1010_6px_12px)] sm:w-3"
            />
            <div
              className="relative aspect-[3/4] overflow-hidden bg-[#3a1a10]"
              style={{ clipPath: "url(#dfTempleNiche)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a1a10]/45 via-transparent to-transparent" />
            </div>

            {/* festival tag */}
            <span className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 border border-[#c9973f] bg-[#f8e9c8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a1717]">
              {festival === "Diwali" ? (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                  <path d="M12 1.5 C14.6 5 15.4 7.4 12 10.5 C8.6 7.4 9.4 5 12 1.5 Z" fill="#f3a21a" />
                  <path d="M2.5 13 H21.5 Q20 21.5 12 21.5 Q4 21.5 2.5 13 Z" fill="#c9973f" />
                </svg>
              ) : (
                <svg viewBox="0 0 32 32" className="h-4 w-4" aria-hidden>
                  <line x1="5" y1="30" x2="9" y2="4" stroke="#3f7a3a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="27" y1="30" x2="23" y2="4" stroke="#3f7a3a" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 12 C9 7 14 8 16 6 C18 8 23 7 23 12 Z" fill="#fff8e6" stroke="#c9973f" strokeWidth="0.8" />
                  <path d="M8 12 H24 C26 18 24 27 16 27 C8 27 6 18 8 12 Z" fill="#a61e22" stroke="#c9973f" strokeWidth="1" />
                </svg>
              )}
              {festival}
            </span>
          </div>

          {/* stepped plinth */}
          <div className="h-2 w-full bg-[#c9973f]" />
          <div className="h-2 w-[104%] -translate-x-[2%] bg-[#a61e22]" />

          <figcaption className="mt-4 text-center">
            <p className="font-serif text-xl italic text-[#7a1717]">{title}</p>
            <p className="mt-1 text-xs leading-snug text-[#3a1a10]/65">{line}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-14 text-center">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-3 bg-[#a61e22] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#fbf1df] transition-colors hover:bg-[#3a1a10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a61e22]"
      >
        Shop the Sale <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>

  {/* BOTTOM: temple border */}
  <div aria-hidden className="relative border-t-2 border-[#c9973f] bg-[#8f1d1d]">
    <svg className="block h-7 w-full -scale-y-100">
      <rect width="100%" height="100%" fill="url(#dfTempleBorder)" />
    </svg>
  </div>
</section>




















<section className="relative overflow-hidden bg-[#5a1010] text-[#fbf1df]">
  {/* kolam dot grid, very faint */}
  <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]">
    <defs>
      <pattern id="dfKolam" width="44" height="44" patternUnits="userSpaceOnUse">
        <circle cx="11" cy="11" r="1.6" fill="#f3c96a" />
        <circle cx="33" cy="33" r="1.6" fill="#f3c96a" />
        <path d="M11,11 L33,33 M33,11 L11,33" stroke="#f3c96a" strokeWidth="0.5" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dfKolam)" />
  </svg>

  {/* warm light from the top */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(243,162,26,0.35),transparent_55%)]"
  />

  {/* hanging diya garland */}
  <svg aria-hidden className="relative block h-14 w-full">
    <defs>
      <pattern id="dfGarland" width="64" height="56" patternUnits="userSpaceOnUse">
        <path d="M0,3 Q32,16 64,3" stroke="#c9973f" strokeWidth="1.2" fill="none" />
        <path d="M32,9.5 V24" stroke="#c9973f" strokeWidth="1" />
        <path d="M32,25 C35.5,29 36.4,32 32,35.5 C27.6,32 28.5,29 32,25 Z" fill="#f3a21a" />
        <path d="M32,28.5 C33.2,30.4 33.4,31.6 32,33 C30.6,31.6 30.8,30.4 32,28.5 Z" fill="#fff3c4" />
        <path d="M24,37 H40 Q38.5,46 32,46 Q25.5,46 24,37 Z" fill="#c9973f" />
        <circle cx="0" cy="3" r="2.4" fill="#f3a21a" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dfGarland)" />
  </svg>

  <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 pb-16 pt-6 sm:px-[6%] sm:pb-24 sm:pt-10 lg:grid-cols-[5fr_7fr] lg:gap-14 xl:px-0">
    {/* LEFT: message and offer */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="text-center lg:text-left"
    >
      <p className="text-sm font-medium text-[#f3c96a]">Dev Fashion · Diwali &amp; Pongal Sale</p>

      <h2
        className="mt-4 font-serif font-light"
        style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.3 }}
      >
        தீபாவளியின் ஒளிர்விலிருந்து
        <br />
        தைப்பொங்கலின் மகிழ்ச்சி வரை
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-[#fbf1df]/80 sm:text-base sm:leading-9 lg:mx-0">
        ஒவ்வொரு பண்டிகையையும் அழகிய பட்டுப் புடவைகள் மற்றும் நேர்த்தியான டிசைனர் பிளவுஸ்களுடன்
        கொண்டாடுங்கள்! தேவ் ஃபேஷனில், உங்கள் பாரம்பரிய அழகிற்கு மேலும் மெருகூட்டுங்கள் — இப்போது
        சிறப்புப் பண்டிகை விலைகளில்!
      </p>

      {/* offer seal (replace offer, code and date with your own) */}
      <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row lg:items-center">
        <div className="relative flex h-36 w-36 shrink-0 -rotate-6 flex-col items-center justify-center rounded-full border-2 border-[#c9973f] bg-[#a61e22] text-center shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
          <span aria-hidden className="absolute inset-1.5 rounded-full border border-dashed border-[#f3c96a]/70" />
          <span className="text-[11px] font-medium text-[#fbf1df]/85">Up to</span>
          <span className="font-serif text-4xl font-light leading-none text-[#f3c96a]">30%</span>
          <span className="text-[11px] font-medium text-[#fbf1df]/85">off</span>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-sm text-[#fbf1df]/85">Sarees, chudis and designer blouses</p>
          <p className="mt-2 inline-block border border-dashed border-[#c9973f] px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#f3c96a]">
            Code DIWALIPONGAL
          </p>
          <p className="mt-2 text-xs text-[#fbf1df]/65">Valid till 18 January</p>
        </div>
      </div>

      <Link
        href="/gallery"
        className="mt-9 inline-flex items-center gap-3 bg-[#f3c96a] px-8 py-4 text-sm font-semibold text-[#3a1a10] transition-colors hover:bg-[#fbf1df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3c96a]"
      >
        Shop the Sale <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>

    {/* RIGHT: staggered arch photos */}
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6">
      {[
        // replace these paths and titles with your own looks
        ["/images/dev_fashion/main.jpeg", "தீபாவளி", "Diwali Silks", "Zari and jewel tones for the festival of lights"],
        ["/images/dev_fashion/durga.jpg", "தீபாவளி", "Lamp-lit Festive", "Statement drapes for puja and parties"],
        ["/images/dev_fashion/sadhana_red_chudi.png", "தைப்பொங்கல்", "Pongal Morning", "Red-gold chudis for the kolam"],
        ["/images/dev_fashion/deeps2.jpeg", "தைப்பொங்கல்", "Thai Pongal Heirloom", "Pieces to wear now, keep forever"],
      ].map(([src, festival, title, line], i) => (
        <motion.figure
          key={src}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`group ${i % 2 === 1 ? "sm:mt-16" : ""}`}
        >
          {/* arch with double zari border */}
          <div className="rounded-t-full border border-[#c9973f] p-1.5">
            <div className="aspect-[3/4] overflow-hidden rounded-t-full border border-[#c9973f]/60 bg-[#3a1a10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>

          <figcaption className="mt-4 text-center">
            <p className="text-sm font-medium text-[#f3c96a]">{festival}</p>
            <p className="mt-0.5 font-serif text-xl italic">{title}</p>
            <p className="mt-1 text-xs leading-snug text-[#fbf1df]/65">{line}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  </div>

  {/* gold zari edge */}
  <div aria-hidden className="h-1.5 w-full bg-[repeating-linear-gradient(to_right,#c9973f_0_14px,#5a1010_14px_20px)]" />
</section>









<section
  className="relative overflow-hidden bg-[#f3ead6] text-[#1f2a4a]"
  style={{
    // woven cotton texture: fine warp and weft lines
    backgroundImage:
      "repeating-linear-gradient(0deg, rgba(31,42,74,0.05) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(31,42,74,0.05) 0 1px, transparent 1px 3px)",
  }}
>
  {/* shared patterns: kattam checks and loose warp threads */}
  <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
    <defs>
      <pattern id="dfKattam" width="32" height="32" patternUnits="userSpaceOnUse">
        <rect width="32" height="32" fill="#9b2c1f" />
        <rect y="8" width="32" height="6" fill="#1f2a4a" opacity="0.88" />
        <rect x="8" width="6" height="32" fill="#1f2a4a" opacity="0.88" />
        <rect y="22" width="32" height="2" fill="#d9a21b" />
        <rect x="22" width="2" height="32" fill="#d9a21b" />
        <rect y="1" width="32" height="1" fill="#f3ead6" opacity="0.5" />
        <rect x="1" width="1" height="32" fill="#f3ead6" opacity="0.5" />
      </pattern>
      <pattern id="dfThread" width="24" height="44" patternUnits="userSpaceOnUse">
        <g strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="0" x2="3" y2="42" stroke="#9b2c1f" />
          <line x1="7" y1="0" x2="7" y2="34" stroke="#c9b48a" />
          <line x1="11" y1="0" x2="11" y2="40" stroke="#1f2a4a" />
          <line x1="15" y1="0" x2="15" y2="36" stroke="#d9a21b" />
          <line x1="19" y1="0" x2="19" y2="43" stroke="#9b2c1f" />
          <line x1="23" y1="0" x2="23" y2="32" stroke="#c9b48a" />
        </g>
      </pattern>
    </defs>
  </svg>

  {/* selvedge stripes down both sides */}
  {["left-0", "right-0"].map((side) => (
    <span
      key={side}
      aria-hidden
      className={`absolute inset-y-0 ${side} w-3 sm:w-4`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, #9b2c1f 0 3px, #f3ead6 3px 5px, #1f2a4a 5px 8px, #d9a21b 8px 10px, #f3ead6 10px 12px)",
      }}
    />
  ))}

  {/* TOP: kattam band with warp threads hanging below it */}
  <div aria-hidden className="relative">
    <svg className="block h-9 w-full">
      <rect width="100%" height="100%" fill="url(#dfKattam)" />
    </svg>
    <svg className="block h-11 w-full">
      <rect width="100%" height="100%" fill="url(#dfThread)" />
    </svg>
  </div>

  <div className="relative mx-auto max-w-[1180px] px-6 pb-16 pt-8 sm:px-[6%] sm:pb-24 sm:pt-12 xl:px-0">
    {/* header */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-sm font-medium text-[#9b2c1f]">கைத்தறி · Dev Fashion Diwali &amp; Pongal Sale</p>

      <h2
        className="mt-4 font-serif font-normal"
        style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)", lineHeight: 1.3 }}
      >
        தீபாவளியின் ஒளிர்விலிருந்து
        <br />
        தைப்பொங்கலின் மகிழ்ச்சி வரை
      </h2>

      {/* woven rule */}
      <svg aria-hidden className="mx-auto mt-5 block h-2.5 w-40">
        <rect width="100%" height="100%" fill="url(#dfKattam)" />
      </svg>

      <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#1f2a4a]/80 sm:text-base sm:leading-9">
        ஒவ்வொரு பண்டிகையையும் அழகிய பட்டுப் புடவைகள் மற்றும் நேர்த்தியான டிசைனர் பிளவுஸ்களுடன்
        கொண்டாடுங்கள்! தேவ் ஃபேஷனில், உங்கள் பாரம்பரிய அழகிற்கு மேலும் மெருகூட்டுங்கள் — இப்போது
        சிறப்புப் பண்டிகை விலைகளில்!
      </p>

      {/* woven garment label with the offer (replace offer, code and date with your own) */}
      <div className="relative mx-auto mt-9 inline-block">
        <svg aria-hidden className="absolute inset-0 h-full w-full shadow-[0_18px_36px_-22px_rgba(31,42,74,0.7)]">
          <rect width="100%" height="100%" fill="url(#dfKattam)" />
        </svg>
        <div className="relative m-2.5 border border-dashed border-[#d9a21b] bg-[#f8f1e0] px-8 py-4 sm:px-12">
          <p className="font-serif text-4xl font-normal text-[#9b2c1f] sm:text-5xl">Up to 30% off</p>
          <p className="mt-1 text-sm">Sarees, chudis and designer blouses</p>
          <p className="mt-3 text-xs">
            <span className="border border-dashed border-[#1f2a4a]/60 px-2.5 py-1 font-semibold tracking-[0.16em]">
              Code DIWALIPONGAL
            </span>
            <span className="ml-3 text-[#1f2a4a]/65">Valid till 18 January</span>
          </p>
        </div>
      </div>
    </motion.div>

    {/* four cloth swatches */}
    <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-4 lg:gap-x-8">
      {[
        // replace these paths and titles with your own looks
        ["/images/dev_fashion/main.jpeg", "தீபாவளி", "Diwali Silks", "Zari and jewel tones for the festival of lights"],
        ["/images/dev_fashion/durga.jpg", "தீபாவளி", "Lamp-lit Festive", "Statement drapes for puja and parties"],
        ["/images/dev_fashion/sadhana_red_chudi.png", "தைப்பொங்கல்", "Pongal Morning", "Red-gold chudis for the kolam"],
        ["/images/dev_fashion/deeps2.jpeg", "தைப்பொங்கல்", "Thai Pongal Heirloom", "Pieces to wear now, keep forever"],
      ].map(([src, festival, title, line], i) => (
        <motion.figure
          key={src}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`group relative ${i % 2 ? "lg:mt-10 lg:rotate-[1.2deg]" : "lg:-rotate-[1.2deg]"}`}
        >
          {/* hang tag */}
          <span className="absolute -top-3 left-4 z-10 flex items-center gap-2 border border-[#9b2c1f]/60 bg-[#d9a21b] px-3 py-1 text-xs font-semibold text-[#1f2a4a] shadow-md">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#f3ead6] ring-1 ring-[#1f2a4a]/60" />
            {festival}
          </span>

          {/* swatch with stitched edge */}
          <div className="relative bg-[#fbf6ea] p-3 shadow-[0_26px_44px_-26px_rgba(31,42,74,0.75)]">
            <span aria-hidden className="pointer-events-none absolute inset-1.5 border border-dashed border-[#9b2c1f]/55" />
            <div className="aspect-[3/4] overflow-hidden bg-[#3a1a10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* loose warp threads along the swatch edge */}
          <svg aria-hidden className="mx-auto block h-6 w-[94%]">
            <rect width="100%" height="100%" fill="url(#dfThread)" />
          </svg>

          <figcaption className="mt-3 text-center">
            <p className="font-serif text-xl italic text-[#9b2c1f]">{title}</p>
            <p className="mt-1 text-xs leading-snug text-[#1f2a4a]/70">{line}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-14 text-center">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-3 bg-[#1f2a4a] px-8 py-4 text-sm font-semibold text-[#f3ead6] transition-colors hover:bg-[#9b2c1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f2a4a]"
      >
        Shop the Sale <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>

  {/* BOTTOM: kattam band */}
  <div aria-hidden className="relative">
    <svg className="block h-9 w-full">
      <rect width="100%" height="100%" fill="url(#dfKattam)" />
    </svg>
  </div>
</section>




































































































































      {/* ------------------------- LOOKBOOK LIGHTBOX ------------------------- */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            initial={{ opacity: 0, clipPath: reduce ? "inset(0)" : "inset(6% 6% 6% 6%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex h-[100dvh] flex-col bg-[var(--plum)] text-[var(--ivory)] lg:flex-row"
          >
            <button
              ref={closeRef}
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--plum)]/80 text-[var(--ivory)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            {/* garment (swipe on touch) */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragSnapToOrigin
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
              className="relative h-[54dvh] w-full shrink-0 bg-[var(--wine)]/40 lg:h-full lg:flex-1"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: dir * slide }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * slide }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 p-3 sm:p-8"
                >
                  <div className="relative h-full w-full">
                    <Image src={activeItem.src} alt={activeItem.alt} fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="pointer-events-none object-contain" />
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prev}
                aria-label="Previous design"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--plum)]/70 transition-colors hover:bg-[var(--gold)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next design"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--plum)]/70 transition-colors hover:bg-[var(--gold)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[var(--plum)]/80 px-3 py-1 font-serif text-xs tracking-[0.2em] text-[var(--ivory)]" aria-live="polite">
                {String((activeImageIndex ?? 0) + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
            </motion.div>

            {/* details */}
            <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto border-t border-[var(--gold)]/30 px-6 py-8 sm:px-10 lg:w-[380px] lg:flex-none lg:border-l lg:border-t-0 lg:py-14 xl:w-[440px]">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">{activeItem.category}</p>
                <h3 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">{activeItem.title}</h3>
                <span className="mt-6 block h-px w-16 bg-[var(--gold)]" />
                <p className="mt-6 text-sm leading-relaxed text-[var(--ivory)]/75 sm:text-base">{activeItem.description}</p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(activeItem.category)}&design=${encodeURIComponent(activeItem.title)}#booking`}
                  onClick={close}
                  className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--plum)] transition-colors hover:bg-[var(--ivory)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
                >
                  Request Customization <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`${WA}?text=${encodeURIComponent(`Hi Dev Fashion, I like "${activeItem.title}" and would like a custom version.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[var(--ivory)]/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
                >
                  WhatsApp Stylist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}