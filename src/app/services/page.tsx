"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#141312] pt-24 overflow-x-hidden font-sans">
      
      {/* ==========================================
          HERO SECTION: "CRAFTED FOR EVERY CELEBRATION"
          Cinematic Luxury Bridal Photography
          ========================================== */}
      <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat" 
      style={{
        backgroundImage: "url('/images/dev_fashion/service.png')",
      }}>


     {/* Dark/white overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
          ✦ A NEW LUXURY EXPERIENCE • COIMBATORE ✦ 
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
           Crafted for Every &nbsp;
              <span className="italic font-serif font-normal text-[#C5A059] capitalize">
                Celebration
              </span>
        </h1>
        
        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">An exploration of lightness. As if air were a material!</p>

        <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          we provides a complete South Indian bridal experience — from bespoke Aari embroidered blouses and custom stitching to saree draping, jewellery rental and bridal mehendi.
        </p>
      </div>


      </section>


      {/* ==========================================
          EDITORIAL SERVICE JOURNEY STARTS HERE
          ========================================== */}
      <div id="service-journey" className="relative">

        {/* ------------------------------------------
            SERVICE 01 — BRIDAL BLOUSE DESIGN
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Asymmetric Macro Embroidery Image Frame */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 relative aspect-[5/5] border border-[#E5D9C5] p-3 bg-white shadow-2xl overflow-hidden group"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/dev_fashion/featured-aari.webp"
                    alt="Handcrafted Bridal Blouse Aari Embroidery Work"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-stone-950/10" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-stone-950/85 backdrop-blur-sm p-4 text-white border border-[#C5A059]/40">
                    <span className="text-[9px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                      ✦ Handcrafted Artisan Craftsmanship
                    </span>
                    <p className="font-serif text-xs italic text-stone-300">
                      Zardozi, Kundan, Dabka & Pearl Work
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service 01 Narrative */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
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
                  <div className="p-3.5 bg-[#FAF8F5] border border-[#EFEBE4]">
                    <strong className="block text-stone-950 font-semibold mb-0.5">Aari & Maggam Work</strong>
                    <span className="text-stone-600">Beadwork, stones, cutwork & thread motifs.</span>
                  </div>
                  <div className="p-3.5 bg-[#FAF8F5] border border-[#EFEBE4]">
                    <strong className="block text-stone-950 font-semibold mb-0.5">Heavy Zardozi Artistry</strong>
                    <span className="text-stone-600">Pure zari coils & metallic embellishments.</span>
                  </div>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Service 02 Narrative (Left Column) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
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
                  <div className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
                    <Ruler className="w-4 h-4 text-[#B38E46] shrink-0" />
                    <span>In-person physical measurements & digital client profile cards</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
                    <ShieldCheck className="w-4 h-4 text-[#B38E46] shrink-0" />
                    <span>Perfect Fit Guarantee — Complimentary fitting adjustments</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white border border-[#EFEBE4]">
                    <Clock className="w-4 h-4 text-[#B38E46] shrink-0" />
                    <span>Express 24-hour delivery options available for urgent orders</span>
                  </div>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 relative aspect-[5/5.5] border border-[#E5D9C5] p-3 bg-white shadow-2xl overflow-hidden group order-1 lg:order-2"
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
              </motion.div>

            </div>
          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 03 — DESIGNER SAREE BLOUSES
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
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
            </div>

            {/* Horizontal Wide Editorial Composition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-[#EFEBE4] mb-4">
                  <Image
                    src="/images/dev_fashion/sadhana_red.png"
                    alt="Designer Sweetheart Back Neck Cutout Blouse"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
                    ✦ Cutouts & Deep Necks
                  </span>
                  <h3 className="font-serif text-lg font-medium text-stone-950 mb-2">
                    Contemporary Sweetheart Cut
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed font-lato">
                    Modern backless patterns adorned with tassels, Kundan stones, and pearl strings.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-[#EFEBE4] mb-4">
                  <Image
                    src="/images/dev_fashion/sadhana_blue.png"
                    alt="Traditional Raw Silk Elbow Sleeve Blouse"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
                    ✦ Traditional Silk Wear
                  </span>
                  <h3 className="font-serif text-lg font-medium text-stone-950 mb-2">
                    Elbow-Sleeve Zari Borders
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed font-lato">
                    Classic raw silk stitching featuring traditional temple zari borders and heavy elbow embroidery.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-[#EFEBE4] mb-4">
                  <Image
                    src="/images/dev_fashion/sadhana_red3.png"
                    alt="Sheer Net & Velvet Reception Blouse"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#B38E46] uppercase tracking-wider block mb-1">
                    ✦ Reception & Festive
                  </span>
                  <h3 className="font-serif text-lg font-medium text-stone-950 mb-2">
                    Velvet & Organza Couture
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed font-lato">
                    Rich velvet and sheer net backs designed for grand evening receptions and sangeets.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact?service=Designer%20Saree%20Blouses#booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#141312] text-white hover:bg-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
              >
                View All Blouse Styles
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 04 — ALTERATION SERVICES ("PERFECTING THE FIT")
            ------------------------------------------ */}
        <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-5 relative aspect-[5/6] border border-[#E5D9C5] p-3 bg-white shadow-xl">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/dev_fashion/durga_fit.png"
                    alt="Garment Fitting and Alteration Services Studio"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]">
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

                <div className="bg-white p-6 border border-[#EFEBE4] space-y-3 font-lato text-xs text-stone-700 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#B38E46]" />
                    <span>Free re-alterations until 100% satisfied</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#B38E46]" />
                    <span>Expedited express fitting for urgent events</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact?service=Alteration%20Services#booking"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#141312] hover:text-[#B38E46] uppercase transition-colors underline decoration-[#C5A059] underline-offset-4"
                  >
                    Book Fitting Session
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 05 — JEWELLERY RENTAL SHOWCASE
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EFEBE4] gap-6">
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
            </div>

            {/* Jewellery Editorial Gallery Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentalPreview.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-[#FAF8F5] border border-[#EFEBE4] p-4 flex flex-col justify-between group hover:border-[#C5A059] transition-all shadow-sm"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border border-[#EFEBE4] mb-4">
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

                  <div>
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
                  >
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* ------------------------------------------
            SERVICE 06 — SAREE DRAPING & STYLING
            ------------------------------------------ */}
        <section className="py-24 bg-[#FAF8F5] border-b border-[#EFEBE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-6 flex flex-col space-y-6 text-[#141312]">
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
              </div>

              {/* Editorial Image Frame */}
              <div className="lg:col-span-6 relative aspect-[5/5] border border-[#E5D9C5] p-3 bg-white shadow-xl">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/dev_fashion/saree_draping.png"
                    alt="Professional Bridal Saree Draping & Styling"
                    fill
                    className="object-cover"
                    sizes="45vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

             {/* ------------------------------------------
            SERVICE 07 — BRIDAL MEHENDI & ARTISTRY
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Mehendi Image Frame */}
              <div className="lg:col-span-5 relative aspect-[4/5] border border-[#E5D9C5] p-3 bg-white shadow-xl">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/dev_fashion/lap_dur.png"
                    alt="Detailed Intricate Indian Bridal Mehendi Henna Work"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]">
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
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------
            SERVICE 08 — BRIDAL MEHENDI & ARTISTRY
            ------------------------------------------ */}
        <section className="py-24 bg-white border-b border-[#EFEBE4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
             

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col space-y-6 text-[#141312]">
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
              </div>


               {/* Mehendi Image Frame */}
              <div className="lg:col-span-5 relative aspect-[4/5] border border-[#E5D9C5] p-3 bg-white shadow-xl">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/dev_fashion/mehandhi.jpg"
                    alt="Detailed Intricate Indian Bridal Mehendi Henna Work"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>


      {/* ==========================================
          GLOBAL COURIER & VIRTUAL CONSULTATIONS
          ========================================== */}
      <section className="py-20 bg-stone-950 text-white border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-light uppercase text-white">Worldwide Express Courier</h4>
                <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
                  Tracked doorstep delivery to UK, USA, UAE, Canada, Australia, Singapore & beyond.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Ruler className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-light uppercase text-white">Virtual Measurement Card</h4>
                <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
                  Step-by-step video call measuring session recorded on your private profile card.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-light uppercase text-white">Confidentiality Assured</h4>
                <p className="text-stone-400 text-xs leading-relaxed mt-1 font-lato">
                  Private measurement logs, design sketches, and personal details protected securely.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          FAQS SECTION (100% PRESERVED)
          ========================================== */}
      <section className="py-24 bg-white border-b border-[#EFEBE4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-24 bg-[#FAF8F5] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
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
            <a
              href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#141312] text-white hover:bg-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>Enquire via WhatsApp</span>
            </a>

            <Link
              href="/contact#booking"
              className="px-8 py-4 border border-[#141312] text-[#141312] hover:border-[#B38E46] hover:text-[#B38E46] text-xs font-semibold tracking-[0.2em] uppercase transition-colors bg-transparent"
            >
              Book Online Appointment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
