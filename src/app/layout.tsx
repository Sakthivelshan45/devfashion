import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "Dev Fashion | Official South Indian Bridal Couture & Boutique Atelier",
    template: "%s | Dev Fashion Boutique"
  },
  description: "Dev Fashion is a premier South Indian bridal couture house, custom blouse designer, and boutique atelier based in Gandhipuram, Coimbatore. Specializing in Aari work, Maggam embroidery, designer saree blouses, and jewellery rentals.",
  keywords: ["Dev Fashion", "Bridal Blouse Designer", "Coimbatore Boutique", "Custom Blouse Stitching", "Aari Work Classes", "Jewellery Rental", "Gandhipuram Tailoring"],
  authors: [{ name: "Dev Fashion Team" }],
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/logo.jpg", type: "image/jpeg" }
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dev Fashion | South Indian Bridal Couture & Boutique Atelier",
    description: "South Indian bridal blouse designing, Aari embroidery, custom stitching & jewellery rentals in Coimbatore.",
    url: "https://devfashion.com",
    siteName: "Dev Fashion",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#141312] font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
