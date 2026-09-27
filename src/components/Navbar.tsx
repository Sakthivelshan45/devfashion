"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, MessageSquare, ChevronRight, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle navbar background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open to prevent erratic background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-100 py-2.5"
            : "bg-white/70 backdrop-blur-sm py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with official brand image */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border border-gold-300 shadow-sm shrink-0 bg-white p-0.5">
                <Image
                  src="/logo.jpg"
                  alt="Dev Fashion Official Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-serif text-lg sm:text-xl tracking-[0.14em] font-bold text-stone-950 group-hover:text-gold-600 transition-colors leading-none">
                  DEV FASHION
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-gold-600 uppercase font-semibold mt-1">
                  Bridal Blouse Designer • Coimbatore
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs tracking-[0.18em] uppercase font-semibold transition-colors duration-200 relative py-1 ${
                      isActive
                        ? "text-gold-600 font-bold"
                        : "text-stone-800 hover:text-gold-600"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact#booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white hover:bg-gold-600 hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm border border-stone-900 hover:border-gold-600"
              >
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="tel:+918098558923"
                className="p-2 text-stone-800 hover:text-gold-600 border border-stone-200 rounded-full bg-stone-50"
                aria-label="Call Dev Fashion"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-stone-950 hover:text-gold-600 focus:outline-none bg-stone-900 text-white rounded-none flex items-center justify-center gap-1.5 px-3 py-2 text-xs uppercase tracking-widest font-semibold"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
                {/* <span>Menu</span> */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Slide-Out Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Slide-Out Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Logo */}
        <div className="p-4 border-b border-gold-150 flex items-center justify-between bg-gold-50/50">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 rounded-full border border-gold-300 shadow-sm shrink-0 bg-white p-0.5 overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Dev Fashion Official Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base tracking-widest font-bold text-stone-950 leading-none">
                DEV FASHION
              </span>
              <span className="text-[8px] tracking-[0.2em] text-gold-600 uppercase font-semibold mt-1">
                Bridal Blouse Designer
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 bg-stone-900 text-white hover:bg-gold-600 flex items-center justify-center transition-colors focus:outline-none shadow-md"
            aria-label="Close navigation menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
          <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-4 pb-2 border-b border-gold-100 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Navigation Menu
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center justify-between py-3.5 px-3 text-sm tracking-[0.15em] uppercase font-semibold border-b border-stone-100 transition-all ${
                  isActive
                    ? "text-gold-600 bg-gold-50/50 border-gold-200 pl-4"
                    : "text-stone-850 hover:text-gold-600 hover:pl-4"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? "text-gold-600" : "text-stone-300"}`} />
              </Link>
            );
          })}
        </div>

        {/* Drawer Bottom Quick Contact CTAs */}
        <div className="p-6 border-t border-gold-150 bg-stone-50 space-y-3">
          <Link
            href="/contact#booking"
            onClick={handleLinkClick}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-all shadow-md"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/918098558923?text=Hi%20Dev%20Fashion%2C%20I'd%20like%20to%20enquire%20about%20your%20tailoring%20and%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-stone-900 text-stone-950 hover:bg-gold-50 text-xs font-semibold tracking-widest uppercase transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            WhatsApp Inquiry
          </a>

          <div className="pt-2 text-center">
            <a
              href="tel:+918098558923"
              className="text-xs text-stone-600 hover:text-gold-600 font-semibold tracking-wider inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              +91 80985 58923
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
