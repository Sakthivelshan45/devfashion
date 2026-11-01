"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, ArrowDown, Scissors } from "lucide-react";


import { Caveat } from "next/font/google";

const hand = Caveat({ subsets: ["latin"], weight: ["500", "600"] });






/* ------------------------------------------------------------------ */
/*  THE DEV FASHION COUTURE UNIVERSE: colour system (one place)        */
/* ------------------------------------------------------------------ */

const THEME = {
  "--wine": "#421322",
  "--plum": "#190E13",
  "--gold": "#C7A568",
  "--ivory": "#FAF7F1",
  "--rose": "#D8B6B6",
} as React.CSSProperties;

/** Blush & burgundy palette, scoped to the archive section only */
const ARCHIVE_THEME = {
  "--bg": "#fdf3f0",
  "--paper": "#fffaf8",
  "--ink": "#2b1820",
  "--muted": "#7d6068",
  "--accent": "#8b2346",
  "--accent-deep": "#5e1530",
  "--gold": "#c79a3b",
  "--line": "#efd3cf",
  "--tint": "#fbe6e6",
  "--tape": "#f3dcab",
} as React.CSSProperties;

/* ------------------------------------------------------------------ */
/*  DATA (unchanged: 29 items, same paths, titles, categories, ids)    */
/* ------------------------------------------------------------------ */

interface RawItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}
interface GalleryItem extends RawItem {
  id: number;
}


const PANELS: [string, string, string][] = [
  ["/images/bls/l1.jpg", "Diwali Silks", "Zari and jewel tones for the festival of lights"],
  ["/images/bls/l2.jpg", "Lamp-lit Festive", "Statement drapes for puja and parties"],
  ["/images/dev_fashion/bls1.jpg", "Pongal Morning", "Red-gold chudis for the kolam"],
  ["/images/dev_fashion/bls2.jpg", "Thai Pongal Heirloom", "Pieces to wear now, keep forever"],
  ["/images/dev_fashion/bls11.jpg", "Harvest Gold", "Fine aari work in warm festive hues"],
  ["/images/dev_fashion/bls13.jpg", "Bridal Heritage", "Heirloom designs, stitched to your measure"],
  // ["/images/dev_fashion/your-new-photo.jpg", "Title", "Short line"],
];

// Repeats the list until one set is wider than the screen, so the loop never shows a gap,
// even with only 2-3 photos. Panel size does NOT change when you add photos.
const SET = Array.from({ length: Math.max(1, Math.ceil(8 / PANELS.length)) }, () => PANELS).flat();

const rawItems: RawItem[] = [
  // { src: "/images/dev_fashion/deeps2.jpeg", alt: "Luxury custom tailored ethnic gown", category: "Custom Designs", title: "Luxury Ethnic Editorial", description: "Intricately detailed custom gown with bespoke neckline contours, handcrafted embellishments and smooth pastel lining." },
  // { src: "/images/dev_fashion/sai.jpeg", alt: "Bridal zardozi blouse", category: "Bridal Collection", title: "Royal Crimson Zardozi Blouse", description: "Premium velvet bridal blouse with rich handwoven gold zardozi patterns and a deep sweetheart back." },
  // { src: "/images/dev_fashion/ammu.jpeg", alt: "Designer saree blouse with cutwork", category: "Designer Blouses", title: "Sheer Cutwork Blouse", description: "Modern sheer net back with floral cutwork, fine bead borders and structured elbow-length sleeves." },
  // { src: "/images/dev_fashion/deeps1.jpeg", alt: "Traditional silk saree outfit", category: "Traditional Wear", title: "Banarasi Heritage Styling", description: "A luxury drape paired with a raw-silk elbow-sleeve blouse finished with handcrafted zari borders." },
  // { src: "/images/dev_fashion/ammu_deeps.jpeg", alt: "Festive lehenga design", category: "Festive Collection", title: "Pastel Meadow Lehenga", description: "A lightweight layered georgette lehenga with hand-painted floral elements, made for festive evenings." },
  // { src: "/images/dev_fashion/ammu_sai.jpeg", alt: "Premium tailoring detail", category: "Custom Designs", title: "Tailoring Perfection", description: "Every pattern is hand-drafted by our master tailors to guarantee a flawless custom fit." },
  // { src: "/images/dev_fashion/dd_black.png", alt: "Bridal lehenga embroidery detail", category: "Bridal Collection", title: "Midnight Bridal Lehenga", description: "Heavy zari and stone embroidery panels crafted over weeks by skilled karigars." },
  // { src: "/images/dev_fashion/deeps.jpg", alt: "Indo-western party wear", category: "Party Wear", title: "Contemporary Indo-Western", description: "Off-shoulder designer silhouette in premium raw silk with soft pleating details." },
  // { src: "/dev_hero.png", alt: "Dev Fashion signature look", category: "Custom Designs", title: "The Signature Look", description: "Our house signature: bespoke tailoring with an editorial finish." },
  // { src: "/images/dev_f1.png", alt: "Dev Fashion featured design", category: "Designer Blouses", title: "Featured Couture Piece", description: "A showpiece blouse design crafted with fine hand detailing." },
  // { src: "/images/kan.jpg", alt: "Kanchipuram style outfit", category: "Traditional Wear", title: "Kanchi Silk Elegance", description: "Timeless silk styling with a custom-fitted blouse and rich borders." },
  // { src: "/images/dev_fashion/blouse_back.jpg", alt: "Blouse back neck design", category: "Designer Blouses", title: "Statement Back Neck", description: "A sculpted back-neck design with delicate tassels and precise finishing." },
  // { src: "/images/dev_fashion/bride1.jpg", alt: "Bride in custom outfit", category: "Bridal Collection", title: "The Radiant Bride", description: "A complete bridal look tailored to the bride's exact vision and measurements." },
  // { src: "/images/dev_fashion/couple1.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition I", description: "Perfectly coordinated outfits for the two of you." },
  // { src: "/images/dev_fashion/couple2.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition II", description: "Matching palettes and fabrics, tailored for a seamless pair." },
  // { src: "/images/dev_fashion/couple3.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition III", description: "Festive couple styling with coordinated embroidery." },
  // { src: "/images/dev_fashion/couple4.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition IV", description: "A refined pairing for weddings and receptions." },
  // { src: "/images/dev_fashion/couple5.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition V", description: "Soft tones and detailed finishing for a graceful duo." },
  // { src: "/images/dev_fashion/couple6.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition VI", description: "Complementary silhouettes designed to photograph beautifully." },
  // { src: "/images/dev_fashion/couple7.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition VII", description: "Rich fabrics and clean tailoring for an elegant couple look." },
  // { src: "/images/dev_fashion/couple9.jpg", alt: "Couple in coordinated outfits", category: "Couples & Family", title: "Together in Tradition VIII", description: "Celebration-ready outfits coordinated down to the details." },
  // { src: "/images/dev_fashion/custom_drs1.jpg", alt: "Custom dress", category: "Custom Designs", title: "Made-to-Measure Dress", description: "A custom dress drafted from scratch around your measurements." },
  // { src: "/images/dev_fashion/family.jpg", alt: "Family in matching outfits", category: "Couples & Family", title: "The Family Collection", description: "Coordinated looks for the whole family, from elders to little ones." },
  // { src: "/images/dev_fashion/group.jpg", alt: "Group in coordinated outfits", category: "Party Wear", title: "Celebration Ensemble", description: "Group styling for bridesmaids, sangeet and festive gatherings." },
  // { src: "/images/dev_fashion/kid_mom1.jpg", alt: "Mother and child in matching outfits", category: "Couples & Family", title: "Mother & Child", description: "Twinning outfits with matching embroidery for mom and little one." },
  // { src: "/images/dev_fashion/kid1.jpg", alt: "Kids ethnic wear", category: "Kids Wear", title: "Little Royals I", description: "Comfortable, beautifully finished ethnic wear for kids." },
  // { src: "/images/dev_fashion/kid2.jpg", alt: "Kids ethnic wear", category: "Kids Wear", title: "Little Royals II", description: "Soft fabrics and playful detailing for festive days." },
  // { src: "/images/dev_fashion/kid3.jpg", alt: "Kids ethnic wear", category: "Kids Wear", title: "Little Royals III", description: "Tailored for movement, styled for the spotlight." },
  // { src: "/images/dev_fashion/old_blouse1.jpg", alt: "Classic blouse design", category: "Designer Blouses", title: "Classic Heirloom Blouse", description: "A timeless blouse pattern reimagined with a modern fit." },



  { src: "/images/dev_fashion/new_b1.jpeg", alt: "Bridal blouse design", category: "Bridal Collection", title: "Elegant Bridal Blouse", description: "A beautiful bridal design crafted with timeless elegance." },
{ src: "/images/dev_fashion/new_b2.jpeg", alt: "Designer blouse design", category: "Designer Blouses", title: "Signature Designer Blouse", description: "A stylish blouse design blending creativity with a refined fit." },
{ src: "/images/dev_fashion/new_b3.jpeg", alt: "Bride wearing a designer blouse", category: "our Brides and Models", title: "Bridal Elegance", description: "Celebrating beautiful bridal looks and memorable occasions." },
{ src: "/images/dev_fashion/new_b4.jpeg", alt: "Party wear blouse design", category: "Party Wear", title: "Glamorous Party Wear", description: "A sophisticated design for celebrations and special evenings." },
{ src: "/images/dev_fashion/new_b5.jpeg", alt: "Traditional blouse design", category: "Traditional Wear", title: "Traditional Grace", description: "Inspired by South Indian heritage and timeless craftsmanship." },
{ src: "/images/dev_fashion/new_b6.jpeg", alt: "Festive blouse design", category: "Festive Collection", title: "Festive Charm", description: "A graceful design made for joyful celebrations and traditions." },
{ src: "/images/dev_fashion/new_b7.jpeg", alt: "Custom-designed blouse", category: "Custom Designs", title: "Made Just for You", description: "A personalized design tailored to your style and preferences." },
{ src: "/images/dev_fashion/new_b8.jpeg", alt: "Bridal blouse craftsmanship", category: "Bridal Collection", title: "Royal Bridal Creation", description: "A statement bridal blouse designed for unforgettable moments." },
{ src: "/images/dev_fashion/new_b9.jpeg", alt: "Traditional South Indian blouse", category: "Traditional Wear", title: "Heritage Elegance", description: "A traditional look celebrating the beauty of South Indian fashion." },
{ src: "/images/dev_fashion/new_b10.jpeg", alt: "Contemporary designer blouse", category: "Designer Blouses", title: "Contemporary Classic", description: "A modern interpretation of classic blouse styling." },
{ src: "/images/dev_fashion/new_b11.jpeg", alt: "Festive occasion blouse", category: "Festive Collection", title: "Celebration Collection", description: "An elegant choice for festive gatherings and family occasions." },
{ src: "/images/dev_fashion/new_b12.jpeg", alt: "Bride and model fashion look", category: "our Brides and Models", title: "Beautiful Bridal Moments", description: "Showcasing the beauty and confidence of our brides and models." },
{ src: "/images/dev_fashion/new_b13.jpeg", alt: "Bespoke blouse design", category: "Custom Designs", title: "Personalised Perfection", description: "A custom creation designed around your individual fashion vision." },
{ src: "/images/dev_fashion/new_b14.jpeg", alt: "Elegant party wear blouse", category: "Party Wear", title: "Evening Elegance", description: "A stylish blouse for parties, receptions and special occasions." },
{ src: "/images/dev_fashion/new_b15.jpeg", alt: "Luxury bridal blouse", category: "Bridal Collection", title: "The Bridal Signature", description: "A refined bridal design created to complement your special day." },
{ src: "/images/dev_fashion/new_b16.jpeg", alt: "Premium designer blouse", category: "Designer Blouses", title: "Modern Designer Edit", description: "Distinctive styling with a focus on detail and elegant finishing." },
{ src: "/images/dev_fashion/new_b17.jpeg", alt: "Traditional ethnic blouse", category: "Traditional Wear", title: "Timeless Tradition", description: "Classic ethnic styling inspired by generations of craftsmanship." },
{ src: "/images/dev_fashion/new_b18.jpeg", alt: "Bride in an elegant blouse", category: "our Brides and Models", title: "Our Bridal Stories", description: "Beautiful looks that celebrate individuality and confidence." },
{ src: "/images/dev_fashion/new_b19.jpeg", alt: "Festive designer blouse", category: "Festive Collection", title: "Festive Sophistication", description: "A graceful design for festivals, celebrations and special moments." },
{ src: "/images/dev_fashion/new_b20.jpeg", alt: "Party occasion blouse", category: "Party Wear", title: "Party-Ready Elegance", description: "A fashionable choice for a polished and confident occasion look." },
{ src: "/images/dev_fashion/new_b21.jpeg", alt: "Made-to-measure blouse design", category: "Custom Designs", title: "Your Style, Your Design", description: "A made-to-measure creation inspired by your personal taste." },
{ src: "/images/dev_fashion/new_b22.jpeg", alt: "South Indian bridal blouse", category: "Bridal Collection", title: "Bridal Heritage", description: "Traditional inspiration meets elegant bridal styling." },
{ src: "/images/dev_fashion/new_b23.jpeg", alt: "Festive traditional blouse", category: "Festive Collection", title: "Festive Radiance", description: "A celebration-ready design for treasured festive occasions." },
{ src: "/images/dev_fashion/new_b24.jpeg", alt: "Stylish designer blouse", category: "Designer Blouses", title: "The Designer Classic", description: "An elegant silhouette with a distinctive designer touch." },
{ src: "/images/dev_fashion/new_b25.jpeg", alt: "Bride and model in designer fashion", category: "our Brides and Models", title: "Moments of Elegance", description: "A showcase of beautiful styling for brides and fashion lovers." },
{ src: "/images/dev_fashion/new_b26.jpeg", alt: "Traditional Indian blouse", category: "Traditional Wear", title: "Classic Ethnic Beauty", description: "A timeless traditional design for sarees and cultural occasions." },
{ src: "/images/dev_fashion/new_b27.jpeg", alt: "Party wear designer blouse", category: "Party Wear", title: "Celebration Style", description: "A chic design for parties, receptions and evening celebrations." },
{ src: "/images/dev_fashion/new_b28.jpeg", alt: "Custom couture blouse", category: "Custom Designs", title: "Bespoke Beauty", description: "A unique blouse concept tailored to your preferred style." },
{ src: "/images/dev_fashion/new_b29.jpeg", alt: "Bridal couture blouse", category: "Bridal Collection", title: "The Royal Bride", description: "A statement bridal creation for your most cherished occasion." },
{ src: "/images/dev_fashion/new_b30.jpeg", alt: "Fashion-forward designer blouse", category: "Designer Blouses", title: "Signature Style", description: "Thoughtful design details paired with a contemporary look." },
{ src: "/images/dev_fashion/new_b31.jpeg", alt: "Festive occasion designer blouse", category: "Festive Collection", title: "Festive Elegance", description: "A sophisticated design for meaningful celebrations." },
{ src: "/images/dev_fashion/new_b32.jpeg", alt: "South Indian traditional blouse", category: "Traditional Wear", title: "Tradition Reimagined", description: "A fresh take on traditional South Indian blouse styling." },
{ src: "/images/dev_fashion/new_b33.jpeg", alt: "Bride and model collection", category: "our Brides and Models", title: "Elegance in Every Frame", description: "Celebrating beautiful fashion moments from our collection." },
{ src: "/images/dev_fashion/new_b34.jpeg", alt: "Personalized designer blouse", category: "Custom Designs", title: "Designed Around You", description: "A personalized design that brings your fashion ideas to life." },
{ src: "/images/dev_fashion/new_b35.jpeg", alt: "Elegant party wear blouse", category: "Party Wear", title: "Occasion Glamour", description: "A polished design for parties and memorable celebrations." },
{ src: "/images/dev_fashion/new_b36.jpeg", alt: "Elegant party wear blouse", category: "Party Wear", title: "Occasion Glamour", description: "A polished design for parties and memorable celebrations." },

  
  { src: "/images/dev_fashion/b1.jpg", alt: "Dev Fashion designer creation 1", category: "Bridal Collection", title: "Bridal Elegance I", description: "A bespoke South Indian bridal creation with carefully considered details and refined finishing." },
  { src: "/images/dev_fashion/b2.jpg", alt: "Dev Fashion designer creation 2", category: "Bridal Collection", title: "Bridal Elegance II", description: "Traditional bridal artistry crafted to celebrate your special occasion." },
  { src: "/images/dev_fashion/b3.jpg", alt: "Dev Fashion designer creation 3", category: "Bridal Collection", title: "Bridal Elegance III", description: "A distinctive bridal look with elegant styling and intricate craftsmanship." },
  { src: "/images/dev_fashion/b4.jpg", alt: "Dev Fashion designer creation 4", category: "Bridal Collection", title: "Bridal Elegance IV", description: "A personalised bridal design created with attention to every detail." },
  { src: "/images/dev_fashion/b5.jpg", alt: "Dev Fashion designer creation 5", category: "Bridal Collection", title: "Bridal Elegance V", description: "Timeless bridal styling inspired by South Indian tradition." },
  { src: "/images/dev_fashion/b6.jpg", alt: "Dev Fashion designer creation 6", category: "Bridal Collection", title: "Bridal Elegance VI", description: "A celebration-ready ensemble with a refined couture finish." },
  { src: "/images/dev_fashion/b7.jpg", alt: "Dev Fashion designer creation 7", category: "Designer Blouses", title: "Designer Blouse I", description: "A statement blouse design with carefully finished details." },
  { src: "/images/dev_fashion/b8.jpg", alt: "Dev Fashion designer creation 8", category: "Designer Blouses", title: "Designer Blouse II", description: "Custom blouse styling that balances tradition and contemporary design." },
  { src: "/images/dev_fashion/b9.jpg", alt: "Dev Fashion designer creation 9", category: "Designer Blouses", title: "Designer Blouse III", description: "A distinctive silhouette tailored for an elegant finish." },
  { src: "/images/dev_fashion/b10.jpg", alt: "Dev Fashion designer creation 10", category: "Designer Blouses", title: "Designer Blouse IV", description: "Thoughtful detailing and a personalised approach to blouse design." },
  { src: "/images/dev_fashion/b11.jpg", alt: "Dev Fashion designer creation 11", category: "Designer Blouses", title: "Designer Blouse V", description: "A custom-crafted blouse designed to complement your saree." },
  { src: "/images/dev_fashion/b12.jpg", alt: "Dev Fashion designer creation 12", category: "Designer Blouses", title: "Designer Blouse VI", description: "Elegant tailoring with attention to fit, finish and proportion." },
  { src: "/images/dev_fashion/b13.jpg", alt: "Dev Fashion designer creation 13", category: "Traditional Wear", title: "Traditional Grace I", description: "Classic South Indian styling with timeless appeal." },
  { src: "/images/dev_fashion/b14.jpg", alt: "Dev Fashion designer creation 14", category: "Traditional Wear", title: "Traditional Grace II", description: "A traditional look designed for meaningful celebrations." },
  { src: "/images/dev_fashion/b15.jpg", alt: "Dev Fashion designer creation 15", category: "Traditional Wear", title: "Traditional Grace III", description: "Heritage-inspired styling with a polished finish." },
  { src: "/images/dev_fashion/b16.jpg", alt: "Dev Fashion designer creation 16", category: "Traditional Wear", title: "Traditional Grace IV", description: "An elegant traditional ensemble for special occasions." },
  { src: "/images/dev_fashion/b17.jpg", alt: "Dev Fashion designer creation 17", category: "Festive Collection", title: "Festive Edit I", description: "A celebration-ready look created for joyful occasions." },
  { src: "/images/dev_fashion/b18.jpg", alt: "Dev Fashion designer creation 18", category: "Festive Collection", title: "Festive Edit II", description: "Festive styling with distinctive details and elegant character." },
  { src: "/images/dev_fashion/b19.jpg", alt: "Dev Fashion designer creation 19", category: "Festive Collection", title: "Festive Edit III", description: "A thoughtfully styled outfit for gatherings and celebrations." },
  { src: "/images/dev_fashion/b20.jpg", alt: "Dev Fashion designer creation 20", category: "Festive Collection", title: "Festive Edit IV", description: "A graceful festive look with a personalised touch." },
  { src: "/images/dev_fashion/b21.jpg", alt: "Dev Fashion designer creation 21", category: "Custom Designs", title: "Made for You I", description: "A made-to-measure creation tailored around your preferences." },
  { src: "/images/dev_fashion/b22.jpg", alt: "Dev Fashion designer creation 22", category: "Custom Designs", title: "Made for You II", description: "Personalised design with attention to fit and finishing." },
  { src: "/images/dev_fashion/b23.jpg", alt: "Dev Fashion designer creation 23", category: "Custom Designs", title: "Made for You III", description: "An individual design shaped around your style and occasion." },
  { src: "/images/dev_fashion/b24.jpg", alt: "Dev Fashion designer creation 24", category: "Custom Designs", title: "Made for You IV", description: "Custom tailoring that brings your design vision to life." },
  { src: "/images/dev_fashion/b25.jpg", alt: "Dev Fashion designer creation 25", category: "Couples & Family", title: "Together in Tradition I", description: "Coordinated styling for memorable family occasions." },
  { src: "/images/dev_fashion/b26.jpg", alt: "Dev Fashion designer creation 26", category: "Couples & Family", title: "Together in Tradition II", description: "Complementary looks thoughtfully styled for special moments." },
  { src: "/images/dev_fashion/b27.jpg", alt: "Dev Fashion designer creation 27", category: "Couples & Family", title: "Together in Tradition III", description: "Personalised occasion wear for couples and families." },
  { src: "/images/dev_fashion/b28.jpg", alt: "Dev Fashion designer creation 28", category: "Couples & Family", title: "Together in Tradition IV", description: "Coordinated outfits with a timeless traditional influence." },
  { src: "/images/dev_fashion/b29.jpg", alt: "Dev Fashion designer creation 29", category: "Kids Wear", title: "Little Royals I", description: "Thoughtfully styled ethnic wear for little celebrations." },
  { src: "/images/dev_fashion/b30.jpg", alt: "Dev Fashion designer creation 30", category: "Kids Wear", title: "Little Royals II", description: "Occasion wear designed with comfort and charming details in mind." },
  { src: "/images/dev_fashion/b31.jpg", alt: "Dev Fashion designer creation 31", category: "Kids Wear", title: "Little Royals III", description: "A special-occasion look for the youngest members of the family." },
  { src: "/images/dev_fashion/b32.jpg", alt: "Dev Fashion designer creation 32", category: "Party Wear", title: "Celebration Style I", description: "A polished party look for festive evenings and special gatherings." },
  { src: "/images/dev_fashion/b33.jpg", alt: "Dev Fashion designer creation 33", category: "Party Wear", title: "Celebration Style II", description: "Contemporary occasion styling with an elegant finish." },
  { src: "/images/dev_fashion/b34.jpg", alt: "Dev Fashion designer creation 34", category: "Party Wear", title: "Celebration Style III", description: "A distinctive outfit for celebrations and memorable occasions." },
  { src: "/images/dev_fashion/b35.jpg", alt: "Dev Fashion designer creation 35", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/old_blouse1.jpg", alt: "Classic blouse design", category: "Designer Blouses", title: "Classic Heirloom Blouse", description: "A timeless blouse pattern reimagined with a modern fit." },

  { src: "/images/dev_fashion/b36.jpeg", alt: "Dev Fashion designer creation 36", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b37.jpeg", alt: "Dev Fashion designer creation 37", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b38.jpeg", alt: "Dev Fashion designer creation 38", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b39.jpeg", alt: "Dev Fashion designer creation 39", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b40.jpeg", alt: "Dev Fashion designer creation 40", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b41.jpeg", alt: "Dev Fashion designer creation 41", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b42.jpeg", alt: "Dev Fashion designer creation 42", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b43.jpeg", alt: "Dev Fashion designer creation 43", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b44.jpeg", alt: "Dev Fashion designer creation 44", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b45.jpeg", alt: "Dev Fashion designer creation 45", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b46.jpeg", alt: "Dev Fashion designer creation 46", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b47_nivi_main.jpeg", alt: "Dev Fashion designer creation 47", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b48.jpeg", alt: "Dev Fashion designer creation 48", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b49.jpeg", alt: "Dev Fashion designer creation 49", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b50.jpeg", alt: "Dev Fashion designer creation 50", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b51.jpeg", alt: "Dev Fashion designer creation 51", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b52.jpeg", alt: "Dev Fashion designer creation 52", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b53.jpeg", alt: "Dev Fashion designer creation 53", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b54.jpeg", alt: "Dev Fashion designer creation 54", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b55.jpeg", alt: "Dev Fashion designer creation 55", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b56.jpeg", alt: "Dev Fashion designer creation 56", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b57.jpeg", alt: "Dev Fashion designer creation 57", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b58.jpeg", alt: "Dev Fashion designer creation 58", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b59.jpeg", alt: "Dev Fashion designer creation 59", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b60.jpeg", alt: "Dev Fashion designer creation 60", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b61.jpeg", alt: "Dev Fashion designer creation 61", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b62.jpeg", alt: "Dev Fashion designer creation 62", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/b63.jpeg", alt: "Dev Fashion designer creation 63", category: "Custom Designs", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },

  { src: "/images/dev_fashion/kid1.jpeg", alt: "Dev Fashion designer creation 64", category: "Kids Wear", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/kid2.jpeg", alt: "Dev Fashion designer creation 65", category: "Kids Wear", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/kid3.jpeg", alt: "Dev Fashion designer creation 66", category: "Kids Wear", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },

    { src: "/images/dev_fashion/kid1.jpg", alt: "Dev Fashion designer creation 67", category: "Kids Wear", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/kid2.jpg", alt: "Dev Fashion designer creation 68", category: "Kids Wear", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },
  { src: "/images/dev_fashion/kid3.jpg", alt: "Dev Fashion designer creation 69", category: "Kids Wear", title: "The Signature Look", description: "A personalised Dev Fashion creation finished with thoughtful detailing." },



];


const galleryItems: GalleryItem[] = rawItems.map((item, i) => ({ ...item, id: i + 1 }));

const categories = [
  "All",
  "Bridal Collection",
  "Designer Blouses",
  "Party Wear",
  "Traditional Wear",
  "Festive Collection",
  "Custom Designs",
  "Couples & Family",
  "Kids Wear",
];

/** Craft chapters: each uses an existing photo and that photo's own description */
/** Craft chapters: each has its own photo and text, change them freely */
const craftChapters = [
  {
    label: "Zardosi work",
    src: "/images/dev_fashion/main.jpeg",
    item: {
      alt: "Hand embroidered zardozi blouse",
      title: "Royal Crimson Zardozi Blouse",
      description: "Rich handwoven gold zardozi patterns, stitched one motif at a time.",
    },
  },
  {
    label: "Aari Embroidery Work",
    src: "/images/dev_fashion/deeps_mirror.png",
    item: {
      alt: "Custom neckline detail",
      title: "Bespoke Neckline",
      description: "Neckline contours drafted around your shoulders and finished by hand.",
    },
  },
  {
    label: "Net Designer Blouse",
    src: "/images/dev_fashion/client12.jpeg",
    item: {
      alt: "Elbow-length sleeve detail",
      title: "Structured Sleeves",
      description: "Elbow-length sleeves with bead borders, cut to sit comfortably.",
    },
  },
  {
    label: "Pattern Blouse",
    src: "/images/dev_fashion/client11.jpeg",
    item: {
      alt: "Blouse back neck design",
      title: "Statement Back Neck",
      description: "A sculpted back-neck with delicate tassels and precise finishing.",
    },
  },
  {
    label: "Custom Blouse",
    src: "/images/dev_fashion/custom_drs1.jpg",
    item: {
      alt: "Custom fitting and tailoring",
      title: "Tailoring Perfection",
      description: "Every pattern is hand-drafted by our master tailors for a flawless fit.",
    },
  },
];

const journey = [
  ["Explore a design", "Browse the archive and open any piece."],
  ["Request customization", "Send the design you love through the booking form."],
  ["Share measurements", "Virtually, or arrange an in-person measurement."],
  ["Coordinate with your stylist", "Settle neckline, sleeves, back and embroidery together."],
  ["Confirm the order", "Agree the order and delivery arrangements."],
];

const WA = "https://wa.me/918098558923";

/* ------------------------------------------------------------------ */
/*  OPENING SCENE                                                      */
/* ------------------------------------------------------------------ */

function Hero({ onExplore }: { onExplore: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const k = reduce ? 0 : 1;
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 110 * k]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, -90 * k]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50 * k]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[var(--plum)] text-[var(--ivory)]">
      <motion.div style={{ y: yMain }} className="absolute inset-x-0 top-0 h-[68svh] sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:w-[58%]">
        <motion.div
          initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="relative h-full w-full"
        >
          <Image src="/dev_hero.png" alt="Dev Fashion signature look" fill priority sizes="(max-width: 640px) 100vw, 58vw" className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum)] via-[var(--plum)]/30 to-transparent sm:bg-gradient-to-r sm:from-[var(--plum)] sm:via-transparent sm:to-transparent" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: ySub }}
        className="absolute left-[7%] top-[16%] hidden w-[17%] max-w-[260px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] sm:block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image src="/images/dev_fashion/b47_nivi_main.jpeg" alt="Bridal zardozi blouse" fill sizes="17vw" className="object-cover" />
        </div>
        <p className="mt-3 text-xs tracking-wide text-[var(--rose)]">Royal Crimson Zardozi Blouse</p>
      </motion.div>

      <motion.div style={{ y: yText }} className="relative z-10 px-5 pb-10 pt-[52svh] sm:px-[7%] sm:pb-16 sm:pt-32">
        {/* <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--gold)]">Dev Fashion Atelier</p> */}
        <h2 className="mt-4 font-serif font-light leading-[0.98] tracking-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}>
          Crafted to
          <br />
          <span className="italic text-[var(--rose)] sm:ml-[8%]">become your</span>
          <br />
          heirloom.
        </h2>
        <motion.span
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.4, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
          className="mt-6 block h-px w-40 bg-[var(--gold)] sm:w-64"
        />
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-[var(--ivory)]/75 sm:text-base">
            Bespoke South Indian bridal blouses, hand-finished embroidery and tailoring drafted around your measurements.
          </p>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 bg-[var(--gold)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--plum)] transition-colors hover:bg-[var(--ivory)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
            >
              Explore the Collection
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <span className="text-xs text-[var(--rose)]/80">
              <span className="hidden sm:inline">Click any piece to open it. </span>
              <span className="sm:hidden">Tap any piece to open it. </span>
              Swipe or use the arrow keys inside.
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ARCHIVE DECORATIONS: hanger, measuring tape, sewing line           */
/* ------------------------------------------------------------------ */

/** Clothes hanger that hangs from the rail */
function Hanger() {
  return (
    <svg
      viewBox="0 0 120 46"
      className="relative z-10 mx-auto -mb-[10px] h-[34px] w-[80px] drop-shadow-sm sm:-mb-[14px] sm:h-[46px] sm:w-[110px]"
      fill="none"
      aria-hidden
    >
      <path d="M60 2c-6 0-9.5 3.5-9.5 7.5 0 3.5 3 5 6 7" stroke="#b08226" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M60 17 L10 38 Q4 41 10 42 H110 Q116 41 110 38 Z" fill="#f7e6c4" stroke="#b08226" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M22 37 L60 21 L98 37" stroke="#fffaf0" strokeWidth="1.2" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

/** Sliding measuring tape divider */
function MeasuringTape({ label }: { label: string }) {
  return (
    <div className="relative mx-auto my-10 h-8 w-full max-w-5xl overflow-hidden rounded-[3px] bg-[var(--tape)] shadow-[0_6px_18px_-8px_rgba(94,21,48,0.45)] ring-1 ring-[var(--gold)]/30 sm:my-14 sm:h-10">
      <style>{`@keyframes tape-slide{to{background-position-x:-100px}}`}</style>
      <div
        className="absolute inset-0"
        style={{
          animation: "tape-slide 6s linear infinite",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0 0",
          backgroundImage:
            "linear-gradient(90deg, rgba(242, 234, 237, 0.6) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(94,21,48,.8) 1.5px, transparent 1.5px)," +
            "linear-gradient(90deg, rgba(94,21,48,.95) 2px, transparent 2px)",
          backgroundSize: "10px 8px, 50px 13px, 100px 19px",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[5%] whitespace-nowrap rounded-full border border-[var(--gold)]/40 bg-[var(--bg)] px-3 py-0.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)] sm:-translate-y-[10%] sm:px-5 sm:text-[10px] sm:tracking-[0.35em]">
        {label}
      </div>
    </div>
  );
}

/** A running stitch being sewn across, with a needle at the leading edge */
function SewingLine() {
  return (
    <div className="relative mx-auto mt-6 h-6 w-44 sm:mt-7 sm:w-96">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 h-0 border-t-2 border-dashed border-[var(--gold)]"
      >
        <svg viewBox="0 0 32 20" className="absolute -right-6 -top-[13px] h-5 w-8" aria-hidden>
          <line x1="3" y1="17" x2="30" y2="3" stroke="#7d6068" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="4.5" cy="16" rx="1.2" ry="3" transform="rotate(30 4.5 16)" fill="#fffaf8" stroke="#7d6068" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HANGING 3D CARD                                                    */
/* ------------------------------------------------------------------ */

function HangingCard({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 160, damping: 18 });
  const sy = useSpring(my, { stiffness: 160, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-11, 11]);
  const rotateX = useTransform(sy, [0, 1], [9, -9]);
  const gx = useTransform(sx, (v) => `${v * 100}%`);
  const gy = useTransform(sy, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.45), transparent 55%)`;

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const swingDuration = 4.2 + (index % 5) * 0.55;
  const swingDelay = (index % 7) * 0.25;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay: (index % 2) * 0.08 }}
      className="relative pt-2"
    >
      {/* brass rail segment (joins neighbours in the same row) */}
      <div className="absolute -left-1.5 -right-1.5 top-0 h-[5px] rounded-full bg-gradient-to-b from-[#f7e6c4] via-[var(--gold)] to-[#8c6a1f] shadow-[0_3px_6px_rgba(94,21,48,0.25)] sm:-left-3.5 sm:-right-3.5 sm:h-[6px]" />

      <motion.div
        style={{ transformOrigin: "50% 0%" }}
        animate={reduce ? undefined : { rotate: [-1.3, 1.3, -1.3] }}
        transition={{ duration: swingDuration, repeat: Infinity, ease: "easeInOut", delay: swingDelay }}
        whileHover={{ rotate: 0, transition: { duration: 0.5 } }}
      >
        <Hanger />

        <div style={{ perspective: 900 }}>
          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            onClick={onOpen}
            role="button"
            tabIndex={0}
            aria-label={`Open ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen();
              }
            }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileTap={{ scale: 0.97 }}
            className="group relative cursor-pointer bg-[var(--paper)] p-2 shadow-[0_22px_40px_-22px_rgba(94,21,48,0.5)] ring-1 ring-[var(--line)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:p-3"
          >
            {/* photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--tint)]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              {/* running-stitch frame */}
              <div className="pointer-events-none absolute inset-2 border border-dashed border-white/80 transition-all duration-500 group-hover:border-[var(--gold)] sm:inset-3 sm:group-hover:inset-4" />
              {/* moving light */}
              {/* <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: glare }}
              /> */}
              {/* tag with punched hole */}
              <div
                className="absolute left-2 top-2 flex items-center gap-1 rounded-sm bg-[var(--bg)] py-0.5 pl-1 pr-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow sm:left-3 sm:top-3 sm:gap-1.5 sm:py-1 sm:pl-1.5 sm:pr-2.5 sm:text-[9px] sm:tracking-[0.25em]"
                style={{ transform: "translateZ(40px)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--gold)] bg-white sm:h-2 sm:w-2" />
                No. {String(item.id).padStart(2, "0")}
              </div>
            </div>

            {/* caption */}
            <div
              className="flex items-end justify-between gap-2 px-0.5 pb-0.5 pt-3 sm:gap-3 sm:px-1 sm:pt-4"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="min-w-0">
                <span className="block truncate text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-[10px] sm:tracking-[0.25em]">
                  {item.category}
                </span>
                <h3 className="mt-0.5 line-clamp-2 font-serif text-[13px] leading-snug text-[var(--ink)] sm:mt-1 sm:text-lg">
                  {item.title}
                </h3>
              </div>
              <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white sm:flex">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}


const COUPLE_PHOTOS = [
  "/images/dev_fashion/cpl1.jpg",
  "/images/dev_fashion/nivi_cpl.jpeg",
  "/images/dev_fashion/couple9.jpg",
  "/images/dev_fashion/cpl2.jpeg",
  "/images/dev_fashion/wedd_cpl.jpg",
  "/images/dev_fashion/wedd_cpl1.jpg",
  "/images/dev_fashion/wedd_cpl2.jpg",
  "/images/dev_fashion/nivi_cpl3.jpeg",
  "/images/dev_fashion/new_cpl1.jpeg",
  "/images/dev_fashion/new_cpl2.jpeg",
  "/images/dev_fashion/new_cpl3.jpg", 
];

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */

export default function GalleryLightbox() {
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const [craft, setCraft] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const [coupleIndex, setCoupleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;

    const timer = window.setInterval(() => {
      setCoupleIndex((current) => (current + 1) % COUPLE_PHOTOS.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [reduce]);



  const filteredItems = useMemo(
    () => (selectedCategory === "All" ? galleryItems : galleryItems.filter((i) => i.category === selectedCategory)),
    [selectedCategory]
  );
  const n = filteredItems.length;
  const open = activeImageIndex !== null;
  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const go = useCallback(
    (step: number) => {
      setDir(step);
      setActiveImageIndex((i) => (i === null ? i : (i + step + n) % n));
    },
    [n]
  );
  const prev = () => go(-1);
  const next = () => go(1);
  const close = () => setActiveImageIndex(null);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
      lastFocus.current?.focus?.();
    };
  }, [open, go]);

  const explore = () =>
    document.getElementById("archive")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  const slide = reduce ? 0 : 48;

  return (
    <div style={THEME} className="relative w-full overflow-x-clip bg-[var(--white)]">
      <Hero onExplore={explore} />

      {/* ------------------------- THE ARCHIVE ------------------------- */}
      <section
        id="archive"
        style={ARCHIVE_THEME}
        className="relative w-full overflow-hidden bg-[var(--paper)] px-3 py-14 text-[var(--ink)] sm:px-8 sm:py-24"
      >
        {/* pattern-paper dots + soft glows */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "radial-gradient(rgba(139,35,70,0.14) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <motion.div
            animate={reduce ? undefined : { x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f6c4cc]/50 blur-3xl sm:h-80 sm:w-80"
          />
          <motion.div
            animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 40, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#f3dca8]/50 blur-3xl sm:h-96 sm:w-96"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* heading */}
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--gold)] sm:text-[11px] sm:tracking-[0.45em]"
            >
              <Scissors className="h-3.5 w-3.5" /> Dev Fashion Bridel Blouse Designer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-3 font-serif text-[2rem] font-light leading-[1.15] tracking-wide text-[var(--ink)] sm:mt-4 sm:text-6xl"
            >
              Blouses, <span className="italic text-[var(--gold)]">Stitched</span> to Your Story
            </motion.h2>
            <p className="mx-auto mt-3 max-w-md px-2 text-[13px] leading-relaxed text-[var(--muted)] sm:mt-4 sm:max-w-xl sm:text-base">
              Every design below is hand-drafted, hand-finished and cut to your measurements. Pick a hanger and make it yours.
            </p>
            <SewingLine />
          </div>

          <MeasuringTape label="Made to your measure" />

          {/* category tabs: swipeable row on mobile, wrapped on desktop */}
          <div className="-mx-3 mb-10 overflow-x-auto px-3 [scrollbar-width:none] sm:mx-auto sm:mb-14 sm:max-w-5xl sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
              {categories.map((category) => {
                const selected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={(e) => {
                      setSelectedCategory(category);
                      setActiveImageIndex(null);
                      e.currentTarget.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
                    }}
                    aria-pressed={selected}
                    className={`relative shrink-0 whitespace-nowrap border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-widest ${selected
                      ? "border-[var(--accent)] text-white"
                      : "border-[var(--line)] bg-white/70 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
                      }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="tab-bg"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 bg-[var(--accent)]"
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* grid of hanging designs: 2 columns on phones */}
          {n === 0 ? (
            <p className="py-24 text-center text-[var(--muted)]">No designs in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-7 sm:gap-y-14 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item, index) => (
                <HangingCard
                  key={`${selectedCategory}-${item.id}`}
                  item={item}
                  index={index}
                  onOpen={() => {
                    setDir(1);
                    setActiveImageIndex(index);
                  }}
                />
              ))}
            </div>
          )}
        </div>

      </section>












      {/* ------------------------- CRAFTSMANSHIP ------------------------- */}
      <section className="bg-[var(--white)] px-4 py-20 text-[var(--plum)] sm:px-[6%] sm:py-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-16">      
          <div className="lg:col-span-5 lg:pt-6">
            {/* Luxury editorial heading */}

            <h2 className="leading-[0.9] font-serif" style={{ fontSize: "clamp(2.5rem, 3.5vw, 2.5rem)" }}>
              Your pride,
              
              <span className="text-[var(--wine)]"> our stitch.</span>
              <br />
              <span className="font-normal tracking-[-0.035em]">
                Tradition, 
                <span className="font-bold italic">tailored to you.</span>
              </span>
            </h2>

            {/* Interactive craft chapters */}
            <ul className="mt-10 divide-y divide-[var(--plum)]/10 border-y border-[var(--plum)]/10 sm:mt-10">
              {craftChapters.map((c, i) => (
                <li key={c.label}>
                  <button
                    type="button"
                    onClick={() => setCraft(i)}
                    onMouseEnter={() => setCraft(i)}
                    onFocus={() => setCraft(i)}
                    aria-pressed={craft === i}
                    className="group flex w-full items-start gap-4 py-5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wine)] sm:py-6"
                  >
                    {/* Animated gold indicator */}
                    <span
                      className={`mt-3 h-px shrink-0 transition-all duration-500 ${craft === i
                          ? "w-10 bg-[var(--wine)]"
                          : "w-4 bg-[var(--plum)]/25 group-hover:w-7 group-hover:bg-[var(--wine)]"
                        }`}
                    />

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-serif text-xl leading-snug transition-all duration-300 sm:text-2xl ${craft === i
                            ? "translate-x-1 text-[var(--wine)]"
                            : "text-[var(--plum)]/60 group-hover:text-[var(--plum)]"
                          }`}
                      >
                        {c.label}
                      </span>

                      {craft === i && (
                        <span
                          key={c.label}
                          className="mt-3 block max-w-md animate-[fadeIn_500ms_ease-out] text-sm leading-7 text-[var(--plum)]/75"
                        >
                          {c.item.description}
                        </span>
                      )}
                    </span>

                    {/* Active chapter number */}
                    <span
                      className={`pt-1 font-serif text-xs tracking-widest transition-colors duration-300 ${craft === i
                          ? "text-[var(--wine)]"
                          : "text-[var(--plum)]/30"
                        }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="mx-auto w-full max-w-[460px] lg:ml-auto">
              {/* the stack */}
              <div className="relative aspect-[4/5] w-full">
                {craftChapters.map((c, i) => {
                  const total = craftChapters.length;
                  const k = (i - craft + total) % total; // 0 = front print
                  const rot = [0, 6, -5, 9, -8][k];
                  const dx = [0, 26, -24, 40, -38][k];
                  const dy = [0, 10, 14, 22, 26][k];
                  const front = k === 0;

                  return (
                    <motion.div
                      key={c.src}
                      role={front ? "button" : undefined}
                      tabIndex={front ? 0 : -1}
                      aria-label={front ? "Show next chapter" : undefined}
                      onTap={() => (front ? setCraft((craft + 1) % total) : setCraft(i))}
                      onKeyDown={(e) => {
                        if (front && (e.key === "Enter" || e.key === " ")) {
                          e.preventDefault();
                          setCraft((craft + 1) % total);
                        }
                      }}
                      drag={front ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.5}
                      dragSnapToOrigin
                      onDragEnd={(_, info) => {
                        if (Math.abs(info.offset.x) > 70) setCraft((craft + 1) % total);
                      }}
                      initial={false}
                      animate={{
                        rotate: reduce ? 0 : rot,
                        x: dx,
                        y: dy,
                        scale: 1 - k * 0.03,
                        opacity: k > 3 ? 0 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 140, damping: 18 }}
                      style={{ zIndex: total - k }}
                      className="absolute inset-0 flex cursor-pointer flex-col bg-[#fffdf8] p-3 shadow-[0_24px_40px_-24px_rgba(25,14,19,0.6)] ring-1 ring-[var(--plum)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--wine)] sm:p-4"
                    >
                      {/* tape on the front print */}
                      {front && (
                        <span
                          aria-hidden
                          className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-[3deg] bg-[#e8d9ac]/85 shadow-sm"
                        />
                      )}

                      <div className="relative min-h-0 flex-1 overflow-hidden bg-[var(--wine)]">
                        <Image
                          src={c.src}
                          alt={c.item.alt}
                          fill
                          sizes="(max-width: 1024px) 90vw, 460px"
                          className="pointer-events-none object-cover object-top"
                        />
                      </div>

                      {/* white print margin with the chapter name */}
                      <div className="flex h-14 items-end justify-between gap-3 pt-3 sm:h-16">
                        <p className="truncate font-serif text-lg italic leading-none text-[var(--wine)] sm:text-xl">
                          {c.label}
                        </p>
                        <p className="shrink-0 text-[10px] tracking-[0.25em] text-[var(--plum)]/50">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* controls */}
              <div className="mt-12 flex items-center justify-between text-[var(--plum)]/70 sm:mt-14">
                <button
                  onClick={() => setCraft((craft - 1 + craftChapters.length) % craftChapters.length)}
                  aria-label="Previous chapter"
                  className="grid h-11 w-11 place-items-center border border-[var(--plum)]/20 transition-colors hover:border-[var(--wine)] hover:text-[var(--wine)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--wine)]"
                >
                  <ChevronLeft size={18} />
                </button>
                <p className="text-xs tracking-[0.25em]">
                  <span className="font-serif text-lg text-[var(--wine)]">{String(craft + 1).padStart(2, "0")}</span> / {String(craftChapters.length).padStart(2, "0")}
                  <span className="ml-3 hidden sm:inline">tap the photo to turn it</span>
                </p>
                <button
                  onClick={() => setCraft((craft + 1) % craftChapters.length)}
                  aria-label="Next chapter"
                  className="grid h-11 w-11 place-items-center border border-[var(--plum)]/20 transition-colors hover:border-[var(--wine)] hover:text-[var(--wine)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--wine)]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* -----------5 women image in main page---------------- */}


      <section className="relative overflow-hidden bg-[#f6e8d0] px-4 py-14 text-[#3b1d0e] sm:px-[6%] sm:py-20">
        {/* shared temple-niche arch clip path */}
        <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
          <defs>
            <clipPath id="dfTempleArch" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.24 C0,0.12 0.26,0.06 0.5,0 C0.74,0.06 1,0.12 1,0.24 L1,1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* warm sun-glow + thin terracotta frame */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120, 174, 228, 0.28),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 border border-[#b4532a]/40 sm:inset-5"
        />

        <div className="relative mx-auto max-w-[1240px]">
          {/* header */}
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#b4532a]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#e0952b]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#b4532a]">
                  The Lookbook
                </p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-serif font-light leading-[1.05]"
                style={{ fontSize: "clamp(2.1rem, 4vw, 3.5rem)" }}
              >
                Heritage, <span className="italic text-[#b4532a]">draped for you.</span>
              </motion.h2>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 bg-[#b4532a] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#fbf1df] transition-colors hover:bg-[#3b1d0e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4532a]"
            >
              View Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* four temple shrines */}
          <div className="mt-12 flex flex-col gap-2 lg:h-[560px] lg:flex-row lg:gap-3">
            {[
              // replace these paths and titles with your own looks
              ["/images/dev_fashion/main.jpeg", "The Bride", "Heirloom drapes for the big day"],
              ["/images/dev_fashion/anisha.jpeg", "The Festive", "Colour and zari for celebrations"],
              ["/images/dev_fashion/sai.jpeg", "The Everyday", "Easy tradition, all week long"],
              ["/images/dev_fashion/deeps2.jpeg", "The Heirloom", "Pieces made to be passed down"],
              ["/images/dev_fashion/new_clint1.jpeg", "The Heirloom", "Pieces made to be passed down"],
            ].map(([src, title, line], i) => (
              <motion.article
                key={src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-72 overflow-hidden bg-[#1a1613] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-80 lg:h-auto lg:flex-1 lg:hover:flex-[3.2]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                {/* light shade only at the bottom for caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                {/* number */}
                <span className="absolute left-5 top-5 font-serif text-sm tracking-[0.25em] text-white/90">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* collapsed: vertical title (desktop) */}
                <p
                  className="absolute bottom-6 left-5 hidden origin-bottom-left font-serif text-2xl italic text-white transition-opacity duration-300 group-hover:opacity-0 lg:block"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {title}
                </p>

                {/* expanded caption (always shown on mobile) */}
                <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 sm:p-7 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:delay-200">
                  <p className="font-serif text-3xl italic leading-tight text-white sm:text-4xl">{title}</p>
                  <p className="mt-2 max-w-xs text-sm text-white/80">{line}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e6c88e]">
                    View look <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>






      {/* temple design showcase for blouses */}

      <section className="relative overflow-hidden bg-[#f8e9c8] text-[#3a1a10]">
        {/* shared clip path: rounded temple niche */}
        <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
          <defs>
            <clipPath id="dfTempleNiche" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.3 C0,0.1 0.22,0 0.5,0 C0.78,0 1,0.1 1,0.3 L1,1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* turmeric glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(243,162,26,0.28),transparent_60%)]"
        />

        {/* TOP: temple border (Kanchipuram saree style) */}
        <div aria-hidden className="relative border-b-2 border-[#c9973f] bg-[#8f1d1d]">
          <svg className="block h-7 w-full">
            <defs>
              <pattern id="dfTempleBorder" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M0,28 L14,3 L28,28 Z" fill="#c9973f" />
                <path d="M7,28 L14,13 L21,28 Z" fill="#8f1d1d" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dfTempleBorder)" />
          </svg>
        </div>

        {/* mango-leaf toranam hanging from the border */}
        <svg aria-hidden className="relative block h-10 w-full">
          <defs>
            <pattern id="dfToranam" width="34" height="40" patternUnits="userSpaceOnUse">
              <path d="M17,0 V6" stroke="#3f7a3a" strokeWidth="1.2" />
              <path d="M17,6 C9,14 11,28 17,36 C23,28 25,14 17,6 Z" fill="#3f7a3a" />
              <path d="M17,8 V32" stroke="#6fa65a" strokeWidth="0.8" />
              <circle cx="17" cy="38" r="2.2" fill="#f3a21a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dfToranam)" />
        </svg>

        <div className="relative mx-auto max-w-[1240px] px-4 pb-14 pt-6 sm:px-[6%] sm:pb-20 sm:pt-10 xl:px-0">
          {/* header with copy */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path d="M12 2 C14.5 6 16.5 8 12 12.5 C7.5 8 9.5 6 12 2 Z" fill="#f3a21a" />
                <path d="M4 15 Q12 23 20 15 Z" fill="#c9973f" />
              </svg>
              <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#a61e22]">
                Rooted in Tradition
              </p>
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path d="M12 2 C14.5 6 16.5 8 12 12.5 C7.5 8 9.5 6 12 2 Z" fill="#f3a21a" />
                <path d="M4 15 Q12 23 20 15 Z" fill="#c9973f" />
              </svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-serif font-light leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            >
              Woven in heritage,
              <br />
              <span className="italic text-[#a61e22]">worn with grace.</span>
            </motion.h2>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#3a1a10]/75 sm:text-base sm:leading-8">
              Inspired by the sacred silks, temple borders and soaring gopurams of South India, every
              Dev Fashion creation is tailored to celebrate who you are, from the first look to the
              final fitting.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#7a1717]">
              <span>Tradition</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-[#c9973f]" />
              <span>Grace</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-[#c9973f]" />
              <span>Craft</span>
            </div>
          </div>

          {/* four gopuram shrines */}
          <div className="mt-14 grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-7">
            {[
              // replace these paths and titles with your own looks
              ["/images/Dev_fashion/1.jpg", "The Bride", "Heirloom drapes for the big day"],
              ["/images/Dev_fashion/b11.jpg", "The Festive", "Colour and zari for celebrations"],
              ["/images/Dev_fashion/new_b1.jpeg", "The Everyday", "Easy tradition, all week long"],
              ["/images/Dev_fashion/bls_port19.jpg", "The Heirloom", "Pieces made to be passed down"],
            ].map(([src, title, line], i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                {/* gopuram tower: five tiers, barrel roof, three kalasams */}
                <svg viewBox="0 0 100 72" className="mx-auto -mb-px block w-[74%]" aria-hidden>
                  {/* kalasams */}
                  {[38, 50, 62].map((cx) => (
                    <g key={cx}>
                      <line x1={cx} y1="6" x2={cx} y2="10" stroke="#c9973f" strokeWidth="1" />
                      <ellipse cx={cx} cy="4.5" rx="2" ry="2.6" fill="#f3a21a" />
                    </g>
                  ))}
                  {/* barrel roof */}
                  <path d="M31,20 Q50,6 69,20 Z" fill="#7a1717" stroke="#c9973f" strokeWidth="0.8" />
                  {/* tiers with little windows */}
                  {[
                    [2, 96, 60],
                    [9, 82, 50],
                    [16, 68, 40],
                    [23, 54, 30],
                    [30, 40, 20],
                  ].map(([x, w, y]) => (
                    <g key={y}>
                      <rect x={x} y={y} width={w} height="10" fill="#a61e22" stroke="#c9973f" strokeWidth="0.8" />
                      {Array.from({ length: Math.floor((w - 6) / 11) }).map((_, k, arr) => {
                        const gap = (w - 6) / arr.length;
                        return (
                          <rect
                            key={k}
                            x={x + 3 + k * gap + (gap - 5) / 2}
                            y={y + 2.5}
                            width="5"
                            height="6"
                            rx="2.5"
                            fill="#f3c96a"
                          />
                        );
                      })}
                    </g>
                  ))}
                </svg>

                {/* pillared shrine panel */}
                <div className="relative border-2 border-[#c9973f] bg-[#7a1717] px-5 pb-3 pt-3 shadow-[0_30px_60px_-30px_rgba(90,20,20,0.7)] sm:px-6">
                  {/* carved pillars */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-2.5 bg-[repeating-linear-gradient(to_bottom,#c9973f_0_6px,#5a1010_6px_12px)] sm:w-3"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-y-0 right-0 w-2.5 bg-[repeating-linear-gradient(to_bottom,#c9973f_0_6px,#5a1010_6px_12px)] sm:w-3"
                  />
                  <div
                    className="relative aspect-[3/4] overflow-hidden bg-[#3a1a10]"
                    style={{ clipPath: "url(#dfTempleNiche)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={title}
                      className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a1a10]/45 via-transparent to-transparent" />
                  </div>
                </div>

                {/* stepped plinth */}
                <div className="h-2 w-full bg-[#c9973f]" />
                <div className="h-2 w-[104%] -translate-x-[2%] bg-[#a61e22]" />

                <figcaption className="mt-4 text-center">
                  <p className="font-serif text-xl italic text-[#7a1717]">{title}</p>
                  <p className="mt-1 text-xs leading-snug text-[#3a1a10]/65">{line}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 bg-[#a61e22] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#fbf1df] transition-colors hover:bg-[#3a1a10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a61e22]"
            >
              View Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* BOTTOM: temple border */}
        <div aria-hidden className="relative border-t-2 border-[#c9973f] bg-[#8f1d1d]">
          <svg className="block h-7 w-full -scale-y-100">
            <rect width="100%" height="100%" fill="url(#dfTempleBorder)" />
          </svg>
        </div>
      </section>



      {/* auto changing main  */}


      <section className="relative mt-12 overflow-hidden bg-[#4a0d0d] text-[#fbf1df]">
        {/* ================= PART 1: auto-changing photos with offer text ================= */}
        <div className="relative flex h-[100svh] min-h-[680px] flex-col overflow-hidden">
          {/* ---------- BACKGROUND: auto-changing photos ---------- */}
          <div className="absolute inset-0">
            {[
              ["/images/bls/l1.jpg", "தீபாவளி", "Diwali Silks", "Zari and jewel tones for the festival of lights"],
              ["/images/bls/l2.jpg", "தீபாவளி", "Lamp-lit Festive", "Statement drapes for puja and parties"],
              ["/images/dev_fashion/bls1.jpg", "தைப்பொங்கல்", "Pongal Morning", "Red-gold chudis for the kolam"],
              ["/images/dev_fashion/bls2.jpg", "தைப்பொங்கல்", "Thai Pongal Heirloom", "Pieces to wear now, keep forever"],
              ["/images/dev_fashion/bls11.jpg", "தைப்பொங்கல்", "Harvest Gold", "Fine aari work in warm festive hues"],
              ["/images/dev_fashion/bls13.jpg", "தைப்பொங்கல்", "Bridal Heritage", "Heirloom designs, stitched to your measure"],
            ].map(([src, festival, title, line], i) => (
              <div key={src}>
                {/* photo: 5s each, soft crossfade + slow zoom (6 photos = 30s loop) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [1, 1.04, 1.07, 1.1] }}
                  transition={{ duration: 30, times: [0, 0.0333, 0.1667, 0.2], repeat: Infinity, delay: i * 5, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${title}: ${line}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover object-top"
                  />
                </motion.div>

                {/* caption for the current photo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [14, 0, 0, -8] }}
                  transition={{ duration: 30, times: [0, 0.0333, 0.1667, 0.2], repeat: Infinity, delay: i * 5, ease: "linear" }}
                  className="absolute bottom-10 right-5 z-20 max-w-[17rem] text-right sm:right-8 lg:bottom-18 lg:right-14"
                >
                  <p className="text-sm font-medium tracking-wide text-[#f3c96a]">{festival}</p>
                  <p className="mt-0.5 font-serif text-2xl italic sm:text-3xl">{title}</p>
                  <p className="mt-1 hidden text-xs leading-snug text-[#fbf1df]/80 sm:block">{line}</p>
                </motion.div>

                {/* progress bar for this photo */}
                <div
                  className="absolute bottom-8 z-20 h-[3px] overflow-hidden rounded-full bg-[#fbf1df]/25 lg:bottom-12"
                  style={{ right: `calc(1.25rem + ${(5 - i) * 3.25}rem)`, width: "2.75rem" }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0, 0] }}
                    transition={{ duration: 30, times: [0, 0.1667, 0.1733, 1], repeat: Infinity, delay: i * 5, ease: "linear" }}
                    className="h-full w-full origin-left bg-[#f3c96a]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* mobile only: soft shade so the white text stays readable on a phone (desktop unchanged) */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4a0d0d]/80 via-[#4a0d0d]/30 to-[#4a0d0d]/45 lg:hidden" />

          {/* ---------- diya garland ---------- */}
          <svg aria-hidden className="relative z-10 block h-12 w-full shrink-0">
            <defs>
              <pattern id="dfGarland" width="64" height="56" patternUnits="userSpaceOnUse">
                <path d="M0,3 Q32,16 64,3" stroke="#c9973f" strokeWidth="1.2" fill="none" />
                <path d="M32,9.5 V24" stroke="#c9973f" strokeWidth="1" />
                <path d="M32,25 C35.5,29 36.4,32 32,35.5 C27.6,32 28.5,29 32,25 Z" fill="#f3a21a" />
                <path d="M32,28.5 C33.2,30.4 33.4,31.6 32,33 C30.6,31.6 30.8,30.4 32,28.5 Z" fill="#fff3c4" />
                <path d="M24,37 H40 Q38.5,46 32,46 Q25.5,46 24,37 Z" fill="#c9973f" />
                <circle cx="0" cy="3" r="2.4" fill="#f3a21a" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dfGarland)" />
          </svg>


          {/* ---------- TEXT ---------- */}
          <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1320px] flex-1 items-center px-5 sm:px-[5%] xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-w-xl flex-col items-start text-left [text-shadow:0_2px_14px_rgba(0,0,0,0.6)] lg:[text-shadow:none]"
            >
              {/* eyebrow: diya · label · pongal pot */}
              <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap sm:gap-3">
                {/* diya */}
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 motion-safe:animate-pulse sm:h-6 sm:w-6" aria-hidden>
                  <path d="M12 1.5 C14.6 5 15.4 7.4 12 10.5 C8.6 7.4 9.4 5 12 1.5 Z" fill="#f3a21a" />
                  <path d="M12 4.8 C13 6.4 13.2 7.4 12 8.6 C10.8 7.4 11 6.4 12 4.8 Z" fill="#fff3c4" />
                  <path d="M2.5 13 H21.5 Q20 21.5 12 21.5 Q4 21.5 2.5 13 Z" fill="#c9973f" />
                  <path d="M2.5 13 H21.5" stroke="#7a1717" strokeWidth="1" />
                </svg>

                <span aria-hidden className="hidden h-px w-6 shrink-0 bg-[#f3c96a] sm:block" />

                <p className="text-[9.5px] font-medium uppercase tracking-[0.16em] text-[#f3c96a] min-[380px]:text-[10.5px] sm:text-xs sm:tracking-[0.28em] lg:text-[13px]">
                  <span className="sm:hidden">Dev Fashion · Festive Edit</span>
                  <span className="hidden sm:inline">Dev Fashion · Diwali &amp; Pongal Edit</span>
                </p>

                <span aria-hidden className="hidden h-px w-6 shrink-0 bg-[#f3c96a] sm:block" />

                {/* pongal pot */}
                <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden>
                  <line x1="5" y1="30" x2="9" y2="4" stroke="#3f7a3a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="27" y1="30" x2="23" y2="4" stroke="#3f7a3a" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 12 C9 7 14 8 16 6 C18 8 23 7 23 12 Z" fill="#fff8e6" stroke="#c9973f" strokeWidth="0.8" />
                  <path d="M8 12 H24 C26 18 24 27 16 27 C8 27 6 18 8 12 Z" fill="#a61e22" stroke="#c9973f" strokeWidth="1" />
                  <path d="M8.6 17 H23.4" stroke="#f3c96a" strokeWidth="1.2" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* headline */}
              <h2
                className="mt-6 font-serif font-light text-white"
                style={{ fontSize: "clamp(1.8rem, 3.6vw, 3.5rem)", lineHeight: 1.22 }}
              >
                Light the lamps,
                <br />
                <span>let the pot overflow!</span>
              </h2>

              {/* short gold rule */}
              <span aria-hidden className="mt-6 block h-px w-24 bg-gradient-to-r from-[#f3c96a] to-transparent" />

              {/* body copy: left-aligned, two short paragraphs (no justify = no stretched gaps) */}
              <div className="mt-6 hidden max-w-md space-y-3 text-left text-[15px] leading-7 text-white sm:block">
                <p>
                  From Deepavali evenings to Thai Pongal mornings, dress both festivals in Dev Fashion silks and stitching, now at festival prices!
                </p>
                <p>
                  Every celebration deserves something special. May your festive moments be filled with love, grace and timeless beauty. Warm wishes from Dev Fashion.
                </p>
              </div>

              {/* buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 max-sm:[&>a]:px-6 max-sm:[&>a]:py-3.5">
                <Link
                  href="/gallery"
                  className="group inline-flex items-center gap-3 bg-[#f3c96a] px-8 py-4 text-sm font-semibold tracking-wide text-[#3a1a10] shadow-[0_12px_30px_-12px_rgba(243,201,106,0.7)] transition-colors hover:bg-[#fbf1df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3c96a]"
                >
                  Shop the Sale
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                {/* change href to your contact / WhatsApp / appointment page */}
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-[#f3c96a]/70 px-7 py-[15px] text-sm font-medium tracking-wide text-[#f3c96a] transition-colors hover:bg-[#f3c96a]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3c96a]"
                >
                  Book a Fitting
                </Link>
              </div>

              {/* trust strip: edit to claims that are true for the boutique */}
              <ul className="mt-9 hidden flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[#fbf1df]/70 md:flex">
                <li>Hand-finished aari &amp; zari work</li>
                <li aria-hidden className="h-1 w-1 rotate-45 bg-[#f3c96a]" />
                <li>Bridal specialists</li>
                <li aria-hidden className="h-1 w-1 rotate-45 bg-[#f3c96a]" />
                <li>Made-to-measure fitting</li>
              </ul>
            </motion.div>
          </div>

          {/* gold zari edge */}
          <div
            aria-hidden
            className="relative z-10 h-1.5 w-full shrink-0 bg-[repeating-linear-gradient(to_right,#c9973f_0_14px,#4a0d0d_14px_20px)]"
          />
        </div>


        {/* ================= PART 2: photo panels sliding left to right ================= */}
        {/* Panel size is fixed (4 across on desktop), so adding photos never shrinks them. Add photos in panels.ts */}
        <div className="relative flex flex-col overflow-hidden bg-[#4a0d0d]">
          <svg aria-hidden className="relative z-10 block h-12 w-full shrink-0 bg-[var(--[plum])]">
            <defs>
              <pattern id="dfGarland2" width="64" height="56" patternUnits="userSpaceOnUse">
                <path d="M0,3 Q32,16 64,3" stroke="#c9973f" strokeWidth="1.2" fill="none" />
                <path d="M32,9.5 V24" stroke="#c9973f" strokeWidth="1" />
                <path d="M32,25 C35.5,29 36.4,32 32,35.5 C27.6,32 28.5,29 32,25 Z" fill="#e3892e" />
                <path d="M32,28.5 C33.2,30.4 33.4,31.6 32,33 C30.6,31.6 30.8,30.4 32,28.5 Z" fill="#fff3c4" />
                <path d="M24,37 H40 Q38.5,46 32,46 Q25.5,46 24,37 Z" fill="#c9973f" />
                <circle cx="0" cy="3" r="2.4" fill="#f3a21a" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dfGarland2)" />
          </svg>
          <style>{`
      .df-viewport { container-type: inline-size; }
      .df-panel { flex: none; width: 50vw; width: 50cqw; aspect-ratio: 4 / 5; }
      @media (min-width: 640px)  { .df-panel { width: 33.3334vw; width: 33.3334cqw; aspect-ratio: 4 / 3; } }
      @media (min-width: 1024px) { .df-panel { width: 25vw; width: 25cqw; aspect-ratio: 16 / 9; } }
      @keyframes dfSlideRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      .df-track { animation: dfSlideRight var(--df-dur, 48s) linear infinite; will-change: transform; }
      .df-viewport:hover .df-track, .df-viewport:focus-within .df-track { animation-play-state: paused; }
      @media (prefers-reduced-motion: reduce) { .df-track { animation: none; transform: none; } }
    `}</style>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="df-viewport relative overflow-hidden bg-[#3a1a10]"
          >
            {/* the track holds the set twice, so sliding by 50% loops seamlessly (about 6s per panel) */}
            <div className="df-track flex w-max" style={{ ["--df-dur" as string]: `${SET.length * 6}s` }}>
              {[0, 1].map((copy) =>
                SET.map(([src, title, line], j) => (
                  <div
                    key={`${copy}-${j}-${src}`}
                    aria-hidden={copy === 1}
                    className="df-panel group relative overflow-hidden border-r border-[#c9973f]/40 bg-[#3a1a10]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={copy === 0 ? `${title}: ${line}` : ""}
                      loading={copy === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />

                    {/* shade so the label stays readable */}
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4a0d0d]/85 via-[#4a0d0d]/10 to-transparent" />

                    {/* thin gold frame: on hover (always on for mobile) */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-2.5 border border-[#f3c96a]/60 opacity-60 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 sm:inset-3 lg:opacity-0 lg:group-focus-within:opacity-100 lg:group-hover:opacity-100"
                    />

                    {/* label */}
                    <div className="pointer-events-none absolute bottom-5 left-5 right-16 z-10 lg:bottom-7 lg:left-7">
                      <p className="font-serif text-xs tabular-nums tracking-widest text-[#f3c96a]">
                        {String((j % PANELS.length) + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-0.5 font-serif text-base italic leading-tight sm:text-xl lg:text-2xl">{title}</p>
                      <p className="mt-1 hidden max-w-[16rem] text-xs leading-snug text-[#fbf1df]/80 transition-all duration-500 lg:block lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                        {line}
                      </p>
                    </div>

                    {/* whole panel is a link */}
                    <Link
                      href="/gallery"
                      tabIndex={copy === 1 ? -1 : 0}
                      aria-label={`Shop ${title}`}
                      className="absolute inset-0 z-20 flex items-end justify-end p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#f3c96a] lg:p-6"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3c96a] text-[#3a1a10] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:bg-[#fbf1df] lg:h-12 lg:w-12 lg:translate-y-4 lg:opacity-0 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                        <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0 lg:h-5 lg:w-5" />
                      </span>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </motion.div>

          {/* gold zari edge */}
          <div
            aria-hidden
            className="relative z-10 h-1.5 w-full shrink-0 bg-[repeating-linear-gradient(to_right,#c9973f_0_14px,#4a0d0d_14px_20px)]"
          />
        </div>
      </section>














   
                      
        {/* -------------------------auto changing COUPLES COLLECTION ------------------------- */}
        <section className="relative overflow-hidden bg-[#241714] px-5 py-16 text-[#faf6ef] sm:px-8 sm:py-20 lg:py-24">
          {/* Ambient background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, rgba(184,146,90,0.13), transparent 55%)",
            }}
          />

          {/* Gold top border */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8925a]/70 to-transparent"
          />

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Heading */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#d5b77f] sm:text-xs sm:tracking-[0.35em]">
                <span className="h-px w-8 bg-[#b8925a]" />
                South Indian Bridal Couture
                <span className="h-px w-8 bg-[#b8925a]" />
              </span>

              <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Every couple,
                <span className="mt-1 block italic text-[#d5b77f]">
                  dressed with care.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#e3d8cd]/75 sm:text-base">
                From intimate celebrations to grand wedding moments, discover
                thoughtfully styled looks that bring timeless elegance to every
                celebration.
              </p>
            </motion.div>

            {/* Four-photo animated gallery */}
            <div className="mt-10 grid grid-cols-2 items-center gap-x-4 gap-y-8 sm:mt-14 sm:gap-x-6 sm:gap-y-10 lg:mt-16 lg:grid-cols-4 lg:gap-x-7">
              {Array.from({ length: 4 }, (_, frameIndex) => {
                const photoIndex =
                  (coupleIndex + frameIndex * 2) % COUPLE_PHOTOS.length;
                const photo = COUPLE_PHOTOS[photoIndex];

                return (
                  <motion.div
                    key={frameIndex}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.65,
                      delay: reduce ? 0 : frameIndex * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative mx-auto w-full max-w-[270px] ${
                      frameIndex % 2 === 1 ? "lg:mt-12" : "lg:mt-0"
                    }`}
                  >
                    {/* Offset antique-gold frame */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 translate-x-2 translate-y-2 border border-[#b8925a]/50"
                    />

                    {/* Photo frame */}
                    <div className="group relative aspect-[3/4] overflow-hidden border border-[#b8925a]/35 bg-[#352520] shadow-[0_18px_45px_-20px_rgba(0,0,0,0.8)]">
                      <AnimatePresence initial={false} mode="sync">
                        <motion.img
                          key={photo}
                          src={photo}
                          alt={`Dev Fashion couple portrait ${photoIndex + 1}`}
                          loading="eager"
                          decoding="async"
                          draggable={false}
                          initial={
                            reduce
                              ? { opacity: 1 }
                              : { opacity: 0, scale: 1.025 }
                          }
                          animate={{ opacity: 1, scale: 1 }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0 }}
                          transition={{
                            opacity: {
                              duration: reduce ? 0 : 0.8,
                              ease: "easeInOut",
                            },
                            scale: {
                              duration: reduce ? 0 : 1.2,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </AnimatePresence>

                      {/* Inner border */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-2 z-10 border border-white/25 transition-all duration-500 group-hover:inset-3 group-hover:border-[#d5b77f]/70"
                      />

                      {/* Subtle bottom shade */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-gradient-to-t from-[#241714]/35 to-transparent"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing message */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-12 text-center sm:mt-16"
            >
              <p className="font-serif text-lg italic text-[#d5b77f] sm:text-xl">
                Your story. Your celebration. Your style.
              </p>

              <Link
                href="/contact#booking"
                className="group mt-6 inline-flex items-center justify-center gap-3 border border-[#b8925a]/70 px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#faf6ef] transition-colors duration-300 hover:bg-[#b8925a] hover:text-[#241714] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5b77f] sm:text-xs"
              >
                Create Your Wedding Look
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Gold bottom border */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b8925a]/50 to-transparent"
          />
        </section>


      






































































































      {/* ------------------------- THE AARI ATELIER (light, premium, one screen) ------------------------- */}
      {/* Paste inside the main <div> of GalleryLightbox and REMOVE the earlier arch sections.
    Plain scoped CSS, so it does not depend on Tailwind.
    Uses motion, Link, ArrowRight, the `reduce` variable and the WA constant, which your file already has. */}
      <section id="signature-aari" className="aa">
        <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap");

    .aa { --ink:#2b1820; --muted:#7d6068; --gold:#B8924A; --gold-soft:rgba(184,146,74,.5); --wine:#5e0e1d; --rose:#8b2346; --ivory:#FAF7F1; --blush:#F6E4E2;
      position: relative; overflow: hidden; background: var(--ivory); color: var(--ink); padding: 40px 18px 48px; box-sizing: border-box; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
    .aa *, .aa *::before, .aa *::after { box-sizing: border-box; }
    .aa::before { content: ""; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse at 0% 0%, rgba(216,182,182,.38), transparent 52%), radial-gradient(ellipse at 100% 100%, rgba(184,146,74,.16), transparent 50%); }
    .aa-serif { font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif; }
    .aa-in { position: relative; width: 100%; max-width: 1240px; margin: 0 auto; }

    /* header */
    .aa-head { display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between; gap: 20px; }
    .aa-rule { display: block; width: 52px; height: 1px; background: var(--gold); }
    .aa-head h2 { margin: 14px 0 0; font-weight: 500; font-size: clamp(2rem, 3.6vw, 3.2rem); line-height: 1.04; letter-spacing: .005em; }
    .aa-head p { max-width: 470px; margin: 10px 0 0; font-size: 14.5px; line-height: 1.65; color: var(--muted); }
    .aa-side { display: flex; align-items: flex-end; gap: 22px; }
    .aa-side svg { width: 62px; height: 62px; flex: none; }
    .aa a.aa-link { display: inline-flex; align-items: center; gap: 10px; padding-bottom: 3px; border-bottom: 1px solid var(--rose); color: var(--rose); font-size: 14px; font-weight: 500; text-decoration: none; }
    .aa a.aa-link svg { width: 16px; height: 16px; transition: transform .3s; }
    .aa a.aa-link:hover svg { transform: translateX(4px); }
    .aa a.aa-fit { display: inline-flex; align-items: center; height: 40px; padding: 0 20px; background: var(--gold); color: #190E13; font-size: 13px; font-weight: 600; letter-spacing: .04em; text-decoration: none; transition: background .3s, color .3s; }
    .aa a.aa-fit:hover { background: var(--wine); color: #fff; }

    /* needle and thread */
    .aa-thread { display: block; width: 100%; height: 34px; margin-top: 14px; overflow: visible; }

    /* four arched blouses */
    .aa-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px 16px; margin-top: 18px; }
    .aa-item { position: relative; }
    .aa-frame { position: relative; padding: 7px; border: 1px solid var(--gold-soft); border-radius: 999px 999px 8px 8px; background: #fff; box-shadow: 0 26px 40px -30px rgba(66,19,34,.5); transition: transform .6s cubic-bezier(.22,1,.36,1), border-color .5s; }
    .aa-frame::before { content: ""; position: absolute; left: 50%; top: -5px; width: 9px; height: 9px; transform: translateX(-50%) rotate(45deg); background: var(--gold); }
    .aa-item:hover .aa-frame { transform: translateY(-8px); border-color: var(--gold); }
    .aa-img { position: relative; aspect-ratio: 4 / 5; overflow: hidden; border-radius: 999px 999px 3px 3px; background: var(--blush); }
    .aa-img img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 50% 28%; transition: transform 1.2s ease-out; }
    .aa-item:hover .aa-img img { transform: scale(1.07); }
    .aa-stitch { position: absolute; inset: 7px; border: 1px dashed rgba(255,255,255,.85); border-radius: 999px 999px 2px 2px; opacity: 0; transition: opacity .5s, inset .5s, border-color .5s; pointer-events: none; }
    .aa-item:hover .aa-stitch { opacity: 1; inset: 11px; border-color: var(--gold); }

    /* swinging hang-tag with the price */
    .aa-tagwrap { position: absolute; right: -8px; top: 44%; z-index: 3; transform-origin: 50% 0; }
    .aa-tagwrap i { display: block; width: 1px; height: 14px; margin: 0 auto; background: var(--gold); }
    .aa-tag { display: block; position: relative; padding: 10px 11px 6px; background: var(--ivory); border: 1px solid var(--gold); border-radius: 2px 2px 6px 6px; box-shadow: 0 8px 14px -8px rgba(66,19,34,.45); font-size: 15px; font-weight: 600; line-height: 1; color: var(--wine); }
    .aa-tag::before { content: ""; position: absolute; left: 50%; top: 3px; width: 4px; height: 4px; transform: translateX(-50%); border-radius: 50%; border: 1px solid var(--gold); background: #fff; }

    /* caption */
    .aa-cap { margin-top: 18px; text-align: center; }
    .aa-cap h3 { margin: 0; font-weight: 600; font-size: 20px; line-height: 1.15; color: var(--wine); }
    .aa-cap p { margin: 5px 0 0; font-size: 12.5px; line-height: 1.5; color: var(--muted); }
    .aa a.aa-enq { display: inline-flex; align-items: center; gap: 7px; margin-top: 9px; padding-bottom: 2px; border-bottom: 1px solid var(--gold); color: var(--rose); font-size: 13px; font-weight: 500; text-decoration: none; }
    .aa a.aa-enq svg { width: 13px; height: 13px; transition: transform .3s; }
    .aa a.aa-enq:hover svg { transform: translateX(3px); }
    .aa a:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }

    @media (min-width: 900px) {
      .aa { min-height: calc(100svh - 90px); display: flex; align-items: center; padding: 28px 28px 36px; }
      .aa-in { max-width: min(1240px, calc((100svh - 360px) * 3.55)); }
      .aa-head { flex-direction: row; align-items: flex-end; }
      .aa-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0 28px; }
      .aa-item:nth-child(even) { margin-top: 30px; }
      .aa-cap h3 { font-size: 21px; }
    }
    @media (max-width: 899px) { .aa-thread { display: none; } .aa-item:nth-child(even) { margin-top: 0; } .aa-tagwrap { right: -4px; } }
  `}</style>

        <div className="aa-in">
          {/* header */}
          <motion.div
            className="aa-head"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="aa-rule" />
              <h2 className="aa-serif">Signature Aari Collection</h2>
              <p>Hand-embroidered by our karigars in zari, beads and stones. Made to order, a few pieces at a time.</p>
            </div>

            <div className="aa-side">
              {/* fine-line scissors, one slow snip every few seconds */}
              <svg aria-hidden viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <g stroke="#8b2346" strokeWidth="1.8">
                  {!reduce && (
                    <animateTransform attributeName="transform" type="rotate" values="-11 32 32;-11 32 32;2 32 32;-11 32 32" keyTimes="0;0.55;0.7;1" dur="4.5s" repeatCount="indefinite" />
                  )}
                  <path d="M32 32 L52 6" />
                  <circle cx="16" cy="52" r="8" />
                  <path d="M22 46 L32 32" />
                </g>
                <g stroke="#2b1820" strokeWidth="1.8">
                  {!reduce && (
                    <animateTransform attributeName="transform" type="rotate" values="11 32 32;11 32 32;-2 32 32;11 32 32" keyTimes="0;0.55;0.7;1" dur="4.5s" repeatCount="indefinite" />
                  )}
                  <path d="M32 32 L12 6" />
                  <circle cx="48" cy="52" r="8" />
                  <path d="M42 46 L32 32" />
                </g>
                <circle cx="32" cy="32" r="2.6" fill="#B8924A" stroke="#2b1820" strokeWidth="1.4" />
              </svg>
              <Link href="/gallery" className="aa-link">
                View all designs <ArrowRight />
              </Link>
              <Link href="/contact#booking" className="aa-fit">
                Book a fitting
              </Link>
            </div>
          </motion.div>

          {/* a needle slowly stitching a golden thread */}
          <svg aria-hidden viewBox="0 0 1200 34" preserveAspectRatio="xMidYMid meet" className="aa-thread" fill="none">
            <motion.path
              id="aaThread"
              d="M -10 17 C 100 2, 200 32, 300 17 S 500 2, 600 17 S 800 32, 900 17 S 1100 2, 1210 17"
              stroke="#B8924A"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            {!reduce && (
              <g>
                <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#aaThread" />
                </animateMotion>
                <line x1="-26" y1="0" x2="26" y2="0" stroke="#2b1820" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="-20" cy="0" rx="4.5" ry="1.6" fill="#FAF7F1" stroke="#2b1820" strokeWidth="1.2" />
              </g>
            )}
          </svg>

          {/* four arched blouses */}
          <div className="aa-grid">
            {[
              // EDIT HERE: photo, name, one short line, price shown on the hang-tag
              { src: "/images/bls/main1.jpg", name: "Rose Zari Bridal", line: "Peacock zari on raw silk. Made to order.", price: "New" },
              { src: "/images/bls/main2.jpg", name: "Pearl Bloom", line: "Pearl and stone flowers. Only 5 pieces.", price: "New" },
              { src: "/images/bls/main3.jpg", name: "Heirloom Gold Maggam", line: "Pure zari and antique beads. Made to order.", price: "New" },
              { src: "/images/bls/main4.jpg", name: "Emerald Tassel", line: "Beaded tassels on deep emerald silk.", price: "New" },
            ].map((p, i) => (
              <motion.article
                key={p.name}
                className="aa-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="aa-frame">
                  <div className="aa-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={`${p.name}: ${p.line}`} loading="lazy" />
                    <span aria-hidden className="aa-stitch" />
                  </div>
                  <motion.div
                    className="aa-tagwrap"
                    animate={reduce ? undefined : { rotate: [-7, 7, -7] }}
                    transition={{ duration: 3.6 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <i />
                    <span className="aa-tag aa-serif">{p.price}</span>
                  </motion.div>
                </div>

                <div className="aa-cap">
                  <h3 className="aa-serif">{p.name}</h3>
                  <p>{p.line}</p>
                  <a
                    className="aa-enq"
                    href={`${WA}?text=${encodeURIComponent(`Hi Dev Fashion, I would like to enquire about the ${p.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire <ArrowRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>







          {/* the comminsion  */}


      <section className="relative overflow-hidden bg-[var(--ivory)] px-4 py-10 text-[var(--plum)] sm:px-[6%] sm:py-32">
        {/* thin orbit circle */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[var(--gold)]/25"
        />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-[0.8fr_1.3fr_1fr] lg:gap-10">
          {/* photograph */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <div className="relative h-82 overflow-hidden bg-[var(--gold)]/80 sm:h-84 lg:h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dev_fashion/nivi_outlook.jpeg"
                alt="Dev Fashion"
                className="h-full w-full object-cover"
              />
            </div>

            {/* gold asterisk badge */}
            <span
              aria-hidden
              className="absolute -right-3 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-white shadow-md"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
              </svg>
            </span>

            {/* white floating card */}
            <div className="absolute -bottom-4 -right-3 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.3)]">
              <p className="font-serif text-2xl leading-none text-[var(--plum)]">7–10</p>
              <p className="mt-1 text-[11px] text-[var(--plum)]/60">Business days</p>
              <p className="text-[11px] font-medium text-[var(--gold)]">Express available</p>
            </div>
          </motion.div>

          {/* headline, copy, buttons */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] font-medium tracking-[0.2em] text-[var(--gold)]"
            >
              THE COMMISSION
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 font-serif font-normal leading-[1.1] text-[var(--plum)]"
              style={{ fontSize: "clamp(2rem, 3.4vw, 3.1rem)" }}
            >
              From first look
              <br />
              to <span className="italic text-[var(--gold)]">final fitting.</span>
            </motion.h2>

            <p className="mt-3 max-w-md text-[13px] leading-6 text-[var(--plum)]/65">
              Measurements can be shared virtually or taken in person. Standard stitching takes 7-10 business days, and expedited delivery is available.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact#booking"
                className="inline-flex items-center justify-center bg-[var(--gold)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
              >
                Request Customization
              </Link>
              <a
                href={`${WA}?text=${encodeURIComponent("Hi Dev Fashion, I would like to start a custom design.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
              >
                WhatsApp Stylist
              </a>
            </div>
          </div>

          {/* compact steps */}
          <ol className="space-y-3.5 border-t border-[var(--gold)]/40 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {journey.map(([title, text], i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] text-xs text-[var(--gold)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-base leading-tight text-[var(--plum)]">{title}</h3>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-[var(--plum)]/60">{text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>


































      {/* ------------------------- LOOKBOOK LIGHTBOX ------------------------- */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            initial={{ opacity: 0, clipPath: reduce ? "inset(0)" : "inset(6% 6% 6% 6%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex h-[100dvh] flex-col bg-[var(--plum)] text-[var(--ivory)] lg:flex-row"
          >
            <button
              ref={closeRef}
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--plum)]/80 text-[var(--ivory)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            {/* garment (swipe on touch) */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragSnapToOrigin
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
              className="relative h-[54dvh] w-full shrink-0 bg-[var(--wine)]/40 lg:h-full lg:flex-1"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: dir * slide }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * slide }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 p-3 sm:p-8"
                >
                  <div className="relative h-full w-full">
                    <Image src={activeItem.src} alt={activeItem.alt} fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="pointer-events-none object-contain" />
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prev}
                aria-label="Previous design"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--plum)]/70 transition-colors hover:bg-[var(--gold)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next design"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--plum)]/70 transition-colors hover:bg-[var(--gold)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[var(--plum)]/80 px-3 py-1 font-serif text-xs tracking-[0.2em] text-[var(--ivory)]" aria-live="polite">
                {String((activeImageIndex ?? 0) + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
            </motion.div>

            {/* details */}
            <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto border-t border-[var(--gold)]/30 px-6 py-8 sm:px-10 lg:w-[380px] lg:flex-none lg:border-l lg:border-t-0 lg:py-14 xl:w-[440px]">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">{activeItem.category}</p>
                <h3 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">{activeItem.title}</h3>
                <span className="mt-6 block h-px w-16 bg-[var(--gold)]" />
                <p className="mt-6 text-sm leading-relaxed text-[var(--ivory)]/75 sm:text-base">{activeItem.description}</p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(activeItem.category)}&design=${encodeURIComponent(activeItem.title)}#booking`}
                  onClick={close}
                  className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--plum)] transition-colors hover:bg-[var(--ivory)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
                >
                  Request Customization <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`${WA}?text=${encodeURIComponent(`Hi Dev Fashion, I like "${activeItem.title}" and would like a custom version.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[var(--ivory)]/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--plum)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]"
                >
                  WhatsApp Stylist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}