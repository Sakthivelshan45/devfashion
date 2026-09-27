"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  designType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nisha Balachandra",
    role: "Bridal Customer",
    location: "Coimbatore",
    rating: 5,
    comment: "Dev Tailor Durga is incredibly talented and has an amazing eye for bridal blouse designs. She understands exactly what suits you and creates beautiful patterns with perfect stitching. Once you give her your measurements, you never have to worry about the fit, it’s always perfect. She is also very reliable and delivers on time, even when you need it urgently. I’m extremely happy with her work and am already looking forward to getting my next lot of salwars stitched by her. Highly recommended 🎉✌️❤️",
    designType: "Bridal Velvet Blouse"
  },
  {
    id: 2,
    name: "SNEGHA R",
    role: "NRI Customer",
    location: "London, UK",
    rating: 5,
    comment: "Absolutely loved the blouse. The fitting is perfect and very comfortable. The embroidery work is neat and beautifully finished. The stitching is excellent and the blouse looks exactly like the pictures which I gave as reference. Very happy. Highly Satisfied.",
    designType: "Designer Saree & Blouse"
  },
  {
    id: 3,
    name: "Dishyantha B",
    role: "Premium Fashion Client",
    location: "Mumbai",
    rating: 5,
    comment: "Best customer service and I liked the blouse stitching and ari work.I liked the designs of the blouse.It was same as I mentioned.I thank Dev mam for being much customer friendly and on time delivery actually before one day",
    designType: "Festive Anarkali Suit"
  },
  {
    id: 4,
    name: "Rathna Sakthi",
    role: "New Fashion Client",
    location: "Coimbatore",
    rating: 5,
    comment: "The entire experience was 10/10! Working with Durga Devi was so nice, the design and fit is absolutely stunning! I’ve been wearing it for months and have gotten so many compliments. I love that it’s a woman owned brand and made here in the coimbatore. That doesn’t come often anymore. Can’t wait to get more Blouses!",
    designType: "Festive Anarkali Suit"
  }
];



export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Background Quote Mark */}
      <div className="absolute top-0 left-6 text-gold-200/20 pointer-events-none select-none">
        <Quote className="w-40 h-40 stroke-[0.5]" />
      </div>

      <div className="relative overflow-hidden min-h-[300px] flex flex-col justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-center flex flex-col items-center"
          >
            {/* Rating Stars */}
            <div className="flex justify-center gap-1.5 mb-6 text-gold-500">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="font-serif text-lg md:text-xl lg:text-2xl italic text-stone-800 leading-relaxed max-w-2xl mb-8">
              "{current.comment}"
            </p>

            {/* Customer Details */}
            <div className="flex flex-col items-center">
              {/* Avatar placeholder with luxury monogram */}
              <div className="w-14 h-14 bg-stone-900 border border-gold-300 text-gold-300 rounded-full flex items-center justify-center font-serif text-lg tracking-widest font-semibold mb-3">
                {current.name.split(" ").map(n => n[0]).join("")}
              </div>

              <h4 className="font-serif text-base font-semibold tracking-wide text-stone-900">
                {current.name}
              </h4>
              
              <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mt-0.5">
                {current.role} • {current.location}
              </p>
              
              <span className="inline-block mt-2 px-3 py-1 bg-gold-100/40 border border-gold-200/50 text-[10px] text-stone-600 uppercase tracking-widest font-medium">
                {current.designType}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 border border-gold-300 hover:border-gold-500 text-stone-700 hover:text-gold-600 rounded-none flex items-center justify-center transition-all bg-white shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 border border-gold-300 hover:border-gold-500 text-stone-700 hover:text-gold-600 rounded-none flex items-center justify-center transition-all bg-white shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
