// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from "lucide-react";
// import Link from "next/link";

// interface GalleryItem {
//   id: number;
//   src: string;
//   alt: string;
//   category: string;
//   title: string;
//   description: string;
// }

// const galleryItems: GalleryItem[] = [
//   {
//     id: 1,
//     src: "/images/dev_fashion/deeps2.jpeg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs", 
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 2,
//     src: "/images/dev_fashion/sai.jpeg",
//     alt: "Bridal Zardozi Blouse",
//     category: "Bridal Collection",
//     title: "Royal Crimson Zardozi Blouse",
//     description: "Premium velvet bridal blouse displaying rich handwoven gold zardozi patterns, tailored with a deep sweetheart back."
//   },
//   {
//     id: 3,
//     src: "/images/dev_fashion/ammu.jpeg",
//     alt: "Designer Saree Blouse Cutwork",
//     category: "Designer Blouses",
//     title: "Sheer Cutwork Blouse Design",
//     description: "Modern sheer net back blouse with floral cutwork, fine bead borders, and structured elbow-length sleeves."
//   },
//   {
//     id: 4,
//     src: "/images/dev_fashion/deeps1.jpeg",
//     alt: "Traditional Silk Saree Outfit",
//     category: "Traditional Wear",
//     title: "Traditional Banarasi Styling",
//     description: "A gorgeous luxury drape matched with an raw-silk elbow sleeve blouse featuring handcrafted zari borders."
//   },
//   {
//     id: 5,
//     src: "/images/dev_fashion/ammu_deeps.jpeg",
//     alt: "Festive Lehenga Design",
//     category: "Festive Collection",
//     title: "Pastel Meadow Festive Lehenga",
//     description: "Designed for premium buyers: a lightweight, layered georgette lehenga featuring hand-painted floral elements."
//   },
//   {
//     id: 6,
//     src: "/images/dev_fashion/ammu_sai.jpeg",
//     alt: "Premium Tailoring Detailing",
//     category: "Custom Designs",
//     title: "Tailoring Perfection & Patterns",
//     description: "Every pattern is hand-drafted by our master tailors to guarantee the perfect custom fit."
//   },
//   {
//     id: 7,
//     src: "/images/dev_fashion/sadha_bls1.jpeg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 8,
//     src: "/images/dev_fashion/sadhana_back.jpg",
//     alt: "Modern Indo-Western Party Wear",
//     category: "Party Wear",
//     title: "Contemporary Indo-Western Outfit",
//     description: "Chic modern ethnic wear: off-shoulder designer pattern tailored in premium raw silk fabric with soft pleating details."
//   },
//   {
//     id: 9,
//     src: "/images/dev_fashion/sadhana_beach1.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 10,
//     src: "/images/dev_fashion/sadhana_beach2.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 10,
//     src: "/images/dev_fashion/sadhana_beach3.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 10,
//     src: "/images/dev_fashion/sadhana_blue.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 11,
//     src: "/images/dev_fashion/sadhana_kid1.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 12,
//     src: "/images/dev_fashion/sadhana_main.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 13,
//     src: "/images/dev_fashion/sadhana_orange.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 14,
//     src: "/images/dev_fashion/sadhana_orange2.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 15,
//     src: "/images/dev_fashion/sadhana_red.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 16,
//     src: "/images/dev_fashion/sadhana_red2.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 17,
//     src: "/images/dev_fashion/sadhana_red3.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 18,
//     src: "/images/dev_fashion/sadhana_smile1.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 19,
//     src: "/images/dev_fashion/sadhana_smile2.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 20,
//     src: "/images/dev_fashion/sadhana_smile2_2.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 21,
//     src: "/images/dev_fashion/sadhana_smile3.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 22,
//     src: "/images/dev_fashion/sadhana_yello.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 23,
//     src: "/images/dev_fashion/sadhana1.png",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 24,
//     src: "/images/dev_fashion/sadhana2.jpeg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Party Wear",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 25,
//     src: "/images/dev_fashion/sadhana3.jpeg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 26,
//     src: "/images/dev_fashion/sadhana_night1.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 27,
//     src: "/images/dev_fashion/kid3.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 28,
//     src: "/images/dev_fashion/old_blouse1.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 29,
//     src: "/images/dev_fashion/old_blouse2.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 30,
//     src: "/images/dev_fashion/mehandhi.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 31,
//     src: "/images/dev_fashion/old_blouse4.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 31,
//     src: "/images/dev_fashion/old_blouse5.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 32,
//     src: "/images/dev_fashion/aari1.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 33,
//     src: "/images/dev_fashion/aari2.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 34,
//     src: "/images/dev_fashion/aari3.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 35,
//     src: "/images/dev_fashion/aari4.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 36,
//     src: "/images/dev_fashion/aari5.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 37,
//     src: "/images/dev_fashion/aari6.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 38,
//     src: "/images/dev_fashion/aari7.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 39,
//     src: "/images/dev_fashion/aari8.jpg",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 40,
//     src: "/images/dev_fashion/featured-aari.webp",
//     alt: "Luxury Custom Tailored Ethnic Outfit",
//     category: "Custom Designs",
//     title: "Luxury Ethnic Editorial",
//     description: "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."
//   },
//   {
//     id: 41,
//     src: "/images/dev_fashion/lan_bls1.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 42,
//     src: "/images/dev_fashion/lan_bls2.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 43,
//     src: "/images/dev_fashion/lan_bls3.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 44,
//     src: "/images/dev_fashion/lan_bls4.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 45,
//     src: "/images/dev_fashion/lan_bls5.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 46,
//     src: "/images/dev_fashion/lan_bls6.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 47,
//     src: "/images/dev_fashion/lan_bls7.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 48,
//     src: "/images/dev_fashion/lan_bls8.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 49,
//     src: "/images/dev_fashion/lan_bls9.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 50,
//     src: "/images/dev_fashion/lan_bls10.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 51,
//     src: "/images/dev_fashion/lan_bls11.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 52,
//     src: "/images/dev_fashion/lan_bls12.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 53,
//     src: "/images/dev_fashion/lan_bls13.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 54,
//     src: "/images/dev_fashion/lan_bls14.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 55,
//     src: "/images/dev_fashion/lan_bls15.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 56,
//     src: "/images/dev_fashion/lan_bls16.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 57,
//     src: "/images/dev_fashion/lan_bls17.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 58,
//     src: "/images/dev_fashion/lan_bls18.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 59,
//     src: "/images/dev_fashion/lan_bls19.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 60,
//     src: "/images/dev_fashion/lan_bls20.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 61,
//     src: "/images/dev_fashion/lan_bls21.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 62,
//     src: "/images/dev_fashion/lan_bls22.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 63,
//     src: "/images/dev_fashion/lan_bls23.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 64,
//     src: "/images/dev_fashion/lan_bls24.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 65,
//     src: "/images/dev_fashion/lan_bls25.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 66,
//     src: "/images/dev_fashion/lan_bls26.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 67,
//     src: "/images/dev_fashion/lan_bls27.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 68,
//     src: "/images/dev_fashion/lan_bls28.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 69,
//     src: "/images/dev_fashion/couple8.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 41,
//     src: "/images/dev_fashion/lan_bls1.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 41,
//     src: "/images/dev_fashion/lan_bls1.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 41,
//     src: "/images/dev_fashion/lan_bls1.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   },
//   {
//     id: 41,
//     src: "/images/dev_fashion/lan_bls1.jpg",
//     alt: "Bridal Lehanga Embroidery Detail",
//     category: "Bridal Collection",
//     title: "Intricate Bridal Lehanga Panel",
//     description: "Exquisite details of premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."
//   }
// ];

// const categories = [
//   "All",
//   "Bridal Collection",
//   "Designer Blouses",
//   "Party Wear",
//   "Traditional Wear",
//   "Festive Collection",
//   "Custom Designs"
// ];

// export default function GalleryLightbox() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

//   const filteredItems = selectedCategory === "All"
//     ? galleryItems
//     : galleryItems.filter(item => item.category === selectedCategory);

//   const handlePrev = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (activeImageIndex === null) return;
//     setActiveImageIndex(prev => 
//       prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
//     );
//   };

//   const handleNext = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (activeImageIndex === null) return;
//     setActiveImageIndex(prev => 
//       prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
//     );
//   };

//   return (
//     <div className="w-full">
//       {/* Category Filter Tabs */}
//       <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gold-200/50 pb-6 max-w-5xl mx-auto">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => {
//               setSelectedCategory(category);
//               setActiveImageIndex(null);
//             }}
//             className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none border ${
//               selectedCategory === category
//                 ? "bg-stone-900 border-stone-900 text-white"
//                 : "bg-white border-gold-200 hover:border-gold-500 text-stone-600 hover:text-stone-950"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Masonry-Style Image Grid */}
//       <motion.div 
//         layout
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//       >
//         <AnimatePresence mode="popLayout">
//           {filteredItems.map((item, index) => (
//             <motion.div
//               layout
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               key={item.id}
//               onClick={() => setActiveImageIndex(index)}
//               className="group relative cursor-pointer overflow-hidden border border-gold-200/50 bg-white hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Image Container with aspect ratio wrapper */}
//               <div className="relative aspect-[3/4] w-full overflow-hidden">
//                 <Image
//                   src={item.src}
//                   alt={item.alt}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   priority={item.id <= 4}
//                 />
                
//                 {/* Elegant Overlay */}
//                 <div className="absolute inset-0 bg-stone-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
                
//                 {/* Floating zoom indicator */}
//                 <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 text-stone-850 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md transform translate-y-[-10px] group-hover:translate-y-0">
//                   <ZoomIn className="w-4 h-4" />
//                 </div>

//                 {/* Info Text inside Overlay */}
//                 <div className="absolute inset-x-0 bottom-0 p-6 z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
//                   <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
//                     {item.category}
//                   </span>
//                   <h3 className="font-serif text-lg font-medium text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                     {item.title}
//                   </h3>
//                   <p className="text-[11px] text-stone-200 line-clamp-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {activeImageIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActiveImageIndex(null)}
//             className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setActiveImageIndex(null)}
//               className="absolute top-6 right-6 text-stone-400 hover:text-white p-2 focus:outline-none z-55"
//               aria-label="Close Lightbox"
//             >
//               <X className="w-8 h-8" />
//             </button>

//             {/* Slider Content Wrapper */}
//             <div 
//               onClick={(e) => e.stopPropagation()} 
//               className="relative max-w-6xl w-full flex flex-col lg:flex-row bg-white shadow-2xl border border-gold-300 overflow-hidden"
//             >
//               {/* Image Column */}
//               <div className="relative w-full lg:w-3/5 aspect-[4/5] lg:aspect-auto lg:h-[70vh] bg-stone-900 flex items-center justify-center">
//                 <Image
//                   src={filteredItems[activeImageIndex].src}
//                   alt={filteredItems[activeImageIndex].alt}
//                   fill
//                   className="object-contain"
//                 />

//                 {/* Nav buttons */}
//                 <button
//                   onClick={handlePrev}
//                   className="absolute left-4 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-none flex items-center justify-center transition-all"
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="absolute right-4 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-none flex items-center justify-center transition-all"
//                   aria-label="Next image"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </button>
//               </div>

//               {/* Text / Action Details Column */}
//               <div className="w-full lg:w-2/5 p-8 sm:p-10 flex flex-col justify-between bg-white text-stone-900">
//                 <div>
//                   <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase block mb-2">
//                     {filteredItems[activeImageIndex].category}
//                   </span>
                  
//                   <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-stone-950 mb-4">
//                     {filteredItems[activeImageIndex].title}
//                   </h2>
                  
//                   <div className="h-[1px] w-16 bg-gold-500 mb-6" />
                  
//                   <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
//                     {filteredItems[activeImageIndex].description}
//                   </p>

//                   <div className="bg-gold-50/50 border border-gold-150 p-4 mb-6">
//                     <span className="text-[10px] tracking-widest text-gold-700 font-semibold uppercase block mb-1">
//                       ✦ Fabric & Tailoring Note
//                     </span>
//                     <p className="text-stone-600 text-xs leading-relaxed">
//                       Custom measurements can be taken virtually or in person. Standard stitching timeline is 7-10 business days. Expedited delivery is available.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
//                   <Link
//                     href={`/contact?service=${encodeURIComponent(filteredItems[activeImageIndex].category)}&design=${encodeURIComponent(filteredItems[activeImageIndex].title)}#booking`}
//                     onClick={() => setActiveImageIndex(null)}
//                     className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors"
//                   >
//                     Request Customization
//                     <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
                  
//                   <a
//                     href={`https://wa.me/919025751328?text=Hi%20Dev%20Fashion%2C%20I%20am%20interested%20in%20customizing%20your%20design%3A%20${encodeURIComponent(filteredItems[activeImageIndex].title)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 px-6 py-3 border border-stone-900 hover:border-gold-600 text-stone-900 hover:text-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors"
//                   >
//                     WhatsApp Stylist
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------------------



// "use client";

// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { X, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  DATA                                                                      */
// /*  Add a photo by adding ONE line to `rawItems`.                             */
// /*  Title / description are optional – category defaults are used otherwise.  */
// /* -------------------------------------------------------------------------- */

// type Category =
//   | "Bridal Collection"
//   | "Designer Blouses"
//   | "Party Wear"
//   | "Traditional Wear"
//   | "Festive Collection"
//   | "Custom Designs";

// interface GalleryItem {
//   id: number;
//   src: string;
//   alt: string;
//   category: Category;
//   title: string;
//   description: string;
// }

// const BASE = "/images/dev_fashion/";
// const WHATSAPP = "918098558923";
// const PAGE_SIZE = 9;

// const categoryDefaults: Record<Category, { title: string; description: string }> = {
//   "Bridal Collection": {
//     title: "Bridal Couture",
//     description:
//       "Heavy zari and stone embroidery, hand-finished over weeks by our master karigars for your most important day.",
//   },
//   "Designer Blouses": {
//     title: "Designer Blouse",
//     description:
//       "Statement blouses with refined cutwork, beadwork and structured sleeves, tailored to your exact measurements.",
//   },
//   "Party Wear": {
//     title: "Evening Edit",
//     description:
//       "Contemporary silhouettes in premium fabrics, designed to be noticed from the moment you walk in.",
//   },
//   "Traditional Wear": {
//     title: "Heritage Weave",
//     description:
//       "Timeless drapes and raw-silk blouses finished with hand-crafted zari borders.",
//   },
//   "Festive Collection": {
//     title: "Festive Edit",
//     description:
//       "Lightweight, layered pieces with hand-painted details, made for celebration.",
//   },
//   "Custom Designs": {
//     title: "Bespoke Creation",
//     description:
//       "Drafted by hand for a perfect fit, with bespoke necklines and handcrafted embellishments.",
//   },
// };

// // [file, category, optional title, optional description]
// const rawItems: [string, Category, string?, string?][] = [
//   ["deeps2.jpeg", "Custom Designs", "Luxury Ethnic Editorial", "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."],
//   ["sai.jpeg", "Bridal Collection", "Royal Crimson Zardozi", "Premium velvet bridal blouse displaying rich handwoven gold zardozi patterns, tailored with a deep sweetheart back."],
//   ["ammu.jpeg", "Designer Blouses", "Sheer Cutwork Blouse", "Modern sheer net back blouse with floral cutwork, fine bead borders and structured elbow-length sleeves."],
//   ["deeps1.jpeg", "Traditional Wear", "Banarasi Heritage Styling", "A luxury drape matched with a raw-silk elbow sleeve blouse featuring hand-crafted zari borders."],
//   ["ammu_deeps.jpeg", "Festive Collection", "Pastel Meadow Lehenga", "A lightweight, layered georgette lehenga featuring hand-painted floral elements."],
//   ["ammu_sai.jpeg", "Custom Designs", "Tailoring Perfection", "Every pattern is hand-drafted by our master tailors to guarantee the perfect custom fit."],
//   ["sadha_bls1.jpeg", "Bridal Collection", "Bridal Lehenga Panel", "Premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."],
//   ["sadhana_back.jpg", "Party Wear", "Contemporary Indo-Western", "Off-shoulder designer pattern in premium raw silk with soft pleating details."],

//   ["sadhana_beach1.jpg", "Custom Designs"],
//   ["sadhana_beach2.jpg", "Custom Designs"],
//   ["sadhana_beach3.jpg", "Custom Designs"],
//   ["sadhana_blue.png", "Custom Designs"],
//   ["sadhana_kid1.png", "Custom Designs"],
//   ["sadhana_main.png", "Custom Designs"],
//   ["sadhana_orange.png", "Custom Designs"],
//   ["sadhana_orange2.png", "Custom Designs"],
//   ["sadhana_red.png", "Custom Designs"],
//   ["sadhana_red2.png", "Custom Designs"],
//   ["sadhana_red3.png", "Custom Designs"],
//   ["sadhana_smile1.jpg", "Custom Designs"],
//   ["sadhana_smile2.jpg", "Custom Designs"],
//   ["sadhana_smile2_2.jpg", "Custom Designs"],
//   ["sadhana_smile3.jpg", "Custom Designs"],
//   ["sadhana_yello.jpg", "Custom Designs"],
//   ["sadhana1.png", "Custom Designs"],
//   ["sadhana2.jpeg", "Party Wear"],
//   ["sadhana3.jpeg", "Custom Designs"],
//   ["sadhana_night1.jpg", "Custom Designs"],
//   ["kid3.jpg", "Custom Designs"],
//   ["old_blouse1.jpg", "Custom Designs"],
//   ["old_blouse2.jpg", "Custom Designs"],
//   ["mehandhi.jpg", "Custom Designs"],
//   ["old_blouse4.jpg", "Custom Designs"],
//   ["old_blouse5.jpg", "Custom Designs"],
//   ["aari1.jpg", "Custom Designs"],
//   ["aari2.jpg", "Custom Designs"],
//   ["aari3.jpg", "Custom Designs"],
//   ["aari4.jpg", "Custom Designs"],
//   ["aari5.jpg", "Custom Designs"],
//   ["aari6.jpg", "Custom Designs"],
//   ["aari7.jpg", "Custom Designs"],
//   ["aari8.jpg", "Custom Designs"],
//   ["featured-aari.webp", "Custom Designs"],

//   ...Array.from({ length: 28 }, (_, i): [string, Category] => [
//     `lan_bls${i + 1}.jpg`,
//     "Bridal Collection",
//   ]),
//   ["couple8.jpg", "Bridal Collection"],
// ];

// const galleryItems: GalleryItem[] = (() => {
//   const counters: Partial<Record<Category, number>> = {};
//   return rawItems.map(([file, category, title, description], index) => {
//     const defaults = categoryDefaults[category];
//     let finalTitle = title;
//     if (!finalTitle) {
//       counters[category] = (counters[category] ?? 0) + 1;
//       finalTitle = `${defaults.title} ${String(counters[category]).padStart(2, "0")}`;
//     }
//     return {
//       id: index + 1,
//       src: `${BASE}${file}`,
//       alt: `${finalTitle} – Dev Fashion`,
//       category,
//       title: finalTitle,
//       description: description ?? defaults.description,
//     };
//   });
// })();

// const categories: ("All" | Category)[] = [
//   "All",
//   "Bridal Collection",
//   "Designer Blouses",
//   "Party Wear",
//   "Traditional Wear",
//   "Festive Collection",
//   "Custom Designs",
// ];

// // The hero piece shown above the grid (change the id to feature another design)
// const FEATURED_ID = 2;

// const pad = (n: number) => String(n).padStart(2, "0");
// const EASE = [0.22, 1, 0.36, 1] as const;

// /* -------------------------------------------------------------------------- */
// /*  Parallax image – drifts slowly as you scroll                              */
// /* -------------------------------------------------------------------------- */

// function ParallaxImage({
//   src,
//   alt,
//   sizes,
//   priority,
// }: {
//   src: string;
//   alt: string;
//   sizes: string;
//   priority?: boolean;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

//   return (
//     <div ref={ref} className="absolute inset-0 overflow-hidden">
//       <motion.div style={{ y }} className="absolute -inset-[8%]">
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           sizes={sizes}
//           priority={priority}
//           className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
//         />
//       </motion.div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Component                                                                 */
// /* -------------------------------------------------------------------------- */

// export default function GalleryLightbox() {
//   const [selected, setSelected] = useState<"All" | Category>("All");
//   const [visible, setVisible] = useState(PAGE_SIZE);
//   const [active, setActive] = useState<number | null>(null);
//   const [direction, setDirection] = useState(1);
//   const [hovering, setHovering] = useState(false);

//   // custom "View" cursor
//   const mx = useMotionValue(-200);
//   const my = useMotionValue(-200);
//   const sx = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
//   const sy = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });

//   const filtered = useMemo(
//     () =>
//       selected === "All"
//         ? galleryItems
//         : galleryItems.filter((i) => i.category === selected),
//     [selected]
//   );

//   const counts = useMemo(() => {
//     const map: Record<string, number> = { All: galleryItems.length };
//     galleryItems.forEach((i) => (map[i.category] = (map[i.category] ?? 0) + 1));
//     return map;
//   }, []);

//   const featured = galleryItems.find((i) => i.id === FEATURED_ID) ?? galleryItems[0];
//   const shown = filtered.slice(0, visible);
//   const current = active !== null ? filtered[active] : null;

//   const go = useCallback(
//     (step: number) => {
//       setDirection(step);
//       setActive((prev) =>
//         prev === null ? prev : (prev + step + filtered.length) % filtered.length
//       );
//     },
//     [filtered.length]
//   );

//   const close = useCallback(() => setActive(null), []);

//   useEffect(() => {
//     if (active === null) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") go(1);
//       if (e.key === "ArrowLeft") go(-1);
//     };
//     window.addEventListener("keydown", onKey);
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [active, go, close]);

//   const changeCategory = (c: "All" | Category) => {
//     setSelected(c);
//     setVisible(PAGE_SIZE);
//     setActive(null);
//   };

//   const openAt = (index: number) => {
//     setDirection(1);
//     setActive(index);
//   };

//   return (
//     <section
//       className="relative w-full bg-[#faf7f2] px-5 py-20 text-stone-900 sm:px-10 sm:py-28"
//       onMouseMove={(e) => {
//         mx.set(e.clientX);
//         my.set(e.clientY);
//       }}
//     >
//       {/* ------------------------------ Header ------------------------------- */}
//       <header className="mx-auto mb-20 max-w-3xl text-center">
//         <div className="mb-6 flex items-center justify-center gap-4">
//           <span className="h-px w-10 bg-gold-500" />
//           <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-gold-600">
//             Dev Fashion
//           </span>
//           <span className="h-px w-10 bg-gold-500" />
//         </div>
//         <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-7xl">
//           The <em className="font-normal italic">Lookbook</em>
//         </h2>
//         <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-stone-500">
//           A curated archive of bespoke bridal, blouse and festive couture –
//           every piece drafted, embroidered and finished by hand.
//         </p>
//       </header>

//       {/* ---------------------------- Featured piece ------------------------- */}
//       {selected === "All" && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.9 }}
//           className="mx-auto mb-28 grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16"
//         >
//           <button
//             onClick={() => openAt(galleryItems.indexOf(featured))}
//             onMouseEnter={() => setHovering(true)}
//             onMouseLeave={() => setHovering(false)}
//             aria-label={`View ${featured.title}`}
//             className="group relative aspect-[4/5] w-full cursor-none overflow-hidden bg-stone-200 lg:col-span-7 lg:aspect-[5/6]"
//           >
//             <ParallaxImage
//               src={featured.src}
//               alt={featured.alt}
//               sizes="(max-width: 1024px) 100vw, 58vw"
//               priority
//             />
//             <div className="pointer-events-none absolute inset-4 border border-white/40 sm:inset-6" />
//           </button>

//           <div className="lg:col-span-5">
//             <span className="font-serif text-sm italic text-gold-600">
//               The Signature Piece
//             </span>
//             <h3 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
//               {featured.title}
//             </h3>
//             <div className="my-8 h-px w-16 bg-gold-500" />
//             <p className="max-w-md text-sm leading-[1.9] text-stone-600">
//               {featured.description}
//             </p>
//             <button
//               onClick={() => openAt(galleryItems.indexOf(featured))}
//               className="group mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-stone-900"
//             >
//               <span className="border-b border-stone-900 pb-1 transition-colors group-hover:border-gold-500 group-hover:text-gold-600">
//                 View Piece
//               </span>
//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {/* ------------------------------ Filters ------------------------------ */}
//       <nav
//         aria-label="Gallery categories"
//         className="mx-auto mb-16 max-w-6xl border-y border-stone-300/70 py-5"
//       >
//         <ul className="flex items-center gap-8 overflow-x-auto px-1 sm:justify-center sm:gap-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//           {categories.map((c) => {
//             const isActive = selected === c;
//             return (
//               <li key={c} className="shrink-0">
//                 <button
//                   onClick={() => changeCategory(c)}
//                   className={`relative flex items-baseline gap-2 font-serif text-lg transition-colors duration-300 ${
//                     isActive
//                       ? "italic text-stone-950"
//                       : "text-stone-400 hover:text-stone-700"
//                   }`}
//                 >
//                   {c}
//                   <span className="text-[10px] font-sans not-italic tracking-widest text-gold-600">
//                     {pad(counts[c] ?? 0)}
//                   </span>
//                   {isActive && (
//                     <motion.span
//                       layoutId="lookbook-dot"
//                       className="absolute -bottom-[22px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-gold-500"
//                       transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                     />
//                   )}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* -------------------------------- Grid ------------------------------- */}
//       <motion.div
//         key={selected}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="mx-auto grid max-w-7xl grid-cols-2 items-start gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-24"
//       >
//         {shown.map((item, index) => (
//           <figure
//             key={item.id}
//             className="lg:[&:nth-child(3n+2)]:mt-28"
//           >
//             <button
//               onClick={() => openAt(index)}
//               onMouseEnter={() => setHovering(true)}
//               onMouseLeave={() => setHovering(false)}
//               aria-label={`View ${item.title}`}
//               className="group relative block w-full cursor-none text-left"
//             >
//               <motion.div
//                 initial={{ clipPath: "inset(0 0 100% 0)" }}
//                 whileInView={{ clipPath: "inset(0 0 0% 0)" }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 1.2, ease: EASE, delay: (index % 3) * 0.1 }}
//                 className={`relative w-full overflow-hidden bg-stone-200 ${
//                   index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"
//                 }`}
//               >
//                 <ParallaxImage
//                   src={item.src}
//                   alt={item.alt}
//                   sizes="(max-width: 1024px) 50vw, 33vw"
//                   priority={index < 3}
//                 />
//                 <div className="pointer-events-none absolute inset-3 border border-white/0 transition-colors duration-700 group-hover:border-white/60 sm:inset-4" />
//               </motion.div>

//               <figcaption className="mt-5 flex items-baseline justify-between gap-4">
//                 <div>
//                   <h3 className="font-serif text-lg leading-snug sm:text-xl">
//                     {item.title}
//                   </h3>
//                   <p className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-stone-500">
//                     {item.category}
//                   </p>
//                 </div>
//                 <span className="shrink-0 font-serif text-sm italic text-gold-600">
//                   № {pad(item.id)}
//                 </span>
//               </figcaption>
//             </button>
//           </figure>
//         ))}
//       </motion.div>

//       {/* ------------------------------ Load more ---------------------------- */}
//       <div className="mt-24 flex flex-col items-center gap-5">
//         <p className="font-serif text-sm italic text-stone-500">
//           {pad(shown.length)} of {pad(filtered.length)} pieces
//         </p>
//         {visible < filtered.length && (
//           <button
//             onClick={() => setVisible((v) => v + PAGE_SIZE)}
//             className="group inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em]"
//           >
//             <span className="h-px w-10 bg-stone-900 transition-all duration-500 group-hover:w-16 group-hover:bg-gold-500" />
//             Discover More
//             <span className="h-px w-10 bg-stone-900 transition-all duration-500 group-hover:w-16 group-hover:bg-gold-500" />
//           </button>
//         )}
//       </div>

//       {/* --------------------------- "View" cursor --------------------------- */}
//       <motion.div
//         aria-hidden
//         style={{ x: sx, y: sy }}
//         className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
//       >
//         <motion.div
//           animate={{ scale: hovering && active === null ? 1 : 0, opacity: hovering && active === null ? 1 : 0 }}
//           transition={{ duration: 0.35, ease: EASE }}
//           className="-ml-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-[10px] font-medium uppercase tracking-[0.25em] text-stone-900 shadow-xl backdrop-blur-sm"
//         >
//           View
//         </motion.div>
//       </motion.div>

//       {/* ------------------------------ Lightbox ----------------------------- */}
//       <AnimatePresence>
//         {current && active !== null && (
//           <motion.div
//             role="dialog"
//             aria-modal="true"
//             aria-label={current.title}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="fixed inset-0 z-50 flex flex-col bg-[#0d0c0b] text-white"
//           >
//             {/* top bar */}
//             <div className="flex items-center justify-between px-6 py-5 sm:px-10">
//               <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-stone-500">
//                 Dev Fashion <span className="mx-2 text-gold-500">/</span> Lookbook
//               </span>
//               <button
//                 onClick={close}
//                 aria-label="Close"
//                 className="group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-stone-400 transition-colors hover:text-white"
//               >
//                 Close
//                 <X className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//             </div>

//             {/* stage */}
//             <div className="relative min-h-0 flex-1">
//               <AnimatePresence initial={false} custom={direction} mode="popLayout">
//                 <motion.div
//                   key={current.id}
//                   custom={direction}
//                   variants={{
//                     enter: (d: number) => ({ opacity: 0, x: d * 80, scale: 0.98 }),
//                     center: { opacity: 1, x: 0, scale: 1 },
//                     exit: (d: number) => ({ opacity: 0, x: d * -80, scale: 0.98 }),
//                   }}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 0.6, ease: EASE }}
//                   drag="x"
//                   dragConstraints={{ left: 0, right: 0 }}
//                   dragElastic={0.2}
//                   onDragEnd={(_, info) => {
//                     if (info.offset.x < -80) go(1);
//                     else if (info.offset.x > 80) go(-1);
//                   }}
//                   className="absolute inset-0 px-6 sm:px-24"
//                 >
//                   <div className="relative h-full w-full">
//                     <Image
//                       src={current.src}
//                       alt={current.alt}
//                       fill
//                       sizes="100vw"
//                       priority
//                       draggable={false}
//                       className="select-none object-contain"
//                     />
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               <button
//                 onClick={() => go(-1)}
//                 aria-label="Previous"
//                 className="absolute left-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-stone-300 backdrop-blur transition-all hover:border-gold-400 hover:text-gold-400 sm:flex sm:left-8"
//               >
//                 <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//               <button
//                 onClick={() => go(1)}
//                 aria-label="Next"
//                 className="absolute right-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-stone-300 backdrop-blur transition-all hover:border-gold-400 hover:text-gold-400 sm:flex sm:right-8"
//               >
//                 <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//             </div>

//             {/* caption bar */}
//             <div className="grid gap-6 border-t border-white/10 px-6 py-6 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
//               <div className="max-w-xl">
//                 <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold-400">
//                   {current.category}
//                 </span>
//                 <h2 className="mt-2 font-serif text-2xl font-light italic sm:text-3xl">
//                   {current.title}
//                 </h2>
//                 <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-400">
//                   {current.description}
//                 </p>
//               </div>

//               <div className="font-serif text-lg tracking-[0.2em] text-stone-500 lg:text-center">
//                 <span className="text-white">{pad(active + 1)}</span>
//                 <span className="mx-3 text-gold-500">—</span>
//                 {pad(filtered.length)}
//               </div>

//               <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:justify-end">
//                 <Link
//                   href={`/contact?service=${encodeURIComponent(current.category)}&design=${encodeURIComponent(current.title)}#booking`}
//                   onClick={close}
//                   className="group inline-flex items-center gap-2 bg-gold-500 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-950 transition-colors hover:bg-gold-400"
//                 >
//                   Request Customization
//                   <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//                 </Link>
//                 <a
//                   href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
//                     `Hi Dev Fashion, I am interested in customizing your design: ${current.title}`
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="border-b border-white/30 pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-gold-400 hover:text-gold-400"
//                 >
//                   WhatsApp Stylist
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }









//-------------------------------------------------------



// "use client";

// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useScroll,
//   useReducedMotion,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { X, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  DATA                                                                      */
// /*  Add a photo by adding ONE line to `rawItems`.                             */
// /*  Title / description are optional – category defaults are used otherwise.  */
// /* -------------------------------------------------------------------------- */

// type Category =
//   | "Bridal Collection"
//   | "Designer Blouses"
//   | "Party Wear"
//   | "Traditional Wear"
//   | "Festive Collection"
//   | "Custom Designs";

// interface GalleryItem {
//   id: number;
//   src: string;
//   alt: string;
//   category: Category;
//   title: string;
//   description: string;
// }

// const BASE = "/images/dev_fashion/";
// const WHATSAPP = "919025751328";
// const PAGE_SIZE = 9;

// const categoryDefaults: Record<Category, { title: string; description: string }> = {
//   "Bridal Collection": {
//     title: "Bridal Couture",
//     description:
//       "Heavy zari and stone embroidery, hand-finished over weeks by our master karigars for your most important day.",
//   },
//   "Designer Blouses": {
//     title: "Designer Blouse",
//     description:
//       "Statement blouses with refined cutwork, beadwork and structured sleeves, tailored to your exact measurements.",
//   },
//   "Party Wear": {
//     title: "Evening Edit",
//     description:
//       "Contemporary silhouettes in premium fabrics, designed to be noticed from the moment you walk in.",
//   },
//   "Traditional Wear": {
//     title: "Heritage Weave",
//     description:
//       "Timeless drapes and raw-silk blouses finished with hand-crafted zari borders.",
//   },
//   "Festive Collection": {
//     title: "Festive Edit",
//     description:
//       "Lightweight, layered pieces with hand-painted details, made for celebration.",
//   },
//   "Custom Designs": {
//     title: "Bespoke Creation",
//     description:
//       "Drafted by hand for a perfect fit, with bespoke necklines and handcrafted embellishments.",
//   },
// };

// // [file, category, optional title, optional description]
// const rawItems: [string, Category, string?, string?][] = [
//   ["deeps2.jpeg", "Custom Designs", "Luxury Ethnic Editorial", "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."],
//   ["sai.jpeg", "Bridal Collection", "Royal Crimson Zardozi", "Premium velvet bridal blouse displaying rich handwoven gold zardozi patterns, tailored with a deep sweetheart back."],
//   ["ammu.jpeg", "Designer Blouses", "Sheer Cutwork Blouse", "Modern sheer net back blouse with floral cutwork, fine bead borders and structured elbow-length sleeves."],
//   ["deeps1.jpeg", "Traditional Wear", "Banarasi Heritage Styling", "A luxury drape matched with a raw-silk elbow sleeve blouse featuring hand-crafted zari borders."],
//   ["ammu_deeps.jpeg", "Festive Collection", "Pastel Meadow Lehenga", "A lightweight, layered georgette lehenga featuring hand-painted floral elements."],
//   ["ammu_sai.jpeg", "Custom Designs", "Tailoring Perfection", "Every pattern is hand-drafted by our master tailors to guarantee the perfect custom fit."],
//   ["sadha_bls1.jpeg", "Bridal Collection", "Bridal Lehenga Panel", "Premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."],
//   ["sadhana_back.jpg", "Party Wear", "Contemporary Indo-Western", "Off-shoulder designer pattern in premium raw silk with soft pleating details."],

//   ["sadhana_beach1.jpg", "Custom Designs"],
//   ["sadhana_beach2.jpg", "Custom Designs"],
//   ["sadhana_beach3.jpg", "Custom Designs"],
//   ["sadhana_blue.png", "Custom Designs"],
//   ["sadhana_kid1.png", "Custom Designs"],
//   ["sadhana_main.png", "Custom Designs"],
//   ["sadhana_orange.png", "Custom Designs"],
//   ["sadhana_orange2.png", "Custom Designs"],
//   ["sadhana_red.png", "Custom Designs"],
//   ["sadhana_red2.png", "Custom Designs"],
//   ["sadhana_red3.png", "Custom Designs"],
//   ["sadhana_smile1.jpg", "Custom Designs"],
//   ["sadhana_smile2.jpg", "Custom Designs"],
//   ["sadhana_smile2_2.jpg", "Custom Designs"],
//   ["sadhana_smile3.jpg", "Custom Designs"],
//   ["sadhana_yello.jpg", "Custom Designs"],
//   ["sadhana1.png", "Custom Designs"],
//   ["sadhana2.jpeg", "Party Wear"],
//   ["sadhana3.jpeg", "Custom Designs"],
//   ["sadhana_night1.jpg", "Custom Designs"],
//   ["kid3.jpg", "Custom Designs"],
//   ["old_blouse1.jpg", "Custom Designs"],
//   ["old_blouse2.jpg", "Custom Designs"],
//   ["mehandhi.jpg", "Custom Designs"],
//   ["old_blouse4.jpg", "Custom Designs"],
//   ["old_blouse5.jpg", "Custom Designs"],
//   ["aari1.jpg", "Custom Designs"],
//   ["aari2.jpg", "Custom Designs"],
//   ["aari3.jpg", "Custom Designs"],
//   ["aari4.jpg", "Custom Designs"],
//   ["aari5.jpg", "Custom Designs"],
//   ["aari6.jpg", "Custom Designs"],
//   ["aari7.jpg", "Custom Designs"],
//   ["aari8.jpg", "Custom Designs"],
//   ["featured-aari.webp", "Custom Designs"],

//   ...Array.from({ length: 28 }, (_, i): [string, Category] => [
//     `lan_bls${i + 1}.jpg`,
//     "Bridal Collection",
//   ]),
//   ["couple8.jpg", "Bridal Collection"],
// ];

// const galleryItems: GalleryItem[] = (() => {
//   const counters: Partial<Record<Category, number>> = {};
//   return rawItems.map(([file, category, title, description], index) => {
//     const defaults = categoryDefaults[category];
//     let finalTitle = title;
//     if (!finalTitle) {
//       counters[category] = (counters[category] ?? 0) + 1;
//       finalTitle = `${defaults.title} ${String(counters[category]).padStart(2, "0")}`;
//     }
//     return {
//       id: index + 1,
//       src: `${BASE}${file}`,
//       alt: `${finalTitle} – Dev Fashion`,
//       category,
//       title: finalTitle,
//       description: description ?? defaults.description,
//     };
//   });
// })();

// const categories: ("All" | Category)[] = [
//   "All",
//   "Bridal Collection",
//   "Designer Blouses",
//   "Party Wear",
//   "Traditional Wear",
//   "Festive Collection",
//   "Custom Designs",
// ];

// // The hero piece text shown above the grid (change the id to feature another design)
// const FEATURED_ID = 2;

// // Images that rotate automatically in the Signature Piece section.
// // Add, remove or reorder file names to curate the slideshow.
// const FEATURED_SLIDE_FILES = [
//   "sadhana_main.png",
//   "sadhana_red.png",
//   "sadhana_red2.png",
//   "sadhana_red3.png",
//   "sadhana_blue.png",
//   "sadhana_orange.png",
//   "sadhana_orange2.png",
//   "sadhana_yello.jpg",
//   "sadhana_smile1.jpg",
//   "sadhana_night1.jpg",
//   "sadhana1.png",
// ];
// const SLIDE_MS = 4500;

// const pad = (n: number) => String(n).padStart(2, "0");
// const EASE = [0.22, 1, 0.36, 1] as const;

// /* -------------------------------------------------------------------------- */
// /*  Parallax image – drifts slowly as you scroll                              */
// /* -------------------------------------------------------------------------- */

// function ParallaxImage({
//   src,
//   alt,
//   sizes,
//   priority,
// }: {
//   src: string;
//   alt: string;
//   sizes: string;
//   priority?: boolean;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

//   return (
//     <div ref={ref} className="absolute inset-0 overflow-hidden">
//       <motion.div style={{ y }} className="absolute -inset-[8%]">
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           sizes={sizes}
//           priority={priority}
//           className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
//         />
//       </motion.div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Component                                                                 */
// /* -------------------------------------------------------------------------- */

// export default function GalleryLightbox() {
//   const [selected, setSelected] = useState<"All" | Category>("All");
//   const [visible, setVisible] = useState(PAGE_SIZE);
//   const [active, setActive] = useState<number | null>(null);
//   const [direction, setDirection] = useState(1);
//   const [hovering, setHovering] = useState(false);

//   // custom "View" cursor
//   const mx = useMotionValue(-200);
//   const my = useMotionValue(-200);
//   const sx = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
//   const sy = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });

//   const filtered = useMemo(
//     () =>
//       selected === "All"
//         ? galleryItems
//         : galleryItems.filter((i) => i.category === selected),
//     [selected]
//   );

//   const counts = useMemo(() => {
//     const map: Record<string, number> = { All: galleryItems.length };
//     galleryItems.forEach((i) => (map[i.category] = (map[i.category] ?? 0) + 1));
//     return map;
//   }, []);

//   const featured = galleryItems.find((i) => i.id === FEATURED_ID) ?? galleryItems[0];

//   // Slideshow for the Signature Piece
//   const slides = useMemo(() => {
//     const list = FEATURED_SLIDE_FILES.map((f) =>
//       galleryItems.find((i) => i.src === `${BASE}${f}`)
//     ).filter((i): i is GalleryItem => Boolean(i));
//     return list.length ? list : [featured];
//   }, [featured]);
//   const [slide, setSlide] = useState(0);
//   const [slidePaused, setSlidePaused] = useState(false);
//   const reduceMotion = useReducedMotion();

//   useEffect(() => {
//     if (reduceMotion || slidePaused || active !== null || slides.length < 2) return;
//     const t = setTimeout(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS);
//     return () => clearTimeout(t);
//   }, [slide, slidePaused, active, reduceMotion, slides.length]);

//   const shown = filtered.slice(0, visible);
//   const current = active !== null ? filtered[active] : null;

//   const go = useCallback(
//     (step: number) => {
//       setDirection(step);
//       setActive((prev) =>
//         prev === null ? prev : (prev + step + filtered.length) % filtered.length
//       );
//     },
//     [filtered.length]
//   );

//   const close = useCallback(() => setActive(null), []);

//   useEffect(() => {
//     if (active === null) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") go(1);
//       if (e.key === "ArrowLeft") go(-1);
//     };
//     window.addEventListener("keydown", onKey);
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [active, go, close]);

//   const changeCategory = (c: "All" | Category) => {
//     setSelected(c);
//     setVisible(PAGE_SIZE);
//     setActive(null);
//   };

//   const openAt = (index: number) => {
//     setDirection(1);
//     setActive(index);
//   };

//   return (
//     <section
//       className="relative w-full bg-[#faf7f2] px-5 py-20 text-stone-900 sm:px-10 sm:py-28"
//       onMouseMove={(e) => {
//         mx.set(e.clientX);
//         my.set(e.clientY);
//       }}
//     >
//       {/* ------------------------------ Header ------------------------------- */}
//       <header className="mx-auto mb-20 max-w-3xl text-center">
//         <div className="mb-6 flex items-center justify-center gap-4">
//           <span className="h-px w-10 bg-gold-500" />
//           <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-gold-600">
//             Dev Fashion
//           </span>
//           <span className="h-px w-10 bg-gold-500" />
//         </div>
//         <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-7xl">
//           The <em className="font-normal italic">Lookbook</em>
//         </h2>
//         <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-stone-500">
//           A curated archive of bespoke bridal, blouse and festive couture –
//           every piece drafted, embroidered and finished by hand.
//         </p>
//       </header>

//       {/* ---------------------------- Featured piece ------------------------- */}
//       {selected === "All" && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.9 }}
//           className="mx-auto mb-28 grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16"
//         >
//           <div
//             className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200 lg:col-span-7 lg:aspect-[5/6]"
//             onMouseEnter={() => setSlidePaused(true)}
//             onMouseLeave={() => setSlidePaused(false)}
//           >
//             {/* stacked slides – crossfade + slow zoom */}
//             <button
//               onClick={() => openAt(galleryItems.indexOf(slides[slide]))}
//               onMouseEnter={() => setHovering(true)}
//               onMouseLeave={() => setHovering(false)}
//               aria-label={`View ${slides[slide].title}`}
//               className="absolute inset-0 cursor-none"
//             >
//               {slides.map((s, i) => {
//                 const isActive = i === slide;
//                 return (
//                   <motion.div
//                     key={s.id}
//                     initial={false}
//                     animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.12 }}
//                     transition={{
//                       opacity: { duration: 1.4, ease: "easeInOut" },
//                       scale: { duration: isActive ? SLIDE_MS / 1000 + 2 : 1.4, ease: "easeOut" },
//                     }}
//                     className="absolute inset-0"
//                     aria-hidden={!isActive}
//                   >
//                     <Image
//                       src={s.src}
//                       alt={s.alt}
//                       fill
//                       sizes="(max-width: 1024px) 100vw, 58vw"
//                       priority={i < 2}
//                       className="object-cover"
//                     />
//                   </motion.div>
//                 );
//               })}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
//               <div className="pointer-events-none absolute inset-4 border border-white/40 sm:inset-6" />
//             </button>

//             {/* counter */}
//             <div className="pointer-events-none absolute left-8 top-8 font-serif text-sm tracking-[0.25em] text-white sm:left-10 sm:top-10">
//               {pad(slide + 1)}
//               <span className="mx-2 text-gold-400">/</span>
//               <span className="text-white/60">{pad(slides.length)}</span>
//             </div>

//             {/* indicators */}
//             <div className="absolute inset-x-8 bottom-8 flex items-center gap-2 sm:inset-x-10 sm:bottom-10">
//               {slides.map((s, i) => (
//                 <button
//                   key={s.id}
//                   onClick={() => setSlide(i)}
//                   aria-label={`Show look ${i + 1}`}
//                   className="group/bar flex h-6 flex-1 items-center"
//                 >
//                   <span
//                     className={`block h-px w-full transition-all duration-500 group-hover/bar:h-[3px] ${
//                       i === slide ? "h-[3px] bg-gold-400" : "bg-white/40"
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="lg:col-span-5">
//             <span className="font-serif text-sm italic text-gold-600">
//               The Signature Piece
//             </span>
//             <h3 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
//               {featured.title}
//             </h3>
//             <div className="my-8 h-px w-16 bg-gold-500" />
//             <p className="max-w-md text-sm leading-[1.9] text-stone-600">
//               {featured.description}
//             </p>
//             <button
//               onClick={() => openAt(galleryItems.indexOf(slides[slide]))}
//               className="group mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-stone-900"
//             >
//               <span className="border-b border-stone-900 pb-1 transition-colors group-hover:border-gold-500 group-hover:text-gold-600">
//                 View Piece
//               </span>
//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {/* ------------------------------ Filters ------------------------------ */}
//       <nav
//         aria-label="Gallery categories"
//         className="mx-auto mb-16 max-w-6xl border-y border-stone-300/70 py-5"
//       >
//         <ul className="flex items-center gap-8 overflow-x-auto px-1 sm:justify-center sm:gap-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//           {categories.map((c) => {
//             const isActive = selected === c;
//             return (
//               <li key={c} className="shrink-0">
//                 <button
//                   onClick={() => changeCategory(c)}
//                   className={`relative flex items-baseline gap-2 font-serif text-lg transition-colors duration-300 ${
//                     isActive
//                       ? "italic text-stone-950"
//                       : "text-stone-400 hover:text-stone-700"
//                   }`}
//                 >
//                   {c}
//                   <span className="text-[10px] font-sans not-italic tracking-widest text-gold-600">
//                     {pad(counts[c] ?? 0)}
//                   </span>
//                   {isActive && (
//                     <motion.span
//                       layoutId="lookbook-dot"
//                       className="absolute -bottom-[22px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-gold-500"
//                       transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                     />
//                   )}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* -------------------------------- Grid ------------------------------- */}
//       <motion.div
//         key={selected}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="mx-auto grid max-w-7xl grid-cols-2 items-start gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-24"
//       >
//         {shown.map((item, index) => (
//           <figure
//             key={item.id}
//             className="lg:[&:nth-child(3n+2)]:mt-28"
//           >
//             <button
//               onClick={() => openAt(index)}
//               onMouseEnter={() => setHovering(true)}
//               onMouseLeave={() => setHovering(false)}
//               aria-label={`View ${item.title}`}
//               className="group relative block w-full cursor-none text-left"
//             >
//               <motion.div
//                 initial={{ clipPath: "inset(0 0 100% 0)" }}
//                 whileInView={{ clipPath: "inset(0 0 0% 0)" }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 1.2, ease: EASE, delay: (index % 3) * 0.1 }}
//                 className={`relative w-full overflow-hidden bg-stone-200 ${
//                   index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"
//                 }`}
//               >
//                 <ParallaxImage
//                   src={item.src}
//                   alt={item.alt}
//                   sizes="(max-width: 1024px) 50vw, 33vw"
//                   priority={index < 3}
//                 />
//                 <div className="pointer-events-none absolute inset-3 border border-white/0 transition-colors duration-700 group-hover:border-white/60 sm:inset-4" />
//               </motion.div>

//               <figcaption className="mt-5 flex items-baseline justify-between gap-4">
//                 <div>
//                   <h3 className="font-serif text-lg leading-snug sm:text-xl">
//                     {item.title}
//                   </h3>
//                   <p className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-stone-500">
//                     {item.category}
//                   </p>
//                 </div>
//                 <span className="shrink-0 font-serif text-sm italic text-gold-600">
//                   № {pad(item.id)}
//                 </span>
//               </figcaption>
//             </button>
//           </figure>
//         ))}
//       </motion.div>

//       {/* ------------------------------ Load more ---------------------------- */}
//       <div className="mt-24 flex flex-col items-center gap-5">
//         <p className="font-serif text-sm italic text-stone-500">
//           {pad(shown.length)} of {pad(filtered.length)} pieces
//         </p>
//         {visible < filtered.length && (
//           <button
//             onClick={() => setVisible((v) => v + PAGE_SIZE)}
//             className="group inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em]"
//           >
//             <span className="h-px w-10 bg-stone-900 transition-all duration-500 group-hover:w-16 group-hover:bg-gold-500" />
//             Discover More
//             <span className="h-px w-10 bg-stone-900 transition-all duration-500 group-hover:w-16 group-hover:bg-gold-500" />
//           </button>
//         )}
//       </div>

//       {/* --------------------------- "View" cursor --------------------------- */}
//       <motion.div
//         aria-hidden
//         style={{ x: sx, y: sy }}
//         className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
//       >
//         <motion.div
//           animate={{ scale: hovering && active === null ? 1 : 0, opacity: hovering && active === null ? 1 : 0 }}
//           transition={{ duration: 0.35, ease: EASE }}
//           className="-ml-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-[10px] font-medium uppercase tracking-[0.25em] text-stone-900 shadow-xl backdrop-blur-sm"
//         >
//           View
//         </motion.div>
//       </motion.div>

//       {/* ------------------------------ Lightbox ----------------------------- */}
//       <AnimatePresence>
//         {current && active !== null && (
//           <motion.div
//             role="dialog"
//             aria-modal="true"
//             aria-label={current.title}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="fixed inset-0 z-50 flex flex-col bg-[#0d0c0b] text-white"
//           >
//             {/* top bar */}
//             <div className="flex items-center justify-between px-6 py-5 sm:px-10">
//               <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-stone-500">
//                 Dev Fashion <span className="mx-2 text-gold-500">/</span> Lookbook
//               </span>
//               <button
//                 onClick={close}
//                 aria-label="Close"
//                 className="group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-stone-400 transition-colors hover:text-white"
//               >
//                 Close
//                 <X className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//             </div>

//             {/* stage */}
//             <div className="relative min-h-0 flex-1">
//               <AnimatePresence initial={false} custom={direction} mode="popLayout">
//                 <motion.div
//                   key={current.id}
//                   custom={direction}
//                   variants={{
//                     enter: (d: number) => ({ opacity: 0, x: d * 80, scale: 0.98 }),
//                     center: { opacity: 1, x: 0, scale: 1 },
//                     exit: (d: number) => ({ opacity: 0, x: d * -80, scale: 0.98 }),
//                   }}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 0.6, ease: EASE }}
//                   drag="x"
//                   dragConstraints={{ left: 0, right: 0 }}
//                   dragElastic={0.2}
//                   onDragEnd={(_, info) => {
//                     if (info.offset.x < -80) go(1);
//                     else if (info.offset.x > 80) go(-1);
//                   }}
//                   className="absolute inset-0 px-6 sm:px-24"
//                 >
//                   <div className="relative h-full w-full">
//                     <Image
//                       src={current.src}
//                       alt={current.alt}
//                       fill
//                       sizes="100vw"
//                       priority
//                       draggable={false}
//                       className="select-none object-contain"
//                     />
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               <button
//                 onClick={() => go(-1)}
//                 aria-label="Previous"
//                 className="absolute left-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-stone-300 backdrop-blur transition-all hover:border-gold-400 hover:text-gold-400 sm:flex sm:left-8"
//               >
//                 <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//               <button
//                 onClick={() => go(1)}
//                 aria-label="Next"
//                 className="absolute right-3 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-stone-300 backdrop-blur transition-all hover:border-gold-400 hover:text-gold-400 sm:flex sm:right-8"
//               >
//                 <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//             </div>

//             {/* caption bar */}
//             <div className="grid gap-6 border-t border-white/10 px-6 py-6 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
//               <div className="max-w-xl">
//                 <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold-400">
//                   {current.category}
//                 </span>
//                 <h2 className="mt-2 font-serif text-2xl font-light italic sm:text-3xl">
//                   {current.title}
//                 </h2>
//                 <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-400">
//                   {current.description}
//                 </p>
//               </div>

//               <div className="font-serif text-lg tracking-[0.2em] text-stone-500 lg:text-center">
//                 <span className="text-white">{pad(active + 1)}</span>
//                 <span className="mx-3 text-gold-500">—</span>
//                 {pad(filtered.length)}
//               </div>

//               <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:justify-end">
//                 <Link
//                   href={`/contact?service=${encodeURIComponent(current.category)}&design=${encodeURIComponent(current.title)}#booking`}
//                   onClick={close}
//                   className="group inline-flex items-center gap-2 bg-gold-500 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-950 transition-colors hover:bg-gold-400"
//                 >
//                   Request Customization
//                   <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//                 </Link>
//                 <a
//                   href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
//                     `Hi Dev Fashion, I am interested in customizing your design: ${current.title}`
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="border-b border-white/30 pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-gold-400 hover:text-gold-400"
//                 >
//                   WhatsApp Stylist
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


//-000000000000------------------------------------------------------------------------------------------------



// "use client";

// import {
//   memo,
//   startTransition,
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useReducedMotion,
//   useSpring,
// } from "framer-motion";
// import { X, ArrowLeft, ArrowRight, ArrowUpRight, Heart, MessageCircle } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  DATA                                                                      */
// /*  Add a photo by adding ONE line to `rawItems`.                             */
// /*  Title / description are optional – category defaults are used otherwise.  */
// /* -------------------------------------------------------------------------- */

// type Category =
//   | "Bridal Collection"
//   | "Designer Blouses"
//   | "Party Wear"
//   | "Traditional Wear"
//   | "Festive Collection"
//   | "Custom Designs";

// interface GalleryItem {
//   id: number;
//   src: string;
//   alt: string;
//   category: Category;
//   title: string;
//   description: string;
// }

// const BASE = "/images/dev_fashion/";
// const WHATSAPP = "919025751328";
// const PAGE_SIZE = 12; // divisible by 2 and 3 columns
// const STORAGE_KEY = "devfashion:my-edit";

// const categoryDefaults: Record<Category, { title: string; description: string }> = {
//   "Bridal Collection": {
//     title: "Bridal Couture",
//     description:
//       "Heavy zari and stone embroidery, hand-finished over weeks by our master karigars for your most important day.",
//   },
//   "Designer Blouses": {
//     title: "Designer Blouse",
//     description:
//       "Statement blouses with refined cutwork, beadwork and structured sleeves, tailored to your exact measurements.",
//   },
//   "Party Wear": {
//     title: "Evening Edit",
//     description:
//       "Contemporary silhouettes in premium fabrics, designed to be noticed from the moment you walk in.",
//   },
//   "Traditional Wear": {
//     title: "Heritage Weave",
//     description:
//       "Timeless drapes and raw-silk blouses finished with hand-crafted zari borders.",
//   },
//   "Festive Collection": {
//     title: "Festive Edit",
//     description:
//       "Lightweight, layered pieces with hand-painted details, made for celebration.",
//   },
//   "Custom Designs": {
//     title: "Bespoke Creation",
//     description:
//       "Drafted by hand for a perfect fit, with bespoke necklines and handcrafted embellishments.",
//   },
// };

// // [file, category, optional title, optional description]
// const rawItems: [string, Category, string?, string?][] = [
//   ["deeps2.jpeg", "Custom Designs", "Luxury Ethnic Editorial", "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."],
//   ["sai.jpeg", "Bridal Collection", "Royal Crimson Zardozi", "Premium velvet bridal blouse displaying rich handwoven gold zardozi patterns, tailored with a deep sweetheart back."],
//   ["ammu.jpeg", "Designer Blouses", "Sheer Cutwork Blouse", "Modern sheer net back blouse with floral cutwork, fine bead borders and structured elbow-length sleeves."],
//   ["deeps1.jpeg", "Traditional Wear", "Banarasi Heritage Styling", "A luxury drape matched with a raw-silk elbow sleeve blouse featuring hand-crafted zari borders."],
//   ["ammu_deeps.jpeg", "Festive Collection", "Pastel Meadow Lehenga", "A lightweight, layered georgette lehenga featuring hand-painted floral elements."],
//   ["ammu_sai.jpeg", "Custom Designs", "Tailoring Perfection", "Every pattern is hand-drafted by our master tailors to guarantee the perfect custom fit."],
//   ["sadha_bls1.jpeg", "Bridal Collection", "Bridal Lehenga Panel", "Premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."],
//   ["sadhana_back.jpg", "Party Wear", "Contemporary Indo-Western", "Off-shoulder designer pattern in premium raw silk with soft pleating details."],

//   ["sadhana_beach1.jpg", "Custom Designs"],
//   ["sadhana_beach2.jpg", "Custom Designs"],
//   ["sadhana_beach3.jpg", "Custom Designs"],
//   ["sadhana_blue.png", "Custom Designs"],
//   ["sadhana_kid1.png", "Custom Designs"],
//   ["sadhana_main.png", "Custom Designs"],
//   ["sadhana_orange.png", "Custom Designs"],
//   ["sadhana_orange2.png", "Custom Designs"],
//   ["sadhana_red.png", "Custom Designs"],
//   ["sadhana_red2.png", "Custom Designs"],
//   ["sadhana_red3.png", "Custom Designs"],
//   ["sadhana_smile1.jpg", "Custom Designs"],
//   ["sadhana_smile2.jpg", "Custom Designs"],
//   ["sadhana_smile2_2.jpg", "Custom Designs"],
//   ["sadhana_smile3.jpg", "Custom Designs"],
//   ["sadhana_yello.jpg", "Custom Designs"],
//   ["sadhana1.png", "Custom Designs"],
//   ["sadhana2.jpeg", "Party Wear"],
//   ["sadhana3.jpeg", "Custom Designs"],
//   ["sadhana_night1.jpg", "Custom Designs"],
//   ["kid3.jpg", "Custom Designs"],
//   ["old_blouse1.jpg", "Custom Designs"],
//   ["old_blouse2.jpg", "Custom Designs"],
//   ["mehandhi.jpg", "Custom Designs"],
//   ["old_blouse4.jpg", "Custom Designs"],
//   ["old_blouse5.jpg", "Custom Designs"],
//   ["aari1.jpg", "Custom Designs"],
//   ["aari2.jpg", "Custom Designs"],
//   ["aari3.jpg", "Custom Designs"],
//   ["aari4.jpg", "Custom Designs"],
//   ["aari5.jpg", "Custom Designs"],
//   ["aari6.jpg", "Custom Designs"],
//   ["aari7.jpg", "Custom Designs"],
//   ["aari8.jpg", "Custom Designs"],
//   ["featured-aari.webp", "Custom Designs"],

//   ...Array.from({ length: 28 }, (_, i): [string, Category] => [
//     `lan_bls${i + 1}.jpg`,
//     "Bridal Collection",
//   ]),
//   ["couple8.jpg", "Bridal Collection"],
// ];

// const galleryItems: GalleryItem[] = (() => {
//   const counters: Partial<Record<Category, number>> = {};
//   return rawItems.map(([file, category, title, description], index) => {
//     const defaults = categoryDefaults[category];
//     let finalTitle = title;
//     if (!finalTitle) {
//       counters[category] = (counters[category] ?? 0) + 1;
//       finalTitle = `${defaults.title} ${String(counters[category]).padStart(2, "0")}`;
//     }
//     return {
//       id: index + 1,
//       src: `${BASE}${file}`,
//       alt: `${finalTitle} – Dev Fashion`,
//       category,
//       title: finalTitle,
//       description: description ?? defaults.description,
//     };
//   });
// })();

// const categories: ("All" | Category)[] = [
//   "All",
//   "Bridal Collection",
//   "Designer Blouses",
//   "Party Wear",
//   "Traditional Wear",
//   "Festive Collection",
//   "Custom Designs",
// ];

// // Text shown in the Signature Piece section (change the id to feature another design)
// const FEATURED_ID = 2;

// // Images that rotate automatically in the Signature Piece section.
// const FEATURED_SLIDE_FILES = [
//   "sadhana_main.png",
//   "sadhana_red.png",
//   "sadhana_red2.png",
//   "sadhana_red3.png",
//   "sadhana_blue.png",
//   "sadhana_orange.png",
//   "sadhana_orange2.png",
//   "sadhana_yello.jpg",
//   "sadhana_smile1.jpg",
//   "sadhana_night1.jpg",
//   "sadhana1.png",
// ];
// const SLIDE_MS = 4500;

// const pad = (n: number) => String(n).padStart(2, "0");
// const EASE = [0.22, 1, 0.36, 1] as const;
// const ratios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]", "aspect-square"];

// const waLink = (text: string) =>
//   `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// /* -------------------------------------------------------------------------- */
// /*  Helpers                                                                   */
// /* -------------------------------------------------------------------------- */

// function useColumns() {
//   const [n, setN] = useState(2);
//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 1024px)");
//     const update = () => setN(mq.matches ? 3 : 2);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);
//   return n;
// }

// interface CardProps {
//   item: GalleryItem;
//   index: number;
//   priority: boolean;
//   saved: boolean;
//   onOpen: (index: number) => void;
//   onToggle: (src: string) => void;
//   onHover: (v: boolean) => void;
// }

// // Memoised so filtering / loading more never re-renders cards that haven't changed
// const Card = memo(function Card({
//   item,
//   index,
//   priority,
//   saved,
//   onOpen,
//   onToggle,
//   onHover,
// }: CardProps) {
//   return (
//     <motion.figure
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "0px 0px -40px 0px" }}
//       transition={{ duration: 0.6, ease: EASE }}
//       className="relative"
//     >
//       <button
//         onClick={() => onOpen(index)}
//         onPointerEnter={(e) => e.pointerType === "mouse" && onHover(true)}
//         onPointerLeave={(e) => e.pointerType === "mouse" && onHover(false)}
//         aria-label={`View ${item.title}`}
//         className="group block w-full text-left md:cursor-none"
//       >
//         <div
//           className={`relative w-full overflow-hidden bg-stone-200 transition-transform duration-300 active:scale-[0.985] ${
//             ratios[item.id % ratios.length]
//           }`}
//         >
//           <Image
//             src={item.src}
//             alt={item.alt}
//             fill
//             quality={70}
//             sizes="(max-width: 1024px) 50vw, 33vw"
//             priority={priority}
//             className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.06]"
//           />
//           <div className="pointer-events-none absolute inset-2.5 border border-white/0 transition-colors duration-700 md:inset-4 md:group-hover:border-white/60" />
//         </div>

//         <figcaption className="mt-3 flex items-baseline justify-between gap-3 md:mt-5">
//           <div className="min-w-0">
//             <h3 className="font-serif text-[15px] leading-snug sm:text-lg lg:text-xl">
//               {item.title}
//             </h3>
//             <p className="mt-1 truncate text-[9px] uppercase tracking-[0.25em] text-stone-500 sm:text-[10px] sm:tracking-[0.3em]">
//               {item.category}
//             </p>
//           </div>
//           <span className="hidden shrink-0 font-serif text-sm italic text-gold-600 sm:block">
//             № {pad(item.id)}
//           </span>
//         </figcaption>
//       </button>

//       {/* save to "My Edit" – 44px touch target */}
//       <button
//         onClick={() => onToggle(item.src)}
//         aria-label={saved ? "Remove from My Edit" : "Save to My Edit"}
//         aria-pressed={saved}
//         className="absolute right-1 top-1 flex h-11 w-11 items-center justify-center"
//       >
//         <span
//           className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-colors duration-300 ${
//             saved ? "bg-gold-500 text-white" : "bg-white/75 text-stone-800"
//           }`}
//         >
//           <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} strokeWidth={1.5} />
//         </span>
//       </button>
//     </motion.figure>
//   );
// });

// /* -------------------------------------------------------------------------- */
// /*  Component                                                                 */
// /*  stickyTop: height (px) of your fixed site navbar, so the filter bar       */
// /*  sticks just below it. Use 0 if your navbar is not fixed.                  */
// /* -------------------------------------------------------------------------- */

// export default function GalleryLightbox({ stickyTop = 0 }: { stickyTop?: number }) {
//   const [selected, setSelected] = useState<"All" | Category>("All");
//   const [visible, setVisible] = useState(PAGE_SIZE);
//   const [active, setActive] = useState<number | null>(null);
//   const [direction, setDirection] = useState(1);
//   const [hovering, setHovering] = useState(false);
//   const [saved, setSaved] = useState<string[]>([]);
//   const [sheetOpen, setSheetOpen] = useState(false);
//   const columnCount = useColumns();

//   const gridRef = useRef<HTMLDivElement>(null);
//   const barRef = useRef<HTMLDivElement>(null);
//   const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
//   const sentinelRef = useRef<HTMLDivElement>(null);
//   const storageReady = useRef(false);

//   // custom "View" cursor (desktop only)
//   const mx = useMotionValue(-200);
//   const my = useMotionValue(-200);
//   const sx = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
//   const sy = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });

//   /* ---- saved ("My Edit") persistence ---- */
//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem(STORAGE_KEY);
//       if (raw) {
//         const parsed = JSON.parse(raw);
//         if (Array.isArray(parsed)) setSaved(parsed.filter((s) => typeof s === "string"));
//       }
//     } catch {}
//     storageReady.current = true;
//   }, []);

//   useEffect(() => {
//     if (!storageReady.current) return;
//     try {
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
//     } catch {}
//   }, [saved]);

//   const savedSet = useMemo(() => new Set(saved), [saved]);
//   const savedItems = useMemo(
//     () =>
//       saved
//         .map((src) => galleryItems.find((i) => i.src === src))
//         .filter((i): i is GalleryItem => Boolean(i)),
//     [saved]
//   );

//   const toggleSaved = useCallback((src: string) => {
//     setSaved((prev) => (prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src]));
//   }, []);

//   /* ---- data ---- */
//   const filtered = useMemo(
//     () =>
//       selected === "All"
//         ? galleryItems
//         : galleryItems.filter((i) => i.category === selected),
//     [selected]
//   );

//   const counts = useMemo(() => {
//     const map: Record<string, number> = { All: galleryItems.length };
//     galleryItems.forEach((i) => (map[i.category] = (map[i.category] ?? 0) + 1));
//     return map;
//   }, []);

//   const featured = galleryItems.find((i) => i.id === FEATURED_ID) ?? galleryItems[0];

//   const slides = useMemo(() => {
//     const list = FEATURED_SLIDE_FILES.map((f) =>
//       galleryItems.find((i) => i.src === `${BASE}${f}`)
//     ).filter((i): i is GalleryItem => Boolean(i));
//     return list.length ? list : [featured];
//   }, [featured]);

//   const [slide, setSlide] = useState(0);
//   const [slidePaused, setSlidePaused] = useState(false);
//   const reduceMotion = useReducedMotion();

//   useEffect(() => {
//     if (reduceMotion || slidePaused || active !== null || slides.length < 2) return;
//     const t = setTimeout(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS);
//     return () => clearTimeout(t);
//   }, [slide, slidePaused, active, reduceMotion, slides.length]);

//   const stepSlide = (d: number) =>
//     setSlide((s) => (s + d + slides.length) % slides.length);

//   const shown = filtered.slice(0, visible);
//   const current = active !== null ? filtered[active] : null;

//   // Stable column distribution – appending items never moves existing ones
//   const columns = useMemo(() => {
//     const cols: { item: GalleryItem; index: number }[][] = Array.from(
//       { length: columnCount },
//       () => []
//     );
//     shown.forEach((item, index) => cols[index % columnCount].push({ item, index }));
//     return cols;
//   }, [shown, columnCount]);

//   /* ---- actions ---- */
//   const openAt = useCallback((index: number) => {
//     setDirection(1);
//     setActive(index);
//   }, []);

//   const close = useCallback(() => setActive(null), []);

//   const go = useCallback(
//     (step: number) => {
//       setDirection(step);
//       setActive((prev) =>
//         prev === null ? prev : (prev + step + filtered.length) % filtered.length
//       );
//     },
//     [filtered.length]
//   );

//   const changeCategory = (c: "All" | Category) => {
//     if (c === selected) return;
//     // keep the user at the top of the results (instant, no smooth-scroll lag)
//     const grid = gridRef.current;
//     if (grid) {
//       const barH = barRef.current?.offsetHeight ?? 56;
//       const top = grid.getBoundingClientRect().top;
//       if (top < stickyTop + barH) {
//         window.scrollTo({ top: window.scrollY + top - stickyTop - barH - 12, behavior: "auto" });
//       }
//     }
//     chipRefs.current[c]?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
//     setActive(null);
//     startTransition(() => {
//       setSelected(c);
//       setVisible(PAGE_SIZE);
//     });
//   };

//   /* ---- infinite scroll ---- */
//   useEffect(() => {
//     const el = sentinelRef.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible((v) => (v < filtered.length ? v + PAGE_SIZE : v));
//         }
//       },
//       { rootMargin: "900px 0px" }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [filtered.length, visible]);

//   /* ---- keyboard + scroll lock ---- */
//   useEffect(() => {
//     if (active === null && !sheetOpen) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         if (active !== null) close();
//         else setSheetOpen(false);
//       }
//       if (active !== null && e.key === "ArrowRight") go(1);
//       if (active !== null && e.key === "ArrowLeft") go(-1);
//     };
//     window.addEventListener("keydown", onKey);
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [active, sheetOpen, go, close]);

//   const nextItem = current ? filtered[(active! + 1) % filtered.length] : null;
//   const prevItem = current ? filtered[(active! - 1 + filtered.length) % filtered.length] : null;

//   const editMessage = () =>
//     `Hi Dev Fashion, I'd love to discuss these designs:\n\n${savedItems
//       .map(
//         (i, n) =>
//           `${n + 1}. ${i.title} (№ ${pad(i.id)}, ${i.category})\n${
//             typeof window !== "undefined" ? window.location.origin : ""
//           }${i.src}`
//       )
//       .join("\n\n")}`;

//   /* ------------------------------------------------------------------------ */
//   return (
//     <section
//       className="relative w-full overflow-x-clip bg-[#faf7f2] px-5 pb-28 pt-14 text-stone-900 sm:px-10 sm:pt-28"
//       onMouseMove={(e) => {
//         mx.set(e.clientX);
//         my.set(e.clientY);
//       }}
//     >
//       {/* ------------------------------ Header ------------------------------- */}
//       <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-20">
//         <div className="mb-5 flex items-center justify-center gap-4">
//           <span className="h-px w-8 bg-gold-500 sm:w-10" />
//           <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-gold-600">
//             Dev Fashion
//           </span>
//           <span className="h-px w-8 bg-gold-500 sm:w-10" />
//         </div>
//         <h2 className="font-serif text-[56px] font-light leading-[1] tracking-tight sm:text-7xl">
//           The <em className="font-normal italic">Lookbook</em>
//         </h2>
//         <p className="mx-auto mt-5 max-w-md text-[13px] leading-relaxed text-stone-500 sm:mt-6 sm:text-sm">
//           A curated archive of bespoke bridal, blouse and festive couture –
//           every piece drafted, embroidered and finished by hand.
//         </p>
//       </header>

//       {/* ---------------------------- Signature piece ------------------------ */}
//       {selected === "All" && (
//         <div className="mx-auto mb-16 grid max-w-7xl items-center gap-8 sm:mb-24 lg:grid-cols-12 lg:gap-16">
//           <motion.div
//             onPanEnd={(_, info) => {
//               if (info.offset.x < -50) stepSlide(1);
//               else if (info.offset.x > 50) stepSlide(-1);
//             }}
//             style={{ touchAction: "pan-y" }}
//             onPointerEnter={(e) => e.pointerType === "mouse" && setSlidePaused(true)}
//             onPointerLeave={(e) => e.pointerType === "mouse" && setSlidePaused(false)}
//             className="relative -mx-5 aspect-[4/5] overflow-hidden bg-stone-200 sm:mx-0 lg:col-span-7 lg:aspect-[5/6]"
//           >
//             <button
//               onClick={() => openAt(galleryItems.indexOf(slides[slide]))}
//               onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
//               onPointerLeave={(e) => e.pointerType === "mouse" && setHovering(false)}
//               aria-label={`View ${slides[slide].title}`}
//               className="absolute inset-0 md:cursor-none"
//             >
//               {slides.map((s, i) => {
//                 const isActive = i === slide;
//                 return (
//                   <motion.div
//                     key={s.id}
//                     initial={false}
//                     animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.1 }}
//                     transition={{
//                       opacity: { duration: 1.3, ease: "easeInOut" },
//                       scale: { duration: isActive ? SLIDE_MS / 1000 + 2 : 1.3, ease: "easeOut" },
//                     }}
//                     className="absolute inset-0"
//                     aria-hidden={!isActive}
//                   >
//                     <Image
//                       src={s.src}
//                       alt={s.alt}
//                       fill
//                       quality={75}
//                       sizes="(max-width: 1024px) 100vw, 58vw"
//                       priority={i < 2}
//                       className="object-cover"
//                     />
//                   </motion.div>
//                 );
//               })}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
//               <div className="pointer-events-none absolute inset-4 border border-white/40 sm:inset-6" />
//             </button>

//             <div className="pointer-events-none absolute left-7 top-7 font-serif text-sm tracking-[0.25em] text-white sm:left-10 sm:top-10">
//               {pad(slide + 1)}
//               <span className="mx-2 text-gold-400">/</span>
//               <span className="text-white/60">{pad(slides.length)}</span>
//             </div>

//             <div className="absolute inset-x-7 bottom-5 flex items-center gap-1.5 sm:inset-x-10 sm:bottom-9">
//               {slides.map((s, i) => (
//                 <button
//                   key={s.id}
//                   onClick={() => setSlide(i)}
//                   aria-label={`Show look ${i + 1}`}
//                   className="group/bar flex h-8 flex-1 items-center"
//                 >
//                   <span
//                     className={`block w-full transition-all duration-500 group-hover/bar:h-[3px] ${
//                       i === slide ? "h-[3px] bg-gold-400" : "h-px bg-white/45"
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>
//           </motion.div>

//           <div className="lg:col-span-5">
//             <span className="font-serif text-sm italic text-gold-600">The Signature Piece</span>
//             <h3 className="mt-3 font-serif text-4xl font-light leading-tight sm:mt-4 sm:text-5xl">
//               {featured.title}
//             </h3>
//             <div className="my-6 h-px w-16 bg-gold-500 sm:my-8" />
//             <p className="max-w-md text-sm leading-[1.9] text-stone-600">
//               {featured.description}
//             </p>
//             <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-10">
//               <button
//                 onClick={() => openAt(galleryItems.indexOf(slides[slide]))}
//                 className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-stone-900"
//               >
//                 <span className="border-b border-stone-900 pb-1 transition-colors group-hover:border-gold-500 group-hover:text-gold-600">
//                   View Piece
//                 </span>
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//               <a
//                 href={waLink(`Hi Dev Fashion, I am interested in: ${featured.title}`)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-700 transition-colors hover:text-stone-900"
//               >
//                 <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
//                 Chat With Stylist
//               </a>
//             </div>
//             <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-stone-300/70 pt-6 text-[10px] uppercase tracking-[0.25em] text-stone-500">
//               <li>Hand-embroidered</li>
//               <li>Made to measure</li>
//               <li>Virtual measurements</li>
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* ------------------------- Sticky filter bar ------------------------- */}
//       <div
//         ref={barRef}
//         className="sticky z-30 -mx-5 border-y border-stone-300/60 bg-[#faf7f2]/90 backdrop-blur-md sm:-mx-10"
//         style={{ top: stickyTop }}
//       >
//         <ul
//           role="tablist"
//           aria-label="Gallery categories"
//           className="flex snap-x gap-2 overflow-x-auto px-5 py-3 sm:justify-center sm:gap-3 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//         >
//           {categories.map((c) => {
//             const isActive = selected === c;
//             return (
//               <li key={c} className="shrink-0 snap-center">
//                 <button
//                   role="tab"
//                   aria-selected={isActive}
//                   ref={(el) => {
//                     chipRefs.current[c] = el;
//                   }}
//                   onClick={() => changeCategory(c)}
//                   className={`flex h-10 items-center gap-2 border px-4 font-serif text-[15px] transition-colors duration-200 active:scale-95 ${
//                     isActive
//                       ? "border-stone-950 bg-stone-950 italic text-white"
//                       : "border-stone-300 text-stone-600 hover:border-stone-500"
//                   }`}
//                 >
//                   {c}
//                   <span
//                     className={`font-sans text-[9px] not-italic tracking-widest ${
//                       isActive ? "text-gold-400" : "text-gold-600"
//                     }`}
//                   >
//                     {pad(counts[c] ?? 0)}
//                   </span>
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* -------------------------------- Grid ------------------------------- */}
//       <div
//         ref={gridRef}
//         className="mx-auto mt-10 flex max-w-7xl gap-3 sm:mt-14 sm:gap-6 lg:gap-10"
//       >
//         {columns.map((col, ci) => (
//           <div
//             key={ci}
//             className={`flex min-w-0 flex-1 flex-col gap-6 sm:gap-10 lg:gap-14 ${
//               columnCount === 2 && ci === 1 ? "mt-10 sm:mt-16" : ""
//             } ${columnCount === 3 && ci === 1 ? "mt-28" : ""}`}
//           >
//             {col.map(({ item, index }) => (
//               <Card
//                 key={item.id}
//                 item={item}
//                 index={index}
//                 priority={index < 2}
//                 saved={savedSet.has(item.src)}
//                 onOpen={openAt}
//                 onToggle={toggleSaved}
//                 onHover={setHovering}
//               />
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* infinite-scroll sentinel */}
//       <div ref={sentinelRef} className="h-px" />
//       <div className="mt-16 flex flex-col items-center gap-4 text-center">
//         {visible < filtered.length ? (
//           <button
//             onClick={() => setVisible((v) => v + PAGE_SIZE)}
//             className="inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em]"
//           >
//             <span className="h-px w-8 bg-stone-900" />
//             Discover More
//             <span className="h-px w-8 bg-stone-900" />
//           </button>
//         ) : (
//           <p className="font-serif text-sm italic text-stone-500">
//             You&apos;ve seen all {pad(filtered.length)} pieces
//           </p>
//         )}
//         <a
//           href={waLink("Hi Dev Fashion, I'd like to discuss a custom design.")}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-4 inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-[11px] font-medium uppercase tracking-[0.3em] transition-colors hover:border-gold-500 hover:text-gold-600"
//         >
//           <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
//           Design Something Just For You
//         </a>
//       </div>

//       {/* --------------------------- "View" cursor --------------------------- */}
//       <motion.div
//         aria-hidden
//         style={{ x: sx, y: sy }}
//         className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
//       >
//         <motion.div
//           animate={{
//             scale: hovering && active === null ? 1 : 0,
//             opacity: hovering && active === null ? 1 : 0,
//           }}
//           transition={{ duration: 0.35, ease: EASE }}
//           className="-ml-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-[10px] font-medium uppercase tracking-[0.25em] text-stone-900 shadow-xl backdrop-blur-sm"
//         >
//           View
//         </motion.div>
//       </motion.div>

//       {/* ------------------------ "My Edit" floating pill -------------------- */}
//       <AnimatePresence>
//         {saved.length > 0 && active === null && !sheetOpen && (
//           <motion.button
//             initial={{ opacity: 0, y: 24, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 24, scale: 0.9 }}
//             transition={{ duration: 0.4, ease: EASE }}
//             onClick={() => setSheetOpen(true)}
//             style={{ bottom: "calc(env(safe-area-inset-bottom) + 1.25rem)" }}
//             className="fixed left-1/2 z-40 flex h-12 -translate-x-1/2 items-center gap-3 bg-stone-950 px-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white shadow-2xl"
//           >
//             <Heart className="h-4 w-4 fill-gold-500 text-gold-500" />
//             My Edit
//             <span className="font-serif text-sm tracking-normal text-gold-400">
//               {pad(saved.length)}
//             </span>
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* --------------------------- "My Edit" sheet ------------------------- */}
//       <AnimatePresence>
//         {sheetOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             onClick={() => setSheetOpen(false)}
//             className="fixed inset-0 z-[60] flex items-end justify-center bg-stone-950/60 backdrop-blur-sm"
//           >
//             <motion.div
//               role="dialog"
//               aria-modal="true"
//               aria-label="My Edit"
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ duration: 0.45, ease: EASE }}
//               drag="y"
//               dragConstraints={{ top: 0, bottom: 0 }}
//               dragElastic={{ top: 0, bottom: 0.4 }}
//               onDragEnd={(_, info) => info.offset.y > 120 && setSheetOpen(false)}
//               onClick={(e) => e.stopPropagation()}
//               className="flex max-h-[85dvh] w-full max-w-lg flex-col bg-[#faf7f2] px-6 pt-3 text-stone-900"
//               style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
//             >
//               <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-300" />
//               <div className="mb-5 flex items-end justify-between">
//                 <div>
//                   <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold-600">
//                     Your Selection
//                   </span>
//                   <h3 className="mt-1 font-serif text-3xl font-light italic">My Edit</h3>
//                 </div>
//                 <button
//                   onClick={() => setSheetOpen(false)}
//                   aria-label="Close"
//                   className="flex h-11 w-11 items-center justify-center text-stone-500"
//                 >
//                   <X className="h-6 w-6" strokeWidth={1.25} />
//                 </button>
//               </div>

//               <ul className="-mx-1 flex-1 divide-y divide-stone-200 overflow-y-auto px-1">
//                 {savedItems.map((i) => (
//                   <li key={i.id} className="flex items-center gap-4 py-3">
//                     <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-stone-200">
//                       <Image src={i.src} alt="" fill quality={50} sizes="64px" className="object-cover" />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="truncate font-serif text-lg leading-tight">{i.title}</p>
//                       <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-stone-500">
//                         {i.category}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => toggleSaved(i.src)}
//                       aria-label={`Remove ${i.title}`}
//                       className="flex h-11 w-11 items-center justify-center text-stone-400 hover:text-stone-900"
//                     >
//                       <X className="h-5 w-5" strokeWidth={1.25} />
//                     </button>
//                   </li>
//                 ))}
//               </ul>

//               <a
//                 href={waLink(editMessage())}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-5 flex h-14 items-center justify-center gap-3 bg-stone-950 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-gold-600"
//               >
//                 <MessageCircle className="h-4 w-4" />
//                 Send To Stylist On WhatsApp
//               </a>
//               <p className="mt-3 text-center text-[11px] text-stone-500">
//                 Your stylist receives the full list with photo links.
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ------------------------------ Lightbox ----------------------------- */}
//       <AnimatePresence>
//         {current && active !== null && (
//           <motion.div
//             role="dialog"
//             aria-modal="true"
//             aria-label={current.title}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 flex h-[100dvh] flex-col bg-[#0d0c0b] text-white"
//           >
//             {/* top bar */}
//             <div className="flex items-center justify-between px-5 pb-1 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-10">
//               <span className="font-serif text-base tracking-[0.2em] text-stone-500">
//                 <span className="text-white">{pad(active + 1)}</span>
//                 <span className="mx-2 text-gold-500">—</span>
//                 {pad(filtered.length)}
//               </span>
//               <button
//                 onClick={close}
//                 aria-label="Close"
//                 className="flex h-11 items-center gap-3 pl-3 text-[10px] font-medium uppercase tracking-[0.35em] text-stone-400 transition-colors hover:text-white"
//               >
//                 <span className="hidden sm:inline">Close</span>
//                 <X className="h-6 w-6" strokeWidth={1.25} />
//               </button>
//             </div>

//             {/* stage – swipe left/right to browse, drag down to close */}
//             <div className="relative min-h-0 flex-1">
//               <AnimatePresence initial={false} custom={direction} mode="popLayout">
//                 <motion.div
//                   key={current.id}
//                   custom={direction}
//                   variants={{
//                     enter: (d: number) => ({ opacity: 0, x: d * 70, scale: 0.98 }),
//                     center: { opacity: 1, x: 0, y: 0, scale: 1 },
//                     exit: (d: number) => ({ opacity: 0, x: d * -70, scale: 0.98 }),
//                   }}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 0.5, ease: EASE }}
//                   drag
//                   dragDirectionLock
//                   dragSnapToOrigin
//                   dragElastic={0.25}
//                   onDragEnd={(_, info) => {
//                     const { x, y } = info.offset;
//                     if (Math.abs(y) > 110 && Math.abs(y) > Math.abs(x)) close();
//                     else if (x < -70) go(1);
//                     else if (x > 70) go(-1);
//                   }}
//                   className="absolute inset-0 px-3 sm:px-24"
//                 >
//                   <div className="relative h-full w-full">
//                     <Image
//                       src={current.src}
//                       alt={current.alt}
//                       fill
//                       quality={85}
//                       sizes="100vw"
//                       priority
//                       draggable={false}
//                       className="pointer-events-none select-none object-contain"
//                     />
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* preload neighbours so swiping feels instant */}
//               {nextItem && (
//                 <Image src={nextItem.src} alt="" fill quality={85} sizes="100vw" loading="eager" className="hidden" />
//               )}
//               {prevItem && (
//                 <Image src={prevItem.src} alt="" fill quality={85} sizes="100vw" loading="eager" className="hidden" />
//               )}

//               <button
//                 onClick={() => go(-1)}
//                 aria-label="Previous"
//                 className="absolute left-8 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-stone-300 backdrop-blur transition-all hover:border-gold-400 hover:text-gold-400 sm:flex"
//               >
//                 <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//               <button
//                 onClick={() => go(1)}
//                 aria-label="Next"
//                 className="absolute right-8 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-stone-300 backdrop-blur transition-all hover:border-gold-400 hover:text-gold-400 sm:flex"
//               >
//                 <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
//               </button>
//             </div>

//             {/* caption + actions (thumb-reach on mobile) */}
//             <div
//               className="border-t border-white/10 px-5 pt-4 sm:px-10 sm:pt-6"
//               style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
//             >
//               <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="min-w-0 max-w-xl">
//                     <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold-400">
//                       {current.category}
//                     </span>
//                     <h2 className="mt-1.5 font-serif text-xl font-light italic sm:text-3xl">
//                       {current.title}
//                     </h2>
//                     <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-400">
//                       {current.description}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => toggleSaved(current.src)}
//                     aria-label={savedSet.has(current.src) ? "Remove from My Edit" : "Save to My Edit"}
//                     aria-pressed={savedSet.has(current.src)}
//                     className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold-400 lg:hidden"
//                   >
//                     <Heart
//                       className={`h-5 w-5 ${
//                         savedSet.has(current.src) ? "fill-gold-500 text-gold-500" : "text-white"
//                       }`}
//                       strokeWidth={1.5}
//                     />
//                   </button>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => toggleSaved(current.src)}
//                     aria-label={savedSet.has(current.src) ? "Remove from My Edit" : "Save to My Edit"}
//                     className="hidden h-12 items-center gap-2 border border-white/20 px-5 text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors hover:border-gold-400 hover:text-gold-400 lg:flex"
//                   >
//                     <Heart
//                       className={`h-4 w-4 ${savedSet.has(current.src) ? "fill-gold-500 text-gold-500" : ""}`}
//                       strokeWidth={1.5}
//                     />
//                     {savedSet.has(current.src) ? "Saved" : "Save"}
//                   </button>
//                   <a
//                     href={waLink(
//                       `Hi Dev Fashion, I am interested in customizing your design: ${current.title}`
//                     )}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex h-12 flex-1 items-center justify-center gap-2 bg-gold-500 px-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-950 transition-colors hover:bg-gold-400 lg:flex-none lg:px-7"
//                   >
//                     <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
//                     WhatsApp Stylist
//                   </a>
//                   <Link
//                     href={`/contact?service=${encodeURIComponent(current.category)}&design=${encodeURIComponent(current.title)}#booking`}
//                     onClick={close}
//                     className="group flex h-12 flex-1 items-center justify-center gap-2 border border-white/25 px-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-gold-400 hover:text-gold-400 lg:flex-none lg:px-7"
//                   >
//                     <span className="sm:hidden">Customize</span>
//                     <span className="hidden sm:inline">Request Customization</span>
//                     <ArrowUpRight className="hidden h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


//--------------------------------------final design-------------------------------------





"use client";

import {
  memo,
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ArrowUpRight, Heart, MessageCircle } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/*  Add a photo by adding ONE line to `rawItems`.                             */
/*  Title / description are optional – category defaults are used otherwise.  */
/* -------------------------------------------------------------------------- */

type Category =
  | "Bridal Collection"
  | "Designer Blouses"
  | "Party Wear"
  | "Traditional Wear"
  | "Festive Collection"
  | "Custom Designs";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category; // primary category (shown under the photo)
  categories: Category[]; // every category the photo appears in
  title: string;
  description: string;
}

const BASE = "/images/dev_fashion/";
const WHATSAPP = "919025751328";
const PAGE_SIZE = 12; // divisible by 2 and 4 columns
const STORAGE_KEY = "devfashion:my-edit";

const categoryDefaults: Record<Category, { title: string; description: string }> = {
  "Bridal Collection": {
    title: "Bridal Couture",
    description:
      "Heavy zari and stone embroidery, hand-finished over weeks by our master karigars for your most important day.",
  },
  "Designer Blouses": {
    title: "Designer Blouse",
    description:
      "Statement blouses with refined cutwork, beadwork and structured sleeves, tailored to your exact measurements.",
  },
  "Party Wear": {
    title: "Evening Edit",
    description:
      "Contemporary silhouettes in premium fabrics, designed to be noticed from the moment you walk in.",
  },
  "Traditional Wear": {
    title: "Heritage Weave",
    description:
      "Timeless drapes and raw-silk blouses finished with hand-crafted zari borders.",
  },
  "Festive Collection": {
    title: "Festive Edit",
    description:
      "Lightweight, layered pieces with hand-painted details, made for celebration.",
  },
  "Custom Designs": {
    title: "Bespoke Creation",
    description:
      "Drafted by hand for a perfect fit, with bespoke necklines and handcrafted embellishments.",
  },
};

// [file, category (or a list of categories), optional title, optional description]
// For several categories use an array – the FIRST one is the main label:
//   ["sadhana_smile4.jpg", ["Party Wear", "Custom Designs"]],
// Each photo file should appear ONCE in this list.
const rawItems: [string, Category | Category[], string?, string?][] = [
  ["deeps2.jpeg", "Custom Designs", "Luxury Ethnic Editorial", "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."],
  ["sadhana_main.png", "Bridal Collection", "Royal Velvet Aurora", "Dr. Sadhana · Dentist & Model | precision by profession, elegance by nature. Dressed by Dev Fashion. ஒவ்வொரு தையலிலும் நுணுக்கம், ஒவ்வொரு புன்னகையிலும் நேர்த்தி."],
  ["ammu.jpeg", "Designer Blouses", "Sheer Cutwork Blouse", "Modern sheer net back blouse with floral cutwork, fine bead borders and structured elbow-length sleeves."],
  ["deeps1.jpeg", "Traditional Wear", "Banarasi Heritage Styling", "A luxury drape matched with a raw-silk elbow sleeve blouse featuring hand-crafted zari borders."],
  ["ammu_deeps.jpeg", "Festive Collection", "Pastel Meadow Lehenga", "A lightweight, layered georgette lehenga featuring hand-painted floral elements."],
  ["ammu_sai.jpeg", "Custom Designs", "Tailoring Perfection", "Every pattern is hand-drafted by our master tailors to guarantee the perfect custom fit."],
  ["sadha_bls1.jpeg", "Bridal Collection", "Bridal Lehenga Panel", "Premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."],
  ["sadhana_back.jpg", "Party Wear", "Contemporary Indo-Western", "Off-shoulder designer pattern in premium raw silk with soft pleating details."],

  ["angel1.png","Party Wear"],
  ["sadhana_smile4.jpg", ["Party Wear", "Custom Designs"]],
  ["sadhana_beach1.jpg", ["Custom Designs", "Traditional Wear"]],
  ["sadhana_beach2.jpg", "Custom Designs"],
  ["sadhana_beach3.jpg", "Custom Designs"],
  ["sadhana_blue.png", "Custom Designs"],
  ["sadhana_kid1.png", "Custom Designs"],
  ["sadhana_kid2.png", ["Party Wear", "Festive Collection"]],
  ["sadhana_main.png", ["Party Wear", "Festive Collection"]],
  ["sadhana_orange.png", "Custom Designs"],
  ["sadhana_orange2.png", ["Party Wear", "Custom Designs"]],
  ["sadhana_red.png", "Custom Designs"],
  ["sadhana_red2.png", "Custom Designs"],
  ["sadhana_red3.png", "Custom Designs"],
  ["sadhana_smile1.jpg", "Custom Designs"],
  ["sadhana_smile2.jpg", "Custom Designs"],
  ["sadhana_smile2_2.jpg", "Custom Designs"],
  ["sadhana_smile3.jpg", "Custom Designs"],
  ["sadhana_yello.jpg", "Custom Designs"],
  ["sadhana1.png", "Custom Designs"],
  ["sadhana2.jpeg", "Party Wear"],
  ["sadhana3.jpeg", "Custom Designs"],
  ["sadhana_night1.jpg", "Custom Designs"],
  ["kid3.jpg", "Custom Designs"],
  ["old_blouse1.jpg", "Custom Designs"],
  ["old_blouse2.jpg", "Custom Designs"],
  ["mehandhi.jpg", "Custom Designs"],
  ["old_blouse4.jpg", "Custom Designs"],
  ["old_blouse5.jpg", "Custom Designs"],
  ["aari1.jpg", "Custom Designs"],
  ["aari2.jpg", "Custom Designs"],
  ["sadhu.png", "Custom Designs"],
  ["aari3.jpg", "Custom Designs"],
  ["aari4.jpg", "Custom Designs"],
  ["aari5.jpg", "Custom Designs"],
  ["aari6.jpg", "Custom Designs"],
  ["aari7.jpg", "Custom Designs"],
  ["aari8.jpg", "Custom Designs"],
  ["featured-aari.webp", "Custom Designs"],

  ...Array.from({ length: 28 }, (_, i): [string, Category] => [
    `lan_bls${i + 1}.jpg`,
    "Bridal Collection",
  ]),
  ["couple8.jpg", "Bridal Collection"],
];

const galleryItems: GalleryItem[] = (() => {
  const counters: Partial<Record<Category, number>> = {};
  return rawItems.map(([file, cat, title, description], index) => {
    const cats: Category[] = Array.isArray(cat) ? cat : [cat];
    const category = cats[0];
    const defaults = categoryDefaults[category];
    let finalTitle = title;
    if (!finalTitle) {
      counters[category] = (counters[category] ?? 0) + 1;
      finalTitle = `${defaults.title} ${String(counters[category]).padStart(2, "0")}`;
    }
    return {
      id: index + 1,
      src: `${BASE}${file}`,
      alt: `${finalTitle} – Dev Fashion`,
      category,
      categories: cats,
      title: finalTitle,
      description: description ?? defaults.description,
    };
  });
})();

const categories: ("All" | Category)[] = [
  "All",
  "Bridal Collection",
  "Designer Blouses",
  "Party Wear",
  "Traditional Wear",
  "Festive Collection",
  "Custom Designs",
];

// Text shown in the opening feature (change the id to feature another design)
const FEATURED_ID = 2;

// Images that rotate automatically in the opening feature.
const FEATURED_SLIDE_FILES = [
  "angel1.png",
  "sadhana_main.png",
  "sadhana_red.png",
  "sadhana_red2.png",
  "sadhana_red3.png",
  "sadhana_blue.png",
  "sadhana_orange.png",
  "sadhana_smile4.jpg",
  "sadhana_orange2.png",
  "sadhana_yello.jpg",
  "sadhana_smile1.jpg",
  "sadhana_night1.jpg",
  "sadhana1.png",
];
const SLIDE_MS = 4500;

const pad = (n: number) => String(n).padStart(2, "0");
const EASE = [0.22, 1, 0.36, 1] as const;

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* -------------------------------------------------------------------------- */
/*  Product card – memoised so filtering / loading more stays instant         */
/* -------------------------------------------------------------------------- */

interface CardProps {
  item: GalleryItem;
  index: number;
  priority: boolean;
  saved: boolean;
  onOpen: (index: number) => void;
  onToggle: (src: string) => void;
}

const Card = memo(function Card({ item, index, priority, saved, onOpen, onToggle }: CardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative"
    >
      <button
        onClick={() => onOpen(index)}
        aria-label={`View ${item.title}`}
        className="group block w-full text-left"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            quality={70}
            sizes="(max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.04]"
          />
        </div>

        <figcaption className="mt-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-950">
            {item.category}
          </p>
          <p className="mt-1 truncate text-xs text-neutral-500">{item.title}</p>
        </figcaption>
      </button>

      <button
        onClick={() => onToggle(item.src)}
        aria-label={saved ? "Remove from My Edit" : "Save to My Edit"}
        aria-pressed={saved}
        className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center"
      >
        <span className="flex h-8 w-8 items-center justify-center bg-white/85 text-neutral-950 backdrop-blur-sm">
          <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} strokeWidth={1.25} />
        </span>
      </button>
    </motion.figure>
  );
});

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/*  stickyTop: height (px) of your fixed site navbar, so the filter bar       */
/*  sticks just below it. Use 0 if your navbar is not fixed.                  */
/* -------------------------------------------------------------------------- */

export default function GalleryLightbox({ stickyTop = 0 }: { stickyTop?: number }) {
  const [selected, setSelected] = useState<"All" | Category>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const [saved, setSaved] = useState<string[]>([]);
  const [sheetOpen, setSheetOpen] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const sentinelRef = useRef<HTMLDivElement>(null);
  const storageReady = useRef(false);

  /* ---- saved ("My Edit") persistence ---- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSaved(parsed.filter((s) => typeof s === "string"));
      }
    } catch {}
    storageReady.current = true;
  }, []);

  useEffect(() => {
    if (!storageReady.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch {}
  }, [saved]);

  const savedSet = useMemo(() => new Set(saved), [saved]);
  const savedItems = useMemo(
    () =>
      saved
        .map((src) => galleryItems.find((i) => i.src === src))
        .filter((i): i is GalleryItem => Boolean(i)),
    [saved]
  );

  const toggleSaved = useCallback((src: string) => {
    setSaved((prev) => (prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src]));
  }, []);

  /* ---- data ---- */
  const filtered = useMemo(
    () =>
      selected === "All"
        ? galleryItems
        : galleryItems.filter((i) => i.categories.includes(selected)),
    [selected]
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: galleryItems.length };
    galleryItems.forEach((i) =>
      i.categories.forEach((c) => (map[c] = (map[c] ?? 0) + 1))
    );
    return map;
  }, []);

  const featured = galleryItems.find((i) => i.id === FEATURED_ID) ?? galleryItems[0];

  const slides = useMemo(() => {
    const list = FEATURED_SLIDE_FILES.map((f) =>
      galleryItems.find((i) => i.src === `${BASE}${f}`)
    ).filter((i): i is GalleryItem => Boolean(i));
    return list.length ? list : [featured];
  }, [featured]);

  const [slide, setSlide] = useState(0);
  const [slidePaused, setSlidePaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || slidePaused || active !== null || slides.length < 2) return;
    const t = setTimeout(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [slide, slidePaused, active, reduceMotion, slides.length]);

  const stepSlide = (d: number) =>
    setSlide((s) => (s + d + slides.length) % slides.length);

  const shown = filtered.slice(0, visible);
  const current = active !== null ? filtered[active] : null;

  /* ---- actions ---- */
  const openAt = useCallback((index: number) => {
    setDirection(1);
    setActive(index);
  }, []);

  const openSlide = () => {
    const idx = filtered.findIndex((i) => i.id === slides[slide].id);
    if (idx >= 0) openAt(idx);
  };

  const close = useCallback(() => setActive(null), []);

  const go = useCallback(
    (step: number) => {
      setDirection(step);
      setActive((prev) =>
        prev === null ? prev : (prev + step + filtered.length) % filtered.length
      );
    },
    [filtered.length]
  );

  const changeCategory = (c: "All" | Category) => {
    if (c === selected) return;
    const grid = gridRef.current;
    if (grid) {
      const barH = barRef.current?.offsetHeight ?? 52;
      const top = grid.getBoundingClientRect().top;
      if (top < stickyTop + barH) {
        window.scrollTo({ top: window.scrollY + top - stickyTop - barH - 24, behavior: "auto" });
      }
    }
    tabRefs.current[c]?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    setActive(null);
    startTransition(() => {
      setSelected(c);
      setVisible(PAGE_SIZE);
    });
  };

  /* ---- infinite scroll ---- */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible((v) => (v < filtered.length ? v + PAGE_SIZE : v));
        }
      },
      { rootMargin: "900px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length, visible]);

  /* ---- keyboard + scroll lock ---- */
  useEffect(() => {
    if (active === null && !sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (active !== null) close();
        else setSheetOpen(false);
      }
      if (active !== null && e.key === "ArrowRight") go(1);
      if (active !== null && e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, sheetOpen, go, close]);

  const nextItem = current ? filtered[(active! + 1) % filtered.length] : null;
  const prevItem = current ? filtered[(active! - 1 + filtered.length) % filtered.length] : null;

  const editMessage = () =>
    `Hi Dev Fashion, I'd love to discuss these designs:\n\n${savedItems
      .map(
        (i, n) =>
          `${n + 1}. ${i.title} (${i.category})\n${
            typeof window !== "undefined" ? window.location.origin : ""
          }${i.src}`
      )
      .join("\n\n")}`;

  const label = "text-[10px] font-medium uppercase tracking-[0.22em]";

  /* ------------------------------------------------------------------------ */
  return (
    <section className="relative w-full overflow-x-clip bg-white pb-32 text-neutral-950">
      {/* ------------------------------ Opening feature ---------------------- */}
      {selected === "All" && (
        <div className="lg:grid lg:grid-cols-2">
          {/* image – full bleed, swipeable, auto-changing */}
          <motion.div
            onPanEnd={(_, info) => {
              if (info.offset.x < -50) stepSlide(1);
              else if (info.offset.x > 50) stepSlide(-1);
            }}
            style={{ touchAction: "pan-y" }}
            onPointerEnter={(e) => e.pointerType === "mouse" && setSlidePaused(true)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setSlidePaused(false)}
            className="relative h-[80svh] min-h-[480px] overflow-hidden bg-neutral-200 lg:h-[92svh]"
          >
            <button
              onClick={openSlide}
              aria-label={`View ${slides[slide].title}`}
              className="absolute inset-0"
            >
              {slides.map((s, i) => {
                const isActive = i === slide;
                return (
                  <motion.div
                    key={s.id}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.06 }}
                    transition={{
                      opacity: { duration: 1.2, ease: "easeInOut" },
                      scale: { duration: isActive ? SLIDE_MS / 1000 + 2 : 1.2, ease: "easeOut" },
                    }}
                    className="absolute inset-0"
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      quality={80}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i < 2}
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/25 lg:from-black/20 lg:to-black/10" />
            </button>

            {/* brand + counter */}
            <div className="pointer-events-none absolute inset-x-5 top-5 flex items-center justify-between text-white sm:inset-x-10 sm:top-8">
              <span className={label}>Dev Fashion</span>
              <span className="text-[11px] tracking-[0.2em]">
                {pad(slide + 1)} / {pad(slides.length)}
              </span>
            </div>

            {/* mobile text overlay */}
            <div className="pointer-events-none absolute inset-x-5 bottom-14 text-white sm:inset-x-10 lg:hidden">
              <p className={`${label} text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3 text-white/80`}>The Sadhana Signature</p>
              <h2 className="mt-3 text-[28px] font-light uppercase leading-[1.1] tracking-[0.06em] sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 line-clamp-4 text-[13px] leading-[1.8] text-white/90">
                {featured.description}
              </p>
              <span className="pointer-events-auto mt-5 inline-flex items-center gap-3 border-b border-white pb-1 text-[10px] font-medium uppercase tracking-[0.25em]">
                <button onClick={openSlide}>View</button>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.25} />
              </span>
            </div>

            {/* progress lines */}
            <div className="absolute inset-x-5 bottom-4 flex items-center gap-1.5 sm:inset-x-10 sm:bottom-8">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setSlide(i)}
                  aria-label={`Show look ${i + 1}`}
                  className="flex h-8 flex-1 items-center"
                >
                  <span
                    className={`block w-full transition-all duration-500 ${
                      i === slide ? "h-[2px] bg-white" : "h-px bg-white/45"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* desktop text panel */}
          <div className="hidden flex-col justify-between px-16 py-16 lg:flex xl:px-24">
            <div className="flex items-center justify-between text-neutral-900">
              <span className={label}>The Lookbook</span>
              <span className={label}>{pad(galleryItems.length)} Pieces</span>
            </div>

            <div className="max-w-md">
              <p className={`${label} text-[10px] font-semibold tracking-widest text-gold-600 uppercase block`}>The Sadhana Signature</p>
              <h2 className="mt-6 text-5xl font-light uppercase leading-[1.05] tracking-[0.05em] xl:text-6xl">
                {featured.title}
              </h2>
              <p className="mt-8 text-sm leading-[1.9] text-neutral-600 text-justify">
                {featured.description}
              </p>
              <div className="mt-10 flex items-center gap-8">
                <button
                  onClick={openSlide}
                  className="group inline-flex items-center gap-3 border-b border-neutral-950 pb-1 text-[11px] font-medium uppercase tracking-[0.25em]"
                >
                  View Piece
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.25}
                  />
                </button>
                <a
                  href={waLink(`Hi Dev Fashion, I am interested in: ${featured.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-950"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                  Stylist
                </a>
              </div>
            </div>

            <ul className="flex gap-8 border-t border-neutral-200 pt-6 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              <li>Hand-embroidered</li>
              <li>Made to measure</li>
              <li>Virtual measurements</li>
            </ul>
          </div>
        </div>
      )}

      {/* ------------------------------ Section title ------------------------ */}
      <div
        className={`mx-auto flex max-w-[1600px] items-end justify-between px-5 pb-6 sm:px-10 ${
          selected === "All" ? "pt-16 sm:pt-24" : "pt-24 sm:pt-32"
        }`}
      >
        <h1 className="text-2xl font-light uppercase tracking-[0.2em] sm:text-4xl">
          The Collection
        </h1>
        <span className={`${label} text-neutral-500`}>
          {pad(filtered.length)} {filtered.length === 1 ? "Piece" : "Pieces"}
        </span>
      </div>

      {/* ------------------------- Sticky filter tabs ------------------------ */}
      <div
        ref={barRef}
        className="sticky z-30 border-y border-neutral-200 bg-white/95 backdrop-blur-md"
        style={{ top: stickyTop }}
      >
        <ul
          role="tablist"
          aria-label="Gallery categories"
          className="mx-auto flex max-w-[1600px] snap-x gap-7 overflow-x-auto px-5 sm:gap-10 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((c) => {
            const isActive = selected === c;
            return (
              <li key={c} className="shrink-0 snap-center">
                <button
                  role="tab"
                  aria-selected={isActive}
                  ref={(el) => {
                    tabRefs.current[c] = el;
                  }}
                  onClick={() => changeCategory(c)}
                  className={`relative flex h-12 items-center gap-1.5 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {c}
                  <sup className="text-[8px] tracking-normal">{counts[c] ?? 0}</sup>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2px] bg-neutral-950 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* --------------------------------- Grid ------------------------------ */}
      <div
        ref={gridRef}
        className="mx-auto mt-8 grid max-w-[1600px] grid-cols-2 gap-x-3 gap-y-10 px-5 sm:mt-12 sm:gap-x-5 sm:gap-y-14 sm:px-10 lg:grid-cols-4"
      >
        {shown.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            priority={index < 2}
            saved={savedSet.has(item.src)}
            onOpen={openAt}
            onToggle={toggleSaved}
          />
        ))}
      </div>

      {/* infinite-scroll sentinel + end note */}
      <div ref={sentinelRef} className="h-px" />
      <div className="mt-20 flex flex-col items-center gap-6 px-5 text-center">
        {visible < filtered.length ? (
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="border border-neutral-950 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:bg-neutral-950 hover:text-white"
          >
            Load More
          </button>
        ) : (
          <p className={`${label} text-neutral-400`}>
            End of collection · {pad(filtered.length)} pieces
          </p>
        )}
        <a
          href={waLink("Hi Dev Fashion, I'd like to discuss a custom design.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-b border-neutral-950 pb-1 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:text-neutral-500"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
          Design Something Just For You
        </a>
      </div>

      {/* ------------------------ "My Edit" floating button ------------------ */}
      <AnimatePresence>
        {saved.length > 0 && active === null && !sheetOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => setSheetOpen(true)}
            style={{ bottom: "calc(env(safe-area-inset-bottom) + 1.25rem)" }}
            className="fixed left-1/2 z-40 flex h-12 -translate-x-1/2 items-center gap-3 bg-neutral-950 px-7 text-[11px] font-medium uppercase tracking-[0.25em] text-white shadow-2xl"
          >
            My Edit
            <span className="text-white/60">({saved.length})</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ------------------------------ "My Edit" sheet ---------------------- */}
      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSheetOpen(false)}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 sm:items-stretch sm:justify-end"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="My Edit"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.4 }}
              onDragEnd={(_, info) => info.offset.y > 120 && setSheetOpen(false)}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[88dvh] w-full max-w-md flex-col bg-white px-6 pt-3 sm:max-h-none"
              style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
            >
              <div className="mx-auto mb-4 h-px w-12 bg-neutral-300 sm:hidden" />
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 sm:pt-4">
                <h3 className="text-sm font-medium uppercase tracking-[0.25em]">
                  My Edit <span className="text-neutral-400">({savedItems.length})</span>
                </h3>
                <button
                  onClick={() => setSheetOpen(false)}
                  aria-label="Close"
                  className="-mr-3 flex h-11 w-11 items-center justify-center"
                >
                  <X className="h-5 w-5" strokeWidth={1.25} />
                </button>
              </div>

              <ul className="flex-1 divide-y divide-neutral-200 overflow-y-auto">
                {savedItems.map((i) => (
                  <li key={i.id} className="flex items-center gap-4 py-4">
                    <div className="relative h-24 w-[72px] shrink-0 bg-neutral-100">
                      <Image src={i.src} alt="" fill quality={50} sizes="72px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em]">
                        {i.category}
                      </p>
                      <p className="mt-1 truncate text-xs text-neutral-500">{i.title}</p>
                    </div>
                    <button
                      onClick={() => toggleSaved(i.src)}
                      aria-label={`Remove ${i.title}`}
                      className="flex h-11 w-11 items-center justify-center text-neutral-400 hover:text-neutral-950"
                    >
                      <X className="h-4 w-4" strokeWidth={1.25} />
                    </button>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(editMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex h-14 items-center justify-center gap-3 bg-neutral-950 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-neutral-700"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                Send To Stylist On WhatsApp
              </a>
              <p className="mt-3 text-center text-[11px] text-neutral-500">
                Your stylist receives the full list with photo links.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------------------- Viewer ----------------------------- */}
      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex h-[100dvh] flex-col bg-white text-neutral-950"
          >
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 pt-[max(0.25rem,env(safe-area-inset-top))] sm:px-10">
              <span className="text-[11px] tracking-[0.2em] text-neutral-500">
                <span className="text-neutral-950">{pad(active + 1)}</span> / {pad(filtered.length)}
              </span>
              <span className={`${label} hidden sm:block`}>Dev Fashion</span>
              <button
                onClick={close}
                aria-label="Close"
                className="-mr-3 flex h-12 w-12 items-center justify-center"
              >
                <X className="h-6 w-6" strokeWidth={1} />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
              {/* stage – swipe sideways to browse, drag down to close */}
              <div className="relative min-h-0 flex-1 bg-neutral-100">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                      center: { opacity: 1, x: 0, y: 0 },
                      exit: (d: number) => ({ opacity: 0, x: d * -60 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: EASE }}
                    drag
                    dragDirectionLock
                    dragSnapToOrigin
                    dragElastic={0.25}
                    onDragEnd={(_, info) => {
                      const { x, y } = info.offset;
                      if (Math.abs(y) > 110 && Math.abs(y) > Math.abs(x)) close();
                      else if (x < -70) go(1);
                      else if (x > 70) go(-1);
                    }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={current.src}
                        alt={current.alt}
                        fill
                        quality={85}
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        priority
                        draggable={false}
                        className="pointer-events-none select-none object-contain"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* preload neighbours so swiping feels instant */}
                {nextItem && (
                  <Image src={nextItem.src} alt="" fill quality={85} sizes="(max-width: 1024px) 100vw, 65vw" loading="eager" className="hidden" />
                )}
                {prevItem && (
                  <Image src={prevItem.src} alt="" fill quality={85} sizes="(max-width: 1024px) 100vw, 65vw" loading="eager" className="hidden" />
                )}

                <button
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-neutral-950 transition-opacity hover:opacity-50 sm:flex"
                >
                  <ArrowLeft className="h-6 w-6" strokeWidth={1} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-neutral-950 transition-opacity hover:opacity-50 sm:flex"
                >
                  <ArrowRight className="h-6 w-6" strokeWidth={1} />
                </button>
              </div>

              {/* details + actions (bottom on mobile, side panel on desktop) */}
              <aside
                className="border-t border-neutral-200 px-5 pt-4 sm:px-10 lg:flex lg:w-[400px] lg:flex-col lg:justify-between lg:border-l lg:border-t-0 lg:p-10 xl:w-[440px]"
                style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className={`${label} text-neutral-500`}>{current.category}</p>
                    <h2 className="mt-2 text-lg font-light uppercase leading-tight tracking-[0.08em] sm:text-2xl lg:mt-4 lg:text-3xl">
                      {current.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-neutral-600 lg:mt-6 lg:line-clamp-none lg:text-sm lg:leading-[1.9]">
                      {current.description}
                    </p>
                    <p className="mt-6 hidden text-xs leading-relaxed text-neutral-500 lg:block">
                      Measurements can be taken virtually or in person. Standard
                      stitching takes 7–10 business days; expedited delivery is
                      available.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSaved(current.src)}
                    aria-label={savedSet.has(current.src) ? "Remove from My Edit" : "Save to My Edit"}
                    aria-pressed={savedSet.has(current.src)}
                    className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center"
                  >
                    <Heart
                      className={`h-5 w-5 ${savedSet.has(current.src) ? "fill-current" : ""}`}
                      strokeWidth={1.25}
                    />
                  </button>
                </div>

                <div className="mt-4 flex gap-3 lg:mt-0 lg:flex-col">
                  <a
                    href={waLink(
                      `Hi Dev Fashion, I am interested in customizing your design: ${current.title}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 flex-1 items-center justify-center gap-2 bg-neutral-950 px-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-neutral-700 lg:h-14 lg:flex-none"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                    WhatsApp Stylist
                  </a>
                  <Link
                    href={`/contact?service=${encodeURIComponent(current.category)}&design=${encodeURIComponent(current.title)}#booking`}
                    onClick={close}
                    className="group flex h-12 flex-1 items-center justify-center gap-2 border border-neutral-950 px-4 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors hover:bg-neutral-950 hover:text-white lg:h-14 lg:flex-none"
                  >
                    <span className="sm:hidden">Customize</span>
                    <span className="hidden sm:inline">Request Customization</span>
                    <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" strokeWidth={1.25} />
                  </Link>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}