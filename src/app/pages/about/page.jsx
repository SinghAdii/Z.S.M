"use client";

import React from "react";
import {
  SpotlightBackground,
  Herosection,
  Solutions,
  Testimonials,
  ContactUs,
} from "@/components/Custom/custom_components.exports";

import { features, cardData, statsData } from "@/components/Custom/Data.js";
import {
  AboutHeadingImage,
  AdityaImage,
  NareshImage,
  PranjalImage,
  VisionMissionImage,
} from "@/assets/images/images.export.js";
import AboutCompanySection from "@/components/Custom/AboutCompanySection";

export default function About() {
  return (
    <>
      {/* === HERO SECTION === */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <SpotlightBackground />
        </div>
        <div className="relative pt-28 text-white">
          <Herosection
            heroImage={AboutHeadingImage}
            heading="About Us"
            subheading="Empowering Digital Growth Through Technology"
            description="At Ziostech Solutions, we deliver scalable, reliable, and innovative digital solutions. Our mission is to help businesses leverage technology effectively to accelerate growth, streamline operations, and stay ahead of the competition."
            isPrimaryButton={true}
            primaryText="Our Services"
            primaryhref="/pages/services/development"
            isSecondaryButton={true}
            secondaryText="Contact Us"
            secondaryhref="#contact-section"
          />
        </div>
      </div>
      <AboutCompanySection />
      
      {/* === OUR TEAM SECTION === */}
      <section className="py-24 bg-[#0f0f0f] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            Behind every successful project is a passionate team of developers,
            designers, and innovators. Together, we combine creativity and
            technical expertise to build next-generation digital solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dummy team cards */}
            {[
              { name: "Aditya Singh", role: "Founder & CEO", img: AdityaImage },
              {
                name: "Naresh Kumar Makwana",
                role: "Lead Developer",
                img: NareshImage,
              },
              {
                name: "Pranjal Das",
                role: "Senior Web Designer",
                img: PranjalImage,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-2xl hover:bg-[#222] transition-all"
              >
                <img
                  src={member.img.src} // <-- Access the .src property here
                  alt={member.name} // <-- It's also good practice to add an alt attribute
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS & CONTACT === */}
      <Testimonials />
      <ContactUs />
    </>
  );
}
