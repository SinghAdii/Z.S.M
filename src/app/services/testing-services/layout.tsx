import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Android App Testing Service Company | Ziostech Solutions",
  description: `We offer professional Android app testing, QA testing, and web app testing services. Ensure flawless performance, security, and reliability with our expert team.`,
  keywords: [
    "qa testing",
    "testing websites",
    "webpage test",
    "software system testing",
    "web testing",
    "test complete software",
    "android app testing",
    "web app testing",
  ],
  openGraph: {
    title: "Web & Android App Testing Service Company | Ziostech Solutions",
    description:
      "We offer expert QA and testing services for Android and web apps — ensuring performance, security, and reliability.",
    url: "https://ziostechsolutions.com/services/testing-services",
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
