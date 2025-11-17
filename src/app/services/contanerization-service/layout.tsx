import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Looking for Containerization Services to Grow Your Business? | Ziostech Solutions",
  description: `Ziostech Solutions offers enterprise-grade containerization services to help you containerize applications, modernize workloads, and deploy faster using advanced containerization tools.`,
  keywords: [
    "containerize",
    "containerization tools",
    "containerization services",
    "containerise application",
    "containerization as a service",
  ],
  openGraph: {
    title:
      "Looking for Containerization Services to Grow Your Business? | Ziostech Solutions",
    description:
      "Ziostech Solutions offers enterprise-grade containerization services to help you containerize applications, modernize workloads, and deploy faster using advanced containerization tools.",
    url: "https://ziostechsolutions.com/services/contanerization-service",
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
