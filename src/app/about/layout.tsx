import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Brand & Founder Durga Devi | Dev Fashion Boutique Coimbatore",
  description: "Learn more about the craftsmanship, 17+ years of heritage, and tailor expertise of Dev Fashion boutique in Coimbatore. Handcrafted luxury bridal blouses, bespoke tailoring, and design academy.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
