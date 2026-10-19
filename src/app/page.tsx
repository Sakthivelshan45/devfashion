"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Heart, Award, Sparkles, Scissors, Globe, Lock, Truck, Ruler, CheckCircle, MessageSquare } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GalleryLightbox from "@/components/GalleryLightbox";
import GalleryLightbox_copy from "@/components/GalleryLightbox_copy";
import BookingForm from "@/components/BookingForm";
import Landingpage from "@/components/landingpage";
import CoursesSection from "@/components/CoursesSection";



const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "25K+", label: "Bespoke Designs Delivered" },
  { value: "5K+", label: "Bridal Orders Completed" },
  { value: "2K+", label: "International Clients" },
];


const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
};


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

const bridalCampaignImages = [
  { src: "/images/dev_fashion/main.jpeg", alt: "Bridal Couture Outfit" },
  { src: "/images/dev_fashion/deeps2.jpeg", alt: "Bridal Couture Outfit" },
  { src: "/images/dev_fashion/sadhana_main.png", alt: "Dev Fashion Bridal Silk Couture" },
  { src: "/images/dev_fashion/deepika1.jpg", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_red2.png", alt: "Royal Crimson Zardozi Blouse" },
  { src: "/images/dev_fashion/ammu.jpeg", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_blue.png", alt: "Sapphire Velvet Couture" },
  { src: "/dev_hero.png", alt: "Dev Fashion Master Designer Outfit" },

  { src: "/images/dev_fashion/angel1.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_beach1.jpg", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_blue2.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_red_chudi.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_smile_flowers.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_smile_udha.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_smile5.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_smile6.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_temple.png", alt: "Sapphire Velvet Couture" },
  { src: "/images/dev_fashion/sadhana_vilet.png", alt: "Sapphire Velvet Couture" },

];

const customBlouseImages = [
  { src: "/images/dev_fashion/aari1.jpg", alt: "Sandhana Orange Designer Blouse" },
  { src: "/images/dev_fashion/aari2.jpg", alt: "Sandhana Crimson Silk Blouse" },
  { src: "/images/dev_fashion/aari3.jpg", alt: "Sandhana Custom Fit Blouse" },
  { src: "/images/dev_fashion/aari4.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/aari6.jpg", alt: "Sandhana Custom Fit Blouse" },
  { src: "/images/dev_fashion/aari7.jpg", alt: "Sandhana Custom Fit Blouse" },
  { src: "/images/dev_fashion/aari8.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/featured-aari.webp", alt: "Sandhana Designer Blouse Fit" },


  { src: "/images/dev_fashion/aarold_blouse1.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/old_blouse2.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/old_blouse3.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/old_blouse4.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/old_blouse15.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/custom_drs1.jpg", alt: "Sandhana Designer Blouse Fit" },



  { src: "/images/dev_fashion/bls_port1.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port2.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port3.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port4.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port5.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port6.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port7.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port8.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port9.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port10.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port11.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port12.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port13.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port14.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port15.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port16.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port17.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port18.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port19.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port20.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port21.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port22.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port23.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port24.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port25.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port26.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port27.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port28.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port29.jpg", alt: "Sandhana Designer Blouse Fit" },
  { src: "/images/dev_fashion/bls_port30.jpg", alt: "Sandhana Designer Blouse Fit" },
];

export default function HomePage() {
  const [primaryIndex, setPrimaryIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrimaryIndex((prev) => (prev + 1) % bridalCampaignImages.length);
      setSecondaryIndex((prev) => (prev + 1) % customBlouseImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative bg-white">
      {/* 1. Hero Section — High-Fashion Luxury Editorial */}
      <section className="py-2 w-full">
        <Landingpage />
      </section>

      {/* 2. About Section */}




      {/* ─── 2. The section ─── */}
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
                Phone: <a href="tel:+919025751328" className="hover:text-gold-600 transition-colors">+91 80985 58923</a><br />
                WhatsApp Support: <a href="https://wa.me/919025751328" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">Chat Online</a>
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
    </div>
  );
}





