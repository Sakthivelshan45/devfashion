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
               Our work is guided by a belief that true beauty lies in precision, care and imagination. <b> Each Creation is created with a commitment to excellence and a respect for the women who wear it.</b>
              <br /> <br />
              &nbsp;&nbsp;&nbsp;At Dev Fashion, we don't simply design clothes.
              We listen to a woman's vision, understand her style and turn her imagination into something she can proudly wear.
      
            </p>

            <h4 className="font-serif text-2xl tracking-wide text-stone-950">
              What We Specialize In!
            </h4>
        
            <div className="h-[1px] w-16 bg-gold-500" />

            
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
              ✦ Creating the impossibly beautiful
            </span>

            <p className="text-stone-600 text-xs sm:text-base leading-relaxed text-justify">
              &nbsp;&nbsp;&nbsp;Aari Embroidery is a central strength of Dev fashion. The team works across bridal blouses, sarees, Salwars, gowns, lehengas, Kids wear, Mens wear and other garments where detailed handwork and design execution matter.
              <br /> <br />
              &nbsp;&nbsp;&nbsp;At the same time, Dev Fashion is not limited to bridal wear. It supports women across three major needs: everyday and professional clothing, bridal and designer clothing, and red-carpet and concept clothing.
              <br /><br />
              &nbsp;&nbsp;&nbsp;Our mission is to provide our customers with stunning, high-quality attire that makes every occasion special. 
               our Boutique is a Bridel haven of cool elegance and welcoming calm. Our friendly staff are all trained and highly skilled professionals 
               with a shared passion for – and knowledge of – styling and cut.
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















      <section className="py-8 sm:py-0 border-b border-gold-100 bg-cover bg-center">
        {/* Outer wrapper: controls the left/right gap */}
        <div className="max-w-8x2 mx-auto px-4 sm:px-6 lg:px-15">

          {/* Image card */}
          <div
            className="relative overflow-hidden rounded-2x2 text-center bg-cover bg-center bg-fixed bg-no-repeat py-16 sm:py-50 shadow-lg"
            style={{
              backgroundImage: "url('/images/dev_fashion/durga_priya1.png')",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10">
              <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
                ✦ DEV FASHION · A CELEBRATION OF WOMANHOOD · DURGA DEVI ✦
              </span>

              <h1 className="font-serif text-2xl sm:text-5xl font-bold tracking-wide text-white mb-6">
                Her Style. Her Strength. Her Story.
              </h1>

              <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                She Is Not Made to Fit In. She Is Made to Stand Out.
              </p>

              <div className="h-[1.5px] w-20 bg-gold-500 mx-auto my-6" />


            </div>
          </div>

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
                &nbsp;&nbsp;&nbsp;Nothing beautiful should ever be lost – so our founder Durga Devi believes. For more than one and half decades, Durga Devi has helped people celebrate life's most meaningful moments.Today, she brings that same passion to designing engagement Blouses that are as personal as the love stories they represent.
                <br /> <br />
                &nbsp;&nbsp;&nbsp;
                her evolution as a fashion designer is rooted in her unyielding passion and deep respect for stitching. she taught herself embroidery and gradually built a design boutique through her sheer dedication, perseverance and artistry.
                Above all, her creations are for women who want to express themselves with quiet confidence and refined individuality.
                <br /><br />
                &nbsp;&nbsp;&nbsp;she fell in love with tailoring and design. It captured her attention and opened the door to creativity. Subconsciously, she developed a strong interest in art and fashion as forms of self-expression.
                <br /><br />
                &nbsp;&nbsp;&nbsp;However, due to the circumstances of life at the time, she found herself working multiple minimum-wage jobs and later becoming a mother. Yet, she couldn’t ignore the creative world that had been quietly growing in the back of her mind. Eventually, she took the leap and entered the world of fashion that had been calling her for so long.
                <br /> <br />
                &nbsp;&nbsp;&nbsp;She started her career as a tailor in 2007 and she hasn’t looked back since.
                She loves the idea of expressing herself through blouse design.
                She has worked for some of the finest brands, including Classic polo. Now, after years of experience in coimbator’s Garment industry, Durga Devi welcomes the opportunity to share her skills and expertise with others as a fashion design instructor serving coimbatore.
                Designing became a form of therapy for her. Her eye for design and her deep belief in quality over quantity became the soul of this boutique.
              </p>
              <p className="text-stone-700 text-xs sm:text-base leading-relaxed "> <strong>
                The dream of one day creating her magnum opus continues to drive her forward.</strong>
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




      <section className="border-b border-gold-100 py-8 sm:py-16">

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* Same wide photo on every screen size, zooms on hover */}
          <div className="group relative aspect-[16/9] overflow-hidden shadow-lg sm:aspect-[2/1]">

            {/* Photo */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: "url('/images/dev_fashion/durga_temple.png')" }}
            />

            {/* Soft shade on the RIGHT side only, so the text is readable and her face stays untouched */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[65%] bg-gradient-to-l from-black/80 via-black/45 to-transparent" />

            {/* Thin gold frame */}
            {/* <div className="pointer-events-none absolute inset-2 border border-gold-300/60 sm:inset-5" /> */}


            {/* Text in the bottom-right corner */}
            <div className="absolute bottom-4 right-4 w-[54%] text-left sm:bottom-10 sm:right-10 sm:w-[44%] lg:bottom-14 lg:right-14 lg:w-[38%] lg:max-w-xl">

              {/* OUR ROOTS · OUR ARTISTRY · OUR PURPOSE (hidden on the smallest phones to save space) */}
              <p className="tr-1 mb-2 hidden flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-bold uppercase tracking-widest text-gold-400 sm:mb-3 sm:flex lg:text-[10px]">
                {["Our Roots", "Our Artistry", "Our Purpose"].map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="h-1 w-1 rotate-45 bg-gold-400" aria-hidden />}
                    {t}
                  </span>
                ))}
              </p>

              <h2 className="tr-2 font-serif text-base font-bold leading-tight tracking-wide text-white sm:text-2xl lg:text-4xl">
                Rooted in Tradition.
                <br />
                Created for Her.
              </h2>

              <div className="tr-line my-2 h-[1.5px] w-10 bg-gold-500 sm:my-4 sm:w-14" />

              {/* Paragraph from tablet size up */}
              <p className="tr-3 hidden text-xs leading-relaxed text-stone-200 md:block lg:text-sm lg:leading-[1.8]">
                Inspired by the richness of South Indian heritage, we honour the art of
                Aari embroidery and the beauty of handcrafted design. Our purpose is to
                keep this artistry alive, make it more accessible, and empower women to
                discover the confidence and creativity within themselves.
              </p>

              <p className="tr-4 font-serif text-[11px] italic leading-snug text-gold-300 sm:text-sm md:mt-4 lg:text-lg">
                Every stitch carries a story.
                <br />
                Every woman deserves to shine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


