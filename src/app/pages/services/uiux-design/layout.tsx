import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI UX Designing & Consulting Services | Ziostech Solutions",
  description: `Ziostech Solutions offers professional UI UX designing & consulting services to help businesses create seamless digital experiences. We turn ideas into engaging, user-centered products.`,
  keywords: [
    "user interface design",
    "ux and design",
    "ux research",
    "consulting services",
    "it consulting",
    "business consulting",
    "management consulting",
    "strategy consulting",
    "business consulting services",
    "user experience researcher",
    "ui ux designing",
  ],
  openGraph: {
    title: "UI UX Designing & Consulting Services | Ziostech Solutions",
    description:
      "Ziostech Solutions offers professional UI UX designing & consulting services to help businesses create seamless digital experiences and turn ideas into engaging products.",
    url: "https://ziostechsolutions.com/pages/services/uiux-design",
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
