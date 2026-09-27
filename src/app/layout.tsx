import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dev Fashion | Official Bridal Blouse Designer & Tailoring Academy in Coimbatore",
    template: "%s | Dev Fashion Boutique"
  },
  description: "Dev Fashion is a premier South Indian bridal blouse designer and boutique tailoring academy based in Gandhipuram, Coimbatore. Specializing in Aari work, Maggam embroidery, designer saree blouses, and custom stitching.",
  keywords: ["Dev Fashion", "Bridal Blouse Designer", "Coimbatore Boutique", "Custom Blouse Stitching", "Aari Work Classes", "Maggam Work", "Gandhipuram Tailoring"],
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
    title: "Dev Fashion | Official Bridal Blouse Designer & Tailoring Academy",
    description: "South Indian bridal blouse designing, Aari embroidery, custom stitching & tailoring courses in Coimbatore.",
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
      className={`${playfair.variable} ${montserrat.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gold-50 text-stone-900 font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
