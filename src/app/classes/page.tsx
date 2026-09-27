import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Award, Globe, CheckCircle, Phone, MessageSquare, ArrowRight, BookOpen, Clock, UserCheck, Star } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Fashion Design & Tailoring Classes in Coimbatore | Dev Fashion Training Institute",
  description: "Join Dev Fashion Training Institute in Gandhipuram, Coimbatore. Courses offered: Pattern Making, Aari Work, Blouse Stitching, Basics of Tailoring, and Advanced Boutique Techniques. Book your demo class today!",
};

const coursesOffered = [
  {
    title: "Pattern Making",
    subtitle: "Drafting & Garment Construction",
    description: "Master body measurement techniques, paper pattern drafting, neckline calculations, armholes, sleeve contours, and structural garment balance.",
    icon: Scissors,
    tag: "Core Skill"
  },
  {
    title: "Aari Work & Embroidery",
    subtitle: "Traditional & Bridal Hand Embroidery",
    description: "Hands-on training in Aari needle work, zardozi embroidery, bead work, stone embellishments, cutwork, thread work, and bridal neck border detailing.",
    icon: Sparkles,
    tag: "Most Popular"
  },
  {
    title: "Blouse Stitching",
    subtitle: "Bridal & Designer Blouse Tailoring",
    description: "Learn complete stitching of South Indian bridal blouses, padded blouses, princess cut, sweetheart necklines, backless designs, and lining attachment.",
    icon: Star,
    tag: "High Demand"
  },
  {
    title: "Basics of Tailoring",
    subtitle: "Sewing Machine & Fabric Essentials",
    description: "Fundamental training for beginners: sewing machine operations, needle handling, seam types, fabric cutting, hem finishing, and basic garment assembly.",
    icon: BookOpen,
    tag: "Beginner Friendly"
  },
  {
    title: "Advanced Boutique Techniques",
    subtitle: "Commercial Finishing & Entrepreneurship",
    description: "Learn high-end boutique finishing, client fitting alterations, price calculation, fabric sourcing, and guidance to start your own successful boutique or label.",
    icon: Award,
    tag: "Career Track"
  }
];

const whyChooseUs = [
  { title: "17+ Years Experience", desc: "Learn directly from master artisans with over 17 years of successful boutique and bridal design experience.", icon: Award },
  { title: "Global Client Exposure", desc: "Gain insights from our experience serving clients across 10+ countries (USA, UK, UAE, Canada, Australia).", icon: Globe },
  { title: "Practical Studio Training", desc: "100% hands-on practical stitching and drafting practice in a real studio setup.", icon: UserCheck },
  { title: "Industry-Oriented Learning", desc: "Curriculum designed to turn your creativity into a commercial boutique career.", icon: CheckCircle }
];

export default function ClassesPage() {
  return (
    <div className="w-full bg-white pt-20">
      {/* 1. Fashion School Style Hero Banner (Karen's School of Fashion Style) */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center text-center text-white overflow-hidden bg-stone-950 font-lato">
        {/* Background Image: Sewing Box, Thimble, Pins, Pink Thread & Magenta Silk */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/images/dev_fashion/new_2.jpg"
            alt="Dev Fashion Design School Studio & Sewing Background"
            fill
            className="object-cover object-center scale-100"
            priority
          />
          {/* Dark Overlay matching fashionschoolnj.com */}
          <div className="absolute inset-0 bg-black/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center">
          {/* Quote Header (Fashion School NJ Style) */}
          <p className="font-lato font-normal text-lg sm:text-0xl text-stone-10 mb-2 tracking-wide text-center drop-shadow-md">
            ``Our goal is to guide and inspire students in creating a work of art``
          </p>

          {/* Main Title (Thin Uppercase Lato) */}
          <h3 className="font-lato font-light text-3xl sm:text-5x3 lg:text-6x4 tracking-[0.10em] uppercase text-white my-3 drop-shadow-lg leading-tight">
            DEV FASHION DESIGN SCHOOL
          </h3>

          {/* Description Paragraph (Lato) */}
          <p className="font-lato font-normal text-sm sm:text-base text-stone-100 max-w-3x2 leading-relaxed my-3 text-center drop-shadow">
            We offer fun and innovative fashion design & tailoring classes designed to spark creativity at any age. Our design school offers fashion classes consisting of sketching, draping, sewing, pattern making, Aari embroidery, blouse stitching, and boutique techniques for beginners & adults. We offer practical studio training in Gandhipuram, Coimbatore and live online classes for global students. Private lessons and boutique startup guidance are also available.
          </p>

          {/* Dual Vibrant Magenta Pink Buttons (Matching fashionschoolnj.com screenshot) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <a
              href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20want%20to%20book%20a%20Demo%20Class%20for%20the%20Fashion%20Design%20Course."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#e748b8] hover:bg-[#c9369d] text-white font-lato font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 rounded-none"
            >
              LEARN MORE
            </a>
            
            <a
              href="#demo-class"
              className="px-8 py-4 bg-[#e748b8] hover:bg-[#c9369d] text-white font-lato font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 rounded-none"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* 2. Poster Showcase & Institute Identity Section */}
      <section className="py-20 sm:py-28 bg-gold-50/30 border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Column: Official Poster Display */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] border-2 border-gold-300 p-3 bg-white shadow-2xl overflow-hidden group">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/dev_fashion/institute_poster.png"
                    alt="Dev Fashion Training Institute Official Course Poster"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Why Choose Us & Key Specs */}
            <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8 text-stone-900">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gold-300 bg-gold-100/35 text-[10px] font-semibold tracking-widest text-gold-700 uppercase rounded-full self-start">
                ✦ 100 Feet Road, Gandhipuram, Coimbatore
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-stone-950">
                  Why Learn With Us?
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-16 bg-gold-500" />
                  <span className="text-gold-500 text-xs">✦</span>
                  <span className="h-px w-8 bg-gold-300" />
                </div>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                At <strong>Dev Fashion Training Institute</strong>, we bridge the gap between traditional craftsmanship and modern boutique demands. Whether you want to master blouse stitching for your family or establish your own fashion studio, our experienced instructors guide you step by step with personalized attention.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                {whyChooseUs.map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <div key={i} className="bg-white p-4 border border-gold-200 shadow-sm flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-stone-950 font-semibold mb-0.5">{item.title}</strong>
                        <span className="text-stone-600 leading-normal">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Highlights bar */}
              <div className="bg-stone-900 text-white p-5 border border-gold-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span>Studio & Online Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold-400" />
                  <span>International Exposure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Courses Offered Grid Section */}
      <section id="courses-offered" className="py-20 sm:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Comprehensive Modules
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Courses Offered
            </h2>
            <div className="h-[1.5px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-600 text-sm">
              Explore our 5 specialized training modules carefully structured for beginners and aspiring fashion entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesOffered.map((course, i) => {
              const CourseIcon = course.icon;
              return (
                <div key={i} className="bg-white border border-gold-200/80 p-8 flex flex-col justify-between hover:border-gold-500 hover:shadow-xl transition-all duration-300 relative group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-gold-100 text-gold-700 flex items-center justify-center rounded-none group-hover:bg-stone-900 group-hover:text-gold-400 transition-colors">
                        <CourseIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 bg-gold-50 border border-gold-200 px-3 py-1">
                        {course.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-950 mb-1">
                      {course.title}
                    </h3>
                    
                    <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mb-4">
                      {course.subtitle}
                    </span>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <a
                      href={`https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20module.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-stone-900 group-hover:text-gold-600 uppercase transition-colors"
                    >
                      Enquire For Batch Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Book Demo Class Section */}
      <section id="demo-class" className="py-20 sm:py-28 bg-gold-50/25 border-t border-b border-gold-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Callout Info Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
              <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
                ✦ Limited Seats Per Batch
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
                Book Your Demo Class Today!
              </h2>

              <div className="h-[1px] w-20 bg-gold-500" />

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Experience our teaching methodology firsthand! Attend a trial demo session at our Gandhipuram studio or online before enrolling.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-stone-800">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Studio Classes:</strong> 100 Feet Road, Gandhipuram, Coimbatore.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Online Classes:</strong> Interactive live sessions with step-by-step guidance for NRI & outstation students.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Direct Helpline:</strong> Call or WhatsApp <a href="tel:+918098558923" className="text-gold-700 font-bold hover:underline">+91 80985 58923</a></p>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2">
                <a
                  href="tel:+918098558923"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call Helpline: +91 80985 58923
                </a>
              </div>
            </div>

            {/* Booking Form Column */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
