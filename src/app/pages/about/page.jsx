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
  ShaliniDirectorImage,
} from "@/assets/images/images.export.js";
import AboutCompanySection from "@/components/Custom/AboutCompanySection";
import { FaArrowRight } from "react-icons/fa";

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
            primaryButtonText="Get Started"
            primaryhref="#contact-section"
            primaryButtonIcon={<FaArrowRight />}
          />
        </div>
      </div>
      <AboutCompanySection />

      {/* ===Our Leadership Team === */}
      <section className="relative py-16 bg-[#0f0f0f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111] to-[#0f0f0f] opacity-70 -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          The Minds Behind Ziostech
          </h2>

          {/* Motivational Quote */}
          <p className="text-base italic text-gray-400 mb-8 max-w-2xl mx-auto">
            “Alone we can do so little; together we can build the future of
            technology.”
          </p>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            At{" "}
            <span className="text-white font-medium">Ziostech Solutions</span>,
            our strength lies in collaboration. Every idea is nurtured by
            creative minds, transformed by skilled developers, and refined by
            visionary leadership — all working together to deliver innovation
            that empowers businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {[
              {
                name: "Aditya Singh",
                role: "Founder & CEO",
                img: AdityaImage,
                tagline: "Vision drives innovation.",
              },
              {
                name: "Shalini Singh",
                role: "Director & Co-Founder",
                img: ShaliniDirectorImage,
                tagline: "Leadership with empathy and clarity.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-[#1a1a1a]/70 backdrop-blur-md p-6 rounded-xl border border-white/10 
                     hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-blue-900/30"
              >
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <img
                    src={member.img.src || member.img}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-[#2a2a2a] 
                         group-hover:border-blue-500 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                <p className="text-xs text-blue-400 italic opacity-0 group-hover:opacity-100 transition-all duration-300">
                  “{member.tagline}”
                </p>
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
