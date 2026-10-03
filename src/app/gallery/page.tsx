import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata = {
  title: "Bespoke Design Gallery",
  description: "Browse through our collection of premium bridal blouses, custom designer wear, party wear outfits, and traditional designs.",
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="relative py-18 sm:py-40 border-b border-gold-100 text-center bg-cover bg-center bg-fixed bg-no-repeat" 
      style={{
        backgroundImage: "url('/images/dev_fashion/bls_home.png')",
      }}>
      
      
      {/* Dark/white overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
        ✦ Lookbook & Inspiration
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white mb-6">
          Our Signature Gallery
        </h1>

        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A glimpse of elegance, artistry and timeless bridal beauty.
        </p>
        <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />

        <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
         Explore our beautiful collection of blouse designs, from timeless traditional elegance to modern, trendy creations.
         Click on any design to request customization.
        </p>
      </div>
    </section>      

      {/* Gallery Showcase Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryLightbox />
      </section>
    </div>
  );
}
