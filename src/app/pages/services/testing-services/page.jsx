"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { testingSteps, testingTechStack } from "@/components/Custom/Data";
import { testingHero } from "@/assets/services-hero-images/service-images-exports.js";

// Data for the 'Process' component

export default function TestingServices() {
  return (
    <>
      <Herosection
        heroImage={testingHero}
        titlePrefix="Ensuring Quality With"
        words={["Manual", "Automated", "Performance", "Security"]}
        titlesuffix="Testing"
        highlightText="Solutions"
        subtitle="Deliver flawless applications with our comprehensive testing services, designed to identify issues, reduce risks, and enhance user experience."
        wordColors={[
          "text-orange-500",
          "text-blue-500",
          "text-green-500",
          "text-red-500",
        ]}
        isPrimaryButton={true}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Request a Quote"
        features={[
          "End-to-End Functional Testing",
          "Automated Regression Suites",
          "Performance & Load Testing",
          "API & Integration Testing",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={testingSteps}
        headingText="Our Testing Methodology"
        subHeadingText="A systematic approach to guarantee software quality and reliability."
        topic="Testing"
        tagline="Quality, Precision, Confidence"
      />
      <TechLogoDisplay
        topic="Testing"
        title="Tools & Frameworks We Use"
        description="We employ a modern stack of industry-leading tools to ensure comprehensive test coverage and efficiency."
        techStacks={{ testing: testingTechStack }}
      />
    </>
  );
}
