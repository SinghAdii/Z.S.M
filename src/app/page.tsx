import {
  Herosection,
  Previousworks,
  Services,
  SpotlightBackground,
  Solutions,
  Testimonials,
  ContactUs,
  WhyChooseUs,
  FAQ,
} from "@/components/Custom/custom_components.exports";
import {
  cardData,
  features,
  statsData,
  works,
} from "../components/Custom/Data.js";
import React from "react";
import { Hero_Section_Image } from "@/assets/images/images.export.js";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <SpotlightBackground />
        </div>
        <div className="relative pt-28 text-white">
          <Herosection
            heroImage={Hero_Section_Image}
            isPrimaryButton={true}
            isSecondaryButton={true}
            primaryhref="#contact-section"
            secondaryhref="/pages/services/development"
          />
        </div>
      </div>
      <Solutions
        title="Custom IT Solutions for Your Business."
        description="Tailored systems, secure operations, and predictable delivery — we help teams modernize infrastructure and ship reliable software that supports growth."
        features={features}
        cards={cardData}
        stats={statsData}
        primaryCta="See Services"
        primaryhref="#services"
      />
      <Services />
      <Previousworks works={works} />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <ContactUs />
    </>
  );
}
