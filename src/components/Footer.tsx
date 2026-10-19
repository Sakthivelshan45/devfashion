import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0E0D] text-[#FAF8F5] border-t border-[#C5A059]/25 py-16 sm:py-20 lg:py-24 font-sans w-full">
      <div className="site-container">
    

        {/* Main 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-12">
          
          {/* Column 1: Brand & Promise (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            <Link href="/" className="flex items-center gap-3.5 group self-start">
              <div className="relative h-11 w-11 rounded-full border border-[#C5A059]/60 bg-[#161514] p-0.5 overflow-hidden shrink-0 shadow-sm">
                <Image
                  src="/logo.jpg"
                  alt="Dev Fashion Official Logo"
                  fill
                  className="object-cover p-0.8"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] font-light text-white group-hover:text-[#C5A059] transition-colors leading-tight">
                  DEV FASHION
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-medium mt-0.5">
                  PREMIUM BOUTIQUE &amp; TAILORING
                </span>
              </div>
            </Link>

            {/* Our Promise Quiet Luxury Panel */}
            <div className="p-6 bg-[#161514] border-l-2 border-[#C5A059]/80 space-y-3 font-serif text-base font-medium text-[#C8A96A] mb-3">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-medium block">
                OUR PROMISE
              </span>
              <p className="text-stone-300 text-xs leading-relaxed font-light text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
              </p>
              <p className="text-stone-300 text-xs leading-relaxed font-light pt-2 border-t border-stone-800 text-justify">
                &nbsp;&nbsp;&nbsp;Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.
              </p>
            </div>

          </div>

          {/* Column 2: Explore Navigation (Col Span 2) */}
          <div className="lg:col-span-2 space-y-5 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
            <h3 className="tracking-[0.3em] text-[#C5A059] pb-2 border-b border-[#C5A059]/15 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3 text-xs font-lato text-stone-300">
              <li>
                <Link href="/" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
                  About Brand
                </Link>
              </li>
               <li>
                <Link href="/classes" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
                  Our Tailoring Classes
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/jewelry" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
                  Our Jewelry Rental
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
                  Design Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A059] transition-colors inline-block py-0.5">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Col Span 3) */}
          <div className="lg:col-span-3 space-y-5 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
            <h3 className="tracking-[0.3em] text-[#C5A059] pb-2 border-b border-[#C5A059]/15 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3 text-xs font-lato text-stone-400">
              <li className="hover:text-stone-200 transition-colors py-0.5">Custom Blouse Stitching</li>
              <li className="hover:text-stone-200 transition-colors py-0.5">Bridal Wear Design</li>
              <li className="hover:text-stone-200 transition-colors py-0.5">Designer Saree Blouses</li>
              <li className="hover:text-stone-200 transition-colors py-0.5">Alteration Services</li>
              <li className="hover:text-stone-200 transition-colors py-0.5">South Indian Jewellery Rental</li>
              <li className="hover:text-stone-200 transition-colors py-0.5">Saree Draping & Bridal Styling</li>
              <li className="hover:text-stone-200 transition-colors py-0.5">Bridal Mehendi</li>
              <li className="hover:text-stone-200 transition-colors py-0.5">Occasion Wear Design</li>
            </ul>
          </div>

          {/* Column 4: Connect & Concierge (Col Span 3) */}
          <div className="lg:col-span-3 space-y-6 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
            <h3 className="tracking-[0.3em] text-[#C5A059] pb-2 border-b border-[#C5A059]/15 font-serif text-base font-medium text-[#C8A96A] mb-3 uppercase tracking-wider">
              Connect
            </h3>

            <ul className="space-y-4 text-xs font-lato text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  No 37, 9th Street, tatabed,<br />
                  Gandipuram, coimbatore,<br />
                  Tamil Nadu 641012, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+919025751328" className="hover:text-[#C5A059] transition-colors font-light tracking-wide">+91 80985 58923</a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:contact@devfashion.com" className="hover:text-[#C5A059] transition-colors font-light">contact@devfashion.com</a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="font-light">
                  <span className="block text-stone-200">Mon - Sat: 10:00 AM - 8:00 PM</span>
                  <span className="block text-[11px] text-stone-400 mt-0.5">Sunday: 11:00 AM - 5:00 PM (Appointments Only)</span>
                </div>
              </li>
            </ul>

            {/* Social Icons & Teaser */}
            <div className="pt-4 border-t border-stone-800 space-y-3">
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#C5A059] uppercase block">
                FOLLOW US
              </span>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/devfashion_bridalblouse/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#161514] flex items-center justify-center text-stone-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#161514] flex items-center justify-center text-stone-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#C5A059]/30 bg-[#161514] flex items-center justify-center text-stone-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768m2.46-2.46L20 4" />
                  </svg>
                </a>
              </div>

              <p className="text-stone-400 text-xs italic font-serif">
                be the first to know about new arrivals
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Guarantee Bar */}
        <div className="pt-8 border-t border-[#C5A059]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-lato">
          
          <div className="text-center md:text-left font-light">
            &copy; {currentYear} Dev Fashion. All rights reserved. Design and developed with love by Shahi.
          </div>

          <div className="flex items-center space-x-6 text-stone-300">
            <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <span className="text-stone-700">•</span>
            <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms &amp; Conditions</Link>
          </div>

          <div className="text-[10px] tracking-[0.25em] text-[#C5A059] font-medium uppercase">
            ✦ Secure Design Guarantee ✦
          </div>

        </div>

      </div>
    </footer>
  );
}




