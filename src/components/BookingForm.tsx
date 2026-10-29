// "use client";

// import { useState, useEffect, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { Calendar, Phone, Mail, User, MapPin, Sparkles, MessageSquare, ArrowRight, Check } from "lucide-react";

// const servicesList = [
//   "Custom Blouse Stitching",
//   "Bridal Wear Design",
//   "Designer Saree Blouses",
//   "Tailoring & Aari Work Course",
//   "Alteration Services",
//   "South Indian Jewellery Rental",
//   "Occasion Wear Design",
//   "Custom Measurements",
//   "International Order Support",
//    "Aari Embroidery & Handwork",
//   "Maggam Work Blouse Design",
//   "Zardozi & Kundan Embellishment",
//   "Custom Lehenga Blouse Design",
//   "Engagement & Reception Wear",
//   "Festive & Traditional Wear",
//   "Couple & Family Outfit Coordination",
//   "Kids Ethnic Wear Design",
//   "Blouse Pattern Making",
//   "Express Stitching Service",
//   "one day devlivery",
//   "Premium Fabric & Embellishment Selection",
//   "NRI Bridal Blouse Services",
//   "Virtual Design Consultation",
//   "Blouse Refitting & Restyling",
//   "Aari Embroidery Training"
// ];

// function BookingFormInner() {
//   const searchParams = useSearchParams();
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     location: "",
//     service: "",
//     date: "",
//     notes: ""
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const serviceParam = searchParams.get("service");
//     const designParam = searchParams.get("design");
//     if (serviceParam) {
//       setFormData(prev => ({
//         ...prev,
//         service: serviceParam,
//         notes: designParam ? `Enquiring about design: ${designParam}` : ""
//       }));
//     }
//   }, [searchParams]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const generateWhatsAppUrl = () => {
//     const whatsappNumber = "918098558923";
//     const text = `*Dev Fashion Appointment Inquiry*
// -----------------------------
// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// *Email:* ${formData.email}
// *Location:* ${formData.location}
// *Service:* ${formData.service}
// *Preferred Date:* ${formData.date}
// *Notes:* ${formData.notes || "None"}`;
    
//     return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulate backend submission API call
//     setTimeout(() => {
//       setLoading(false);
//       setIsSubmitted(true);
//     }, 1500);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="bg-white border border-gold-300 p-8 sm:p-12 text-center max-w-xl mx-auto flex flex-col items-center shadow-xl">
//         <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
//           <Check className="w-8 h-8 stroke-[2.5]" />
//         </div>
        
//         <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-bold mb-4 tracking-wide">
//           Booking Request Received
//         </h3>
        
//         <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
//           Thank you for choosing Dev Fashion, <span className="font-semibold text-stone-900">{formData.name}</span>. We have logged your request for <span className="font-semibold text-stone-900">{formData.service}</span>.
//         </p>

//         <div className="bg-gold-50/50 border border-gold-200/50 p-6 rounded-none w-full mb-8">
//           <span className="text-xs font-semibold tracking-widest text-gold-700 uppercase block mb-2">
//             ✦ Instant Connect via WhatsApp
//           </span>
//           <p className="text-stone-500 text-xs leading-relaxed mb-4">
//             Connect directly with our head designer via WhatsApp to instantly share references and secure your appointment slot.
//           </p>
          
//           <a
//             href={generateWhatsAppUrl()}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white hover:bg-gold-600 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors"
//           >
//             <MessageSquare className="w-4 h-4" />
//             Send Inquiry via WhatsApp
//           </a>
//         </div>

//         <button
//           onClick={() => {
//             setIsSubmitted(false);
//             setFormData({
//               name: "",
//               phone: "",
//               email: "",
//               location: "",
//               service: "",
//               date: "",
//               notes: ""
//             });
//           }}
//           className="text-xs font-semibold tracking-widest text-stone-600 hover:text-stone-900 uppercase underline decoration-gold-400 decoration-2 underline-offset-4"
//         >
//           Book Another Appointment
//         </button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="bg-white border border-gold-200/60 p-8 sm:p-10 shadow-lg">
//       <h3 className="font-serif text-2xl text-stone-900 font-semibold tracking-wide mb-8 border-b border-gold-100 pb-4 flex items-center gap-2.5">
//         <Sparkles className="w-5 h-5 text-gold-500" />
//         Schedule Consultation
//       </h3>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Name */}
//         <div className="relative">
//           <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
//             Full Name *
//           </label>
//           <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
//             <User className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="e.g. Deepika Shivan"
//               className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
//             />
//           </div>
//         </div>

//         {/* Phone */}
//         <div className="relative">
//           <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
//             Phone Number *
//           </label>
//           <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
//             <Phone className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
//             <input
//               type="tel"
//               name="phone"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="e.g. +91 80985 58923"
//               className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Email */}
//         <div className="relative">
//           <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
//             Email Address *
//           </label>
//           <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
//             <Mail className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="e.g. priya@gmail.com"
//               className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
//             />
//           </div>
//         </div>

//         {/* Location */}
//         <div className="relative">
//           <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
//             Location *
//           </label>
//           <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
//             <MapPin className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />
//             <input
//               type="text"
//               name="location"
//               required
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="e.g. Coimbatore, India (or City, Country)"
//               className="bg-transparent border-none outline-none text-stone-850 text-sm w-full placeholder:text-stone-300"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Service */}
//         <div className="relative">
//           <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
//             Service Required *
//           </label>
//           <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
//             <select
//               name="service"
//               required
//               value={formData.service}
//               onChange={handleChange}
//               className="bg-transparent border-none outline-none text-stone-850 text-sm w-full appearance-none pr-6"
//             >
//               <option value="" disabled className="text-stone-300">Select a service</option>
//               {servicesList.map(srv => (
//                 <option key={srv} value={srv} className="text-stone-900">{srv}</option>
//               ))}
//             </select>
//             {/* Custom arrow decoration */}
//             <div className="absolute right-0 top-[28px] pointer-events-none text-stone-400">
//               ▼
//             </div>
//           </div>
//         </div>

//         {/* Preferred Date */}
//         <div className="relative">
//           <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1">
//             Preferred Date *
//           </label>
//           <div className="flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors">
//             <Calendar className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" />            
//             <input
//               type="date"
//               name="date"
//               required
//               min={new Date().toLocaleDateString("en-CA")}
//               value={formData.date}
//               onChange={handleChange}
//               className="bg-transparent border-none outline-none text-sm w-full text-stone-700"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Additional Notes */}
//       <div className="relative mb-8">
//         <label className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-2">
//           Additional Design Details or Notes
//         </label>
//         <textarea
//           name="notes"
//           value={formData.notes}
//           onChange={handleChange}
//           rows={3}
//           placeholder="Describe any necklines, sleeves, embroidery requirements or specific requests..."
//           className="w-full bg-stone-50 border border-stone-200 focus:border-gold-500 p-3 outline-none text-sm text-stone-850 placeholder:text-stone-300 resize-none transition-colors"
//         />
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors shadow-sm disabled:bg-stone-400"
//       >
//         {loading ? "Registering..." : "Submit Inquiry"}
//         <ArrowRight className="w-4 h-4" />
//       </button>
//     </form>
//   );
// }

// export default function BookingForm() {
//   return (
//     <Suspense fallback={<div className="p-8 text-center text-stone-500">Loading form...</div>}>
//       <BookingFormInner />
//     </Suspense>
//   );
// }









"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  MapPin,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react";

const WHATSAPP_NUMBER = "918098558923";

/* Services, grouped so the dropdown is easy to scan */
const serviceGroups: { group: string; items: string[] }[] = [
  {
    group: "Bridal & Wedding",
    items: [
      "Bridal Wear Design",
      "Bridal Trousseau Styling",
      "Wedding Party Blouse Design",
      "Custom Lehenga Blouse Design",
      "Engagement & Reception Wear",
      "Bridal Outfit Coordination",
      "NRI Bridal Blouse Services",
    ],
  },
  {
    group: "Blouses & Embroidery",
    items: [
      "Custom Blouse Stitching",
      "Designer Saree Blouses",
      "Aari Embroidery & Handwork",
      "Maggam Work Blouse Design",
      "Zardozi & Kundan Embellishment",
      "Blouse Neck Design Consultation",
      "Sleeve & Back Design Customisation",
      "Blouse Pattern Making",
      "Blouse Refitting & Restyling",
      "Alteration Services",
    ],
  },
  {
    group: "Occasion & Family",
    items: [
      "Occasion Wear Design",
      "Festive & Traditional Wear",
      "Couple & Family Outfit Coordination",
      "Kids Ethnic Wear Design",
    ],
  },
  {
    group: "Consultation & Support",
    items: [
      "Custom Measurements",
      "Virtual Design Consultation",
      "Premium Fabric & Embellishment Selection",
      "Express Stitching Service",
      "International Order Support",
    ],
  },
  {
    group: "Classes & Rental",
    items: [
      "Tailoring & Aari Work Course",
      "Aari Embroidery Training",
      "South Indian Jewellery Rental",
    ],
  },
];

const allServices = serviceGroups.flatMap((g) => g.items);

/* The gallery sends its category names (for example "Bridal Collection").
   This maps them to the closest real service so the dropdown is filled in correctly. */
const categoryToService: Record<string, string> = {
  "Bridal Collection": "Bridal Wear Design",
  "Designer Blouses": "Designer Saree Blouses",
  "Party Wear": "Occasion Wear Design",
  "Traditional Wear": "Festive & Traditional Wear",
  "Festive Collection": "Festive & Traditional Wear",
  "Custom Designs": "Custom Blouse Stitching",
  "Couples & Family": "Couple & Family Outfit Coordination",
  "Kids Wear": "Kids Ethnic Wear Design",
};

const timeSlots = [
  "Morning (8 AM – 12 PM)",
  "Afternoon (12 – 4 PM)",
  "Evening (4 – 9 PM)",
];

const measurementOptions = ["Virtual (video / photos)", "In person at the studio", "Not sure yet"];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  date: "",
  time: "",
  measurement: "",
  notes: "",
};

/* today in YYYY-MM-DD, in the visitor's own time zone */
const todayString = () => {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
};

const labelClass = "text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-1";
const rowClass =
  "flex items-center border-b border-stone-200 focus-within:border-gold-500 py-1.5 transition-colors";
const inputClass =
  "bg-transparent border-none outline-none text-stone-800 text-sm w-full placeholder:text-stone-300";

function BookingFormInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(todayString());
  }, []);

  /* fill service and notes from a link such as /contact?service=Bridal%20Collection&design=Royal%20Zardozi */
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const designParam = searchParams.get("design");
    if (!serviceParam && !designParam) return;

    const service = allServices.includes(serviceParam ?? "")
      ? (serviceParam as string)
      : categoryToService[serviceParam ?? ""] ?? "";

    setFormData((prev) => ({
      ...prev,
      service: service || prev.service,
      notes: designParam ? `Enquiring about design: ${designParam}` : prev.notes,
    }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* Sundays are by appointment only (11 AM to 5 PM) */
  const isSunday = useMemo(() => {
    if (!formData.date) return false;
    const [y, m, d] = formData.date.split("-").map(Number);
    return new Date(y, m - 1, d).getDay() === 0;
  }, [formData.date]);

  const whatsappUrl = useMemo(() => {
    const line = (label: string, value: string) => `*${label}:* ${value || "-"}`;
    const text = [
      "*Dev Fashion Appointment Inquiry*",
      "-----------------------------",
      line("Name", formData.name),
      line("Phone", formData.phone),
      line("Email", formData.email),
      line("Location", formData.location),
      line("Service", formData.service),
      line("Preferred Date", formData.date),
      line("Preferred Time", formData.time),
      line("Measurements", formData.measurement),
      line("Notes", formData.notes || "None"),
    ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // The enquiry reaches the studio through WhatsApp, so open it right away.
    // The success screen keeps a button in case the browser blocks the new tab.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-gold-300 p-8 sm:p-12 text-center max-w-xl mx-auto flex flex-col items-center shadow-xl">
        <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 stroke-[2.5]" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-bold mb-4 tracking-wide">
          One last step
        </h3>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
          Thank you, <span className="font-semibold text-stone-900">{formData.name}</span>. Your request for{" "}
          <span className="font-semibold text-stone-900">{formData.service}</span> is ready. Please{" "}
          <span className="font-semibold text-stone-900">send the WhatsApp message</span> so our team receives it and
          confirms your slot.
        </p>

        <div className="bg-gold-50/50 border border-gold-200/50 p-6 rounded-none w-full mb-8">
          <span className="text-xs font-semibold tracking-widest text-gold-700 uppercase block mb-2">
            ✦ Send your inquiry on WhatsApp
          </span>
          <p className="text-stone-500 text-xs leading-relaxed mb-4">
            WhatsApp should have opened with your details filled in. Tap Send there. If it did not open, use the button
            below. You can also share reference photos in the same chat.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white hover:bg-gold-600 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Open WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData(emptyForm);
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
          <label htmlFor="bf-name" className={labelClass}>
            Full Name *
          </label>
          <div className={rowClass}>
            <User className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" aria-hidden />
            <input
              id="bf-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Deepika Shivan"
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="relative">
          <label htmlFor="bf-phone" className={labelClass}>
            Phone / WhatsApp Number *
          </label>
          <div className={rowClass}>
            <Phone className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" aria-hidden />
            <input
              id="bf-phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              inputMode="tel"
              pattern="[+0-9\s\-()]{10,16}"
              title="Enter a valid phone number, for example +91 80985 58923"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 80985 58923"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Email (optional) */}
        <div className="relative">
          <label htmlFor="bf-email" className={labelClass}>
            Email Address (optional)
          </label>
          <div className={rowClass}>
            <Mail className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" aria-hidden />
            <input
              id="bf-email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. priya@gmail.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Location */}
        <div className="relative">
          <label htmlFor="bf-location" className={labelClass}>
            Location *
          </label>
          <div className={rowClass}>
            <MapPin className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" aria-hidden />
            <input
              id="bf-location"
              type="text"
              name="location"
              required
              autoComplete="address-level2"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Coimbatore, India (or City, Country)"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Service */}
        <div className="relative">
          <label htmlFor="bf-service" className={labelClass}>
            Service Required *
          </label>
          <div className={rowClass}>
            <select
              id="bf-service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="bg-transparent border-none outline-none text-stone-800 text-sm w-full appearance-none pr-6"
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceGroups.map(({ group, items }) => (
                <optgroup key={group} label={group}>
                  {items.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="absolute right-0 top-[28px] pointer-events-none text-stone-400" aria-hidden>
              ▼
            </div>
          </div>
        </div>

        {/* Measurements */}
        <div className="relative">
          <label htmlFor="bf-measurement" className={labelClass}>
            How will you share measurements?
          </label>
          <div className={rowClass}>
            <select
              id="bf-measurement"
              name="measurement"
              value={formData.measurement}
              onChange={handleChange}
              className="bg-transparent border-none outline-none text-stone-800 text-sm w-full appearance-none pr-6"
            >
              <option value="">Choose one (optional)</option>
              {measurementOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-[28px] pointer-events-none text-stone-400" aria-hidden>
              ▼
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Preferred Date */}
        <div className="relative">
          <label htmlFor="bf-date" className={labelClass}>
            Preferred Date *
          </label>
          <div className={rowClass}>
            <Calendar className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" aria-hidden />
            <input
              id="bf-date"
              type="date"
              name="date"
              required
              min={today || undefined}
              value={formData.date}
              onChange={handleChange}
              className={`${inputClass} text-stone-700`}
            />
          </div>
          {isSunday && (
            <p className="mt-1.5 text-[11px] text-gold-700">
              Sundays are by appointment only, 11 AM – 5 PM. We will confirm on WhatsApp.
            </p>
          )}
        </div>

        {/* Preferred time */}
        <div className="relative">
          <label htmlFor="bf-time" className={labelClass}>
            Preferred Time
          </label>
          <div className={rowClass}>
            <Clock className="w-4 h-4 text-stone-400 mr-2.5 shrink-0" aria-hidden />
            <select
              id="bf-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-transparent border-none outline-none text-stone-800 text-sm w-full appearance-none pr-6"
            >
              <option value="">Any time (optional)</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-[28px] pointer-events-none text-stone-400" aria-hidden>
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="relative mb-8">
        <label htmlFor="bf-notes" className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase block mb-2">
          Additional Design Details or Notes
        </label>
        <textarea
          id="bf-notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Describe any necklines, sleeves, embroidery requirements or specific requests..."
          className="w-full bg-stone-50 border border-stone-200 focus:border-gold-500 p-3 outline-none text-sm text-stone-800 placeholder:text-stone-300 resize-none transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors shadow-sm disabled:bg-stone-400"
      >
        {loading ? "Opening WhatsApp..." : "Submit & Send on WhatsApp"}
        <ArrowRight className="w-4 h-4" />
      </button>
      <p className="mt-3 text-center text-[11px] text-stone-400">
        Your details open in WhatsApp for you to send. We never share them.
      </p>
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