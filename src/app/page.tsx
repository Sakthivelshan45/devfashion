// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Star, ShieldCheck, Heart, Award, Sparkles, Scissors, Globe, Lock, Truck, Ruler, CheckCircle, MessageSquare } from "lucide-react";
// import ServiceCard from "@/components/ServiceCard";
// import TestimonialCarousel from "@/components/TestimonialCarousel";
// import GalleryLightbox from "@/components/GalleryLightbox";
// import GalleryLightbox_copy from "@/components/GalleryLightbox_copy";
// import BookingForm from "@/components/BookingForm";
// import Landingpage from "@/components/landingpage";
// import CoursesSection from "@/components/CoursesSection";



// const stats = [
//   { value: "10K+", label: "Happy Customers" },
//   { value: "25K+", label: "Bespoke Designs Delivered" },
//   { value: "5K+", label: "Bridal Orders Completed" },
//   { value: "2K+", label: "International Clients" },
// ];


// const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
// const reveal = {
//   hidden: { opacity: 0, y: 28 },
//   show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
// };


// const featuredServices = [
//   { title: "Custom Blouse Stitching", description: "Bespoke designer blouses tailored to perfection with custom necklines, sleeve details, and padding choices.", iconName: "Scissors" },
//   { title: "Bridal Wear Design", description: "Elite lehengas and wedding outfits intricately embroidered with premium zardozi and stone craftsmanship.", iconName: "Sparkles" },
//   { title: "Designer Saree Blouses", description: "Elegant couture designs matching modern cutouts and traditional handlooms.", iconName: "Heart" },
//   { title: "Tailoring & Aari Work Classes", description: "Learn professional blouse stitching, pattern making, Aari & Maggam work from expert artisans.", iconName: "Award" },
//   { title: "Alteration Services", description: "Ensure your favorite garments fit flawlessly with our professional fitting and adjustment services.", iconName: "Ruler" },
//   { title: "Occasion Wear Design", description: "Elegant outfits tailored for receptions, sangeets, festive socials, and family events.", iconName: "Globe" },
// ];

// const highlights = [
//   { title: "Premium Fabric Selection", description: "We source only the finest raw silk, Banarasi silk, velvet, organza, and premium linens.", icon: Award },
//   { title: "Personalized Designs", description: "Collaborate with dedicated designers to sketch and materialize your dream outfit.", icon: Sparkles },
//   { title: "Skilled Tailoring", description: "Crafted by master tailors with decades of experience in high-end ethnic finishing.", icon: Scissors },
//   { title: "Perfect Fit Guarantee", description: "Enjoy complimentary fittings and alterations until your garment fits like a second skin.", icon: Ruler },
//   { title: "International Support", description: "Custom measurements taken virtually for global and NRI clients with express shipping.", icon: Globe },
//   { title: "Secure Customer Privacy", description: "Confidential design consultations, private measurements, and secure transactions.", icon: Lock },
// ];

// const bridalCampaignImages = [
//   { src: "/images/dev_fashion/main.jpeg", alt: "Bridal Couture Outfit" },
//   { src: "/images/dev_fashion/deeps2.jpeg", alt: "Bridal Couture Outfit" },
//   { src: "/images/dev_fashion/sadhana_main.png", alt: "Dev Fashion Bridal Silk Couture" },
//   { src: "/images/dev_fashion/deepika1.jpg", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_red2.png", alt: "Royal Crimson Zardozi Blouse" },
//   { src: "/images/dev_fashion/ammu.jpeg", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_blue.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/bride3.jpg", alt: "Dev Fashion Master Designer Outfit" },

//   { src: "/images/dev_fashion/angel1.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_beach1.jpg", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_blue2.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_red_chudi.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_smile_flowers.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_smile_udha.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_smile5.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_smile6.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_temple.png", alt: "Sapphire Velvet Couture" },
//   { src: "/images/dev_fashion/sadhana_vilet.png", alt: "Sapphire Velvet Couture" },

// ];

// const customBlouseImages = [
//   { src: "/images/dev_fashion/aari1.jpg", alt: "Sandhana Orange Designer Blouse" },
//   { src: "/images/dev_fashion/aari2.jpg", alt: "Sandhana Crimson Silk Blouse" },
//   { src: "/images/dev_fashion/aari3.jpg", alt: "Sandhana Custom Fit Blouse" },
//   { src: "/images/dev_fashion/aari4.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/aari6.jpg", alt: "Sandhana Custom Fit Blouse" },
//   { src: "/images/dev_fashion/aari7.jpg", alt: "Sandhana Custom Fit Blouse" },
//   { src: "/images/dev_fashion/aari8.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/featured-aari.webp", alt: "Sandhana Designer Blouse Fit" },


//   { src: "/images/dev_fashion/aarold_blouse1.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/old_blouse2.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/old_blouse3.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/old_blouse4.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/old_blouse15.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/custom_drs1.jpg", alt: "Sandhana Designer Blouse Fit" },



//   { src: "/images/dev_fashion/bls_port1.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port2.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port3.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port4.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port5.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port6.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port7.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port8.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port9.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port10.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port11.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port12.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port13.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port14.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port15.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port16.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port17.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port18.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port19.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port20.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port21.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port22.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port23.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port24.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port25.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port26.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port27.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port28.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port29.jpg", alt: "Sandhana Designer Blouse Fit" },
//   { src: "/images/dev_fashion/bls_port30.jpg", alt: "Sandhana Designer Blouse Fit" },
// ];

// export default function HomePage() {
//   const [primaryIndex, setPrimaryIndex] = useState(0);
//   const [secondaryIndex, setSecondaryIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setPrimaryIndex((prev) => (prev + 1) % bridalCampaignImages.length);
//       setSecondaryIndex((prev) => (prev + 1) % customBlouseImages.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full relative bg-white">
//       {/* 1. Hero Section — High-Fashion Luxury Editorial */}
//       <section className="py-2 w-full">
//         <Landingpage />
//       </section>


//       {/* ─── 2. The About section ─── */}
//       <section className="bg-white py-24 sm:py-28 lg:py-36 overflow-hidden">
//         <div className="site-container">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-center">

//             {/* ───────── LEFT: image composition (unchanged) ───────── */}
//             <div className="lg:col-span-5">
//               <div className="relative pl-6 sm:pl-8 max-w-md mx-auto lg:max-w-none">

//                 <motion.div
//                   aria-hidden
//                   initial={{ scaleY: 0 }}
//                   whileInView={{ scaleY: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.6, ease }}
//                   className="absolute left-0 top-0 h-full w-5 sm:w-7 origin-top text-gold-500"
//                   style={{
//                     backgroundImage:
//                       "repeating-linear-gradient(to bottom, currentColor 0 1px, transparent 1px 10px), repeating-linear-gradient(to bottom, currentColor 0 2px, transparent 2px 50px)",
//                     backgroundSize: "10px 100%, 20px 100%",
//                     backgroundRepeat: "no-repeat",
//                     backgroundPosition: "right top, right top",
//                   }}
//                 />

//                 <motion.div
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: "-60px" }}
//                   transition={{ duration: 1.1, ease }}
//                   className="relative border-2 border-dashed border-gold-500 p-2.5 bg-white"
//                 >
//                   <div className="relative aspect-[4/5] overflow-hidden">
//                     <Image
//                       src="/images/dev_fashion/aari6.jpg"
//                       alt="Fabric Drafting Studio"
//                       fill
//                       sizes="(min-width: 1024px) 40vw, 100vw"
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="absolute -bottom-8 -right-4 sm:-right-8 w-[36%] aspect-square border-[5px] border-white shadow-xl overflow-hidden">
//                     <Image
//                       src="/images/dev_fashion/aari5.jpg"
//                       alt="Bridal Details"
//                       fill
//                       sizes="15vw"
//                       className="object-cover"
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   className="absolute -top-4 right-4 sm:right-10 z-10"
//                 >
//                   <motion.div
//                     animate={{ rotate: [4, -4, 4] }}
//                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                     style={{ transformOrigin: "50% 0%" }}
//                     className="flex flex-col items-center"
//                   >
//                     <span className="w-px h-8 bg-stone-900" />
//                     <div className="relative w-36 sm:w-44 bg-white border border-stone-900 px-4 pt-6 pb-4 shadow-lg text-center">
//                       <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border border-stone-900 bg-white" />
//                       <p className="font-serif italic text-[13px] sm:text-sm leading-snug text-stone-800">
//                         Every woman deserves to wear something that feels uniquely
//                         and beautifully hers.
//                       </p>
//                       <span className="block mt-3 pt-3 border-t border-dashed border-gold-500 text-xs text-gold-700 font-semibold">
//                         Made to measure
//                       </span>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* ───────── RIGHT: quiet, editorial, generous space ───────── */}
//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ staggerChildren: 0.18 }}
//               className="lg:col-span-7 lg:pl-6"
//             >
//               <motion.h2
//                 variants={reveal}
//                 className="font-serif font-light text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-[-0.02em] text-stone-950"
//               >
//                 Made by hand,
//                 <br />
//                 to your measure.
//               </motion.h2>

//               <motion.p
//                 variants={reveal}
//                 className="mt-10 max-w-xl font-serif text-xl sm:text-[1.4rem] leading-[1.7] text-stone-700"
//               >
//                 Since 2017, Dev Fashion has stitched bridal and saree blouses in
//                 Gandhipuram, Coimbatore. Each one is drafted, embroidered and fitted
//                 for a single woman, and finished only when it sits exactly as it
//                 should.
//               </motion.p>

//               {/* Services: a refined typographic list, no boxes or chips */}
//               <motion.ul
//                 variants={reveal}
//                 className="mt-14 max-w-2xl border-t border-gold-400"
//               >
//                 {[
//                   ["Bridal blouses", "For the wedding day and every ceremony around it."],
//                   ["Designer saree blouses", "Cut to complement the drape of the saree."],
//                   ["Aari work & embroidery", "Hand-stitched, one thread at a time."],
//                   ["Custom fit", "Drafted to your measurements and fitted before delivery."],
//                 ].map(([title, text]) => (
//                   <li
//                     key={title}
//                     className="grid grid-cols-1 sm:grid-cols-[15rem_1fr] gap-x-8 gap-y-1 py-5 border-b border-gold-200"
//                   >
//                     <span className="font-serif text-xl text-stone-950">{title}</span>
//                     <span className="text-[15px] leading-7 text-stone-500">{text}</span>
//                   </li>
//                 ))}
//               </motion.ul>

//               <motion.div
//                 variants={reveal}
//                 className="mt-12 flex flex-col sm:flex-row sm:items-center gap-x-12 gap-y-8"
//               >
//                 <Link
//                   href="/about"
//                   className="group relative inline-flex items-center gap-3 pb-2 font-serif text-lg text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600"
//                 >
//                   Our story
//                   <ArrowRight className="w-4 h-4 text-gold-600 transition-transform duration-500 group-hover:translate-x-1.5" />
//                   <span className="absolute bottom-0 left-0 h-px w-full bg-stone-300" />
//                   <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-[0.35] bg-gold-600 transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </Link>

//                 <p className="max-w-xs text-sm leading-6 text-stone-500">
//                   Outside Coimbatore? We offer video consultations and guided
//                   fittings for clients across India and abroad.
//                 </p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>


//         <section className="relative overflow-hidden bg-[white] px-4 py-14 text-[#3b1d0e] sm:px-[6%] sm:py-20">
      
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-3 border border-[#b4532a]/40 sm:inset-5"
//         />

//         <div className="relative mx-auto max-w-[1240px]">
//           {/* header */}
//           <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 className="flex items-center gap-3"
//               >
//                 <span className="h-px w-10 bg-[#b4532a]" />
//                 <span className="h-1.5 w-1.5 rotate-45 bg-[#e0952b]" />
//                 <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#b4532a]">
//                   The Lookbook
//                 </p>
//               </motion.div>
//               <motion.h2
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//                 className="mt-4 font-serif font-light leading-[1.05]"
//                 style={{ fontSize: "clamp(2.1rem, 4vw, 3.5rem)" }}
//               >
//                Aari embroidery, <span className="italic text-[#b4532a]"> made to fit you.</span>
//               </motion.h2>
//             </div>

//             <Link
//               href="/gallery"
//               className="inline-flex items-center gap-3 bg-[#b4532a] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#fbf1df] transition-colors hover:bg-[#3b1d0e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4532a]"
//             >
//               View Gallery <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           {/* four temple shrines */}
//           <div className="mt-12 flex flex-col gap-2 lg:h-[560px] lg:flex-row lg:gap-3">
//             {[
//               // replace these paths and titles with your own looks
//               ["/images/dev_fashion/aari5.jpg", "The Bride", "Heirloom drapes for the big day"],
//               ["/images/dev_fashion/bls_port5.jpg", "The Everyday", "Easy tradition, all week long"],
//               ["/images/dev_fashion/lan_bls25.jpg", "The Heirloom", "Pieces made to be passed down"],
//               ["/images/dev_fashion/old_blouse1.jpg", "The Festive", "Colour and zari for celebrations"],
//             ].map(([src, title, line], i) => (
//               <motion.article
//                 key={src}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
//                 className="group relative h-72 overflow-hidden bg-[#1a1613] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-80 lg:h-auto lg:flex-1 lg:hover:flex-[3.2]"
//               >
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={src}
//                   alt={title}
//                   className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
//                 />
//                 {/* light shade only at the bottom for caption legibility */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

//                 {/* number */}
//                 <span className="absolute left-5 top-5 font-serif text-sm tracking-[0.25em] text-white/90">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>

//                 {/* collapsed: vertical title (desktop) */}
//                 <p
//                   className="absolute bottom-6 left-5 hidden origin-bottom-left font-serif text-2xl italic text-white transition-opacity duration-300 group-hover:opacity-0 lg:block"
//                   style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
//                 >
//                   {title}
//                 </p>

//                 {/* expanded caption (always shown on mobile) */}
//                 <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 sm:p-7 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:delay-200">
//                   <p className="font-serif text-3xl italic leading-tight text-white sm:text-4xl">{title}</p>
//                   <p className="mt-2 max-w-xs text-sm text-white/80">{line}</p>
//                   <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e6c88e]">
//                     View look <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>
      


//       {/* 3. Featured Collections & 5. Gallery Section */}
//       <section className="py-14 sm:py-20 lg:py-24">
//         <div className="site-container">
//           <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
//             <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//               ✦ Design Portfolio
//             </span>
//             <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
//               Featured Collections & Gallery
//             </h2>
//             <div className="h-[1px] w-20 bg-gold-500 mb-5" />
//             <p className="text-stone-900 text-sm">
//               Maybe it is not a blouse.
//               Maybe it is who you become when you wear it.
//             </p>
//           </div>

//           <GalleryLightbox_copy />

//           <div className="text-center pt-2">
//             <Link
//               href="/gallery"
//               className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-stone-900 hover:text-gold-600 uppercase transition-colors underline decoration-gold-400 decoration-2 underline-offset-4">
//               Explore a variety of styles and colors perfect for any event.
//               <ArrowRight className="w-3.5 h-3.5" />
//             </Link>
//           </div>
//         </div>
//       </section>









//       {/* 3.5 Tailoring & Aari Work Course Section */}

//        <section className="py-14 sm:py-20 lg:py-14 border-b border-gold-100">
//         <div className="site-container">
//           <div className="text-center max-w-4xl mx-auto mb-8 flex flex-col items-center">
//             <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//               ✦ Space is limited...sign up to reserve your spot today!
//             </span>
//             <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
//               Dev Fashion Tailoring & Aari Work Classes
//             </h2>
//             <div className="h-[1px] w-20 bg-gold-500 mb-1" />
//           </div>

//           <CoursesSection />
//         </div>
//       </section>














//       {/* 4. Services Section */}
//       <section className="py-14 sm:py-20 lg:py-24 bg-gold-50/25 border-t border-b border-gold-100">
//         <div className="site-container">
//           <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
//             <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//               ✦ Elite Services
//             </span>
//             <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
//               Bespoke Design & Tailoring
//             </h2>
//             <div className="h-[1px] w-20 bg-gold-500 mb-5" />
//             <p className="text-stone-600 text-sm">
//               Explore our curation of premium tailoring services. Hand-patterned, stitched, and personalized to suit your styling preferences.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredServices.map((service, i) => (
//               <ServiceCard
//                 key={i}
//                 title={service.title}
//                 description={service.description}
//                 iconName={service.iconName}
//               />
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link
//               href="/services"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 hover:text-white rounded-none text-xs font-semibold tracking-widest uppercase transition-colors"
//             >
//               View All Services & Pricing
//               <ArrowRight className="w-3.5 h-3.5" />
//             </Link>
//           </div>
//         </div>
//       </section>


//       {/* 5. Why Choose Dev Fashion */}
//       <section className="py-14 sm:py-20 lg:py-24 bg-stone-950 text-white relative overflow-hidden">
//         {/* Soft lighting decorations */}
//         <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

//         <div className="site-container relative z-10">
//           <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
//             <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block mb-3">
//               ✦ The Dev Fashion Edge
//             </span>
//             <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white mb-4">
//               Why Choose Our Dev Fashion?
//             </h2>
//             <div className="h-[1px] w-20 bg-gold-500 mb-5" />
//             <p className="text-stone-400 text-sm">
//               We combine centuries-old craftsmanship with modern convenience to deliver a premium tailoring experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
//             {highlights.map((h, i) => {
//               const Icon = h.icon;
//               return (
//                 <div key={i} className="bg-stone-900/40 border border-stone-850 p-8 flex gap-5 hover:border-gold-700/60 transition-all duration-300">
//                   <div className="w-12 h-12 bg-stone-800 border border-gold-900/40 text-gold-500 flex items-center justify-center shrink-0">
//                     <Icon className="w-5 h-5 stroke-[1.5]" />
//                   </div>
//                   <div>
//                     <h3 className="font-serif text-lg font-semibold tracking-wide text-stone-100 mb-2">
//                       {h.title}
//                     </h3>
//                     <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
//                       {h.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-16 bg-stone-900 border border-gold-900/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <Truck className="w-12 h-12 text-gold-500 shrink-0" />
//               <div>
//                 <h4 className="font-serif text-lg font-medium text-stone-100">Global Courier Shipping Available</h4>
//                 <p className="text-stone-400 text-xs mt-1">We safely parcel your design items right to your doorstep, anywhere in the UK, USA, UAE and beyond.</p>
//               </div>
//             </div>
//             <Link
//               href="/services#international"
//               className="px-6 py-3 bg-white text-stone-950 hover:bg-gold-500 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors shrink-0"
//             >
//               Delivery Guidelines
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 6. Customer Testimonials */}
//       <section className="py-14 sm:py-20 lg:py-24 border-b border-gold-100">
//         <div className="site-container">
//           <div className="text-center max-w-4xl mx-auto mb-8 flex flex-col items-center">
//             <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//               ✦ Words of Praise
//             </span>
//             <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
//               Your Happiness is Our Reward!
//             </h2>
//             <div className="h-[1px] w-20 bg-gold-500 mb-1" />
//           </div>

//           <TestimonialCarousel />
//         </div>
//       </section>

//       {/* 7. Appointment Booking */}
//       <section id="booking" className="py-14 sm:py-20 lg:py-24 bg-gold-50/20 scroll-mt-20">
//         <div className="site-container">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//             {/* Info text column */}
//             <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
//               <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
//                 ✦ Work directly with our Designer
//               </span>

//               <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
//                 BOOK A COMPLIMENTARY CONSULTATION
//               </h2>

//               <div className="h-[1px] w-20 bg-gold-500" />

//               <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
//                 Experience an exclusive appointment with professional design discussion either in person at our Coimbatore studio or virtually via video call.
//               </p>

//               <div className="space-y-4 text-sm text-stone-700">
//                 <div className="flex gap-3 items-start">
//                   <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
//                   <p><strong>Step 1: Consultation</strong> - Share references, fabrics preferences, necklines and style sketches.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
//                   <p><strong>Step 2: Measurement</strong> - In-person recording or step-by-step assisted virtual measurement guide.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
//                   <p><strong>Step 3: Stitched Masterpiece</strong> - Shipped directly to your address with complimentary adjustments.</p>
//                 </div>
//               </div>

//               <div className="bg-white border border-gold-250/65 p-6 shadow-sm">
//                 <p className="text-xs font-semibold text-stone-900 tracking-wider flex items-center gap-2">
//                   <ShieldCheck className="w-5 h-5 text-gold-600" />
//                   Perfect Fit Guarantee
//                 </p>
//                 <p className="text-stone-500 text-xs mt-2 leading-relaxed">
//                   We verify each measurement. If the outfit does not fit perfectly, we will modify it at zero extra charge.
//                 </p>
//               </div>
//             </div>

//             {/* Booking Form column */}
//             <div className="lg:col-span-7">
//               <BookingForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 8. Privacy & Trust */}
//       <section className="py-12 bg-stone-900 text-stone-300 border-b border-stone-850">
//         <div className="site-container">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//             <div className="flex flex-col sm:flex-row items-center gap-4">
//               <div className="w-12 h-12 rounded-full border border-gold-600/40 flex items-center justify-center text-gold-500 shrink-0">
//                 <Lock className="w-5 h-5" />
//               </div>
//               <div>
//                 <h4 className="font-serif text-lg font-medium text-white">Your Privacy is Our Highest Priority</h4>
//                 <p className="text-stone-400 text-xs mt-0.5">Confidential measurements, designs and personal information are protected securely.</p>
//               </div>
//             </div>

//             {/* Trust Badges */}
//             <div className="flex flex-wrap justify-center gap-4 text-[10px] tracking-widest text-gold-500 font-semibold uppercase">
//               <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Confidentiality Assured</span>
//               <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Protected Measurements</span>
//               <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Secure Transactions</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 9. Quick Contact Section */}
//       <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-gold-100">
//         <div className="site-container">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">

//             <div>
//               <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Visit Our Studio</h4>
//               <p className="text-stone-600 text-sm leading-relaxed">
//                 No 37, 100 feet road, Tatabed,<br />
//                 Gandhipuram, Coimbatore,<br />
//                 Tamil nadu 641012, India
//               </p>
//             </div>

//             <div>
//               <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Enquiries & Styling</h4>
//               <p className="text-stone-600 text-sm leading-relaxed">
//                 Email: <a href="mailto:contact@devfashion.com" className="hover:text-gold-600 transition-colors">contact@devfashion.com</a><br />
//                 Phone: <a href="tel:+918098558923" className="hover:text-gold-600 transition-colors">+91 80985 58923</a><br />
//                 WhatsApp Support: <a href="https://wa.me/918098558923" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">Chat Online</a>
//               </p>
//             </div>

//             <div>
//               <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Business Hours</h4>
//               <p className="text-stone-600 text-sm leading-relaxed">
//                 Monday - Saturday: 10:00 AM - 8:00 PM<br />
//                 Sunday: 11:00 AM - 5:00 PM<br />
//                 <span className="text-xs text-gold-600 font-semibold uppercase tracking-wider block mt-1">✦ Sunday by Appointment Only</span>
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Sparkles, Scissors, Globe, Lock, Truck, Ruler } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GalleryLightbox_copy from "@/components/GalleryLightbox_copy";
import BookingForm from "@/components/BookingForm";
import Landingpage from "@/components/landingpage";
import CoursesSection from "@/components/CoursesSection";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
};

const FLOWERS = [
  [70, 62, 8, 10], [62, 76, 6, 40], [78, 74, 7, 70], [74, 50, 6, 20],
  [134, 70, 8, 0], [124, 84, 6, 30], [142, 82, 7, 50], [136, 58, 6, 15],
  [38, 118, 8, 20], [48, 128, 6, 60], [30, 126, 6, 5], [44, 108, 5, 35],
  [140, 132, 8, 10], [128, 144, 6, 45], [150, 142, 6, 25], [146, 120, 6, 55],
  [118, 186, 8, 30], [106, 194, 6, 65], [124, 198, 6, 15],
  [104, 66, 7, 0], [100, 82, 6, 40], [110, 76, 6, 22],
  [98, 118, 7, 12], [90, 100, 6, 50], [108, 104, 6, 33],
  [70, 180, 6, 10], [60, 206, 5, 20],
];

const featuredServices = [
  { title: "Custom Blouse Stitching", description: "Bespoke designer blouses tailored to perfection with custom necklines, sleeve details, and padding choices.", iconName: "Scissors" },
  { title: "Bridal Wear Design", description: "Elite lehengas and wedding outfits intricately embroidered with premium zardozi and stone craftsmanship.", iconName: "Sparkles" },
  { title: "Designer Saree Blouses", description: "Elegant couture designs matching modern cutouts and traditional handlooms.", iconName: "Heart" },
  { title: "Tailoring & Aari Work Classes", description: "Learn professional blouse stitching, pattern making, Aari & Maggam work from expert artisans.", iconName: "Award" },
  { title: "Alteration Services", description: "Ensure your favorite garments fit flawlessly with our professional fitting and adjustment services.", iconName: "Ruler" },
  { title: "Occasion Wear Design", description: "Elegant outfits tailored for receptions, sangeets, festive socials, and family events.", iconName: "Globe" },
];

const highlights = [
  { title: "Premium Fabric Selection", description: "We source only the finest raw silk, Banarasi silk, velvet, organza, and premium linens.", icon: Award },
  { title: "Personalized Designs", description: "Collaborate with dedicated designers to sketch and materialize your dream outfit.", icon: Sparkles },
  { title: "Skilled Tailoring", description: "Crafted by master tailors with decades of experience in high-end ethnic finishing.", icon: Scissors },
  { title: "Perfect Fit Guarantee", description: "Enjoy complimentary fittings and alterations until your garment fits like a second skin.", icon: Ruler },
  { title: "International Support", description: "Custom measurements taken virtually for global and NRI clients with express shipping.", icon: Globe },
  { title: "Secure Customer Privacy", description: "Confidential design consultations, private measurements, and secure transactions.", icon: Lock },
];

export default function HomePage() {
  return (
    <div className="w-full relative bg-white">
      {/* 1. Hero Section — High-Fashion Luxury Editorial */}
      <section className="py-2 w-full">
        <Landingpage />
      </section>

      {/* ─── 2. The About section ─── */}
      <section className="bg-white py-24 sm:py-28 lg:py-36 overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-center">

            {/* ───────── LEFT: image composition (unchanged) ───────── */}
            <div className="lg:col-span-5">
              <div className="relative pl-6 sm:pl-8 max-w-md mx-auto lg:max-w-none">

                <motion.div
                  aria-hidden
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease }}
                  className="absolute left-0 top-0 h-full w-5 sm:w-7 origin-top text-gold-500"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, currentColor 0 1px, transparent 1px 10px), repeating-linear-gradient(to bottom, currentColor 0 2px, transparent 2px 50px)",
                    backgroundSize: "10px 100%, 20px 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right top, right top",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, ease }}
                  className="relative border-2 border-dashed border-gold-500 p-2.5 bg-white"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/dev_fashion/aari6.jpg"
                      alt="Fabric Drafting Studio"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-4 sm:-right-8 w-[36%] aspect-square border-[5px] border-white shadow-xl overflow-hidden">
                    <Image
                      src="/images/dev_fashion/aari5.jpg"
                      alt="Bridal Details"
                      fill
                      sizes="15vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -top-4 right-4 sm:right-10 z-10"
                >
                  <motion.div
                    animate={{ rotate: [4, -4, 4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "50% 0%" }}
                    className="flex flex-col items-center"
                  >
                    <span className="w-px h-8 bg-stone-900" />
                    <div className="relative w-36 sm:w-44 bg-white border border-stone-900 px-4 pt-6 pb-4 shadow-lg text-center">
                      <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border border-stone-900 bg-white" />
                      <p className="font-serif italic text-[13px] sm:text-sm leading-snug text-stone-800">
                        Every woman deserves to wear something that feels uniquely
                        and beautifully hers.
                      </p>
                      <span className="block mt-3 pt-3 border-t border-dashed border-gold-500 text-xs text-gold-700 font-semibold">
                        Made to measure
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* ───────── RIGHT: quiet, editorial, generous space ───────── */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.18 }}
              className="lg:col-span-7 lg:pl-6"
            >
              <motion.h2
                variants={reveal}
                className="font-serif font-light text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-[-0.02em] text-stone-950"
              >
                Made by hand,
                <br />
                to your measure.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-10 max-w-xl font-serif text-xl sm:text-[1.4rem] leading-[1.7] text-stone-700"
              >
                Since 2017, Dev Fashion has stitched bridal and saree blouses in
                Gandhipuram, Coimbatore. Each one is drafted, embroidered and fitted
                for a single woman, and finished only when it sits exactly as it
                should.
              </motion.p>

              {/* Services: a refined typographic list, no boxes or chips */}
              <motion.ul
                variants={reveal}
                className="mt-14 max-w-2xl border-t border-gold-400"
              >
                {[
                  ["Bridal blouses", "For the wedding day and every ceremony around it."],
                  ["Designer saree blouses", "Cut to complement the drape of the saree."],
                  ["Aari work & embroidery", "Hand-stitched, one thread at a time."],
                  ["Custom fit", "Drafted to your measurements and fitted before delivery."],
                ].map(([title, text]) => (
                  <li
                    key={title}
                    className="grid grid-cols-1 sm:grid-cols-[15rem_1fr] gap-x-8 gap-y-1 py-5 border-b border-gold-200"
                  >
                    <span className="font-serif text-xl text-stone-950">{title}</span>
                    <span className="text-[15px] leading-7 text-stone-500">{text}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-col sm:flex-row sm:items-center gap-x-12 gap-y-8"
              >
                <Link
                  href="/about"
                  className="group relative inline-flex items-center gap-3 pb-2 font-serif text-lg text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600"
                >
                  Our story
                  <ArrowRight className="w-4 h-4 text-gold-600 transition-transform duration-500 group-hover:translate-x-1.5" />
                  <span className="absolute bottom-0 left-0 h-px w-full bg-stone-300" />
                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-[0.35] bg-gold-600 transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </Link>

                <p className="max-w-xs text-sm leading-6 text-stone-500">
                  Outside Coimbatore? We offer video consultations and guided
                  fittings for clients across India and abroad.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Lookbook ─── */}
      <section className="relative overflow-hidden bg-[white] px-4 py-14 text-[#3b1d0e] sm:px-[6%] sm:py-20">
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
                Aari embroidery, <span className="italic text-[#b4532a]"> made to fit you.</span>
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
              ["/images/dev_fashion/aari5.jpg", "The Bride", "Heirloom drapes for the big day"],
              ["/images/dev_fashion/bls_port5.jpg", "The Everyday", "Easy tradition, all week long"],
              ["/images/dev_fashion/lan_bls25.jpg", "The Heirloom", "Pieces made to be passed down"],
              ["/images/dev_fashion/aari6.jpg", "The Festive", "Colour and zari for celebrations"],
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

      {/* 3. Featured Collections & 5. Gallery Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="site-container">
          <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Design Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Featured Collections & Gallery
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-900 text-sm">
              Maybe it is not a blouse.
              Maybe it is who you become when you wear it.
            </p>
          </div>

          <GalleryLightbox_copy />

          <div className="text-center pt-2">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-stone-900 hover:text-gold-600 uppercase transition-colors underline decoration-gold-400 decoration-2 underline-offset-4">
              Explore a variety of styles and colors perfect for any event.
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 Tailoring & Aari Work Course Section */}
      <section className="py-14 sm:py-20 lg:py-14 border-b border-gold-100">
        <div className="site-container">
          <div className="text-center max-w-4xl mx-auto mb-8 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Space is limited...sign up to reserve your spot today!
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Dev Fashion Tailoring & Aari Work Classes
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-1" />
          </div>

          <CoursesSection />
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-14 sm:py-20 lg:py-24 bg-gold-50/25 border-t border-b border-gold-100">
        <div className="site-container">
          <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Elite Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Bespoke Design & Tailoring
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-600 text-sm">
              Explore our curation of premium tailoring services. Hand-patterned, stitched, and personalized to suit your styling preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 hover:text-white rounded-none text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              View All Services & Pricing
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Dev Fashion */}
      <section className="py-14 sm:py-20 lg:py-24 bg-stone-950 text-white relative overflow-hidden">
        {/* Soft lighting decorations */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block mb-3">
              ✦ The Dev Fashion Edge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white mb-4">
              Why Choose Our Dev Fashion?
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-400 text-sm">
              We combine centuries-old craftsmanship with modern convenience to deliver a premium tailoring experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="bg-stone-900/40 border border-stone-850 p-8 flex gap-5 hover:border-gold-700/60 transition-all duration-300">
                  <div className="w-12 h-12 bg-stone-800 border border-gold-900/40 text-gold-500 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold tracking-wide text-stone-100 mb-2">
                      {h.title}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-stone-900 border border-gold-900/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Truck className="w-12 h-12 text-gold-500 shrink-0" />
              <div>
                <h4 className="font-serif text-lg font-medium text-stone-100">Global Courier Shipping Available</h4>
                <p className="text-stone-400 text-xs mt-1">We safely parcel your design items right to your doorstep, anywhere in the UK, USA, UAE and beyond.</p>
              </div>
            </div>
            <Link
              href="/services#international"
              className="px-6 py-3 bg-white text-stone-950 hover:bg-gold-500 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors shrink-0"
            >
              Delivery Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-gold-100">
        <div className="site-container">
          <div className="text-center max-w-4xl mx-auto mb-8 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Words of Praise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Your Happiness is Our Reward!
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-1" />
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 7. Appointment Booking */}
      <section id="booking" className="py-14 sm:py-20 lg:py-24 bg-gold-50/20 scroll-mt-20">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Info text column */}
            <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
              <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
                ✦ Work directly with our Designer
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
                BOOK A COMPLIMENTARY CONSULTATION
              </h2>

              <div className="h-[1px] w-20 bg-gold-500" />

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Experience an exclusive appointment with professional design discussion either in person at our Coimbatore studio or virtually via video call.
              </p>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Step 1: Consultation</strong> - Share references, fabrics preferences, necklines and style sketches.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Step 2: Measurement</strong> - In-person recording or step-by-step assisted virtual measurement guide.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Step 3: Stitched Masterpiece</strong> - Shipped directly to your address with complimentary adjustments.</p>
                </div>
              </div>

              <div className="bg-white border border-gold-250/65 p-6 shadow-sm">
                <p className="text-xs font-semibold text-stone-900 tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold-600" />
                  Perfect Fit Guarantee
                </p>
                <p className="text-stone-500 text-xs mt-2 leading-relaxed">
                  We verify each measurement. If the outfit does not fit perfectly, we will modify it at zero extra charge.
                </p>
              </div>
            </div>

            {/* Booking Form column */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Privacy & Trust */}
      <section className="py-12 bg-stone-900 text-stone-300 border-b border-stone-850">
        <div className="site-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold-600/40 flex items-center justify-center text-gold-500 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-white">Your Privacy is Our Highest Priority</h4>
                <p className="text-stone-400 text-xs mt-0.5">Confidential measurements, designs and personal information are protected securely.</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-[10px] tracking-widest text-gold-500 font-semibold uppercase">
              <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Confidentiality Assured</span>
              <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Protected Measurements</span>
              <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Secure Transactions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Quick Contact Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-gold-100">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">

            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Visit Our Studio</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                No 37, 100 feet road, Tatabed,<br />
                Gandhipuram, Coimbatore,<br />
                Tamil nadu 641012, India
              </p>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Enquiries & Styling</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Email: <a href="mailto:contact@devfashion.com" className="hover:text-gold-600 transition-colors">contact@devfashion.com</a><br />
                Phone: <a href="tel:+918098558923" className="hover:text-gold-600 transition-colors">+91 80985 58923</a><br />
                WhatsApp Support: <a href="https://wa.me/918098558923" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">Chat Online</a>
              </p>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Business Hours</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Monday - Saturday: 10:00 AM - 8:00 PM<br />
                Sunday: 11:00 AM - 5:00 PM<br />
                <span className="text-xs text-gold-600 font-semibold uppercase tracking-wider block mt-1">✦ Sunday by Appointment Only</span>
              </p>
            </div>

          </div>
        </div>
      </section>


      
            {/* //gift section last */}
      
       <MotionConfig reducedMotion="user">
      <style>{`
        .dfp-sec {
          --dfp-serif: Georgia, 'Times New Roman', serif;
          display: flex; align-items: center; justify-content: center;
          min-height: calc(100svh - 4rem);
          padding: 24px clamp(16px, 11vw, 140px);
          background: #fff;
          overflow: hidden;
        }
        .dfp-frame {
          position: relative;
          container-type: inline-size;
          width: min(100%, 136vh, 1152px);
          aspect-ratio: 1152 / 660;
          background: #fff;
          border: 1px solid #e9e6ec;
          box-shadow: 0 40px 80px -50px rgba(0,0,0,.25);
        }
 
        /* gift box: big, tilted, bleeding out of the frame at top-left */
        .dfp-box { position: absolute; left: -9.5cqw; top: -2.1cqw; width: 49.5cqw; z-index: 10; }
        .dfp-box svg {
          display: block; width: 100%; height: auto; overflow: visible;
          filter: drop-shadow(-1cqw 2.5cqw 3cqw rgba(30,20,50,.30)) drop-shadow(0 6cqw 6cqw rgba(30,20,50,.12));
        }
 
        .dfp-text {
          position: absolute; top: 0; bottom: 0; left: 43.8%; right: 9%;
          display: flex; flex-direction: column; justify-content: center;
          padding-bottom: 7cqw;
          z-index: 20;
        }
        .dfp-h {
          margin: 0; white-space: nowrap;
          font-family: var(--dfp-serif);
          font-weight: 400; line-height: 1; letter-spacing: -0.03em;
          font-size: 13.2cqw;
          color: #0b0b0b;
        }
        .dfp-inner { padding-left: 3.5cqw; }
        .dfp-p {
          margin: 5.2cqw 0 0; max-width: 38cqw;
          font-family: inherit;
          font-size: max(11px, 1.4cqw); line-height: 1.45; font-weight: 300; color: #111;
        }
        .dfp-p strong { display: block; font-weight: 600; color: #0b0b0b; }
        .dfp-list {
          margin: 4.8cqw 0 0; padding: 0; list-style: none;
          font-family: var(--dfp-serif);
          font-size: max(11px, 1.3cqw); line-height: 1.3; color: #8a8a8f;
        }
        .dfp-list li { margin: 0 0 1.26cqw; }
 
        /* soft paper peeking in from the right edge */
        .dfp-swatch {
          position: absolute; right: -5cqw; top: 22cqw;
          width: 15cqw; height: 19cqw; transform: rotate(10deg);
          background: #fcfbfd; border-radius: 4px;
          box-shadow: 0 1.5cqw 3cqw -1.5cqw rgba(0,0,0,.28);
        }
        /* needle: leans like the pen in the reference, hanging over the frame edge */
        .dfp-needle {
          position: absolute; left: 86.4%; top: 8.7cqw;
          height: 39cqw; width: auto; z-index: 3;
          filter: drop-shadow(.7cqw 1.4cqw .8cqw rgba(58,18,80,.22));
        }
        .dfp-sprig {
          position: absolute; right: 6%; bottom: 0; height: 20cqw; width: auto; z-index: 3;
          filter: drop-shadow(.4cqw .8cqw .6cqw rgba(0,0,0,.15));
        }
 
        @media (max-width: 767px) {
          .dfp-sec { min-height: 0; padding: 48px 16px 24px; }
          .dfp-frame { width: 100%; aspect-ratio: auto; display: flex; flex-direction: column; align-items: center; padding: 0 24px 150px; }
          .dfp-box { position: relative; left: auto; top: auto; width: 68%; margin-top: -32px; }
          .dfp-text { position: static; align-self: stretch; margin-top: 16px; padding-bottom: 0; }
          .dfp-h { font-size: 22cqw; }
          .dfp-inner { padding-left: 0; }
          .dfp-p { margin-top: 20px; max-width: none; font-size: 15px; }
          .dfp-list { margin-top: 20px; font-size: 15px; }
          .dfp-list li { margin-bottom: 12px; }
          .dfp-swatch, .dfp-needle { display: none; }
          .dfp-sprig { height: 130px; right: 6%; bottom: 14px; }
        }
      `}</style>
 
      <section className="dfp-sec">
        <div className="dfp-frame">
          {/* ───────── Gift box: logo on the lid, satin bow ───────── */}
          <motion.div
            className="dfp-box"
            initial={{ y: -60, rotate: -20, opacity: 0 }}
            whileInView={{ y: 0, rotate: -10, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 70, damping: 11, mass: 1.1 }}
          >
            <svg
              viewBox="0 0 400 400"
              role="img"
              aria-label="Illustration of a purple Dev Fashion gift box with a silver-lavender satin bow and the Dev Fashion logo on the lid"
            >
              <defs>
                <linearGradient id="df-box" x1="0.9" y1="0" x2="0.1" y2="1">
                  <stop offset="0" stopColor="#8a47a8" />
                  <stop offset="0.55" stopColor="#64297f" />
                  <stop offset="1" stopColor="#3a1452" />
                </linearGradient>
                <radialGradient id="df-sheen" cx="0.75" cy="0.2" r="0.7">
                  <stop offset="0" stopColor="#fff" stopOpacity=".24" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="df-rib-v" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#a891ba" />
                  <stop offset="0.18" stopColor="#e8def0" />
                  <stop offset="0.38" stopColor="#fbf8fd" />
                  <stop offset="0.55" stopColor="#d7c6e3" />
                  <stop offset="0.8" stopColor="#f1e9f7" />
                  <stop offset="1" stopColor="#a48bb8" />
                </linearGradient>
                <linearGradient id="df-rib-h" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#a891ba" />
                  <stop offset="0.18" stopColor="#e8def0" />
                  <stop offset="0.38" stopColor="#fbf8fd" />
                  <stop offset="0.55" stopColor="#d7c6e3" />
                  <stop offset="0.8" stopColor="#f1e9f7" />
                  <stop offset="1" stopColor="#a48bb8" />
                </linearGradient>
                <linearGradient id="df-rib-d" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fbf8fd" />
                  <stop offset="0.5" stopColor="#d5c3e2" />
                  <stop offset="1" stopColor="#a98fbd" />
                </linearGradient>
                <linearGradient id="df-rib-in" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#9b82b0" />
                  <stop offset="1" stopColor="#cbb6dc" />
                </linearGradient>
                <filter id="df-blur" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
                {/* fine linen weave on the lid */}
                <filter id="df-linen" x="0" y="0" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="1.1 0.3" numOctaves="2" seed="4" result="n" />
                  <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.9 0.55" result="t" />
                  <feComposite in="t" in2="SourceGraphic" operator="in" />
                </filter>
                {/* turns the logo (dark artwork on white) into a silver emboss */}
                <filter id="df-emboss" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.93  0 0 0 0 0.89  0 0 0 0 0.96  -0.2764 -0.9298 -0.0939 0 1.2"
                    result="logo"
                  />
                  <feOffset in="logo" dx="0.7" dy="0.9" result="off" />
                  <feColorMatrix
                    in="off"
                    type="matrix"
                    values="0 0 0 0 0.1  0 0 0 0 0.03  0 0 0 0 0.18  0 0 0 0.55 0"
                    result="sh"
                  />
                  <feMerge>
                    <feMergeNode in="sh" />
                    <feMergeNode in="logo" />
                  </feMerge>
                </filter>
              </defs>
 
              {/* box body, lid edge and linen */}
              <rect x="38" y="44" width="340" height="340" rx="14" fill="#1c0829" opacity=".55" filter="url(#df-blur)" />
              <rect x="35" y="38" width="340" height="340" rx="14" fill="#2a0f3d" />
              <rect x="30" y="30" width="340" height="340" rx="14" fill="url(#df-box)" />
              <rect x="30" y="30" width="340" height="340" rx="14" fill="#000" opacity=".5" filter="url(#df-linen)" />
              <rect x="30" y="30" width="340" height="340" rx="14" fill="url(#df-sheen)" />
              <rect x="31" y="31" width="338" height="338" rx="13.5" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="1.5" />
 
              {/* ribbon shadow on the lid */}
              <rect x="174" y="34" width="60" height="336" fill="#000" opacity=".3" filter="url(#df-blur)" />
              <rect x="34" y="174" width="336" height="60" fill="#000" opacity=".3" filter="url(#df-blur)" />
 
              {/* ribbon bands */}
              <rect x="30" y="170" width="340" height="60" fill="url(#df-rib-h)" />
              <rect x="170" y="30" width="60" height="340" fill="url(#df-rib-v)" />
              <path
                d="M172 30V370M228 30V370M30 172H370M30 228H370"
                stroke="#8a72a2" strokeOpacity=".55" strokeWidth="1" strokeDasharray="2 2.5" fill="none"
              />
 
              {/* logo embossed on the lid, top-right of the ribbon */}
              <g filter="url(#df-emboss)" opacity=".92">
                <svg x="292" y="48" width="56" height="68" viewBox="180 110 670 810">
                  <image href="/logo.jpg" width="1024" height="1023" />
                </svg>
              </g>
 
              {/* bow tails */}
              <path
                d="M196 214 C 176 252, 156 298, 140 352 L 158 338 L 176 360 C 186 312, 198 268, 206 226 Z"
                fill="url(#df-rib-d)" stroke="#8a72a2" strokeWidth="1.2" strokeLinejoin="round"
              />
              <path
                d="M208 210 C 252 224, 322 258, 398 312 L 382 326 L 372 346 C 318 296, 252 256, 202 228 Z"
                fill="url(#df-rib-d)" stroke="#8a72a2" strokeWidth="1.2" strokeLinejoin="round"
              />
              <path d="M190 226 C 172 268, 158 308, 150 342" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M224 230 C 280 250, 330 280, 376 318" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.5" strokeLinecap="round" />
 
              {/* bow loops: outer satin + darker inner fold */}
              <path
                d="M194 200 C 160 116, 70 118, 72 178 C 74 228, 150 232, 194 212 Z"
                fill="url(#df-rib-d)" stroke="#8a72a2" strokeWidth="1.2" strokeLinejoin="round"
              />
              <path d="M188 202 C 156 150, 106 150, 102 182 C 100 208, 150 214, 188 208 Z" fill="url(#df-rib-in)" opacity=".85" />
              <path
                d="M206 200 C 240 116, 330 118, 328 178 C 326 228, 250 232, 206 212 Z"
                fill="url(#df-rib-d)" stroke="#8a72a2" strokeWidth="1.2" strokeLinejoin="round"
              />
              <path d="M212 202 C 244 150, 294 150, 298 182 C 300 208, 250 214, 212 208 Z" fill="url(#df-rib-in)" opacity=".85" />
              <path d="M184 190 C 150 140, 108 134, 90 160" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round" />
              <path d="M216 190 C 250 140, 292 134, 310 160" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round" />
 
              {/* knot */}
              <rect x="178" y="188" width="44" height="34" rx="14" fill="url(#df-rib-d)" stroke="#8a72a2" strokeWidth="1.2" />
              <path d="M188 196 Q200 190 212 196" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M192 204 L190 216 M200 202 L200 218 M208 204 L210 216" stroke="#8a72a2" strokeOpacity=".5" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </motion.div>
 
          {/* ───────── Text ───────── */}
          <div className="dfp-text">
            <motion.h2
              className="dfp-h"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Promise
            </motion.h2>
 
            <motion.div
              className="dfp-inner"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <p className="dfp-p">
                A promise that what you wear on your big day is not just beautifully stitched,
                <strong>
                  but the most perfectly fitted, finest finished blouse we have ever made for you.
                </strong>
              </p>
              <ul className="dfp-list">
                <li>100% Made to measure. Hand-finished. Trusted.</li>
                <li>100% Perfect fit</li>
                <li>Integrity of every stitch</li>
                <li>Crafted beyond expectation</li>
              </ul>
            </motion.div>
          </div>
 
          {/* ───────── Paper peeking in from the right ───────── */}
          <div className="dfp-swatch" aria-hidden="true" />
 
          {/* ───────── Needle + thread, leaning like the pen in the reference ───────── */}
          <motion.svg
            className="dfp-needle"
            aria-hidden="true"
            viewBox="0 0 140 520"
            style={{ rotate: -29, originX: 0.5, originY: 0 }}
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <defs>
              <linearGradient id="df-needle" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#b57ad0" />
                <stop offset="0.5" stopColor="#8e4fa8" />
                <stop offset="1" stopColor="#5e2a78" />
              </linearGradient>
            </defs>
            <motion.path
              d="M70 44 C 10 90, 130 140, 52 200 S 120 290, 60 350 S 110 430, 80 490"
              fill="none"
              stroke="#111111"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.4, delay: 1.1, ease: "easeInOut" }}
            />
            <path d="M63 16 Q70 6 77 16 L73 500 L71 512 L69 512 L67 500 Z" fill="url(#df-needle)" stroke="#3f1a54" strokeWidth="2" strokeLinejoin="round" />
            <ellipse cx="70" cy="40" rx="3.6" ry="13" fill="#ffffff" stroke="#3f1a54" strokeWidth="2" />
            <path d="M68 70 L67 470" stroke="#ffffff" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round" />
          </motion.svg>
 
          {/* ───────── Baby's-breath sprig ───────── */}
          <svg className="dfp-sprig" aria-hidden="true" viewBox="0 0 220 320">
            {/* stem + fine twigs */}
            <g fill="none" stroke="#5f7a4f" strokeLinecap="round">
              <path d="M30 322 C 38 270, 54 220, 70 180 C 80 156, 90 140, 98 118" strokeWidth="3" />
              <path d="M98 118 C 92 96, 80 80, 70 62" strokeWidth="1.6" />
              <path d="M98 118 C 106 96, 120 84, 134 70" strokeWidth="1.6" />
              <path d="M98 118 C 98 100, 100 84, 104 66" strokeWidth="1.6" />
              <path d="M84 150 C 66 140, 50 134, 38 118" strokeWidth="1.6" />
              <path d="M76 170 C 100 160, 122 150, 140 132" strokeWidth="1.6" />
              <path d="M62 200 C 80 196, 100 196, 118 186" strokeWidth="1.6" />
            </g>
            {/* leaves */}
            <path d="M54 226 C 90 214, 140 224, 176 252 C 140 262, 84 252, 54 226 Z" fill="#7aa56a" stroke="#5b8a50" strokeWidth="1" />
            <path d="M58 228 C 100 232, 140 242, 170 252" fill="none" stroke="#5b8a50" strokeWidth="1" strokeOpacity=".7" />
            <path d="M34 290 C 8 282, -2 262, 4 250 C 28 252, 40 268, 34 290 Z" fill="#5b8a50" stroke="#3f6b38" strokeWidth="1" />
            {/* buds */}
            {[[66, 56], [140, 62], [34, 112], [152, 126], [106, 58], [124, 192]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.6" fill="#f4f4f6" stroke="#cfcfd8" strokeWidth="1" />
            ))}
            {/* blossoms */}
            {FLOWERS.map(([x, y, r, rot], i) => (
              <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
                {[0, 72, 144, 216, 288].map((a) => (
                  <ellipse key={a} cx="0" cy={-r * 0.62} rx={r * 0.42} ry={r * 0.62} transform={`rotate(${a})`} fill="#ffffff" stroke="#d4d4da" strokeWidth="1" />
                ))}
                <circle r={r * 0.2} fill="#b9b8a2" />
              </g>
            ))}
          </svg>
        </div>
      </section>
    </MotionConfig>
      
    </div>
  );
};