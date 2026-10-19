// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   Scissors,
//   Ruler,
//   Gem,
//   ArrowRight,
//   ShieldCheck,
//   Video,
//   Send,
//   CheckCircle,
//   Globe,
//   MapPin,
//   Clock,
//   Award
// } from "lucide-react";

// // Clean, simple 4-step bespoke process
// const steps = [
//   {
//     number: "01",
//     title: "Styling Consultation",
//     time: "30–45 Mins",
//     desc: "We discuss your saree drape, event theme, neckline preferences, and embroidery placement — in studio or over a private video call.",
//   },
//   {
//     number: "02",
//     title: "Fabric & Zari Selection",
//     time: "1–2 Days",
//     desc: "We curate premium raw silks, Banarasi brocades, organza, and match metallic zari threads and Kundan stones precisely to your saree.",
//   },
//   {
//     number: "03",
//     title: "Pattern & Handwork",
//     time: "3–5 Days",
//     desc: "Every design is drafted on paper to your measurements before our master karigars handcraft each Aari and Zardozi motif.",
//   },
//   {
//     number: "04",
//     title: "Fitting & Finishing",
//     time: "7–10 Days",
//     desc: "Precision double-stitched assembly with premium linings and generous inner margins, backed by our complimentary alteration guarantee.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <div className="w-full bg-[#FAF8F5] text-stone-900 pt-4 overflow-x-hidden font-sans">

//       {/* ========================================================
//           1. EDITORIAL COUTURE HERO BANNER
//           ======================================================== */}



//       <section className="relative py-18 sm:py-40 border-b border-gold-100 text-center bg-cover bg-center bg-no-repeat sm:bg-fixed"
//         style={{
//           backgroundImage: "url('/images/dev_fashion/abt.png')",
//         }}>


//         {/* Dark/white overlay */}
//         <div className="absolute inset-0 bg-black/65" />

//         {/* Content */}
//         <div className="relative z-10 boutique-container">

//           <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//             ✦ Our Legacy & Craftsmanship
//           </span>

//           <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white mb-6">
//             Built by a woman. For women.
//           </h1>

//           <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
//             Your occasion is unique. Your blouse should be too.
//           </p>
//           <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

//           <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
//             The Dev Fashion is the beauty of no limitations. Our mission is to lift you up out of the ordinary.
//             <br /> Dedicated to creating flawless bridal wear and designer blouses.
//           </p>
//         </div>
//       </section>


//       {/* ========================================================
//           2. THE ESSENCE (EXPANSIVE EDITORIAL PORTRAIT & PHILOSOPHY)
//           ======================================================== */}
//       <section className="py-20 sm:py-32 bg-white border-b border-[#EFEBE4]">
//         <div className="boutique-container">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

//             {/* Left: Fine Couture Framed Portrait */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="lg:col-span-5 flex flex-col items-center"
//             >
//               <div className="relative w-full max-w-md bg-[#141312] border border-[#C5A059]/40 p-3 sm:p-4 shadow-2xl relative group">
//                 {/* Gold Frame Corners */}
//                 <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C5A059] z-20" />
//                 <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C5A059] z-20" />
//                 <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C5A059] z-20" />
//                 <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C5A059] z-20" />

//                 <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
//                   <Image
//                     src="/images/dev_fashion/durga.jpg"
//                     alt="Mrs. Durga Devi - Founder of Dev Fashion"
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 40vw"
//                     className="object-cover object-top sm:object-center group-hover:scale-103 transition-transform duration-700"
//                     priority
//                   />

//                   {/* Subtle Founder Badge */}
//                   <div className="absolute bottom-4 left-4 right-4 bg-[#141312]/90 backdrop-blur-md border border-[#C5A059]/40 p-3 text-center">
//                     <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A059] block">
//                       Mrs. Durga Devi
//                     </span>
//                     <span className="text-[11px] text-stone-300 font-light italic font-serif">
//                       Founder &amp; Master Couturier
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right: Refined Atelier Story */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8"
//             >
//               <div>
//                 <span className="text-[10px] font-semibold tracking-[0.3em] text-[#B38E46] uppercase block mb-3">
//                   ✦ ATELIER PHILOSOPHY • EST. 2007
//                 </span>
//                 <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-stone-950 leading-[1.1] uppercase tracking-wide">
//                   Crafted for Individuality, <br />
//                   <span className="italic font-serif font-normal text-[#B38E46] normal-case">
//                     Rooted in Tradition
//                   </span>
//                 </h2>
//                 <div className="mt-4 h-[1.5px] w-20 bg-[#C5A059]" />
//               </div>

//               <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-light text-justify">
//                 <p>
//                   In the heart of Coimbatore, Dev Fashion began with a simple belief: every woman deserves to feel confident, radiant, and truly herself in what she wears. Founded by <strong>Mrs. Durga Devi</strong>, a passionate designer with over <strong>17 years of experience</strong> in tailoring and bridal wear, every stitch carries the philosophy that tradition should celebrate your individuality.
//                 </p>
//                 <p>
//                   We don’t simply stitch clothes. We listen to your vision, understand your celebration, and translate fine fabric into an outfit you can wear with pride. Today, Dev Fashion is trusted by thousands of women across India and in <strong>15+ countries worldwide</strong>.
//                 </p>
//               </div>

//               {/* Minimal Luxury Stats Strip */}
//               <div className="pt-6 border-t border-[#E5D9C5] grid grid-cols-3 gap-6 sm:gap-10">
//                 <div>
//                   <span className="block font-serif text-4xl sm:text-5xl font-light text-[#B38E46] mb-1">17+</span>
//                   <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold block">Years of Craft</span>
//                 </div>
//                 <div>
//                   <span className="block font-serif text-4xl sm:text-5xl font-light text-[#B38E46] mb-1">10,000+</span>
//                   <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold block">Happy Clients</span>
//                 </div>
//                 <div>
//                   <span className="block font-serif text-4xl sm:text-5xl font-light text-[#B38E46] mb-1">15+</span>
//                   <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-stone-500 font-semibold block">Countries Shipped</span>
//                 </div>
//               </div>

//             </motion.div>

//           </div>
//         </div>
//       </section>


//       {/* ========================================================
//           3. HER VISION (POETIC FULL-WIDTH CENTERPIECE)
//           ======================================================== */}
//       <section className="py-24 sm:py-36 bg-[#FAF6EE] border-b border-[#E8DEC8] relative overflow-hidden">
//         <div className="boutique-container text-center relative z-10">

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-5xl mx-auto"
//           >
//             <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.35em] uppercase text-[#B38E46] block mb-6">
//               ✦ MRS. DURGA DEVI&apos;S VISION ✦
//             </span>

//             {/* Central Dream Quote */}
//             <span className="font-serif text-6xl sm:text-8xl text-[#C5A059]/40 leading-none select-none block -mb-6">
//               “
//             </span>
//             <h2 className="font-serif italic text-2xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-[1.3] mb-8">
//               She dreams of a day when every woman can enjoy beautiful Aari embroidery without ever feeling that it is only for the rich.
//             </h2>
//             <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-8" />
//           </motion.div>

//           {/* Description & Meaning */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.15 }}
//             className="space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto"
//           >
//             <p>
//               She wants to make authentic, heirloom-quality Aari handwork affordable for every woman in India, while encouraging every woman to learn the empowering basics of tailoring.
//             </p>
//             <p className="font-serif italic text-base sm:text-lg text-stone-900">
//               &ldquo;For her, fashion is not just about looking beautiful — it is about confidence, creativity, and becoming who you want to be.&rdquo;
//             </p>
//           </motion.div>

//           {/* Signature Signoff */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="mt-12 pt-8 border-t border-[#E8DEC8] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600 font-light"
//           >
//             <span className="font-serif italic text-sm">
//               &ldquo;You are the thread that keeps Dev Fashion alive.&rdquo;
//             </span>
//             <span className="text-[#B38E46] font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-[11px]">
//               — With love &amp; gratitude, Durga&apos;s Dev Fashion Boutique Team
//             </span>
//           </motion.div>

//         </div>
//       </section>


//       {/* ========================================================
//           4. THE JOURNEY SINCE 2007 (HONEST, REFINED EDITORIAL)
//           ======================================================== */}
//       <section className="py-20 sm:py-32 bg-white border-b border-[#EFEBE4]">
//         <div className="boutique-container">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//             {/* Story Text */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="lg:col-span-7 flex flex-col space-y-6"
//             >
//               <div>
//                 <span className="text-[10px] font-semibold tracking-[0.3em] text-[#B38E46] uppercase block mb-2">
//                   ✦ OUR JOURNEY
//                 </span>
//                 <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 leading-tight uppercase tracking-wide">
//                   The Journey of Durga Devi <br />
//                   <span className="italic font-serif font-normal text-[#B38E46] normal-case">
//                     Since 2007
//                   </span>
//                 </h2>
//                 <div className="mt-4 h-[1.5px] w-20 bg-[#C5A059]" />
//               </div>

//               <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-light text-justify">
//                 <p>
//                   Her evolution as a fashion designer is rooted in unyielding passion and deep respect for stitching. Without a formal education, she taught herself embroidery and gradually built a design boutique through sheer dedication, perseverance, and artistry.
//                 </p>
//                 <p>
//                   She started working at the age of 17, taking multiple jobs, working Sundays, and sacrificing sleep to learn. In 2007, she started her professional career as a tailor earning a daily wage of ₹35, and she hasn’t looked back since.
//                 </p>
//                 <p>
//                   Along the way, she worked for some of the finest apparel brands in Coimbatore’s textile industry, including Classic Polo. Designing became a form of therapy for her, and her deep belief in quality over quantity became the soul of this boutique. Today, she shares her expertise as an instructor, guiding women toward creative and financial independence.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF8F5] border-l-2 border-[#C5A059] border-y border-r border-[#EFEBE4] text-stone-800 text-sm sm:text-base font-serif italic shadow-xs">
//                 &ldquo;For more than one and a half decades, Durga Devi has helped women celebrate life&apos;s most meaningful moments through blouses as personal as the love stories they represent.&rdquo;
//               </div>
//             </motion.div>

//             {/* Atelier Photos */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:col-span-5 grid grid-cols-2 gap-4 lg:sticky lg:top-28"
//             >
//               <div className="relative aspect-[3/4] bg-[#FAF8F5] border border-[#E5D9C5] p-2 shadow-md">
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/lap_dur.png"
//                     alt="Durga Devi consulting on bespoke designs"
//                     fill
//                     sizes="(min-width: 1024px) 20vw, 50vw"
//                     className="object-cover hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 <span className="block text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B38E46] mt-2">
//                   Studio Consultations
//                 </span>
//               </div>

//               <div className="relative aspect-[3/4] bg-[#FAF8F5] border border-[#E5D9C5] p-2 shadow-md">
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/dd_book.png"
//                     alt="Durga Devi with pattern drafting notebook"
//                     fill
//                     sizes="(min-width: 1024px) 20vw, 50vw"
//                     className="object-cover hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 <span className="block text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B38E46] mt-2">
//                   Pattern Drafting
//                 </span>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>


//       {/* ========================================================
//           5. HOW WE CREATE YOUR OUTFIT (4-COLUMN FULL-WIDTH SEQUENCE)
//           ======================================================== */}
//       <section className="py-20 sm:py-32 bg-[#FAF8F5] border-b border-[#EFEBE4]">
//         <div className="boutique-container">

//           <div className="text-center max-w-4xl mx-auto mb-16">
//             <span className="text-[10px] font-semibold tracking-[0.3em] text-[#B38E46] uppercase block mb-2">
//               ✦ PRECISION IN EVERY STEP
//             </span>
//             <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 uppercase tracking-wide">
//               How We Create Your Outfit
//             </h2>
//             <div className="mt-4 h-[1.5px] w-20 bg-[#C5A059] mx-auto mb-4" />
//             <p className="text-stone-600 text-sm font-light leading-relaxed">
//               Four careful steps, from first conversation to final fitting. Transparent, clear, and tailored to your celebration.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {steps.map((s, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.12 }}
//                 className="bg-white p-7 border border-[#E5D9C5] shadow-sm flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 group"
//               >
//                 <div>
//                   <div className="flex items-center justify-between pb-3 border-b border-[#EFEBE4] mb-4">
//                     <span className="font-serif text-3xl font-light text-[#B38E46] group-hover:scale-105 transition-transform inline-block">
//                       {s.number}
//                     </span>
//                     <span className="text-[10px] font-semibold tracking-wider text-stone-500 uppercase">
//                       {s.time}
//                     </span>
//                   </div>

//                   <h3 className="font-serif text-lg font-semibold text-stone-950 mb-2">
//                     {s.title}
//                   </h3>

//                   <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
//                     {s.desc}
//                   </p>
//                 </div>

//                 <div className="mt-6 pt-4 border-t border-[#EFEBE4] text-[10px] uppercase font-bold tracking-[0.2em] text-[#B38E46] flex items-center gap-1.5">
//                   <span>✦ Bespoke Step {idx + 1}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <p className="text-center text-xs text-stone-500 font-light mt-12 tracking-wide">
//             Have a wedding date? Standard custom stitching takes 7–10 business days, with free alteration fittings.
//           </p>

//         </div>
//       </section>


//       {/* ========================================================
//           6. WORLDWIDE & NRI ORDERS (FULL-WIDTH DARK COUTURE)
//           ======================================================== */}
//       <section className="py-20 sm:py-32 bg-[#141312] text-white border-b border-[#C5A059]/30">
//         <div className="boutique-container">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="lg:col-span-7 flex flex-col space-y-6"
//             >
//               <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-[#C5A059]/40 bg-[#1A1817] self-start">
//                 <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
//                 <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
//                   INTERNATIONAL CLIENTELE
//                 </span>
//               </div>

//               <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight uppercase tracking-wide">
//                 Seamless NRI &amp; <br />
//                 <span className="italic font-serif font-normal text-[#C5A059] normal-case">
//                   Worldwide Orders
//                 </span>
//               </h2>

//               <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
//                 Dev Fashion serves brides across the USA, UK, Canada, Australia, Singapore, Germany, Qatar, and the UAE. Distance never compromises fit with our simple virtual process:
//               </p>

//               <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-stone-300 font-light">
//                 <div className="flex gap-3.5 items-start p-4 bg-[#1A1817] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
//                   <Video className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
//                   <p><strong>Virtual Video Consultations</strong> — Choose fabrics, necklines, and embroidery interactively on camera.</p>
//                 </div>

//                 <div className="flex gap-3.5 items-start p-4 bg-[#1A1817] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
//                   <Ruler className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
//                   <p><strong>Step-by-Step Measurement Guide</strong> — Our team guides you on video call or replicates your best-fitting blouse.</p>
//                 </div>

//                 <div className="flex gap-3.5 items-start p-4 bg-[#1A1817] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
//                   <Send className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
//                   <p><strong>Insured Doorstep Delivery</strong> — Tracked express delivery via DHL and FedEx in protective luxury packaging.</p>
//                 </div>
//               </div>

//               <div className="pt-4 flex flex-wrap gap-4">
//                 <Link
//                   href="/contact#booking"
//                   className="px-8 py-4 bg-[#C5A059] text-stone-950 hover:bg-white text-xs font-semibold tracking-[0.25em] uppercase transition-colors shadow-md"
//                 >
//                   Book Virtual Session
//                 </Link>

//                 <a
//                   href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I'd%20like%20to%20place%20an%20international%20custom%20order."
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-8 py-4 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-stone-950 text-xs font-semibold tracking-[0.25em] uppercase transition-colors"
//                 >
//                   WhatsApp International Support
//                 </a>
//               </div>
//             </motion.div>

//             {/* Right Photo */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:col-span-5 flex justify-center"
//             >
//               <div className="relative aspect-[4/5] border border-[#C5A059]/40 p-3 bg-[#1A1817] shadow-2xl w-full max-w-md">
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/family.jpg"
//                     alt="International NRI Bridal Fashion"
//                     fill
//                     className="object-cover hover:scale-103 transition-transform duration-700"
//                   />
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>


//       {/* ========================================================
//           7. PERFECT FIT GUARANTEE & CALL TO ACTION
//           ======================================================== */}
//       <section className="py-24 sm:py-32 bg-white text-center">
//         <div className="boutique-container max-w-4xl mx-auto">
//           <div className="w-16 h-16 bg-[#FAF8F5] border border-[#C5A059] text-[#B38E46] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
//             <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
//           </div>

//           <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#B38E46] block mb-2">
//             ✦ PEACE OF MIND
//           </span>

//           <h3 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950 mb-4">
//             Perfect Fit Guarantee
//           </h3>
//           <div className="h-[1.5px] w-20 bg-[#C5A059] mx-auto mb-6" />

//           <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-10 font-light text-justify sm:text-center">
//             Every blouse is tailored to your unique measurements. If your outfit needs any alteration, we modify it with zero additional stitching fee. We maintain records of all customer measurements securely for effortless future orders.
//           </p>

//           <Link
//             href="/contact#booking"
//             className="inline-flex items-center gap-3 px-10 py-4 bg-[#141312] text-white hover:bg-[#C5A059] hover:text-stone-950 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-lg"
//           >
//             <span>Start Designing Today</span>
//             <ArrowRight className="w-4 h-4 stroke-[1.5]" />
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// }
























































// import Image from "next/image";
// import Link from "next/link";
// import { Sparkles, Scissors, Heart, Ruler, Globe, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";

// export const metadata = {
//   title: "About Our Brand",
//   description: "Learn more about the craftsmanship, heritage, and tailor expertise of Dev Fashion boutique. Handcrafted luxury designer wear for global buyers.",
// };

// const stats = [
//   { value: "12+", label: "Years of Craftsmanship" },
//   { value: "10,000+", label: "Happy Customers" },
//   { value: "25,000+", label: "Bespoke Outfits Delivered" },
//   { value: "15+", label: "Countries Shipped To" }
// ];

// const processes = [
//   { step: "01", title: "Styling Consultation", desc: "Collaborate with our designers via virtual video calls or in person at our studio. We discuss silhouette layouts, necklines, sleeves, custom cuts, and embroidery options." },
//   { step: "02", title: "Fabric & Embellishment Selection", desc: "Choose from our curated collection of premium raw silk, Banarasi, pure organza, chiffon, and velvet. Or send us your own fabrics to stitch." },
//   { step: "03", title: "Pattern Drafting & Embroidery", desc: "Every garment is custom-drafted onto paper patterns before cutting. Our skilled local artisans (karigars) handcraft exquisite embroidery (zardozi, beads, aari, and stones)." },
//   { step: "04", title: "Perfect Fit Stitching", desc: "Our tailors assemble the pieces with exact alignments, premium inner linings, double stitching, and margins for future alterations. Standard stitching takes 7-10 business days." }
// ];

// export default function AboutPage() {
//   return (
//     <div className="w-full bg-white pt-24">
//       {/* Page Header Banner */}
//       <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat"
//         style={{
//           backgroundImage: "url('/images/dev_fashion/stiching_durga1.png')",
//         }}>


//         {/* Dark/white overlay */}
//         <div className="absolute inset-0 bg-black/65" />

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//             ✦ Our Legacy & Craftsmanship
//           </span>

//           <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
//             Built by a woman. For women.
//           </h1>

//           <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//             Your occasion is unique. Your blouse should be too.
//           </p>
//           <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

//           <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//             Dedicated to creating flawless bridal wear, custom-tailored designer blouses, and timeless ethnic ensembles that celebrate you.
//           </p>
//         </div>


//       </section>

//       {/* Story Section */}
//       <section className="py-20 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
//           {/* Story Image */}
//           <div className="relative aspect-[4/5] border border-gold-300 p-3 bg-white shadow-2xl max-w-lg mx-auto w-full">
//             <div className="relative h-full w-full overflow-hidden">
//               <Image
//                 src="/images/dev_fashion/durga.jpg"
//                 alt="Dev Fashion Boutique Tailoring Craft"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Story Text */}
//           <div className="flex flex-col space-y-6 sm:space-y-5 text-stone-900">
           
//             <h4 className="font-serif text-2xl tracking-wide text-stone-950">
//               Welcome to Dev fashion's Boutique!
//             </h4>
//             <div className="h-[1px] w-16 bg-gold-500" />

//             <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
//               ✦ Every beautiful creation begins with a dream.
//             </span>

//             <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify">
//               {/* Founded in 2012, Dev Fashion has grown from a local boutique studio into a trusted designer label for clients worldwide. Our vision is simple: to make custom clothing accessible, professional, and perfectly fitted. */}
//               &nbsp;&nbsp;&nbsp;In the heart of coimbatore, a quiet dream took shape. Dev Fashion began with a simple belief — that every woman deserves to feel confident, beautiful and truly herself in what she wears.
//               Founded by Mrs. Durga Devi, a passionate designer with over 17 years of experience in tailoring and fashion industry especially in bride blouse stitching.
//               <br /> <br />
//               &nbsp;&nbsp;&nbsp;We aim to make every woman feel confident and beautiful in her attire by helping her choose the perfect blouse that complements her personality and sense of style.
//               Every stitch carries the same philosophy: tradition should never limit creativity, and fashion should always celebrate individuality.
//               <br /> <br />
//               &nbsp;&nbsp;&nbsp;At Dev Fashion, we don't simply design clothes.
//               We listen to a woman's vision, understand her style and turn her imagination into something she can proudly wear.
//               Today, Dev Fashion is trusted by women across India and 15+ countries.
//               To all who have walked with us, from our very first customers to our growing family today — you are the thread that keeps dev fashion alive as we weave the chapters ahead.
//             </p>

//             <h4 className="font-serif text-2xl tracking-wide text-stone-950">
//               What We Specialize In!
//             </h4>

//             <div className="h-[1px] w-16 bg-gold-500" />

//             <p className="text-stone-600 text-xs sm:text-base leading-relaxed text-justify">
//               &nbsp;&nbsp;&nbsp;Aari Embroidery is a central strength of Dev fashion. The team works across bridal blouses, sarees, kurtas, gowns, lehengas and other garments where detailed handwork and design execution matter.
//               <br /> <br />
//               &nbsp;&nbsp;&nbsp;At the same time, Dev Fashion is not limited to bridal wear. It supports women across three major needs: everyday and professional clothing, bridal and designer clothing, and red-carpet and concept clothing.
//               <br /><br />
//               &nbsp;&nbsp;&nbsp;Our mission is to provide our customers with stunning, high-quality attire that makes every occasion special. Whether it’s for casual wear or festive celebrations, our collections are crafted with care, using the finest materials and intricate detailing to ensure elegance and comfort.
//             </p>


//             {/* Stats list */}
//             <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gold-150">
//               {stats.map((s, i) => (
//                 <div key={i}>
//                   <span className="block font-serif text-2xl font-bold text-gold-600">{s.value}</span>
//                   <span className="text-[10px] uppercase font-semibold tracking-widest text-stone-500 mt-1 block">{s.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* JUST TRY TO MAKE LOOK BETTER*/}

//       <section className="py-20 sm:py-28 border-t border-gold-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">

//             {/* About Left Content */}
//             <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-stone-900">

//               <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
//                 ✦ Meet The Founder, Creative Director, Instructor  & CHIEF DESIGNER Mrs. Durga Devi
//               </span>

//               <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
//                 The Journey of Durga Devi Since 2007
//               </h2>

//               <div className="h-[1px] w-20 bg-gold-500" />

//               <p className="text-stone-700 text-xs sm:text-base leading-relaxed text-justify">
//                 &nbsp;&nbsp;&nbsp;For more than one and half decades, Durga Devi has helped people celebrate life's most meaningful moments.Today, she brings that same passion to designing engagement Blouses that are as personal as the love stories they represent.
//                 <br /> <br />
//                 &nbsp;&nbsp;&nbsp;
//                 her evolution as a fashion designer is rooted in her unyielding passion and deep respect for stitching. Without a formal education, she taught herself embroidery and gradually built a design boutique through sheer dedication, perseverance and artistry.
//                 Above all, her creations are for women who want to express themselves with quiet confidence and refined individuality.
//                 <br /><br />
//                 &nbsp;&nbsp;&nbsp;She never had a formal education. She didn’t attend a prestigious design school. She didn’t start with a large team. She started working at the age of 17. She worked multiple jobs. She worked Sundays. She sacrificed sleep. She kept learning.
//                 Along the way, she fell in love with tailoring and design. It captured her attention and opened the door to creativity. Subconsciously, she developed a strong interest in art and fashion as forms of self-expression.
//                 <br /><br />
//                 &nbsp;&nbsp;&nbsp;However, due to the circumstances of life at the time, she found herself working multiple minimum-wage jobs and later becoming a mother. Yet, she couldn’t ignore the creative world that had been quietly growing in the back of her mind. Eventually, she took the leap and entered the world of fashion that had been calling her for so long.
//                 <br /> <br />
//                 &nbsp;&nbsp;&nbsp;She started her career as a tailor in 2007, earning a daily wage of ₹35, and she hasn’t looked back since.
//                 She loves the idea of expressing herself through blouse design.
//                 She has worked for some of the finest brands, including Classic polo. Now, after years of experience in coimbator’s Garment industry, Durga Devi welcomes the opportunity to share her skills and expertise with others as a fashion design instructor serving coimbatore.
//                 Designing became a form of therapy for her. Her eye for design and her deep belief in quality over quantity became the soul of this boutique.
//               </p>
//               <p className="text-stone-900 text-xs sm:text-base leading-relaxed">
//                 The dream of one day creating her magnum opus continues to drive her forward.
//               </p>
//               <span className="text-[20px] font-semibold tracking-widest text-gold-600 uppercase block">
//                 ✦ Mrs. Durga Devi's vision
//               </span>

//               <p className="text-stone-700 text-xs sm:text-base leading-relaxed text-justify">
//                 &nbsp;&nbsp;&nbsp;she dreams of A day when every woman can enjoy beautiful Aari embroidery without feeling that it is only for the rich.
//                 She wants to make good aari work affordable for every woman in India and also encourage every woman to learn the basics of tailoring.
//                 <br /><br />
//                 &nbsp;&nbsp;&nbsp;For her, fashion is not just about looking beautiful —
//                 <strong> it is about confidence, creativity and becoming who you want to be.</strong>
//               </p>

//               <p className="text-stone-900 text-xs sm:text-base leading-relaxed text-right">
//                 - With love and gratitude, <br />Durga's Dev Fashion Boutique Team
//               </p>
//             </div>


//             {/* About Right Image Panel */}
//             <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">

//   <div className="relative mt-8 aspect-[3/4] border border-gold-200 bg-white p-2 shadow-md">
//     <div className="relative h-full w-full">
//       <Image
//         src="/images/dev_fashion/lap_dur.png"
//         alt="Durga Devi working at her laptop"
//         fill
//         sizes="(min-width: 1024px) 20vw, 50vw"
//         className="object-cover"
//       />
//     </div>
//   </div>

//   <div className="relative aspect-[3/4] border border-gold-200 bg-white p-2 shadow-md">
//     <div className="relative h-full w-full">
//       <Image
//         src="/images/dev_fashion/dd_book.png"
//         alt="Durga Devi with her design book"
//         fill
//         sizes="(min-width: 1024px) 20vw, 50vw"
//         className="object-cover"
//       />
//     </div>
//   </div>

// </div>
//           </div>
//         </div>
//       </section>

//       {/* The Design Process Section */}
//       <section className="py-20 bg-gold-50/20 border-t border-b border-gold-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
//             <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//               ✦ Precision in Details
//             </span>
//             <h2 className="font-serif text-3xl font-bold tracking-wide text-stone-950 mb-4">
//               How We Create Your Outfits
//             </h2>
//             <div className="h-[1px] w-20 bg-gold-500 mb-5" />
//             <p className="text-stone-600 text-sm">
//               We follow a thorough, high-end process to ensure absolute design precision and perfect fit sizing.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {processes.map((p, i) => (
//               <div key={i} className="bg-white border border-gold-200/100 p-8 flex flex-col h-full hover:border-gold-500 hover:shadow-xl transition-all duration-300">
//                 <span className="font-serif text-3xl font-bold text-gold-500/80 mb-4 block">
//                   {p.step}
//                 </span>
//                 <h3 className="font-serif text-lg font-semibold tracking-wide text-stone-900 mb-3">
//                   {p.title}
//                 </h3>
//                 <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mt-auto text-justify">
//                   {p.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* International NRI Orders & Virtual Fittings */}
//       <section className="py-20 sm:py-24 bg-stone-950 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//             {/* Info Text */}
//             <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
//               <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block">
//                 ✦ International Service
//               </span>

//               <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white">
//                 Seamless NRI & Worldwide Orders
//               </h2>

//               <div className="h-[1px] w-16 bg-gold-500" />

//               <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
//                 Dev Fashion takes pride in catering to our international customers residing in the USA, UK, Canada, Australia, Singapore, and the UAE. We have customized our workflows to ensure a perfect boutique experience, no matter the distance:
//               </p>

//               <div className="space-y-4 text-xs sm:text-sm text-stone-300">
//                 <div className="flex gap-3 items-start">
//                   <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
//                   <p><strong>Virtual Video Call consultations</strong> - Choose fabrics, necklines, borders, and styles interactively with our team.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
//                   <p><strong>Step-by-Step Measurement Guide</strong> - Our stylists assist you over a video call to ensure accurate measurements are taken at home.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
//                   <p><strong>Courier Delivery with tracking</strong> - Safe, insured, and expedited delivery via premium shipping carriers (DHL/FedEx).</p>
//                 </div>
//               </div>

//               <div className="pt-4 flex flex-wrap gap-4">
//                 <Link
//                   href="/contact#booking"
//                   className="px-6 py-3 bg-gold-500 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors"
//                 >
//                   Book Virtual Session
//                 </Link>
//                 <a
//                   href="https://wa.me/919025751328?text=Hi%20Dev%20Fashion%2C%20I'd%20like%20to%20place%20an%20international%20custom%20order."
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 border border-stone-750 text-stone-200 hover:text-white hover:border-white text-xs font-semibold tracking-widest uppercase transition-colors"
//                 >
//                   WhatsApp International Support
//                 </a>
//               </div>
//             </div>

//             {/* Showcase Image */}
//             <div className="lg:col-span-5 relative aspect-[4/5] border border-gold-900/30 p-2 bg-stone-900 shadow-2xl max-w-sm mx-auto w-full">
//               <div className="relative h-full w-full overflow-hidden">
//                 <Image
//                   src="/images/dev_fashion/family.jpg"
//                   alt="NRI Indian Designer Outfit Crafting"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trust & Guarantee Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <div className="w-16 h-16 bg-gold-50 border border-gold-300 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
//             <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
//           </div>

//           <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-stone-950 mb-4">
//             Perfect Fit & Integrity Guarantee
//           </h3>

//           <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
//             Every Blouse we Stich is tailored to your unique specifications. We guarantee that if your outfit needs alterations, we will modify it at no additional stitching fee. We maintain records of all customer measurements securely to facilitate effortless future orders.
//           </p>

//           <Link
//             href="/contact#booking"
//             className="inline-flex items-center gap-2.5 px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
//           >
//             Start Designing Today
//             <ArrowRight className="w-4.5 h-4.5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }















import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Sparkles, Scissors, Ruler, Gem, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Our Brand",
  description: "Learn more about the craftsmanship, heritage, and tailor expertise of Dev Fashion boutique. Handcrafted luxury designer wear for global buyers.",
};

const stats = [
  { value: "12+", label: "Years of Craftsmanship" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "25,000+", label: "Bespoke Outfits Delivered" },
  { value: "15+", label: "Countries Shipped To" }
];

const steps = [
  {
    icon: Sparkles,
    title: "Styling consultation",
    time: "30–45 minutes",
    desc: "We sit down with you, in person or on a video call, to shape the blouse around your outfit and your occasion.",
    we: ["Suggest silhouettes, necklines and sleeves", "Plan the embroidery and placement", "Give you a clear price and timeline"],
    you: ["Photos of your saree or lehenga", "Reference designs you love", "Your event date"],
  },
  {
    icon: Gem,
    title: "Fabric and embellishment",
    time: "1–2 days",
    desc: "We choose materials that suit the design, from raw silk and Banarasi to organza, chiffon and velvet.",
    we: ["Show fabric and thread swatches", "Match colours to your saree", "Source lining and trims"],
    you: ["Your own fabric, if you prefer", "Your final fabric and colour choice"],
  },
  {
    icon: Ruler,
    title: "Pattern and handwork",
    time: "3–5 days",
    desc: "Every blouse is drafted on paper before a single cut. Then our karigars embroider it by hand.",
    we: ["Draft a pattern to your measurements", "Hand-work zardozi, beads, Aari and stones", "Share progress photos"],
    you: ["Accurate measurements (we guide you)", "Approval of the design before embroidery"],
  },
  {
    icon: Scissors,
    title: "Fitting and finishing",
    time: "7–10 business days in total",
    desc: "The pieces are assembled with exact alignment, double stitching and premium lining, with margins left for future alterations.",
    we: ["Stitch, line and finish the blouse", "Fix any alteration at no extra stitching fee", "Pack and ship, with tracking for international orders"],
    you: ["Try it on and give us feedback"],
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white pt-4">
      {/* Page Header Banner */}
  
      <section className="relative py-18 sm:py-40 border-b border-gold-100 text-center bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: "url('/images/dev_fashion/abt.png')",
        }}>


        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 boutique-container">

          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ Our Legacy & Craftsmanship
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white mb-6">
            Built by a woman. For women.
          </h1>

          <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Your occasion is unique. Your blouse should be too.
          </p>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

          <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            The Dev Fashion is the beauty of no limitations. Our mission is to lift you up out of the ordinary.
            <br /> Dedicated to creating flawless bridal wear and designer blouses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Story Image */}
          <div className="relative aspect-[4/5] border border-gold-300 p-3 bg-white shadow-2xl max-w-lg mx-auto w-full">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/dev_fashion/durga.jpg"
                alt="Dev Fashion Boutique Tailoring Craft"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="flex flex-col space-y-6 sm:space-y-5 text-stone-900">

            <h4 className="font-serif text-2xl tracking-wide text-stone-950">
              Welcome to Dev fashion's Boutique!
            </h4>
            <div className="h-[1px] w-16 bg-gold-500" />

            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
              ✦ Every beautiful creation begins with a dream.
            </span>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify">
              &nbsp;&nbsp;&nbsp;In the heart of coimbatore, a quiet dream took shape. Dev Fashion began with a simple belief — that every woman deserves to feel confident, beautiful and truly herself in what she wears.
              Founded by Mrs. Durga Devi, a passionate designer with over 17 years of experience in tailoring and fashion industry especially in bride blouse stitching.
              <br /> <br />
              &nbsp;&nbsp;&nbsp;We aim to make every woman feel confident and beautiful in her attire by helping her choose the perfect blouse that complements her personality and sense of style.
              Every stitch carries the same philosophy: tradition should never limit creativity, and fashion should always celebrate individuality.
              <br /> <br />
              &nbsp;&nbsp;&nbsp;At Dev Fashion, we don't simply design clothes.
              We listen to a woman's vision, understand her style and turn her imagination into something she can proudly wear.
              Today, Dev Fashion is trusted by women across India and 15+ countries.
              To all who have walked with us, from our very first customers to our growing family today — you are the thread that keeps dev fashion alive as we weave the chapters ahead.
            </p>

            <h4 className="font-serif text-2xl tracking-wide text-stone-950">
              What We Specialize In!
            </h4>

            <div className="h-[1px] w-16 bg-gold-500" />

            <p className="text-stone-600 text-xs sm:text-base leading-relaxed text-justify">
              &nbsp;&nbsp;&nbsp;Aari Embroidery is a central strength of Dev fashion. The team works across bridal blouses, sarees, kurtas, gowns, lehengas and other garments where detailed handwork and design execution matter.
              <br /> <br />
              &nbsp;&nbsp;&nbsp;At the same time, Dev Fashion is not limited to bridal wear. It supports women across three major needs: everyday and professional clothing, bridal and designer clothing, and red-carpet and concept clothing.
              <br /><br />
              &nbsp;&nbsp;&nbsp;Our mission is to provide our customers with stunning, high-quality attire that makes every occasion special. Whether it’s for casual wear or festive celebrations, our collections are crafted with care, using the finest materials and intricate detailing to ensure elegance and comfort.
            </p>

            {/* Stats list */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gold-150">
              {stats.map((s, i) => (
                <div key={i}>
                  <span className="block font-serif text-2xl font-bold text-gold-600">{s.value}</span>
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-stone-500 mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>









        <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('/images/dev_fashion/stiching_durga1.png')",
        }}>

        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ Our Legacy & Craftsmanship
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
            Built by a woman. For women.
          </h1>

          <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Your occasion is unique. Your blouse should be too.
          </p>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

          <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The Dev Fashion is the beauty of no limitations. Our mission is to lift you up out of the ordinary.
            Dedicated to creating flawless bridal wear and designer blouses.
          </p>
        </div>

      </section>














      {/* JUST TRY TO MAKE LOOK BETTER*/}

      <section className="py-20 sm:py-28 border-t border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">

            {/* About Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-stone-900">

              <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
                ✦ Meet The Founder, Creative Director, Instructor  & CHIEF DESIGNER Mrs. Durga Devi
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
                The Journey of Durga Devi Since 2007
              </h2>

              <div className="h-[1px] w-20 bg-gold-500" />

              <p className="text-stone-700 text-xs sm:text-base leading-relaxed text-justify">
                &nbsp;&nbsp;&nbsp;For more than one and half decades, Durga Devi has helped people celebrate life's most meaningful moments.Today, she brings that same passion to designing engagement Blouses that are as personal as the love stories they represent.
                <br /> <br />
                &nbsp;&nbsp;&nbsp;
                her evolution as a fashion designer is rooted in her unyielding passion and deep respect for stitching. Without a formal education, she taught herself embroidery and gradually built a design boutique through sheer dedication, perseverance and artistry.
                Above all, her creations are for women who want to express themselves with quiet confidence and refined individuality.
                <br /><br />
                &nbsp;&nbsp;&nbsp;She never had a formal education. She didn’t attend a prestigious design school. She didn’t start with a large team. She started working at the age of 17. She worked multiple jobs. She worked Sundays. She sacrificed sleep. She kept learning.
                Along the way, she fell in love with tailoring and design. It captured her attention and opened the door to creativity. Subconsciously, she developed a strong interest in art and fashion as forms of self-expression.
                <br /><br />
                &nbsp;&nbsp;&nbsp;However, due to the circumstances of life at the time, she found herself working multiple minimum-wage jobs and later becoming a mother. Yet, she couldn’t ignore the creative world that had been quietly growing in the back of her mind. Eventually, she took the leap and entered the world of fashion that had been calling her for so long.
                <br /> <br />
                &nbsp;&nbsp;&nbsp;She started her career as a tailor in 2007, earning a daily wage of ₹35, and she hasn’t looked back since.
                She loves the idea of expressing herself through blouse design.
                She has worked for some of the finest brands, including Classic polo. Now, after years of experience in coimbator’s Garment industry, Durga Devi welcomes the opportunity to share her skills and expertise with others as a fashion design instructor serving coimbatore.
                Designing became a form of therapy for her. Her eye for design and her deep belief in quality over quantity became the soul of this boutique.
              </p>
              <p className="text-stone-900 text-xs sm:text-base leading-relaxed">
                The dream of one day creating her magnum opus continues to drive her forward.
              </p>
              <span className="text-[20px] font-semibold tracking-widest text-gold-600 uppercase block">
                ✦ Mrs. Durga Devi's vision
              </span>

              <p className="text-stone-700 text-xs sm:text-base leading-relaxed text-justify">
                &nbsp;&nbsp;&nbsp;she dreams of A day when every woman can enjoy beautiful Aari embroidery without feeling that it is only for the rich.
                She wants to make good aari work affordable for every woman in India and also encourage every woman to learn the basics of tailoring.
                <br /><br />
                &nbsp;&nbsp;&nbsp;For her, fashion is not just about looking beautiful —
                <strong> it is about confidence, creativity and becoming who you want to be.</strong>
              </p>

              <p className="text-stone-900 text-xs sm:text-base leading-relaxed text-right">
                - With love and gratitude, <br />Durga's Dev Fashion Boutique Team
              </p>
            </div>

            {/* About Right Image Panel */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">

              <div className="relative mt-8 aspect-[3/4] border border-gold-200 bg-white p-2 shadow-md">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/dev_fashion/lap_dur.png"
                    alt="Durga Devi working at her laptop"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative aspect-[3/4] border border-gold-200 bg-white p-2 shadow-md">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/dev_fashion/dd_book.png"
                    alt="Durga Devi with her design book"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* HOW WE CREATE YOUR OUTFIT: white theme, stacking cards (desktop + mobile) */}
      <section className="border-t border-gold-100 bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center sm:mb-16">
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-widest text-gold-600">
              ✦ Precision in Details
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-wide text-stone-950 sm:text-4xl">
              How We Create Your Outfit
            </h2>
            <div className="mb-5 h-[1px] w-20 bg-gold-500" />
            <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
              Four careful steps, from first conversation to final fitting. You always know what we're doing and what we need from you.
            </p>
          </div>

          <ol>
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="sticky top-[calc(5.5rem_+_var(--i)_*_0.75rem)] mb-6 lg:top-[calc(7rem_+_var(--i)_*_1.25rem)] lg:mb-8"
                style={{ "--i": i } as CSSProperties}
              >
                <div className="border border-gold-300 bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] sm:p-2">
                  <div className="grid gap-4 border border-gold-100 bg-white p-5 sm:gap-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
                    {/* number + time */}
                    <div className="flex items-center justify-between lg:col-span-3 lg:block">
                      <span className="block font-serif text-4xl font-bold leading-none text-gold-500/80 sm:text-5xl lg:text-6xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-2 lg:mt-5 lg:gap-3">
                        <s.icon className="h-4 w-4 stroke-[1.3] text-gold-600 lg:h-5 lg:w-5" aria-hidden />
                        <p className="text-xs text-stone-500 sm:text-sm">{s.time}</p>
                      </div>
                    </div>

                    {/* title + description */}
                    <div className="lg:col-span-4">
                      <h3 className="font-serif text-xl font-semibold tracking-wide text-stone-950 sm:text-2xl">{s.title}</h3>
                      <div className="mt-2 h-[1px] w-12 bg-gold-500 sm:mt-3" />
                      <p className="mt-3 text-[13px] leading-[1.7] text-stone-600 sm:mt-4 sm:text-base sm:leading-[1.9]">{s.desc}</p>
                    </div>

                    {/* lists: two columns on every screen */}
                    <div className="grid grid-cols-2 gap-4 border-t border-gold-100 pt-4 sm:gap-8 sm:pt-6 lg:col-span-5 lg:border-0 lg:pt-0">
                      {[
                        ["What we do", s.we],
                        ["What you share", s.you],
                      ].map(([head, items]) => (
                        <div key={head as string}>
                          <h4 className="text-xs font-semibold text-gold-600 sm:text-sm">{head as string}</h4>
                          <ul className="mt-2 space-y-2 sm:mt-3 sm:space-y-2.5">
                            {(items as string[]).map((t) => (
                              <li key={t} className="flex gap-2 text-[12px] leading-snug text-stone-600 sm:gap-3 sm:text-sm sm:leading-relaxed">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold-500" aria-hidden />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-500 items-center text-center">
            Have a wedding date? Tell us early and we'll plan backwards from it. Standard stitching takes 7–10 business days and alterations are always free of stitching charges.
          </p>
        </div>
      </section>

      {/* International NRI Orders & Virtual Fittings */}
      <section className="py-20 sm:py-24 bg-stone-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Info Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
              <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block">
                ✦ International Service
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white">
                Seamless NRI & Worldwide Orders
              </h2>

              <div className="h-[1px] w-16 bg-gold-500" />

              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                Dev Fashion takes pride in catering to our international customers residing in the USA, UK, Canada, Australia, Singapore, and the UAE. We have customized our workflows to ensure a perfect boutique experience, no matter the distance:
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
                  <p><strong>Virtual Video Call consultations</strong> - Choose fabrics, necklines, borders, and styles interactively with our team.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
                  <p><strong>Step-by-Step Measurement Guide</strong> - Our stylists assist you over a video call to ensure accurate measurements are taken at home.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
                  <p><strong>Courier Delivery with tracking</strong> - Safe, insured, and expedited delivery via premium shipping carriers (DHL/FedEx).</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact#booking"
                  className="px-6 py-3 bg-gold-500 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  Book Virtual Session
                </Link>
                <a
                  href="https://wa.me/919025751328?text=Hi%20Dev%20Fashion%2C%20I'd%20like%20to%20place%20an%20international%20custom%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-stone-750 text-stone-200 hover:text-white hover:border-white text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  WhatsApp International Support
                </a>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="lg:col-span-5 relative aspect-[4/5] border border-gold-900/30 p-2 bg-stone-900 shadow-2xl max-w-sm mx-auto w-full">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/images/dev_fashion/family.jpg"
                  alt="NRI Indian Designer Outfit Crafting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-gold-50 border border-gold-300 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-stone-950 mb-4">
            Perfect Fit & Integrity Guarantee
          </h3>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Every Blouse we Stich is tailored to your unique specifications. We guarantee that if your outfit needs alterations, we will modify it at no additional stitching fee. We maintain records of all customer measurements securely to facilitate effortless future orders.
          </p>

          <Link
            href="/contact#booking"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
          >
            Start Designing Today
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}


