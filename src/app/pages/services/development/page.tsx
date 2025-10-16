"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { Hero_Section_Image } from "@/assets/images/images.export";
import {
  developmentSteps,
  developmentTechStack,
} from "@/components/Custom/Data";

export default function Development() {
  return (
    <>
      <Herosection
        heroImage={Hero_Section_Image}
        titlePrefix="We Design And"
        words={["Develop", "Engineer", "Craft", "Deliver"]}
        titlesuffix="High-Impact"
        highlightText="Software Solutions"
        subtitle="Empower your business with top notch development solutions, including web and mobile applications. Build seamless digital experiences with modern technologies."
        wordColors={[
          "text-blue-500",
          "text-orange-500",
          "text-blue-500",
          "text-orange-500",
        ]}
        isPrimaryButton={true}
        isSecondaryButton={false}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Contact Us"
        features={[
          "Custom Web & App Development",
          "Cloud-Ready Scalable Solutions",
          "Modern UI/UX Design Systems",
          "End-to-End Product Engineering",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={developmentSteps}
        headingText="Our Development Process"
        subHeadingText="A proven, end-to-end approach that transforms ideas into world class software"
        topic="Development Process"
        tagline=" From Idea to Launch We Handle Everything"
      />
      <TechLogoDisplay
        topic="Development"
        title="Technologies We Use"
        description="Our development process uses modern, scalable, and high-performance tools for web and mobile applications."
        techStacks={developmentTechStack}
      />
    </>
  );
}
