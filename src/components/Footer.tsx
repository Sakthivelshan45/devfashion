// "use client";

// import { useState, type ComponentType } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ArrowUp,
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Landmark,
//   Banknote,
//   Lock,
// } from "lucide-react";
// import {
//   FaCcAmex,
//   FaCcDinersClub,
//   FaCcDiscover,
//   FaCcJcb,
//   FaCcMastercard,
//   FaCcVisa,
//   FaFacebook,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { SiGooglepay, SiPaytm, SiPhonepe } from "react-icons/si";

// /* ---------- Shared business info (edit here, used below) ---------- */
// const PHONE_DISPLAY = "+91 80985 58923";
// const PHONE_TEL = "+918098558923";
// const EMAIL = "contact@devfashion.com";
// const HOURS_MAIN = "Mon - Sat: 8:00 AM - 9:00 PM";
// const HOURS_SUNDAY = "Sunday: 11:00 AM - 5:00 PM (Appointments Only)";
// const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=11.0211,76.9614";
// const WHATSAPP_URL =
//   "https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20have%20a%20tailoring%20enquiry.";


// /* Payment methods shown in the footer — edit these lists to match what the studio really accepts.
//    - `icon`: a ready-made brand icon from react-icons.
//    - `logo`: an official logo file you add to /public/payments/ (RuPay, UPI). Until the file exists, the chip
//      falls back to a plain text label, so nothing breaks. NPCI publishes the official UPI and RuPay artwork on
//      its website; use it unmodified.
//    - `showLabel`: show the text next to the icon (for things without a brand logo, like Cash). */
// type PaymentMethod = {
//   label: string;
//   icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
//   iconClass?: string;
//   logo?: string;
//   showLabel?: boolean;
// };

// const CARD_METHODS: PaymentMethod[] = [
//   { label: "Visa", icon: FaCcVisa, iconClass: "text-[#1A1F71]" },
//   { label: "Mastercard", icon: FaCcMastercard, iconClass: "text-[#EB001B]" },
//   { label: "RuPay", logo: "/payments/rupay.svg" }, // official RuPay logo file goes in /public/payments/
//   { label: "American Express", icon: FaCcAmex, iconClass: "text-[#006FCF]" },
//   { label: "Diners Club", icon: FaCcDinersClub, iconClass: "text-[#0079BE]" },
//   { label: "Discover", icon: FaCcDiscover, iconClass: "text-[#FF6000]" },
//   { label: "JCB", icon: FaCcJcb, iconClass: "text-[#0B4EA2]" },
// ];

// const OTHER_METHODS: PaymentMethod[] = [
//   { label: "Google Pay", icon: SiGooglepay, iconClass: "text-[#4285F4]" },
//   { label: "PhonePe", icon: SiPhonepe, iconClass: "text-[#5F259F]" },
//   { label: "Paytm", icon: SiPaytm, iconClass: "text-[#00BAF2]" },
//   { label: "Bank Transfer", icon: Landmark, iconClass: "text-gold-600", showLabel: true },
//   { label: "Cash", icon: Banknote, iconClass: "text-emerald-600", showLabel: true },
// ];

// function PaymentChip({ method }: { method: PaymentMethod }) {
//   const [logoFailed, setLogoFailed] = useState(false);
//   const { label, icon: Icon, iconClass = "", logo, showLabel } = method;
//   const chip =
//     "flex h-10 shrink-0 items-center justify-center gap-2 rounded-sm border border-gold-200 bg-white px-3 transition-colors duration-300 hover:border-gold-500";

//   if (logo && !logoFailed) {
//     return (
//       <li className={chip} title={label}>
//         <Image
//           src={logo}
//           alt={label}
//           width={64}
//           height={28}
//           className="h-5 w-auto object-contain"
//           onError={() => setLogoFailed(true)}
//         />
//       </li>
//     );
//   }

//   if (Icon && !showLabel) {
//     return (
//       <li className={chip} title={label}>
//         <Icon className={`h-6 w-auto ${iconClass}`} aria-hidden />
//         <span className="sr-only">{label}</span>
//       </li>
//     );
//   }

//   return (
//     <li className={`${chip} text-xs font-semibold uppercase tracking-[0.12em] text-stone-700`}>
//       {Icon && <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden />}
//       {label}
//     </li>
//   );
// }

// const QUICK_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Contact", href: "/contact" },
//   { label: "Reviews", href: "/reviews" },
// ];

// const SERVICE_LINKS = [
//   { label: "Custom Blouse Stitching", href: "/services" },
//   { label: "Bridal Wear Design", href: "/services" },
//   { label: "Designer Saree Blouses", href: "/services" },
//   { label: "Alteration Services", href: "/services" },
// ];

// const STUDIO_LINKS = [
//   { label: "Tailoring Classes", href: "/classes" },
//   { label: "Jewelry Rental", href: "/jewelry" },
//   { label: "Book Consultation", href: "/contact#booking" },
// ];

// /* Light theme matching the navbar: white background, gold-600 accents, stone-950 headings, stone-600 body text */
// const headingClass =
//   "mb-4 font-serif text-sm font-bold uppercase tracking-[0.18em] text-stone-950 after:mt-2 after:block after:h-px after:w-8 after:bg-gold-500 after:content-['']";
// const linkClass =
//   "block w-fit py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-stone-600 transition-all duration-300 hover:translate-x-1 hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";
// const socialClass =
//   "flex h-11 w-11 items-center justify-center rounded-full border border-gold-200 bg-white text-gold-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-600 hover:bg-gold-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

// /* ========================================================
//    FASHION + COIMBATORE STRIP (inline SVG, edit colours freely)
//    One wide scene (1760 x 260) that scales to any screen width.
//    ======================================================== */
// const SCENE_W = 1760;
// const SCENE_H = 260;

// const GOLD = "#C5A059";
// const GOLD_LIGHT = "#E6CC8E";
// const MAROON = "#8E2A35";
// const WOOD = "#8C5A3A";
// const WOOD_LIGHT = "#A9714B";

// /* ---------- small reusable pieces ---------- */
// function Sparkle({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},${y}) scale(${s})`}>
//       <path
//         d="M0 -7 Q1 -1 7 0 Q1 1 0 7 Q-1 1 -7 0 Q-1 -1 0 -7Z"
//         fill={GOLD}
//         className="motion-safe:animate-pulse"
//         style={{ animationDelay: `${(x % 7) * 0.3}s`, animationDuration: "2.4s" }}
//       />
//     </g>
//   );
// }

// function Plant({ x, s = 1 }: { x: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},240) scale(${s}) translate(0,-240)`}>
//       <ellipse cx="0" cy="188" rx="6" ry="18" fill="#5E8C61" />
//       <ellipse cx="-10" cy="194" rx="5" ry="14" fill="#6FA073" transform="rotate(-30 -10 194)" />
//       <ellipse cx="10" cy="194" rx="5" ry="14" fill="#6FA073" transform="rotate(30 10 194)" />
//       <path d="M-12 214 L12 214 L8 240 L-8 240 Z" fill="#C77B58" />
//       <rect x="-14" y="210" width="28" height="6" rx="2" fill="#B3673F" />
//     </g>
//   );
// }

// /* Aari (hook-embroidery) flower motif: gold petals + a bead */
// function AariFlower({
//   x,
//   y,
//   r = 5,
//   petal = GOLD_LIGHT,
//   center = MAROON,
// }: {
//   x: number;
//   y: number;
//   r?: number;
//   petal?: string;
//   center?: string;
// }) {
//   return (
//     <g transform={`translate(${x},${y})`}>
//       {[0, 60, 120, 180, 240, 300].map((a) => (
//         <ellipse key={a} cx="0" cy={-r * 0.9} rx={r * 0.4} ry={r * 0.64} fill={petal} transform={`rotate(${a})`} />
//       ))}
//       <circle r={r * 0.36} fill={center} />
//     </g>
//   );
// }

// /* Dress form wearing a blouse. aari = heavy gold embroidery */
// function DressForm({ x, color, trim, aari = false }: { x: number; color: string; trim: string; aari?: boolean }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <ellipse cx="0" cy="236" rx="34" ry="5" fill={WOOD_LIGHT} />
//       <rect x="-3" y="170" width="6" height="66" fill={WOOD} />
//       <rect x="-5" y="68" width="10" height="14" rx="3" fill="#D8C3A4" />
//       <circle cx="0" cy="65" r="4" fill={WOOD} />
//       <path d="M-36 114 L-24 92 L-19 100 L-27 119 Z" fill={color} />
//       <path d="M36 114 L24 92 L19 100 L27 119 Z" fill={color} />
//       <path d="M-24 92 Q0 80 24 92 L30 122 Q32 150 20 172 L-20 172 Q-32 150 -30 122 Z" fill={color} />
//       <path d="M-13 87 Q0 112 13 87 Q0 82 -13 87 Z" fill="#E9D5B8" />
//       <path d="M-13 87 Q0 112 13 87" fill="none" stroke={trim} strokeWidth="1.6" />
//       <rect x="-21" y="164" width="42" height="6" fill={trim} />
//       {aari ? (
//         <>
//           {/* double neckline border + sleeve cuffs */}
//           <path d="M-11 90 Q0 108 11 90" fill="none" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1.2 2.4" />
//           <path d="M-36 114 L-27 119 M36 114 L27 119" stroke={GOLD_LIGHT} strokeWidth="3" strokeLinecap="round" />
//           <path d="M-33 108 L-25 112.5 M33 108 L25 112.5" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1 2" />
//           {/* bust flowers, centre vine, lower flowers */}
//           <AariFlower x={-11} y={123} r={6} petal={GOLD_LIGHT} center="#F3DFA8" />
//           <AariFlower x={11} y={123} r={6} petal={GOLD_LIGHT} center="#F3DFA8" />
//           <path d="M0 100 V162" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1 2.6" />
//           <AariFlower x={0} y={142} r={4.4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={-17} y={149} r={3.4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={17} y={149} r={3.4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           {/* mirror-work dots on the hem band */}
//           {[-15, -9, -3, 3, 9, 15].map((d) => (
//             <circle key={d} cx={d} cy="167" r="1.3" fill="#FBF3EA" />
//           ))}
//         </>
//       ) : (
//         <>
//           <circle cx="-10" cy="138" r="2" fill={trim} />
//           <circle cx="0" cy="146" r="2" fill={trim} />
//           <circle cx="10" cy="138" r="2" fill={trim} />
//           <circle cx="-16" cy="152" r="2" fill={trim} />
//           <circle cx="16" cy="152" r="2" fill={trim} />
//         </>
//       )}
//     </g>
//   );
// }

// /* ---------- foreground fashion props ---------- */
// function SewingMachine({ x, s = 1 }: { x: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},240) scale(${s}) translate(0,-240)`}>
//       <rect x="0" y="198" width="140" height="8" rx="2" fill={WOOD_LIGHT} />
//       <rect x="8" y="206" width="6" height="34" fill={WOOD} />
//       <rect x="126" y="206" width="6" height="34" fill={WOOD} />
//       <rect x="20" y="186" width="100" height="12" rx="3" fill="#1F5F66" />
//       <rect x="22" y="140" width="98" height="46" rx="10" fill="#2F7F86" />
//       <rect x="22" y="140" width="98" height="16" rx="8" fill="#226A71" />
//       <rect x="22" y="170" width="98" height="3" fill={GOLD} />
//       <rect x="34" y="156" width="5" height="30" fill="#C9B48A" />
//       <rect x="30" y="184" width="14" height="4" fill="#9A8A6A" />
//       <rect x="24" y="184" width="46" height="3" fill={MAROON} />
//       <circle cx="112" cy="164" r="13" fill={MAROON} />
//       <circle cx="112" cy="164" r="5" fill={GOLD} />
//       <rect x="70" y="130" width="4" height="10" fill="#9A9A9A" />
//       <rect x="62" y="118" width="20" height="12" rx="2" fill="#E0A1A1" />
//       <rect x="60" y="116" width="24" height="3" fill="#D8C3A4" />
//       <rect x="60" y="130" width="24" height="3" fill="#D8C3A4" />
//       <path d="M64 124 Q40 110 36 156" fill="none" stroke="#E0A1A1" strokeWidth="1" />
//     </g>
//   );
// }

// /* Aari embroidery frame ("adda") with silk in progress */
// function AariFrame({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       {/* trestle legs + brace */}
//       <path d="M8 200 L-2 240 M112 200 L122 240" stroke={WOOD} strokeWidth="6" strokeLinecap="round" />
//       <path d="M4 224 H116" stroke={WOOD} strokeWidth="4" strokeLinecap="round" />
//       {/* hanging plaque */}
//       <path d="M30 132 L34 146 M90 132 L86 146" stroke="#9A8A6A" strokeWidth="1" />
//       <rect x="22" y="116" width="76" height="18" rx="3" fill={MAROON} stroke={GOLD} strokeWidth="1.4" />
//       <text
//         x="60"
//         y="128.5"
//         textAnchor="middle"
//         fontSize="8.6"
//         fontFamily="serif"
//         letterSpacing="1.6"
//         fill="#F3DFA8"
//       >
//         AARI WORK
//       </text>
//       {/* wooden frame */}
//       <rect x="0" y="146" width="120" height="76" rx="3" fill={WOOD_LIGHT} />
//       <rect x="6" y="152" width="108" height="64" fill="#7A2230" />
//       <rect x="6" y="152" width="108" height="26" fill="#9A3140" opacity=".55" />
//       {[
//         [3, 149],
//         [117, 149],
//         [3, 219],
//         [117, 219],
//       ].map(([cx, cy]) => (
//         <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" fill={WOOD} />
//       ))}
//       {/* embroidered mandala */}
//       <g transform="translate(60,184)">
//         {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
//           <ellipse key={a} cx="0" cy="-15" rx="5.4" ry="10" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth="1" transform={`rotate(${a})`} />
//         ))}
//         <circle r="8" fill={MAROON} stroke={GOLD} strokeWidth="1.4" />
//         <circle r="4.2" fill={GOLD_LIGHT} />
//         <circle r="1.7" fill={MAROON} />
//       </g>
//       <AariFlower x={20} y={166} r={5.4} />
//       <AariFlower x={100} y={166} r={5.4} />
//       <AariFlower x={20} y={202} r={5.4} />
//       <AariFlower x={100} y={202} r={5.4} />
//       <path d="M12 158 H108 M12 210 H108" stroke={GOLD_LIGHT} strokeWidth="1.2" strokeDasharray="1.4 3" />
//       {/* hook needle with gold thread */}
//       <g transform="translate(96,150) rotate(35)">
//         <rect x="-3.2" y="-24" width="6.4" height="24" rx="3.2" fill={WOOD} />
//         <rect x="-3.2" y="-8" width="6.4" height="2.4" fill={GOLD} />
//         <rect x="-0.9" y="0" width="1.8" height="17" fill="#C9D1D8" />
//       </g>
//       <path d="M87 164 C78 150 72 154 64 146" fill="none" stroke={GOLD} strokeWidth="1.4" />
//       {/* thread reel on top rail */}
//       <rect x="10" y="138" width="14" height="9" rx="1.5" fill={GOLD_LIGHT} />
//       <rect x="8" y="136" width="18" height="3" rx="1" fill="#D8C3A4" />
//       <rect x="8" y="146" width="18" height="3" rx="1" fill="#D8C3A4" />
//     </g>
//   );
// }

// const RAIL_BLOUSES = [
//   { cx: 32, color: "#2B5BA8" },
//   { cx: 90, color: MAROON },
//   { cx: 148, color: "#5E8C61" },
// ];

// function ClothesRail({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="0" y="104" width="5" height="136" fill={WOOD} />
//       <rect x="180" y="104" width="5" height="136" fill={WOOD} />
//       <rect x="-8" y="236" width="21" height="4" rx="2" fill={WOOD} />
//       <rect x="172" y="236" width="21" height="4" rx="2" fill={WOOD} />
//       <rect x="0" y="102" width="185" height="5" rx="2" fill={GOLD} />
//       {RAIL_BLOUSES.map(({ cx, color }) => (
//         <g key={cx} transform={`translate(${cx},0)`}>
//           <path d="M0 122 V112 Q0 100 7 101" fill="none" stroke="#7A7A7A" strokeWidth="1.6" />
//           <path d="M-20 134 L0 122 L20 134" fill="none" stroke="#7A7A7A" strokeWidth="1.6" />
//           <path
//             d="M-18 134 L-8 126 Q0 131 8 126 L18 134 L27 156 L18 160 L13 149 L13 194 L-13 194 L-13 149 L-18 160 L-27 156 Z"
//             fill={color}
//           />
//           {/* aari work: neckline, sleeve cuffs, flowers, hem */}
//           <path d="M-7 127 Q0 140 7 127" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" />
//           <path d="M-9 127 Q0 145 9 127" fill="none" stroke={GOLD_LIGHT} strokeWidth="0.9" strokeDasharray="1 2" />
//           <path d="M-27 156 L-18 160 M27 156 L18 160" stroke={GOLD_LIGHT} strokeWidth="2.6" strokeLinecap="round" />
//           <AariFlower x={-6} y={150} r={4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={6} y={150} r={4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={0} y={168} r={3.2} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <rect x="-13" y="188" width="26" height="6" fill={GOLD} />
//           {[-8, -3, 3, 8].map((d) => (
//             <circle key={d} cx={d} cy="191" r="1.1" fill="#FBF3EA" />
//           ))}
//         </g>
//       ))}
//     </g>
//   );
// }

// function SareeMannequin({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <ellipse cx="0" cy="236" rx="40" ry="5" fill={WOOD_LIGHT} />
//       <rect x="-5" y="66" width="10" height="14" rx="3" fill="#D8C3A4" />
//       <circle cx="0" cy="64" r="4" fill={WOOD} />
//       <path d="M-24 88 Q0 78 24 88 L28 118 Q22 134 26 150 L-26 150 Q-22 134 -28 118 Z" fill={MAROON} />
//       <path d="M-12 84 Q0 106 12 84 Q0 80 -12 84 Z" fill="#E9D5B8" />
//       <path d="M-26 142 L26 142 L54 222 Q0 232 -54 222 Z" fill="#2F7F86" />
//       <path d="M-14 150 L-24 224 M-4 150 L-8 226 M6 150 L8 226 M16 150 L24 224" stroke="#5BB0B7" strokeWidth="1.4" opacity="0.6" fill="none" />
//       <path d="M-52 212 Q0 222 52 212 L54 222 Q0 232 -54 222 Z" fill={GOLD} />
//       <path d="M-16 84 L0 80 L40 126 L46 206 L24 208 L22 134 Z" fill="#1F5F66" />
//       <path d="M-16 84 L22 134 L24 208" fill="none" stroke={GOLD} strokeWidth="2" />
//       <circle cx="32" cy="160" r="2" fill={GOLD} />
//       <circle cx="35" cy="180" r="2" fill={GOLD} />
//       <circle cx="34" cy="196" r="2" fill={GOLD} />
//     </g>
//   );
// }

// function Shop({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="-3" y="100" width="162" height="6" fill={GOLD} />
//       <rect x="28" y="74" width="100" height="26" rx="4" fill={MAROON} stroke={GOLD} strokeWidth="1.5" />
//       <text x="78" y="91" textAnchor="middle" fontSize="10" fontFamily="serif" letterSpacing="2" fill="#F3DFA8">
//         DEV FASHION
//       </text>
//       <rect x="0" y="106" width="156" height="134" fill="#F3D5CB" />
//       {Array.from({ length: 8 }).map((_, i) => {
//         const fill = i % 2 === 0 ? MAROON : "#FBF3EA";
//         return (
//           <g key={i}>
//             <rect x={-6 + 21 * i} y="110" width="21" height="24" fill={fill} />
//             <circle cx={-6 + 21 * i + 10.5} cy="134" r="10.5" fill={fill} />
//           </g>
//         );
//       })}
//       <rect x="14" y="156" width="40" height="54" rx="2" fill="#FFF3DC" stroke={GOLD} strokeWidth="2" />
//       <path d="M24 172 L30 166 Q34 170 38 166 L44 172 L48 186 L44 188 L41 182 V206 H27 V182 L24 188 L20 186 Z" fill="#2B5BA8" />
//       <AariFlower x={34} y={182} r={3.2} petal={GOLD_LIGHT} center="#FBF3EA" />
//       <rect x="66" y="162" width="34" height="78" rx="2" fill="#1F5F66" />
//       <rect x="72" y="170" width="22" height="34" fill="#F3DFA8" opacity="0.35" />
//       <circle cx="94" cy="204" r="2.5" fill={GOLD} />
//       <rect x="62" y="236" width="42" height="4" fill="#D8C3A4" />
//       <rect x="112" y="156" width="30" height="54" rx="2" fill="#FFF3DC" stroke={GOLD} strokeWidth="2" />
//       <path d="M121 168 H133 L138 206 H116 Z" fill={MAROON} />
//       <rect x="116" y="200" width="22" height="6" fill={GOLD} />
//     </g>
//   );
// }

// function SpoolTower({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="-28" y="198" width="56" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-23" y="204" width="46" height="28" fill={MAROON} />
//       <path d="M-23 212 H23 M-23 220 H23 M-23 227 H23" stroke="#A84652" strokeWidth="1.5" />
//       <rect x="-28" y="232" width="56" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-22" y="192" width="44" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-18" y="164" width="36" height="28" fill="#2F7F86" />
//       <path d="M-18 172 H18 M-18 180 H18 M-18 187 H18" stroke="#4FA0A7" strokeWidth="1.5" />
//       <rect x="-22" y="158" width="44" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-16" y="152" width="32" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-13" y="128" width="26" height="24" fill={GOLD} />
//       <path d="M-13 136 H13 M-13 144 H13" stroke="#DDB96F" strokeWidth="1.5" />
//       <rect x="-16" y="122" width="32" height="6" rx="2" fill="#D8C3A4" />
//       <path d="M0 62 Q4 66 3 82 L2 122 H-2 L-3 82 Q-4 66 0 62 Z" fill="#D8C9A8" />
//       <ellipse cx="0" cy="74" rx="1.6" ry="6" fill="#FCF1E8" />
//       <path d="M0 74 C28 70 40 96 18 108 C-4 120 -34 114 -22 138" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" />
//     </g>
//   );
// }

// function Mirror({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <path d="M0 190 L-24 238 M0 190 L24 238 M-13 214 H13" stroke={WOOD} strokeWidth="4" strokeLinecap="round" fill="none" />
//       <ellipse cx="0" cy="140" rx="30" ry="52" fill={GOLD} />
//       <ellipse cx="0" cy="140" rx="25" ry="47" fill="#DCE9EC" />
//       <path d="M-14 120 L-4 100 M-10 136 L6 108" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
//       <circle cx="-30" cy="140" r="3" fill={WOOD} />
//       <circle cx="30" cy="140" r="3" fill={WOOD} />
//     </g>
//   );
// }

// function FabricStack({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="0" y="214" width="70" height="26" rx="3" fill="#D98E8E" />
//       <rect x="4" y="196" width="62" height="18" rx="3" fill="#2B5BA8" />
//       <rect x="-2" y="180" width="72" height="16" rx="3" fill={GOLD_LIGHT} />
//       <rect x="6" y="166" width="58" height="14" rx="3" fill="#5E8C61" />
//       <path d="M4 226 H66 M8 205 H62 M2 188 H68" stroke="#FFFFFF" strokeWidth="1" opacity="0.35" />
//       <path d="M-10 206 Q35 196 82 210" fill="none" stroke="#F2C94C" strokeWidth="7" />
//       <path d="M-10 206 Q35 196 82 210" fill="none" stroke="#8A6A1A" strokeWidth="7" strokeDasharray="1 5" opacity="0.55" />
//       <circle cx="29" cy="162" r="6" fill="none" stroke={MAROON} strokeWidth="3" />
//       <circle cx="41" cy="162" r="6" fill="none" stroke={MAROON} strokeWidth="3" />
//       <path d="M30 156 L42 112" stroke="#B8C0C8" strokeWidth="4" strokeLinecap="round" />
//       <path d="M40 156 L28 112" stroke="#9AA4AD" strokeWidth="4" strokeLinecap="round" />
//       <circle cx="35" cy="138" r="3" fill={GOLD} />
//     </g>
//   );
// }

// /* ---------- the woman with two parrots ---------- */
// function Parrot({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
//   return (
//     <g transform={`translate(${x},${y}) scale(${flip ? -1 : 1},1)`}>
//       {/* tail */}
//       <path d="M-3 -6 Q-9.5 8 -6.5 21 Q0 13 2 -4 Z" fill="#2F8F4E" />
//       <path d="M-6.8 15 Q-5.6 21 -6.5 21 Q-1 18 0.4 11.5 Z" fill="#2B7BC4" />
//       {/* body */}
//       <ellipse cx="0" cy="-13" rx="6.6" ry="11" fill="#4FB45E" transform="rotate(12 0 -13)" />
//       <ellipse cx="1.8" cy="-10" rx="3.6" ry="7.4" fill="#8BD16F" />
//       {/* wing */}
//       <path d="M-5.4 -21 Q-9.5 -8 -4.4 2 Q1 -6 0.4 -20 Z" fill="#2F8F4E" />
//       <path d="M-4.9 -5 Q-4.8 0 -4.4 2 Q-0.6 -2 0 -7 Z" fill="#2B7BC4" />
//       {/* head + neck ring + beak + eye */}
//       <circle cx="3" cy="-27" r="6.3" fill="#4FB45E" />
//       <path d="M-1.8 -22.6 Q3 -19.6 8 -22.8" fill="none" stroke="#E0463A" strokeWidth="1.3" strokeLinecap="round" />
//       <path d="M8.2 -29.8 Q16 -28.6 14.2 -20.4 Q12.2 -24.6 8 -24.2 Z" fill="#E0463A" />
//       <circle cx="5.2" cy="-28.5" r="1.9" fill="#FFFFFF" />
//       <circle cx="5.6" cy="-28.5" r="1" fill="#1A1A1A" />
//       {/* feet */}
//       <path d="M-1.6 -1 L-1.6 3 M2 -1 L2 3" stroke="#E08A3A" strokeWidth="1.2" strokeLinecap="round" />
//     </g>
//   );
// }

// function Woman({ x }: { x: number }) {
//   const skin = "#D9A27A";
//   const skinShade = "#BE8560";
//   const hair = "#2A1A14";
//   const saree = "#B8324A";
//   const blouse = "#1F5F66";
//   return (
//     <g transform={`translate(${x},0)`}>
//       <ellipse cx="0" cy="238" rx="42" ry="4.5" fill={WOOD_LIGHT} opacity=".55" />

//       {/* arms (drawn first, sleeves sit on top) */}
//       <path d="M-25 110 L-39 126 L-53 97" fill="none" stroke={skin} strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M25 110 L39 126 L53 97" fill="none" stroke={skin} strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="-53.5" cy="93.5" r="4.3" fill={skin} />
//       <circle cx="53.5" cy="93.5" r="4.3" fill={skin} />
//       {/* bangles */}
//       <path d="M-56.5 101 L-49 99.4 M56.5 101 L49 99.4" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
//       <path d="M-55.4 104 L-48 102.4 M55.4 104 L48 102.4" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round" />

//       {/* saree skirt, pleats, gold border */}
//       <path d="M-22 128 L22 128 L41 238 Q0 245 -41 238 Z" fill={saree} />
//       <path d="M-10 134 L-19 238 M-2 134 L-5 241 M6 134 L9 241 M14 134 L23 238" stroke="#DC6A80" strokeWidth="1.3" fill="none" opacity=".75" />
//       <path d="M-38.6 226 Q0 232 38.6 226 L41 238 Q0 245 -41 238 Z" fill={GOLD} />
//       <path d="M-39.6 232 Q0 238 39.6 232" fill="none" stroke={MAROON} strokeWidth="1" strokeDasharray="1.5 2.5" />

//       {/* blouse with aari work */}
//       <path d="M-20 100 Q0 93 20 100 L23 130 L-23 130 Z" fill={blouse} />
//       <path d="M-21 100 L-31 107 L-27.5 119 L-19 114 Z" fill={blouse} />
//       <path d="M21 100 L31 107 L27.5 119 L19 114 Z" fill={blouse} />
//       <path d="M-30.5 112 L-24.5 116.5 M30.5 112 L24.5 116.5" stroke={GOLD_LIGHT} strokeWidth="2.2" strokeLinecap="round" />
//       <path d="M-9 100 Q0 113 9 100" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" />
//       <AariFlower x={-8} y={121} r={4.4} />
//       <AariFlower x={8} y={121} r={4.4} />
//       <rect x="-23" y="126" width="46" height="4" fill={GOLD} />

//       {/* pallu over the shoulder */}
//       <path d="M-18 98 L-6 97 L20 130 L30 206 L12 208 L8 134 Z" fill="#8F2338" />
//       <path d="M-18 98 L8 134 L12 208" fill="none" stroke={GOLD} strokeWidth="2" />
//       <circle cx="21" cy="160" r="1.8" fill={GOLD} />
//       <circle cx="24" cy="182" r="1.8" fill={GOLD} />

//       {/* neck + necklace */}
//       <rect x="-4" y="89" width="8" height="13" fill={skinShade} />
//       <path d="M-8 101 Q0 111 8 101" fill="none" stroke={GOLD} strokeWidth="1.6" />
//       <circle cx="0" cy="108.4" r="2" fill="#E0463A" stroke={GOLD} strokeWidth=".8" />

//       {/* hair bun with jasmine */}
//       <circle cx="-2" cy="52" r="9.5" fill={hair} />
//       {[
//         [-9, 48],
//         [-10, 53],
//         [-7, 58],
//         [5, 47],
//         [6, 53],
//         [3, 58],
//       ].map(([cx, cy]) => (
//         <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#FFFFFF" />
//       ))}
//       <path d="M-14 56 Q-2 62 10 56" fill="none" stroke="#5E8C61" strokeWidth="1.4" />

//       {/* head, ears, earrings */}
//       <circle cx="-14.6" cy="79" r="2.6" fill={skin} />
//       <circle cx="14.6" cy="79" r="2.6" fill={skin} />
//       <ellipse cx="0" cy="76" rx="14.6" ry="16.6" fill={skin} />
//       <circle cx="-15" cy="84.4" r="1.8" fill={GOLD} />
//       <circle cx="15" cy="84.4" r="1.8" fill={GOLD} />
//       <path d="M-15 86 V89 M15 86 V89" stroke={GOLD} strokeWidth="1.2" />
//       {/* hair cap + parting + tikka */}
//       <path d="M-15.4 77 Q-18 54 0 53.5 Q18 54 15.4 77 Q12.5 66 6 63.4 Q0 66.4 -6 63.4 Q-12.5 66 -15.4 77 Z" fill={hair} />
//       <path d="M0 55 V64.5" stroke={MAROON} strokeWidth="1.2" />
//       <circle cx="0" cy="66.2" r="1.5" fill={GOLD} />
//       {/* face */}
//       <path d="M-8.4 72 Q-5.2 69.8 -2.4 71.4 M8.4 72 Q5.2 69.8 2.4 71.4" fill="none" stroke={hair} strokeWidth="1.1" strokeLinecap="round" />
//       <ellipse cx="-5.2" cy="76.4" rx="1.6" ry="2" fill={hair} />
//       <ellipse cx="5.2" cy="76.4" rx="1.6" ry="2" fill={hair} />
//       <circle cx="-4.7" cy="75.6" r=".6" fill="#FFFFFF" />
//       <circle cx="5.7" cy="75.6" r=".6" fill="#FFFFFF" />
//       <circle cx="0" cy="70.2" r="1.3" fill="#D8283A" />
//       <path d="M-1.3 79.4 Q0.4 81.6 2 80" fill="none" stroke={skinShade} strokeWidth=".9" strokeLinecap="round" />
//       <circle cx="-8.6" cy="82" r="2.7" fill="#E88A7A" opacity=".4" />
//       <circle cx="8.6" cy="82" r="2.7" fill="#E88A7A" opacity=".4" />
//       <path d="M-4.2 85 Q0 88.8 4.2 85" fill="none" stroke={MAROON} strokeWidth="1.4" strokeLinecap="round" />

//       {/* the two parrots, one on each hand, facing her */}
//       <Parrot x={-53.5} y={90} />
//       <Parrot x={53.5} y={90} flip />
//     </g>
//   );
// }

// /* ---------- Coimbatore: gopuram temple ---------- */
// const TIERS = [
//   { w: 66, y1: 176, y2: 224 },
//   { w: 56, y1: 152, y2: 176 },
//   { w: 47, y1: 130, y2: 152 },
//   { w: 38, y1: 110, y2: 130 },
//   { w: 29, y1: 92, y2: 110 },
//   { w: 20, y1: 78, y2: 92 },
// ];
// const NICHES = [0, 4, 4, 3, 3, 2];

// function Kalasam({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},${y}) scale(${s})`}>
//       <ellipse cx="0" cy="0" rx="3.2" ry="3.8" fill={GOLD} />
//       <path d="M0 -3.8 V-9" stroke={GOLD} strokeWidth="1.4" />
//       <circle cx="0" cy="-10" r="1.3" fill={GOLD} />
//     </g>
//   );
// }

// function Gopuram({ walls = true }: { walls?: boolean }) {
//   return (
//     <g>
//       {walls &&
//         [-1, 1].map((d) => (
//           <g key={d} transform={`scale(${d},1)`}>
//             <rect x="58" y="216" width="56" height="24" fill="#FBF3EA" />
//             {Array.from({ length: 10 }).map((_, i) => (
//               <rect key={i} x={60 + i * 5.6} y="219" width="2.8" height="21" fill="#D9622B" />
//             ))}
//             <rect x="56" y="214" width="60" height="5" fill="#C8774E" />
//             <rect x="56" y="214" width="60" height="1.4" fill={GOLD} />
//           </g>
//         ))}

//       {/* plinth */}
//       <rect x="-72" y="224" width="144" height="16" fill="#B96F48" />
//       <rect x="-72" y="224" width="144" height="2" fill={GOLD} />

//       {/* stepped tiers */}
//       {TIERS.map(({ w, y1, y2 }, i) => {
//         const n = NICHES[i];
//         const step = (2 * w) / (n + 1);
//         return (
//           <g key={i}>
//             <rect x={-w} y={y1} width={2 * w} height={y2 - y1} fill={i % 2 ? "#EDC9A1" : "#F2D6B5"} />
//             {n > 0 &&
//               Array.from({ length: n }).map((_, k) => {
//                 const c = -w + step * (k + 1);
//                 const yt = y1 + 5;
//                 const yb = y2 - 4;
//                 return (
//                   <g key={k}>
//                     <path d={`M${c - 3.5} ${yb} V${yt + 3.5} Q${c} ${yt - 1.5} ${c + 3.5} ${yt + 3.5} V${yb} Z`} fill={MAROON} />
//                     <circle cx={c} cy={yb - 5} r="1.5" fill={GOLD} />
//                   </g>
//                 );
//               })}
//             <rect x={-w - 4} y={y1 - 4} width={2 * w + 8} height="5" fill="#C8774E" />
//             <rect x={-w - 4} y={y1 - 4} width={2 * w + 8} height="1.3" fill={GOLD} />
//             <circle cx={-w - 3} cy={y1 - 6} r="2.1" fill={GOLD} />
//             <circle cx={w + 3} cy={y1 - 6} r="2.1" fill={GOLD} />
//           </g>
//         );
//       })}

//       {/* gate: pillars, arch, door, flank niches, marigold garland */}
//       <rect x="-24" y="198" width="5" height="26" fill="#F8E7CF" />
//       <rect x="19" y="198" width="5" height="26" fill="#F8E7CF" />
//       <rect x="-25" y="196" width="7" height="3" fill={GOLD} />
//       <rect x="18" y="196" width="7" height="3" fill={GOLD} />
//       <path d="M-13 224 V201 Q0 185 13 201 V224 Z" fill="#4A2020" />
//       <path d="M-13 224 V201 Q0 185 13 201 V224" fill="none" stroke={GOLD} strokeWidth="1.6" />
//       <path d="M0 192 V224" stroke="#6B3030" strokeWidth=".9" />
//       {[-44, 44].map((c) => (
//         <g key={c}>
//           <path d={`M${c - 6} 220 V196 Q${c} 188 ${c + 6} 196 V220 Z`} fill={MAROON} />
//           <circle cx={c} cy="212" r="2.6" fill={GOLD} />
//           <circle cx={c} cy="204" r="1.8" fill={GOLD_LIGHT} />
//         </g>
//       ))}
//       <path d="M-23 200 Q0 222 23 200" fill="none" stroke="#F29E2E" strokeWidth="3.4" strokeDasharray="0 5.2" strokeLinecap="round" />
//       <path d="M-23 203.5 Q0 225.5 23 203.5" fill="none" stroke="#E0463A" strokeWidth="2.4" strokeDasharray="0 5.2" strokeLinecap="round" />

//       {/* barrel roof + kalasams */}
//       <path d="M-23 78 Q-23 54 0 50 Q23 54 23 78 Z" fill="#C8774E" />
//       <path d="M-23 78 Q-23 54 0 50 Q23 54 23 78" fill="none" stroke={GOLD} strokeWidth="1.4" />
//       <path d="M-15 76 Q-15 58 0 54 M-7.5 77 Q-7.5 60 0 53 M7.5 77 Q7.5 60 0 53 M15 76 Q15 58 0 54" fill="none" stroke={MAROON} strokeWidth=".9" opacity=".7" />
//       <Kalasam x={-15} y={50} />
//       <Kalasam x={0} y={45} s={1.25} />
//       <Kalasam x={15} y={50} />
//     </g>
//   );
// }

// /* ---------- Coimbatore: Mahadev (Shiva) in meditation ---------- */
// function Mahadev({ x }: { x: number }) {
//   const skin = "#93A6BC";
//   const skinMid = "#7E92AA";
//   const skinDark = "#677C96";
//   const ink = "#2A3340";
//   const hair = "#2E343D";
//   const water = "#8AD0EE";
//   /* rudraksha beads along a hanging curve */
//   const beads = Array.from({ length: 9 }, (_, k) => {
//     const t = (k + 1) / 10;
//     const u = 1 - t;
//     return { x: u * u * -21 + t * t * 21, y: u * u * 150 + 2 * u * t * 206 + t * t * 150 };
//   });
//   return (
//     <g transform={`translate(${x},240) scale(1.1) translate(0,-240)`}>
//       {/* soft halo */}
//       <circle cx="0" cy="112" r="66" fill="#F7E8C6" opacity=".85" />
//       <circle cx="0" cy="112" r="66" fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="2 4" opacity=".7" />

//       {/* stone plinth */}
//       <path d="M-64 240 V224 H64 V240 Z" fill="#CDBF9E" />
//       <rect x="-56" y="214" width="112" height="10" fill="#D9CCAC" />

//       {/* trishul with damaru */}
//       <g transform="translate(60,0)">
//         <rect x="-1.5" y="66" width="3" height="152" fill="#B8A06A" />
//         <path d="M-10 54 Q-10 69 0 71 Q10 69 10 54" fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
//         <path d="M0 42 L-3 58 H3 Z" fill={GOLD} />
//         <path d="M-10 48 L-12.6 58 H-7.4 Z M10 48 L7.4 58 H12.6 Z" fill={GOLD} />
//         <rect x="-10" y="68" width="20" height="2.6" fill={GOLD} />
//         <path d="M-7 80 L7 80 L0 89 Z M-7 98 L7 98 L0 89 Z" fill="#C8774E" stroke={ink} strokeWidth=".6" />
//         <path d="M7 89 Q18 92 13 106" fill="none" stroke={MAROON} strokeWidth="1.2" />
//         <circle cx="13" cy="107" r="1.8" fill={GOLD} />
//         <path d="M0 73 Q10 80 4 94" fill="none" stroke="#E0463A" strokeWidth="1.4" />
//       </g>

//       {/* shoulders + chest with vibhuti lines */}
//       <path d="M-54 214 Q-54 174 -28 164 L-12 158 L12 158 L28 164 Q54 174 54 214 Z" fill={skinMid} stroke={ink} strokeWidth="1" strokeLinejoin="round" />
//       <path d="M-54 214 Q-54 174 -28 164 L-12 158 L-8 214 Z" fill={skinDark} />
//       <path d="M-31 188 Q0 200 31 188 M-33 196 Q0 209 33 196 M-34 204 Q0 217 34 204" fill="none" stroke="#F1F4F8" strokeWidth="1.7" strokeLinecap="round" opacity=".92" />
//       {/* rudraksha mala */}
//       {beads.map((b, i) => (
//         <circle key={i} cx={b.x} cy={b.y} r="2.3" fill="#6B3F2A" stroke="#3E2418" strokeWidth=".5" />
//       ))}

//       {/* cobra around the shoulders, hood rising on the right */}
//       <path d="M-33 172 Q-14 196 4 184 Q18 176 27 186" fill="none" stroke="#2B3036" strokeWidth="5.6" strokeLinecap="round" />
//       <ellipse cx="29" cy="172" rx="7.6" ry="10" fill="#2B3036" />
//       <path d="M24.6 168 Q29 177 33.4 168" fill="none" stroke="#9AA7B5" strokeWidth="1.1" />
//       <circle cx="29" cy="160.6" r="3.6" fill="#2B3036" />
//       <circle cx="27.8" cy="160" r=".8" fill="#F1F4F8" />
//       <circle cx="30.4" cy="160" r=".8" fill="#F1F4F8" />
//       <path d="M29 164 V168" stroke="#E0463A" strokeWidth=".8" />

//       {/* neck, ears, head */}
//       <rect x="-10" y="140" width="20" height="20" fill={skinDark} />
//       <ellipse cx="-21.4" cy="120" rx="3.6" ry="7" fill={skin} stroke={ink} strokeWidth=".7" />
//       <ellipse cx="21.4" cy="120" rx="3.6" ry="7" fill={skin} stroke={ink} strokeWidth=".7" />
//       <ellipse cx="0" cy="118" rx="21" ry="26" fill={skin} stroke={ink} strokeWidth="1" />

//       {/* matted hair, long locks, spiral top-knot */}
//       <path d="M-25 112 Q-31 82 -8 79 Q0 72 8 79 Q31 82 25 112 Q22 95 0 91 Q-22 95 -25 112 Z" fill={hair} />
//       <path d="M-25 108 Q-37 130 -32 162 Q-24 142 -21 116 Z" fill={hair} />
//       <path d="M25 108 Q37 130 32 162 Q24 142 21 116 Z" fill={hair} />
//       <path d="M-30 128 Q-28 140 -31 152 M30 128 Q28 140 31 152" fill="none" stroke="#454C57" strokeWidth="1" />
//       <ellipse cx="0" cy="70" rx="11" ry="12" fill={hair} />
//       <path d="M-8 66 Q0 60 8 66 Q4 72 -4 70 Q0 66 3 67" fill="none" stroke="#454C57" strokeWidth="1.2" strokeLinecap="round" />
//       <path d="M-9 74 Q0 79 9 74" fill="none" stroke="#454C57" strokeWidth="1" />
//       {/* crescent moon */}
//       <path d="M0 -9 A9 9 0 0 0 0 9 A13.5 13.5 0 0 1 0 -9 Z" fill="#EEF1F4" stroke="#B8C0CA" strokeWidth=".6" transform="translate(15,62) rotate(25)" />
//       {/* Ganga flowing from the hair */}
//       <path d="M-9 64 Q-24 82 -19 100 Q-14 114 -23 136" fill="none" stroke={water} strokeWidth="3.8" strokeLinecap="round" />
//       <path d="M-9 64 Q-24 82 -19 100 Q-14 114 -23 136" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 5" strokeLinecap="round" opacity=".8" />
//       <circle cx="-23.6" cy="142" r="1.5" fill={water} />
//       <circle cx="-26" cy="149" r="1.2" fill={water} />

//       {/* forehead: tripundra, third eye */}
//       <path d="M-10.6 94.6 H10.6 M-10.2 98 H10.2 M-9.6 101.4 H9.6" fill="none" stroke="#F4F6F9" strokeWidth="1.5" strokeLinecap="round" />
//       <path d="M0 102.6 Q2.4 106.4 0 110 Q-2.4 106.4 0 102.6 Z" fill="#D8472F" stroke={ink} strokeWidth=".6" />
//       {/* serene closed eyes, brows, nose, smile */}
//       <path d="M-12 114.6 Q-7 112.4 -2.6 114.4 M12 114.6 Q7 112.4 2.6 114.4" fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
//       <path d="M-11 120 Q-7 123 -3 120 M3 120 Q7 123 11 120" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
//       <path d="M0 122 V130.4 M-3 131.6 Q0 133.6 3 131.6" fill="none" stroke="#4A586C" strokeWidth="1.2" strokeLinecap="round" />
//       <path d="M-5.6 138 Q0 141.6 5.6 138" fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
//       {/* gold kundala earrings */}
//       <circle cx="-22.2" cy="129.4" r="3" fill="none" stroke={GOLD} strokeWidth="1.6" />
//       <circle cx="22.2" cy="129.4" r="3" fill="none" stroke={GOLD} strokeWidth="1.6" />
//     </g>
//   );
// }

// /* ---------- Coimbatore: skyline, hills, mills ---------- */
// function Building({ x, w, h, dome = false, antenna = false }: { x: number; w: number; h: number; dome?: boolean; antenna?: boolean }) {
//   const top = 240 - h;
//   const cols = Math.max(1, Math.floor((w - 6) / 9));
//   const rows = Math.max(1, Math.floor((h - 10) / 14));
//   const cw = (w - 10) / cols;
//   return (
//     <g>
//       <rect x={x} y={top} width={w} height={h} fill="#E8DAC1" />
//       {dome && <path d={`M${x + 3} ${top} Q${x + w / 2} ${top - w * 0.75} ${x + w - 3} ${top} Z`} fill="#E8DAC1" />}
//       {antenna && <path d={`M${x + w / 2} ${top} V${top - 26}`} stroke="#DCCBA9" strokeWidth="2" />}
//       {Array.from({ length: rows }).flatMap((_, r) =>
//         Array.from({ length: cols }).map((__, c) => (
//           <rect key={`${r}-${c}`} x={x + 5 + c * cw} y={top + 8 + r * 14} width={Math.max(3, cw - 3)} height="6" fill="#F7EFDF" />
//         )),
//       )}
//     </g>
//   );
// }

// /* Coimbatore is "the Manchester of South India": a sawtooth textile mill with a chimney */
// function TextileMill({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="0" y="196" width="84" height="44" fill="#E3D3B6" />
//       <path d="M0 196 L0 178 L21 196 L21 178 L42 196 L42 178 L63 196 L63 178 L84 196 Z" fill="#E3D3B6" />
//       <rect x="90" y="120" width="10" height="120" fill="#DCCBA9" />
//       <rect x="88" y="116" width="14" height="6" fill="#D2BF98" />
//       <rect x="10" y="212" width="12" height="28" fill="#F7EFDF" />
//       <rect x="34" y="208" width="14" height="10" fill="#F7EFDF" />
//       <rect x="56" y="208" width="14" height="10" fill="#F7EFDF" />
//     </g>
//   );
// }

// const SKYLINE: { x: number; w: number; h: number; dome?: boolean; antenna?: boolean }[] = [
//   { x: 566, w: 30, h: 112 },
//   { x: 600, w: 26, h: 134, antenna: true },
//   { x: 638, w: 28, h: 102 },
//   { x: 676, w: 30, h: 80 },
//   { x: 710, w: 38, h: 106, dome: true },
//   { x: 752, w: 26, h: 92 },
//   { x: 782, w: 34, h: 124 },
//   { x: 820, w: 30, h: 84 },
//   { x: 1124, w: 34, h: 102 },
//   { x: 1162, w: 28, h: 128, antenna: true },
//   { x: 1194, w: 40, h: 90 },
//   { x: 1238, w: 30, h: 116, dome: true },
//   { x: 1272, w: 36, h: 80 },
//   { x: 1312, w: 30, h: 106 },
//   { x: 1346, w: 40, h: 132 },
//   { x: 1390, w: 28, h: 94 },
//   { x: 1422, w: 34, h: 114 },
//   { x: 1460, w: 30, h: 86 },
//   { x: 1494, w: 38, h: 102 },
//   { x: 1536, w: 28, h: 122, antenna: true },
// ];

// function Skyline() {
//   return (
//     <g>
//       {/* pale sun behind the temple */}
//       <circle cx="1010" cy="122" r="74" fill="#F7E8C6" opacity=".75" />
//       <circle cx="210" cy="96" r="30" fill="#F7E8C6" opacity=".7" />

//       {/* Western Ghats: far + near hills */}
//       <path
//         d="M0 240 V150 C60 120 110 112 170 140 C230 168 270 120 340 100 C410 80 450 130 520 150 C600 172 650 130 720 120 C790 110 840 150 900 160 C980 175 1040 120 1110 110 C1180 100 1230 150 1300 150 C1370 150 1420 110 1490 105 C1560 100 1610 140 1680 135 C1720 133 1745 125 1760 120 V240 Z"
//         fill="#E2E8D6"
//       />
//       {/* Marudhamalai hill temple */}
//       <g transform="translate(340 58) scale(.2)" opacity=".85">
//         <Gopuram walls={false} />
//       </g>
//       <path
//         d="M0 240 V185 C80 165 150 175 230 190 C320 205 400 170 480 172 C580 175 640 200 740 195 C840 190 900 170 1000 176 C1100 182 1180 200 1280 190 C1380 180 1450 170 1560 176 C1650 181 1710 190 1760 184 V240 Z"
//         fill="#ECE0CA"
//       />

//       {/* city blocks + textile mill */}
//       {SKYLINE.map((b) => (
//         <Building key={b.x} {...b} />
//       ))}
//       <TextileMill x={454} />
//     </g>
//   );
// }

// /* ---------- festive bunting ---------- */
// const BUNTING_COLORS = [MAROON, GOLD, "#2F7F86", "#2B5BA8", "#5E8C61"];

// function Bunting() {
//   const swags = Array.from({ length: 8 }, (_, i) => i * 220);
//   return (
//     <g opacity=".95">
//       {swags.map((x0, si) => (
//         <g key={x0}>
//           <path d={`M${x0} 12 Q${x0 + 110} 34 ${x0 + 220} 12`} fill="none" stroke="#B89A5A" strokeWidth="1" />
//           {Array.from({ length: 9 }, (_, k) => {
//             const t = (k + 1) / 10;
//             const px = x0 + 220 * t;
//             const py = (1 - t) ** 2 * 12 + 2 * (1 - t) * t * 34 + t ** 2 * 12;
//             const c = BUNTING_COLORS[(si * 9 + k) % BUNTING_COLORS.length];
//             return <path key={k} d={`M${px - 5.5} ${py} L${px + 5.5} ${py} L${px} ${py + 12} Z`} fill={c} />;
//           })}
//         </g>
//       ))}
//     </g>
//   );
// }

// /* ---------- the whole scene ---------- */
// function Scene() {
//   return (
//     <g>
//       <Skyline />
//       <Bunting />
//       <Mahadev x={1672} />

//       {/* ground band + captions */}
//       <rect x="0" y="240" width={SCENE_W} height="20" fill="#F1E6D0" />
//       <rect x="0" y="240" width={SCENE_W} height="1.5" fill="#E2D2AE" />
//       <text x="440" y="254" textAnchor="middle" fontSize="8.4" fontFamily="serif" letterSpacing="6" fill="#B0873A">
//         COIMBATORE
//       </text>
//       <text x="1320" y="254" textAnchor="middle" fontSize="8.4" fontFamily="serif" letterSpacing="6" fill="#B0873A">
//         TAMIL NADU · INDIA
//       </text>

//       {/* sparkles */}
//       <Sparkle x={62} y={74} s={1.1} />
//       <Sparkle x={150} y={118} s={0.8} />
//       <Sparkle x={296} y={62} />
//       <Sparkle x={420} y={96} s={0.9} />
//       <Sparkle x={586} y={58} s={1.1} />
//       <Sparkle x={835} y={70} />
//       <Sparkle x={1118} y={64} s={1.1} />
//       <Sparkle x={1292} y={52} />
//       <Sparkle x={1590} y={66} s={1.2} />
//       <Sparkle x={1736} y={96} s={0.9} />

//       {/* foreground: left half */}
//       <Plant x={24} />
//       <DressForm x={100} color={MAROON} trim={GOLD} aari />
//       <AariFrame x={160} />
//       <SewingMachine x={300} s={0.86} />
//       <ClothesRail x={440} />
//       <Woman x={697} />
//       <SareeMannequin x={822} />

//       {/* foreground: right half */}
//       <g transform="translate(1010,0)">
//         <Gopuram />
//       </g>
//       <Shop x={1130} />
//       <SpoolTower x={1332} />
//       <Mirror x={1402} />
//       <DressForm x={1472} color="#2B5BA8" trim={GOLD_LIGHT} aari />
//       <FabricStack x={1522} />
//       <Plant x={1716} s={1.2} />
//       <Plant x={1744} />
//     </g>
//   );
// }

// /* The whole scene is always one line: it simply scales to the width of the screen. */
// function FashionStrip() {
//   return (
//     <div className="relative mt-6 overflow-hidden border-b-[3px] border-gold-200 bg-gold-50/50">
//       <svg
//         viewBox={`0 0 ${SCENE_W} ${SCENE_H}`}
//         className="block h-auto w-full"
//         aria-hidden="true"
//         focusable="false"
//       >
//         <Scene />
//       </svg>
//     </div>
//   );
// }

// /* ========================================================
//    FOOTER
//    ======================================================== */
// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="relative w-full overflow-hidden border-t border-[#EFEBE4] bg-white font-sans text-stone-600">
//       {/* Decorative: gold top accent line + soft glows */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#B8324A]/5 blur-3xl"
//       />

//       <div className="site-container relative z-10 pt-14 sm:pt-16">

//         {/* Brand + link columns */}
//         <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-12 lg:grid-cols-[1.9fr_1fr_1.1fr_1fr_1.5fr] lg:gap-x-10">

//           {/* Brand (left of Quick Links) */}
//           <div className="col-span-2 lg:col-span-1">
//             <Link href="/" className="group inline-flex items-center gap-3">
//               <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold-300 bg-white p-0.5 shadow-sm sm:h-14 sm:w-14">
//                 <Image
//                   src="/logo.jpg"
//                   alt="Dev Fashion Official Logo"
//                   fill
//                   sizes="56px"
//                   className="object-contain p-0.5"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-serif text-xl font-bold leading-none tracking-[0.14em] text-stone-950 transition-colors group-hover:text-gold-600 sm:text-2xl">
//                   DEV FASHION
//                 </span>
//                 <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-600 sm:text-[10px]">
//                   Bridal Couture &amp; Boutique Atelier
//                 </span>
//               </div>
//             </Link>

//             {/* <p className="mt-5 max-w-sm text-sm leading-7 text-justify text-stone-600">
//             <b> OUR PROMISE </b>
//              every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
//               <br /><br />
//              Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.

//             </p> */}

//              <div className="p-6 border-l-2 border-[#C5A059]/80 space-y-3 font-serif text-base font-medium text-[#C8A96A] mb-3">
//               <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-medium block">
//                 OUR PROMISE
//               </span>
//               <p className="text-stone-300 text-xs leading-relaxed font-light text-justify">
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
//               </p>
//               <p className="text-stone-300 text-xs leading-relaxed font-light pt-2 border-t border-stone-800 text-justify">
//                 &nbsp;&nbsp;&nbsp;Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.
//               </p>
//             </div>

//             <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
//               <Link
//                 href="/gallery"
//                 className="inline-flex min-h-11 items-center justify-center border border-gold-300 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-900 transition-all duration-300 hover:border-gold-600 hover:bg-gold-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
//               >
//                 Explore Our Designs
//               </Link>
//               <Link
//                 href="/contact#booking"
//                 className="inline-flex min-h-11 items-center justify-center border border-stone-900 bg-stone-900 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-gold-600 hover:bg-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
//               >
//                 Book a Consultation
//               </Link>
//             </div>
//           </div>

//           <div>
//             <h3 className={headingClass}>Quick Links</h3>
//             <ul>
//               {QUICK_LINKS.map((l) => (
//                 <li key={l.label}>
//                   <Link href={l.href} className={linkClass}>
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className={headingClass}>Our Services</h3>
//             <ul>
//               {SERVICE_LINKS.map((l) => (
//                 <li key={l.label}>
//                   <Link href={l.href} className={linkClass}>
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className={headingClass}>The Studio</h3>
//             <ul>
//               {STUDIO_LINKS.map((l) => (
//                 <li key={l.label}>
//                   <Link href={l.href} className={linkClass}>
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <a
//                   href={DIRECTIONS_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={linkClass}
//                 >
//                   Get Directions
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-span-2 lg:col-span-1">
//             <h3 className={headingClass}>Connect With Us</h3>
//             <ul className="space-y-3 text-[14px] text-stone-600">
//               <li className="flex items-center gap-2.5">
//                 <Mail className="h-4 w-4 shrink-0 text-gold-600" />
//                 <a
//                   href={`mailto:${EMAIL}`}
//                   className="break-all transition-colors hover:text-gold-600"
//                 >
//                   {EMAIL}
//                 </a>
//               </li>
//               <li className="flex items-center gap-2.5">
//                 <Phone className="h-4 w-4 shrink-0 text-gold-600" />
//                 <a
//                   href={`tel:${PHONE_TEL}`}
//                   className="transition-colors hover:text-gold-600"
//                 >
//                   {PHONE_DISPLAY}
//                 </a>
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
//                 <a
//                   href={DIRECTIONS_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="leading-relaxed transition-colors hover:text-gold-600"
//                 >
//                   No 37, 9th Street, Tatabad, Gandhipuram, Coimbatore, Tamil Nadu 641012
//                 </a>
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
//                 <div className="leading-relaxed">
//                   <span className="block text-stone-700">{HOURS_MAIN}</span>
//                   <span className="block text-xs text-stone-500">{HOURS_SUNDAY}</span>
//                 </div>
//               </li>
//             </ul>

//             <div className="mt-5 flex items-center gap-3">
//               <a
//                 href="https://www.instagram.com/devfashion_bridalblouse/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className={socialClass}
//               >
//                 <FaInstagram className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://www.facebook.com/devblouse/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className={socialClass}
//               >
//                 <FaFacebook className="h-5 w-5" />
//               </a>
//               <a
//                 href={WHATSAPP_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className={socialClass}
//               >
//                 <FaWhatsapp className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Ornament divider */}
//         <div aria-hidden="true" className="flex items-center gap-4 pb-8">
//           <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-300" />
//           <span className="font-serif text-sm tracking-[0.4em] text-gold-600">✦ ✦ ✦</span>
//           <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-300" />
//         </div>

//         {/* Payments + guarantee */}
//         <div className="flex flex-col items-center justify-between gap-6 pb-8 lg:flex-row">
//           <div className="flex w-full min-w-0 flex-col items-start gap-3 lg:flex-1">
//             <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-600">
//               We Accept
//             </span>
//             <ul
//               aria-label="Accepted payment methods"
//               className="flex w-full flex-nowrap items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {[...CARD_METHODS, ...OTHER_METHODS].map((method) => (
//                 <PaymentChip key={method.label} method={method} />
//               ))}
//             </ul>
//           </div>

//           <div className="flex items-center gap-3 rounded-sm border border-gold-200 bg-gold-50/50 px-5 py-3">
//             <Lock className="h-5 w-5 shrink-0 text-gold-600" />
//             <div className="leading-tight">
//               <p className="font-serif text-sm font-semibold text-stone-950">Secure Design Guarantee</p>
//               <p className="text-[11px] text-stone-600">
//                 Safe payments &bull; Your measurements stay private
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="flex flex-col items-center gap-3 border-t border-gold-200 py-6 text-center text-xs text-stone-500 md:flex-row md:justify-between md:text-left">
//           <p className="leading-relaxed">
//             &copy; {currentYear} Dev Fashion. All rights reserved.
//             <span className="mx-2 hidden text-gold-400 md:inline">|</span>
//             <span className="block md:inline"> Design and developed with love by Shahi.</span>
//           </p>

//           <div className="flex items-center gap-4">
//             <Link href="/privacy" className="inline-flex min-h-[44px] items-center transition-colors hover:text-gold-600">
//               Privacy Policy
//             </Link>
//             <span className="text-stone-300">&bull;</span>
//             <Link href="/terms" className="inline-flex min-h-[44px] items-center transition-colors hover:text-gold-600">
//               Terms &amp; Conditions
//             </Link>
//             <button
//               type="button"
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               aria-label="Back to top"
//               className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-gold-200 bg-white text-gold-600 transition-colors hover:bg-gold-600 hover:text-white md:mr-24"
//             >
//               <ArrowUp className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Fashion cartoon strip */}
//       <FashionStrip />
//     </footer>
//   );
// }




























// // import Link from "next/link";
// // import Image from "next/image";
// // import { Mail, Phone, MapPin, Clock } from "lucide-react";

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer className="bg-[#0F0E0D] text-[#FAF8F5] border-t border-[#C5A059]/25 py-16 sm:py-20 lg:py-24 font-sans w-full">
// //       <div className="site-container">
    

// //         {/* Main 4-Column Editorial Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-12">
          
// //           {/* Column 1: Brand & Promise (Col Span 4) */}
// //           <div className="lg:col-span-4 flex flex-col space-y-6">
            
// //             <Link href="/" className="flex items-center gap-3.5 group self-start">
// //               <div className="relative h-11 w-11 rounded-full border border-[#C5A059]/60 bg-[#161514] p-0.5 overflow-hidden shrink-0 shadow-sm">
// //                 <Image
// //                   src="/logo.jpg"
// //                   alt="Dev Fashion Official Logo"
// //                   fill
// //                   className="object-cover p-0.8"
// //                 />
// //               </div>
// //               <div className="flex flex-col">
// //                 <span className="font-serif text-2xl tracking-[0.2em] font-light text-white group-hover:text-[#C5A059] transition-colors leading-tight">
// //                   DEV FASHION
// //                 </span>
// //                 <span className="text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-medium mt-0.5">
// //                   PREMIUM BOUTIQUE &amp; TAILORING
// //                 </span>
// //               </div>
// //             </Link>

// //             {/* Our Promise Quiet Luxury Panel */}
// //             <div className="p-6 bg-[#161514] border-l-2 border-[#C5A059]/80 space-y-3 font-serif text-base font-medium text-[#C8A96A] mb-3">
// //               <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-medium block">
// //                 OUR PROMISE
// //               </span>
// //               <p className="text-stone-300 text-xs leading-relaxed font-light text-justify">
// //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
// //               </p>
// //               <p className="text-stone-300 text-xs leading-relaxed font-light pt-2 border-t border-stone-800 text-justify">
// //                 &nbsp;&nbsp;&nbsp;Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.
// //               </p>
// //             </div>

// //           </div>

// //           {/* Column 2: Explore Navigation (Col Span 2) */}
// //           <div className="lg:col-span-2 space-y-5 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
// //             <h3 className="tracking-[0.3em] text-[#C5A059] pb-2 border-b border-[#C5A059]/15 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
// //               Explore
// //             </h3>
// //             <ul className="space-y-3 text-xs font-lato text-stone-300">
// //               <li>
// //                 <Link href="/" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/about" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
// //                   About Brand
// //                 </Link>
// //               </li>
// //                <li>
// //                 <Link href="/classes" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
// //                   Our Tailoring Classes
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/services" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
// //                   Our Services
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/jewelry" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
// //                   Our Jewelry Rental
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/gallery" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
// //                   Design Gallery
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/contact" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
// //                   Book Consultation
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Column 3: Services (Col Span 3) */}
// //           <div className="lg:col-span-3 space-y-5 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
// //             <h3 className="tracking-[0.3em] text-[#C5A059] pb-2 border-b border-[#C5A059]/15 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
// //               Services
// //             </h3>
// //             <ul className="space-y-3 text-xs font-lato text-stone-400">
// //               <li className="hover:text-stone-200 transition-colors py-0.5">Custom Blouse Stitching</li>
// //               <li className="hover:text-stone-200 transition-colors py-0.5">Bridal Wear Design</li>
// //               <li className="hover:text-stone-200 transition-colors py-0.5">Designer Saree Blouses</li>
// //               <li className="hover:text-stone-200 transition-colors py-0.5">Alteration Services</li>
// //               <li className="hover:text-stone-200 transition-colors py-0.5">South Indian Jewellery Rental</li>
// //               <li className="hover:text-stone-200 transition-colors py-0.5">Saree Draping & Bridal Styling</li>
// //               <li className="hover:text-stone-200 transition-colors py-0.5">Bridal Mehendi</li>
// //               <li className="hover:text-stone-200 transition-colors py-0.5">Occasion Wear Design</li>
// //             </ul>
// //           </div>

// //           {/* Column 4: Connect & Concierge (Col Span 3) */}
// //           <div className="lg:col-span-3 space-y-6 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
// //             <h3 className="tracking-[0.3em] text-[#C5A059] pb-2 border-b border-[#C5A059]/15 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
// //               Connect
// //             </h3>

// //             <ul className="space-y-4 text-xs font-lato text-stone-300">
// //               <li className="flex items-start gap-3">
// //                 <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
// //                 <span className="leading-relaxed font-light">
// //                   No 37, 9th Street, tatabed,<br />
// //                   Gandipuram, coimbatore,<br />
// //                   Tamil Nadu 641012, India
// //                 </span>
// //               </li>

// //               <li className="flex items-center gap-3">
// //                 <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
// //                 <a href="tel:+918098558923" className="hover:text-[#C5A059] transition-colors font-light tracking-wide">+91 80985 58923</a>
// //               </li>

// //               <li className="flex items-center gap-3">
// //                 <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
// //                 <a href="mailto:contact@devfashion.com" className="hover:text-[#C5A059] transition-colors font-light">contact@devfashion.com</a>
// //               </li>

// //               <li className="flex items-start gap-3">
// //                 <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
// //                 <div className="font-light">
// //                   <span className="block text-stone-200">Mon - Sat: 10:00 AM - 8:00 PM</span>
// //                   <span className="block text-[11px] text-stone-400 mt-0.5">Sunday: 11:00 AM - 5:00 PM (Appointments Only)</span>
// //                 </div>
// //               </li>
// //             </ul>

// //             {/* Social Icons & Teaser */}
// //             <div className="pt-4 border-t border-stone-800 space-y-3">
// //               <span className="text-[10px] font-medium tracking-[0.25em] text-[#C5A059] uppercase block">
// //                 FOLLOW US
// //               </span>

// //               <div className="flex items-center gap-3">
// //                 <a
// //                   href="https://www.instagram.com/devfashion_bridalblouse/?hl=en"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#161514] flex items-center justify-center text-stone-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
// //                   aria-label="Instagram"
// //                 >
// //                   <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
// //                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
// //                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
// //                   </svg>
// //                 </a>

// //                 <a
// //                   href="https://facebook.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#161514] flex items-center justify-center text-stone-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
// //                   aria-label="Facebook"
// //                 >
// //                   <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
// //                   </svg>
// //                 </a>

// //                 <a
// //                   href="https://twitter.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#161514] flex items-center justify-center text-stone-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
// //                   aria-label="Twitter"
// //                 >
// //                   <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768m2.46-2.46L20 4" />
// //                   </svg>
// //                 </a>
// //               </div>

// //               <p className="text-stone-400 text-xs italic font-serif">
// //                 be the first to know about new arrivals
// //               </p>
// //             </div>

// //           </div>

// //         </div>

// //         {/* Bottom Legal & Guarantee Bar */}
// //         <div className="pt-8 border-t border-[#C5A059]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-lato">
          
// //           <div className="text-center md:text-left font-light">
// //             &copy; {currentYear} Dev Fashion. All rights reserved. Design and developed with love by Shahi.
// //           </div>

// //           <div className="flex items-center space-x-6 text-stone-300">
// //             <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
// //             <span className="text-stone-700">•</span>
// //             <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms &amp; Conditions</Link>
// //           </div>

// //           <div className="text-[10px] tracking-[0.25em] text-[#C5A059] font-medium uppercase">
// //             ✦ Secure Design Guarantee ✦
// //           </div>

// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }

























// "use client";

// import { useState, type ComponentType } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ArrowUp,
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Landmark,
//   Banknote,
//   Lock,
// } from "lucide-react";
// import {
//   FaCcAmex,
//   FaCcDinersClub,
//   FaCcDiscover,
//   FaCcJcb,
//   FaCcMastercard,
//   FaCcVisa,
//   FaFacebook,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { SiGooglepay, SiPaytm, SiPhonepe } from "react-icons/si";

// /* ---------- Shared business info (edit here, used below) ---------- */
// const PHONE_DISPLAY = "+91 80985 58923";
// const PHONE_TEL = "+918098558923";
// const EMAIL = "contact@devfashion.com";
// const HOURS_MAIN = "Mon - Sat: 8:00 AM - 9:00 PM";
// const HOURS_SUNDAY = "Sunday: 11:00 AM - 5:00 PM (Appointments Only)";
// const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=11.0211,76.9614";
// const WHATSAPP_URL =
//   "https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20have%20a%20tailoring%20enquiry.";


// /* Payment methods shown in the footer — edit these lists to match what the studio really accepts.
//    - `icon`: a ready-made brand icon from react-icons.
//    - `logo`: an official logo file you add to /public/payments/ (RuPay, UPI). Until the file exists, the chip
//      falls back to a plain text label, so nothing breaks. NPCI publishes the official UPI and RuPay artwork on
//      its website; use it unmodified.
//    - `showLabel`: show the text next to the icon (for things without a brand logo, like Cash). */
// type PaymentMethod = {
//   label: string;
//   icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
//   iconClass?: string;
//   logo?: string;
//   showLabel?: boolean;
// };

// const CARD_METHODS: PaymentMethod[] = [
//   { label: "Visa", icon: FaCcVisa, iconClass: "text-[#1A1F71]" },
//   { label: "Mastercard", icon: FaCcMastercard, iconClass: "text-[#EB001B]" },
//   { label: "RuPay", logo: "/payments/rupay.svg" }, // official RuPay logo file goes in /public/payments/
//   { label: "American Express", icon: FaCcAmex, iconClass: "text-[#006FCF]" },
//   { label: "Diners Club", icon: FaCcDinersClub, iconClass: "text-[#0079BE]" },
//   { label: "Discover", icon: FaCcDiscover, iconClass: "text-[#FF6000]" },
//   { label: "JCB", icon: FaCcJcb, iconClass: "text-[#0B4EA2]" },
// ];

// const OTHER_METHODS: PaymentMethod[] = [
//   { label: "Google Pay", icon: SiGooglepay, iconClass: "text-[#4285F4]" },
//   { label: "PhonePe", icon: SiPhonepe, iconClass: "text-[#5F259F]" },
//   { label: "Paytm", icon: SiPaytm, iconClass: "text-[#00BAF2]" },
//   { label: "Bank Transfer", icon: Landmark, iconClass: "text-gold-600", showLabel: true },
//   { label: "Cash", icon: Banknote, iconClass: "text-emerald-600", showLabel: true },
// ];

// function PaymentChip({ method }: { method: PaymentMethod }) {
//   const [logoFailed, setLogoFailed] = useState(false);
//   const { label, icon: Icon, iconClass = "", logo, showLabel } = method;
//   /* chips stay white so every brand logo is easy to read on the dark footer */
//   const chip =
//     "flex h-10 shrink-0 items-center justify-center gap-2 rounded-sm border border-[#C5A059]/30 bg-white px-3 transition-colors duration-300 hover:border-[#C5A059]";

//   if (logo && !logoFailed) {
//     return (
//       <li className={chip} title={label}>
//         <Image
//           src={logo}
//           alt={label}
//           width={64}
//           height={28}
//           className="h-5 w-auto object-contain"
//           onError={() => setLogoFailed(true)}
//         />
//       </li>
//     );
//   }

//   if (Icon && !showLabel) {
//     return (
//       <li className={chip} title={label}>
//         <Icon className={`h-6 w-auto ${iconClass}`} aria-hidden />
//         <span className="sr-only">{label}</span>
//       </li>
//     );
//   }

//   return (
//     <li className={`${chip} text-xs font-semibold uppercase tracking-[0.12em] text-stone-700`}>
//       {Icon && <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden />}
//       {label}
//     </li>
//   );
// }

// const QUICK_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Contact", href: "/contact" },
//   { label: "Reviews", href: "/reviews" },
// ];

// const SERVICE_LINKS = [
//   { label: "Custom Blouse Stitching", href: "/services" },
//   { label: "Bridal Wear Design", href: "/services" },
//   { label: "Designer Saree Blouses", href: "/services" },
//   { label: "Alteration Services", href: "/services" },
// ];

// const STUDIO_LINKS = [
//   { label: "Tailoring Classes", href: "/classes" },
//   { label: "Jewelry Rental", href: "/jewelry" },
//   { label: "Book Consultation", href: "/contact#booking" },
// ];

// /* Old footer look: dark #0F0E0D, gold #C5A059, stone-300 text */
// const headingClass =
//   "mb-3 border-b border-[#C5A059]/15 pb-2 font-serif text-base font-medium uppercase tracking-[0.3em] text-[#C5A059]";
// const linkClass =
//   "inline-block py-0.5 text-xs font-light tracking-wide text-stone-300 transition-colors duration-300 hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]";
// const socialClass =
//   "flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/30 bg-[#161514] text-stone-300 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]";

// /* ========================================================
//    FASHION + COIMBATORE STRIP (inline SVG, edit colours freely)
//    One wide scene (1760 x 260) that scales to any screen width.
//    ======================================================== */
// const SCENE_W = 1760;
// const SCENE_H = 260;

// const GOLD = "#C5A059";
// const GOLD_LIGHT = "#E6CC8E";
// const MAROON = "#8E2A35";
// const WOOD = "#8C5A3A";
// const WOOD_LIGHT = "#A9714B";

// /* ---------- small reusable pieces ---------- */
// function Sparkle({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},${y}) scale(${s})`}>
//       <path
//         d="M0 -7 Q1 -1 7 0 Q1 1 0 7 Q-1 1 -7 0 Q-1 -1 0 -7Z"
//         fill={GOLD}
//         className="motion-safe:animate-pulse"
//         style={{ animationDelay: `${(x % 7) * 0.3}s`, animationDuration: "2.4s" }}
//       />
//     </g>
//   );
// }

// function Plant({ x, s = 1 }: { x: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},240) scale(${s}) translate(0,-240)`}>
//       <ellipse cx="0" cy="188" rx="6" ry="18" fill="#5E8C61" />
//       <ellipse cx="-10" cy="194" rx="5" ry="14" fill="#6FA073" transform="rotate(-30 -10 194)" />
//       <ellipse cx="10" cy="194" rx="5" ry="14" fill="#6FA073" transform="rotate(30 10 194)" />
//       <path d="M-12 214 L12 214 L8 240 L-8 240 Z" fill="#C77B58" />
//       <rect x="-14" y="210" width="28" height="6" rx="2" fill="#B3673F" />
//     </g>
//   );
// }

// /* Aari (hook-embroidery) flower motif: gold petals + a bead */
// function AariFlower({
//   x,
//   y,
//   r = 5,
//   petal = GOLD_LIGHT,
//   center = MAROON,
// }: {
//   x: number;
//   y: number;
//   r?: number;
//   petal?: string;
//   center?: string;
// }) {
//   return (
//     <g transform={`translate(${x},${y})`}>
//       {[0, 60, 120, 180, 240, 300].map((a) => (
//         <ellipse key={a} cx="0" cy={-r * 0.9} rx={r * 0.4} ry={r * 0.64} fill={petal} transform={`rotate(${a})`} />
//       ))}
//       <circle r={r * 0.36} fill={center} />
//     </g>
//   );
// }

// /* Dress form wearing a blouse. aari = heavy gold embroidery */
// function DressForm({ x, color, trim, aari = false }: { x: number; color: string; trim: string; aari?: boolean }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <ellipse cx="0" cy="236" rx="34" ry="5" fill={WOOD_LIGHT} />
//       <rect x="-3" y="170" width="6" height="66" fill={WOOD} />
//       <rect x="-5" y="68" width="10" height="14" rx="3" fill="#D8C3A4" />
//       <circle cx="0" cy="65" r="4" fill={WOOD} />
//       <path d="M-36 114 L-24 92 L-19 100 L-27 119 Z" fill={color} />
//       <path d="M36 114 L24 92 L19 100 L27 119 Z" fill={color} />
//       <path d="M-24 92 Q0 80 24 92 L30 122 Q32 150 20 172 L-20 172 Q-32 150 -30 122 Z" fill={color} />
//       <path d="M-13 87 Q0 112 13 87 Q0 82 -13 87 Z" fill="#E9D5B8" />
//       <path d="M-13 87 Q0 112 13 87" fill="none" stroke={trim} strokeWidth="1.6" />
//       <rect x="-21" y="164" width="42" height="6" fill={trim} />
//       {aari ? (
//         <>
//           {/* double neckline border + sleeve cuffs */}
//           <path d="M-11 90 Q0 108 11 90" fill="none" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1.2 2.4" />
//           <path d="M-36 114 L-27 119 M36 114 L27 119" stroke={GOLD_LIGHT} strokeWidth="3" strokeLinecap="round" />
//           <path d="M-33 108 L-25 112.5 M33 108 L25 112.5" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1 2" />
//           {/* bust flowers, centre vine, lower flowers */}
//           <AariFlower x={-11} y={123} r={6} petal={GOLD_LIGHT} center="#F3DFA8" />
//           <AariFlower x={11} y={123} r={6} petal={GOLD_LIGHT} center="#F3DFA8" />
//           <path d="M0 100 V162" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1 2.6" />
//           <AariFlower x={0} y={142} r={4.4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={-17} y={149} r={3.4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={17} y={149} r={3.4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           {/* mirror-work dots on the hem band */}
//           {[-15, -9, -3, 3, 9, 15].map((d) => (
//             <circle key={d} cx={d} cy="167" r="1.3" fill="#FBF3EA" />
//           ))}
//         </>
//       ) : (
//         <>
//           <circle cx="-10" cy="138" r="2" fill={trim} />
//           <circle cx="0" cy="146" r="2" fill={trim} />
//           <circle cx="10" cy="138" r="2" fill={trim} />
//           <circle cx="-16" cy="152" r="2" fill={trim} />
//           <circle cx="16" cy="152" r="2" fill={trim} />
//         </>
//       )}
//     </g>
//   );
// }

// /* ---------- foreground fashion props ---------- */
// function SewingMachine({ x, s = 1 }: { x: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},240) scale(${s}) translate(0,-240)`}>
//       <rect x="0" y="198" width="140" height="8" rx="2" fill={WOOD_LIGHT} />
//       <rect x="8" y="206" width="6" height="34" fill={WOOD} />
//       <rect x="126" y="206" width="6" height="34" fill={WOOD} />
//       <rect x="20" y="186" width="100" height="12" rx="3" fill="#1F5F66" />
//       <rect x="22" y="140" width="98" height="46" rx="10" fill="#2F7F86" />
//       <rect x="22" y="140" width="98" height="16" rx="8" fill="#226A71" />
//       <rect x="22" y="170" width="98" height="3" fill={GOLD} />
//       <rect x="34" y="156" width="5" height="30" fill="#C9B48A" />
//       <rect x="30" y="184" width="14" height="4" fill="#9A8A6A" />
//       <rect x="24" y="184" width="46" height="3" fill={MAROON} />
//       <circle cx="112" cy="164" r="13" fill={MAROON} />
//       <circle cx="112" cy="164" r="5" fill={GOLD} />
//       <rect x="70" y="130" width="4" height="10" fill="#9A9A9A" />
//       <rect x="62" y="118" width="20" height="12" rx="2" fill="#E0A1A1" />
//       <rect x="60" y="116" width="24" height="3" fill="#D8C3A4" />
//       <rect x="60" y="130" width="24" height="3" fill="#D8C3A4" />
//       <path d="M64 124 Q40 110 36 156" fill="none" stroke="#E0A1A1" strokeWidth="1" />
//     </g>
//   );
// }

// /* Aari embroidery frame ("adda") with silk in progress */
// function AariFrame({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       {/* trestle legs + brace */}
//       <path d="M8 200 L-2 240 M112 200 L122 240" stroke={WOOD} strokeWidth="6" strokeLinecap="round" />
//       <path d="M4 224 H116" stroke={WOOD} strokeWidth="4" strokeLinecap="round" />
//       {/* hanging plaque */}
//       <path d="M30 132 L34 146 M90 132 L86 146" stroke="#9A8A6A" strokeWidth="1" />
//       <rect x="22" y="116" width="76" height="18" rx="3" fill={MAROON} stroke={GOLD} strokeWidth="1.4" />
//       <text
//         x="60"
//         y="128.5"
//         textAnchor="middle"
//         fontSize="8.6"
//         fontFamily="serif"
//         letterSpacing="1.6"
//         fill="#F3DFA8"
//       >
//         AARI WORK
//       </text>
//       {/* wooden frame */}
//       <rect x="0" y="146" width="120" height="76" rx="3" fill={WOOD_LIGHT} />
//       <rect x="6" y="152" width="108" height="64" fill="#7A2230" />
//       <rect x="6" y="152" width="108" height="26" fill="#9A3140" opacity=".55" />
//       {[
//         [3, 149],
//         [117, 149],
//         [3, 219],
//         [117, 219],
//       ].map(([cx, cy]) => (
//         <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" fill={WOOD} />
//       ))}
//       {/* embroidered mandala */}
//       <g transform="translate(60,184)">
//         {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
//           <ellipse key={a} cx="0" cy="-15" rx="5.4" ry="10" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth="1" transform={`rotate(${a})`} />
//         ))}
//         <circle r="8" fill={MAROON} stroke={GOLD} strokeWidth="1.4" />
//         <circle r="4.2" fill={GOLD_LIGHT} />
//         <circle r="1.7" fill={MAROON} />
//       </g>
//       <AariFlower x={20} y={166} r={5.4} />
//       <AariFlower x={100} y={166} r={5.4} />
//       <AariFlower x={20} y={202} r={5.4} />
//       <AariFlower x={100} y={202} r={5.4} />
//       <path d="M12 158 H108 M12 210 H108" stroke={GOLD_LIGHT} strokeWidth="1.2" strokeDasharray="1.4 3" />
//       {/* hook needle with gold thread */}
//       <g transform="translate(96,150) rotate(35)">
//         <rect x="-3.2" y="-24" width="6.4" height="24" rx="3.2" fill={WOOD} />
//         <rect x="-3.2" y="-8" width="6.4" height="2.4" fill={GOLD} />
//         <rect x="-0.9" y="0" width="1.8" height="17" fill="#C9D1D8" />
//       </g>
//       <path d="M87 164 C78 150 72 154 64 146" fill="none" stroke={GOLD} strokeWidth="1.4" />
//       {/* thread reel on top rail */}
//       <rect x="10" y="138" width="14" height="9" rx="1.5" fill={GOLD_LIGHT} />
//       <rect x="8" y="136" width="18" height="3" rx="1" fill="#D8C3A4" />
//       <rect x="8" y="146" width="18" height="3" rx="1" fill="#D8C3A4" />
//     </g>
//   );
// }

// const RAIL_BLOUSES = [
//   { cx: 32, color: "#2B5BA8" },
//   { cx: 90, color: MAROON },
//   { cx: 148, color: "#5E8C61" },
// ];

// function ClothesRail({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="0" y="104" width="5" height="136" fill={WOOD} />
//       <rect x="180" y="104" width="5" height="136" fill={WOOD} />
//       <rect x="-8" y="236" width="21" height="4" rx="2" fill={WOOD} />
//       <rect x="172" y="236" width="21" height="4" rx="2" fill={WOOD} />
//       <rect x="0" y="102" width="185" height="5" rx="2" fill={GOLD} />
//       {RAIL_BLOUSES.map(({ cx, color }) => (
//         <g key={cx} transform={`translate(${cx},0)`}>
//           <path d="M0 122 V112 Q0 100 7 101" fill="none" stroke="#7A7A7A" strokeWidth="1.6" />
//           <path d="M-20 134 L0 122 L20 134" fill="none" stroke="#7A7A7A" strokeWidth="1.6" />
//           <path
//             d="M-18 134 L-8 126 Q0 131 8 126 L18 134 L27 156 L18 160 L13 149 L13 194 L-13 194 L-13 149 L-18 160 L-27 156 Z"
//             fill={color}
//           />
//           {/* aari work: neckline, sleeve cuffs, flowers, hem */}
//           <path d="M-7 127 Q0 140 7 127" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" />
//           <path d="M-9 127 Q0 145 9 127" fill="none" stroke={GOLD_LIGHT} strokeWidth="0.9" strokeDasharray="1 2" />
//           <path d="M-27 156 L-18 160 M27 156 L18 160" stroke={GOLD_LIGHT} strokeWidth="2.6" strokeLinecap="round" />
//           <AariFlower x={-6} y={150} r={4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={6} y={150} r={4} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <AariFlower x={0} y={168} r={3.2} petal={GOLD_LIGHT} center="#FBF3EA" />
//           <rect x="-13" y="188" width="26" height="6" fill={GOLD} />
//           {[-8, -3, 3, 8].map((d) => (
//             <circle key={d} cx={d} cy="191" r="1.1" fill="#FBF3EA" />
//           ))}
//         </g>
//       ))}
//     </g>
//   );
// }

// function SareeMannequin({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <ellipse cx="0" cy="236" rx="40" ry="5" fill={WOOD_LIGHT} />
//       <rect x="-5" y="66" width="10" height="14" rx="3" fill="#D8C3A4" />
//       <circle cx="0" cy="64" r="4" fill={WOOD} />
//       <path d="M-24 88 Q0 78 24 88 L28 118 Q22 134 26 150 L-26 150 Q-22 134 -28 118 Z" fill={MAROON} />
//       <path d="M-12 84 Q0 106 12 84 Q0 80 -12 84 Z" fill="#E9D5B8" />
//       <path d="M-26 142 L26 142 L54 222 Q0 232 -54 222 Z" fill="#2F7F86" />
//       <path d="M-14 150 L-24 224 M-4 150 L-8 226 M6 150 L8 226 M16 150 L24 224" stroke="#5BB0B7" strokeWidth="1.4" opacity="0.6" fill="none" />
//       <path d="M-52 212 Q0 222 52 212 L54 222 Q0 232 -54 222 Z" fill={GOLD} />
//       <path d="M-16 84 L0 80 L40 126 L46 206 L24 208 L22 134 Z" fill="#1F5F66" />
//       <path d="M-16 84 L22 134 L24 208" fill="none" stroke={GOLD} strokeWidth="2" />
//       <circle cx="32" cy="160" r="2" fill={GOLD} />
//       <circle cx="35" cy="180" r="2" fill={GOLD} />
//       <circle cx="34" cy="196" r="2" fill={GOLD} />
//     </g>
//   );
// }

// function Shop({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="-3" y="100" width="162" height="6" fill={GOLD} />
//       <rect x="28" y="74" width="100" height="26" rx="4" fill={MAROON} stroke={GOLD} strokeWidth="1.5" />
//       <text x="78" y="91" textAnchor="middle" fontSize="10" fontFamily="serif" letterSpacing="2" fill="#F3DFA8">
//         DEV FASHION
//       </text>
//       <rect x="0" y="106" width="156" height="134" fill="#F3D5CB" />
//       {Array.from({ length: 8 }).map((_, i) => {
//         const fill = i % 2 === 0 ? MAROON : "#FBF3EA";
//         return (
//           <g key={i}>
//             <rect x={-6 + 21 * i} y="110" width="21" height="24" fill={fill} />
//             <circle cx={-6 + 21 * i + 10.5} cy="134" r="10.5" fill={fill} />
//           </g>
//         );
//       })}
//       <rect x="14" y="156" width="40" height="54" rx="2" fill="#FFF3DC" stroke={GOLD} strokeWidth="2" />
//       <path d="M24 172 L30 166 Q34 170 38 166 L44 172 L48 186 L44 188 L41 182 V206 H27 V182 L24 188 L20 186 Z" fill="#2B5BA8" />
//       <AariFlower x={34} y={182} r={3.2} petal={GOLD_LIGHT} center="#FBF3EA" />
//       <rect x="66" y="162" width="34" height="78" rx="2" fill="#1F5F66" />
//       <rect x="72" y="170" width="22" height="34" fill="#F3DFA8" opacity="0.35" />
//       <circle cx="94" cy="204" r="2.5" fill={GOLD} />
//       <rect x="62" y="236" width="42" height="4" fill="#D8C3A4" />
//       <rect x="112" y="156" width="30" height="54" rx="2" fill="#FFF3DC" stroke={GOLD} strokeWidth="2" />
//       <path d="M121 168 H133 L138 206 H116 Z" fill={MAROON} />
//       <rect x="116" y="200" width="22" height="6" fill={GOLD} />
//     </g>
//   );
// }

// function SpoolTower({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="-28" y="198" width="56" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-23" y="204" width="46" height="28" fill={MAROON} />
//       <path d="M-23 212 H23 M-23 220 H23 M-23 227 H23" stroke="#A84652" strokeWidth="1.5" />
//       <rect x="-28" y="232" width="56" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-22" y="192" width="44" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-18" y="164" width="36" height="28" fill="#2F7F86" />
//       <path d="M-18 172 H18 M-18 180 H18 M-18 187 H18" stroke="#4FA0A7" strokeWidth="1.5" />
//       <rect x="-22" y="158" width="44" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-16" y="152" width="32" height="6" rx="2" fill="#D8C3A4" />
//       <rect x="-13" y="128" width="26" height="24" fill={GOLD} />
//       <path d="M-13 136 H13 M-13 144 H13" stroke="#DDB96F" strokeWidth="1.5" />
//       <rect x="-16" y="122" width="32" height="6" rx="2" fill="#D8C3A4" />
//       <path d="M0 62 Q4 66 3 82 L2 122 H-2 L-3 82 Q-4 66 0 62 Z" fill="#D8C9A8" />
//       <ellipse cx="0" cy="74" rx="1.6" ry="6" fill="#FCF1E8" />
//       <path d="M0 74 C28 70 40 96 18 108 C-4 120 -34 114 -22 138" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" />
//     </g>
//   );
// }

// function Mirror({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <path d="M0 190 L-24 238 M0 190 L24 238 M-13 214 H13" stroke={WOOD} strokeWidth="4" strokeLinecap="round" fill="none" />
//       <ellipse cx="0" cy="140" rx="30" ry="52" fill={GOLD} />
//       <ellipse cx="0" cy="140" rx="25" ry="47" fill="#DCE9EC" />
//       <path d="M-14 120 L-4 100 M-10 136 L6 108" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
//       <circle cx="-30" cy="140" r="3" fill={WOOD} />
//       <circle cx="30" cy="140" r="3" fill={WOOD} />
//     </g>
//   );
// }

// function FabricStack({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="0" y="214" width="70" height="26" rx="3" fill="#D98E8E" />
//       <rect x="4" y="196" width="62" height="18" rx="3" fill="#2B5BA8" />
//       <rect x="-2" y="180" width="72" height="16" rx="3" fill={GOLD_LIGHT} />
//       <rect x="6" y="166" width="58" height="14" rx="3" fill="#5E8C61" />
//       <path d="M4 226 H66 M8 205 H62 M2 188 H68" stroke="#FFFFFF" strokeWidth="1" opacity="0.35" />
//       <path d="M-10 206 Q35 196 82 210" fill="none" stroke="#F2C94C" strokeWidth="7" />
//       <path d="M-10 206 Q35 196 82 210" fill="none" stroke="#8A6A1A" strokeWidth="7" strokeDasharray="1 5" opacity="0.55" />
//       <circle cx="29" cy="162" r="6" fill="none" stroke={MAROON} strokeWidth="3" />
//       <circle cx="41" cy="162" r="6" fill="none" stroke={MAROON} strokeWidth="3" />
//       <path d="M30 156 L42 112" stroke="#B8C0C8" strokeWidth="4" strokeLinecap="round" />
//       <path d="M40 156 L28 112" stroke="#9AA4AD" strokeWidth="4" strokeLinecap="round" />
//       <circle cx="35" cy="138" r="3" fill={GOLD} />
//     </g>
//   );
// }

// /* ---------- the woman with two parrots ---------- */
// function Parrot({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
//   return (
//     <g transform={`translate(${x},${y}) scale(${flip ? -1 : 1},1)`}>
//       {/* tail */}
//       <path d="M-3 -6 Q-9.5 8 -6.5 21 Q0 13 2 -4 Z" fill="#2F8F4E" />
//       <path d="M-6.8 15 Q-5.6 21 -6.5 21 Q-1 18 0.4 11.5 Z" fill="#2B7BC4" />
//       {/* body */}
//       <ellipse cx="0" cy="-13" rx="6.6" ry="11" fill="#4FB45E" transform="rotate(12 0 -13)" />
//       <ellipse cx="1.8" cy="-10" rx="3.6" ry="7.4" fill="#8BD16F" />
//       {/* wing */}
//       <path d="M-5.4 -21 Q-9.5 -8 -4.4 2 Q1 -6 0.4 -20 Z" fill="#2F8F4E" />
//       <path d="M-4.9 -5 Q-4.8 0 -4.4 2 Q-0.6 -2 0 -7 Z" fill="#2B7BC4" />
//       {/* head + neck ring + beak + eye */}
//       <circle cx="3" cy="-27" r="6.3" fill="#4FB45E" />
//       <path d="M-1.8 -22.6 Q3 -19.6 8 -22.8" fill="none" stroke="#E0463A" strokeWidth="1.3" strokeLinecap="round" />
//       <path d="M8.2 -29.8 Q16 -28.6 14.2 -20.4 Q12.2 -24.6 8 -24.2 Z" fill="#E0463A" />
//       <circle cx="5.2" cy="-28.5" r="1.9" fill="#FFFFFF" />
//       <circle cx="5.6" cy="-28.5" r="1" fill="#1A1A1A" />
//       {/* feet */}
//       <path d="M-1.6 -1 L-1.6 3 M2 -1 L2 3" stroke="#E08A3A" strokeWidth="1.2" strokeLinecap="round" />
//     </g>
//   );
// }

// function Woman({ x }: { x: number }) {
//   const skin = "#D9A27A";
//   const skinShade = "#BE8560";
//   const hair = "#2A1A14";
//   const saree = "#B8324A";
//   const blouse = "#1F5F66";
//   return (
//     <g transform={`translate(${x},0)`}>
//       <ellipse cx="0" cy="238" rx="42" ry="4.5" fill={WOOD_LIGHT} opacity=".55" />

//       {/* arms (drawn first, sleeves sit on top) */}
//       <path d="M-25 110 L-39 126 L-53 97" fill="none" stroke={skin} strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M25 110 L39 126 L53 97" fill="none" stroke={skin} strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" />
//       <circle cx="-53.5" cy="93.5" r="4.3" fill={skin} />
//       <circle cx="53.5" cy="93.5" r="4.3" fill={skin} />
//       {/* bangles */}
//       <path d="M-56.5 101 L-49 99.4 M56.5 101 L49 99.4" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
//       <path d="M-55.4 104 L-48 102.4 M55.4 104 L48 102.4" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round" />

//       {/* saree skirt, pleats, gold border */}
//       <path d="M-22 128 L22 128 L41 238 Q0 245 -41 238 Z" fill={saree} />
//       <path d="M-10 134 L-19 238 M-2 134 L-5 241 M6 134 L9 241 M14 134 L23 238" stroke="#DC6A80" strokeWidth="1.3" fill="none" opacity=".75" />
//       <path d="M-38.6 226 Q0 232 38.6 226 L41 238 Q0 245 -41 238 Z" fill={GOLD} />
//       <path d="M-39.6 232 Q0 238 39.6 232" fill="none" stroke={MAROON} strokeWidth="1" strokeDasharray="1.5 2.5" />

//       {/* blouse with aari work */}
//       <path d="M-20 100 Q0 93 20 100 L23 130 L-23 130 Z" fill={blouse} />
//       <path d="M-21 100 L-31 107 L-27.5 119 L-19 114 Z" fill={blouse} />
//       <path d="M21 100 L31 107 L27.5 119 L19 114 Z" fill={blouse} />
//       <path d="M-30.5 112 L-24.5 116.5 M30.5 112 L24.5 116.5" stroke={GOLD_LIGHT} strokeWidth="2.2" strokeLinecap="round" />
//       <path d="M-9 100 Q0 113 9 100" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" />
//       <AariFlower x={-8} y={121} r={4.4} />
//       <AariFlower x={8} y={121} r={4.4} />
//       <rect x="-23" y="126" width="46" height="4" fill={GOLD} />

//       {/* pallu over the shoulder */}
//       <path d="M-18 98 L-6 97 L20 130 L30 206 L12 208 L8 134 Z" fill="#8F2338" />
//       <path d="M-18 98 L8 134 L12 208" fill="none" stroke={GOLD} strokeWidth="2" />
//       <circle cx="21" cy="160" r="1.8" fill={GOLD} />
//       <circle cx="24" cy="182" r="1.8" fill={GOLD} />

//       {/* neck + necklace */}
//       <rect x="-4" y="89" width="8" height="13" fill={skinShade} />
//       <path d="M-8 101 Q0 111 8 101" fill="none" stroke={GOLD} strokeWidth="1.6" />
//       <circle cx="0" cy="108.4" r="2" fill="#E0463A" stroke={GOLD} strokeWidth=".8" />

//       {/* hair bun with jasmine */}
//       <circle cx="-2" cy="52" r="9.5" fill={hair} />
//       {[
//         [-9, 48],
//         [-10, 53],
//         [-7, 58],
//         [5, 47],
//         [6, 53],
//         [3, 58],
//       ].map(([cx, cy]) => (
//         <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#FFFFFF" />
//       ))}
//       <path d="M-14 56 Q-2 62 10 56" fill="none" stroke="#5E8C61" strokeWidth="1.4" />

//       {/* head, ears, earrings */}
//       <circle cx="-14.6" cy="79" r="2.6" fill={skin} />
//       <circle cx="14.6" cy="79" r="2.6" fill={skin} />
//       <ellipse cx="0" cy="76" rx="14.6" ry="16.6" fill={skin} />
//       <circle cx="-15" cy="84.4" r="1.8" fill={GOLD} />
//       <circle cx="15" cy="84.4" r="1.8" fill={GOLD} />
//       <path d="M-15 86 V89 M15 86 V89" stroke={GOLD} strokeWidth="1.2" />
//       {/* hair cap + parting + tikka */}
//       <path d="M-15.4 77 Q-18 54 0 53.5 Q18 54 15.4 77 Q12.5 66 6 63.4 Q0 66.4 -6 63.4 Q-12.5 66 -15.4 77 Z" fill={hair} />
//       <path d="M0 55 V64.5" stroke={MAROON} strokeWidth="1.2" />
//       <circle cx="0" cy="66.2" r="1.5" fill={GOLD} />
//       {/* face */}
//       <path d="M-8.4 72 Q-5.2 69.8 -2.4 71.4 M8.4 72 Q5.2 69.8 2.4 71.4" fill="none" stroke={hair} strokeWidth="1.1" strokeLinecap="round" />
//       <ellipse cx="-5.2" cy="76.4" rx="1.6" ry="2" fill={hair} />
//       <ellipse cx="5.2" cy="76.4" rx="1.6" ry="2" fill={hair} />
//       <circle cx="-4.7" cy="75.6" r=".6" fill="#FFFFFF" />
//       <circle cx="5.7" cy="75.6" r=".6" fill="#FFFFFF" />
//       <circle cx="0" cy="70.2" r="1.3" fill="#D8283A" />
//       <path d="M-1.3 79.4 Q0.4 81.6 2 80" fill="none" stroke={skinShade} strokeWidth=".9" strokeLinecap="round" />
//       <circle cx="-8.6" cy="82" r="2.7" fill="#E88A7A" opacity=".4" />
//       <circle cx="8.6" cy="82" r="2.7" fill="#E88A7A" opacity=".4" />
//       <path d="M-4.2 85 Q0 88.8 4.2 85" fill="none" stroke={MAROON} strokeWidth="1.4" strokeLinecap="round" />

//       {/* the two parrots, one on each hand, facing her */}
//       <Parrot x={-53.5} y={90} />
//       <Parrot x={53.5} y={90} flip />
//     </g>
//   );
// }

// /* ---------- Coimbatore: gopuram temple ---------- */
// const TIERS = [
//   { w: 66, y1: 176, y2: 224 },
//   { w: 56, y1: 152, y2: 176 },
//   { w: 47, y1: 130, y2: 152 },
//   { w: 38, y1: 110, y2: 130 },
//   { w: 29, y1: 92, y2: 110 },
//   { w: 20, y1: 78, y2: 92 },
// ];
// const NICHES = [0, 4, 4, 3, 3, 2];

// function Kalasam({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
//   return (
//     <g transform={`translate(${x},${y}) scale(${s})`}>
//       <ellipse cx="0" cy="0" rx="3.2" ry="3.8" fill={GOLD} />
//       <path d="M0 -3.8 V-9" stroke={GOLD} strokeWidth="1.4" />
//       <circle cx="0" cy="-10" r="1.3" fill={GOLD} />
//     </g>
//   );
// }

// function Gopuram({ walls = true }: { walls?: boolean }) {
//   return (
//     <g>
//       {walls &&
//         [-1, 1].map((d) => (
//           <g key={d} transform={`scale(${d},1)`}>
//             <rect x="58" y="216" width="56" height="24" fill="#FBF3EA" />
//             {Array.from({ length: 10 }).map((_, i) => (
//               <rect key={i} x={60 + i * 5.6} y="219" width="2.8" height="21" fill="#D9622B" />
//             ))}
//             <rect x="56" y="214" width="60" height="5" fill="#C8774E" />
//             <rect x="56" y="214" width="60" height="1.4" fill={GOLD} />
//           </g>
//         ))}

//       {/* plinth */}
//       <rect x="-72" y="224" width="144" height="16" fill="#B96F48" />
//       <rect x="-72" y="224" width="144" height="2" fill={GOLD} />

//       {/* stepped tiers */}
//       {TIERS.map(({ w, y1, y2 }, i) => {
//         const n = NICHES[i];
//         const step = (2 * w) / (n + 1);
//         return (
//           <g key={i}>
//             <rect x={-w} y={y1} width={2 * w} height={y2 - y1} fill={i % 2 ? "#EDC9A1" : "#F2D6B5"} />
//             {n > 0 &&
//               Array.from({ length: n }).map((_, k) => {
//                 const c = -w + step * (k + 1);
//                 const yt = y1 + 5;
//                 const yb = y2 - 4;
//                 return (
//                   <g key={k}>
//                     <path d={`M${c - 3.5} ${yb} V${yt + 3.5} Q${c} ${yt - 1.5} ${c + 3.5} ${yt + 3.5} V${yb} Z`} fill={MAROON} />
//                     <circle cx={c} cy={yb - 5} r="1.5" fill={GOLD} />
//                   </g>
//                 );
//               })}
//             <rect x={-w - 4} y={y1 - 4} width={2 * w + 8} height="5" fill="#C8774E" />
//             <rect x={-w - 4} y={y1 - 4} width={2 * w + 8} height="1.3" fill={GOLD} />
//             <circle cx={-w - 3} cy={y1 - 6} r="2.1" fill={GOLD} />
//             <circle cx={w + 3} cy={y1 - 6} r="2.1" fill={GOLD} />
//           </g>
//         );
//       })}

//       {/* gate: pillars, arch, door, flank niches, marigold garland */}
//       <rect x="-24" y="198" width="5" height="26" fill="#F8E7CF" />
//       <rect x="19" y="198" width="5" height="26" fill="#F8E7CF" />
//       <rect x="-25" y="196" width="7" height="3" fill={GOLD} />
//       <rect x="18" y="196" width="7" height="3" fill={GOLD} />
//       <path d="M-13 224 V201 Q0 185 13 201 V224 Z" fill="#4A2020" />
//       <path d="M-13 224 V201 Q0 185 13 201 V224" fill="none" stroke={GOLD} strokeWidth="1.6" />
//       <path d="M0 192 V224" stroke="#6B3030" strokeWidth=".9" />
//       {[-44, 44].map((c) => (
//         <g key={c}>
//           <path d={`M${c - 6} 220 V196 Q${c} 188 ${c + 6} 196 V220 Z`} fill={MAROON} />
//           <circle cx={c} cy="212" r="2.6" fill={GOLD} />
//           <circle cx={c} cy="204" r="1.8" fill={GOLD_LIGHT} />
//         </g>
//       ))}
//       <path d="M-23 200 Q0 222 23 200" fill="none" stroke="#F29E2E" strokeWidth="3.4" strokeDasharray="0 5.2" strokeLinecap="round" />
//       <path d="M-23 203.5 Q0 225.5 23 203.5" fill="none" stroke="#E0463A" strokeWidth="2.4" strokeDasharray="0 5.2" strokeLinecap="round" />

//       {/* barrel roof + kalasams */}
//       <path d="M-23 78 Q-23 54 0 50 Q23 54 23 78 Z" fill="#C8774E" />
//       <path d="M-23 78 Q-23 54 0 50 Q23 54 23 78" fill="none" stroke={GOLD} strokeWidth="1.4" />
//       <path d="M-15 76 Q-15 58 0 54 M-7.5 77 Q-7.5 60 0 53 M7.5 77 Q7.5 60 0 53 M15 76 Q15 58 0 54" fill="none" stroke={MAROON} strokeWidth=".9" opacity=".7" />
//       <Kalasam x={-15} y={50} />
//       <Kalasam x={0} y={45} s={1.25} />
//       <Kalasam x={15} y={50} />
//     </g>
//   );
// }

// /* ---------- Coimbatore: Mahadev (Shiva) in meditation ---------- */
// function Mahadev({ x }: { x: number }) {
//   const skin = "#93A6BC";
//   const skinMid = "#7E92AA";
//   const skinDark = "#677C96";
//   const ink = "#2A3340";
//   const hair = "#2E343D";
//   const water = "#8AD0EE";
//   /* rudraksha beads along a hanging curve */
//   const beads = Array.from({ length: 9 }, (_, k) => {
//     const t = (k + 1) / 10;
//     const u = 1 - t;
//     return { x: u * u * -21 + t * t * 21, y: u * u * 150 + 2 * u * t * 206 + t * t * 150 };
//   });
//   return (
//     <g transform={`translate(${x},240) scale(1.1) translate(0,-240)`}>
//       {/* soft halo */}
//       <circle cx="0" cy="112" r="66" fill="#F7E8C6" opacity=".85" />
//       <circle cx="0" cy="112" r="66" fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="2 4" opacity=".7" />

//       {/* stone plinth */}
//       <path d="M-64 240 V224 H64 V240 Z" fill="#CDBF9E" />
//       <rect x="-56" y="214" width="112" height="10" fill="#D9CCAC" />

//       {/* trishul with damaru */}
//       <g transform="translate(60,0)">
//         <rect x="-1.5" y="66" width="3" height="152" fill="#B8A06A" />
//         <path d="M-10 54 Q-10 69 0 71 Q10 69 10 54" fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
//         <path d="M0 42 L-3 58 H3 Z" fill={GOLD} />
//         <path d="M-10 48 L-12.6 58 H-7.4 Z M10 48 L7.4 58 H12.6 Z" fill={GOLD} />
//         <rect x="-10" y="68" width="20" height="2.6" fill={GOLD} />
//         <path d="M-7 80 L7 80 L0 89 Z M-7 98 L7 98 L0 89 Z" fill="#C8774E" stroke={ink} strokeWidth=".6" />
//         <path d="M7 89 Q18 92 13 106" fill="none" stroke={MAROON} strokeWidth="1.2" />
//         <circle cx="13" cy="107" r="1.8" fill={GOLD} />
//         <path d="M0 73 Q10 80 4 94" fill="none" stroke="#E0463A" strokeWidth="1.4" />
//       </g>

//       {/* shoulders + chest with vibhuti lines */}
//       <path d="M-54 214 Q-54 174 -28 164 L-12 158 L12 158 L28 164 Q54 174 54 214 Z" fill={skinMid} stroke={ink} strokeWidth="1" strokeLinejoin="round" />
//       <path d="M-54 214 Q-54 174 -28 164 L-12 158 L-8 214 Z" fill={skinDark} />
//       <path d="M-31 188 Q0 200 31 188 M-33 196 Q0 209 33 196 M-34 204 Q0 217 34 204" fill="none" stroke="#F1F4F8" strokeWidth="1.7" strokeLinecap="round" opacity=".92" />
//       {/* rudraksha mala */}
//       {beads.map((b, i) => (
//         <circle key={i} cx={b.x} cy={b.y} r="2.3" fill="#6B3F2A" stroke="#3E2418" strokeWidth=".5" />
//       ))}

//       {/* cobra around the shoulders, hood rising on the right */}
//       <path d="M-33 172 Q-14 196 4 184 Q18 176 27 186" fill="none" stroke="#2B3036" strokeWidth="5.6" strokeLinecap="round" />
//       <ellipse cx="29" cy="172" rx="7.6" ry="10" fill="#2B3036" />
//       <path d="M24.6 168 Q29 177 33.4 168" fill="none" stroke="#9AA7B5" strokeWidth="1.1" />
//       <circle cx="29" cy="160.6" r="3.6" fill="#2B3036" />
//       <circle cx="27.8" cy="160" r=".8" fill="#F1F4F8" />
//       <circle cx="30.4" cy="160" r=".8" fill="#F1F4F8" />
//       <path d="M29 164 V168" stroke="#E0463A" strokeWidth=".8" />

//       {/* neck, ears, head */}
//       <rect x="-10" y="140" width="20" height="20" fill={skinDark} />
//       <ellipse cx="-21.4" cy="120" rx="3.6" ry="7" fill={skin} stroke={ink} strokeWidth=".7" />
//       <ellipse cx="21.4" cy="120" rx="3.6" ry="7" fill={skin} stroke={ink} strokeWidth=".7" />
//       <ellipse cx="0" cy="118" rx="21" ry="26" fill={skin} stroke={ink} strokeWidth="1" />

//       {/* matted hair, long locks, spiral top-knot */}
//       <path d="M-25 112 Q-31 82 -8 79 Q0 72 8 79 Q31 82 25 112 Q22 95 0 91 Q-22 95 -25 112 Z" fill={hair} />
//       <path d="M-25 108 Q-37 130 -32 162 Q-24 142 -21 116 Z" fill={hair} />
//       <path d="M25 108 Q37 130 32 162 Q24 142 21 116 Z" fill={hair} />
//       <path d="M-30 128 Q-28 140 -31 152 M30 128 Q28 140 31 152" fill="none" stroke="#454C57" strokeWidth="1" />
//       <ellipse cx="0" cy="70" rx="11" ry="12" fill={hair} />
//       <path d="M-8 66 Q0 60 8 66 Q4 72 -4 70 Q0 66 3 67" fill="none" stroke="#454C57" strokeWidth="1.2" strokeLinecap="round" />
//       <path d="M-9 74 Q0 79 9 74" fill="none" stroke="#454C57" strokeWidth="1" />
//       {/* crescent moon */}
//       <path d="M0 -9 A9 9 0 0 0 0 9 A13.5 13.5 0 0 1 0 -9 Z" fill="#EEF1F4" stroke="#B8C0CA" strokeWidth=".6" transform="translate(15,62) rotate(25)" />
//       {/* Ganga flowing from the hair */}
//       <path d="M-9 64 Q-24 82 -19 100 Q-14 114 -23 136" fill="none" stroke={water} strokeWidth="3.8" strokeLinecap="round" />
//       <path d="M-9 64 Q-24 82 -19 100 Q-14 114 -23 136" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 5" strokeLinecap="round" opacity=".8" />
//       <circle cx="-23.6" cy="142" r="1.5" fill={water} />
//       <circle cx="-26" cy="149" r="1.2" fill={water} />

//       {/* forehead: tripundra, third eye */}
//       <path d="M-10.6 94.6 H10.6 M-10.2 98 H10.2 M-9.6 101.4 H9.6" fill="none" stroke="#F4F6F9" strokeWidth="1.5" strokeLinecap="round" />
//       <path d="M0 102.6 Q2.4 106.4 0 110 Q-2.4 106.4 0 102.6 Z" fill="#D8472F" stroke={ink} strokeWidth=".6" />
//       {/* serene closed eyes, brows, nose, smile */}
//       <path d="M-12 114.6 Q-7 112.4 -2.6 114.4 M12 114.6 Q7 112.4 2.6 114.4" fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
//       <path d="M-11 120 Q-7 123 -3 120 M3 120 Q7 123 11 120" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
//       <path d="M0 122 V130.4 M-3 131.6 Q0 133.6 3 131.6" fill="none" stroke="#4A586C" strokeWidth="1.2" strokeLinecap="round" />
//       <path d="M-5.6 138 Q0 141.6 5.6 138" fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
//       {/* gold kundala earrings */}
//       <circle cx="-22.2" cy="129.4" r="3" fill="none" stroke={GOLD} strokeWidth="1.6" />
//       <circle cx="22.2" cy="129.4" r="3" fill="none" stroke={GOLD} strokeWidth="1.6" />
//     </g>
//   );
// }

// /* ---------- Coimbatore: skyline, hills, mills ---------- */
// function Building({ x, w, h, dome = false, antenna = false }: { x: number; w: number; h: number; dome?: boolean; antenna?: boolean }) {
//   const top = 240 - h;
//   const cols = Math.max(1, Math.floor((w - 6) / 9));
//   const rows = Math.max(1, Math.floor((h - 10) / 14));
//   const cw = (w - 10) / cols;
//   return (
//     <g>
//       <rect x={x} y={top} width={w} height={h} fill="#E8DAC1" />
//       {dome && <path d={`M${x + 3} ${top} Q${x + w / 2} ${top - w * 0.75} ${x + w - 3} ${top} Z`} fill="#E8DAC1" />}
//       {antenna && <path d={`M${x + w / 2} ${top} V${top - 26}`} stroke="#DCCBA9" strokeWidth="2" />}
//       {Array.from({ length: rows }).flatMap((_, r) =>
//         Array.from({ length: cols }).map((__, c) => (
//           <rect key={`${r}-${c}`} x={x + 5 + c * cw} y={top + 8 + r * 14} width={Math.max(3, cw - 3)} height="6" fill="#F7EFDF" />
//         )),
//       )}
//     </g>
//   );
// }

// /* Coimbatore is "the Manchester of South India": a sawtooth textile mill with a chimney */
// function TextileMill({ x }: { x: number }) {
//   return (
//     <g transform={`translate(${x},0)`}>
//       <rect x="0" y="196" width="84" height="44" fill="#E3D3B6" />
//       <path d="M0 196 L0 178 L21 196 L21 178 L42 196 L42 178 L63 196 L63 178 L84 196 Z" fill="#E3D3B6" />
//       <rect x="90" y="120" width="10" height="120" fill="#DCCBA9" />
//       <rect x="88" y="116" width="14" height="6" fill="#D2BF98" />
//       <rect x="10" y="212" width="12" height="28" fill="#F7EFDF" />
//       <rect x="34" y="208" width="14" height="10" fill="#F7EFDF" />
//       <rect x="56" y="208" width="14" height="10" fill="#F7EFDF" />
//     </g>
//   );
// }

// const SKYLINE: { x: number; w: number; h: number; dome?: boolean; antenna?: boolean }[] = [
//   { x: 566, w: 30, h: 112 },
//   { x: 600, w: 26, h: 134, antenna: true },
//   { x: 638, w: 28, h: 102 },
//   { x: 676, w: 30, h: 80 },
//   { x: 710, w: 38, h: 106, dome: true },
//   { x: 752, w: 26, h: 92 },
//   { x: 782, w: 34, h: 124 },
//   { x: 820, w: 30, h: 84 },
//   { x: 1124, w: 34, h: 102 },
//   { x: 1162, w: 28, h: 128, antenna: true },
//   { x: 1194, w: 40, h: 90 },
//   { x: 1238, w: 30, h: 116, dome: true },
//   { x: 1272, w: 36, h: 80 },
//   { x: 1312, w: 30, h: 106 },
//   { x: 1346, w: 40, h: 132 },
//   { x: 1390, w: 28, h: 94 },
//   { x: 1422, w: 34, h: 114 },
//   { x: 1460, w: 30, h: 86 },
//   { x: 1494, w: 38, h: 102 },
//   { x: 1536, w: 28, h: 122, antenna: true },
// ];

// function Skyline() {
//   return (
//     <g>
//       {/* pale sun behind the temple */}
//       <circle cx="1010" cy="122" r="74" fill="#F7E8C6" opacity=".75" />
//       <circle cx="210" cy="96" r="30" fill="#F7E8C6" opacity=".7" />

//       {/* Western Ghats: far + near hills */}
//       <path
//         d="M0 240 V150 C60 120 110 112 170 140 C230 168 270 120 340 100 C410 80 450 130 520 150 C600 172 650 130 720 120 C790 110 840 150 900 160 C980 175 1040 120 1110 110 C1180 100 1230 150 1300 150 C1370 150 1420 110 1490 105 C1560 100 1610 140 1680 135 C1720 133 1745 125 1760 120 V240 Z"
//         fill="#E2E8D6"
//       />
//       {/* Marudhamalai hill temple */}
//       <g transform="translate(340 58) scale(.2)" opacity=".85">
//         <Gopuram walls={false} />
//       </g>
//       <path
//         d="M0 240 V185 C80 165 150 175 230 190 C320 205 400 170 480 172 C580 175 640 200 740 195 C840 190 900 170 1000 176 C1100 182 1180 200 1280 190 C1380 180 1450 170 1560 176 C1650 181 1710 190 1760 184 V240 Z"
//         fill="#ECE0CA"
//       />

//       {/* city blocks + textile mill */}
//       {SKYLINE.map((b) => (
//         <Building key={b.x} {...b} />
//       ))}
//       <TextileMill x={454} />
//     </g>
//   );
// }

// /* ---------- festive bunting ---------- */
// const BUNTING_COLORS = [MAROON, GOLD, "#2F7F86", "#2B5BA8", "#5E8C61"];

// function Bunting() {
//   const swags = Array.from({ length: 8 }, (_, i) => i * 220);
//   return (
//     <g opacity=".95">
//       {swags.map((x0, si) => (
//         <g key={x0}>
//           <path d={`M${x0} 12 Q${x0 + 110} 34 ${x0 + 220} 12`} fill="none" stroke="#B89A5A" strokeWidth="1" />
//           {Array.from({ length: 9 }, (_, k) => {
//             const t = (k + 1) / 10;
//             const px = x0 + 220 * t;
//             const py = (1 - t) ** 2 * 12 + 2 * (1 - t) * t * 34 + t ** 2 * 12;
//             const c = BUNTING_COLORS[(si * 9 + k) % BUNTING_COLORS.length];
//             return <path key={k} d={`M${px - 5.5} ${py} L${px + 5.5} ${py} L${px} ${py + 12} Z`} fill={c} />;
//           })}
//         </g>
//       ))}
//     </g>
//   );
// }

// /* ---------- the whole scene ---------- */
// function Scene() {
//   return (
//     <g>
//       <Skyline />
//       <Bunting />
//       <Mahadev x={1672} />

//       {/* ground band + captions */}
//       <rect x="0" y="240" width={SCENE_W} height="20" fill="#F1E6D0" />
//       <rect x="0" y="240" width={SCENE_W} height="1.5" fill="#E2D2AE" />
//       <text x="440" y="254" textAnchor="middle" fontSize="8.4" fontFamily="serif" letterSpacing="6" fill="#B0873A">
//         COIMBATORE
//       </text>
//       <text x="1320" y="254" textAnchor="middle" fontSize="8.4" fontFamily="serif" letterSpacing="6" fill="#B0873A">
//         TAMIL NADU · INDIA
//       </text>

//       {/* sparkles */}
//       <Sparkle x={62} y={74} s={1.1} />
//       <Sparkle x={150} y={118} s={0.8} />
//       <Sparkle x={296} y={62} />
//       <Sparkle x={420} y={96} s={0.9} />
//       <Sparkle x={586} y={58} s={1.1} />
//       <Sparkle x={835} y={70} />
//       <Sparkle x={1118} y={64} s={1.1} />
//       <Sparkle x={1292} y={52} />
//       <Sparkle x={1590} y={66} s={1.2} />
//       <Sparkle x={1736} y={96} s={0.9} />

//       {/* foreground: left half */}
//       <Plant x={24} />
//       <DressForm x={100} color={MAROON} trim={GOLD} aari />
//       <AariFrame x={160} />
//       <SewingMachine x={300} s={0.86} />
//       <ClothesRail x={440} />
//       <Woman x={697} />
//       <SareeMannequin x={822} />

//       {/* foreground: right half */}
//       <g transform="translate(1010,0)">
//         <Gopuram />
//       </g>
//       <Shop x={1130} />
//       <SpoolTower x={1332} />
//       <Mirror x={1402} />
//       <DressForm x={1472} color="#2B5BA8" trim={GOLD_LIGHT} aari />
//       <FabricStack x={1522} />
//       <Plant x={1716} s={1.2} />
//       <Plant x={1744} />
//     </g>
//   );
// }

// /* The whole scene is always one line: it simply scales to the width of the screen. */
// function FashionStrip() {
//   return (
//     <div className="relative mt-6 overflow-hidden border-b-[3px] border-t border-b-[#C5A059]/40 border-t-[#C5A059]/25 bg-[#FAF8F5]">
//       <svg
//         viewBox={`0 0 ${SCENE_W} ${SCENE_H}`}
//         className="block h-auto w-full"
//         aria-hidden="true"
//         focusable="false"
//       >
//         <Scene />
//       </svg>
//     </div>
//   );
// }

// /* ========================================================
//    FOOTER
//    ======================================================== */
// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer
//       /* the inline style + the solid dark layer below make sure NO global CSS rule
//          (for example `footer { background: ... }` in globals.css) can turn this cream */
//       style={{ backgroundColor: "#0F0E0D", color: "#FAF8F5" }}
//       className="relative w-full overflow-hidden border-t border-[#C5A059]/25 bg-[#0F0E0D] font-sans text-[#FAF8F5]"
//     >
//       {/* solid dark layer */}
//       <div aria-hidden="true" className="absolute inset-0 bg-[#0F0E0D]" />

//       {/* Decorative: gold top accent line + soft glows */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-[#C5A059]/10 blur-3xl"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#B8324A]/10 blur-3xl"
//       />

//       <div className="site-container relative z-10 pt-16 sm:pt-20 lg:pt-24">

//         {/* Brand + link columns */}
//         <div className="grid grid-cols-2 gap-x-6 gap-y-12 pb-12 lg:grid-cols-[1.9fr_1fr_1.1fr_1fr_1.5fr] lg:gap-x-10">

//           {/* Brand + promise */}
//           <div className="col-span-2 flex flex-col space-y-6 lg:col-span-1">
//             <Link href="/" className="group inline-flex items-center gap-3.5 self-start">
//               <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#C5A059]/60 bg-[#161514] p-0.5 shadow-sm">
//                 <Image
//                   src="/logo.jpg"
//                   alt="Dev Fashion Official Logo"
//                   fill
//                   sizes="44px"
//                   className="object-cover p-0.5"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-serif text-2xl font-light leading-tight tracking-[0.2em] text-white transition-colors group-hover:text-[#C5A059]">
//                   DEV FASHION
//                 </span>
//                 <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
//                   Premium Boutique &amp; Tailoring
//                 </span>
//               </div>
//             </Link>

//             {/* Our Promise panel */}
//             <div className="space-y-3 border-l-2 border-[#C5A059]/80 bg-[#161514] p-6">
//               <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-[#C5A059]">
//                 OUR PROMISE
//               </span>
//               <p className="text-justify text-xs font-light leading-relaxed text-stone-300">
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
//               </p>
//               <p className="border-t border-stone-800 pt-2 text-justify text-xs font-light leading-relaxed text-stone-300">
//                 &nbsp;&nbsp;&nbsp;Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
//               <Link
//                 href="/gallery"
//                 className="inline-flex min-h-11 items-center justify-center border border-[#C5A059]/50 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
//               >
//                 Explore Our Designs
//               </Link>
//               <Link
//                 href="/contact#booking"
//                 className="inline-flex min-h-11 items-center justify-center border border-[#C5A059] bg-[#C5A059] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition-all duration-300 hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
//               >
//                 Book a Consultation
//               </Link>
//             </div>
//           </div>

//           <div>
//             <h3 className={headingClass}>Quick Links</h3>
//             <ul className="space-y-3">
//               {QUICK_LINKS.map((l) => (
//                 <li key={l.label}>
//                   <Link href={l.href} className={linkClass}>
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className={headingClass}>Our Services</h3>
//             <ul className="space-y-3">
//               {SERVICE_LINKS.map((l) => (
//                 <li key={l.label}>
//                   <Link href={l.href} className={linkClass}>
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className={headingClass}>The Studio</h3>
//             <ul className="space-y-3">
//               {STUDIO_LINKS.map((l) => (
//                 <li key={l.label}>
//                   <Link href={l.href} className={linkClass}>
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <a
//                   href={DIRECTIONS_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={linkClass}
//                 >
//                   Get Directions
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-span-2 space-y-6 lg:col-span-1">
//             <h3 className={headingClass}>Connect</h3>

//             <ul className="space-y-4 text-xs text-stone-300">
//               <li className="flex items-start gap-3">
//                 <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" />
//                 <a
//                   href={DIRECTIONS_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-light leading-relaxed transition-colors hover:text-[#C5A059]"
//                 >
//                   No 37, 9th Street, Tatabad, Gandhipuram, Coimbatore, Tamil Nadu 641012
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="h-4 w-4 shrink-0 text-[#C5A059]" />
//                 <a
//                   href={`tel:${PHONE_TEL}`}
//                   className="font-light tracking-wide transition-colors hover:text-[#C5A059]"
//                 >
//                   {PHONE_DISPLAY}
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="h-4 w-4 shrink-0 text-[#C5A059]" />
//                 <a
//                   href={`mailto:${EMAIL}`}
//                   className="break-all font-light transition-colors hover:text-[#C5A059]"
//                 >
//                   {EMAIL}
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" />
//                 <div className="font-light">
//                   <span className="block text-stone-200">{HOURS_MAIN}</span>
//                   <span className="mt-0.5 block text-[11px] text-stone-400">{HOURS_SUNDAY}</span>
//                 </div>
//               </li>
//             </ul>

//             {/* Follow us */}
//             <div className="space-y-3 border-t border-stone-800 pt-4">
//               <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
//                 FOLLOW US
//               </span>
//               <div className="flex items-center gap-3">
//                 <a
//                   href="https://www.instagram.com/devfashion_bridalblouse/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   className={socialClass}
//                 >
//                   <FaInstagram className="h-3.5 w-3.5" />
//                 </a>
//                 <a
//                   href="https://www.facebook.com/devblouse/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                   className={socialClass}
//                 >
//                   <FaFacebook className="h-3.5 w-3.5" />
//                 </a>
//                 <a
//                   href={WHATSAPP_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="WhatsApp"
//                   className={socialClass}
//                 >
//                   <FaWhatsapp className="h-3.5 w-3.5" />
//                 </a>
//               </div>
//               <p className="font-serif text-xs italic text-stone-400">
//                 be the first to know about new arrivals
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Ornament divider */}
//         <div aria-hidden="true" className="flex items-center gap-4 pb-8">
//           <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/40" />
//           <span className="font-serif text-sm tracking-[0.4em] text-[#C5A059]">✦ ✦ ✦</span>
//           <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/40" />
//         </div>

//         {/* Payments + guarantee */}
//         <div className="flex flex-col items-center justify-between gap-6 pb-8 lg:flex-row">
//           <div className="flex w-full min-w-0 flex-col items-start gap-3 lg:flex-1">
//             <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
//               We Accept
//             </span>
//             <ul
//               aria-label="Accepted payment methods"
//               className="flex w-full flex-nowrap items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {[...CARD_METHODS, ...OTHER_METHODS].map((method) => (
//                 <PaymentChip key={method.label} method={method} />
//               ))}
//             </ul>
//           </div>

//           <div className="flex items-center gap-3 border border-[#C5A059]/30 bg-[#161514] px-5 py-3">
//             <Lock className="h-5 w-5 shrink-0 text-[#C5A059]" />
//             <div className="leading-tight">
//               <p className="font-serif text-sm font-semibold text-white">Secure Design Guarantee</p>
//               <p className="text-[11px] font-light text-stone-400">
//                 Safe payments &bull; Your measurements stay private
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="flex flex-col items-center gap-3 border-t border-[#C5A059]/15 py-6 text-center text-xs text-stone-400 md:flex-row md:justify-between md:text-left">
//           <p className="font-light leading-relaxed">
//             &copy; {currentYear} Dev Fashion. All rights reserved.
//             <span className="mx-2 hidden text-[#C5A059]/50 md:inline">|</span>
//             <span className="block md:inline"> Design and developed with love by Shahi.</span>
//           </p>

//           <div className="flex items-center gap-4 text-stone-300">
//             <Link href="/privacy" className="inline-flex min-h-[44px] items-center transition-colors hover:text-[#C5A059]">
//               Privacy Policy
//             </Link>
//             <span className="text-stone-700">&bull;</span>
//             <Link href="/terms" className="inline-flex min-h-[44px] items-center transition-colors hover:text-[#C5A059]">
//               Terms &amp; Conditions
//             </Link>
//             <button
//               type="button"
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               aria-label="Back to top"
//               className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A059]/30 bg-[#161514] text-[#C5A059] transition-colors hover:bg-[#C5A059] hover:text-stone-950 md:mr-24"
//             >
//               <ArrowUp className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Fashion cartoon strip */}
//       <FashionStrip />
//     </footer>
//   );
// }










































































"use client";

import { useState, type ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Landmark,
  Banknote,
  Lock,
} from "lucide-react";
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGooglepay, SiPaytm, SiPhonepe } from "react-icons/si";

/* ---------- Shared business info (edit here, used below) ---------- */
const PHONE_DISPLAY = "+91 80985 58923";
const PHONE_TEL = "+918098558923";
const EMAIL = "contact@devfashion.com";
const HOURS_MAIN = "Mon - Sat: 8:00 AM - 9:00 PM";
const HOURS_SUNDAY = "Sunday: 11:00 AM - 5:00 PM (Appointments Only)";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=11.0211,76.9614";
const WHATSAPP_URL =
  "https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20have%20a%20tailoring%20enquiry.";


/* Payment methods shown in the footer — edit these lists to match what the studio really accepts.
   - `icon`: a ready-made brand icon from react-icons.
   - `logo`: an official logo file you add to /public/payments/ (RuPay, UPI). Until the file exists, the chip
     falls back to a plain text label, so nothing breaks. NPCI publishes the official UPI and RuPay artwork on
     its website; use it unmodified.
   - `showLabel`: show the text next to the icon (for things without a brand logo, like Cash). */
type PaymentMethod = {
  label: string;
  icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  iconClass?: string;
  logo?: string;
  showLabel?: boolean;
};

const CARD_METHODS: PaymentMethod[] = [
  { label: "Visa", icon: FaCcVisa, iconClass: "text-[#1A1F71]" },
  { label: "Mastercard", icon: FaCcMastercard, iconClass: "text-[#EB001B]" },
  { label: "RuPay", logo: "/payments/rupay.svg" }, // official RuPay logo file goes in /public/payments/
  { label: "American Express", icon: FaCcAmex, iconClass: "text-[#006FCF]" },
  { label: "Diners Club", icon: FaCcDinersClub, iconClass: "text-[#0079BE]" },
  { label: "Discover", icon: FaCcDiscover, iconClass: "text-[#FF6000]" },
  { label: "JCB", icon: FaCcJcb, iconClass: "text-[#0B4EA2]" },
];

const OTHER_METHODS: PaymentMethod[] = [
  { label: "Google Pay", icon: SiGooglepay, iconClass: "text-[#4285F4]" },
  { label: "PhonePe", icon: SiPhonepe, iconClass: "text-[#5F259F]" },
  { label: "Paytm", icon: SiPaytm, iconClass: "text-[#00BAF2]" },
  { label: "Bank Transfer", icon: Landmark, iconClass: "text-gold-600", showLabel: true },
  { label: "Cash", icon: Banknote, iconClass: "text-emerald-600", showLabel: true },
];

function PaymentChip({ method }: { method: PaymentMethod }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const { label, icon: Icon, iconClass = "", logo, showLabel } = method;
  /* chips stay white so every brand logo is easy to read on the dark footer */
  const chip =
    "flex h-10 shrink-0 items-center justify-center gap-2 rounded-sm border border-[#C5A059]/30 bg-white px-3 transition-colors duration-300 hover:border-[#C5A059]";

  if (logo && !logoFailed) {
    return (
      <li className={chip} title={label}>
        <Image
          src={logo}
          alt={label}
          width={64}
          height={28}
          className="h-5 w-auto object-contain"
          onError={() => setLogoFailed(true)}
        />
      </li>
    );
  }

  if (Icon && !showLabel) {
    return (
      <li className={chip} title={label}>
        <Icon className={`h-6 w-auto ${iconClass}`} aria-hidden />
        <span className="sr-only">{label}</span>
      </li>
    );
  }

  return (
    <li className={`${chip} text-xs font-semibold uppercase tracking-[0.12em] text-stone-700`}>
      {Icon && <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden />}
      {label}
    </li>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Reviews", href: "/reviews" },
];

const SERVICE_LINKS = [
  { label: "Custom Blouse Stitching", href: "/services" },
  { label: "Bridal Wear Design", href: "/services" },
  { label: "Designer Saree Blouses", href: "/services" },
  { label: "Alteration Services", href: "/services" },
];

const STUDIO_LINKS = [
  { label: "Tailoring Classes", href: "/classes" },
  { label: "Jewelry Rental", href: "/jewelry" },
  { label: "Book Consultation", href: "/contact#booking" },
];

/* Old footer look: dark #0F0E0D, gold #C5A059, stone-300 text */
const headingClass =
  "mb-3 border-b border-[#C5A059]/15 pb-2 font-serif text-base font-medium uppercase tracking-[0.3em] text-[#C5A059]";
const linkClass =
  "inline-block py-0.5 text-xs font-light tracking-wide text-stone-300 transition-colors duration-300 hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]";
const socialClass =
  "flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/30 bg-[#161514] text-stone-300 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]";

/* ========================================================
   FASHION + COIMBATORE STRIP (inline SVG, edit colours freely)
   One wide scene (1760 x 260) that scales to any screen width.
   Dark / night theme.
   ======================================================== */
const SCENE_W = 1760;
const SCENE_H = 260;

const GOLD = "#C5A059";
const GOLD_LIGHT = "#E6CC8E";
const MAROON = "#8E2A35";
const WOOD = "#8C5A3A";
const WOOD_LIGHT = "#A9714B";

/* ---------- small reusable pieces ---------- */
function Sparkle({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path
        d="M0 -7 Q1 -1 7 0 Q1 1 0 7 Q-1 1 -7 0 Q-1 -1 0 -7Z"
        fill={GOLD}
        className="motion-safe:animate-pulse"
        style={{ animationDelay: `${(x % 7) * 0.3}s`, animationDuration: "2.4s" }}
      />
    </g>
  );
}

function Plant({ x, s = 1 }: { x: number; s?: number }) {
  return (
    <g transform={`translate(${x},240) scale(${s}) translate(0,-240)`}>
      <ellipse cx="0" cy="188" rx="6" ry="18" fill="#5E8C61" />
      <ellipse cx="-10" cy="194" rx="5" ry="14" fill="#6FA073" transform="rotate(-30 -10 194)" />
      <ellipse cx="10" cy="194" rx="5" ry="14" fill="#6FA073" transform="rotate(30 10 194)" />
      <path d="M-12 214 L12 214 L8 240 L-8 240 Z" fill="#C77B58" />
      <rect x="-14" y="210" width="28" height="6" rx="2" fill="#B3673F" />
    </g>
  );
}

/* Aari (hook-embroidery) flower motif: gold petals + a bead */
function AariFlower({
  x,
  y,
  r = 5,
  petal = GOLD_LIGHT,
  center = MAROON,
}: {
  x: number;
  y: number;
  r?: number;
  petal?: string;
  center?: string;
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="0" cy={-r * 0.9} rx={r * 0.4} ry={r * 0.64} fill={petal} transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.36} fill={center} />
    </g>
  );
}

/* Dress form wearing a blouse. aari = heavy gold embroidery */
function DressForm({ x, color, trim, aari = false }: { x: number; color: string; trim: string; aari?: boolean }) {
  return (
    <g transform={`translate(${x},0)`}>
      <ellipse cx="0" cy="236" rx="34" ry="5" fill={WOOD_LIGHT} />
      <rect x="-3" y="170" width="6" height="66" fill={WOOD} />
      <rect x="-5" y="68" width="10" height="14" rx="3" fill="#D8C3A4" />
      <circle cx="0" cy="65" r="4" fill={WOOD} />
      <path d="M-36 114 L-24 92 L-19 100 L-27 119 Z" fill={color} />
      <path d="M36 114 L24 92 L19 100 L27 119 Z" fill={color} />
      <path d="M-24 92 Q0 80 24 92 L30 122 Q32 150 20 172 L-20 172 Q-32 150 -30 122 Z" fill={color} />
      <path d="M-13 87 Q0 112 13 87 Q0 82 -13 87 Z" fill="#E9D5B8" />
      <path d="M-13 87 Q0 112 13 87" fill="none" stroke={trim} strokeWidth="1.6" />
      <rect x="-21" y="164" width="42" height="6" fill={trim} />
      {aari ? (
        <>
          {/* double neckline border + sleeve cuffs */}
          <path d="M-11 90 Q0 108 11 90" fill="none" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1.2 2.4" />
          <path d="M-36 114 L-27 119 M36 114 L27 119" stroke={GOLD_LIGHT} strokeWidth="3" strokeLinecap="round" />
          <path d="M-33 108 L-25 112.5 M33 108 L25 112.5" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1 2" />
          {/* bust flowers, centre vine, lower flowers */}
          <AariFlower x={-11} y={123} r={6} petal={GOLD_LIGHT} center="#F3DFA8" />
          <AariFlower x={11} y={123} r={6} petal={GOLD_LIGHT} center="#F3DFA8" />
          <path d="M0 100 V162" stroke={GOLD_LIGHT} strokeWidth="1" strokeDasharray="1 2.6" />
          <AariFlower x={0} y={142} r={4.4} petal={GOLD_LIGHT} center="#FBF3EA" />
          <AariFlower x={-17} y={149} r={3.4} petal={GOLD_LIGHT} center="#FBF3EA" />
          <AariFlower x={17} y={149} r={3.4} petal={GOLD_LIGHT} center="#FBF3EA" />
          {/* mirror-work dots on the hem band */}
          {[-15, -9, -3, 3, 9, 15].map((d) => (
            <circle key={d} cx={d} cy="167" r="1.3" fill="#FBF3EA" />
          ))}
        </>
      ) : (
        <>
          <circle cx="-10" cy="138" r="2" fill={trim} />
          <circle cx="0" cy="146" r="2" fill={trim} />
          <circle cx="10" cy="138" r="2" fill={trim} />
          <circle cx="-16" cy="152" r="2" fill={trim} />
          <circle cx="16" cy="152" r="2" fill={trim} />
        </>
      )}
    </g>
  );
}

/* ---------- foreground fashion props ---------- */
function SewingMachine({ x, s = 1 }: { x: number; s?: number }) {
  return (
    <g transform={`translate(${x},240) scale(${s}) translate(0,-240)`}>
      <rect x="0" y="198" width="140" height="8" rx="2" fill={WOOD_LIGHT} />
      <rect x="8" y="206" width="6" height="34" fill={WOOD} />
      <rect x="126" y="206" width="6" height="34" fill={WOOD} />
      <rect x="20" y="186" width="100" height="12" rx="3" fill="#1F5F66" />
      <rect x="22" y="140" width="98" height="46" rx="10" fill="#2F7F86" />
      <rect x="22" y="140" width="98" height="16" rx="8" fill="#226A71" />
      <rect x="22" y="170" width="98" height="3" fill={GOLD} />
      <rect x="34" y="156" width="5" height="30" fill="#C9B48A" />
      <rect x="30" y="184" width="14" height="4" fill="#9A8A6A" />
      <rect x="24" y="184" width="46" height="3" fill={MAROON} />
      <circle cx="112" cy="164" r="13" fill={MAROON} />
      <circle cx="112" cy="164" r="5" fill={GOLD} />
      <rect x="70" y="130" width="4" height="10" fill="#9A9A9A" />
      <rect x="62" y="118" width="20" height="12" rx="2" fill="#E0A1A1" />
      <rect x="60" y="116" width="24" height="3" fill="#D8C3A4" />
      <rect x="60" y="130" width="24" height="3" fill="#D8C3A4" />
      <path d="M64 124 Q40 110 36 156" fill="none" stroke="#E0A1A1" strokeWidth="1" />
    </g>
  );
}

/* Aari embroidery frame ("adda") with silk in progress */
function AariFrame({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      {/* trestle legs + brace */}
      <path d="M8 200 L-2 240 M112 200 L122 240" stroke={WOOD} strokeWidth="6" strokeLinecap="round" />
      <path d="M4 224 H116" stroke={WOOD} strokeWidth="4" strokeLinecap="round" />
      {/* hanging plaque */}
      <path d="M30 132 L34 146 M90 132 L86 146" stroke="#9A8A6A" strokeWidth="1" />
      <rect x="22" y="116" width="76" height="18" rx="3" fill={MAROON} stroke={GOLD} strokeWidth="1.4" />
      <text
        x="60"
        y="128.5"
        textAnchor="middle"
        fontSize="8.6"
        fontFamily="serif"
        letterSpacing="1.6"
        fill="#F3DFA8"
      >
        AARI WORK
      </text>
      {/* wooden frame */}
      <rect x="0" y="146" width="120" height="76" rx="3" fill={WOOD_LIGHT} />
      <rect x="6" y="152" width="108" height="64" fill="#7A2230" />
      <rect x="6" y="152" width="108" height="26" fill="#9A3140" opacity=".55" />
      {[
        [3, 149],
        [117, 149],
        [3, 219],
        [117, 219],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" fill={WOOD} />
      ))}
      {/* embroidered mandala */}
      <g transform="translate(60,184)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx="0" cy="-15" rx="5.4" ry="10" fill={GOLD_LIGHT} stroke={GOLD} strokeWidth="1" transform={`rotate(${a})`} />
        ))}
        <circle r="8" fill={MAROON} stroke={GOLD} strokeWidth="1.4" />
        <circle r="4.2" fill={GOLD_LIGHT} />
        <circle r="1.7" fill={MAROON} />
      </g>
      <AariFlower x={20} y={166} r={5.4} />
      <AariFlower x={100} y={166} r={5.4} />
      <AariFlower x={20} y={202} r={5.4} />
      <AariFlower x={100} y={202} r={5.4} />
      <path d="M12 158 H108 M12 210 H108" stroke={GOLD_LIGHT} strokeWidth="1.2" strokeDasharray="1.4 3" />
      {/* hook needle with gold thread */}
      <g transform="translate(96,150) rotate(35)">
        <rect x="-3.2" y="-24" width="6.4" height="24" rx="3.2" fill={WOOD} />
        <rect x="-3.2" y="-8" width="6.4" height="2.4" fill={GOLD} />
        <rect x="-0.9" y="0" width="1.8" height="17" fill="#C9D1D8" />
      </g>
      <path d="M87 164 C78 150 72 154 64 146" fill="none" stroke={GOLD} strokeWidth="1.4" />
      {/* thread reel on top rail */}
      <rect x="10" y="138" width="14" height="9" rx="1.5" fill={GOLD_LIGHT} />
      <rect x="8" y="136" width="18" height="3" rx="1" fill="#D8C3A4" />
      <rect x="8" y="146" width="18" height="3" rx="1" fill="#D8C3A4" />
    </g>
  );
}

const RAIL_BLOUSES = [
  { cx: 32, color: "#2B5BA8" },
  { cx: 90, color: MAROON },
  { cx: 148, color: "#5E8C61" },
];

function ClothesRail({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="0" y="104" width="5" height="136" fill={WOOD} />
      <rect x="180" y="104" width="5" height="136" fill={WOOD} />
      <rect x="-8" y="236" width="21" height="4" rx="2" fill={WOOD} />
      <rect x="172" y="236" width="21" height="4" rx="2" fill={WOOD} />
      <rect x="0" y="102" width="185" height="5" rx="2" fill={GOLD} />
      {RAIL_BLOUSES.map(({ cx, color }) => (
        <g key={cx} transform={`translate(${cx},0)`}>
          <path d="M0 122 V112 Q0 100 7 101" fill="none" stroke="#7A7A7A" strokeWidth="1.6" />
          <path d="M-20 134 L0 122 L20 134" fill="none" stroke="#7A7A7A" strokeWidth="1.6" />
          <path
            d="M-18 134 L-8 126 Q0 131 8 126 L18 134 L27 156 L18 160 L13 149 L13 194 L-13 194 L-13 149 L-18 160 L-27 156 Z"
            fill={color}
          />
          {/* aari work: neckline, sleeve cuffs, flowers, hem */}
          <path d="M-7 127 Q0 140 7 127" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" />
          <path d="M-9 127 Q0 145 9 127" fill="none" stroke={GOLD_LIGHT} strokeWidth="0.9" strokeDasharray="1 2" />
          <path d="M-27 156 L-18 160 M27 156 L18 160" stroke={GOLD_LIGHT} strokeWidth="2.6" strokeLinecap="round" />
          <AariFlower x={-6} y={150} r={4} petal={GOLD_LIGHT} center="#FBF3EA" />
          <AariFlower x={6} y={150} r={4} petal={GOLD_LIGHT} center="#FBF3EA" />
          <AariFlower x={0} y={168} r={3.2} petal={GOLD_LIGHT} center="#FBF3EA" />
          <rect x="-13" y="188" width="26" height="6" fill={GOLD} />
          {[-8, -3, 3, 8].map((d) => (
            <circle key={d} cx={d} cy="191" r="1.1" fill="#FBF3EA" />
          ))}
        </g>
      ))}
    </g>
  );
}

function SareeMannequin({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <ellipse cx="0" cy="236" rx="40" ry="5" fill={WOOD_LIGHT} />
      <rect x="-5" y="66" width="10" height="14" rx="3" fill="#D8C3A4" />
      <circle cx="0" cy="64" r="4" fill={WOOD} />
      <path d="M-24 88 Q0 78 24 88 L28 118 Q22 134 26 150 L-26 150 Q-22 134 -28 118 Z" fill={MAROON} />
      <path d="M-12 84 Q0 106 12 84 Q0 80 -12 84 Z" fill="#E9D5B8" />
      <path d="M-26 142 L26 142 L54 222 Q0 232 -54 222 Z" fill="#2F7F86" />
      <path d="M-14 150 L-24 224 M-4 150 L-8 226 M6 150 L8 226 M16 150 L24 224" stroke="#5BB0B7" strokeWidth="1.4" opacity="0.6" fill="none" />
      <path d="M-52 212 Q0 222 52 212 L54 222 Q0 232 -54 222 Z" fill={GOLD} />
      <path d="M-16 84 L0 80 L40 126 L46 206 L24 208 L22 134 Z" fill="#1F5F66" />
      <path d="M-16 84 L22 134 L24 208" fill="none" stroke={GOLD} strokeWidth="2" />
      <circle cx="32" cy="160" r="2" fill={GOLD} />
      <circle cx="35" cy="180" r="2" fill={GOLD} />
      <circle cx="34" cy="196" r="2" fill={GOLD} />
    </g>
  );
}

function Shop({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="-3" y="100" width="162" height="6" fill={GOLD} />
      <rect x="28" y="74" width="100" height="26" rx="4" fill={MAROON} stroke={GOLD} strokeWidth="1.5" />
      <text x="78" y="91" textAnchor="middle" fontSize="10" fontFamily="serif" letterSpacing="2" fill="#F3DFA8">
        DEV FASHION
      </text>
      <rect x="0" y="106" width="156" height="134" fill="#3A2A28" />
      {Array.from({ length: 8 }).map((_, i) => {
        const fill = i % 2 === 0 ? MAROON : "#4A3A36";
        return (
          <g key={i}>
            <rect x={-6 + 21 * i} y="110" width="21" height="24" fill={fill} />
            <circle cx={-6 + 21 * i + 10.5} cy="134" r="10.5" fill={fill} />
          </g>
        );
      })}
      <rect x="14" y="156" width="40" height="54" rx="2" fill="#241C1B" stroke={GOLD} strokeWidth="2" />
      <path d="M24 172 L30 166 Q34 170 38 166 L44 172 L48 186 L44 188 L41 182 V206 H27 V182 L24 188 L20 186 Z" fill="#2B5BA8" />
      <AariFlower x={34} y={182} r={3.2} petal={GOLD_LIGHT} center="#FBF3EA" />
      <rect x="66" y="162" width="34" height="78" rx="2" fill="#1F5F66" />
      <rect x="72" y="170" width="22" height="34" fill="#F3DFA8" opacity="0.35" />
      <circle cx="94" cy="204" r="2.5" fill={GOLD} />
      <rect x="62" y="236" width="42" height="4" fill="#D8C3A4" />
      <rect x="112" y="156" width="30" height="54" rx="2" fill="#241C1B" stroke={GOLD} strokeWidth="2" />
      <path d="M121 168 H133 L138 206 H116 Z" fill={MAROON} />
      <rect x="116" y="200" width="22" height="6" fill={GOLD} />
    </g>
  );
}

function SpoolTower({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="-28" y="198" width="56" height="6" rx="2" fill="#D8C3A4" />
      <rect x="-23" y="204" width="46" height="28" fill={MAROON} />
      <path d="M-23 212 H23 M-23 220 H23 M-23 227 H23" stroke="#A84652" strokeWidth="1.5" />
      <rect x="-28" y="232" width="56" height="6" rx="2" fill="#D8C3A4" />
      <rect x="-22" y="192" width="44" height="6" rx="2" fill="#D8C3A4" />
      <rect x="-18" y="164" width="36" height="28" fill="#2F7F86" />
      <path d="M-18 172 H18 M-18 180 H18 M-18 187 H18" stroke="#4FA0A7" strokeWidth="1.5" />
      <rect x="-22" y="158" width="44" height="6" rx="2" fill="#D8C3A4" />
      <rect x="-16" y="152" width="32" height="6" rx="2" fill="#D8C3A4" />
      <rect x="-13" y="128" width="26" height="24" fill={GOLD} />
      <path d="M-13 136 H13 M-13 144 H13" stroke="#DDB96F" strokeWidth="1.5" />
      <rect x="-16" y="122" width="32" height="6" rx="2" fill="#D8C3A4" />
      <path d="M0 62 Q4 66 3 82 L2 122 H-2 L-3 82 Q-4 66 0 62 Z" fill="#D8C9A8" />
      <ellipse cx="0" cy="74" rx="1.6" ry="6" fill="#FCF1E8" />
      <path d="M0 74 C28 70 40 96 18 108 C-4 120 -34 114 -22 138" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

function Mirror({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <path d="M0 190 L-24 238 M0 190 L24 238 M-13 214 H13" stroke={WOOD} strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="0" cy="140" rx="30" ry="52" fill={GOLD} />
      <ellipse cx="0" cy="140" rx="25" ry="47" fill="#24343A" />
      <path d="M-14 120 L-4 100 M-10 136 L6 108" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <circle cx="-30" cy="140" r="3" fill={WOOD} />
      <circle cx="30" cy="140" r="3" fill={WOOD} />
    </g>
  );
}

function FabricStack({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="0" y="214" width="70" height="26" rx="3" fill="#D98E8E" />
      <rect x="4" y="196" width="62" height="18" rx="3" fill="#2B5BA8" />
      <rect x="-2" y="180" width="72" height="16" rx="3" fill={GOLD_LIGHT} />
      <rect x="6" y="166" width="58" height="14" rx="3" fill="#5E8C61" />
      <path d="M4 226 H66 M8 205 H62 M2 188 H68" stroke="#FFFFFF" strokeWidth="1" opacity="0.35" />
      <path d="M-10 206 Q35 196 82 210" fill="none" stroke="#F2C94C" strokeWidth="7" />
      <path d="M-10 206 Q35 196 82 210" fill="none" stroke="#8A6A1A" strokeWidth="7" strokeDasharray="1 5" opacity="0.55" />
      <circle cx="29" cy="162" r="6" fill="none" stroke={MAROON} strokeWidth="3" />
      <circle cx="41" cy="162" r="6" fill="none" stroke={MAROON} strokeWidth="3" />
      <path d="M30 156 L42 112" stroke="#B8C0C8" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 156 L28 112" stroke="#9AA4AD" strokeWidth="4" strokeLinecap="round" />
      <circle cx="35" cy="138" r="3" fill={GOLD} />
    </g>
  );
}

/* ---------- the woman with two parrots ---------- */
function Parrot({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x},${y}) scale(${flip ? -1 : 1},1)`}>
      {/* tail */}
      <path d="M-3 -6 Q-9.5 8 -6.5 21 Q0 13 2 -4 Z" fill="#2F8F4E" />
      <path d="M-6.8 15 Q-5.6 21 -6.5 21 Q-1 18 0.4 11.5 Z" fill="#2B7BC4" />
      {/* body */}
      <ellipse cx="0" cy="-13" rx="6.6" ry="11" fill="#4FB45E" transform="rotate(12 0 -13)" />
      <ellipse cx="1.8" cy="-10" rx="3.6" ry="7.4" fill="#8BD16F" />
      {/* wing */}
      <path d="M-5.4 -21 Q-9.5 -8 -4.4 2 Q1 -6 0.4 -20 Z" fill="#2F8F4E" />
      <path d="M-4.9 -5 Q-4.8 0 -4.4 2 Q-0.6 -2 0 -7 Z" fill="#2B7BC4" />
      {/* head + neck ring + beak + eye */}
      <circle cx="3" cy="-27" r="6.3" fill="#4FB45E" />
      <path d="M-1.8 -22.6 Q3 -19.6 8 -22.8" fill="none" stroke="#E0463A" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.2 -29.8 Q16 -28.6 14.2 -20.4 Q12.2 -24.6 8 -24.2 Z" fill="#E0463A" />
      <circle cx="5.2" cy="-28.5" r="1.9" fill="#FFFFFF" />
      <circle cx="5.6" cy="-28.5" r="1" fill="#1A1A1A" />
      {/* feet */}
      <path d="M-1.6 -1 L-1.6 3 M2 -1 L2 3" stroke="#E08A3A" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  );
}

function Woman({ x }: { x: number }) {
  const skin = "#D9A27A";
  const skinShade = "#BE8560";
  const hair = "#2A1A14";
  const saree = "#B8324A";
  const blouse = "#1F5F66";
  return (
    <g transform={`translate(${x},0)`}>
      <ellipse cx="0" cy="238" rx="42" ry="4.5" fill={WOOD_LIGHT} opacity=".55" />

      {/* arms (drawn first, sleeves sit on top) */}
      <path d="M-25 110 L-39 126 L-53 97" fill="none" stroke={skin} strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 110 L39 126 L53 97" fill="none" stroke={skin} strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="-53.5" cy="93.5" r="4.3" fill={skin} />
      <circle cx="53.5" cy="93.5" r="4.3" fill={skin} />
      {/* bangles */}
      <path d="M-56.5 101 L-49 99.4 M56.5 101 L49 99.4" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M-55.4 104 L-48 102.4 M55.4 104 L48 102.4" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round" />

      {/* saree skirt, pleats, gold border */}
      <path d="M-22 128 L22 128 L41 238 Q0 245 -41 238 Z" fill={saree} />
      <path d="M-10 134 L-19 238 M-2 134 L-5 241 M6 134 L9 241 M14 134 L23 238" stroke="#DC6A80" strokeWidth="1.3" fill="none" opacity=".75" />
      <path d="M-38.6 226 Q0 232 38.6 226 L41 238 Q0 245 -41 238 Z" fill={GOLD} />
      <path d="M-39.6 232 Q0 238 39.6 232" fill="none" stroke={MAROON} strokeWidth="1" strokeDasharray="1.5 2.5" />

      {/* blouse with aari work */}
      <path d="M-20 100 Q0 93 20 100 L23 130 L-23 130 Z" fill={blouse} />
      <path d="M-21 100 L-31 107 L-27.5 119 L-19 114 Z" fill={blouse} />
      <path d="M21 100 L31 107 L27.5 119 L19 114 Z" fill={blouse} />
      <path d="M-30.5 112 L-24.5 116.5 M30.5 112 L24.5 116.5" stroke={GOLD_LIGHT} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M-9 100 Q0 113 9 100" fill="none" stroke={GOLD_LIGHT} strokeWidth="1.8" />
      <AariFlower x={-8} y={121} r={4.4} />
      <AariFlower x={8} y={121} r={4.4} />
      <rect x="-23" y="126" width="46" height="4" fill={GOLD} />

      {/* pallu over the shoulder */}
      <path d="M-18 98 L-6 97 L20 130 L30 206 L12 208 L8 134 Z" fill="#8F2338" />
      <path d="M-18 98 L8 134 L12 208" fill="none" stroke={GOLD} strokeWidth="2" />
      <circle cx="21" cy="160" r="1.8" fill={GOLD} />
      <circle cx="24" cy="182" r="1.8" fill={GOLD} />

      {/* neck + necklace */}
      <rect x="-4" y="89" width="8" height="13" fill={skinShade} />
      <path d="M-8 101 Q0 111 8 101" fill="none" stroke={GOLD} strokeWidth="1.6" />
      <circle cx="0" cy="108.4" r="2" fill="#E0463A" stroke={GOLD} strokeWidth=".8" />

      {/* hair bun with jasmine */}
      <circle cx="-2" cy="52" r="9.5" fill={hair} />
      {[
        [-9, 48],
        [-10, 53],
        [-7, 58],
        [5, 47],
        [6, 53],
        [3, 58],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#FFFFFF" />
      ))}
      <path d="M-14 56 Q-2 62 10 56" fill="none" stroke="#5E8C61" strokeWidth="1.4" />

      {/* head, ears, earrings */}
      <circle cx="-14.6" cy="79" r="2.6" fill={skin} />
      <circle cx="14.6" cy="79" r="2.6" fill={skin} />
      <ellipse cx="0" cy="76" rx="14.6" ry="16.6" fill={skin} />
      <circle cx="-15" cy="84.4" r="1.8" fill={GOLD} />
      <circle cx="15" cy="84.4" r="1.8" fill={GOLD} />
      <path d="M-15 86 V89 M15 86 V89" stroke={GOLD} strokeWidth="1.2" />
      {/* hair cap + parting + tikka */}
      <path d="M-15.4 77 Q-18 54 0 53.5 Q18 54 15.4 77 Q12.5 66 6 63.4 Q0 66.4 -6 63.4 Q-12.5 66 -15.4 77 Z" fill={hair} />
      <path d="M0 55 V64.5" stroke={MAROON} strokeWidth="1.2" />
      <circle cx="0" cy="66.2" r="1.5" fill={GOLD} />
      {/* face */}
      <path d="M-8.4 72 Q-5.2 69.8 -2.4 71.4 M8.4 72 Q5.2 69.8 2.4 71.4" fill="none" stroke={hair} strokeWidth="1.1" strokeLinecap="round" />
      <ellipse cx="-5.2" cy="76.4" rx="1.6" ry="2" fill={hair} />
      <ellipse cx="5.2" cy="76.4" rx="1.6" ry="2" fill={hair} />
      <circle cx="-4.7" cy="75.6" r=".6" fill="#FFFFFF" />
      <circle cx="5.7" cy="75.6" r=".6" fill="#FFFFFF" />
      <circle cx="0" cy="70.2" r="1.3" fill="#D8283A" />
      <path d="M-1.3 79.4 Q0.4 81.6 2 80" fill="none" stroke={skinShade} strokeWidth=".9" strokeLinecap="round" />
      <circle cx="-8.6" cy="82" r="2.7" fill="#E88A7A" opacity=".4" />
      <circle cx="8.6" cy="82" r="2.7" fill="#E88A7A" opacity=".4" />
      <path d="M-4.2 85 Q0 88.8 4.2 85" fill="none" stroke={MAROON} strokeWidth="1.4" strokeLinecap="round" />

      {/* the two parrots, one on each hand, facing her */}
      <Parrot x={-53.5} y={90} />
      <Parrot x={53.5} y={90} flip />
    </g>
  );
}

/* ---------- Coimbatore: gopuram temple ---------- */
const TIERS = [
  { w: 66, y1: 176, y2: 224 },
  { w: 56, y1: 152, y2: 176 },
  { w: 47, y1: 130, y2: 152 },
  { w: 38, y1: 110, y2: 130 },
  { w: 29, y1: 92, y2: 110 },
  { w: 20, y1: 78, y2: 92 },
];
const NICHES = [0, 4, 4, 3, 3, 2];

function Kalasam({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="3.2" ry="3.8" fill={GOLD} />
      <path d="M0 -3.8 V-9" stroke={GOLD} strokeWidth="1.4" />
      <circle cx="0" cy="-10" r="1.3" fill={GOLD} />
    </g>
  );
}

function Gopuram({ walls = true }: { walls?: boolean }) {
  return (
    <g>
      {walls &&
        [-1, 1].map((d) => (
          <g key={d} transform={`scale(${d},1)`}>
            <rect x="58" y="216" width="56" height="24" fill="#2E2822" />
            {Array.from({ length: 10 }).map((_, i) => (
              <rect key={i} x={60 + i * 5.6} y="219" width="2.8" height="21" fill="#D9622B" />
            ))}
            <rect x="56" y="214" width="60" height="5" fill="#C8774E" />
            <rect x="56" y="214" width="60" height="1.4" fill={GOLD} />
          </g>
        ))}

      {/* plinth */}
      <rect x="-72" y="224" width="144" height="16" fill="#B96F48" />
      <rect x="-72" y="224" width="144" height="2" fill={GOLD} />

      {/* stepped tiers */}
      {TIERS.map(({ w, y1, y2 }, i) => {
        const n = NICHES[i];
        const step = (2 * w) / (n + 1);
        return (
          <g key={i}>
            <rect x={-w} y={y1} width={2 * w} height={y2 - y1} fill={i % 2 ? "#4A3626" : "#55402D"} />
            {n > 0 &&
              Array.from({ length: n }).map((_, k) => {
                const c = -w + step * (k + 1);
                const yt = y1 + 5;
                const yb = y2 - 4;
                return (
                  <g key={k}>
                    <path d={`M${c - 3.5} ${yb} V${yt + 3.5} Q${c} ${yt - 1.5} ${c + 3.5} ${yt + 3.5} V${yb} Z`} fill={MAROON} />
                    <circle cx={c} cy={yb - 5} r="1.5" fill={GOLD} />
                  </g>
                );
              })}
            <rect x={-w - 4} y={y1 - 4} width={2 * w + 8} height="5" fill="#C8774E" />
            <rect x={-w - 4} y={y1 - 4} width={2 * w + 8} height="1.3" fill={GOLD} />
            <circle cx={-w - 3} cy={y1 - 6} r="2.1" fill={GOLD} />
            <circle cx={w + 3} cy={y1 - 6} r="2.1" fill={GOLD} />
          </g>
        );
      })}

      {/* gate: pillars, arch, door, flank niches, marigold garland */}
      <rect x="-24" y="198" width="5" height="26" fill="#6B5236" />
      <rect x="19" y="198" width="5" height="26" fill="#6B5236" />
      <rect x="-25" y="196" width="7" height="3" fill={GOLD} />
      <rect x="18" y="196" width="7" height="3" fill={GOLD} />
      <path d="M-13 224 V201 Q0 185 13 201 V224 Z" fill="#4A2020" />
      <path d="M-13 224 V201 Q0 185 13 201 V224" fill="none" stroke={GOLD} strokeWidth="1.6" />
      <path d="M0 192 V224" stroke="#6B3030" strokeWidth=".9" />
      {[-44, 44].map((c) => (
        <g key={c}>
          <path d={`M${c - 6} 220 V196 Q${c} 188 ${c + 6} 196 V220 Z`} fill={MAROON} />
          <circle cx={c} cy="212" r="2.6" fill={GOLD} />
          <circle cx={c} cy="204" r="1.8" fill={GOLD_LIGHT} />
        </g>
      ))}
      <path d="M-23 200 Q0 222 23 200" fill="none" stroke="#F29E2E" strokeWidth="3.4" strokeDasharray="0 5.2" strokeLinecap="round" />
      <path d="M-23 203.5 Q0 225.5 23 203.5" fill="none" stroke="#E0463A" strokeWidth="2.4" strokeDasharray="0 5.2" strokeLinecap="round" />

      {/* barrel roof + kalasams */}
      <path d="M-23 78 Q-23 54 0 50 Q23 54 23 78 Z" fill="#C8774E" />
      <path d="M-23 78 Q-23 54 0 50 Q23 54 23 78" fill="none" stroke={GOLD} strokeWidth="1.4" />
      <path d="M-15 76 Q-15 58 0 54 M-7.5 77 Q-7.5 60 0 53 M7.5 77 Q7.5 60 0 53 M15 76 Q15 58 0 54" fill="none" stroke={MAROON} strokeWidth=".9" opacity=".7" />
      <Kalasam x={-15} y={50} />
      <Kalasam x={0} y={45} s={1.25} />
      <Kalasam x={15} y={50} />
    </g>
  );
}

/* ---------- Coimbatore: Mahadev (Shiva) in meditation ---------- */
function Mahadev({ x }: { x: number }) {
  const skin = "#93A6BC";
  const skinMid = "#7E92AA";
  const skinDark = "#677C96";
  const ink = "#2A3340";
  const hair = "#2E343D";
  const water = "#8AD0EE";
  /* rudraksha beads along a hanging curve */
  const beads = Array.from({ length: 9 }, (_, k) => {
    const t = (k + 1) / 10;
    const u = 1 - t;
    return { x: u * u * -21 + t * t * 21, y: u * u * 150 + 2 * u * t * 206 + t * t * 150 };
  });
  return (
    <g transform={`translate(${x},240) scale(1.1) translate(0,-240)`}>
      {/* soft halo */}
      <circle cx="0" cy="112" r="66" fill={GOLD} opacity=".2" />
      <circle cx="0" cy="112" r="66" fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="2 4" opacity=".7" />

      {/* stone plinth */}
      <path d="M-64 240 V224 H64 V240 Z" fill="#3A3128" />
      <rect x="-56" y="214" width="112" height="10" fill="#463C31" />

      {/* trishul with damaru */}
      <g transform="translate(60,0)">
        <rect x="-1.5" y="66" width="3" height="152" fill="#B8A06A" />
        <path d="M-10 54 Q-10 69 0 71 Q10 69 10 54" fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M0 42 L-3 58 H3 Z" fill={GOLD} />
        <path d="M-10 48 L-12.6 58 H-7.4 Z M10 48 L7.4 58 H12.6 Z" fill={GOLD} />
        <rect x="-10" y="68" width="20" height="2.6" fill={GOLD} />
        <path d="M-7 80 L7 80 L0 89 Z M-7 98 L7 98 L0 89 Z" fill="#C8774E" stroke={ink} strokeWidth=".6" />
        <path d="M7 89 Q18 92 13 106" fill="none" stroke={MAROON} strokeWidth="1.2" />
        <circle cx="13" cy="107" r="1.8" fill={GOLD} />
        <path d="M0 73 Q10 80 4 94" fill="none" stroke="#E0463A" strokeWidth="1.4" />
      </g>

      {/* shoulders + chest with vibhuti lines */}
      <path d="M-54 214 Q-54 174 -28 164 L-12 158 L12 158 L28 164 Q54 174 54 214 Z" fill={skinMid} stroke={ink} strokeWidth="1" strokeLinejoin="round" />
      <path d="M-54 214 Q-54 174 -28 164 L-12 158 L-8 214 Z" fill={skinDark} />
      <path d="M-31 188 Q0 200 31 188 M-33 196 Q0 209 33 196 M-34 204 Q0 217 34 204" fill="none" stroke="#F1F4F8" strokeWidth="1.7" strokeLinecap="round" opacity=".92" />
      {/* rudraksha mala */}
      {beads.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r="2.3" fill="#6B3F2A" stroke="#3E2418" strokeWidth=".5" />
      ))}

      {/* cobra around the shoulders, hood rising on the right */}
      <path d="M-33 172 Q-14 196 4 184 Q18 176 27 186" fill="none" stroke="#2B3036" strokeWidth="5.6" strokeLinecap="round" />
      <ellipse cx="29" cy="172" rx="7.6" ry="10" fill="#2B3036" />
      <path d="M24.6 168 Q29 177 33.4 168" fill="none" stroke="#9AA7B5" strokeWidth="1.1" />
      <circle cx="29" cy="160.6" r="3.6" fill="#2B3036" />
      <circle cx="27.8" cy="160" r=".8" fill="#F1F4F8" />
      <circle cx="30.4" cy="160" r=".8" fill="#F1F4F8" />
      <path d="M29 164 V168" stroke="#E0463A" strokeWidth=".8" />

      {/* neck, ears, head */}
      <rect x="-10" y="140" width="20" height="20" fill={skinDark} />
      <ellipse cx="-21.4" cy="120" rx="3.6" ry="7" fill={skin} stroke={ink} strokeWidth=".7" />
      <ellipse cx="21.4" cy="120" rx="3.6" ry="7" fill={skin} stroke={ink} strokeWidth=".7" />
      <ellipse cx="0" cy="118" rx="21" ry="26" fill={skin} stroke={ink} strokeWidth="1" />

      {/* matted hair, long locks, spiral top-knot */}
      <path d="M-25 112 Q-31 82 -8 79 Q0 72 8 79 Q31 82 25 112 Q22 95 0 91 Q-22 95 -25 112 Z" fill={hair} />
      <path d="M-25 108 Q-37 130 -32 162 Q-24 142 -21 116 Z" fill={hair} />
      <path d="M25 108 Q37 130 32 162 Q24 142 21 116 Z" fill={hair} />
      <path d="M-30 128 Q-28 140 -31 152 M30 128 Q28 140 31 152" fill="none" stroke="#454C57" strokeWidth="1" />
      <ellipse cx="0" cy="70" rx="11" ry="12" fill={hair} />
      <path d="M-8 66 Q0 60 8 66 Q4 72 -4 70 Q0 66 3 67" fill="none" stroke="#454C57" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M-9 74 Q0 79 9 74" fill="none" stroke="#454C57" strokeWidth="1" />
      {/* crescent moon */}
      <path d="M0 -9 A9 9 0 0 0 0 9 A13.5 13.5 0 0 1 0 -9 Z" fill="#EEF1F4" stroke="#B8C0CA" strokeWidth=".6" transform="translate(15,62) rotate(25)" />
      {/* Ganga flowing from the hair */}
      <path d="M-9 64 Q-24 82 -19 100 Q-14 114 -23 136" fill="none" stroke={water} strokeWidth="3.8" strokeLinecap="round" />
      <path d="M-9 64 Q-24 82 -19 100 Q-14 114 -23 136" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 5" strokeLinecap="round" opacity=".8" />
      <circle cx="-23.6" cy="142" r="1.5" fill={water} />
      <circle cx="-26" cy="149" r="1.2" fill={water} />

      {/* forehead: tripundra, third eye */}
      <path d="M-10.6 94.6 H10.6 M-10.2 98 H10.2 M-9.6 101.4 H9.6" fill="none" stroke="#F4F6F9" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M0 102.6 Q2.4 106.4 0 110 Q-2.4 106.4 0 102.6 Z" fill="#D8472F" stroke={ink} strokeWidth=".6" />
      {/* serene closed eyes, brows, nose, smile */}
      <path d="M-12 114.6 Q-7 112.4 -2.6 114.4 M12 114.6 Q7 112.4 2.6 114.4" fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M-11 120 Q-7 123 -3 120 M3 120 Q7 123 11 120" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M0 122 V130.4 M-3 131.6 Q0 133.6 3 131.6" fill="none" stroke="#4A586C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M-5.6 138 Q0 141.6 5.6 138" fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
      {/* gold kundala earrings */}
      <circle cx="-22.2" cy="129.4" r="3" fill="none" stroke={GOLD} strokeWidth="1.6" />
      <circle cx="22.2" cy="129.4" r="3" fill="none" stroke={GOLD} strokeWidth="1.6" />
    </g>
  );
}

/* ---------- Coimbatore: skyline, hills, mills ---------- */
function Building({ x, w, h, dome = false, antenna = false }: { x: number; w: number; h: number; dome?: boolean; antenna?: boolean }) {
  const top = 240 - h;
  const cols = Math.max(1, Math.floor((w - 6) / 9));
  const rows = Math.max(1, Math.floor((h - 10) / 14));
  const cw = (w - 10) / cols;
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} fill="#2B251E" />
      {dome && <path d={`M${x + 3} ${top} Q${x + w / 2} ${top - w * 0.75} ${x + w - 3} ${top} Z`} fill="#2B251E" />}
      {antenna && <path d={`M${x + w / 2} ${top} V${top - 26}`} stroke="#4A4036" strokeWidth="2" />}
      {Array.from({ length: rows }).flatMap((_, r) =>
        Array.from({ length: cols }).map((__, c) => (
          <rect
            key={`${r}-${c}`}
            x={x + 5 + c * cw}
            y={top + 8 + r * 14}
            width={Math.max(3, cw - 3)}
            height="6"
            fill={GOLD_LIGHT}
            opacity={(r + c) % 3 === 0 ? 0.25 : 0.85}
          />
        )),
      )}
    </g>
  );
}

/* Coimbatore is "the Manchester of South India": a sawtooth textile mill with a chimney */
function TextileMill({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="0" y="196" width="84" height="44" fill="#2B251E" />
      <path d="M0 196 L0 178 L21 196 L21 178 L42 196 L42 178 L63 196 L63 178 L84 196 Z" fill="#2B251E" />
      <rect x="90" y="120" width="10" height="120" fill="#332B22" />
      <rect x="88" y="116" width="14" height="6" fill="#3D342A" />
      <rect x="10" y="212" width="12" height="28" fill={GOLD_LIGHT} />
      <rect x="34" y="208" width="14" height="10" fill={GOLD_LIGHT} />
      <rect x="56" y="208" width="14" height="10" fill={GOLD_LIGHT} />
    </g>
  );
}

const SKYLINE: { x: number; w: number; h: number; dome?: boolean; antenna?: boolean }[] = [
  { x: 566, w: 30, h: 112 },
  { x: 600, w: 26, h: 134, antenna: true },
  { x: 638, w: 28, h: 102 },
  { x: 676, w: 30, h: 80 },
  { x: 710, w: 38, h: 106, dome: true },
  { x: 752, w: 26, h: 92 },
  { x: 782, w: 34, h: 124 },
  { x: 820, w: 30, h: 84 },
  { x: 1124, w: 34, h: 102 },
  { x: 1162, w: 28, h: 128, antenna: true },
  { x: 1194, w: 40, h: 90 },
  { x: 1238, w: 30, h: 116, dome: true },
  { x: 1272, w: 36, h: 80 },
  { x: 1312, w: 30, h: 106 },
  { x: 1346, w: 40, h: 132 },
  { x: 1390, w: 28, h: 94 },
  { x: 1422, w: 34, h: 114 },
  { x: 1460, w: 30, h: 86 },
  { x: 1494, w: 38, h: 102 },
  { x: 1536, w: 28, h: 122, antenna: true },
];

function Skyline() {
  return (
    <g>
      {/* soft glow behind the temple + moon */}
      <circle cx="1010" cy="122" r="74" fill={GOLD} opacity=".12" />
      <circle cx="210" cy="96" r="30" fill="#EFE3C2" opacity=".9" />

      {/* Western Ghats: far + near hills */}
      <path
        d="M0 240 V150 C60 120 110 112 170 140 C230 168 270 120 340 100 C410 80 450 130 520 150 C600 172 650 130 720 120 C790 110 840 150 900 160 C980 175 1040 120 1110 110 C1180 100 1230 150 1300 150 C1370 150 1420 110 1490 105 C1560 100 1610 140 1680 135 C1720 133 1745 125 1760 120 V240 Z"
        fill="#18201A"
      />
      {/* Marudhamalai hill temple */}
      <g transform="translate(340 58) scale(.2)" opacity=".85">
        <Gopuram walls={false} />
      </g>
      <path
        d="M0 240 V185 C80 165 150 175 230 190 C320 205 400 170 480 172 C580 175 640 200 740 195 C840 190 900 170 1000 176 C1100 182 1180 200 1280 190 C1380 180 1450 170 1560 176 C1650 181 1710 190 1760 184 V240 Z"
        fill="#1D1914"
      />

      {/* city blocks + textile mill */}
      {SKYLINE.map((b) => (
        <Building key={b.x} {...b} />
      ))}
      <TextileMill x={454} />
    </g>
  );
}

/* ---------- festive bunting ---------- */
const BUNTING_COLORS = [MAROON, GOLD, "#2F7F86", "#2B5BA8", "#5E8C61"];

function Bunting() {
  const swags = Array.from({ length: 8 }, (_, i) => i * 220);
  return (
    <g opacity=".95">
      {swags.map((x0, si) => (
        <g key={x0}>
          <path d={`M${x0} 12 Q${x0 + 110} 34 ${x0 + 220} 12`} fill="none" stroke="#B89A5A" strokeWidth="1" />
          {Array.from({ length: 9 }, (_, k) => {
            const t = (k + 1) / 10;
            const px = x0 + 220 * t;
            const py = (1 - t) ** 2 * 12 + 2 * (1 - t) * t * 34 + t ** 2 * 12;
            const c = BUNTING_COLORS[(si * 9 + k) % BUNTING_COLORS.length];
            return <path key={k} d={`M${px - 5.5} ${py} L${px + 5.5} ${py} L${px} ${py + 12} Z`} fill={c} />;
          })}
        </g>
      ))}
    </g>
  );
}

/* ---------- the whole scene ---------- */
function Scene() {
  return (
    <g>
      {/* night sky */}
      <defs>
        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0F0E0D" />
          <stop offset="1" stopColor="#1C1713" />
        </linearGradient>
      </defs>
      <rect width={SCENE_W} height={SCENE_H} fill="url(#nightSky)" />

      <Skyline />
      <Bunting />
      <Mahadev x={1672} />

      {/* ground band + captions */}
      <rect x="0" y="240" width={SCENE_W} height="20" fill="#161514" />
      <rect x="0" y="240" width={SCENE_W} height="1.5" fill={GOLD} opacity=".4" />
      <text x="440" y="254" textAnchor="middle" fontSize="8.4" fontFamily="serif" letterSpacing="6" fill={GOLD}>
        COIMBATORE
      </text>
      <text x="1320" y="254" textAnchor="middle" fontSize="8.4" fontFamily="serif" letterSpacing="6" fill={GOLD}>
        TAMIL NADU · INDIA
      </text>

      {/* sparkles */}
      <Sparkle x={62} y={74} s={1.1} />
      <Sparkle x={150} y={118} s={0.8} />
      <Sparkle x={296} y={62} />
      <Sparkle x={420} y={96} s={0.9} />
      <Sparkle x={586} y={58} s={1.1} />
      <Sparkle x={835} y={70} />
      <Sparkle x={1118} y={64} s={1.1} />
      <Sparkle x={1292} y={52} />
      <Sparkle x={1590} y={66} s={1.2} />
      <Sparkle x={1736} y={96} s={0.9} />

      {/* foreground: left half */}
      <Plant x={24} />
      <DressForm x={100} color={MAROON} trim={GOLD} aari />
      <AariFrame x={160} />
      <SewingMachine x={300} s={0.86} />
      <ClothesRail x={440} />
      <Woman x={697} />
      <SareeMannequin x={822} />

      {/* foreground: right half */}
      <g transform="translate(1010,0)">
        <Gopuram />
      </g>
      <Shop x={1130} />
      <SpoolTower x={1332} />
      <Mirror x={1402} />
      <DressForm x={1472} color="#2B5BA8" trim={GOLD_LIGHT} aari />
      <FabricStack x={1522} />
      <Plant x={1716} s={1.2} />
      <Plant x={1744} />
    </g>
  );
}

/* The whole scene is always one line: it simply scales to the width of the screen. */
function FashionStrip() {
  return (
    <div className="relative mt-6 overflow-hidden border-b-[3px] border-t border-b-[#C5A059]/40 border-t-[#C5A059]/25 bg-[#0F0E0D]">
      <svg
        viewBox={`0 0 ${SCENE_W} ${SCENE_H}`}
        className="block h-auto w-full"
        aria-hidden="true"
        focusable="false"
      >
        <Scene />
      </svg>
    </div>
  );
}

/* ========================================================
   FOOTER
   ======================================================== */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      /* the inline style + the solid dark layer below make sure NO global CSS rule
         (for example `footer { background: ... }` in globals.css) can turn this cream */
      style={{ backgroundColor: "#0F0E0D", color: "#FAF8F5" }}
      className="relative w-full overflow-hidden border-t border-[#C5A059]/25 bg-[#0F0E0D] font-sans text-[#FAF8F5]"
    >
      {/* solid dark layer */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#0F0E0D]" />

      {/* Decorative: gold top accent line + soft glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-[#C5A059]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#B8324A]/10 blur-3xl"
      />

      <div className="site-container relative z-10 pt-16 sm:pt-20 lg:pt-24">

        {/* Brand + link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 pb-12 lg:grid-cols-[1.9fr_1fr_1.1fr_1fr_1.5fr] lg:gap-x-10">

          {/* Brand + promise */}
          <div className="col-span-2 flex flex-col space-y-6 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-3.5 self-start">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#C5A059]/60 bg-[#161514] p-0.5 shadow-sm">
                <Image
                  src="/logo.jpg"
                  alt="Dev Fashion Official Logo"
                  fill
                  sizes="64px"
                  className="object-cover p-0.2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-light leading-tight tracking-[0.2em] text-white transition-colors group-hover:text-[#C5A059]">
                  DEV FASHION
                </span>
                <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
                  Premium Boutique &amp; Tailoring
                </span>
              </div>
            </Link>

            {/* Our Promise panel */}
            <div className="space-y-3 border-l-2 border-[#C5A059]/80 bg-[#161514] p-6">
              <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-[#C5A059]">
                OUR PROMISE
              </span>
              <p className="text-justify text-xs font-light leading-relaxed text-stone-300">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
              </p>
              <p className="border-t border-stone-800 pt-2 text-justify text-xs font-light leading-relaxed text-stone-300">
                &nbsp;&nbsp;&nbsp;Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/gallery"
                className="inline-flex min-h-11 items-center justify-center border border-[#C5A059]/50 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-200 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
              >
                Explore Our Designs
              </Link>
              <Link
                href="/contact#booking"
                className="inline-flex min-h-11 items-center justify-center border border-[#C5A059] bg-[#C5A059] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-950 transition-all duration-300 hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Our Services</h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>The Studio</h3>
            <ul className="space-y-3">
              {STUDIO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 space-y-6 lg:col-span-1">
            <h3 className={headingClass}>Connect</h3>

            <ul className="space-y-4 text-xs text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" />
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light leading-relaxed transition-colors hover:text-[#C5A059]"
                >
                  No 37, 9th Street, Tatabad, Gandhipuram, Coimbatore, Tamil Nadu 641012
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#C5A059]" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-light tracking-wide transition-colors hover:text-[#C5A059]"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#C5A059]" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all font-light transition-colors hover:text-[#C5A059]"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" />
                <div className="font-light">
                  <span className="block text-stone-200">{HOURS_MAIN}</span>
                  <span className="mt-0.5 block text-[11px] text-stone-400">{HOURS_SUNDAY}</span>
                </div>
              </li>
            </ul>

            {/* Follow us */}
            <div className="space-y-3 border-t border-stone-800 pt-4">
              <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
                FOLLOW US
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/devfashion_bridalblouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={socialClass}
                >
                  <FaInstagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/devblouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={socialClass}
                >
                  <FaFacebook className="h-3.5 w-3.5" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={socialClass}
                >
                  <FaWhatsapp className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="font-serif text-xs italic text-stone-400">
                be the first to know about new arrivals
              </p>
            </div>
          </div>
        </div>

        {/* Ornament divider */}
        <div aria-hidden="true" className="flex items-center gap-4 pb-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/40" />
          <span className="font-serif text-sm tracking-[0.4em] text-[#C5A059]">✦ ✦ ✦</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/40" />
        </div>

        {/* Payments + guarantee */}
        <div className="flex flex-col items-center justify-between gap-6 pb-8 lg:flex-row">
          <div className="flex w-full min-w-0 flex-col items-start gap-3 lg:flex-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
              We Accept
            </span>
            <ul
              aria-label="Accepted payment methods"
              className="flex w-full flex-nowrap items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {[...CARD_METHODS, ...OTHER_METHODS].map((method) => (
                <PaymentChip key={method.label} method={method} />
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 border border-[#C5A059]/30 bg-[#161514] px-5 py-3">
            <Lock className="h-5 w-5 shrink-0 text-[#C5A059]" />
            <div className="leading-tight">
              <p className="font-serif text-sm font-semibold text-white">Secure Design Guarantee</p>
              <p className="text-[11px] font-light text-stone-400">
                Safe payments &bull; Your measurements stay private
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-3 border-t border-[#C5A059]/15 py-6 text-center text-xs text-stone-400 md:flex-row md:justify-between md:text-left">
          <p className="font-light leading-relaxed">
            &copy; {currentYear} Dev Fashion. All rights reserved.
            <span className="mx-2 hidden text-[#C5A059]/50 md:inline">|</span>
            <span className="block md:inline"> Design and developed with love by Shahi.</span>
          </p>

          <div className="flex items-center gap-4 text-stone-300">
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center transition-colors hover:text-[#C5A059]">
              Privacy Policy
            </Link>
            <span className="text-stone-700">&bull;</span>
            <Link href="/terms" className="inline-flex min-h-[44px] items-center transition-colors hover:text-[#C5A059]">
              Terms &amp; Conditions
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A059]/30 bg-[#161514] text-[#C5A059] transition-colors hover:bg-[#C5A059] hover:text-stone-950 md:mr-24"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Fashion cartoon strip */}
      <FashionStrip />
    </footer>
  );
}