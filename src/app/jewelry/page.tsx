"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Heart,
  MessageSquare,
  ShieldCheck,
  Star,
  Film,
  Globe,
  Truck,
  Award,
  Lock,
  ChevronRight,
  Sparkles
} from "lucide-react";

// Expanded South Indian Jewelry Catalog (24 Items)
const jewelryCatalog = [
  {
    id: "j-1",
    title: "Antique Gold Temple Choker & Long Necklace Set",
    category: "Necklaces",
    occasion: "The Gala",
    image: "/images/jewelry/necklace_1.png",
    price: "₹1,800 / day",
    description: "Exquisite South Indian antique gold finish choker paired with rubies, emeralds, and pearl cluster drops.",
    highlights: ["Handcrafted Temple Motifs", "Adjustable Silk Cord", "Lightweight & Comfortable"]
  },
  {
    id: "j-2",
    title: "Royal Lakshmi Temple Jhumkas & Chandbalis",
    category: "Earrings",
    occasion: "The Journey",
    image: "/images/jewelry/earrings_1.png",
    price: "₹600 / day",
    description: "Classic South Indian temple jhumkas crafted with delicate pearl clusters and traditional Lakshmi engraving.",
    highlights: ["22K Antique Finish", "Emerald & Ruby Accents", "Statement Drop"]
  },
  {
    id: "j-3",
    title: "Heritage Antique Gold Temple Bangles Set",
    category: "Bangles",
    occasion: "The Boardroom",
    image: "/images/jewelry/bangles_1.png",
    price: "₹850 / day",
    description: "Intricately detailed antique gold kada bangles featuring sacred temple motifs and ruby stone embellishments.",
    highlights: ["Set of 4 Stackable Bangles", "Secure Screw Lock", "Comfort Edge Finish"]
  },
  {
    id: "j-4",
    title: "Grand Heritage South Indian Bridal Jewelry Set",
    category: "Bridal Sets",
    occasion: "The Gala",
    image: "/images/jewelry/bridal_set_1.png",
    price: "₹3,500 / day",
    description: "Complete royal bridal ensemble including choker, Guttapusalu long haram, Maang Tikka, and matching earrings.",
    highlights: ["Complete 5-Piece Ensemble", "Traditional Guttapusalu Style", "High-Resolution Details"]
  },
  {
    id: "j-5",
    title: "Traditional South Indian Kasu Mala Coin Haram",
    category: "Necklaces",
    occasion: "The Gala",
    image: "/images/jewelry/kasu_mala_1.png",
    price: "₹1,400 / day",
    description: "Sacred South Indian Kasu Mala coin necklace intricately embossed with Goddess Lakshmi impressions and Kemp rubies.",
    highlights: ["Traditional Kasu Engraving", "Kemp Stone Embellishment", "Heritage Heirloom Quality"]
  },
  {
    id: "j-6",
    title: "Royal Manga Malai Mango Motif Long Haram",
    category: "Necklaces",
    occasion: "The Gala",
    image: "/images/jewelry/mango_haram_1.png",
    price: "₹1,650 / day",
    description: "Classic South Indian Manga Malai featuring traditional paisley mango motifs studded with emeralds and dangling pearls.",
    highlights: ["Paisley Mango Motifs", "Emerald & Ruby Cluster", "Grand Statement Length"]
  },
  {
    id: "j-7",
    title: "Royal Guttapusalu Pearl Cluster Necklace Set",
    category: "Necklaces",
    occasion: "The Gala",
    image: "/images/jewelry/guttapusalu_1.png",
    price: "₹1,950 / day",
    description: "Authentic Andhra Guttapusalu necklace laden with lush fringe pearl clusters and Kundan stone work.",
    highlights: ["Fringe Pearl Tassels", "Kundan & Ruby Stones", "Royal Heritage Look"]
  },
  {
    id: "j-8",
    title: "Antique Gold Naga Vanki Armlet Set",
    category: "Accessories",
    occasion: "The Everyday",
    image: "/images/jewelry/vanki_armlet_1.png",
    price: "₹750 / day",
    description: "Traditional South Indian Vanki armlet featuring peacock and serpent motifs embellished with ruby stones.",
    highlights: ["Adjustable Armlet Band", "Peacock & Serpent Detailing", "Traditional Bridal Essential"]
  },
  {
    id: "j-9",
    title: "Kemp Ruby Nethi Chutti Maang Tikka",
    category: "Accessories",
    occasion: "The Everyday",
    image: "/images/jewelry/maang_tikka_1.png",
    price: "₹450 / day",
    description: "Exquisite South Indian Nethi Chutti forehead ornament studded with Kemp rubies and dangling pearl drops.",
    highlights: ["Secure Forehead Hook", "Kemp Ruby Embellishment", "Pearl Fringe Drop"]
  },
  {
    id: "j-10",
    title: "Antique Gold Haath Phool Ring Harness Set",
    category: "Bangles",
    occasion: "The Boardroom",
    image: "/images/jewelry/haath_phool_1.png",
    price: "₹650 / day",
    description: "Elegant South Indian hand harness featuring antique gold lotus centerpieces linked with delicate pearl strands.",
    highlights: ["Ring + Wrist Connection", "Adjustable Fit", "Graceful Hand Accent"]
  },
  {
    id: "j-11",
    title: "Dev Fashion Authentic Bridal Blouse & Jewelry Pair",
    category: "Bridal Sets",
    occasion: "The Gala",
    image: "/images/jewelry/user_jewel_1.jpg",
    price: "₹2,800 / day",
    description: "Signature South Indian bridal pairing featuring handcrafted temple neckpiece and custom Aari work blouse.",
    highlights: ["Dev Fashion Exclusive", "Aari Work Blouse Pair", "Bridal Specialty"]
  },
  {
    id: "j-12",
    title: "Heritage South Indian Bridal Temple Set",
    category: "Bridal Sets",
    occasion: "The Gala",
    image: "/images/jewelry/user_jewel_2.jpg",
    price: "₹3,200 / day",
    description: "Traditional South Indian bridal set crafted with Kundan stones and ruby embellishments.",
    highlights: ["Full Bridal Haram Set", "Grand Temple Finish", "Rental Exclusive"]
  },
  {
    id: "j-13",
    title: "Antique Gold Lakshmi Choker Set",
    category: "Necklaces",
    occasion: "The Boardroom",
    image: "/images/jewelry/user_jewel_3.jpg",
    price: "₹1,250 / day",
    description: "Regal antique gold choker featuring Goddess Lakshmi motifs and pearl tassel drops.",
    highlights: ["Choker + Earring Pair", "Temple Sculpture Motif", "Statement Collar"]
  },
  {
    id: "j-14",
    title: "Traditional South Indian Jhumka Drops",
    category: "Earrings",
    occasion: "The Journey",
    image: "/images/jewelry/user_jewel_4.jpg",
    price: "₹500 / day",
    description: "Classic South Indian temple jhumkas with green emerald drops and gold granulation.",
    highlights: ["Pure Temple Craftsmanship", "Lightweight Fit", "Festive Essential"]
  },
  {
    id: "j-15",
    title: "Bridal Antique Gold Kada Bangles Pair",
    category: "Bangles",
    occasion: "The Boardroom",
    image: "/images/jewelry/user_jewel_5.jpg",
    price: "₹700 / day",
    description: "Pair of thick antique gold kada bangles detailed with floral motifs and ruby stones.",
    highlights: ["Pair of 2 Heavy Kadas", "Antique Matte Finish", "Screw Opening"]
  },
  {
    id: "j-16",
    title: "South Indian Kemp Stone Bridal Haram",
    category: "Necklaces",
    occasion: "The Gala",
    image: "/images/jewelry/user_jewel_6.jpg",
    price: "₹1,600 / day",
    description: "Traditional long haram studded with rich crimson Kemp rubies and freshwater pearls.",
    highlights: ["Long Bridal Haram", "Crimson Kemp Stones", "Traditional Heritage"]
  },
  {
    id: "j-17",
    title: "Royal Peacock Patterned Temple Choker",
    category: "Necklaces",
    occasion: "The Boardroom",
    image: "/images/jewelry/user_jewel_7.jpg",
    price: "₹1,350 / day",
    description: "Artistic peacock carved choker studded with emeralds, rubies, and golden beads.",
    highlights: ["Peacock Motif Detailing", "Micro-set Stones", "Collar Design"]
  },
  {
    id: "j-18",
    title: "Heritage South Indian Nethi Chutti & Maang Tikka",
    category: "Accessories",
    occasion: "The Everyday",
    image: "/images/jewelry/user_jewel_8.jpg",
    price: "₹400 / day",
    description: "Traditional South Indian head ornament for brides featuring Kundan stones and dangling pearls.",
    highlights: ["Bridal Headpiece", "Kundan & Ruby Stones", "Secure Fit"]
  },
  {
    id: "j-19",
    title: "Traditional Antique Gold Kamarbandh Hip Belt",
    category: "Accessories",
    occasion: "The Everyday",
    image: "/images/jewelry/user_jewel_9.jpg",
    price: "₹950 / day",
    description: "South Indian waist oddiyanam belt adorned with Lakshmi motifs and pearl cluster hangings.",
    highlights: ["Adjustable Waist Belt", "Traditional Oddiyanam", "Bridal Specialty"]
  },
  {
    id: "j-20",
    title: "Grand South Indian 5-Piece Wedding Jewelry Set",
    category: "Bridal Sets",
    occasion: "The Gala",
    image: "/images/jewelry/user_jewel_10.jpg",
    price: "₹3,800 / day",
    description: "Complete royal bridal collection including long haram, choker, earrings, Maang Tikka, and Vanki.",
    highlights: ["Complete 5-Piece Set", "Rental Package", "Grand Heritage Look"]
  },
  {
    id: "j-21",
    title: "Classic South Indian Temple Chandbali Earrings",
    category: "Earrings",
    occasion: "The Journey",
    image: "/images/jewelry/user_jewel_11.jpg",
    price: "₹550 / day",
    description: "Crescent moon Chandbali earrings studded with pearls and ruby teardrops.",
    highlights: ["Statement Chandbali", "Pearl Tassel Drops", "Lightweight Fit"]
  },
  {
    id: "j-22",
    title: "Antique Gold Stackable Bangle Set",
    category: "Bangles",
    occasion: "The Boardroom",
    image: "/images/jewelry/user_jewel_12.jpg",
    price: "₹650 / day",
    description: "Set of 6 thin and thick antique gold bangles detailed with traditional floral dots.",
    highlights: ["Set of 6 Bangles", "Mix-and-Match Style", "Smooth Comfort Fit"]
  },
  {
    id: "j-23",
    title: "Kasu Mala Coin Choker Necklace",
    category: "Necklaces",
    occasion: "The Boardroom",
    image: "/images/jewelry/user_jewel_13.jpg",
    price: "₹1,150 / day",
    description: "Compact Kasu Mala choker featuring Lakshmi gold coins and ruby centers.",
    highlights: ["Short Kasu Collar", "Gold Polish", "Festive Essential"]
  },
  {
    id: "j-24",
    title: "South Indian Bridal Vanki Armlet Pair",
    category: "Accessories",
    occasion: "The Everyday",
    image: "/images/jewelry/user_jewel_14.jpg",
    price: "₹800 / day",
    description: "V-shaped antique gold Vanki armlet set embellished with rubies and hanging pearl drops.",
    highlights: ["Pair of 2 Armlets", "V-Shape Fit", "Pearl Drops"]
  }
];

// Occasion Panels ("Wear it to...")
const occasionPanels = [
  {
    id: "boardroom",
    title: "The Boardroom",
    subtitle: "Chokers, Tailored Bangles & Statement Collars",
    image: "/images/jewelry/necklace_1.png",
    filterKey: "The Boardroom"
  },
  {
    id: "gala",
    title: "The Gala",
    subtitle: "Grand Temple Harams & 5-Piece Bridal Sets",
    image: "/images/jewelry/bridal_set_1.png",
    filterKey: "The Gala"
  },
  {
    id: "journey",
    title: "The Journey",
    subtitle: "Classic Jhumkas & Chandbali Ear Drops",
    image: "/images/jewelry/earrings_1.png",
    filterKey: "The Journey"
  },
  {
    id: "everyday",
    title: "The Everyday",
    subtitle: "Vanki Armlets, Maang Tikka & Hip Belts",
    image: "/images/jewelry/vanki_armlet_1.png",
    filterKey: "The Everyday"
  }
];

const categoryFilterList = [
  "All Collections",
  "Necklaces",
  "Earrings",
  "Bangles",
  "Bridal Sets",
  "Accessories"
];

export default function JewelryPage() {
  const [activeCategory, setActiveCategory] = useState("All Collections");
  const [activeOccasion, setActiveOccasion] = useState<string | null>(null);
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter jewelry catalog based on category and occasion
  const filteredCatalog = jewelryCatalog.filter((item) => {
    const matchesCategory = activeCategory === "All Collections" || item.category === activeCategory;
    const matchesOccasion = !activeOccasion || item.occasion === activeOccasion;
    return matchesCategory && matchesOccasion;
  });

  return (
    <div className="w-full bg-[#FBF7F2] text-[#1C1C1C] pt-28 overflow-x-hidden font-sans">

      {/* ==========================================
          SECTION 1: CINEMATIC HERO (FULL-SCREEN CINEMATIC)
          "Jewellery for the woman who leads."
          ========================================== */}
      <section className="relative py-16 sm:py-38 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('/images/jewelry/group11.png')",
        }}>


        {/* Dark/white overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ SOUTH INDIAN JEWELLERY ATELIER

          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
            Jewellery for the woman who leads.
          </h1>

          <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">Rent high-impact designer jewelry for events where blending in isn't an option!</p>

          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

          <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Why not steal the spotlight at your next big event? Elevate your look with high-end jewelry you can rent anytime and experience luxury that fits your lifestyle!
          </p>
        </div>

      </section>


      {/* ==========================================
          SECTION 2: "WEAR IT TO..." OCCASION PANELS
          ========================================== */}
      <section id="occasions" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B8324A] uppercase block mb-2">
            ✦ Curated By Occasion
          </span>
          <h2 className="font-serif text-2xl sm:text-4x1 font-light text-[#1C1C1C] uppercase tracking-wide">
            EXPERIENCE LUXURY WITHOUT COMMITMENT 
            <br /> RENT THE JEWELRY OF YOUR DREAMS
          </h2>
          <div className="h-px w-16 bg-[#C8A96A] mx-auto mt-4" />
        </div>

        {/* Accordion Panel Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasionPanels.map((panel) => {
            const isSelected = activeOccasion === panel.filterKey;
            return (
              <motion.div
                key={panel.id}
                onHoverStart={() => setHoveredPanel(panel.id)}
                onHoverEnd={() => setHoveredPanel(null)}
                onClick={() => {
                  setActiveOccasion(isSelected ? null : panel.filterKey);
                  const el = document.getElementById("catalog");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative aspect-[3/4] cursor-pointer overflow-hidden border transition-all duration-500 rounded-none bg-stone-900 ${isSelected ? "border-[#B8324A] ring-2 ring-[#B8324A]" : "border-[#C8A96A]/40 hover:border-[#C8A96A]"
                  }`}
              >
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16302A] via-[#16302A]/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#C8A96A] font-semibold block mb-1">
                    {panel.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-light tracking-wide">
                    {panel.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8324A] uppercase">
                    <span>{isSelected ? "Active Filter" : "Explore Category"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {activeOccasion && (
          <div className="text-center mt-6">
            <button
              onClick={() => setActiveOccasion(null)}
              className="text-xs font-semibold tracking-[0.2em] text-[#B8324A] uppercase underline underline-offset-4"
            >
              Clear Occasion Filter
            </button>
          </div>
        )}

      </section>


      {/* ==========================================
          SECTION 3: SIGNATURE PIECES / PRODUCT SHOWCASE
          ========================================== */}
      <section className="py-24 bg-[#F8E8EB] border-y border-[#C8A96A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B8324A] uppercase block mb-2">
                ✦ Signature Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1C1C1C] uppercase tracking-wide">
                DESIGNER COLLECTIONS TO BORROW. WEAR. RETURN
              </h2>

              <p className="space-y-4 font-lato text-stone-700 text-sm sm:text-base leading-relaxed">
                EXPERIENCE THE LUXURY OF WEARING FINE DESIGNER JEWELRY. AFFORDABLY.
              </p>
            </div>

            <a
              href="#catalog"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#1C1C1C] hover:text-[#B8324A] uppercase transition-colors underline decoration-[#C8A96A] underline-offset-4 self-start md:self-auto"
            >
              <span>View All 24 Pieces</span>
              <ChevronRight className="w-4 h-4 text-[#C8A96A]" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jewelryCatalog.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#C8A96A]/40 rounded-none p-4 flex flex-col justify-between shadow-sm relative group"
              >
                <div className="relative aspect-[4/3] w-full rounded-none overflow-hidden bg-stone-100 border border-stone-200 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="25vw"
                  />

                  {/* Luxury Price Tag */}
                  <div className="absolute top-3 left-3 bg-[#16302A] text-[#FBF7F2] px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-none border border-[#C8A96A]/40">
                    {item.price}
                  </div>

                  {/* Wishlist Icon */}
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-stone-700 hover:text-[#B8324A] transition-colors shadow-sm"
                  >
                    <Heart className={`w-4 h-4 ${likedItems[item.id] ? "fill-current text-[#B8324A]" : ""}`} />
                  </button>
                </div>

                <div>
                  <span className="text-[9px] font-semibold text-[#B8324A] uppercase tracking-[0.2em] block mb-1">
                    ✦ {item.category}
                  </span>
                  <h3 className="font-serif text-base font-normal text-[#1C1C1C] mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4 line-clamp-2 font-lato">
                    {item.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20renting%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#16302A] hover:bg-[#B8324A] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#C8A96A]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 4: CRAFTSMANSHIP STORY
          ========================================== */}
      <section className="py-24 bg-[#FBF7F2] border-b border-[#C8A96A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Story Left Image Spread */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] border border-[#C8A96A]/50 p-2 bg-white shadow-md mt-6 rounded-none">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/jewelry/kasu_mala_1.png"
                    alt="Traditional South Indian Kasu Mala Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative aspect-[3/4] border border-[#C8A96A]/50 p-2 bg-white shadow-md rounded-none">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/jewelry/guttapusalu_1.png"
                    alt="Guttapusalu Pearl Necklace Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Story Right Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-[#1C1C1C]">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B8324A] uppercase block">
                ✦ Heritage & Material Quality
              </span>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-wide leading-tight">
                  Made to be<br />
                  <span className="italic font-serif font-normal text-[#B8324A]">
                    remembered.
                  </span>
                </h2>
                <div className="h-px w-20 bg-[#C8A96A] mt-4" />
              </div>

              <div className="space-y-4 font-lato text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Every piece in our rental archive is selected for its material integrity, weight, and authentic 22K antique gold finish.
                  Shine on your next occasion and make a statement that lasts a lifetime. Choose sophistication and style for your next event - explore our selection and shine on your special day.
                </p>
                <p>
                  Based in Gandhipuram, Coimbatore, Dev Fashion pairs custom Aari embroidered blouses with curated traditional jewellery for brides and leaders around the world.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20am%20looking%20for%20a%20private%20bridal%20jewellery%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#1C1C1C] hover:text-[#B8324A] uppercase transition-colors underline decoration-[#C8A96A] underline-offset-4"
                >
                  <span>Book Private Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 5: GLOBAL SERVICE STRIP
          ========================================== */}
      <section className="py-16 bg-[#16302A] text-[#FBF7F2] border-y border-[#C8A96A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-[#C8A96A] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-light uppercase tracking-wider text-white">Worldwide Express Delivery</h4>
                <p className="text-stone-300 text-xs leading-relaxed mt-1 font-lato">Virtual consultations and secure express courier for NRI & international clients.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-[#C8A96A] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-light uppercase tracking-wider text-white">Heirloom Maintenance Guarantee</h4>
                <p className="text-stone-300 text-xs leading-relaxed mt-1 font-lato">Every rental piece is sanitized, polished, and verified for flawless presentation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-[#C8A96A] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-light uppercase tracking-wider text-white">Custom Blouse Match</h4>
                <p className="text-stone-300 text-xs leading-relaxed mt-1 font-lato">Expert styling guidance matching your rental set to your bespoke Aari embroidery.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 6: PRIVATE CONSULTATION BOOKING
          ========================================== */}
      <section id="consultation" className="py-24 bg-[#FBF7F2] border-b border-[#C8A96A]/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B8324A] uppercase block">
            ✦ Private Appointment
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide text-[#1C1C1C]">
            Schedule a Personal Styling Consultation
          </h2>

          <div className="h-px w-20 bg-[#C8A96A] mx-auto" />

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-lato">
            Connect with our lead bridal stylists either in person at our Gandhipuram studio or virtually via assisted video call.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20would%20like%20to%20schedule%20a%20personal%20jewellery%20styling%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#B8324A] hover:bg-[#16302A] text-white text-xs font-semibold tracking-[0.25em] uppercase transition-colors rounded-none shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#C8A96A]" />
              <span>Schedule via WhatsApp</span>
            </a>

            <Link
              href="/contact#booking"
              className="px-8 py-4 border border-[#1C1C1C] text-[#1C1C1C] hover:border-[#B8324A] hover:text-[#B8324A] text-xs font-semibold tracking-[0.25em] uppercase transition-colors rounded-none bg-transparent"
            >
              Online Booking Form
            </Link>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 7: NEW ARRIVALS / CATALOG GRID
          ========================================== */}
      <section id="catalog" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B8324A] uppercase block mb-2">
            ✦ Full Archive ({filteredCatalog.length} Pieces)
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light uppercase tracking-wide text-[#1C1C1C]">
            South Indian Jewellery Collection
          </h2>
          <div className="h-px w-20 bg-[#C8A96A] mx-auto mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categoryFilterList.map((cat, i) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase rounded-none border transition-colors ${isActive
                    ? "bg-[#B8324A] text-white border-[#B8324A]"
                    : "bg-white text-[#1C1C1C] border-[#C8A96A]/40 hover:border-[#B8324A] hover:text-[#B8324A]"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 4 Items Per Row Responsive Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCatalog.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#C8A96A]/40 rounded-none p-4 flex flex-col justify-between shadow-sm relative group"
            >
              <div className="relative aspect-[4/3] w-full rounded-none overflow-hidden bg-stone-100 border border-stone-200 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {/* Rind Price Tag */}
                <div className="absolute top-3 left-3 bg-[#16302A] text-[#FBF7F2] px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-none border border-[#C8A96A]/40">
                  {item.price}
                </div>

                {/* Wishlist Heart */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-stone-700 hover:text-[#B8324A] transition-colors shadow-sm"
                >
                  <Heart className={`w-4 h-4 ${likedItems[item.id] ? "fill-current text-[#B8324A]" : ""}`} />
                </button>
              </div>

              <div>
                <span className="text-[9px] font-semibold text-[#B8324A] uppercase tracking-[0.2em] block mb-1">
                  ✦ {item.category} • {item.occasion}
                </span>
                <h3 className="font-serif text-base font-normal text-[#1C1C1C] mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-4 line-clamp-2 font-lato">
                  {item.description}
                </p>
              </div>

              <div className="space-y-1 mb-4 border-t border-stone-100 pt-3 font-lato">
                {item.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-[11px] text-stone-700">
                    <span className="text-[#C8A96A]">✦</span>
                    <span className="truncate">{hl}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20renting%20${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#16302A] hover:bg-[#B8324A] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#C8A96A]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </motion.div>
          ))}
        </div>

      </section>


      {/* ==========================================
          SECTION 8: TESTIMONIALS
          ========================================== */}
      <section className="py-24 bg-[#F8E8EB] border-t border-[#C8A96A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#B8324A] uppercase block mb-2">
              ✦ Words of Praise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1C1C1C] uppercase tracking-wide">
              Client Testimonials
            </h2>
            <div className="h-px w-20 bg-[#C8A96A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#C8A96A]/40 rounded-none p-8 shadow-sm">
              <div className="flex text-[#C8A96A] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-6 italic font-serif">
                "Rented the Kasu Mala and Temple Jhumka set for my wedding in Coimbatore. The antique gold finish looked 100% real on camera and complemented my Kanjivaram saree flawlessly."
              </p>
              <div className="pt-4 border-t border-stone-200 text-left">
                <h4 className="font-serif text-sm font-semibold text-[#1C1C1C]">Swathi Raghavan</h4>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Coimbatore Bride</span>
              </div>
            </div>

            <div className="bg-white border border-[#C8A96A]/40 rounded-none p-8 shadow-sm">
              <div className="flex text-[#C8A96A] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-6 italic font-serif">
                "Super convenient rental service! The Guttapusalu long haram made my reception outfit complete. Seamless trial and sanitized jewelry."
              </p>
              <div className="pt-4 border-t border-stone-200 text-left">
                <h4 className="font-serif text-sm font-semibold text-[#1C1C1C]">Priya Sundaram</h4>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Chennai Bride</span>
              </div>
            </div>

            <div className="bg-white border border-[#C8A96A]/40 rounded-none p-8 shadow-sm">
              <div className="flex text-[#C8A96A] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-6 italic font-serif">
                "Loved pairing their temple choker set with my custom Aari embroidered blouse from Dev Fashion. Exceptional craftsmanship and customer service."
              </p>
              <div className="pt-4 border-t border-stone-200 text-left">
                <h4 className="font-serif text-sm font-semibold text-[#1C1C1C]">Ananya Krishnan</h4>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Tirupur Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
