import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ziostech Solutions | Empowering Digital Transformation",
  description: `Ziostech Solutions is a leading software development and IT consulting company helping businesses transform digitally. Our mission is to deliver innovative, scalable, and intelligent solutions that drive growth and success.`,
  keywords: [
    "about Ziostech Solutions",
    "software development company",
    "IT consulting firm",
    "digital transformation partner",
    "technology company",
    "IT services provider",
    "custom software experts",
    "web and app development company",
    "Ziostech team",
  ],
  openGraph: {
    title: "About Ziostech Solutions | Empowering Digital Transformation",
    description:
      "Learn more about Ziostech Solutions — your trusted partner for software development, IT consulting, and digital innovation.",
    url: "https://ziostechsolutions.com/about",
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
