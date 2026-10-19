"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Award,
  Globe,
  CheckCircle,
  Phone,
  ArrowRight,
  BookOpen,
  UserCheck,
  Star,
  Clock,
  MapPin,
  X,
  ChevronRight,
  GraduationCap,
  Eye,
  Check,
  Zap,
  Sparkle
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: any;
  tag: string;
  duration: string;
  level: string;
  highlights: string[];
  syllabus: string[];
  careerOpportunities: string[];
}

const coursesOffered: Course[] = [
  {
    id: "pattern-making",
    title: "Pattern Making",
    subtitle: "Drafting & Garment Construction",
    description: "Master body measurement techniques, paper pattern drafting, neckline calculations, armholes, sleeve contours, and structural garment balance.",
    image: "/images/dev_fashion/ptn_mking.png",
    icon: Scissors,
    tag: "Core Skill",
    duration: "4 to 6 Weeks",
    level: "Beginner to Advanced",
    highlights: [
      "Precision body measurement & anatomical drafting",
      "Standard & custom size paper pattern creation",
      "Neckline, armhole & sleeve contour calculations",
      "Garment balance, dart manipulation & fabric allowance"
    ],
    syllabus: [
      "Introduction to drafting tools & body measurements",
      "Basic bodice block & skirt pattern drafting",
      "Sleeve variations (puff, bell, cap, raglan)",
      "Collar drafting (Peter Pan, Mandarin, Shirt collar)",
      "Dart manipulation & contour fitting for luxury wear"
    ],
    careerOpportunities: [
      "Pattern Master / Drafter in Fashion Houses",
      "Freelance Garment Pattern Designer",
      "Boutique Owner & Custom Apparel Specialist"
    ]
  },
  {
    id: "aari-work",
    title: "Aari Work & Embroidery",
    subtitle: "Traditional & Bridal Hand Embroidery",
    description: "Hands-on training in Aari needle work, zardozi embroidery, bead work, stone embellishments, cutwork, thread work, and bridal neck border detailing.",
    image: "/images/classes/aari_work.jpg",
    icon: Sparkles,
    tag: "Most Popular",
    duration: "6 to 8 Weeks",
    level: "All Skill Levels",
    highlights: [
      "Mastering Aari needle control & frame setup",
      "Zardozi, bullion, metallic & silk thread work",
      "Bead, seqin, stone, and Kundan embellishments",
      "Bridal blouse neck borders & heavy elbow sleeve work"
    ],
    syllabus: [
      "Tracing methods & frame fabric tensioning",
      "Chain stitch, water stitch & load stitches",
      "Sugar bead, tubelight & stone chain placement",
      "Zardozi spring work & 3D floral motifs",
      "Cutwork, mirror work & grand bridal neckline design"
    ],
    careerOpportunities: [
      "Bridal Embroidery Studio Founder",
      "Custom Aari Artisan for High-End Designers",
      "Home-Based Embroidery Entrepreneur"
    ]
  },
  {
    id: "blouse-stitching",
    title: "Blouse Stitching",
    subtitle: "Bridal & Designer Blouse Tailoring",
    description: "Learn complete stitching of South Indian bridal blouses, padded blouses, princess cut, sweetheart necklines, backless designs, and lining attachment.",
    image: "/images/classes/blouse_stitching.jpg",
    icon: Star,
    tag: "High Demand",
    duration: "4 to 6 Weeks",
    level: "Intermediate",
    highlights: [
      "South Indian classic & designer blouse tailoring",
      "Princess cut, 4-tuck cut, and padded cup inserts",
      "Trendy necklines (Sweetheart, Deep V, Backless)",
      "Perfect armhole fitting, piping & lining finishing"
    ],
    syllabus: [
      "Measurement taking for different body types",
      "Fabric cutting with seamless seam allowances",
      "Princess cut stitching & cup pad padding insertion",
      "Dori, latkan attachment, piping & thread edging",
      "Hooks, eyelets, side zips & final fitting adjustments"
    ],
    careerOpportunities: [
      "Specialized Bridal Blouse Tailor",
      "Custom Blouse Studio Owner",
      "High-Volume Boutique Stitching Partner"
    ]
  },
  {
    id: "basics-of-tailoring",
    title: "Basics of Tailoring",
    subtitle: "Sewing Machine & Fabric Essentials",
    description: "Fundamental training for beginners: sewing machine operations, needle handling, seam types, fabric cutting, hem finishing, and basic garment assembly.",
    image: "/images/dev_fashion/basic_tailoring.png",
    icon: BookOpen,
    tag: "Beginner Friendly",
    duration: "3 to 4 Weeks",
    level: "Complete Beginner",
    highlights: [
      "Hands-on motorized & manual sewing machine training",
      "Needle threading, tensioning & trouble-shooting",
      "Straight, curved, french, and bias seam techniques",
      "Basics of fabric types, grain lines & iron press"
    ],
    syllabus: [
      "Sewing machine parts, operation & maintenance",
      "Practice lines: straight, zig-zag, curves & corners",
      "Seam types: Plain seam, French seam, Topstitch",
      "Cutting & stitching simple garments (Petticoat, Kurti)",
      "Hemming, buttonholes, hooks & elastic insertion"
    ],
    careerOpportunities: [
      "Strong foundation for Advanced Fashion Design",
      "Personal & Family Custom Garment Tailoring",
      "Entry-level Assistant in Garment Units"
    ]
  },
  {
    id: "advanced-boutique",
    title: "Advanced Boutique Techniques",
    subtitle: "Commercial Finishing & Entrepreneurship",
    description: "Learn high-end boutique finishing, client fitting alterations, price calculation, fabric sourcing, and guidance to start your own successful boutique or label.",
    image: "/images/dev_fashion/add_boutique_tech.png",
    icon: Award,
    tag: "Career Track",
    duration: "6 to 8 Weeks",
    level: "Advanced / Professional",
    highlights: [
      "Couture level garment finishing & inner lining neatening",
      "Client measurement taking & alteration troubleshooting",
      "Commercial costing, fabric sourcing & profit margins",
      "Boutique branding, Instagram marketing & client handling"
    ],
    syllabus: [
      "Advanced gown, lehenga, and designer dress construction",
      "Understructure, boning, and canvas interlining work",
      "Client fitting session protocols & alteration fixes",
      "Wholesale fabric sourcing networks in South India",
      "How to price services, launch boutique & gain clients"
    ],
    careerOpportunities: [
      "Boutique Owner & Creative Director",
      "Fashion Entrepreneur & Label Founder",
      "Custom Couture Consultant"
    ]
  }
];

const whyChooseUs = [
  {
    title: "17+ Years Experience",
    desc: "Learn directly from master artisans with over 17 years of successful boutique and bridal design experience.",
    icon: Award,
    stat: "17+ Yrs"
  },
  {
    title: "Global Client Exposure",
    desc: "Gain insights from our experience serving clients across 10+ countries (USA, UK, UAE, Canada, Australia).",
    icon: Globe,
    stat: "10+ Countries"
  },
  {
    title: "Practical Studio Training",
    desc: "100% hands-on practical stitching and drafting practice in a real studio setup with individual attention.",
    icon: UserCheck,
    stat: "100% Practical"
  },
  {
    title: "Industry-Oriented Learning",
    desc: "Curriculum designed to turn your creativity into a commercial boutique career or home business.",
    icon: CheckCircle,
    stat: "Career Ready"
  }
];

const studentJourneySteps = [
  {
    step: "01",
    title: "Measurement & Drafting",
    desc: "Learn precise body measurement math, paper patterns, and structural balance for any body type."
  },
  {
    step: "02",
    title: "Hands-on Stitching",
    desc: "Master sewing machines, Aari needles, zardozi work, and designer necklines under expert supervision."
  },
  {
    step: "03",
    title: "Fitting & Couture Touch",
    desc: "Fine-tune armholes, bust cups, piping, and luxury boutique finishing for flawless silhouettes."
  },
  {
    step: "04",
    title: "Business & Label Setup",
    desc: "Receive mentorship on client pricing, fabric sourcing, and establishing your own fashion studio."
  }
];

export default function ClassesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "core" | "bridal">("all");

  const filteredCourses = coursesOffered.filter(course => {
    if (activeTab === "core") return course.tag === "Core Skill" || course.tag === "Beginner Friendly";
    if (activeTab === "bridal") return course.tag === "Most Popular" || course.tag === "High Demand" || course.tag === "Career Track";
    return true;
  });

  return (
    <div className="w-full bg-[#FAF8F5] text-stone-900 pt-4 overflow-x-hidden">
      
      {/* 1. Grand Couture Academy Hero Section (EXACT UNTOUCHED HEADER SECTION) */}
      <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: "url('/images/dev_fashion/bls_bck.png')",
        }}>


        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 boutique-container">

          <span className="text-[10px] font-bold tracking-widest text-gold-600 block mb-3">
            ✦ DEV FASHION ACADEMY • COIMBATORE ✦
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white mb-6">
            Dev Fashion School of design
          </h1>
          
          <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"> &ldquo;Our goal is to guide and inspire students in creating a work of art&rdquo;</p>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

          <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            your ultimate destination for premier fashion education in coimbatore. we stands out as the best-in-class for fashion designing, tailoring classes and Aari embroidery instruction.
          </p>

        </div>
      </section>

      {/* 2. Interactive Institute Showcase & Heritage Section */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#C5A059]/20 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="boutique-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Column: Official Poster Display with Fine Couture Framing & Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative w-full max-w-md bg-[#141312] border border-[#C5A059]/40 p-4 shadow-2xl relative group rounded-sm hover:border-[#C5A059] transition-all duration-500">
                {/* Gold Frame Corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C5A059] z-20" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C5A059] z-20" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C5A059] z-20" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C5A059] z-20" />

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white rounded-sm">
                  <Image
                    src="/images/dev_fashion/institute_poster.png"
                    alt="Dev Fashion Training Institute Official Course Poster"
                    fill
                    className="object-contain transform group-hover:scale-102 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Subtle Shimmer Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#141312]/90 backdrop-blur-md border border-[#C5A059]/50 p-3 text-center">
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A059] block">
                      ✦ Official Training Institute Poster ✦
                    </span>
                    <span className="text-[11px] text-stone-300 font-light">
                      Gandhipuram, Coimbatore & Live Online Classes
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Why Choose Us & Key Specs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C5A059]/40 bg-[#161514] text-[10px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase self-start shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                100 Feet Road, Gandhipuram, Coimbatore
              </div>

              <div>
                <span className="text-[10px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
                  ESTABLISHED CRAFTSMANSHIP ACADEMY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-wide text-stone-950">
                  Why Learn With Us?
                </h2>
                <div className="mt-4 h-[2px] w-20 bg-[#C5A059]" />
              </div>

              <div className="relative rounded-2xl bg-stone-50 px-6 sm:px-10 py-8 sm:py-10">
                <span className="absolute -top-4 left-6 font-serif text-7xl leading-none text-gold-400 select-none">“</span>
                <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-stone-800">
                  If you’re passionate about fashion, this is where your passion becomes your profession.
                  Learn the art of fashion design, tailoring, pattern making and Aari embroidery through practical, hands-on training.
                </p>
              </div>

              <p className="text-stone-700 text-sm sm:text-base text-justify leading-relaxed font-light">
                &nbsp;&nbsp;&nbsp;We offer fun and innovative fashion design &amp; tailoring classes designed to spark creativity at any age. Our design school offers fashion classes consisting of sketching, draping, sewing, pattern making, Aari embroidery, blouse stitching, and boutique techniques for beginners &amp; adults. We offer practical studio training in Gandhipuram, Coimbatore and live online classes for global students.
                <br /><br />
                &nbsp;&nbsp;&nbsp;At <strong>Dev Fashion Training Institute</strong>, we bridge the gap between traditional craftsmanship and modern boutique demands. Whether you want to master blouse stitching for your family or establish your own fashion studio, our experienced instructors guide you step by step with personalized attention.
              </p>

              {/* 4 Animated Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                {whyChooseUs.map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -4 }}
                      className="bg-white p-5 border border-stone-200/80 shadow-sm flex items-start gap-3.5 hover:border-[#C5A059] transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#161514] text-[#C5A059] flex items-center justify-center shrink-0 group-hover:bg-[#C5A059] group-hover:text-stone-950 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <strong className="block text-stone-950 font-serif text-sm font-semibold">{item.title}</strong>
                          <span className="text-[9px] font-mono font-bold uppercase text-[#C5A059] bg-[#FAF8F5] px-1.5 py-0.5 border border-[#C5A059]/20">
                            {item.stat}
                          </span>
                        </div>
                        <span className="text-stone-600 text-xs leading-relaxed font-light">{item.desc}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Highlights banner */}
              <div className="bg-[#141312] text-white p-5 border border-[#C5A059]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium tracking-[0.2em] uppercase rounded-sm shadow-md">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  <span>Studio &amp; Online Classes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#C5A059]" />
                  <span>International Student Base</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Student Learning Roadmap */}
      <section className="py-16 bg-[#141312] text-white border-b border-[#C5A059]/30 relative">
        <div className="boutique-container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
              ✦ STEP-BY-STEP ACADEMY ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-white">
              Your Journey To Fashion Mastery
            </h2>
            <div className="h-[1.5px] w-16 bg-[#C5A059] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentJourneySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#1A1817] border border-[#C5A059]/25 p-6 relative group hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-light text-[#C5A059] opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-800 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#C5A059]" />
                  Practical Module {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Main Animated Courses Showcase Grid Section */}
      <section id="courses-offered" className="py-20 sm:py-28 bg-white scroll-mt-20 border-b border-[#C5A059]/20 relative">
        <div className="boutique-container">
          
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-3">
              ✦ COMPREHENSIVE CURRICULUM MODULES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-stone-950 mb-4">
              Explore Our Specializations
            </h2>
            <div className="h-[2px] w-20 bg-[#C5A059] mb-6" />
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Explore our 5 specialized training modules carefully structured with dedicated images, syllabus breakdowns, and practical studio guidance.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mt-8 bg-[#FAF8F5] p-1.5 border border-stone-200 rounded-full">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-[#141312] text-white shadow-md"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                All Courses (5)
              </button>
              <button
                onClick={() => setActiveTab("core")}
                className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                  activeTab === "core"
                    ? "bg-[#141312] text-white shadow-md"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                Pattern &amp; Sewing
              </button>
              <button
                onClick={() => setActiveTab("bridal")}
                className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                  activeTab === "bridal"
                    ? "bg-[#141312] text-white shadow-md"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                Bridal &amp; Boutique
              </button>
            </div>
          </div>

          {/* Courses Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCourses.map((course, i) => {
                const CourseIcon = course.icon;
                const romanNums = ["01", "02", "03", "04", "05"];
                return (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-[#FAF8F5] border border-stone-200/90 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#C5A059] hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div>
                      {/* Separate Dedicated Image Banner */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-stone-950 bg-[#C5A059] px-3 py-1 rounded-xs shadow-md">
                            {course.tag}
                          </span>
                          <span className="text-xs font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/20">
                            {romanNums[i]}
                          </span>
                        </div>

                        {/* Title Overlay on Image */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center gap-2 mb-1 text-[#C5A059] text-xs">
                            <CourseIcon className="w-4 h-4" />
                            <span className="text-[10px] font-semibold tracking-widest uppercase">{course.subtitle}</span>
                          </div>
                          <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#C5A059] transition-colors">
                            {course.title}
                          </h3>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="p-6">
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                          {course.description}
                        </p>

                        {/* Highlights List */}
                        <div className="space-y-2 mb-6">
                          {course.highlights.slice(0, 3).map((hl, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                              <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                              <span className="font-light">{hl}</span>
                            </div>
                          ))}
                        </div>

                        {/* Quick Stats Pill */}
                        <div className="flex items-center justify-between text-[11px] text-stone-500 pt-3 border-t border-stone-200/80 mb-4 font-light">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
                            {course.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="p-6 pt-0 space-y-3">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#141312] text-white hover:bg-[#C5A059] hover:text-stone-950 text-xs font-semibold tracking-[0.15em] uppercase transition-colors rounded-xs shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Explore Full Syllabus
                      </button>

                      <a
                        href={`https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20module.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.15em] text-stone-800 hover:text-[#C5A059] uppercase transition-colors py-1.5"
                      >
                        <span>Enquire For Batch Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 5. Course Syllabus Modal Dialog */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white border border-[#C5A059] shadow-2xl rounded-sm z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-[#C5A059] hover:text-stone-950 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Header */}
              <div className="relative aspect-[16/7] w-full bg-stone-900 shrink-0">
                <Image
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                    ✦ {selectedCourse.tag} • DETAILED CURRICULUM
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold">{selectedCourse.title}</h3>
                  <p className="text-xs text-stone-300 font-light mt-1">{selectedCourse.subtitle}</p>
                </div>
              </div>

              {/* Modal Content Scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800">
                
                <div>
                  <h4 className="font-serif text-xl font-semibold text-stone-950 mb-2">Module Overview</h4>
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Detailed Syllabus */}
                  <div className="bg-[#FAF8F5] p-5 border border-stone-200">
                    <h5 className="font-serif text-lg font-semibold text-stone-950 mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#C5A059]" />
                      Syllabus Topics
                    </h5>
                    <ul className="space-y-2 text-xs font-light text-stone-700">
                      {selectedCourse.syllabus.map((syl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#C5A059] font-mono text-[10px] font-bold mt-0.5">0{i+1}.</span>
                          <span>{syl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career & Key Skills */}
                  <div className="bg-[#FAF8F5] p-5 border border-stone-200">
                    <h5 className="font-serif text-lg font-semibold text-stone-950 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#C5A059]" />
                      Career Opportunities
                    </h5>
                    <ul className="space-y-2 text-xs font-light text-stone-700">
                      {selectedCourse.careerOpportunities.map((opp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-600 flex justify-between font-light">
                      <span><strong>Duration:</strong> {selectedCourse.duration}</span>
                      <span><strong>Level:</strong> {selectedCourse.level}</span>
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-stone-600 font-light flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span>Studio in Gandhipuram & Online Worldwide</span>
                  </div>
                  <a
                    href={`https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(selectedCourse.title)}%20course.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#141312] text-white hover:bg-[#C5A059] hover:text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase transition-colors rounded-xs shadow-md"
                  >
                    <span>Enroll In This Module</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. Book Demo Class Section with Animation & BookingForm */}
      <section id="demo-class" className="py-20 sm:py-28 bg-[#FAF8F5] scroll-mt-20 relative">
        <div className="boutique-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            
            {/* Callout Info Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-3">
                  ✦ LIMITED SEATS PER BATCH
                </span>

                <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-stone-950">
                  Book Your Demo Class Today!
                </h2>

                <div className="mt-4 h-[2px] w-20 bg-[#C5A059]" />
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                Experience our teaching methodology firsthand! Attend a trial demo session at our Gandhipuram studio or live online before enrolling.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-stone-800 font-light">
                <div className="flex items-start gap-3 bg-white p-4 border border-stone-200/80 shadow-xs">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p><strong>Studio Classes:</strong> 100 Feet Road, Gandhipuram, Coimbatore.</p>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 border border-stone-200/80 shadow-xs">
                  <Globe className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p><strong>Online Classes:</strong> Interactive live sessions with step-by-step guidance for NRI &amp; outstation students.</p>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 border border-stone-200/80 shadow-xs">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p><strong>Direct Helpline:</strong> Call or WhatsApp <a href="tel:+918098558923" className="text-[#C5A059] font-medium hover:underline">+91 80985 58923</a></p>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2">
                <a
                  href="tel:+918098558923"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141312] text-white hover:bg-[#C5A059] hover:text-stone-950 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-lg rounded-xs"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  Call Helpline: +91 80985 58923
                </a>
              </div>
            </div>

            {/* Booking Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-2 sm:p-4 border border-[#C5A059]/30 shadow-2xl rounded-sm relative">
                <div className="absolute -top-3 right-6 bg-[#C5A059] text-stone-950 text-[9px] font-bold tracking-widest uppercase px-3 py-1 shadow-md">
                  ✦ Free Trial Registration ✦
                </div>
                <BookingForm />
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
