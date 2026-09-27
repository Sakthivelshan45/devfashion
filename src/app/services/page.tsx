import Link from "next/link";
import { Scissors, Sparkles, Heart, Ruler, Award, Globe, ShieldAlert, Phone, HelpCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Premium Services & Fitting Guide",
  description: "Explore custom blouse stitching, bridal wear design, luxury saree styling, virtual measurement sessions, and international shipping options.",
};

const allServices = [
  {
    title: "Custom Blouse Stitching",
    description: "Tailored to your exact contour. Choose neck designs, backless patterns, sweetheart designs, padding, custom hooks, and cotton/silk inner linings.",
    iconName: "Scissors",
    price: "From ₹1,500 / $45"
  },
  {
    title: "Bridal Wear Design",
    description: "Custom bridal lehengas, reception gowns, and wedding blouses. Adorned with premium handcrafts like zardozi, kundan, dabka, and pearl embroidery.",
    iconName: "Sparkles",
    price: "Custom Quote"
  },
  {
    title: "Designer Saree Blouses",
    description: "Sleek cutouts, boat necks, high-necks, collar designs, sheer backs, puff sleeves, and traditional elbow sleeve border designs.",
    iconName: "Heart",
    price: "From ₹2,000 / $60"
  },
  {
    title: "Alteration Services",
    description: "Perfecting fits for pre-purchased outfits, wedding wear adjustments, size updates, sleeve additions, and zipper replacements.",
    iconName: "Ruler",
    price: "From ₹500 / $15"
  },
  {
    title: "Boutique Fashion Consultation",
    description: "Sit down with our designers (in person or online) to plan color palettes, match designer fabrics, and draft silhouette layouts.",
    iconName: "Award",
    price: "Free with Booking"
  },
  {
    title: "Occasion Wear Design",
    description: "Handcrafted ensembles for sangeet, mehendi, receptions, and festivals. Designed in silk, velvet, organza, and net.",
    iconName: "Globe",
    price: "From ₹5,000 / $150"
  },
  {
    title: "Custom Measurements",
    description: "Accurate physical recording or virtual guided measuring. We maintain a secure digital measurement card for all subsequent orders.",
    iconName: "Ruler",
    price: "Complimentary"
  },
  {
    title: "International Order Support",
    description: "Dedicated assistance for global clients. Includes fabric sourcing on request, video calls, secure transactions, and courier delivery.",
    iconName: "Globe",
    price: "Worldwide Shipping"
  }
];

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

export default function ServicesPage() {
  return (
    <div className="w-full bg-white pt-24">
    <section
      className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: "url('/images/dev_fashion/lan_bls25.jpg')",
      }}
    >
      {/* Dark/white overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
          ✦ Bespoke Curation
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
          Boutique Services & Fitting Guide
        </h1>

        <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From custom designer blouses to bridal wear and alterations, discover our
          premium services tailored with precise craftsmanship.
        </p>

      </div>
    </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allServices.map((srv, i) => (
              <div key={i} className="flex flex-col bg-white border border-gold-200/50 p-6 hover:shadow-xl hover:border-gold-500 transition-all duration-300 relative justify-between">
                <div>
                  {/* Icon resolver */}
                  <div className="w-10 h-10 bg-gold-100 text-gold-600 flex items-center justify-center mb-5">
                    {srv.iconName === "Scissors" && <Scissors className="w-5 h-5 stroke-[1.5]" />}
                    {srv.iconName === "Sparkles" && <Sparkles className="w-5 h-5 stroke-[1.5]" />}
                    {srv.iconName === "Heart" && <Heart className="w-5 h-5 stroke-[1.5]" />}
                    {srv.iconName === "Ruler" && <Ruler className="w-5 h-5 stroke-[1.5]" />}
                    {srv.iconName === "Award" && <Award className="w-5 h-5 stroke-[1.5]" />}
                    {srv.iconName === "Globe" && <Globe className="w-5 h-5 stroke-[1.5]" />}
                  </div>
                  
                  <h3 className="font-serif text-lg font-semibold text-stone-900 tracking-wide mb-3">
                    {srv.title}
                  </h3>
                  
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider text-gold-700 uppercase">
                    {srv.price}
                  </span>
                  
                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.title)}#booking`}
                    className="text-[10px] font-bold tracking-widest text-stone-900 hover:text-gold-600 uppercase transition-colors"
                  >
                    Select
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Process Callout */}
      <section className="py-20 bg-stone-950 text-white scroll-mt-20" id="measurement-guide">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block mb-3">
            ✦ Perfect Fit Guarantee
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-wide mb-6">
            Bespoke Virtual Fitting & Measuring
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-8">
            You don't need to visit our studio to get the perfect custom fit. We provide virtual styling and measuring assistance where our stylist guides you live on camera. We can also replicate the measurements of a well-fitting sample blouse or suit mailed to our studio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-stone-300 text-xs text-left mb-8 border-t border-b border-stone-850 py-8">
            <div>
              <span className="block font-serif text-lg text-gold-500 mb-2">1. Schedule Call</span>
              Book your virtual slot. Keep a tape ready. We will guide you or your local tailor live.
            </div>
            <div>
              <span className="block font-serif text-lg text-gold-500 mb-2">2. Secure Card</span>
              Your measurement record is encrypted on your client profile card for future orders.
            </div>
            <div>
              <span className="block font-serif text-lg text-gold-500 mb-2">3. Easy Updates</span>
              Need changes next time? Tell your designer, and we will update your measurement card instantly.
            </div>
          </div>
          <Link
            href="/contact#booking"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-stone-950 hover:bg-gold-500 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            Schedule Measurement Call
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 sm:py-24 bg-white border-t border-gold-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Support & FAQs
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-wide text-stone-950">
              Frequently Asked Questions
            </h2>
            <div className="h-[1.5px] w-16 bg-gold-500 mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gold-200/50 p-6 bg-gold-50/20">
                <h4 className="font-serif text-base font-semibold text-stone-950 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed mt-3 pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
