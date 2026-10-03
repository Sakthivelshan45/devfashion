import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Award, Globe, CheckCircle, Phone, ArrowRight, BookOpen, UserCheck, Star } from "lucide-react";
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
    <div className="w-full bg-[#FAF8F5] text-stone-900 pt-24">
      
      {/* 1. Grand Couture Academy Hero Section */}
     <section className="relative py-16 sm:py-38 border-b border-gold-100  text-center bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('/images/dev_fashion/bls_bck.png')",
        }}>


        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <span className="text-[10px] font-bold tracking-widest text-gold-600 block mb-3">
            ✦ DEV FASHION ACADEMY • COIMBATORE ✦
          </span>

          {/* <p className="font-serif italic text-stone-300 text-lg sm:text-xl max-w-3x2 font-light mb-4 tracking-wide text-center leading-relaxed">
            &ldquo;Our goal is to guide and inspire students in creating a work of art&rdquo;
          </p> */}

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
            Dev Fashion School of design
          </h1>
          
          <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"> &ldquo;Our goal is to guide and inspire students in creating a work of art&rdquo;</p>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

          <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            your ultimate destination for premier fashion education in coimbatore. we stands out as the best-in-class for fashion designing, tailoring classes and Aari embroidery instruction.
          </p>

        </div>
      </section>

      {/* 2. Poster Showcase & Institute Identity Section */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#C5A059]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Column: Official Poster Display with Fine Couture Framing */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md bg-[#141312] border border-[#C5A059]/40 p-4 shadow-2xl relative group">
                <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#C5A059]" />
                <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-[#C5A059]" />
                <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-[#C5A059]" />
                <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#C5A059]" />

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
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
            <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C5A059]/40 bg-[#161514] text-[10px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase self-start">
                ✦ 100 Feet Road, Gandhipuram, Coimbatore
              </div>

              <div>
                <span className="text-[10px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
                  ESTABLISHED CRAFTSMANSHIP ACADEMY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-wide text-stone-950">
                  Why Learn With Us?
                </h2>
                <div className="mt-4 h-px w-20 bg-[#C5A059]" />
              </div>

              <p className="text-stone-700 text-sm sm:text-base text-justify leading-relaxed font-light">
                &nbsp;&nbsp;&nbsp;We offer fun and innovative fashion design &amp; tailoring classes designed to spark creativity at any age. Our design school offers fashion classes consisting of sketching, draping, sewing, pattern making, Aari embroidery, blouse stitching, and boutique techniques for beginners &amp; adults. We offer practical studio training in Gandhipuram, Coimbatore and live online classes for global students.
                <br /><br />
                &nbsp;&nbsp;&nbsp;At <strong>Dev Fashion Training Institute</strong>, we bridge the gap between traditional craftsmanship and modern boutique demands. Whether you want to master blouse stitching for your family or establish your own fashion studio, our experienced instructors guide you step by step with personalized attention.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                {whyChooseUs.map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <div key={i} className="bg-white p-5 border border-stone-200/80 shadow-sm flex items-start gap-3 hover:border-[#C5A059]/50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[#161514] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-stone-950 font-serif text-sm font-normal mb-1">{item.title}</strong>
                        <span className="text-stone-600 text-xs leading-relaxed font-light">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Highlights bar */}
              <div className="bg-[#141312] text-white p-5 border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium tracking-[0.2em] uppercase">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  <span>Studio &amp; Online Classes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#C5A059]" />
                  <span>International Exposure</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Courses Offered Grid Section */}
      <section id="courses-offered" className="py-20 sm:py-28 bg-white scroll-mt-20 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-3">
              ✦ COMPREHENSIVE CURRICULUM MODULES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-950 mb-4">
              Courses Offered
            </h2>
            <div className="h-px w-20 bg-[#C5A059] mb-5" />
            <p className="text-stone-600 text-sm font-light">
              Explore our 5 specialized training modules carefully structured for beginners and aspiring fashion entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesOffered.map((course, i) => {
              const CourseIcon = course.icon;
              const romanNums = ["01", "02", "03", "04", "05"];
              return (
                <div key={i} className="bg-[#FAF8F5] border border-stone-200/90 p-8 flex flex-col justify-between hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 relative group">
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-[#161514] text-[#C5A059] flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-stone-950 transition-colors">
                        <CourseIcon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#C5A059] font-medium">{romanNums[i]}</span>
                        <span className="text-[9px] uppercase font-semibold tracking-[0.2em] text-[#C5A059] bg-white border border-[#C5A059]/30 px-3 py-1">
                          {course.tag}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-stone-950 mb-1">
                      {course.title}
                    </h3>
                    
                    <span className="text-xs font-medium text-[#C5A059] uppercase tracking-wider block mb-4">
                      {course.subtitle}
                    </span>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <a
                      href={`https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20module.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-stone-950 group-hover:text-[#C5A059] uppercase transition-colors"
                    >
                      Enquire For Batch Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Book Demo Class Section */}
      <section id="demo-class" className="py-20 sm:py-28 bg-[#FAF8F5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Callout Info Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-3">
                  ✦ LIMITED SEATS PER BATCH
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-950">
                  Book Your Demo Class Today!
                </h2>

                <div className="mt-4 h-px w-20 bg-[#C5A059]" />
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Experience our teaching methodology firsthand! Attend a trial demo session at our Gandhipuram studio or online before enrolling.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-stone-800 font-light">
                <div className="flex items-start gap-3">
                  <span className="text-[#C5A059] text-xs mt-0.5">✦</span>
                  <p><strong>Studio Classes:</strong> 100 Feet Road, Gandhipuram, Coimbatore.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C5A059] text-xs mt-0.5">✦</span>
                  <p><strong>Online Classes:</strong> Interactive live sessions with step-by-step guidance for NRI &amp; outstation students.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C5A059] text-xs mt-0.5">✦</span>
                  <p><strong>Direct Helpline:</strong> Call or WhatsApp <a href="tel:+918098558923" className="text-[#C5A059] font-medium hover:underline">+91 80985 58923</a></p>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2">
                <a
                  href="tel:+918098558923"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141312] text-white hover:bg-[#C5A059] hover:text-stone-950 text-xs font-semibold tracking-[0.25em] uppercase transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
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

