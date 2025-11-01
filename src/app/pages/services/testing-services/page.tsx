"use client";
import React from "react";
import {
  FAQ,
  Herosection,
  IntroductionSection,
  KeyFeatures,
  Process,
  Services,
  TechLogoDisplay,
  WhyChooseOurSerivces,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import {
  IntroQATestingFeatures,
  QATestingBenefits,
  QATestingFAQ,
  QATestingServices,
  testingSteps,
  testingTechStack,
} from "@/components/Custom/Data";
import { testingHero } from "@/assets/services-hero-images/service-images-exports.js";

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
      <IntroductionSection
        title="Reliable QA Testing and Android App Quality Assurance"
        rightTitle="Services by Ziostech Solution"
        features={IntroQATestingFeatures}
        subtitle="Deliver exceptional digital experiences with precision and confidence. At Ziostech Solution, we provide expert QA testing and Android app testing services designed to ensure that your web, mobile, and software applications perform flawlessly across all devices and environments. Our dedicated QA engineers identify bugs early, improve performance, and guarantee seamless usability to help your business achieve perfection before launch.
Whether you are developing a new website, scaling your Android app, or upgrading enterprise software, our QA testing experts ensure that your solution is secure, reliable, and ready for users."
      />
      <Services services={QATestingServices} />
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
      <WhyChooseOurSerivces
        title="Why Choose Ziostech Solution for QA Testing"
        subtitle="Ensure flawless performance and reliability with expert-led QA testing designed for scalability, accuracy, and speed."
        features={[
          {
            id: 1,
            title: "Expert QA Engineers",
            short:
              "Our certified testers bring years of experience in Android, web, and enterprise software testing.",
            badges: ["Certified QA", "Expert Team"],
          },
          {
            id: 2,
            title: "Affordable QA Packages",
            short:
              "Flexible and cost-effective testing plans tailored for startups and large enterprises alike.",
            badges: ["Affordable", "Scalable"],
          },
          {
            id: 3,
            title: "End-to-End Testing Support",
            short:
              "Comprehensive functional, performance, and security testing for complete product assurance.",
            badges: ["Functional", "Performance", "Security"],
          },
          {
            id: 4,
            title: "Real Device Testing",
            short:
              "We validate app performance on real devices to ensure accuracy, stability, and user satisfaction.",
            badges: ["Real Devices", "High Accuracy"],
          },
          {
            id: 5,
            title: "Agile & DevOps Integration",
            short:
              "Seamlessly integrated QA workflows support continuous testing, faster releases, and rapid feedback loops.",
            badges: ["Agile", "DevOps Ready"],
          },
          {
            id: 6,
            title: "Fast & Reliable Delivery",
            short:
              "Quick turnaround time with precise bug tracking, reporting, and actionable insights.",
            badges: ["Fast Delivery", "Detailed Reports"],
          },
        ]}
      />
      <KeyFeatures
        benefits={QATestingBenefits}
        heading=" Key Features of Our QA Testing Services"
      />
      <FAQ faqs={QATestingFAQ} />
    </>
  );
}
