// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Scissors,
//   Sparkles,
//   Heart,
//   Ruler,
//   Award,
//   Globe,
//   ArrowRight,
//   ShieldCheck,
//   CheckCircle,
//   MessageSquare,
//   ChevronRight,
//   Gem,
//   HelpCircle,
//   Clock,
//   MapPin,
//   Lock,
//   Phone
// } from "lucide-react";

// // FAQ List (100% Preserved)
// const faqs = [
//   {
//     q: "Do you offer same-day or 1-day delivery?",
//     a: "Yes! Dev Fashion offers 1-day delivery for urgent bridal orders. Whether your wedding is tomorrow or you need a last-minute blouse for a function, our experienced team of 10 artisans can turn around quality work in 24 hours. WhatsApp us on 80985 58923 with your requirement and we'll confirm availability for your date."
//   },
//   {
//     q: "How do I book a consultation with Ms. Durga Devi?",
//     a: "You can walk into our studio at 9th Street, Tata Bed, Gandhipuram, Coimbatore, or call/WhatsApp us on 80985 58923 to book an appointment. Ms. Durga Devi, with her 17 years of expertise, personally oversees complex and bridal orders. Our team is available all days from 9 AM to 8 PM."
//   },
//   {
//     q: "What are your prices?",
//     a: "Our blouses start from ₹1,999 for cut work designs, ₹2,800 for aari embroidery, and ₹4,500+ for heavy zardosi bridal work. Pricing depends on the design complexity, embellishments and fabric. WhatsApp us or visit our studio for a free quote based on your specific saree and design requirement."
//   },
//   {
//     q: "How do virtual appointments work for international or NRI clients?",
//     a: "Once you schedule an appointment, we conduct a video call (WhatsApp/Zoom) where you describe your design requirements and view our fabric catalogs. We then guide you step-by-step on camera to take accurate body measurements. We also accept your favorite fitting blouse shipped to us as a physical size reference."
//   },
//   {
//     q: "Do you ship internationally?",
//     a: "Absolutely. We serve brides in 10+ countries including UAE, UK, USA, Canada, Australia, Singapore, Malaysia, Germany and Qatar. Simply WhatsApp us your measurements, saree details and design reference — our international orders team will coordinate everything, including safe packaging and tracked shipping to your doorstep abroad."
//   },
//   {
//     q: "What is your standard tailoring turnaround time?",
//     a: "Standard custom stitching takes 7 to 10 business days from the date measurements and fabrics are finalized. For bridalwear and highly intricate hand embroidery, it takes 3 to 6 weeks. We also offer expedited express tailoring (2-3 days) for urgent requests."
//   },
//   {
//     q: "Do you supply fabrics, or do I need to send mine?",
//     a: "We offer both options! We stock a premium range of fabrics (pure silk, Banarasi, velvet, georgette, and organza) that you can select from. Alternatively, you can drop off or mail your own fabrics to our Coimbatore studio."
//   },
//   {
//     q: "What is your Perfect Fit Guarantee?",
//     a: "If your outfit does not fit as expected, we offer free alteration fittings until it fits perfectly. For international clients, we keep large internal margins (up to 2 inches) inside the garment so it can be easily adjusted locally if needed."
//   },
//   {
//     q: "Is client privacy maintained for designs and measurements?",
//     a: "Absolutely. We treat all client measurements, custom outfit designs, and contact information with the highest confidentiality. We never share your physical measurement logs or private event references without explicit permission."
//   }
// ];

// // Featured Jewellery Rental Preview Items
// const rentalPreview = [
//   {
//     title: "Traditional Lakshmi Kasu Mala",
//     category: "Temple Haram",
//     price: "₹1,400 / day",
//     image: "/images/jewelry/kasu_mala_1.png"
//   },
//   {
//     title: "Royal Guttapusalu Pearl Set",
//     category: "Pearl Clusters",
//     price: "₹1,950 / day",
//     image: "/images/jewelry/guttapusalu_1.png"
//   },
//   {
//     title: "Heritage 5-Piece Bridal Ensemble",
//     category: "Full Bridal Set",
//     price: "₹3,500 / day",
//     image: "/images/jewelry/bridal_set_1.png"
//   },
//   {
//     title: "Naga Vanki & Maang Tikka Pair",
//     category: "Accessories",
//     price: "₹750 / day",
//     image: "/images/jewelry/vanki_armlet_1.png"
//   }
// ];

// export default function ServicesPage() {
//   const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

//   const toggleFaq = (index: number) => {
//     setOpenFaqIndex(openFaqIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full bg-[#FAF8F5] text-[#141312] pt-4 overflow-x-hidden font-sans">
      
//       {/* ==========================================
//           HERO SECTION: "CRAFTED FOR EVERY CELEBRATION"
//           Cinematic Luxury Bridal Photography
//           ========================================== */}
//       <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-no-repeat sm:bg-fixed" 
//       style={{
//         backgroundImage: "url('/images/dev_fashion/service.png')",
//       }}>


//      {/* Dark/white overlay */}
//       <div className="absolute inset-0 bg-black/65" />

//       {/* Content */}
//       <div className="relative z-10 boutique-container">

//         <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
//           ✦ A NEW LUXURY EXPERIENCE • COIMBATORE ✦ 
//         </span>

//         <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
//            Crafted for Every &nbsp;
//               <span className="italic font-serif font-normal text-[#C5A059] capitalize">
//                 Celebration
//               </span>
//         </h1>
        
//         <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">An exploration of lightness. As if air were a material!</p>

//         <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

//         <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//           we provides a complete South Indian bridal experience — from bespoke Aari embroidered blouses and custom stitching to saree draping, jewellery rental and bridal mehendi.
//         </p>
//       </div>


//       </section>


//       {/* ==========================================
//           EDITORIAL SERVICE JOURNEY STARTS HERE
//           ========================================== */}
//       <div id="service-journey" className="relative">

//         {/* ------------------------------------------
//             SERVICE 01 — BRIDAL BLOUSE DESIGN
//             ------------------------------------------ */}
//         <section className="py-24 bg-white border-b border-[#EFEBE4]">
//           <div className="boutique-container">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
//               {/* Asymmetric Macro Embroidery Image Frame */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className="lg:col-span-6 relative aspect-[5/5] border border-[#E5D9C5] p-3 bg-white shadow-2xl overflow-hidden group"
//               >
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/featured-aari.webp"
//                     alt="Handcrafted Bridal Blouse Aari Embroidery Work"
//                     fill
//                     className="object-cover object-top sm:object-center group-hover:scale-108 transition-transform duration-700"
//                     sizes="(max-width: 1024px) 100vw, 45vw"
//                   />
//                   <div className="absolute inset-0 bg-stone-950/10" />
                  
//                   <div className="absolute bottom-4 left-4 right-4 bg-stone-950/85 backdrop-blur-sm p-4 text-white border border-[#C5A059]/40">
//                     <span className="text-[9px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
//                       ✦ Handcrafted Artisan Craftsmanship
//                     </span>
//                     <p className="font-serif text-xs italic text-stone-300">
//                       Zardozi, Kundan, Dabka & Pearl Work
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Service 01 Narrative */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className="lg:col-span-6 flex flex-col space-y-6 text-[#141312]"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="font-serif text-3xl font-light text-[#B38E46]">01</span>
//                   <span className="h-px w-12 bg-[#C5A059]" />
//                   <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                     BRIDAL ATELIER
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide leading-tight text-stone-950">
//                     Bridal Blouse<br />
//                     <span className="italic font-serif font-normal text-[#B38E46]">
//                       Design
//                     </span>
//                   </h2>
//                 </div>

//                 <div className="h-px w-20 bg-[#C5A059]" />

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
//                   Dev Fashion specializes in creating intricately detailed South Indian <strong>bridal blouses</strong>. Our master artisans hand-craft each design using traditional <strong>Zardozi, Kundan, Dabka, pearl work, Aari embroidery, and custom embellishments</strong> tailored to perfectly complement your Kanjivaram or wedding silk saree.
//                 </p>

//                 {/* Craftsmanship Highlights Grid */}
//                 <div className="grid grid-cols-2 gap-4 text-xs font-lato pt-2">
//                   <div className="p-3.5 bg-[#FAF8F5] border border-[#EFEBE4]">
//                     <strong className="block text-stone-950 font-semibold mb-0.5">Aari & Maggam Work</strong>
//                     <span className="text-stone-600">Beadwork, stones, cutwork & thread motifs.</span>
//                   </div>
//                   <div className="p-3.5 bg-[#FAF8F5] border border-[#EFEBE4]">
//                     <strong className="block text-stone-950 font-semibold mb-0.5">Heavy Zardozi Artistry</strong>
//                     <span className="text-stone-600">Pure zari coils & metallic embellishments.</span>
//                   </div>
//                 </div>

//                 <div className="pt-4 flex items-center gap-6">
//                   <span className="text-xs font-serif italic text-[#B38E46]">Starting from ₹4,500+</span>
//                   <Link
//                     href="/contact?service=Bridal%20Wear%20Design#booking"
//                     className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
//                   >
//                     Request Design Consultation
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </div>
//               </motion.div>

//             </div>
//           </div>
//         </section>


//         {/* ------------------------------------------
//             SERVICE 02 — CUSTOM BLOUSE STITCHING
//             ------------------------------------------ */}
//         <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
//           <div className="boutique-container">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
//               {/* Service 02 Narrative (Left Column) */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className="lg:col-span-6 flex flex-col space-y-6 text-[#141312] order-2 lg:order-1"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="font-serif text-3xl font-light text-[#B38E46]">02</span>
//                   <span className="h-px w-12 bg-[#C5A059]" />
//                   <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                     TAILORING MASTERY
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide leading-tight text-stone-950">
//                     Custom Blouse<br />
//                     <span className="italic font-serif font-normal text-[#B38E46]">
//                       Stitching
//                     </span>
//                   </h2>
//                 </div>

//                 <div className="h-px w-20 bg-[#C5A059]" />

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
//                   Tailored strictly to your unique body contour. We draft custom armhole patterns, necklines, padded linings, sweetheart back cuts, and custom hook closures so that your blouse fits flawlessly like a second skin.
//                 </p>

//                 <div className="space-y-3 font-lato text-xs text-stone-800 pt-2">
//                   <div className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
//                     <Ruler className="w-4 h-4 text-[#B38E46] shrink-0" />
//                     <span>In-person physical measurements & digital client profile cards</span>
//                   </div>
//                   <div className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
//                     <ShieldCheck className="w-4 h-4 text-[#B38E46] shrink-0" />
//                     <span>Perfect Fit Guarantee — Complimentary fitting adjustments</span>
//                   </div>
//                   <div className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
//                     <Clock className="w-4 h-4 text-[#B38E46] shrink-0" />
//                     <span>Express 24-hour delivery options available for urgent orders</span>
//                   </div>
//                 </div>

//                 <div className="pt-4 flex items-center gap-6">
//                   <span className="text-xs font-serif italic text-[#B38E46]">Starting from ₹1,500</span>
//                   <Link
//                     href="/contact?service=Custom%20Blouse%20Stitching#booking"
//                     className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
//                   >
//                     Book Tailoring Slot
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </div>
//               </motion.div>

//               {/* Tailoring Atelier Photography Frame */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className="lg:col-span-6 relative aspect-[5/5.5] border border-[#E5D9C5] p-3 bg-white shadow-2xl overflow-hidden group order-1 lg:order-2"
//               >
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/durga_custom2.png"
//                     alt="Dev Fashion Master Tailoring Studio in Gandhipuram Coimbatore"
//                     fill
//                     className="object-cover group-hover:scale-108 transition-transform duration-700"
//                     sizes="(max-width: 1024px) 100vw, 45vw"
//                   />
//                   <div className="absolute inset-0 bg-stone-950/15" />
//                 </div>
//               </motion.div>

//             </div>
//           </div>
//         </section>


//         {/* ------------------------------------------
//             SERVICE 03 — DESIGNER SAREE BLOUSES
//             ------------------------------------------ */}
//         <section className="py-24 bg-white border-b border-[#EFEBE4]">
//           <div className="boutique-container">
//             <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
//               <div className="flex items-center gap-3 mb-2">
//                 <span className="font-serif text-3xl font-light text-[#B38E46]">03</span>
//                 <span className="h-px w-12 bg-[#C5A059]" />
//                 <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                   COUTURE PATTERNS
//                 </span>
//               </div>

//               <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
//                 Designer Saree Blouses
//               </h2>
//               <div className="h-px w-20 bg-[#C5A059] my-4" />
//               <p className="text-stone-600 text-sm font-lato">
//                She does not become someone else when she wears the blouse. <br />
//                She simply becomes a little more herself.
//               </p>
//             </div>

//             {/* Horizontal Wide Editorial Composition */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all">
//                 <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-[#EFEBE4] mb-4">
//                   <Image
//                     src="/images/dev_fashion/sadhana_red.png"
//                     alt="Designer Sweetheart Back Neck Cutout Blouse"
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 <div>
//                   <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
//                     ✦ Cutouts & Deep Necks
//                   </span>
//                   <h3 className="font-serif text-lg font-medium text-stone-950 mb-2">
//                     Contemporary Sweetheart Cut
//                   </h3>
//                   <p className="text-stone-600 text-xs leading-relaxed font-lato">
//                     Modern backless patterns adorned with tassels, Kundan stones, and pearl strings.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all">
//                 <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-[#EFEBE4] mb-4">
//                   <Image
//                     src="/images/dev_fashion/sadhana_temple.png"
//                     alt="Traditional Raw Silk Elbow Sleeve Blouse"
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 <div>
//                   <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
//                     ✦ Traditional Silk Wear
//                   </span>
//                   <h3 className="font-serif text-lg font-medium text-stone-950 mb-2">
//                     Elbow-Sleeve Zari Borders
//                   </h3>
//                   <p className="text-stone-600 text-xs leading-relaxed font-lato">
//                     Classic raw silk stitching featuring traditional temple zari borders and heavy elbow embroidery.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all">
//                 <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-[#EFEBE4] mb-4">
//                   <Image
//                     src="/images/dev_fashion/sadhana_kid2.png"
//                     alt="Sheer Net & Velvet Reception Blouse"
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 <div>
//                   <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
//                     ✦ Reception & Festive
//                   </span>
//                   <h3 className="font-serif text-lg font-medium text-stone-950 mb-2">
//                     Velvet & Organza Couture
//                   </h3>
//                   <p className="text-stone-600 text-xs leading-relaxed font-lato">
//                     Rich velvet and sheer net backs designed for grand evening receptions and sangeets.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center mt-12">
//               <Link
//                 href="/contact?service=Designer%20Saree%20Blouses#booking"
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-[#141312] text-white hover:bg-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
//               >
//                 View All Blouse Styles
//                 <ArrowRight className="w-3.5 h-3.5" />
//               </Link>
//             </div>
//           </div>
//         </section>


//         {/* ------------------------------------------
//             SERVICE 04 — ALTERATION SERVICES ("PERFECTING THE FIT")
//             ------------------------------------------ */}
//         <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
//           <div className="boutique-container">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
//               {/* Image Column */}
//               <div className="lg:col-span-5 relative aspect-[5/6] border border-[#E5D9C5] p-3 bg-white shadow-xl">
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/durga_mesher1.png"
//                     alt="Garment Fitting and Alteration Services Studio"
//                     fill
//                     className="object-cover"
//                     sizes="40vw"
//                   />
//                 </div>
//               </div>

//               {/* Text Column */}
//               <div className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]">
//                 <div className="flex items-center gap-3">
//                   <span className="font-serif text-3xl font-light text-[#B38E46]">04</span>
//                   <span className="h-px w-12 bg-[#C5A059]" />
//                   <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                     FIT REFINEMENT
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
//                     Perfecting the Fit
//                   </h2>
//                   <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-1">
//                     Professional Alteration Services
//                   </span>
//                 </div>

//                 <div className="h-px w-20 bg-[#C5A059]" />

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
//                   From bridal and wedding wear to your favorite pre-purchased pieces, we refine every detail with precision. 
//                   Whether it’s a size adjustment, sleeve addition, armhole refinement or zipper replacement, 
//                   our alteration service brings comfort, confidence and a beautifully finished fit to every garment.
//                 </p>

//                 <div className="bg-white p-6 border border-[#EFEBE4] space-y-3 font-lato text-xs text-stone-700 shadow-sm">
//                   <div className="flex items-center gap-3">
//                     <CheckCircle className="w-4 h-4 text-[#B38E46]" />
//                     <span>Free re-alterations until 100% satisfied</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <CheckCircle className="w-4 h-4 text-[#B38E46]" />
//                     <span>Expedited express fitting for urgent events</span>
//                   </div>
//                 </div>

//                 <div className="pt-2">
//                   <Link
//                     href="/contact?service=Alteration%20Services#booking"
//                     className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
//                   >
//                     Book Fitting Session
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>


//         {/* ------------------------------------------
//             SERVICE 05 — JEWELLERY RENTAL SHOWCASE
//             ------------------------------------------ */}
//         <section className="py-24 bg-white border-b border-[#EFEBE4]">
//           <div className="boutique-container">
            
//             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EFEBE4] gap-6">
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className="font-serif text-3xl font-light text-[#B38E46]">05</span>
//                   <span className="h-px w-12 bg-[#C5A059]" />
//                   <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                     HERITAGE ARCHIVE
//                   </span>
//                 </div>
//                 <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-stone-950 uppercase">
//                   South Indian Jewellery Rental
//                 </h2>
//               </div>
              
//               <Link
//                 href="/jewelry"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-[#141312] hover:bg-[#B38E46] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-md shrink-0 self-start md:self-auto"
//               >
//                 Explore 24+ Rental Sets
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>

//             {/* Jewellery Editorial Gallery Showcase */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {rentalPreview.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ y: -5 }}
//                   className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all shadow-sm"
//                 >
//                   <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#EFEBE4] mb-4">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover group-hover:scale-108 transition-transform duration-500"
//                     />
//                     <div className="absolute top-2 left-2 bg-[#141312] text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
//                       {item.price}
//                     </div>
//                   </div>

//                   <div>
//                     <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
//                       ✦ {item.category}
//                     </span>
//                     <h3 className="font-serif text-base font-medium text-stone-950 mb-3">
//                       {item.title}
//                     </h3>
//                   </div>

//                   <Link
//                     href="/jewelry#catalog"
//                     className="text-xs font-semibold tracking-widest text-[#B38E46] uppercase flex items-center gap-1 pt-2 border-t border-[#EFEBE4]"
//                   >
//                     View Details <ChevronRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//           </div>
//         </section>


//         {/* ------------------------------------------
//             SERVICE 06 — SAREE DRAPING & STYLING
//             ------------------------------------------ */}
//         <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
//           <div className="boutique-container">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
//               {/* Text Column */}
//               <div className="lg:col-span-6 flex flex-col space-y-6 text-[#141312]">
//                 <div className="flex items-center gap-3">
//                   <span className="font-serif text-3xl font-light text-[#B38E46]">06</span>
//                   <span className="h-px w-12 bg-[#C5A059]" />
//                   <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                     ELEGANT FINISHING
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
//                     Saree Draping<br />
//                     <span className="italic font-serif font-normal text-[#B38E46]">
//                       & Bridal Styling
//                     </span>
//                   </h2>
//                 </div>

//                 <div className="h-px w-20 bg-[#C5A059]" />

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
//                   At Dev Fashion, we believe elegance lies in the details. Alongside our bespoke tailoring and bridal services, 
//                   we offer professional saree draping services. every pleat, fold
//                    and pin is placed with precision.
                  
//                   <br /><br />

//                   From traditional South Indian drapes to elegant contemporary styles, our saree draping service is designed to give you a neat, graceful and comfortable finish—
//                   so you can feel confident and beautifully dressed for every special occasion.
                  
//                   <br /><br />
//                   Whether it is your wedding day, a cherished family celebration, a reception, or a special occasion, let Dev Fashion take care of the details—so you can simply enjoy the moment.
//                 </p>

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
//                   She is never trying too hard.
//                   Somehow, everything still looks better on her when we stand besides her.
//                 </p>          

//                 <div className="pt-2">
//                   <Link
//                     href="/contact?service=Saree%20Draping#booking"
//                     className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
//                   >
//                     Reserve Draping Stylist
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </div>
//               </div>

//               {/* Editorial Image Frame */}
//               <div className="lg:col-span-6 relative aspect-[5/5] border border-[#E5D9C5] p-3 bg-white shadow-xl">
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/saree_draping.png"
//                     alt="Professional Bridal Saree Draping & Styling"
//                     fill
//                     className="object-cover"
//                     sizes="45vw"
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//              {/* ------------------------------------------
//             SERVICE 07 — BRIDAL MEHENDI & ARTISTRY
//             ------------------------------------------ */}
//         <section className="py-24 bg-white border-b border-[#EFEBE4]">
//           <div className="boutique-container">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
//               {/* Mehendi Image Frame */}
//               <div className="lg:col-span-5 relative aspect-[4/5] border border-[#E5D9C5] p-3 bg-white shadow-xl">
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/lap_dur.png"
//                     alt="Detailed Intricate Indian Bridal Mehendi Henna Work"
//                     fill
//                     className="object-cover"
//                     sizes="40vw"
//                   />
//                 </div>
//               </div>

//               {/* Text Column */}
//               <div className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]">
//                 <div className="flex items-center gap-3">
//                   <span className="font-serif text-3xl font-light text-[#B38E46]">07</span>
//                   <span className="h-px w-12 bg-[#C5A059]" />
//                   <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                     book an Private appointment
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
//                     Our Private Client Styling and shopping services
//                   </h2>
//                   <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-1">
//                   We bring the Dev Fashion experience directly to your doorstep.
//                   </span>
//                 </div>

//                 <div className="h-px w-20 bg-[#C5A059]" />

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
//                   Our stylist team delivers a personalized white glove experience for both Women's and Men's clients across every occasion and lifestyle.
//                   <br /><br />
//                   We offer complimentary in-store and virtual styling, fit, and general product assistance, special sourcing, curated look books, customizations, personal recommendations, and much more.
//                   <br /><br />
//                   Plus, gain access to the best new and in-demand items before they hit the market. We’ll also tell you which ones we think are best for your personal style.
//                 </p>

//                 <div className="pt-2">
//                   <Link
//                     href="/contact?service=Bridal%20Mehendi#booking"
//                     className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
//                   >
//                     Enquire private Booking
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ------------------------------------------
//             SERVICE 08 — BRIDAL MEHENDI & ARTISTRY
//             ------------------------------------------ */}
//         <section className="py-24 bg-white border-b border-[#EFEBE4]">
//           <div className="boutique-container">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
             

//               {/* Text Column */}
//               <div className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]">
//                 <div className="flex items-center gap-3">
//                   <span className="font-serif text-3xl font-light text-[#B38E46]">08</span>
//                   <span className="h-px w-12 bg-[#C5A059]" />
//                   <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
//                     ARTISTIC EMBELLISHMENT
//                   </span>
//                 </div>

//                 <div>
//                   <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
//                     Bridal Mehendi
//                   </h2>
//                   <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-1">
//                     Your Bridal Look, Completed With Art
//                   </span>
//                 </div>

//                 <div className="h-px w-20 bg-[#C5A059]" />

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
                  
//                   Our bridal mehendi service brings together intricate artistry, traditional elegance, and personalised designs to make your wedding celebrations even more memorable.
//                   <br /> <br />
//                   From detailed bridal patterns to elegant, minimal designs, we create mehendi that complements your bridal outfit, jewellery and personal style. 
//                   Every design is applied with care and attention to detail, creating beautiful patterns that become part of your wedding memories.
//                 </p>

//                 <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
//                  <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-2">
//                     Perfect For
//                   </span> 
//                   Weddings • Engagements • Receptions • Family Celebrations • Special Occasions
//                 </p>

//                 <div className="pt-2">
//                   <Link
//                     href="/contact?service=Bridal%20Mehendi#booking"
//                     className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
//                   >
//                     Enquire Mehendi Booking
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </div>
//               </div>


//                {/* Mehendi Image Frame */}
//               <div className="lg:col-span-5 relative aspect-[4/5] border border-[#E5D9C5] p-3 bg-white shadow-xl">
//                 <div className="relative h-full w-full overflow-hidden">
//                   <Image
//                     src="/images/dev_fashion/mehandhi.jpg"
//                     alt="Detailed Intricate Indian Bridal Mehendi Henna Work"
//                     fill
//                     className="object-cover"
//                     sizes="40vw"
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//       </div>


//       {/* ==========================================
//           GLOBAL COURIER & VIRTUAL CONSULTATIONS
//           ========================================== */}
//       <section className="py-20 bg-stone-950 text-white border-b border-stone-850">
//         <div className="boutique-container">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
//             <div className="flex items-start gap-4">
//               <Globe className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
//               <div>
//                 <h4 className="font-serif text-lg font-light uppercase text-white">Worldwide Express Courier</h4>
//                 <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
//                   Tracked doorstep delivery to UK, USA, UAE, Canada, Australia, Singapore & beyond.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <Ruler className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
//               <div>
//                 <h4 className="font-serif text-lg font-light uppercase text-white">Virtual Measurement Card</h4>
//                 <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
//                   Step-by-step video call measuring session recorded on your private profile card.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <ShieldCheck className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
//               <div>
//                 <h4 className="font-serif text-lg font-light uppercase text-white">Confidentiality Assured</h4>
//                 <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
//                   Private measurement logs, design sketches, and personal details protected securely.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* ==========================================
//           FAQS SECTION (100% PRESERVED)
//           ========================================== */}
//       <section className="py-24 bg-white border-b border-[#EFEBE4]">
//         <div className="boutique-container max-w-5xl">
//           <div className="text-center mb-16">
//             <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase block mb-3">
//               ✦ Support & Guidance
//             </span>
//             <h2 className="font-serif text-3xl sm:text-4xl font-light uppercase tracking-wide text-stone-950">
//               Frequently Asked Questions
//             </h2>
//             <div className="h-px w-20 bg-[#C5A059] mx-auto mt-4" />
//           </div>

//           <div className="space-y-4 font-lato">
//             {faqs.map((faq, i) => {
//               const isOpen = openFaqIndex === i;
//               return (
//                 <div key={i} className="border border-[#EFEBE4] bg-[#FAF8F5] transition-colors">
//                   <button
//                     onClick={() => toggleFaq(i)}
//                     className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-base font-medium text-stone-950 hover:text-[#B38E46] transition-colors"
//                   >
//                     <span className="flex items-center gap-3">
//                       <HelpCircle className="w-4 h-4 text-[#B38E46] shrink-0" />
//                       {faq.q}
//                     </span>
//                     <span className="text-lg font-light text-[#B38E46]">{isOpen ? "−" : "+"}</span>
//                   </button>

//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-[#EFEBE4]/60 pt-4"
//                       >
//                         {faq.a}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>


//       {/* ==========================================
//           FINAL CALL TO ACTION
//           ========================================== */}
//       <section className="py-24 bg-[#FAF8F5] text-center">
//         <div className="boutique-container max-w-5xl space-y-6">
//           <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase block">
//             ✦ Begin Your Journey
//           </span>

//           <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
//             Let's Create Something Beautiful
//           </h2>

//           <div className="h-px w-20 bg-[#C5A059] mx-auto" />

//           <p className="text-stone-700 text-sm sm:text-base font-lato max-w-xl mx-auto leading-relaxed">
//             Contact Dev Fashion today for custom blouse stitching, bridal wear design, jewellery rental, and occasion styling.
//           </p>

//           <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-4 bg-[#141312] text-white hover:bg-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md flex items-center justify-center gap-2"
//             >
//               <MessageSquare className="w-4 h-4 text-[#C5A059]" />
//               <span>Enquire via WhatsApp</span>
//             </a>

//             <Link
//               href="/contact#booking"
//               className="px-8 py-4 border border-[#141312] text-[#141312] hover:border-[#B38E46] hover:text-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors bg-transparent"
//             >
//               Book Online Appointment
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }




















"use client";

import { useState, useRef, type ReactNode, type PointerEvent as RPointerEvent, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  type MotionProps,
} from "framer-motion";
import {
  Scissors,
  Sparkles,
  Heart,
  Ruler,
  Award,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  ChevronRight,
  Gem,
  HelpCircle,
  Clock,
  MapPin,
  Lock,
  Phone
} from "lucide-react";

// FAQ List (100% Preserved)
const faqs = [
  {
    q: "Do you offer same-day or 1-day delivery?",
    a: "Yes! Dev Fashion offers 1-day delivery for urgent bridal orders. Whether your wedding is tomorrow or you need a last-minute blouse for a function, our experienced team of 10 artisans can turn around quality work in 24 hours. WhatsApp us on 80985 58923 with your requirement and we'll confirm availability for your date."
  },
  {
    q: "How do I book a consultation with Ms. Durga Devi?",
    a: "You can walk into our studio at 9th Street, Tata Bed, Gandhipuram, Coimbatore, or call/WhatsApp us on 80985 58923 to book an appointment. Ms. Durga Devi, with her 17 years of expertise, personally oversees complex and bridal orders. Our team is available all days from 9 AM to 8 PM."
  },
  {
    q: "What are your prices?",
    a: "Our blouses start from ₹1,999 for cut work designs, ₹2,800 for aari embroidery, and ₹4,500+ for heavy zardosi bridal work. Pricing depends on the design complexity, embellishments and fabric. WhatsApp us or visit our studio for a free quote based on your specific saree and design requirement."
  },
  {
    q: "How do virtual appointments work for international or NRI clients?",
    a: "Once you schedule an appointment, we conduct a video call (WhatsApp/Zoom) where you describe your design requirements and view our fabric catalogs. We then guide you step-by-step on camera to take accurate body measurements. We also accept your favorite fitting blouse shipped to us as a physical size reference."
  },
  {
    q: "Do you ship internationally?",
    a: "Absolutely. We serve brides in 10+ countries including UAE, UK, USA, Canada, Australia, Singapore, Malaysia, Germany and Qatar. Simply WhatsApp us your measurements, saree details and design reference — our international orders team will coordinate everything, including safe packaging and tracked shipping to your doorstep abroad."
  },
  {
    q: "What is your standard tailoring turnaround time?",
    a: "Standard custom stitching takes 7 to 10 business days from the date measurements and fabrics are finalized. For bridalwear and highly intricate hand embroidery, it takes 3 to 6 weeks. We also offer expedited express tailoring (2-3 days) for urgent requests."
  },
  {
    q: "Do you supply fabrics, or do I need to send mine?",
    a: "We offer both options! We stock a premium range of fabrics (pure silk, Banarasi, velvet, georgette, and organza) that you can select from. Alternatively, you can drop off or mail your own fabrics to our Coimbatore studio."
  },
  {
    q: "What is your Perfect Fit Guarantee?",
    a: "If your outfit does not fit as expected, we offer free alteration fittings until it fits perfectly. For international clients, we keep large internal margins (up to 2 inches) inside the garment so it can be easily adjusted locally if needed."
  },
  {
    q: "Is client privacy maintained for designs and measurements?",
    a: "Absolutely. We treat all client measurements, custom outfit designs, and contact information with the highest confidentiality. We never share your physical measurement logs or private event references without explicit permission."
  }
];

// Featured Jewellery Rental Preview Items
const rentalPreview = [
  {
    title: "Traditional Lakshmi Kasu Mala",
    category: "Temple Haram",
    price: "₹1,400 / day",
    image: "/images/jewelry/kasu_mala_1.png"
  },
  {
    title: "Royal Guttapusalu Pearl Set",
    category: "Pearl Clusters",
    price: "₹1,950 / day",
    image: "/images/jewelry/guttapusalu_1.png"
  },
  {
    title: "Heritage 5-Piece Bridal Ensemble",
    category: "Full Bridal Set",
    price: "₹3,500 / day",
    image: "/images/jewelry/bridal_set_1.png"
  },
  {
    title: "Naga Vanki & Maang Tikka Pair",
    category: "Accessories",
    price: "₹750 / day",
    image: "/images/jewelry/vanki_armlet_1.png"
  }
];

/* ==========================================================
   3D HELPERS
   ========================================================== */

/**
 * Tilt3D — card that tilts toward the mouse with spring physics.
 * Children can use style={{ transform: "translateZ(40px)" }} to "float" above the card.
 * Mouse-only (touch devices skip the tilt) and disabled for reduced-motion users.
 */
function Tilt3D({
  children,
  className = "",
  max = 8,
  glare = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const spring = { stiffness: 160, damping: 20, mass: 0.6 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const sh = useSpring(hover, { stiffness: 120, damping: 20 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glareBg = useTransform(
    [sx, sy],
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx * 100}% ${gy * 100}%, rgba(255,255,255,0.35), transparent 60%)`
  );

  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerEnter={(e) => {
        if (!reduce && e.pointerType === "mouse") hover.set(1);
      }}
      onPointerLeave={() => {
        x.set(0.5);
        y.set(0.5);
        hover.set(0);
      }}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          style={{ background: glareBg, opacity: sh }}
          className="pointer-events-none absolute inset-0"
        />
      )}
    </motion.div>
  );
}

/**
 * GoldCube — a slowly rotating wireframe cube used as a decorative 3D accent.
 */
function GoldCube({
  size = 56,
  className = "",
  duration = 22,
}: {
  size?: number;
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const faces = [
    "rotateY(0deg)",
    "rotateY(90deg)",
    "rotateY(180deg)",
    "rotateY(-90deg)",
    "rotateX(90deg)",
    "rotateX(-90deg)",
  ];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size, perspective: 800 }}
    >
      <motion.div
        animate={reduce ? undefined : { rotateX: [0, 360], rotateY: [0, 360], y: [0, -14, 0] }}
        transition={{
          rotateX: { duration, repeat: Infinity, ease: "linear" },
          rotateY: { duration: duration * 0.8, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ width: size, height: size, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {faces.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: `${t} translateZ(${size / 2}px)`,
              border: "1px solid rgba(197,160,89,0.6)",
              background: "rgba(197,160,89,0.07)",
              backfaceVisibility: "visible",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Scroll-reveal with 3D rotation. Spread onto any motion element:
 *   <motion.div {...reveal("left")} className="...">
 */
type Dir = "left" | "right" | "up";
const makeReveal =
  (reduce: boolean) =>
  (from: Dir = "up", delay = 0): MotionProps => {
    const hidden = reduce
      ? { opacity: 0 }
      : from === "left"
      ? { opacity: 0, x: -70, rotateY: -28 }
      : from === "right"
      ? { opacity: 0, x: 70, rotateY: 28 }
      : { opacity: 0, y: 60, rotateX: -18 };

    return {
      initial: hidden,
      whileInView: { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      style: {
        transformPerspective: 1400,
        transformOrigin: from === "left" ? "left center" : from === "right" ? "right center" : "center bottom",
      },
    };
  };

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const reveal = makeReveal(!!reduce);

  // Hero scroll parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroRotateX = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const heroItem = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28, rotateX: -45 },
          animate: { opacity: 1, y: 0, rotateX: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
          style: { transformPerspective: 900, transformOrigin: "50% 100%" } as CSSProperties,
        };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#141312] pt-4 overflow-x-hidden font-sans">
      
      {/* ==========================================
          HERO SECTION: "CRAFTED FOR EVERY CELEBRATION"
          Cinematic Luxury Bridal Photography
          ========================================== */}
      <section
        ref={heroRef}
        className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-no-repeat sm:bg-fixed overflow-hidden"
        style={{
          backgroundImage: "url('/images/dev_fashion/service.png')",
        }}
      >

        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Floating 3D gold cubes */}
        <GoldCube size={64} duration={24} className="absolute left-[8%] top-[22%] hidden sm:block z-[5] opacity-80" />
        <GoldCube size={38} duration={16} className="absolute right-[11%] top-[18%] hidden sm:block z-[5] opacity-70" />
        <GoldCube size={48} duration={20} className="absolute right-[18%] bottom-[16%] hidden md:block z-[5] opacity-60" />
        <GoldCube size={28} duration={14} className="absolute left-[16%] bottom-[14%] hidden md:block z-[5] opacity-60" />

        {/* Content */}
        <motion.div
          style={reduce ? undefined : { y: heroY, rotateX: heroRotateX, opacity: heroOpacity, transformPerspective: 1200 }}
          className="relative z-10 boutique-container"
        >

          <motion.span
            {...heroItem(0.1)}
            className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3"
          >
            ✦ A NEW LUXURY EXPERIENCE • COIMBATORE ✦ 
          </motion.span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
            {["Crafted", "for", "Every"].map((w, i) => (
              <motion.span key={w} {...heroItem(0.25 + i * 0.12)} className="inline-block mr-3">
                {w}
              </motion.span>
            ))}
            <motion.span
              {...heroItem(0.65)}
              className="inline-block italic font-serif font-normal text-[#C5A059] capitalize"
            >
              Celebration
            </motion.span>
          </h1>
          
          <motion.p
            {...heroItem(0.85)}
            className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            An exploration of lightness. As if air were a material!
          </motion.p>

          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6 mt-4"
          />

          <motion.p
            {...heroItem(1.1)}
            className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            we provides a complete South Indian bridal experience — from bespoke Aari embroidered blouses and custom stitching to saree draping, jewellery rental and bridal mehendi.
          </motion.p>
        </motion.div>

      </section>


      {/* ==========================================
          EDITORIAL SERVICE JOURNEY STARTS HERE
          ========================================== */}
      <div id="service-journey" className="relative">

        {/* ------------------------------------------
            SERVICE 01 — BRIDAL BLOUSE DESIGN
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="boutique-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Asymmetric Macro Embroidery Image Frame */}
              <motion.div
                {...reveal("left")}
                className="lg:col-span-6 relative aspect-[5/5]"
              >
                <Tilt3D
                  glare
                  className="group h-full w-full border border-[#E5D9C5] p-3 bg-white shadow-2xl"
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/images/dev_fashion/featured-aari.webp"
                      alt="Handcrafted Bridal Blouse Aari Embroidery Work"
                      fill
                      className="object-cover object-top sm:object-center group-hover:scale-108 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-stone-950/10" />
                  </div>

                  {/* Caption floats above the image in 3D */}
                  <div
                    className="absolute bottom-7 left-7 right-7 bg-stone-950/85 backdrop-blur-sm p-4 text-white border border-[#C5A059]/40"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <span className="text-[9px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                      ✦ Handcrafted Artisan Craftsmanship
                    </span>
                    <p className="font-serif text-xs italic text-stone-300">
                      Zardozi, Kundan, Dabka & Pearl Work
                    </p>
                  </div>
                </Tilt3D>
              </motion.div>

              {/* Service 01 Narrative */}
              <motion.div
                {...reveal("right", 0.1)}
                className="lg:col-span-6 flex flex-col space-y-6 text-[#141312]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-light text-[#B38E46]">01</span>
                  <span className="h-px w-12 bg-[#C5A059]" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
                    BRIDAL ATELIER
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide leading-tight text-stone-950">
                    Bridal Blouse<br />
                    <span className="italic font-serif font-normal text-[#B38E46]">
                      Design
                    </span>
                  </h2>
                </div>

                <div className="h-px w-20 bg-[#C5A059]" />

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
                  Dev Fashion specializes in creating intricately detailed South Indian <strong>bridal blouses</strong>. Our master artisans hand-craft each design using traditional <strong>Zardozi, Kundan, Dabka, pearl work, Aari embroidery, and custom embellishments</strong> tailored to perfectly complement your Kanjivaram or wedding silk saree.
                </p>

                {/* Craftsmanship Highlights Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs font-lato pt-2">
                  <Tilt3D max={10} className="p-3.5 bg-[#FAF8F5] border border-[#EFEBE4]">
                    <div style={{ transform: "translateZ(18px)" }}>
                      <strong className="block text-stone-950 font-semibold mb-0.5">Aari & Maggam Work</strong>
                      <span className="text-stone-600">Beadwork, stones, cutwork & thread motifs.</span>
                    </div>
                  </Tilt3D>
                  <Tilt3D max={10} className="p-3.5 bg-[#FAF8F5] border border-[#EFEBE4]">
                    <div style={{ transform: "translateZ(18px)" }}>
                      <strong className="block text-stone-950 font-semibold mb-0.5">Heavy Zardozi Artistry</strong>
                      <span className="text-stone-600">Pure zari coils & metallic embellishments.</span>
                    </div>
                  </Tilt3D>
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <span className="text-xs font-serif italic text-[#B38E46]">Starting from ₹4,500+</span>
                  <Link
                    href="/contact?service=Bridal%20Wear%20Design#booking"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
                  >
                    Request Design Consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 02 — CUSTOM BLOUSE STITCHING
            ------------------------------------------ */}
        <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
          <div className="boutique-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Service 02 Narrative (Left Column) */}
              <motion.div
                {...reveal("left")}
                className="lg:col-span-6 flex flex-col space-y-6 text-[#141312] order-2 lg:order-1"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-light text-[#B38E46]">02</span>
                  <span className="h-px w-12 bg-[#C5A059]" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
                    TAILORING MASTERY
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide leading-tight text-stone-950">
                    Custom Blouse<br />
                    <span className="italic font-serif font-normal text-[#B38E46]">
                      Stitching
                    </span>
                  </h2>
                </div>

                <div className="h-px w-20 bg-[#C5A059]" />

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
                  Tailored strictly to your unique body contour. We draft custom armhole patterns, necklines, padded linings, sweetheart back cuts, and custom hook closures so that your blouse fits flawlessly like a second skin.
                </p>

                <div className="space-y-3 font-lato text-xs text-stone-800 pt-2">
                  <Tilt3D max={4} className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
                    <Ruler className="w-4 h-4 text-[#B38E46] shrink-0" style={{ transform: "translateZ(20px)" }} />
                    <span style={{ transform: "translateZ(14px)" }}>In-person physical measurements & digital client profile cards</span>
                  </Tilt3D>
                  <Tilt3D max={4} className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
                    <ShieldCheck className="w-4 h-4 text-[#B38E46] shrink-0" style={{ transform: "translateZ(20px)" }} />
                    <span style={{ transform: "translateZ(14px)" }}>Perfect Fit Guarantee — Complimentary fitting adjustments</span>
                  </Tilt3D>
                  <Tilt3D max={4} className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
                    <Clock className="w-4 h-4 text-[#B38E46] shrink-0" style={{ transform: "translateZ(20px)" }} />
                    <span style={{ transform: "translateZ(14px)" }}>Express 24-hour delivery options available for urgent orders</span>
                  </Tilt3D>
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <span className="text-xs font-serif italic text-[#B38E46]">Starting from ₹1,500</span>
                  <Link
                    href="/contact?service=Custom%20Blouse%20Stitching#booking"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
                  >
                    Book Tailoring Slot
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* Tailoring Atelier Photography Frame */}
              <motion.div
                {...reveal("right", 0.1)}
                className="lg:col-span-6 relative aspect-[5/5.5] order-1 lg:order-2"
              >
                <Tilt3D
                  glare
                  className="group h-full w-full border border-[#E5D9C5] p-3 bg-white shadow-2xl"
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/images/dev_fashion/durga_custom2.png"
                      alt="Dev Fashion Master Tailoring Studio in Gandhipuram Coimbatore"
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-stone-950/15" />
                  </div>
                </Tilt3D>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 03 — DESIGNER SAREE BLOUSES
            ------------------------------------------ */}
       <section className="py-24 bg-white border-b border-[#EFEBE4]">
  <div className="boutique-container">
    <motion.div
      {...reveal("up")}
      className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="font-serif text-3xl font-light text-[#B38E46]">03</span>
        <span className="h-px w-12 bg-[#C5A059]" />
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
          COUTURE PATTERNS
        </span>
      </div>

      <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
        Designer Saree Blouses
      </h2>
      <div className="h-px w-20 bg-[#C5A059] my-4" />
      <p className="text-stone-600 text-sm font-lato">
        She does not become someone else when she wears the blouse. <br />
        She simply becomes a little more herself.
      </p>
    </motion.div>

    {/* 3 in a row on every screen size */}
    <div className="grid grid-cols-3 gap-2 sm:gap-5 md:gap-8">
      {[
        {
          img: "/images/dev_fashion/sadhana_red.png",
          alt: "Designer Sweetheart Back Neck Cutout Blouse",
          tag: "Cutouts & Deep Necks",
          title: "Contemporary Sweetheart Cut",
          text: "Modern backless patterns adorned with tassels, Kundan stones, and pearl strings.",
        },
        {
          img: "/images/dev_fashion/sadhana_temple.png",
          alt: "Traditional Raw Silk Elbow Sleeve Blouse",
          tag: "Traditional Silk Wear",
          title: "Elbow-Sleeve Zari Borders",
          text: "Classic raw silk stitching featuring traditional temple zari borders and heavy elbow embroidery.",
        },
        {
          img: "/images/dev_fashion/sadhana_kid2.png",
          alt: "Sheer Net & Velvet Reception Blouse",
          tag: "Reception & Festive",
          title: "Velvet & Organza Couture",
          text: "Rich velvet and sheer net backs designed for grand evening receptions and sangeets.",
        },
      ].map((item, i) => (
        <motion.div key={item.title} {...reveal("up", i * 0.12)}>
          <Tilt3D
            max={9}
            className="h-full bg-[#FAF8F5] border border-[#EFEBE4] p-1.5 sm:p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-colors"
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-[#EFEBE4] mb-2 sm:mb-4 shadow-lg"
              style={{ transform: "translateZ(30px)" }}
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 33vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div style={{ transform: "translateZ(18px)" }}>
              <span className="text-[7px] sm:text-[10px] font-semibold text-[#B38E46] uppercase tracking-wide sm:tracking-wider block mb-1 leading-tight">
                ✦ {item.tag}
              </span>
              <h3 className="font-serif text-[11px] sm:text-lg font-medium text-stone-950 sm:mb-2 leading-tight">
                {item.title}
              </h3>
              {/* Description hidden on phones so the narrow cards stay clean */}
              <p className="hidden sm:block text-stone-600 text-xs leading-relaxed font-lato">
                {item.text}
              </p>
            </div>
          </Tilt3D>
        </motion.div>
      ))}
    </div>

    <motion.div {...reveal("up", 0.2)} className="text-center mt-12">
      <Link
        href="/contact?service=Designer%20Saree%20Blouses#booking"
        className="inline-flex items-center gap-2 px-8 py-4 bg-[#141312] text-white hover:bg-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
      >
        View All Blouse Styles
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </motion.div>
  </div>
</section>

        {/* ------------------------------------------
            SERVICE 04 — ALTERATION SERVICES ("PERFECTING THE FIT")
            ------------------------------------------ */}
        <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
          <div className="boutique-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Image Column */}
              <motion.div {...reveal("left")} className="lg:col-span-5 relative aspect-[5/6]">
                <Tilt3D glare className="h-full w-full border border-[#E5D9C5] p-3 bg-white shadow-xl">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/images/dev_fashion/durga_mesher1.png"
                      alt="Garment Fitting and Alteration Services Studio"
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>
                </Tilt3D>
              </motion.div>

              {/* Text Column */}
              <motion.div
                {...reveal("right", 0.1)}
                className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-light text-[#B38E46]">04</span>
                  <span className="h-px w-12 bg-[#C5A059]" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
                    FIT REFINEMENT
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
                    Perfecting the Fit
                  </h2>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-1">
                    Professional Alteration Services
                  </span>
                </div>

                <div className="h-px w-20 bg-[#C5A059]" />

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
                  From bridal and wedding wear to your favorite pre-purchased pieces, we refine every detail with precision. 
                  Whether it’s a size adjustment, sleeve addition, armhole refinement or zipper replacement, 
                  our alteration service brings comfort, confidence and a beautifully finished fit to every garment.
                </p>

                <Tilt3D max={4} className="bg-white p-6 border border-[#EFEBE4] space-y-3 font-lato text-xs text-stone-700 shadow-sm">
                  <div className="flex items-center gap-3" style={{ transform: "translateZ(20px)" }}>
                    <CheckCircle className="w-4 h-4 text-[#B38E46]" />
                    <span>Free re-alterations until 100% satisfied</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ transform: "translateZ(20px)" }}>
                    <CheckCircle className="w-4 h-4 text-[#B38E46]" />
                    <span>Expedited express fitting for urgent events</span>
                  </div>
                </Tilt3D>

                <div className="pt-2">
                  <Link
                    href="/contact?service=Alteration%20Services#booking"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
                  >
                    Book Fitting Session
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 05 — JEWELLERY RENTAL SHOWCASE
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="boutique-container">
            
            <motion.div
              {...reveal("up")}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EFEBE4] gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-serif text-3xl font-light text-[#B38E46]">05</span>
                  <span className="h-px w-12 bg-[#C5A059]" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
                    HERITAGE ARCHIVE
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-stone-950 uppercase">
                  South Indian Jewellery Rental
                </h2>
              </div>
              
              <Link
                href="/jewelry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#141312] hover:bg-[#B38E46] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-md shrink-0 self-start md:self-auto"
              >
                Explore 24+ Rental Sets
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Jewellery Editorial Gallery Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentalPreview.map((item, i) => (
                <motion.div key={i} {...reveal("up", i * 0.12)}>
                  <Tilt3D
                    max={12}
                    className="h-full bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-colors shadow-sm"
                  >
                    <div
                      className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#EFEBE4] mb-4 shadow-lg"
                      style={{ transform: "translateZ(35px)" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-[#141312] text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                        {item.price}
                      </div>
                    </div>

                    <div style={{ transform: "translateZ(20px)" }}>
                      <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
                        ✦ {item.category}
                      </span>
                      <h3 className="font-serif text-base font-medium text-stone-950 mb-3">
                        {item.title}
                      </h3>
                    </div>

                    <Link
                      href="/jewelry#catalog"
                      className="text-xs font-semibold tracking-widest text-[#B38E46] uppercase flex items-center gap-1 pt-2 border-t border-[#EFEBE4]"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </Tilt3D>
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 06 — SAREE DRAPING & STYLING
            ------------------------------------------ */}
        <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
          <div className="boutique-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Column */}
              <motion.div
                {...reveal("left")}
                className="lg:col-span-6 flex flex-col space-y-6 text-[#141312]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-light text-[#B38E46]">06</span>
                  <span className="h-px w-12 bg-[#C5A059]" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
                    ELEGANT FINISHING
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
                    Saree Draping<br />
                    <span className="italic font-serif font-normal text-[#B38E46]">
                      & Bridal Styling
                    </span>
                  </h2>
                </div>

                <div className="h-px w-20 bg-[#C5A059]" />

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
                  At Dev Fashion, we believe elegance lies in the details. Alongside our bespoke tailoring and bridal services, 
                  we offer professional saree draping services. every pleat, fold
                   and pin is placed with precision.
                  
                  <br /><br />

                  From traditional South Indian drapes to elegant contemporary styles, our saree draping service is designed to give you a neat, graceful and comfortable finish—
                  so you can feel confident and beautifully dressed for every special occasion.
                  
                  <br /><br />
                  Whether it is your wedding day, a cherished family celebration, a reception, or a special occasion, let Dev Fashion take care of the details—so you can simply enjoy the moment.
                </p>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato">
                  She is never trying too hard.
                  Somehow, everything still looks better on her when we stand besides her.
                </p>          

                <div className="pt-2">
                  <Link
                    href="/contact?service=Saree%20Draping#booking"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
                  >
                    Reserve Draping Stylist
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* Editorial Image Frame */}
              <motion.div {...reveal("right", 0.1)} className="lg:col-span-6 relative aspect-[5/5]">
                <Tilt3D glare className="h-full w-full border border-[#E5D9C5] p-3 bg-white shadow-xl">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/images/dev_fashion/saree_draping.png"
                      alt="Professional Bridal Saree Draping & Styling"
                      fill
                      className="object-cover"
                      sizes="45vw"
                    />
                  </div>
                </Tilt3D>
              </motion.div>

            </div>
          </div>
        </section>

             {/* ------------------------------------------
            SERVICE 07 — BRIDAL MEHENDI & ARTISTRY
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="boutique-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Mehendi Image Frame */}
              <motion.div {...reveal("left")} className="lg:col-span-5 relative aspect-[4/5]">
                <Tilt3D glare className="h-full w-full border border-[#E5D9C5] p-3 bg-white shadow-xl">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/images/dev_fashion/lap_dur.png"
                      alt="Detailed Intricate Indian Bridal Mehendi Henna Work"
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>
                </Tilt3D>
              </motion.div>

              {/* Text Column */}
              <motion.div
                {...reveal("right", 0.1)}
                className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-light text-[#B38E46]">07</span>
                  <span className="h-px w-12 bg-[#C5A059]" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
                    book an Private appointment
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
                    Our Private Client Styling and shopping services
                  </h2>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-1">
                  We bring the Dev Fashion experience directly to your doorstep.
                  </span>
                </div>

                <div className="h-px w-20 bg-[#C5A059]" />

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
                  Our stylist team delivers a personalized white glove experience for both Women's and Men's clients across every occasion and lifestyle.
                  <br /><br />
                  We offer complimentary in-store and virtual styling, fit, and general product assistance, special sourcing, curated look books, customizations, personal recommendations, and much more.
                  <br /><br />
                  Plus, gain access to the best new and in-demand items before they hit the market. We’ll also tell you which ones we think are best for your personal style.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact?service=Bridal%20Mehendi#booking"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
                  >
                    Enquire private Booking
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------
            SERVICE 08 — BRIDAL MEHENDI & ARTISTRY
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="boutique-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Text Column */}
              <motion.div
                {...reveal("left")}
                className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-light text-[#B38E46]">08</span>
                  <span className="h-px w-12 bg-[#C5A059]" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase">
                    ARTISTIC EMBELLISHMENT
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
                    Bridal Mehendi
                  </h2>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-1">
                    Your Bridal Look, Completed With Art
                  </span>
                </div>

                <div className="h-px w-20 bg-[#C5A059]" />

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
                  
                  Our bridal mehendi service brings together intricate artistry, traditional elegance, and personalised designs to make your wedding celebrations even more memorable.
                  <br /> <br />
                  From detailed bridal patterns to elegant, minimal designs, we create mehendi that complements your bridal outfit, jewellery and personal style. 
                  Every design is applied with care and attention to detail, creating beautiful patterns that become part of your wedding memories.
                </p>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-lato text-justify">
                 <span className="text-xs uppercase tracking-[0.25em] text-[#B38E46] font-semibold block mt-2">
                    Perfect For
                  </span> 
                  Weddings • Engagements • Receptions • Family Celebrations • Special Occasions
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact?service=Bridal%20Mehendi#booking"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
                  >
                    Enquire Mehendi Booking
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>


               {/* Mehendi Image Frame */}
              <motion.div {...reveal("right", 0.1)} className="lg:col-span-5 relative aspect-[4/5]">
                <Tilt3D glare className="h-full w-full border border-[#E5D9C5] p-3 bg-white shadow-xl">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/images/dev_fashion/mehandhi.jpg"
                      alt="Detailed Intricate Indian Bridal Mehendi Henna Work"
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>
                </Tilt3D>
              </motion.div>

            </div>
          </div>
        </section>

      </div>


      {/* ==========================================
          GLOBAL COURIER & VIRTUAL CONSULTATIONS
          ========================================== */}
      <section className="py-20 bg-stone-950 text-white border-b border-stone-850">
        <div className="boutique-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <motion.div {...reveal("up", 0)} className="flex items-start gap-4">
              <motion.div
                whileHover={reduce ? undefined : { rotateY: 360 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{ transformPerspective: 600 }}
                className="shrink-0 mt-1"
              >
                <Globe className="w-8 h-8 text-[#C5A059]" />
              </motion.div>
              <div>
                <h4 className="font-serif text-lg font-light uppercase text-white">Worldwide Express Courier</h4>
                <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
                  Tracked doorstep delivery to UK, USA, UAE, Canada, Australia, Singapore & beyond.
                </p>
              </div>
            </motion.div>

            <motion.div {...reveal("up", 0.12)} className="flex items-start gap-4">
              <motion.div
                whileHover={reduce ? undefined : { rotateY: 360 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{ transformPerspective: 600 }}
                className="shrink-0 mt-1"
              >
                <Ruler className="w-8 h-8 text-[#C5A059]" />
              </motion.div>
              <div>
                <h4 className="font-serif text-lg font-light uppercase text-white">Virtual Measurement Card</h4>
                <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
                  Step-by-step video call measuring session recorded on your private profile card.
                </p>
              </div>
            </motion.div>

            <motion.div {...reveal("up", 0.24)} className="flex items-start gap-4">
              <motion.div
                whileHover={reduce ? undefined : { rotateY: 360 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{ transformPerspective: 600 }}
                className="shrink-0 mt-1"
              >
                <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
              </motion.div>
              <div>
                <h4 className="font-serif text-lg font-light uppercase text-white">Confidentiality Assured</h4>
                <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
                  Private measurement logs, design sketches, and personal details protected securely.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ==========================================
          FAQS SECTION (100% PRESERVED)
          ========================================== */}
      <section className="py-24 bg-white border-b border-[#EFEBE4]">
        <div className="boutique-container max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase block mb-3">
              ✦ Support & Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light uppercase tracking-wide text-stone-950">
              Frequently Asked Questions
            </h2>
            <div className="h-px w-20 bg-[#C5A059] mx-auto mt-4" />
          </div>

          <div className="space-y-4 font-lato">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="border border-[#EFEBE4] bg-[#FAF8F5] transition-colors">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-base font-medium text-stone-950 hover:text-[#B38E46] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#B38E46] shrink-0" />
                      {faq.q}
                    </span>
                    <span className="text-lg font-light text-[#B38E46]">{isOpen ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-[#EFEBE4]/60 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==========================================
          FINAL CALL TO ACTION
          ========================================== */}
      <section className="relative py-24 bg-[#FAF8F5] text-center overflow-hidden">
        <GoldCube size={44} duration={18} className="absolute left-[10%] top-[24%] hidden md:block opacity-60" />
        <GoldCube size={30} duration={14} className="absolute right-[12%] bottom-[22%] hidden md:block opacity-60" />

        <motion.div {...reveal("up")} className="relative boutique-container max-w-5xl space-y-6">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B38E46] uppercase block">
            ✦ Begin Your Journey
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-stone-950">
            Let's Create Something Beautiful
          </h2>

          <div className="h-px w-20 bg-[#C5A059] mx-auto" />

          <p className="text-stone-700 text-sm sm:text-base font-lato max-w-xl mx-auto leading-relaxed">
            Contact Dev Fashion today for custom blouse stitching, bridal wear design, jewellery rental, and occasion styling.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { y: -4, rotateX: 12, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{ transformPerspective: 700 }}
              className="px-8 py-4 bg-[#141312] text-white hover:bg-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>Enquire via WhatsApp</span>
            </motion.a>

            <motion.div
              whileHover={reduce ? undefined : { y: -4, rotateX: 12, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{ transformPerspective: 700 }}
            >
              <Link
                href="/contact#booking"
                className="block px-8 py-4 border border-[#141312] text-[#141312] hover:border-[#B38E46] hover:text-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors bg-transparent"
              >
                Book Online Appointment
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}