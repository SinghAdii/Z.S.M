import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big Data Warehouse Consulting Service Company | Ziostech Solutions",
  description: `Ziostech Solutions provides expert Big Data and Data Warehouse consulting services. Our team helps businesses design, implement, and optimize scalable data architectures for smarter insights and efficient decision-making.`,
  keywords: [
    "big data companies",
    "data warehouse consulting",
    "data warehouse architecture",
    "big data consulting",
  ],
  openGraph: {
    title: "Big Data Warehouse Consulting Service Company | Ziostech Solutions",
    description:
      "Unlock the power of Big Data with Ziostech Solutions — offering expert data warehouse consulting and scalable analytics solutions.",
    url: "https://ziostechsolutions.com/services/big-data",
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
