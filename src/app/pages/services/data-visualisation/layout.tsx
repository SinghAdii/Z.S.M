import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Visualization Services Company | Ziostech Solutions",
  description: `Turn complex data into actionable insights with Ziostech’s data visualization services. Build interactive dashboards, uncover patterns, and make smarter business decisions with our advanced analytics expertise.`,
  keywords: [
    "bigdata",
    "data visualization",
    "database visualizer",
    "data and visualization",
    "data visualization services",
    "data visualization company",
    "best visualization tools",
  ],
  openGraph: {
    title: "Data Visualization Services Company | Ziostech Solutions",
    description:
      "Transform raw data into clear, interactive visuals with Ziostech’s data visualization services. Make confident, data-driven decisions for your business.",
    url: "https://ziostechsolutions.com/pages/services/data-visualisation",
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
