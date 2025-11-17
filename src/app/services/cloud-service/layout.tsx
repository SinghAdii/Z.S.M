import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Services & Cloud Migration Solutions | Ziostech Solutions",
  description: `Build fast, secure, scalable web & mobile application development with Ziostech Solutions. Transform your business with custom software development solutions to grow.`,
  keywords: [
    "cloud architect",
    "multcloud",
    "cloud computing architect",
    "cloud migration services",
    "managed cloud services",
  ],
  openGraph: {
    title: "Cloud Services & Cloud Migration Solutions | Ziostech Solutions",
    description:
      "Build fast, secure, scalable web & mobile application development with Ziostech Solutions. Transform your business with custom software development solutions to grow.",
    url: "https://ziostechsolutions.com/services/cloud-service",
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
