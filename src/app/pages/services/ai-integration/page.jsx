"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { aiIntegrationSteps, aiTechStack } from "@/components/Custom/Data";
import { aiIntegrationHero } from "@/assets/services-hero-images/service-images-exports.js";
export default function AIIntegrationServices() {
  return (
    <>
      <Herosection
        heroImage={aiIntegrationHero}
        titlePrefix="Transforming Businesses With"
        words={["Automate", "Augment", "Personalize", "Accelerate"]}
        titlesuffix="AI-Powered"
        highlightText="Solutions"
        subtitle="Integrate intelligent systems that drive efficiency, personalize experiences, and unlock new value from your data."
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
          "Custom Model Development & Fine-tuning",
          "Conversational AI & Chatbots",
          "AI-Powered Automation & RPA",
          "Data Pipelines, MLOps & Monitoring",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={aiIntegrationSteps}
        headingText="Our AI Integration Process"
        subHeadingText="Practical, responsible, and scalable approach to adopting AI."
        topic="AI Integration"
        tagline="Reliable, Responsible & Business-Focused"
      />
      <TechLogoDisplay
        topic="AI"
        title="AI Tools & Frameworks We Use"
        description="We leverage modern AI frameworks and platforms to build reliable, production-ready solutions."
        techStacks={{ ai: aiTechStack }}
      />
    </>
  );
}
