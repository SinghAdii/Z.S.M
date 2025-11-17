import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Platforms & SaaS Solutions | Ziostech Solutions",
  description: `Build fast, secure online stores with Ziostech Solutions’ e-commerce platforms, software, and mobile app services.`,
  keywords: [
    "e commerce platforms",
    "best e commerce sites",
    "b2b e commerce platform",
    "ecommerce website services",
    "best ecommerce web designs",
    "service ecommerce website",
  ],
  openGraph: {
    title: "E-Commerce Platforms & SaaS Solutions | Ziostech Solutions",
    description:
      "Build fast, secure online stores with Ziostech Solutions’ e-commerce platforms, software, and mobile app services.",
    url: "https://ziostechsolutions.com/services/cms-e-commerce",
    type: "website",
  },
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
