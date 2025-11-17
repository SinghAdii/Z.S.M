import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects and Case Studies | Ziostech Solutions",
  description: `Explore Ziostech Solutions’ portfolio of successful software, web, and mobile app development projects. Discover how we help clients achieve digital growth through innovation, scalability, and quality delivery.`,
  keywords: [
    "software development portfolio",
    "web app projects",
    "mobile app case studies",
    "client success stories",
    "custom software projects",
    "Ziostech Solutions work",
    "IT project showcase",
    "digital transformation projects",
    "enterprise software case studies",
  ],
  openGraph: {
    title: "Our Projects & Case Studies | Ziostech Solutions",
    description:
      "See Ziostech Solutions’ portfolio of client projects across web, mobile, and cloud platforms — delivering scalable, high-performance software solutions.",
    url: "https://ziostechsolutions.com/projects",
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
