"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { cloudSteps, cloudTechStack } from "@/components/Custom/Data";
import { cloudHero } from "@/assets/services-hero-images/service-images-exports.js";

export default function CloudServices() {
  return (
    <>
      <Herosection
        heroImage={cloudHero}
        titlePrefix="Empowering Businesses To"
        words={["Scale", "Deploy", "Secure", "Optimize"]}
        titlesuffix="Cloud Driven"
        highlightText="Solutions"
        subtitle="Unlock the full potential of cloud computing with our secure, scalable, and high-performance solutions."
        wordColors={[
          "text-blue-500",
          "text-orange-500",
          "text-blue-500",
          "text-orange-500",
        ]}
        isPrimaryButton={true}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Contact Us"
        features={[
          "Cloud Migration & Consulting",
          "Cost Optimization & Monitoring",
          "Multi-Cloud & Hybrid Setup",
          "DevOps & Automation Integration",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={cloudSteps}
        headingText="Our Cloud Process"
        subHeadingText="A strategic and secure approach to cloud transformation."
        topic="Cloud Services"
        tagline="Scalable, Reliable & Cost-Effective"
      />
      <TechLogoDisplay
        topic="Cloud"
        title="Cloud Platforms We Use"
        description="We work with leading cloud providers to deliver reliability and performance."
        techStacks={cloudTechStack}
      />
    </>
  );
}
