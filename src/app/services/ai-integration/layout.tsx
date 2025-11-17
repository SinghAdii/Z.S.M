import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration & Automation Services Company | Ziostech Solutions",
  description: `Ziostech Solutions provides AI integration and automation services to help businesses enhance efficiency, personalize customer experiences, and drive innovation through intelligent systems and machine learning solutions.`,
  keywords: [
    "AI integration",
    "artificial intelligence services",
    "machine learning automation",
    "AI chatbot development",
    "AI-powered solutions",
    "business automation with AI",
    "AI software integration",
    "intelligent process automation",
  ],
  openGraph: {
    title: "AI Integration & Automation Services Company | Ziostech Solutions",
    description:
      "Empower your business with AI integration and automation services from Ziostech Solutions. Build intelligent, data-driven systems to accelerate growth.",
    url: "https://ziostechsolutions.com/services/ai-integration",
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
