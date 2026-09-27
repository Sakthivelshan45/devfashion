"use client";

import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds to grab attention softly
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "919025751328"; // Default country code 91
  const message = encodeURIComponent("Hi Dev Fashion, I am looking for custom tailoring and bridal design services. Can we discuss?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative mb-3 bg-white text-stone-900 border border-gold-300 text-xs px-4 py-2.5 rounded-none shadow-xl max-w-xs animate-fade-in font-medium flex items-center gap-2">
          <span>Chat with our Stylist</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-900 font-bold ml-1.5"
            aria-label="Close tooltip"
          >
            &times;
          </button>
          {/* Tooltip arrow */}
          <div className="absolute right-4 bottom-[-6px] w-3 h-3 bg-white border-r border-b border-green-300 rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-stone-900 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group border-2 border-white"
        aria-label="WhatsApp Stylist Link"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-green-500/30 animate-ping opacity-75 group-hover:opacity-0 transition-opacity" />
        
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.016 14.062 1.01 11.455 1.01 6.02 1.01 1.593 5.378 1.589 10.808c-.001 1.642.457 3.242 1.326 4.678l-1.012 3.697 3.793-.987-.049-.046zM17.8 14.536c-.337-.168-1.991-.98-2.3-1.093-.308-.113-.532-.168-.756.168-.224.336-.869 1.092-1.065 1.317-.197.223-.393.252-.73.084-.337-.168-1.42-.523-2.706-1.669-.997-.89-1.67-1.99-1.866-2.326-.197-.336-.021-.518.147-.686.152-.151.338-.393.506-.588.168-.196.224-.336.337-.56.112-.224.056-.42-.028-.588-.084-.168-.756-1.82-1.037-2.502-.273-.667-.552-.577-.756-.588-.196-.011-.42-.012-.644-.012-.224 0-.589.084-.897.42-.308.337-1.178 1.15-1.178 2.802 0 1.653 1.202 3.25 1.37 3.475.169.224 2.365 3.611 5.73 5.059.801.344 1.427.55 1.916.705.805.256 1.538.22 2.117.134.646-.097 1.991-.813 2.272-1.598.28-.784.28-1.457.196-1.598-.084-.14-.308-.224-.645-.392z" />
        </svg>
      </a>
    </div>
  );
}
