// filepath: src/app/services/uiux-design/page.jsx
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
  UIDesignBenefits,
  UIDesignFAQ,
  UIDesignServices,
  uiuxSteps,
  uiuxTechStack,
} from "@/components/Custom/Data";
import { uiuxHero } from "@/assets/services-hero-images/service-images-exports.js";

export default function UIUXDesign() {
  return (
    <>
      <Herosection
        heroImage={uiuxHero}
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
      <IntroductionSection />
      <Services services={UIDesignServices} />
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
      <WhyChooseOurSerivces
        title="Why Choose Ziostech Solution for UI UX Designing and Consulting Services"
        subtitle="We don’t just design products — we create digital experiences that build trust, engagement, and long-term growth."
        features={[
          {
            id: 1,
            title: "Certified UI/UX Experts",
            short:
              "Work with experienced designers and usability specialists who blend creativity with proven design strategies.",
            badges: ["Certified Experts", "Design Strategy"],
          },
          {
            id: 2,
            title: "Cross-Industry Expertise",
            short:
              "From IT and finance to healthcare and e-commerce, our designs adapt to diverse audiences and use cases.",
            badges: ["Multi-Industry", "User-Centric"],
          },
          {
            id: 3,
            title: "End-to-End Service Delivery",
            short:
              "We manage every stage — from discovery and wireframing to testing and post-launch optimization.",
            badges: ["Full Lifecycle", "Design to Launch"],
          },
          {
            id: 4,
            title: "Data-Driven Decision Making",
            short:
              "Each design choice is guided by real analytics, research, and user feedback to improve engagement and performance.",
            badges: ["Analytics", "User Research"],
          },
          {
            id: 5,
            title: "Flexible Engagement Models",
            short:
              "Choose from tailored pricing and packages designed for startups, SMBs, and enterprises alike.",
            badges: ["Flexible Plans", "Scalable Solutions"],
          },
        ]}
      />
      <KeyFeatures
        benefits={UIDesignBenefits}
        heading="Key Benefits of Choosing Ziostech Solution for UI UX Designing Services"
      />
      <FAQ faqs={UIDesignFAQ} />
    </>
  );
}
