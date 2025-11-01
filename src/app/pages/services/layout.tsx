import {
  ContactUs,
  Navbar,
  Testimonials,
} from "@/components/Custom/custom_components.exports.js";

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
