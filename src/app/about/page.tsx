import Image from "next/image";
import Link from "next/link";
import { Sparkles, Scissors, Heart, Ruler, Globe, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";

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

const processes = [
  { step: "01", title: "Styling Consultation", desc:  "Collaborate with our designers via virtual video calls or in person at our studio. We discuss silhouette layouts, necklines, sleeves, custom cuts, and embroidery options." },
  { step: "02", title: "Fabric & Embellishment Selection", desc: "Choose from our curated collection of premium raw silk, Banarasi, pure organza, chiffon, and velvet. Or send us your own fabrics to stitch." },
  { step: "03", title: "Pattern Drafting & Embroidery", desc: "Every garment is custom-drafted onto paper patterns before cutting. Our skilled local artisans (karigars) handcraft exquisite embroidery (zardozi, beads, aari, and stones)." },
  { step: "04", title: "Perfect Fit Stitching", desc: "Our tailors assemble the pieces with exact alignments, premium inner linings, double stitching, and margins for future alterations. Standard stitching takes 7-10 business days." }
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white pt-24">
      {/* Page Header Banner */}
      <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat" 
      style={{
        backgroundImage: "url('/images/dev_fashion/lan_bls25.jpg')",
      }}>


     {/* Dark/white overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
          ✦ Discover Dev Fashion
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
          Our Legacy & Craftsmanship
        </h1>
        
        <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
         Dedicated to creating flawless bridal wear, custom-tailored designer blouses, and timeless ethnic ensembles that celebrate you.
        </p>
      </div>
        
        
        
{/*         
        <div className="absolute inset-0 bg-pastel-blush/10 rounded-full blur-3xl pointer-events-none translate-y-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ Discover Dev Fashion
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-stone-950 mb-6">
            Our Legacy & Craftsmanship
          </h1>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dedicated to creating flawless bridal wear, custom-tailored designer blouses, and timeless ethnic ensembles that celebrate you.
          </p>
        </div> */}
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
          <div className="flex flex-col space-y-6 sm:space-y-8 text-stone-900">
            {/* <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
              ✦ Bridel Wear Excellence - The Art of Custom Tailoring
            </span> */}
            <h4 className="font-serif text-2xl tracking-wide text-stone-950">
              Welcome to Dev fashion's Boutique!
            </h4>
            <div className="h-[1px] w-16 bg-gold-500" />
            
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
              ✦ Every beautiful creation begins with a dream.
            </span>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify">
              {/* Founded in 2012, Dev Fashion has grown from a local boutique studio into a trusted designer label for clients worldwide. Our vision is simple: to make custom clothing accessible, professional, and perfectly fitted. */}
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
   
     {/* JUST TRY TO MAKE LOOK BETTER*/}

      <section className="py-20 sm:py-28 border-t border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">

            {/* About Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-stone-900">

              <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
                ✦ Meet The Founder, Mrs. Durga Devi
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
                The Journey of Durga Devi Since 2007
              </h2>

              <div className="h-[1px] w-20 bg-gold-500" />

              <p className="text-stone-700 text-xs sm:text-base leading-relaxed text-justify">
               &nbsp;&nbsp;&nbsp;For more than one and half decades, Durga Devi has helped people celebrate life's most meaningful moments.Today, she brings that same passion to designing engagement Blouses that are as personal as the love stories they represent.
                <br />
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
                She loves the idea of expressing herself through blouse design. Designing became a form of therapy for her. Her eye for design and her deep belief in quality over quantity became the soul of this boutique.
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
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">

              <div className="relative aspect-[3/4] border border-gold-200 p-2 bg-white shadow-md mt-8">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/dev_fashion/dd_new.png"
                    alt="Durga Devi - Founder of Dev Fashion"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative aspect-[3/4] border border-gold-200 p-2 bg-white shadow-md">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/dev_fashion/dd_book.png"
                    alt="Dev Fashion Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Design Process Section */}
      <section className="py-20 bg-gold-50/20 border-t border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Precision in Details
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-wide text-stone-950 mb-4">
              How We Create Your Outfits
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-600 text-sm">
              We follow a thorough, high-end process to ensure absolute design precision and perfect fit sizing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((p, i) => (
              <div key={i} className="bg-white border border-gold-200/100 p-8 flex flex-col h-full hover:border-gold-500 hover:shadow-xl transition-all duration-300">
                <span className="font-serif text-3xl font-bold text-gold-500/80 mb-4 block">
                  {p.step}
                </span>
                <h3 className="font-serif text-lg font-semibold tracking-wide text-stone-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mt-auto text-justify">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
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
