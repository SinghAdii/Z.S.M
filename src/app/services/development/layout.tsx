import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web and Mobile Application Development Services for Digital Growth | Ziostech Solutions",
  description: `Build fast, secure, and scalable web & mobile application development with Ziostech Solutions. 
  Transform your business with custom software development solutions tailored to your goals.`,
  keywords: [
    "website app development",
    "custom software development solutions",
    "custom software development",
    "ecommerce app development company",
    "web and mobile application development",
    "website app development company",
    "custom mobile application development",
    "custom web software development",
    "website application development companies",
    "web and mobile app development companies",
    "website & app development",
    "android developer website",
  ],
  openGraph: {
    title:
      "Web & Mobile Application Development Services for Digital Growth | Ziostech Solutions",
    description:
      "Build fast, secure, and scalable web & mobile application development with Ziostech Solutions. Transform your business with custom software development solutions tailored to your goals.",
    url: "https://ziostechsolutions.com/services/development",
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
