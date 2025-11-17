import {
  ContactUs,
  Navbar,
  Testimonials,
} from "@/components/Custom/custom_components.exports.js";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ziostechsolutions | Empowers Digital Growth Through Innovation",
  description: `At Ziostech Solution, we combine technology, talent, and innovation to help businesses thrive in the digital era.
    From strategic IT consulting to full-scale platform development and AI integration, we empower organizations to grow smarter, faster, and stronger.
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

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="services-layout">
      <Navbar />
      <div className="my-20 pt-10">{children}</div>
      <Testimonials />
      <ContactUs />
    </section>
  );
}
