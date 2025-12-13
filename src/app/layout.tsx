import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Custom/custom_components.exports.js";
import Footer from "@/components/Custom/Footer";
import GlobalPageLoader from "@/components/Custom/GlobalPageLoader";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://ziostechsolutions.com'),
  title: "Ziostechsolutions | Empowers Digital Growth Through Innovation",
  icons: {
    icon: "/favicon.ico",
  },
  description: `Ziostech Solution delivers expert IT consulting, staffing, web & app development, and AI integration services to help businesses grow and innovate.
      Transforming Ideas into Scalable, Intelligent Solutions.
    `,
  keywords: [
    "IT staffing company",
    "Hire dedicated developers",
    "IT project outsourcing",
    "Contract staffing solutions",
    "Remote developer support",
    "Custom software development services",
    "IT consulting and solutions",
    "Recruitment agency for IT",
    "On-demand IT developers",
    "Outsourced IT support services",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <GlobalPageLoader />
        <Navbar />
        <div>{children}</div>
        <Footer />
        <Toaster position="top-right" richColors closeButton duration={4000} />
      </body>
    </html>
  );
}
