"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/hero_model.png",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    alt: "Bridal Zardozi Blouse",
    category: "Bridal Collection",
    title: "Royal Crimson Zardozi Blouse",
    description: "Premium velvet bridal blouse displaying rich handwoven gold zardozi patterns, tailored with a deep sweetheart back."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    alt: "Designer Saree Blouse Cutwork",
    category: "Designer Blouses",
    title: "Sheer Cutwork Blouse Design",
    description: "Modern sheer net back blouse with floral cutwork, fine bead borders, and structured elbow-length sleeves."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=800&q=80",
    alt: "Traditional Silk Saree Outfit",
    category: "Traditional Wear",
    title: "Traditional Banarasi Styling",
    description: "A gorgeous luxury drape matched with an raw-silk elbow sleeve blouse featuring handcrafted zari borders."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80",
    alt: "Festive Lehenga Design",
    category: "Festive Collection",
    title: "Pastel Meadow Festive Lehenga",
    description: "Designed for premium buyers: a lightweight, layered georgette lehenga featuring hand-painted floral elements."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    alt: "Premium Tailoring Detailing",
    category: "Custom Designs",
    title: "Tailoring Perfection & Patterns",
    description: "Every pattern is hand-drafted by our master tailors to guarantee the perfect custom fit."
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Indo-Western Party Wear",
    category: "Party Wear",
    title: "Contemporary Indo-Western Outfit",
    description: "Chic modern ethnic wear: off-shoulder designer pattern tailored in premium raw silk fabric with soft pleating details."
  },
  {
    id: 9,
    src: "/dev_hero.png",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 10,
    src: "/images/dev_f1.png",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 10,
    src: "/images/kan.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 10,
    src: "/images/dev_fashion/deeps.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 11,
    src: "/images/dev_fashion/blouse_back.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 12,
    src: "/images/dev_fashion/bride1.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 13,
    src: "/images/dev_fashion/couple1.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 14,
    src: "/images/dev_fashion/couple2.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 15,
    src: "/images/dev_fashion/couple3.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 16,
    src: "/images/dev_fashion/couple4.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 17,
    src: "/images/dev_fashion/couple5.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 18,
    src: "/images/dev_fashion/couple6.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 19,
    src: "/images/dev_fashion/couple7.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 20,
    src: "/images/dev_fashion/couple9.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 21,
    src: "/images/dev_fashion/custom_drs1.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 22,
    src: "/images/dev_fashion/family.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 23,
    src: "/images/dev_fashion/group.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 24,
    src: "/images/dev_fashion/kid_mom1.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Party Wear",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 25,
    src: "/images/dev_fashion/kid1.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 26,
    src: "/images/dev_fashion/kid2.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 27,
    src: "/images/dev_fashion/kid3.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 28,
    src: "/images/dev_fashion/old_blouse1.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 29,
    src: "/images/dev_fashion/old_blouse2.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 30,
    src: "/images/dev_fashion/mehandhi.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 31,
    src: "/images/dev_fashion/old_blouse4.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 31,
    src: "/images/dev_fashion/old_blouse5.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 32,
    src: "/images/dev_fashion/aari1.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 33,
    src: "/images/dev_fashion/aari2.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 34,
    src: "/images/dev_fashion/aari3.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 35,
    src: "/images/dev_fashion/aari4.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 36,
    src: "/images/dev_fashion/aari5.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 37,
    src: "/images/dev_fashion/aari6.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 38,
    src: "/images/dev_fashion/aari7.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 39,
    src: "/images/dev_fashion/aari8.jpg",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 40,
    src: "/images/dev_fashion/featured-aari.webp",
    alt: "Luxury Custom Tailored Ethnic Outfit",
    category: "Custom Designs",
    title: "Luxury Ethnic Editorial",
    description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 42,
    src: "/images/dev_fashion/lan_bls2.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 43,
    src: "/images/dev_fashion/lan_bls3.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 44,
    src: "/images/dev_fashion/lan_bls4.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 45,
    src: "/images/dev_fashion/lan_bls5.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 46,
    src: "/images/dev_fashion/lan_bls6.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 47,
    src: "/images/dev_fashion/lan_bls7.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 48,
    src: "/images/dev_fashion/lan_bls8.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 49,
    src: "/images/dev_fashion/lan_bls9.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 50,
    src: "/images/dev_fashion/lan_bls10.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 51,
    src: "/images/dev_fashion/lan_bls11.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 52,
    src: "/images/dev_fashion/lan_bls12.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 53,
    src: "/images/dev_fashion/lan_bls13.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 54,
    src: "/images/dev_fashion/lan_bls14.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 55,
    src: "/images/dev_fashion/lan_bls15.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 56,
    src: "/images/dev_fashion/lan_bls16.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 57,
    src: "/images/dev_fashion/lan_bls17.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 58,
    src: "/images/dev_fashion/lan_bls18.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 59,
    src: "/images/dev_fashion/lan_bls19.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 60,
    src: "/images/dev_fashion/lan_bls20.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 61,
    src: "/images/dev_fashion/lan_bls21.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 62,
    src: "/images/dev_fashion/lan_bls22.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 63,
    src: "/images/dev_fashion/lan_bls23.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 64,
    src: "/images/dev_fashion/lan_bls24.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 65,
    src: "/images/dev_fashion/lan_bls25.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 66,
    src: "/images/dev_fashion/lan_bls26.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 67,
    src: "/images/dev_fashion/lan_bls27.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 68,
    src: "/images/dev_fashion/lan_bls28.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 69,
    src: "/images/dev_fashion/couple8.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
  {
    id: 41,
    src: "/images/dev_fashion/lan_bls1.jpg",
    alt: "Bridal Lehanga Embroidery Detail",
    category: "Bridal Collection",
    title: "Intricate Bridal Lehanga Panel",
    description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
  },
];

const categories = [
  "All",
  "Bridal Collection",
  "Designer Blouses",
  "Party Wear",
  "Traditional Wear",
  "Festive Collection",
  "Custom Designs"
];

export default function GalleryLightbox() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(prev => 
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(prev => 
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gold-200/50 pb-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setActiveImageIndex(null);
            }}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none border ${
              selectedCategory === category
                ? "bg-stone-900 border-stone-900 text-white"
                : "bg-white border-gold-200 hover:border-gold-500 text-stone-600 hover:text-stone-950"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry-Style Image Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative cursor-pointer overflow-hidden border border-gold-200/50 bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container with aspect ratio wrapper */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={item.id <= 4}
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-stone-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
                
                {/* Floating zoom indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 text-stone-850 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md transform translate-y-[-10px] group-hover:translate-y-0">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Info Text inside Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-stone-200 line-clamp-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white p-2 focus:outline-none z-55"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Slider Content Wrapper */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-6xl w-full flex flex-col lg:flex-row bg-white shadow-2xl border border-gold-300 overflow-hidden"
            >
              {/* Image Column */}
              <div className="relative w-full lg:w-3/5 aspect-[4/5] lg:aspect-auto lg:h-[70vh] bg-stone-900 flex items-center justify-center">
                <Image
                  src={filteredItems[activeImageIndex].src}
                  alt={filteredItems[activeImageIndex].alt}
                  fill
                  className="object-contain"
                />

                {/* Nav buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-none flex items-center justify-center transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-none flex items-center justify-center transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Text / Action Details Column */}
              <div className="w-full lg:w-2/5 p-8 sm:p-10 flex flex-col justify-between bg-white text-stone-900">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase block mb-2">
                    {filteredItems[activeImageIndex].category}
                  </span>
                  
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-stone-950 mb-4">
                    {filteredItems[activeImageIndex].title}
                  </h2>
                  
                  <div className="h-[1px] w-16 bg-gold-500 mb-6" />
                  
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {filteredItems[activeImageIndex].description}
                  </p>

                  <div className="bg-gold-50/50 border border-gold-150 p-4 mb-6">
                    <span className="text-[10px] tracking-widest text-gold-700 font-semibold uppercase block mb-1">
                      ✦ Fabric & Tailoring Note
                    </span>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Custom measurements can be taken virtually or in person. Standard stitching timeline is 7-10 business days. Expedited delivery is available.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(filteredItems[activeImageIndex].category)}&design=${encodeURIComponent(filteredItems[activeImageIndex].title)}#booking`}
                    onClick={() => setActiveImageIndex(null)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors"
                  >
                    Request Customization
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  
                  <a
                    href={`https://wa.me/919025751328?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20customizing%20your%20design%3A%20${encodeURIComponent(filteredItems[activeImageIndex].title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-stone-900 hover:border-gold-600 text-stone-900 hover:text-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors"
                  >
                    WhatsApp Stylist
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
