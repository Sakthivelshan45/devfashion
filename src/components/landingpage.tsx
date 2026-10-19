
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   AnimatePresence,
//   motion,
//   useAnimationFrame,
//   useMotionValue,
//   useMotionValueEvent,
//   useReducedMotion,
//   useSpring,
//   useTransform,
//   type MotionValue,
// } from "framer-motion";
// import { ArrowLeft, ArrowRight, Globe, Ruler, Scissors } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Designs shown on the 3D ring (8 looks = 45° apart).                       */
// /*  Swap any `src` for another photo from /public/images/dev_fashion/.        */
// /* -------------------------------------------------------------------------- */
// type Look = { src: string; tag: string };

// const looks: Look[] = [
//   { src: "/images/dev_fashion/main.jpeg", tag: "Bridal Couture" },
//   { src: "/images/dev_fashion/sadhana_main.png", tag: "Silk Couture" },
//   { src: "/images/dev_fashion/aari1.jpg", tag: "Aari Blouse" },
//   { src: "/images/dev_fashion/sadhana_red2.png", tag: "Royal Zardozi" },
//   { src: "/images/dev_fashion/aari2.jpg", tag: "Custom Blouse" },
//   { src: "/images/dev_fashion/sadhana_blue.png", tag: "Sapphire Velvet" },
//   { src: "/images/dev_fashion/aari3.jpg", tag: "Bespoke Fit" },
//   { src: "/dev_hero.png", tag: "Master Designer" },
// ];

// const N = looks.length;
// const STEP = 360 / N;
// const pad = (n: number) => String(n).padStart(2, "0");

// /* -------------------------------------------------------------------------- */
// /*  One card on the ring                                                      */
// /* -------------------------------------------------------------------------- */
// function RingCard({
//   look,
//   index,
//   w,
//   h,
//   r,
//   smooth,
//   priority,
// }: {
//   look: Look;
//   index: number;
//   w: number;
//   h: number;
//   r: number;
//   smooth: MotionValue<number>;
//   priority: boolean;
// }) {
//   // Cards facing the viewer are bright, cards turning away fade out.
//   const opacity = useTransform(smooth, (v: number) => {
//     const a = ((((index * STEP + v) % 360) + 540) % 360) - 180; // -180..180, 0 = front
//     const f = Math.cos((a * Math.PI) / 180);
//     return 0.28 + 0.72 * Math.max(f, 0);
//   });

//   return (
//     <div
//       className="absolute left-1/2 top-1/2"
//       style={{
//         width: w,
//         height: h,
//         marginLeft: -w / 2,
//         marginTop: -h / 2,
//         transform: `rotateY(${index * STEP}deg) translateZ(${r}px)`,
//         backfaceVisibility: "hidden",
//         WebkitBackfaceVisibility: "hidden",
//       }}
//     >
//       <motion.div
//         style={{ opacity }}
//         className="h-full w-full border border-[#E5D9C5] bg-white p-[6px] shadow-[0_40px_70px_-25px_rgba(20,19,18,0.5)]"
//       >
//         <div className="relative h-full w-full overflow-hidden bg-[#F4F0EA]">
//           <Image
//             src={look.src}
//             alt={`${look.tag} – Dev Fashion`}
//             fill
//             quality={75}
//             priority={priority}
//             sizes="260px"
//             draggable={false}
//             className="pointer-events-none select-none object-cover object-top"
//           />
//           <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-3 pb-3 pt-12">
//             <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#E8CE98]">
//               {look.tag}
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Hero                                                                      */
// /* -------------------------------------------------------------------------- */
// export default function Hero3D() {
//   const reduce = useReducedMotion();

//   /* responsive card size + ring radius (radius keeps the cards just touching) */
//   const [dims, setDims] = useState({ w: 230, h: 307, r: 302 });
//   useEffect(() => {
//     const calc = () => {
//       const vw = window.innerWidth;
//       const w = vw < 640 ? 140 : vw < 1024 ? 190 : 230;
//       const h = Math.round((w * 4) / 3);
//       const r = Math.round(w / 2 / Math.tan(Math.PI / N)) + 24;
//       setDims({ w, h, r });
//     };
//     calc();
//     window.addEventListener("resize", calc);
//     return () => window.removeEventListener("resize", calc);
//   }, []);

//   /* ring rotation: auto-spin, drag to rotate, springs for smoothness */
//   const rotation = useMotionValue(0);
//   const smooth = useSpring(rotation, { stiffness: 90, damping: 22, mass: 0.6 });
//   const dragging = useRef(false);
//   const hovering = useRef(false);

//   useAnimationFrame((_, delta) => {
//     if (reduce || dragging.current || hovering.current) return;
//     rotation.set(rotation.get() - delta * 0.01); // ~10° per second
//   });

//   /* which look is in front */
//   const [active, setActive] = useState(0);
//   useMotionValueEvent(rotation, "change", (v) => {
//     const idx = (((Math.round(-v / STEP) % N) + N) % N) as number;
//     setActive((p) => (p === idx ? p : idx));
//   });

//   const goTo = (idx: number) => {
//     const cur = rotation.get();
//     const target = -idx * STEP;
//     const delta = ((((target - cur) % 360) + 540) % 360) - 180; // shortest way round
//     rotation.set(cur + delta);
//   };

//   /* mouse parallax tilt */
//   const px = useMotionValue(0);
//   const py = useMotionValue(0);
//   const sx = useSpring(px, { stiffness: 60, damping: 18 });
//   const sy = useSpring(py, { stiffness: 60, damping: 18 });
//   const tiltX = useTransform(sy, [-1, 1], [14, 2]);
//   const tiltY = useTransform(sx, [-1, 1], [-10, 10]);

//   const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
//     if (reduce || e.pointerType !== "mouse") return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
//     py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
//   };

//   return (
//     <section className="relative overflow-hidden border-b border-[#EFEBE4] bg-[#FAF8F5] pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24 lg:pt-10">
//       {/* ambient depth: glows + giant ghost word */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#C5A059]/15 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-0 h-[460px] w-[460px] rounded-full bg-[#E6C5C5]/30 blur-3xl" />
//       <span
//         aria-hidden
//         className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[20vw] font-light leading-none text-[#B38E46]/[0.07] lg:left-[68%]"
//       >
//         COUTURE
//       </span>

//       <div className="site-container relative">
//         <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 xl:gap-12">
//           {/* ------------------------------ Text ------------------------------ */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.1 }}
//             className="relative z-10 flex flex-col text-[#141312]"
//           >
//             <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#B38E46]">
//               ✦ South Indian Bridal Couture &bull; Coimbatore
//             </span>

//             <h1 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-wide sm:text-6xl lg:text-7xl">
//               Dev Fashion
//               <span className="mt-3 block font-serif text-2xl font-normal normal-case italic tracking-normal text-[#B38E46] sm:text-4xl">
//                 Crafting Elegance, Designed for You
//               </span>
//             </h1>

//             <div className="my-6 h-px w-16 bg-[#B38E46]" />

//             <p className="mb-8 max-w-[520px] text-left text-sm font-light leading-relaxed text-[#5A5652] sm:text-base">
//               We are delighted to be one of the city&apos;s leading Bridal Blouse
//               Designers, providing an extraordinary stitching experience every
//               time. Come and explore our collection &mdash; your wardrobe will
//               never look the same, and never at the cost of your budget.
//             </p>

//             <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
//               <Link
//                 href="/contact#booking"
//                 className="flex h-[52px] w-full items-center justify-center gap-2.5 border border-[#141312] bg-[#141312] px-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#FAF8F5] shadow-sm transition-all duration-300 hover:border-[#B38E46] hover:bg-[#B38E46] hover:text-white sm:w-auto"
//               >
//                 Book Consultation
//                 <ArrowRight className="h-4 w-4 stroke-[1.5]" />
//               </Link>
//               <Link
//                 href="/gallery"
//                 className="flex h-[52px] w-full items-center justify-center border border-[#141312] bg-transparent px-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#141312] transition-all duration-300 hover:bg-[#141312] hover:text-[#FAF8F5] sm:w-auto"
//               >
//                 Explore Portfolio
//               </Link>
//             </div>

//             <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#E5D9C5] pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A5652]">
//               <li className="flex items-center gap-2">
//                 <Ruler className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
//                 Perfect Fit Guarantee
//               </li>
//               <li className="flex items-center gap-2">
//                 <Scissors className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
//                 Aari &amp; Zardozi
//               </li>
//               <li className="flex items-center gap-2">
//                 <Globe className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
//                 NRI Virtual Styling
//               </li>
//             </ul>
//           </motion.div>

//           {/* ---------------------------- 3D stage ---------------------------- */}
//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//               onPointerMove={onMove}
//               onPointerEnter={(e) => {
//                 if (e.pointerType === "mouse") hovering.current = true;
//               }}
//               onPointerLeave={(e) => {
//                 if (e.pointerType !== "mouse") return;
//                 hovering.current = false;
//                 px.set(0);
//                 py.set(0);
//               }}
//               onPanStart={() => (dragging.current = true)}
//               onPan={(_, info) => rotation.set(rotation.get() + info.delta.x * 0.35)}
//               onPanEnd={() => (dragging.current = false)}
//               style={{ perspective: 1400, touchAction: "pan-y" }}
//               className="relative h-[420px] cursor-grab select-none active:cursor-grabbing sm:h-[500px] lg:h-[580px]"
//             >
//               {/* soft floor shadow */}
//               <div className="pointer-events-none absolute bottom-[7%] left-1/2 h-12 w-[70%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(20,19,18,0.3),transparent_70%)] blur-md" />

//               {/* tilt layer (follows the mouse) */}
//               <motion.div
//                 style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
//                 className="absolute inset-0"
//               >
//                 {/* the ring */}
//                 <motion.div
//                   style={{ rotateY: smooth, transformStyle: "preserve-3d" }}
//                   className="absolute inset-0"
//                 >
//                   {looks.map((look, i) => (
//                     <RingCard
//                       key={look.src}
//                       look={look}
//                       index={i}
//                       w={dims.w}
//                       h={dims.h}
//                       r={dims.r}
//                       smooth={smooth}
//                       priority={i < 3}
//                     />
//                   ))}
//                 </motion.div>

//                 {/* floating badges at different depths */}
//                 <div
//                   className="absolute left-0 top-[10%] hidden sm:block"
//                   style={{ transform: "translateZ(260px)" }}
//                 >
//                   <motion.div
//                     animate={reduce ? undefined : { y: [0, -12, 0] }}
//                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                     className="border border-[#E5D9C5] bg-white/95 px-5 py-3 shadow-xl"
//                   >
//                     <span className="block font-serif text-3xl font-semibold leading-none text-[#B38E46]">
//                       10K+
//                     </span>
//                     <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#5A5652]">
//                       Happy Customers
//                     </span>
//                   </motion.div>
//                 </div>

//                 <div
//                   className="absolute bottom-[18%] right-0 hidden sm:block"
//                   style={{ transform: "translateZ(320px)" }}
//                 >
//                   <motion.div
//                     animate={reduce ? undefined : { y: [0, 12, 0] }}
//                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
//                     className="bg-[#141312] px-5 py-3 text-[#FAF8F5] shadow-xl"
//                   >
//                     <span className="block font-serif text-3xl font-semibold leading-none text-[#E8CE98]">
//                       5K+
//                     </span>
//                     <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
//                       Bridal Orders
//                     </span>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* caption + controls */}
//             <div className="mt-2 flex items-center justify-between gap-4">
//               <button
//                 onClick={() => goTo(active - 1)}
//                 aria-label="Previous look"
//                 className="flex h-11 w-11 items-center justify-center border border-[#141312]/70 text-[#141312] transition-colors hover:bg-[#141312] hover:text-white"
//               >
//                 <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
//               </button>

//               <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
//                 <div className="h-5 overflow-hidden text-center">
//                   <AnimatePresence mode="wait">
//                     <motion.p
//                       key={active}
//                       initial={{ y: 14, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       exit={{ y: -14, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#141312]"
//                     >
//                       {looks[active].tag}
//                       <span className="ml-3 text-[#B38E46]">
//                         {pad(active + 1)} / {pad(N)}
//                       </span>
//                     </motion.p>
//                   </AnimatePresence>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   {looks.map((l, i) => (
//                     <button
//                       key={l.src}
//                       onClick={() => goTo(i)}
//                       aria-label={`Show ${l.tag}`}
//                       className="flex h-6 items-center"
//                     >
//                       <span
//                         className={`block h-[3px] rounded-full transition-all duration-300 ${
//                           i === active ? "w-6 bg-[#B38E46]" : "w-2 bg-[#D4C3A3]"
//                         }`}
//                       />
//                     </button>
//                   ))}
//                 </div>
//                 <span className="text-[9px] uppercase tracking-[0.3em] text-[#5A5652]/70">
//                   Drag to explore
//                 </span>
//               </div>

//               <button
//                 onClick={() => goTo(active + 1)}
//                 aria-label="Next look"
//                 className="flex h-11 w-11 items-center justify-center border border-[#141312]/70 text-[#141312] transition-colors hover:bg-[#141312] hover:text-white"
//               >
//                 <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










//-------------------------------------------










// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionTemplate,
//   useMotionValue,
//   useReducedMotion,
//   useSpring,
//   useTransform,
//   type MotionValue,
// } from "framer-motion";
// import { ArrowLeft, ArrowRight, Globe, Ruler, Scissors } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  All looks (20). Even positions go on the UPPER ring, odd on the LOWER ring */
// /*  so both rings get a mix. Add / swap photos here – keep the total EVEN.     */
// /* -------------------------------------------------------------------------- */
// type Look = { src: string; tag: string };

// const looks: Look[] = [
//   { src: "/images/dev_fashion/main.jpeg", tag: "Bridal Couture" },
//   { src: "/images/dev_fashion/deeps2.jpeg", tag: "Ethnic Editorial" },
//   { src: "/images/dev_fashion/sadhana_main.png", tag: "Royal Velvet Aurora" },
//   { src: "/images/dev_fashion/deepika1.jpg", tag: "Sapphire Velvet" },
//   { src: "/images/dev_fashion/sadhana_red2.png", tag: "Royal Zardozi" },
//   { src: "/images/dev_fashion/ammu.jpeg", tag: "Sheer Cutwork" },
//   { src: "/images/dev_fashion/sadhana_blue.png", tag: "Sapphire Silk" },
//   { src: "/dev_hero.png", tag: "Master Designer" },
//   { src: "/images/dev_fashion/angel1.png", tag: "Party Wear" },
//   { src: "/images/dev_fashion/sadhana_beach1.jpg", tag: "Seaside Edit" },
//   { src: "/images/dev_fashion/sadhana_blue2.png", tag: "Midnight Blue" },
//   { src: "/images/dev_fashion/sadhana_red_chudi.png", tag: "Crimson Chudi" },
//   { src: "/images/dev_fashion/sadhana_smile_flowers.png", tag: "Floral Muse" },
//   { src: "/images/dev_fashion/sadhana_smile_udha.png", tag: "Festive Glow" },
//   { src: "/images/dev_fashion/sadhana_smile5.png", tag: "Signature Smile" },
//   { src: "/images/dev_fashion/sadhana_smile6.png", tag: "Everyday Elegance" },
//   { src: "/images/dev_fashion/sadhana_temple.png", tag: "Temple Heritage" },
//   { src: "/images/dev_fashion/sadhana_vilet.png", tag: "Violet Couture" },
//   { src: "/images/dev_fashion/aari1.jpg", tag: "Aari Blouse" },
//   { src: "/images/dev_fashion/aari2.jpg", tag: "Custom Blouse" },
// ];

// const upper = looks.filter((_, i) => i % 2 === 0);
// const lower = looks.filter((_, i) => i % 2 === 1);
// const PER = upper.length;
// const STEP = 360 / PER;
// const EASE = [0.22, 1, 0.36, 1] as const;

// /* gold dust floating in 3D (fixed values → no hydration mismatch) */
// const dust = [
//   { l: "6%", t: "14%", z: 140, s: 4, d: 0 },
//   { l: "18%", t: "72%", z: 220, s: 3, d: 1.2 },
//   { l: "30%", t: "8%", z: -120, s: 3, d: 0.6 },
//   { l: "44%", t: "88%", z: 180, s: 5, d: 2 },
//   { l: "58%", t: "6%", z: 260, s: 3, d: 0.3 },
//   { l: "70%", t: "80%", z: -80, s: 4, d: 1.8 },
//   { l: "82%", t: "20%", z: 200, s: 5, d: 0.9 },
//   { l: "92%", t: "62%", z: 120, s: 3, d: 2.4 },
//   { l: "12%", t: "44%", z: -160, s: 4, d: 1.5 },
//   { l: "88%", t: "92%", z: 90, s: 3, d: 0.1 },
// ];

// /* -------------------------------------------------------------------------- */
// /*  One card on a ring                                                        */
// /* -------------------------------------------------------------------------- */
// function RingCard({
//   look,
//   index,
//   w,
//   h,
//   r,
//   smooth,
//   priority,
// }: {
//   look: Look;
//   index: number;
//   w: number;
//   h: number;
//   r: number;
//   smooth: MotionValue<number>;
//   priority: boolean;
// }) {
//   // 1 = facing the viewer, -1 = facing away
//   const front = useTransform(smooth, (v: number) => {
//     const a = ((((index * STEP + v) % 360) + 540) % 360) - 180;
//     return Math.cos((a * Math.PI) / 180);
//   });
//   const opacity = useTransform(front, (f: number) => 0.28 + 0.72 * Math.max(f, 0));
//   const borderColor = useTransform(front, (f: number) => (f > 0.97 ? "#B38E46" : "#E5D9C5"));
//   const boxShadow = useTransform(front, (f: number) =>
//     f > 0.97
//       ? "0 0 0 1px #B38E46, 0 45px 80px -25px rgba(179,142,70,0.6)"
//       : "0 40px 70px -25px rgba(20,19,18,0.5)"
//   );
//   // glossy foil sheen that sweeps across the card as the ring turns
//   const sheenX = useTransform(smooth, (v: number) => {
//     const a = ((((index * STEP + v) % 360) + 540) % 360) - 180;
//     return a * 1.3;
//   });

//   return (
//     <div
//       className="absolute left-1/2 top-1/2"
//       style={{
//         width: w,
//         height: h,
//         marginLeft: -w / 2,
//         marginTop: -h / 2,
//         transform: `rotateY(${index * STEP}deg) translateZ(${r}px)`,
//         backfaceVisibility: "hidden",
//         WebkitBackfaceVisibility: "hidden",
//       }}
//     >
//       <motion.div
//         style={{ opacity, borderColor, boxShadow }}
//         className="h-full w-full border bg-white p-[5px]"
//       >
//         <div className="relative h-full w-full overflow-hidden bg-[#F4F0EA]">
//           <Image
//             src={look.src}
//             alt={`${look.tag} – Dev Fashion`}
//             fill
//             quality={75}
//             priority={priority}
//             sizes="200px"
//             draggable={false}
//             className="pointer-events-none select-none object-cover object-top"
//           />
//           <motion.div
//             aria-hidden
//             style={{
//               x: sheenX,
//               background:
//                 "linear-gradient(105deg, transparent 42%, rgba(255,255,255,0.32) 50%, transparent 58%)",
//             }}
//             className="pointer-events-none absolute inset-y-0 -left-full w-[300%]"
//           />
//           <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-2.5 pb-2.5 pt-10">
//             <span className="block truncate text-[7px] font-semibold uppercase tracking-[0.26em] text-[#E8CE98] sm:text-[8px]">
//               {look.tag}
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  One tier (ring) of cards                                                  */
// /* -------------------------------------------------------------------------- */
// function Tier({
//   items,
//   offsetY,
//   smooth,
//   dims,
//   reduce,
//   floatFrom,
// }: {
//   items: Look[];
//   offsetY: number;
//   smooth: MotionValue<number>;
//   dims: { w: number; h: number; r: number };
//   reduce: boolean | null;
//   floatFrom: number;
// }) {
//   return (
//     <div
//       className="absolute inset-0"
//       style={{ transform: `translateY(${offsetY}px)`, transformStyle: "preserve-3d" }}
//     >
//       <motion.div
//         style={{ rotateY: smooth, transformStyle: "preserve-3d" }}
//         animate={reduce ? undefined : { y: [0, floatFrom, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute inset-0"
//       >
//         {items.map((look, i) => (
//           <RingCard
//             key={look.src}
//             look={look}
//             index={i}
//             w={dims.w}
//             h={dims.h}
//             r={dims.r}
//             smooth={smooth}
//             priority={i < 2}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Hero                                                                      */
// /* -------------------------------------------------------------------------- */
// export default function Hero3D() {
//   const reduce = useReducedMotion();

//   /* responsive sizes: card size → ring radius so cards just touch */
//   const [dims, setDims] = useState({ w: 175, h: 233, r: 291, gap: 16 });
//   useEffect(() => {
//     const calc = () => {
//       const vw = window.innerWidth;
//       const w = vw < 640 ? 112 : vw < 1024 ? 150 : 175;
//       const h = Math.round((w * 4) / 3);
//       const r = Math.round(w / 2 / Math.tan(Math.PI / PER)) + 20;
//       setDims({ w, h, r, gap: vw < 640 ? 12 : 16 });
//     };
//     calc();
//     window.addEventListener("resize", calc);
//     return () => window.removeEventListener("resize", calc);
//   }, []);

//   const tierOffset = (dims.h + dims.gap) / 2; // upper = -offset, lower = +offset
//   const discSize = 2 * (dims.r + 40);
//   const discY = tierOffset + dims.h / 2 + 22;

//   /* two rings that turn in opposite directions (start spun, settle on load) */
//   const rotA = useMotionValue(140);
//   const rotB = useMotionValue(-140);
//   const smoothA = useSpring(rotA, { stiffness: 90, damping: 22, mass: 0.6 });
//   const smoothB = useSpring(rotB, { stiffness: 90, damping: 22, mass: 0.6 });
//   const dragging = useRef(false);
//   const hovering = useRef(false);

//   useEffect(() => {
//     rotA.set(0);
//     rotB.set(0);
//   }, [rotA, rotB]);

//   useAnimationFrame((_, delta) => {
//     if (reduce || dragging.current || hovering.current) return;
//     rotA.set(rotA.get() - delta * 0.009);
//     rotB.set(rotB.get() + delta * 0.007);
//   });

//   const nudge = (dir: number) => {
//     rotA.set(rotA.get() + dir * STEP);
//     rotB.set(rotB.get() - dir * STEP);
//   };

//   /* mouse parallax tilt + gold spotlight that follows the cursor */
//   const px = useMotionValue(0);
//   const py = useMotionValue(0);
//   const sx = useSpring(px, { stiffness: 60, damping: 18 });
//   const sy = useSpring(py, { stiffness: 60, damping: 18 });
//   const tiltX = useTransform(sy, [-1, 1], [14, 2]);
//   const tiltY = useTransform(sx, [-1, 1], [-12, 12]);
//   const spotX = useTransform(sx, (v: number) => (v + 1) * 50);
//   const spotY = useTransform(sy, (v: number) => (v + 1) * 50);
//   const spotlight = useMotionTemplate`radial-gradient(circle at ${spotX}% ${spotY}%, rgba(197,160,89,0.28), transparent 55%)`;

//   const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
//     if (reduce || e.pointerType !== "mouse") return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
//     py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
//   };

//   return (
//     <section className="relative overflow-hidden border-b border-[#EFEBE4] bg-[#FAF8F5] pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24 lg:pt-10">
//       {/* ambient depth: glows + giant ghost word */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#C5A059]/15 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-0 h-[460px] w-[460px] rounded-full bg-[#E6C5C5]/30 blur-3xl" />
//       <span
//         aria-hidden
//         className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[20vw] font-light leading-none text-[#B38E46]/[0.07] lg:left-[68%]"
//       >
//         COUTURE
//       </span>

//       <div className="site-container relative">
//         <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 xl:gap-12">
//           {/* ------------------------------ Text ------------------------------ */}
//           <div className="relative z-10 flex flex-col text-[#141312]">
//             <motion.span
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.05 }}
//               className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#B38E46]"
//             >
//               ✦ South Indian Bridal Couture &bull; Coimbatore
//             </motion.span>

//             <h1 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-wide sm:text-6xl lg:text-7xl">
//               <span className="block overflow-hidden pb-1">
//                 <motion.span
//                   className="block"
//                   initial={{ y: "105%" }}
//                   animate={{ y: 0 }}
//                   transition={{ duration: 1, delay: 0.15, ease: EASE }}
//                 >
//                   Dev Fashion
//                 </motion.span>
//               </span>
//               <span className="mt-2 block overflow-hidden pb-2 font-serif text-2xl font-normal normal-case italic tracking-normal text-[#B38E46] sm:text-4xl">
//                 <motion.span
//                   className="block"
//                   initial={{ y: "110%" }}
//                   animate={{ y: 0 }}
//                   transition={{ duration: 1, delay: 0.35, ease: EASE }}
//                 >
//                   Crafting Elegance, Designed for You
//                 </motion.span>
//               </span>
//             </h1>

//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
//               style={{ originX: 0 }}
//               className="my-6 h-px w-16 bg-[#B38E46]"
//             />

//             <motion.p
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.6 }}
//               className="mb-8 max-w-[520px] text-left text-sm font-light leading-relaxed text-[#5A5652] sm:text-base"
//             >
//               We are delighted to be one of the city&apos;s leading Bridal Blouse
//               Designers, providing an extraordinary stitching experience every
//               time. Come and explore our collection &mdash; your wardrobe will
//               never look the same, and never at the cost of your budget.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.75 }}
//               className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
//             >
//               <Link
//                 href="/contact#booking"
//                 className="flex h-[52px] w-full items-center justify-center gap-2.5 border border-[#141312] bg-[#141312] px-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#FAF8F5] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B38E46] hover:bg-[#B38E46] hover:text-white hover:shadow-lg sm:w-auto"
//               >
//                 Book Consultation
//                 <ArrowRight className="h-4 w-4 stroke-[1.5]" />
//               </Link>
//               <Link
//                 href="/gallery"
//                 className="flex h-[52px] w-full items-center justify-center border border-[#141312] bg-transparent px-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#141312] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141312] hover:text-[#FAF8F5] sm:w-auto"
//               >
//                 Explore Portfolio
//               </Link>
//             </motion.div>

//             <motion.ul
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//               className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#E5D9C5] pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A5652]"
//             >
//               <li className="flex items-center gap-2">
//                 <Ruler className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
//                 Perfect Fit Guarantee
//               </li>
//               <li className="flex items-center gap-2">
//                 <Scissors className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
//                 Aari &amp; Zardozi
//               </li>
//               <li className="flex items-center gap-2">
//                 <Globe className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
//                 NRI Virtual Styling
//               </li>
//             </motion.ul>
//           </div>

//           {/* ---------------------------- 3D stage ---------------------------- */}
//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.2, ease: EASE }}
//               onPointerMove={onMove}
//               onPointerEnter={(e) => {
//                 if (e.pointerType === "mouse") hovering.current = true;
//               }}
//               onPointerLeave={(e) => {
//                 if (e.pointerType !== "mouse") return;
//                 hovering.current = false;
//                 px.set(0);
//                 py.set(0);
//               }}
//               onPanStart={() => (dragging.current = true)}
//               onPan={(_, info) => {
//                 rotA.set(rotA.get() + info.delta.x * 0.35);
//                 rotB.set(rotB.get() - info.delta.x * 0.35);
//               }}
//               onPanEnd={() => (dragging.current = false)}
//               style={{ perspective: 1400, touchAction: "pan-y" }}
//               className="relative h-[430px] cursor-grab select-none active:cursor-grabbing sm:h-[520px] lg:h-[600px]"
//             >
//               {/* spotlight that follows the cursor */}
//               <motion.div
//                 aria-hidden
//                 style={{ background: spotlight }}
//                 className="pointer-events-none absolute inset-0 opacity-80"
//               />

//               {/* tilt layer (follows the mouse) */}
//               <motion.div
//                 style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
//                 className="absolute inset-0"
//               >
//                 {/* gold stage disc under the rings */}
//                 <div
//                   aria-hidden
//                   className="absolute left-1/2 top-1/2 rounded-full border border-[#B38E46]/35"
//                   style={{
//                     width: discSize,
//                     height: discSize,
//                     marginLeft: -discSize / 2,
//                     marginTop: -discSize / 2,
//                     transform: `translateY(${discY}px) rotateX(90deg)`,
//                     background:
//                       "radial-gradient(circle, rgba(20,19,18,0.16) 0%, rgba(179,142,70,0.10) 45%, transparent 70%)",
//                     boxShadow: "inset 0 0 0 14px rgba(179,142,70,0.05)",
//                   }}
//                 />

//                 {/* upper ring (turns one way) + lower ring (turns the other way) */}
//                 <Tier
//                   items={upper}
//                   offsetY={-tierOffset}
//                   smooth={smoothA}
//                   dims={dims}
//                   reduce={reduce}
//                   floatFrom={-8}
//                 />
//                 <Tier
//                   items={lower}
//                   offsetY={tierOffset}
//                   smooth={smoothB}
//                   dims={dims}
//                   reduce={reduce}
//                   floatFrom={8}
//                 />

//                 {/* gold dust at different depths */}
//                 {dust.map((d, i) => (
//                   <div
//                     key={i}
//                     aria-hidden
//                     className="pointer-events-none absolute"
//                     style={{ left: d.l, top: d.t, transform: `translateZ(${d.z}px)` }}
//                   >
//                     <motion.span
//                       animate={reduce ? undefined : { y: [0, -14, 0], opacity: [0.25, 0.9, 0.25] }}
//                       transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: d.d }}
//                       className="block rounded-full bg-[#C5A059]"
//                       style={{ width: d.s, height: d.s, boxShadow: "0 0 10px 2px rgba(197,160,89,0.6)" }}
//                     />
//                   </div>
//                 ))}

//                 {/* floating badges */}
//                 <div
//                   className="absolute left-0 top-[8%] hidden sm:block"
//                   style={{ transform: "translateZ(300px)" }}
//                 >
//                   <motion.div
//                     animate={reduce ? undefined : { y: [0, -12, 0] }}
//                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                     className="border border-[#E5D9C5] bg-white/95 px-5 py-3 shadow-xl"
//                   >
//                     <span className="block font-serif text-3xl font-semibold leading-none text-[#B38E46]">
//                       10K+
//                     </span>
//                     <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#5A5652]">
//                       Happy Customers
//                     </span>
//                   </motion.div>
//                 </div>

//                 <div
//                   className="absolute bottom-[14%] right-0 hidden sm:block"
//                   style={{ transform: "translateZ(340px)" }}
//                 >
//                   <motion.div
//                     animate={reduce ? undefined : { y: [0, 12, 0] }}
//                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
//                     className="bg-[#141312] px-5 py-3 text-[#FAF8F5] shadow-xl"
//                   >
//                     <span className="block font-serif text-3xl font-semibold leading-none text-[#E8CE98]">
//                       5K+
//                     </span>
//                     <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
//                       Bridal Orders
//                     </span>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* controls */}
//             <div className="mt-3 flex items-center justify-between gap-4">
//               <button
//                 onClick={() => nudge(-1)}
//                 aria-label="Previous looks"
//                 className="flex h-11 w-11 items-center justify-center border border-[#141312]/70 text-[#141312] transition-colors hover:bg-[#141312] hover:text-white"
//               >
//                 <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
//               </button>

//               <div className="flex flex-col items-center gap-1.5 text-center">
//                 <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#141312]">
//                   {looks.length} Signature Looks
//                 </span>
//                 <span className="text-[9px] uppercase tracking-[0.3em] text-[#5A5652]/70">
//                   Drag or swipe to explore
//                 </span>
//               </div>

//               <button
//                 onClick={() => nudge(1)}
//                 aria-label="Next looks"
//                 className="flex h-11 w-11 items-center justify-center border border-[#141312]/70 text-[#141312] transition-colors hover:bg-[#141312] hover:text-white"
//               >
//                 <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







//-------------------------------







"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Bodoni_Moda, Jost, Pinyon_Script } from "next/font/google";
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Globe,
  MessageCircle,
  Ruler,
  Scissors,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  PREMIUM FONTS (self-hosted by Next.js, no layout shift)                   */
/*   display – Bodoni Moda : high-contrast fashion-magazine serif             */
/*   script  – Pinyon Script : formal calligraphy for the tagline             */
/*   label   – Jost : refined geometric sans for small caps, buttons, tags    */
/*  NOTE: put the font class directly on the element (a global `span` rule    */
/*  in globals.css would otherwise override an inherited font).               */
/* -------------------------------------------------------------------------- */
const display = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
const script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const label = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const WHATSAPP = "918098558923"; // change to your WhatsApp number (country code + number)
const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* -------------------------------------------------------------------------- */
/*  All looks (20). Even positions go on the UPPER ring, odd on the LOWER ring */
/*  so both rings get a mix. Add / swap photos here – keep the total EVEN.     */
/* -------------------------------------------------------------------------- */
type Look = { id: number; src: string; tag: string };

const rawLooks: Omit<Look, "id">[] = [
  { src: "/images/dev_fashion/main.jpeg", tag: "Bridal Couture" },
  { src: "/images/dev_fashion/deeps2.jpeg", tag: "Ethnic Editorial" },
  { src: "/images/dev_fashion/sadhana_main.png", tag: "Royal Velvet Aurora" },
  { src: "/images/dev_fashion/deepika1.jpg", tag: "Sapphire Velvet" },
  { src: "/images/dev_fashion/sadhana_red2.png", tag: "Royal Zardozi" },
  { src: "/images/dev_fashion/ammu.jpeg", tag: "Sheer Cutwork" },
  { src: "/images/dev_fashion/sadhana_blue.png", tag: "Sapphire Silk" },
  { src: "/dev_hero.png", tag: "Master Designer" },
  { src: "/images/dev_fashion/angel1.png", tag: "Party Wear" },
  { src: "/images/dev_fashion/sadhana_beach1.jpg", tag: "Seaside Edit" },
  { src: "/images/dev_fashion/sadhana_blue2.png", tag: "Midnight Blue" },
  { src: "/images/dev_fashion/sadhana_red_chudi.png", tag: "Crimson Chudi" },
  { src: "/images/dev_fashion/sadhana_smile_flowers.png", tag: "Floral Muse" },
  { src: "/images/dev_fashion/sadhana_smile_udha.png", tag: "Festive Glow" },
  { src: "/images/dev_fashion/sadhana_smile5.png", tag: "Signature Smile" },
  { src: "/images/dev_fashion/sadhana_smile6.png", tag: "Everyday Elegance" },
  { src: "/images/dev_fashion/sadhana_temple.png", tag: "Temple Heritage" },
  { src: "/images/dev_fashion/sadhana_vilet.png", tag: "Violet Couture" },
  { src: "/images/dev_fashion/aari1.jpg", tag: "Aari Blouse" },
  { src: "/images/dev_fashion/aari2.jpg", tag: "Custom Blouse" },
];

const looks: Look[] = rawLooks.map((l, i) => ({ ...l, id: i }));
const upper = looks.filter((_, i) => i % 2 === 0);
const lower = looks.filter((_, i) => i % 2 === 1);
const PER = upper.length;
const STEP = 360 / PER;
const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

/* gold dust floating in 3D (fixed values → no hydration mismatch) */
const dust = [
  { l: "6%", t: "14%", z: 140, s: 4, d: 0 },
  { l: "18%", t: "72%", z: 220, s: 3, d: 1.2 },
  { l: "30%", t: "8%", z: -120, s: 3, d: 0.6 },
  { l: "44%", t: "88%", z: 180, s: 5, d: 2 },
  { l: "58%", t: "6%", z: 260, s: 3, d: 0.3 },
  { l: "70%", t: "80%", z: -80, s: 4, d: 1.8 },
  { l: "82%", t: "20%", z: 200, s: 5, d: 0.9 },
  { l: "92%", t: "62%", z: 120, s: 3, d: 2.4 },
  { l: "12%", t: "44%", z: -160, s: 4, d: 1.5 },
  { l: "88%", t: "92%", z: 90, s: 3, d: 0.1 },
];

/* -------------------------------------------------------------------------- */
/*  One card on a ring – a real <button>, so it is clickable + keyboard-able  */
/* -------------------------------------------------------------------------- */
function RingCard({
  look,
  index,
  w,
  h,
  r,
  smooth,
  priority,
  onOpen,
}: {
  look: Look;
  index: number;
  w: number;
  h: number;
  r: number;
  smooth: MotionValue<number>;
  priority: boolean;
  onOpen: (id: number) => void;
}) {
  // 1 = facing the viewer, -1 = facing away
  const front = useTransform(smooth, (v: number) => {
    const a = ((((index * STEP + v) % 360) + 540) % 360) - 180;
    return Math.cos((a * Math.PI) / 180);
  });
  const opacity = useTransform(front, (f: number) => 0.28 + 0.72 * Math.max(f, 0));
  const borderColor = useTransform(front, (f: number) => (f > 0.97 ? "#B38E46" : "#E5D9C5"));
  const boxShadow = useTransform(front, (f: number) =>
    f > 0.97
      ? "0 0 0 1px #B38E46, 0 45px 80px -25px rgba(179,142,70,0.6)"
      : "0 40px 70px -25px rgba(20,19,18,0.5)"
  );
  // glossy foil sheen that sweeps across the card as the ring turns
  const sheenX = useTransform(smooth, (v: number) => {
    const a = ((((index * STEP + v) % 360) + 540) % 360) - 180;
    return a * 1.3;
  });

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: w,
        height: h,
        marginLeft: -w / 2,
        marginTop: -h / 2,
        transform: `rotateY(${index * STEP}deg) translateZ(${r}px)`,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <motion.button
        type="button"
        onClick={() => onOpen(look.id)}
        aria-label={`View ${look.tag}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ opacity, borderColor, boxShadow }}
        className="block h-full w-full cursor-pointer border bg-white p-[5px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B38E46]"
      >
        <div className="relative h-full w-full overflow-hidden bg-[#F4F0EA]">
          <Image
            src={look.src}
            alt={`${look.tag} – Dev Fashion`}
            fill
            quality={75}
            priority={priority}
            sizes="200px"
            draggable={false}
            className="pointer-events-none select-none object-cover object-top"
          />
          <motion.div
            aria-hidden
            style={{
              x: sheenX,
              background:
                "linear-gradient(105deg, transparent 42%, rgba(255,255,255,0.32) 50%, transparent 58%)",
            }}
            className="pointer-events-none absolute inset-y-0 -left-full w-[300%]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-2.5 pt-10">
            <span
              className={`${label.className} block truncate text-[7px] font-medium uppercase tracking-[0.28em] text-[#E8CE98] sm:text-[8px]`}
            >
              {look.tag}
            </span>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  One tier (ring) of cards                                                  */
/* -------------------------------------------------------------------------- */
function Tier({
  items,
  offsetY,
  smooth,
  dims,
  reduce,
  floatFrom,
  onOpen,
}: {
  items: Look[];
  offsetY: number;
  smooth: MotionValue<number>;
  dims: { w: number; h: number; r: number };
  reduce: boolean | null;
  floatFrom: number;
  onOpen: (id: number) => void;
}) {
  return (
    <div
      className="absolute inset-0"
      style={{ transform: `translateY(${offsetY}px)`, transformStyle: "preserve-3d" }}
    >
      <motion.div
        style={{ rotateY: smooth, transformStyle: "preserve-3d" }}
        animate={reduce ? undefined : { y: [0, floatFrom, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        {items.map((look, i) => (
          <RingCard
            key={look.src}
            look={look}
            index={i}
            w={dims.w}
            h={dims.h}
            r={dims.r}
            smooth={smooth}
            priority={i < 2}
            onOpen={onOpen}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Full-screen viewer (opens when a card is clicked)                         */
/* -------------------------------------------------------------------------- */
function LookViewer({
  index,
  onClose,
  onStep,
}: {
  index: number;
  onClose: () => void;
  onStep: (d: number) => void;
}) {
  const look = looks[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onStep]);

  const next = looks[(index + 1) % looks.length];
  const prevLook = looks[(index - 1 + looks.length) % looks.length];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={look.tag}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0C0B]/90 backdrop-blur-md sm:p-6"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden bg-[#FAF8F5] sm:h-[min(88vh,820px)] lg:flex-row"
      >
        {/* image */}
        <div className="relative min-h-0 flex-1 bg-[#EFEBE4] lg:flex-[1.15]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={look.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={look.src}
                alt={`${look.tag} – Dev Fashion`}
                fill
                quality={85}
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* preload neighbours so stepping feels instant */}
          <Image src={next.src} alt="" fill quality={85} loading="eager" sizes="60vw" className="hidden" />
          <Image src={prevLook.src} alt="" fill quality={85} loading="eager" sizes="60vw" className="hidden" />

          <button
            onClick={() => onStep(-1)}
            aria-label="Previous look"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/85 text-[#141312] shadow transition-colors hover:bg-[#141312] hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <button
            onClick={() => onStep(1)}
            aria-label="Next look"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/85 text-[#141312] shadow transition-colors hover:bg-[#141312] hover:text-white"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        {/* details */}
        <aside className="flex flex-none flex-col justify-between gap-6 p-6 sm:p-8 lg:w-[380px] lg:p-10">
          <div>
            <p className={`${label.className} text-[10px] font-medium uppercase tracking-[0.3em] text-[#B38E46]`}>
              Look {pad(index + 1)} / {pad(looks.length)}
            </p>
            <h2
              className={`${display.className} mt-4 text-3xl font-normal uppercase leading-[1.08] tracking-[0.05em] text-[#141312] lg:text-4xl`}
            >
              {look.tag}
            </h2>
            <p className={`${script.className} mt-2 text-3xl leading-tight text-[#B38E46]`}>
              Dev Fashion Atelier
            </p>
            <div className="my-5 h-px w-14 bg-[#B38E46]" />
            <p className="text-sm font-light leading-[1.8] text-[#5A5652]">
              Hand-embroidered and made to measure in our Coimbatore atelier.
              Fittings can be done in person or virtually, with express
              shipping for clients across India and abroad.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={waLink(`Hi Dev Fashion, I am interested in this design: ${look.tag}`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${label.className} flex h-[52px] items-center justify-center gap-2.5 bg-[#141312] px-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#B38E46]`}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp Stylist
            </a>
            <Link
              href={`/contact?design=${encodeURIComponent(look.tag)}#booking`}
              onClick={onClose}
              className={`${label.className} flex h-[52px] items-center justify-center gap-2 border border-[#141312] px-6 text-[11px] font-medium uppercase tracking-[0.24em] text-[#141312] transition-colors hover:bg-[#141312] hover:text-white`}
            >
              Request Customization
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </aside>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center bg-white/85 text-[#141312] shadow transition-colors hover:bg-[#141312] hover:text-white"
        >
          <X className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */
export default function Hero3D() {
  const reduce = useReducedMotion();

  /* responsive sizes: card size → ring radius so cards just touch */
  const [dims, setDims] = useState({ w: 175, h: 233, r: 291, gap: 16 });
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      const w = vw < 640 ? 112 : vw < 1024 ? 150 : 175;
      const h = Math.round((w * 4) / 3);
      const r = Math.round(w / 2 / Math.tan(Math.PI / PER)) + 20;
      setDims({ w, h, r, gap: vw < 640 ? 12 : 16 });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const tierOffset = (dims.h + dims.gap) / 2; // upper = -offset, lower = +offset
  const discSize = 2 * (dims.r + 40);
  const discY = tierOffset + dims.h / 2 + 22;

  /* ---- viewer (click a card to open) ---- */
  const [openId, setOpenId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const viewerOpen = useRef(false);
  viewerOpen.current = openId !== null;
  const moved = useRef(false); // true while/after a drag, so a drag never counts as a click

  const openLook = useCallback((id: number) => {
    if (moved.current) return;
    setOpenId(id);
  }, []);
  const closeViewer = useCallback(() => setOpenId(null), []);
  const stepViewer = useCallback(
    (d: number) => setOpenId((p) => (p === null ? p : (p + d + looks.length) % looks.length)),
    []
  );

  /* two rings that turn in opposite directions (start spun, settle on load) */
  const rotA = useMotionValue(140);
  const rotB = useMotionValue(-140);
  const smoothA = useSpring(rotA, { stiffness: 90, damping: 22, mass: 0.6 });
  const smoothB = useSpring(rotB, { stiffness: 90, damping: 22, mass: 0.6 });
  const dragging = useRef(false);
  const hovering = useRef(false);

  useEffect(() => {
    rotA.set(0);
    rotB.set(0);
  }, [rotA, rotB]);

  useAnimationFrame((_, delta) => {
    // pauses on hover (so cards are easy to click), while dragging, and while the viewer is open
    if (reduce || dragging.current || hovering.current || viewerOpen.current) return;
    rotA.set(rotA.get() - delta * 0.009);
    rotB.set(rotB.get() + delta * 0.007);
  });

  const nudge = (dir: number) => {
    rotA.set(rotA.get() + dir * STEP);
    rotB.set(rotB.get() - dir * STEP);
  };

  /* mouse parallax tilt + gold spotlight that follows the cursor */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const tiltX = useTransform(sy, [-1, 1], [14, 2]);
  const tiltY = useTransform(sx, [-1, 1], [-12, 12]);
  const spotX = useTransform(sx, (v: number) => (v + 1) * 50);
  const spotY = useTransform(sy, (v: number) => (v + 1) * 50);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotX}% ${spotY}%, rgba(197,160,89,0.28), transparent 55%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section className="relative overflow-hidden border-b border-[#EFEBE4] bg-[#FAF8F5] pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24 lg:pt-10">
      {/* ambient depth: glows + giant ghost word */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#C5A059]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[460px] w-[460px] rounded-full bg-[#E6C5C5]/30 blur-3xl" />
      <span
        aria-hidden
        className={`${display.className} pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[13vw] font-normal leading-none text-[#B38E46]/[0.07] lg:left-[50%]`}
      >
        DEV FASHION
      </span>

      <div className="site-container relative">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8 xl:gap-12">
          {/* ------------------------------ Text ------------------------------ */}
          <div className="relative z-10 flex flex-col text-[#141312]">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className={`${label.className} mb-4 block text-[10px] font-medium uppercase tracking-[0.38em] text-[#B38E46]`}
            >
              ✦ South Indian Bridal Couture &bull; Coimbatore ✦
            </motion.span>

            <h1 className="leading-none">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className={`${display.className} block text-5xl font-normal uppercase leading-[1.05] tracking-[0.06em] text-[#141312] sm:text-6xl lg:text-7x1`}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15, ease: EASE }}
                >
                  Dev Fashion
                </motion.span>
              </span>
              <span className="mt-1 block overflow-hidden pb-3 pt-2">
                <motion.span
                  className={`${script.className} block text-4xl normal-case leading-[1.2] tracking-normal text-[#B38E46] sm:text-5xl lg:text-[3.4rem]`}
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.35, ease: EASE }}
                >
                  Crafting Elegance, Designed for You
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
              style={{ originX: 0 }}
              className="my-6 h-px w-16 bg-[#B38E46]"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mb-8 max-w-[520px] text-left text-sm font-light leading-relaxed text-[#5A5652] sm:text-base"
            >
              We are delighted to be one of the city&apos;s leading Bridal Blouse
              Designers, providing an extraordinary stitching experience every
              time. Come and explore our collection &mdash; your wardrobe will
              never look the same, and never at the cost of your budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact#booking"
                className={`${label.className} flex h-[52px] w-full items-center justify-center gap-2.5 border border-[#141312] bg-[#141312] px-8 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#FAF8F5] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B38E46] hover:bg-[#B38E46] hover:text-white hover:shadow-lg sm:w-auto`}
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 stroke-[1.5]" />
              </Link>
              <Link
                href="/gallery"
                className={`${label.className} flex h-[52px] w-full items-center justify-center border border-[#141312] bg-transparent px-8 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#141312] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141312] hover:text-[#FAF8F5] sm:w-auto`}
              >
                Explore Portfolio
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={`${label.className} mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#E5D9C5] pt-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#5A5652]`}
            >
              <li className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
                Perfect Fit Guarantee
              </li>
              <li className="flex items-center gap-2">
                <Scissors className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
                Aari &amp; Zardozi
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#B38E46]" strokeWidth={1.5} />
                NRI Virtual Styling
              </li>
            </motion.ul>
          </div>

          {/* ---------------------------- 3D stage ---------------------------- */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
              onPointerMove={onMove}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") hovering.current = true;
              }}
              onPointerLeave={(e) => {
                if (e.pointerType !== "mouse") return;
                hovering.current = false;
                px.set(0);
                py.set(0);
              }}
              onPanStart={() => {
                dragging.current = true;
                moved.current = false;
              }}
              onPan={(_, info) => {
                if (Math.abs(info.offset.x) + Math.abs(info.offset.y) > 6) moved.current = true;
                rotA.set(rotA.get() + info.delta.x * 0.35);
                rotB.set(rotB.get() - info.delta.x * 0.35);
              }}
              onPanEnd={() => {
                dragging.current = false;
                // keep "moved" a moment so the click that follows a drag is ignored
                setTimeout(() => (moved.current = false), 80);
              }}
              style={{ perspective: 1400, touchAction: "pan-y" }}
              className="relative h-[430px] select-none sm:h-[520px] lg:h-[600px]"
            >
              {/* spotlight that follows the cursor */}
              <motion.div
                aria-hidden
                style={{ background: spotlight }}
                className="pointer-events-none absolute inset-0 opacity-80"
              />

              {/* tilt layer (follows the mouse) */}
              <motion.div
                style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
                className="absolute inset-0"
              >
                {/* gold stage disc under the rings */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-[#B38E46]/35"
                  style={{
                    width: discSize,
                    height: discSize,
                    marginLeft: -discSize / 2,
                    marginTop: -discSize / 2,
                    transform: `translateY(${discY}px) rotateX(90deg)`,
                    background:
                      "radial-gradient(circle, rgba(20,19,18,0.16) 0%, rgba(179,142,70,0.10) 45%, transparent 70%)",
                    boxShadow: "inset 0 0 0 14px rgba(179,142,70,0.05)",
                  }}
                />

                {/* upper ring (turns one way) + lower ring (turns the other way) */}
                <Tier
                  items={upper}
                  offsetY={-tierOffset}
                  smooth={smoothA}
                  dims={dims}
                  reduce={reduce}
                  floatFrom={-8}
                  onOpen={openLook}
                />
                <Tier
                  items={lower}
                  offsetY={tierOffset}
                  smooth={smoothB}
                  dims={dims}
                  reduce={reduce}
                  floatFrom={8}
                  onOpen={openLook}
                />

                {/* gold dust at different depths */}
                {dust.map((d, i) => (
                  <div
                    key={i}
                    aria-hidden
                    className="pointer-events-none absolute"
                    style={{ left: d.l, top: d.t, transform: `translateZ(${d.z}px)` }}
                  >
                    <motion.span
                      animate={reduce ? undefined : { y: [0, -14, 0], opacity: [0.25, 0.9, 0.25] }}
                      transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: d.d }}
                      className="block rounded-full bg-[#C5A059]"
                      style={{ width: d.s, height: d.s, boxShadow: "0 0 10px 2px rgba(197,160,89,0.6)" }}
                    />
                  </div>
                ))}

                {/* floating badges */}
                <div
                  className="pointer-events-none absolute left-0 top-[8%] hidden sm:block"
                  style={{ transform: "translateZ(300px)" }}
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="border border-[#E5D9C5] bg-white/95 px-5 py-3 shadow-xl"
                  >
                    <span className={`${display.className} block text-2xl font-semibold leading-none text-[#B38E46]`}>
                      10K+
                    </span>
                    <span
                      className={`${label.className} mt-1.5 block text-[9px] font-medium uppercase tracking-[0.24em] text-[#5A5652]`}
                    >
                      Happy Customers
                    </span>
                  </motion.div>
                </div>

                <div
                  className="pointer-events-none absolute bottom-[14%] right-10 hidden sm:block"
                  style={{ transform: "translateZ(340px)" }}
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, 12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="bg-[#1b261e] px-5 py-3 text-[#FAF8F5] shadow-xl"
                  >
                    <span className={`${display.className} block text-2xl font-semibold leading-none text-[#E8CE98]`}>
                      5K+
                    </span>
                    <span
                      className={`${label.className} mt-1.5 block text-[9px] font-medium uppercase tracking-[0.24em] text-white/80`}
                    >
                      Bridal Orders
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* controls */}
            <div className="mt-3 flex items-center justify-between gap-4">
              <button
                onClick={() => nudge(-1)}
                aria-label="Previous looks"
                className="flex h-11 w-11 items-center justify-center border border-[#141312]/70 text-[#141312] transition-colors hover:bg-[#141312] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>

              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className={`${display.className} text-lg font-normal italic text-[#141312]`}>
                  {looks.length} Signature Looks
                </span>
                <span
                  className={`${label.className} text-[9px] font-medium uppercase tracking-[0.3em] text-[#5A5652]/70`}
                >
                 Elevate your routine with dev fashion's newest standout pieces.
                </span>
              </div>

              <button
                onClick={() => nudge(1)}
                aria-label="Next looks"
                className="flex h-11 w-11 items-center justify-center border border-[#141312]/70 text-[#141312] transition-colors hover:bg-[#141312] hover:text-white"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* viewer: rendered in <body> so it always covers the whole screen */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {openId !== null && (
              <LookViewer index={openId} onClose={closeViewer} onStep={stepViewer} />
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}