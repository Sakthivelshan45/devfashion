"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Phone, Mail, MapPin, Clock, MessageSquare, Navigation, ArrowUpRight,
  AtSign, Globe, Share2,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BookingForm from "@/components/BookingForm";
import Image from "next/image";

/* ========================================================
   ANIMATION STYLES (kept in this file)
   ======================================================== */
const animationCSS = `
.reveal{opacity:0;transition:opacity .9s cubic-bezier(.22,1,.36,1) var(--d,0ms),transform .9s cubic-bezier(.22,1,.36,1) var(--d,0ms);will-change:transform,opacity}
.reveal[data-dir="up"]{transform:translateY(36px)}
.reveal[data-dir="left"]{transform:translateX(-48px)}
.reveal[data-dir="right"]{transform:translateX(48px)}
.reveal[data-dir="scale"]{transform:scale(.95)}
.reveal[data-dir="line"]{opacity:1;transform:scaleX(0);transform-origin:center}
.reveal.is-visible{opacity:1;transform:none}

.df-card{position:relative;overflow:hidden;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s ease,border-color .4s ease}
.df-card::before{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(197,160,89,.14) 50%,transparent 70%);transform:translateX(-120%);transition:transform .9s ease;pointer-events:none}
.df-card::after{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:#c5a059;transform:scaleY(0);transform-origin:top;transition:transform .45s ease}
.df-card:hover{transform:translateY(-4px) translateX(2px);box-shadow:0 18px 40px -18px rgba(179,142,70,.45)}
.df-card:hover::before{transform:translateX(120%)}
.df-card:hover::after{transform:scaleY(1)}
.df-icon{transition:background .4s ease,color .4s ease,transform .5s cubic-bezier(.22,1,.36,1)}
.df-card:hover .df-icon{background:#c5a059;color:#fff;transform:rotate(-8deg) scale(1.08)}

@keyframes df-float{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-14px,16px) scale(1.15)}}
.df-orb{animation:df-float 7s ease-in-out infinite}
@keyframes df-ring{0%{box-shadow:0 0 0 0 rgba(197,160,89,.55)}70%{box-shadow:0 0 0 16px rgba(197,160,89,0)}100%{box-shadow:0 0 0 0 rgba(197,160,89,0)}}
.df-pulse-btn{animation:df-ring 2.4s ease-out infinite}
.df-pulse-btn:hover{animation:none}
@keyframes df-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
.df-shimmer-text{background:linear-gradient(90deg,#b38e46 0%,#e9d29b 25%,#b38e46 50%,#e9d29b 75%,#b38e46 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:df-shimmer 5s linear infinite}

.df-corner{position:absolute;width:14px;height:14px;border-color:#c5a059;transition:width .7s ease .5s,height .7s ease .5s}
.reveal:not(.is-visible) .df-corner{width:0;height:0}
.df-frame:hover .df-corner{width:26px;height:26px;transition-delay:0s}
@keyframes df-glow{0%,100%{box-shadow:0 25px 50px -12px rgba(0,0,0,.18)}50%{box-shadow:0 25px 60px -12px rgba(197,160,89,.38)}}
.df-frame{animation:df-glow 5s ease-in-out infinite}
@keyframes df-ping{75%,100%{transform:scale(2.4);opacity:0}}
.df-ping{animation:df-ping 1.8s cubic-bezier(0,0,.2,1) infinite}

@media (prefers-reduced-motion:reduce){
  .reveal,.reveal[data-dir]{opacity:1;transform:none;transition:none}
  .df-orb,.df-pulse-btn,.df-shimmer-text,.df-frame,.df-ping{animation:none}
  .df-card,.df-card::before,.df-icon,.df-corner{transition:none}
}
`;

/* ========================================================
   SCROLL REVEAL (kept in this file)
   ======================================================== */
type Direction = "up" | "left" | "right" | "scale" | "line" | "fade";

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children?: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-dir={direction}
      style={{ ["--d" as string]: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=11.0211,76.9614";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF8F5] pt-4 font-sans text-stone-900">
      <style dangerouslySetInnerHTML={{ __html: animationCSS }} />

      {/* ========================================================
          1. EDITORIAL COUTURE HERO BANNER  (unchanged)
          ======================================================== */}

      <section className="relative py-18 sm:py-40 border-b border-gold-100 text-center bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: "url('/images/dev_fashion/contact.png')",
        }}>

        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 boutique-container">

          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ Get In Touch
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white mb-6">
            Contact & Consultation
          </h1>

          <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Comments/questions? We'd love to hear from you!
          </p>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

          <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Reach out to us for anything you need — whether it's custom stitching,
            wedding blouse designs or getting alterations done, we've got you covered.
          </p>
        </div>
      </section>


      {/* ========================================================
    STORE INFO CARDS: HOURS / ABOUT / CONTACT
    ======================================================== */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="boutique-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr_1fr] lg:gap-10">

            {/* ---------- Opening Hours ---------- */}
            <Reveal direction="up" delay={0}>
              <div className="h-full rounded-sm bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
                <h3 className="mb-6 text-2xl font-normal text-stone-900">Opening Hours</h3>

                <ul className="space-y-5">
                  {[
                    { day: "Monday", time: "08:00 - 21:00" },
                    { day: "Tuesday", time: "08:00 - 21:00" },
                    { day: "Wednesday", time: "08:00 - 21:00" },
                    { day: "Thursday", time: "08:00 - 21:00" },
                    { day: "Friday", time: "08:00 - 21:00" },
                    { day: "Saturday", time: "08:00 - 21:00" },
                    { day: "Sunday", time: "11:00 - 17:00" },
                  ].map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="font-semibold uppercase tracking-wide text-stone-950">
                        {h.day}
                      </span>
                      <span className="text-stone-700">{h.time}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-[11px] font-light text-stone-500">
                  Sunday by appointment only.
                </p>
              </div>
            </Reveal>

            {/* ---------- About ---------- */}
            <Reveal direction="up" delay={120}>
              <div className="h-full rounded-sm bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
                <h3 className="mb-6 text-2xl font-normal text-stone0-1900 text-center">🪡 Dev Fashion Bridel Blouse Designer</h3>

                <p className="text-base leading-8 text-stone-800 text-justify">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We look forward to welcoming you to our studio in Coimbatore's Gandhipuram 
                  Street, where you can browse the collection of bridal blouse designs, enjoy personal
                  styling and find your perfect fit with custom stitching made to your
                  measurements.
                </p>
                    <br />
                <p className="text-base leading-8 text-stone-800 text-justify">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our world-class stylists are waiting to connect with you now. 
                  Visit or call a store to book an appointment. We deliver a personalized 
                  white glove experience for Women clients across every occasion and lifestyle.
                </p>
              </div>
            </Reveal>

            {/* ---------- Contact us ---------- */}
            <Reveal direction="up" delay={240}>
              <div className="h-full rounded-sm bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
                <h3 className="mb-6 text-2xl font-normal text-stone-900">Contact us</h3>

                <ul className="space-y-4 text-[15px]">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-stone-800" />
                    <a href="tel:+918098558923" className="text-[#337ab7] hover:underline">
                      +91 80985 58923
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <AtSign className="mt-1 h-4 w-4 shrink-0 text-stone-800" />
                    <a
                      href="mailto:contact@devfashion.com"
                      className="break-all text-[#337ab7] hover:underline"
                    >
                      contact@devfashion.com
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-stone-800" />
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leading-7 text-[#337ab7] hover:underline"
                    >
                      No.37, 9th Street, Tatabad, Gandhipuram, Coimbatore, TamilNadu 641012
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <Globe className="mt-1 h-4 w-4 shrink-0 text-stone-800" />
                    <a
                      href="https://www.devfashion.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#337ab7] hover:underline"
                    >
                      www.devfashion.in
                    </a>
                  </li>

                  <li className="flex items-center gap-3 pt-1">
                    <Share2 className="h-4 w-4 shrink-0 text-stone-800" />
                    <div className="flex gap-2">
                      <a
                        href="https://www.facebook.com/devblouse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex h-12 w-12 items-center justify-center bg-[#eef3fb] text-[#3b5998] transition-colors hover:bg-[#3b5998] hover:text-white"
                      >
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/devfashion_bridalblouse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-12 w-12 items-center justify-center bg-[#eef3fb] text-[#c13584] transition-colors hover:bg-[#c13584] hover:text-white"
                      >
                        <FaInstagram className="h-6 w-6" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* ========================================================
          2. MAIN CONTENT: CONCIERGE DETAILS & BOOKING SUITE
          ======================================================== */}
        <section className="py-20 sm:py-32 w-full overflow-x-clip">
  <div className="boutique-container">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

      {/* Left Column: Heading + Image + WhatsApp */}
      <div className="lg:col-span-5 flex flex-col space-y-8 sm:space-y-10">

        <div>
          <Reveal delay={0}>
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#B38E46] uppercase text-center block mb-2">
              ✦ LUXURY ATELIER CONCIERGE
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif text-2xl sm:text-4xl font-light text-stone-950 uppercase tracking-wide">
              VIP styling and shopping
            </h2>
          </Reveal>
          <Reveal direction="line" delay={300}>
            <div className="h-[1.5px] w-20 bg-[#C5A059] mx-auto mt-3" />
          </Reveal>
        </div>

        {/* Boutique image (replaces the contact cards) */}
        <Reveal direction="left" delay={100}>
          <div className="relative aspect-[4/5] border border-gold-300 p-3 bg-white shadow-2xl max-w-lg mx-auto w-full">
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src="/images/dev_fashion/tailaring_course1.png"
                  alt="Dev Fashion Boutique Tailoring Craft"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
          </div>
        </Reveal>
      </div>

      {/* Form Column with Luxury Gold Framing */}
      <div className="lg:col-span-7 scroll-mt-24" id="booking">
        <div className="text-center mb-6">
          <Reveal>
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#B38E46] uppercase block mb-2">
              ✦ RESERVATION DESK
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="font-serif text-2xl sm:text-4xl font-light text-stone-950 uppercase tracking-wide">
              Private Appointment 
            </h3>
          </Reveal>
          <Reveal direction="line" delay={300}>
            <div className="h-[1.5px] w-20 bg-[#C5A059] mx-auto mt-3" />
          </Reveal>
        </div>
        <br />
        <Reveal direction="right" delay={200}>
          <div className="df-frame bg-white border border-[#E5D9C5] p-3 sm:p-6 relative">
            <div className="df-corner top-2 left-2 border-t-2 border-l-2" />
            <div className="df-corner top-2 right-2 border-t-2 border-r-2" />
            <div className="df-corner bottom-2 left-2 border-b-2 border-l-2" />
            <div className="df-corner bottom-2 right-2 border-b-2 border-r-2" />
          
            <BookingForm />
          </div>
        </Reveal>
      </div>

    </div>
  </div>
</section>



        {/* ========================================================
    WHATSAPP CONCIERGE (SEPARATE SECTION)
    ======================================================== */}
<section className="w-full bg-[#FAF8F5] pb-20 sm:pb-28">
  <div className="boutique-container">
    <Reveal direction="scale" delay={100}>
      <div className="relative mx-auto max-w-5xl overflow-hidden border border-[#C5A059]/40 bg-[#141312] p-8 text-white shadow-xl sm:p-12">
        <div className="df-orb pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#C5A059]/15 blur-2xl" />
        <div className="df-orb pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#C5A059]/10 blur-2xl [animation-delay:-3s]" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              ✦ INSTANT CLIENT DESK
            </span>
            <h4 className="mb-3 font-serif text-2xl font-light text-white sm:text-3xl">
              Need Instant Answers?
            </h4>
            <p className="text-xs font-light leading-relaxed text-stone-300 sm:text-sm">
              Chat directly with our styling team on WhatsApp for price estimates,
              fabric suggestions and quick slot confirmations.
            </p>
          </div>

          <a
            href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20have%20a%20tailoring%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="df-pulse-btn group/btn inline-flex shrink-0 items-center gap-3 bg-[#C5A059] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-stone-950 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            <MessageSquare className="h-4 w-4 transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-125" />
            <span>Chat with Stylist</span>
            <ArrowUpRight className="-ml-1 h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
          </a>
        </div>
      </div>
    </Reveal>
  </div>
</section>










      {/* ========================================================
          3. FULL-WIDTH STUDIO MAP INTEGRATION
          ======================================================== */}
      <section className="w-full border-t border-[#E5D9C5] relative bg-stone-100">
        <div className="bg-[#141312] text-white py-3 border-b border-[#C5A059]/30">
          <div className="boutique-container flex flex-wrap items-center justify-between gap-2 text-xs font-light">
            <div className="flex items-center gap-2 text-[#C5A059]">
              <span className="relative flex h-2 w-2">
                <span className="df-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C5A059]" />
              </span>
              <Navigation className="w-3.5 h-3.5" />
              <span className="tracking-[0.2em] uppercase text-[10px] font-semibold">Studio Coordinates</span>
            </div>
            <span className="text-stone-300 text-[11px] font-mono">
              No.37, 9th Street, Tatabad, Gandhipuram, Coimbatore &bull; 11.0211&deg; N, 76.9614&deg; E
            </span>
          </div>
        </div>

        <Reveal direction="scale">
          <div className="relative h-[450px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2334044079093!2d76.96140750957036!3d11.02110698909764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859e23b869429%3A0x2852f671c5d9772e!2sDev%20Bridal%20Blouse%20Designer!5e0!3m2!1sen!2sin!4v1781601054595!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dev Fashion Studio Map Location"
            />

            {/* Floating directions button */}
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute bottom-6 left-6 inline-flex items-center gap-2.5 px-5 py-3 bg-[#141312]/95 border border-[#C5A059]/50 text-white text-[10px] font-semibold tracking-[0.25em] uppercase shadow-xl backdrop-blur transition-all duration-300 hover:bg-[#C5A059] hover:text-stone-950 hover:-translate-y-1"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C5A059] transition-colors group-hover:text-stone-950" />
              Get Directions
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </section>

    </div>
  );
}











