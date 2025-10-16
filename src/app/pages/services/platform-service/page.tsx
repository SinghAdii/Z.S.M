"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { Hero_Section_Image } from "@/assets/images/images.export";
import { platformSteps, platformTechStack } from "@/components/Custom/Data";

export default function PlatformServices() {
  return (
    <>
      <Herosection
        titlePrefix="We Help You"
        words={["Build", "Launch", "Deliver", "Innovate"]}
        titlesuffix="Next Gen"
        highlightText="Platform Services"
        subtitle="Design, develop, and deploy scalable SaaS & PaaS platforms with seamless integrations and modern architecture."
        wordColors={[
          "text-blue-500",
          "text-orange-500",
          "text-blue-500",
          "text-orange-500",
        ]}
        heroImage={Hero_Section_Image}
        isPrimaryButton={true}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Contact Us"
        features={[
          "Multi-Tenant Architecture Design",
          "Custom SaaS / PaaS Solutions",
          "API Integration & Management",
          "Cloud-Native Platform Deployment",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={platformSteps}
        headingText="Our Platform Development Process"
        subHeadingText="From architecture to deployment — we build scalable cloud-ready platforms."
        topic="Platform Services"
        tagline="Modern, Modular & Maintainable"
      />
      <TechLogoDisplay
        topic="Platform"
        title="Technologies We Use"
        description="Our platform solutions are built with modern frameworks and cloud services."
        techStacks={platformTechStack}
      />
    </>
  );
}
