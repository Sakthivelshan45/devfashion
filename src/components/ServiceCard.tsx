import Link from "next/link";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering from lucide-react
  ctaText?: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  iconName,
  ctaText = "Enquire Now",
  href = "/contact#booking"
}: ServiceCardProps) {
  // Resolve icon dynamically
  const IconComponent = (Icons as any)[iconName] || Icons.Scissors;

  return (
    <div className="bg-white border border-[#EFEBE4] p-8 flex flex-col justify-between h-full group hover:border-[#C5A059] hover:shadow-xl transition-all duration-500 ease-out relative overflow-hidden">
      {/* Decorative Pastel Background Hover Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF8F5] rounded-full blur-2xl translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-700" />
      
      <div className="relative z-10">
        {/* Icon Wrapper */}
        <div className="w-12 h-12 bg-[#FAF8F5] border border-[#EFEBE4] flex items-center justify-center text-[#B38E46] mb-6 group-hover:bg-[#141312] group-hover:text-[#C5A059] group-hover:border-[#141312] transition-all duration-500">
          <IconComponent className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-light tracking-wide text-stone-950 mb-3 group-hover:text-[#B38E46] transition-colors duration-300 uppercase">
          {title}
        </h3>

        {/* Description */}
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-lato">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div className="relative z-10 pt-4 border-t border-[#EFEBE4] mt-auto">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-stone-950 group-hover:text-[#B38E46] uppercase transition-colors"
        >
          {ctaText}
          <Icons.ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
