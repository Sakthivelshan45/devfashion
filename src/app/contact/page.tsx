"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation, ArrowUpRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";

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
          2. MAIN CONTENT: CONCIERGE DETAILS & BOOKING SUITE
          ======================================================== */}
      <section className="py-20 sm:py-32 w-full overflow-x-clip">
        <div className="boutique-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col space-y-8 sm:space-y-10">

              <div>
                <Reveal delay={0}>
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-[#B38E46] uppercase block mb-2">
                    ✦ LUXURY ATELIER CONCIERGE
                  </span>
                </Reveal>
                <Reveal delay={120}>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-950 tracking-wide uppercase leading-tight">
                    VIP styling and <br />
                    <span className="df-shimmer-text italic font-serif font-normal normal-case">
                      shopping services 🪡
                    </span>
                  </h2>
                </Reveal>
                <Reveal direction="line" delay={300}>
                  <div className="h-[1.5px] w-16 bg-[#C5A059] mt-4 mb-6 origin-left" />
                </Reveal>
                <Reveal delay={400}>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify font-light">
                    Our world-class stylists are waiting to connect with you now. Visit or call a store to book an appointment.
                    We deliver a personalized white glove experience for Women clients across every occasion and lifestyle.
                  </p>
                </Reveal>
              </div>

              {/* Contact cards — staggered slide-in */}
              <div className="space-y-4 text-sm text-stone-700">

                {/* Location */}
                <Reveal direction="left" delay={0}>
                  <div className="df-card group flex items-start gap-4 p-5 bg-white border border-[#E5D9C5] hover:border-[#C5A059] shadow-xs">
                    <div className="df-icon w-11 h-11 bg-[#FAF8F5] border border-[#C5A059]/40 text-[#B38E46] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-stone-950 text-base mb-1">Our Location</h4>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                        No.37, 9th Street,<br />
                        Tatabad, Gandhipuram, Coimbatore<br />
                        TamilNadu 641012, India
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Direct Call */}
                <Reveal direction="left" delay={120}>
                  <div className="df-card group flex items-start gap-4 p-5 bg-white border border-[#E5D9C5] hover:border-[#C5A059] shadow-xs">
                    <div className="df-icon w-11 h-11 bg-[#FAF8F5] border border-[#C5A059]/40 text-[#B38E46] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-stone-950 text-base mb-1">Direct Call</h4>
                      <p className="text-stone-900 text-sm font-semibold tracking-wider">
                        <a href="tel:+918098558923" className="hover:text-[#B38E46] transition-colors">+91 80985 58923</a>
                      </p>
                      <p className="text-[11px] text-stone-500 mt-1 font-light">Styling inquiries &amp; alterations follow-up, We&apos;re just a call/message away.</p>
                    </div>
                  </div>
                </Reveal>

                {/* Send Email */}
                <Reveal direction="left" delay={240}>
                  <div className="df-card group flex items-start gap-4 p-5 bg-white border border-[#E5D9C5] hover:border-[#C5A059] shadow-xs">
                    <div className="df-icon w-11 h-11 bg-[#FAF8F5] border border-[#C5A059]/40 text-[#B38E46] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-stone-950 text-base mb-1">Send Email</h4>
                      <p className="text-stone-900 text-sm font-medium">
                        <a href="mailto:contact@devfashion.com" className="hover:text-[#B38E46] transition-colors">contact@devfashion.com</a>
                      </p>
                      <p className="text-[11px] text-stone-500 mt-1 font-light">Business partnerships &amp; bridal lookbook inquiries</p>
                    </div>
                  </div>
                </Reveal>

                {/* Operating Hours */}
                <Reveal direction="left" delay={360}>
                  <div className="df-card group flex items-start gap-4 p-5 bg-white border border-[#E5D9C5] hover:border-[#C5A059] shadow-xs">
                    <div className="df-icon w-11 h-11 bg-[#FAF8F5] border border-[#C5A059]/40 text-[#B38E46] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-stone-950 text-base mb-1">Operating Hours</h4>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                        Monday - Saturday: 8:00 AM - 9:00 PM<br />
                        Sunday: 11:00 AM - 5:00 PM (Appointments Only)
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* WhatsApp Concierge Card */}
              <Reveal direction="scale" delay={100}>
                <div className="bg-[#141312] text-white border border-[#C5A059]/40 p-6 sm:p-8 relative overflow-hidden shadow-xl">
                  <div className="df-orb absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="df-orb absolute -bottom-10 -left-10 w-28 h-28 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none [animation-delay:-3s]" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                      ✦ INSTANT CLIENT DESK
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-light text-white mb-2">
                      Need Instant Answers?
                    </h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      Chat directly with our styling team on WhatsApp for price estimates, fabric suggestions and quick slot confirmations.
                    </p>
                    <a
                      href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20have%20a%20tailoring%20enquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="df-pulse-btn group/btn inline-flex items-center gap-3 px-6 py-3.5 bg-[#C5A059] hover:bg-white text-stone-950 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-125 group-hover/btn:-rotate-12" />
                      <span>Chat with Stylist</span>
                      <ArrowUpRight className="w-4 h-4 -ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
                    </a>
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

              <Reveal direction="right" delay={200}>
                <div className="df-frame bg-white border border-[#E5D9C5] p-3 sm:p-6 relative">
                  {/* Corner Gold Accents — draw in on reveal, expand on hover */}
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