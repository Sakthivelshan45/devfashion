"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Phone, Mail, User, MapPin, Sparkles, MessageSquare, ArrowRight, Check } from "lucide-react";

const servicesList = [
  "Custom Blouse Stitching",
  "Bridal Wear Design",
  "Designer Saree Blouses",
  "Tailoring & Aari Work Course",
  "Alteration Services",
  "Boutique Fashion Consultation",
  "Occasion Wear Design",
  "Custom Measurements",
  "International Order Support"
];

function BookingFormInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    date: "",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const designParam = searchParams.get("design");
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam,
        notes: designParam ? `Enquiring about design: ${designParam}` : ""
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = () => {
    const whatsappNumber = "918098558923";
    const text = `*Dev Fashion Appointment Inquiry*
-----------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Location:* ${formData.location}
*Service:* ${formData.service}
*Preferred Date:* ${formData.date}
*Notes:* ${formData.notes || "None"}`;
    
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate backend submission API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-gold-300 p-8 sm:p-12 text-center max-w-xl mx-auto flex flex-col items-center shadow-xl">
        <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <Check className="w-8 h-8 stroke-[2.5]" />
        </div>
        
        <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-bold mb-4 tracking-wide">
          Booking Request Received
        </h3>
        
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
          Thank you for choosing Dev Fashion, <span className="font-semibold text-stone-900">{formData.name}</span>. We have logged your request for <span className="font-semibold text-stone-900">{formData.service}</span>.
        </p>

        <div className="bg-gold-50/50 border border-gold-200/50 p-6 rounded-none w-full mb-8">
          <span className="text-xs font-semibold tracking-widest text-gold-700 uppercase block mb-2">
            ✦ Instant Connect via WhatsApp
          </span>
          <p className="text-stone-500 text-xs leading-relaxed mb-4">
            Connect directly with our head designer via WhatsApp to instantly share references and secure your appointment slot.
          </p>
          
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white hover:bg-gold-600 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Send Inquiry via WhatsApp
          </a>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              location: "",
              service: "",
              date: "",
              notes: ""
            });
          }}
          className="text-xs font-semibold tracking-widest text-stone-600 hover:text-stone-900 uppercase underline decoration-gold-400 decoration-2 underline-offset-4"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gold-200/60 p-8 sm:p-10 shadow-lg">
      <h3 className="font-serif text-2xl text-stone-900 font-semibold tracking-wide mb-8 border-b border-gold-100 pb-4 flex items-center gap-2.5">
        <Sparkles className="w-5 h-5 text-gold-500" />
        Schedule Consultation
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div className="relative">
          <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
            Full Name *
          </label>
          <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
            <User className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Deepika Shivan"
              className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="relative">
          <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
            Phone Number *
          </label>
          <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
            <Phone className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 80985 58923"
              className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Email */}
        <div className="relative">
          <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
            Email Address *
          </label>
          <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
            <Mail className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. priya@gmail.com"
              className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
            />
          </div>
        </div>

        {/* Location */}
        <div className="relative">
          <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
            Location *
          </label>
          <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
            <MapPin className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Coimbatore, India (or City, Country)"
              className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Service */}
        <div className="relative">
          <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
            Service Required *
          </label>
          <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="bg-transparent border-none outline-none text-stone-850 text-sm w-full appearance-none pr-6"
            >
              <option value="" disabled className="text-stone-300">Select a service</option>
              {servicesList.map(srv => (
                <option key={srv} value={srv} className="text-stone-900">{srv}</option>
              ))}
            </select>
            {/* Custom arrow decoration */}
            <div className="absolute right-0 top-[28px] pointer-events-none text-stone-400">
              ▼
            </div>
          </div>
        </div>

        {/* Preferred Date */}
        <div className="relative">
          <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
            Preferred Date *
          </label>
          <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
            <Calendar className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="bg-transparent border-none outline-none text-stone-850 text-sm w-full text-stone-700"
            />
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="relative mb-8">
        <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-2">
          Additional Design Details or Notes
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Describe any necklines, sleeves, embroidery requirements or specific requests..."
          className="w-full bg-stone-50 border border-stone-200 focus:border-gold-500 p-3 outline-none text-sm text-stone-850 placeholder:text-stone-300 resize-none transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors shadow-sm disabled:bg-stone-400"
      >
        {loading ? "Registering..." : "Submit Inquiry"}
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-stone-500">Loading form...</div>}>
      <BookingFormInner />
    </Suspense>
  );
}
