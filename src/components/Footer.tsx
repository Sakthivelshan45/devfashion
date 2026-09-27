import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-gold-900/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-full border border-gold-400 bg-white p-0.5 overflow-hidden shrink-0">
              <Image
                src="/logo.jpg"
                alt="Dev Fashion Official Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-widest font-semibold text-white group-hover:text-gold-400 transition-colors">
                DEV FASHION
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gold-500 uppercase font-medium -mt-1">
                Premium Boutique & Tailoring
              </span>
            </div>
          </Link>
          <p className="text-stone-400 text-sm leading-relaxed">
            OUR PROMISE
            Every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
            <br /><br />
            Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768m2.46-2.46L20 4" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-lg text-white font-medium tracking-wide mb-5 border-b border-gold-900/30 pb-2">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold-500 transition-colors">About Brand</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold-500 transition-colors">Our Services</Link>
            </li>
            <li>
              <Link href="/classes" className="hover:text-gold-500 transition-colors">Tailoring Classes</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold-500 transition-colors">Design Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-500 transition-colors">Book Consultation</Link>
            </li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="font-serif text-lg text-white font-medium tracking-wide mb-5 border-b border-gold-900/30 pb-2">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-stone-400">
            <li>Custom Blouse Stitching</li>
            <li>Bridal Wear Design</li>
            <li>Designer Saree Blouses</li>
            <li>Alteration Services</li>
            <li>Boutique Fashion Consultation</li>
            <li>Occasion Wear Design</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-serif text-lg text-white font-medium tracking-wide mb-5 border-b border-gold-900/30 pb-2">
            Connect
          </h3>
          <ul className="space-y-4 text-sm text-stone-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span>
                9th Street, tatabed,<br />
                Gandipuram, coimbatore,<br />
                Tamil Nadu 560001, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold-500 shrink-0" />
              <a href="tel:+919025751328" className="hover:text-gold-500 transition-colors">+91 80985 58923</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold-500 shrink-0" />
              <a href="mailto:contact@devfashion.com" className="hover:text-gold-500 transition-colors">contact@devfashion.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium text-stone-300">Mon - Sat: 10:00 AM - 8:00 PM</span>
                <span className="block text-xs">Sunday: 11:00 AM - 5:00 PM (Appointments Only)</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; {currentYear} Dev Fashion. All rights reserved. Design and developed with love by Shahi.
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms & Conditions</Link>
        </div>
        <div className="text-[10px] tracking-widest text-gold-600 font-semibold uppercase">
          ✦ Secure Design Guarantee ✦
        </div>
      </div>
    </footer>
  );
}
