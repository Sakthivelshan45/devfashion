// "use client";

import { useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Italiana } from "next/font/google";
import { Scissors, Sparkles, Ruler, Award, MessageSquare, MapPin } from "lucide-react";

/*
  "The Atelier"
  White page with blush and brass details. Left: a layered photo composition (arched studio
  photo, round silk photo with a slowly turning ring of lettering, admissions card) that drifts
  at different depths as the mouse moves. Right: refined headline, a course list with hover
  details, and two actions. Bottom: a slow ribbon of everything you learn.

  Palette: white, ink #2A1B10, crimson #B8324A, brass #C8A96A / deep brass #8F6F2A, blush #FBF1F2
  Images needed in /public/images/dev_fashion/: class2.png and mesherment_kid.jpg
*/

const display = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--df-display",
  display: "swap",
});

const WHATSAPP =
  "https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20joining%20your%20Tailoring%20and%20Aari%20Work%20Course.%20Please%20share%20the%20batch%20timings%20and%20fees.";

const courses = [
  {
    icon: Scissors,
    title: "Blouse stitching and pattern making",
    text: "Perfect necklines, armhole drafting, padding and lining.",
  },
  {
    icon: Sparkles,
    title: "Aari and maggam work",
    text: "Bead work, zardozi, cutwork, thread work and stones.",
  },
  {
    icon: Ruler,
    title: "Custom fitting and alteration",
    text: "Master body measurement and flawless fits.",
  },
  {
    icon: Award,
    title: "Boutique and career guidance",
    text: "Start your own home boutique or designer label.",
  },
];

const ribbon = [
  "Blouse stitching",
  "Pattern making",
  "Aari work",
  "Maggam work",
  "Zardozi",
  "Cutwork",
  "Thread work",
  "Bead work",
  "Custom fitting",
  "Alteration",
  "Boutique guidance",
];

const serif = { fontFamily: "var(--df-display), Georgia, serif" };

export default function CoursesSection() {
  const [p, setP] = useState({ x: 0, y: 0 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    setP({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };
  const onLeave = () => setP({ x: 0, y: 0 });

  const layer = (depth: number) => ({
    transform: `translate3d(${(p.x * depth).toFixed(1)}px, ${(p.y * depth).toFixed(1)}px, 0)`,
    transition: "transform .3s ease-out",
  });

  return (
    <section
      id="courses"
      className={`${display.variable} relative scroll-mt-20 overflow-hidden bg-white pt-16 text-[#2A1B10] sm:pt-24`}
    >
      <style>{`
        @keyframes df-spin { to { transform: rotate(360deg); } }
        @keyframes df-marquee { to { transform: translateX(-50%); } }
        .df-ring { animation: df-spin 60s linear infinite; }
        .df-track { animation: df-marquee 55s linear infinite; }
        .df-ribbon:hover .df-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .df-ring, .df-track { animation: none; }
        }
      `}</style>

      {/* large brass circles in the background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 top-8 h-[38rem] w-[38rem] rounded-full border border-[#C8A96A]/25" />
        <div className="absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full border border-[#C8A96A]/20" />
        <div className="absolute -left-40 bottom-24 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(184,50,74,.07),transparent_70%)]" />
      </div>

      <div className="site-container relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* ───────── Photo composition ───────── */}
          <div className="lg:col-span-6">
            <div
              className="relative mx-auto aspect-[5/6] w-full max-w-md lg:max-w-none"
              onPointerMove={onMove}
              onPointerLeave={onLeave}
            >
              {/* blush backdrop */}
              <div className="absolute inset-x-[5%] bottom-[2%] top-[7%]" style={layer(8)}>
                <div className="h-full w-full rounded-[3rem] bg-gradient-to-br from-[#FCF3F4] via-[#F9E9EC] to-[#F5DFE3] ring-1 ring-[#B8324A]/10" />
              </div>

              {/* arch outlines */}
              <div className="absolute left-[-1%] top-[-4%] w-[64%]" style={layer(14)}>
                <div className="aspect-[3/4.25] rounded-t-[999px] border border-[#C8A96A]/55" />
              </div>
              <div className="absolute left-[-4%] top-[-8%] w-[70%]" style={layer(10)}>
                <div className="aspect-[3/4.25] rounded-t-[999px] border border-[#C8A96A]/30" />
              </div>

              {/* studio photo in an arch */}
              <div className="absolute left-[4%] top-0 w-[56%]" style={layer(30)}>
                <div className="rounded-t-[999px] bg-white p-1.5 shadow-[0_40px_60px_-24px_rgba(42,27,16,.55)] ring-1 ring-[#C8A96A]/70">
                  <div className="relative aspect-[3/4.25] overflow-hidden rounded-t-[999px]">
                    <Image
                      src="/images/dev_fashion/class2.png"
                      alt="Students learning tailoring and aari work at the Dev Fashion studio"
                      fill
                      sizes="(max-width: 1024px) 60vw, 26vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* round silk photo with a turning ring of lettering */}
              <div className="absolute bottom-[3%] right-[7%] w-[50%]" style={layer(56)}>
                <div className="relative aspect-square">
                  <svg
                    viewBox="0 0 200 200"
                    className="df-ring absolute -inset-[17%] h-[134%] w-[134%]"
                    aria-hidden
                  >
                    <defs>
                      <path id="df-ring-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
                    </defs>
                    <text fill="#8F6F2A" fontSize="10.5" style={serif}>
                      <textPath
                        href="#df-ring-path"
                        textLength="548"
                        lengthAdjust="spacing"
                      >
                        DEV FASHION ✦ TAILORING &amp; AARI WORK CLASSES ✦ GANDHIPURAM ✦
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 overflow-hidden rounded-full shadow-[0_35px_55px_-20px_rgba(42,27,16,.6)] ring-[5px] ring-white">
                    <Image
                      src="/images/dev_fashion/mesherment_kid.jpg"
                      alt="Measuring tape, gold thread spools and a needle case resting on brown silk"
                      fill
                      sizes="(max-width: 1024px) 50vw, 24vw"
                      className="object-cover object-[50%_55%]"
                    />
                  </div>
                  <div
                    aria-hidden
                    className="absolute -inset-2 rounded-full border border-[#C8A96A]/70"
                  />
                </div>
              </div>

              {/* admissions card */}
              <div className="absolute right-[1%] top-[8%]" style={layer(44)}>
                <div className="rounded-2xl bg-white/95 px-5 py-4 shadow-[0_28px_44px_-18px_rgba(42,27,16,.5)] ring-1 ring-[#C8A96A]/60">
                  <p className="flex items-center gap-2 text-sm font-semibold text-[#B8324A]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B8324A] opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B8324A]" />
                    </span>
                    Admissions open
                  </p>
                  <p className="mt-1 text-[1.6rem] leading-none" style={serif}>
                    Limited seats
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-[#2A1B10]/65">
                    <MapPin className="h-3 w-3 text-[#B8324A]" aria-hidden />
                    Gandhipuram, Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ───────── Words ───────── */}
          <div className="lg:col-span-6 lg:pl-6">
            <h2
              className="text-[3.3rem] leading-[0.98] tracking-tight text-[#2A1B10] sm:text-[4.8rem] lg:text-[5.2rem]"
              style={serif}
            >
              <span className="block">Tailoring</span>
              <span className="block pl-[0.7em] text-[#8F6F2A]">&amp; Aari Work</span>
              <span className="block">Classes</span>
            </h2>

            <div className="mt-6 flex items-center gap-3" aria-hidden>
              <span className="h-px w-24 bg-gradient-to-r from-[#C8A96A] to-transparent" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#C8A96A]" />
              <span className="h-px w-8 bg-gradient-to-l from-[#C8A96A] to-transparent" />
            </div>

            <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-[#2A1B10]/75">
              We are proud to introduce our Professional Tailoring, Fashion Designing & Aari Embroidery Course,
              designed for those who want to turn their passion for fashion into a valuable skill.
              Begin with the fundamentals and grow step by step into
              advanced techniques.
            </p>

            <ol className="mt-8 max-w-[34rem]">
              {courses.map(({ icon: Icon, title, text }, i) => (
                <li
                  key={title}
                  className="group relative border-b border-[#C8A96A]/45 first:border-t"
                >
                  <div className="flex items-center gap-5 py-4 sm:gap-6">
                    <span
                      className="w-11 shrink-0 text-[2.3rem] leading-none text-[#C8A96A] transition-colors duration-500 group-hover:text-[#B8324A]"
                      style={serif}
                    >
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.5rem] leading-tight text-[#2A1B10]" style={serif}>
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#2A1B10]/65">{text}</p>
                    </div>
                    <Icon
                      className="h-5 w-5 shrink-0 text-[#B8324A]/80 transition-transform duration-500 group-hover:scale-125"
                      aria-hidden
                    />
                  </div>
                  <span
                    aria-hidden
                    className="absolute -bottom-px left-0 h-px w-0 bg-[#B8324A] transition-all duration-700 ease-out group-hover:w-full"
                  />
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8324A] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_30px_-12px_rgba(184,50,74,.6)] ring-1 ring-[#C8A96A] ring-offset-[3px] ring-offset-white transition-colors duration-300 hover:bg-[#2A1B10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8324A]"
              >
                <MessageSquare className="h-4 w-4" aria-hidden />
                Enquire on WhatsApp
              </a>

              <Link
                href="/contact?service=Tailoring%20%26%20Aari%20Work%20Course#booking"
                className="group relative inline-block self-start py-2 text-sm font-semibold text-[#2A1B10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8324A] sm:self-auto"
              >
                Book your admission
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-full bg-[#C8A96A]"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#B8324A] transition-all duration-500 group-hover:w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── Ribbon of everything you learn ───────── */}
      <div className="df-ribbon relative mt-20 border-y border-[#C8A96A]/50 bg-white py-5 sm:mt-24">
        <div className="overflow-hidden">
          <div className="df-track flex w-max items-center whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center"
                aria-hidden={copy === 1}
              >
                {ribbon.map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center">
                    <span className="px-7 text-[1.6rem] text-[#2A1B10]/85" style={serif}>
                      {item}
                    </span>
                    <span className="text-sm text-[#C8A96A]" aria-hidden>
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}