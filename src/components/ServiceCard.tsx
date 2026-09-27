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
    <div className="bg-white border border-gold-200/60 p-8 flex flex-col justify-between h-full group hover:border-gold-500 hover:shadow-xl hover:shadow-gold-100/40 transition-all duration-500 ease-out relative overflow-hidden">
      {/* Decorative Pastel Background Hover Circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pastel-blush/35 rounded-full blur-2xl translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-700" />
      
      <div className="relative z-10">
        {/* Icon Wrapper */}
        <div className="w-12 h-12 bg-gold-100 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-600 group-hover:text-white transition-all duration-500">
          <IconComponent className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-medium tracking-wide text-stone-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-stone-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div className="relative z-10 pt-2 border-t border-stone-100 mt-auto">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-stone-900 group-hover:text-gold-600 uppercase transition-colors"
        >
          {ctaText}
          <Icons.ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
