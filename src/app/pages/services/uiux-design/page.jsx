// filepath: src/app/pages/services/uiux-design/page.jsx
"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { Hero_Section_Image } from "@/assets/images/images.export";
import { uiuxSteps, uiuxTechStack } from "@/components/Custom/Data";


export default function UIUXDesign() {
  return (
    <>
      <Herosection
        heroImage={Hero_Section_Image}
        titlePrefix="Creating Intuitive and"
        words={["Engaging", "Beautiful", "Usable", "Impactful"]}
        titlesuffix="Digital"
        highlightText="Experiences"
        subtitle="We craft user-centric designs that blend aesthetic appeal with seamless functionality, driving user satisfaction and business growth."
        wordColors={[
          "text-blue-500",
          "text-pink-500",
          "text-teal-500",
          "text-yellow-500",
        ]}
        isPrimaryButton={true}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Contact Our Designers"
        features={[
          "User Research & Analysis",
          "Interactive Prototyping",
          "UI & Visual Design Systems",
          "Usability Testing & Audits",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={uiuxSteps}
        headingText="Our UI/UX Design Process"
        subHeadingText="A human-centered approach to creating products users love."
        topic="UI/UX Design"
        tagline="Intuitive, Engaging, Purposeful"
      />
      <TechLogoDisplay
        topic="UI/UX"
        title="Our Design & Prototyping Toolkit"
        description="We use industry-standard tools to bring ideas to life, from wireframes to high-fidelity prototypes."
        techStacks={{ uiux: uiuxTechStack }}
      />
    </>
  );
}