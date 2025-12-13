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
  IntroPlatformFeatures,
  PlatformBenefits,
  PlatformFAQ,
  platformServices,
  platformSteps,
  platformTechStack,
} from "@/components/Custom/Data";
import { platformHero } from "@/assets/services-hero-images/service-images-exports.js";

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
        heroImage={platformHero}
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
      <IntroductionSection
        title="Powerful Platform Services"
        rightTitle="Accelerate Your Digital Transformation"
        subtitle="At ZiosTech Solutions, we provide platform services designed to make your business faster, smarter, and more scalable. Our expert team helps organizations build, deploy, and manage applications with cutting-edge Platform as a Service (PaaS) technologies. Whether you're a startup or a global enterprise, our solutions simplify complexity, reduce infrastructure costs, and enable innovation at speed.
        We work with the latest PaaS platform as a service and cloud platform console technologies to deliver modern, secure, and flexible platforms for your applications, giving your business a strong foundation for growth."
        features={IntroPlatformFeatures}
      />
      <Services services={platformServices} />
      <Process
        steps={platformSteps}
        headingText="Our Platform Development Process"
        subHeadingText="Our streamlined process ensures minimal friction and maximum performance."
        topic="Platform Services"
        tagline="Modern, Modular & Maintainable"
      />
      <TechLogoDisplay
        topic="Platform"
        title="Technologies We Use"
        description="Our platform solutions are built with modern frameworks and cloud services."
        techStacks={platformTechStack}
      />
      <WhyChooseOurSerivces
        title="Why Choose Our ZiosTech Platform Services"
        subtitle="We combine innovation with reliability to deliver secure, scalable, and future-ready platform solutions."
        features={[
          {
            id: 1,
            title: "Future-Ready PaaS",
            short:
              "Scale effortlessly with advanced platform services.",
            badges: ["PaaS", "Scalable"],
          },
          {
            id: 2,
            title: "Seamless Integration",
            short:
              "Experience smooth performance across multi-cloud environments.",
            badges: ["Multi-Cloud", "Interoperability"],
          },
          {
            id: 3,
            title: "Secure & Compliant",
            short:
              "Built-in data protection and continuous monitoring.",
            badges: ["Security", "Compliance"],
          },
          {
            id: 4,
            title: "Faster Time to Market",
            short:
              "Deploy apps in days instead of months.",
            badges: ["Agile", "Rapid Deployment"],
          },
          {
            id: 5,
            title: "Cost-Effective Solutions",
            short:
              "Reduce overhead and eliminate unnecessary infrastructure costs.",
            badges: ["Efficiency", "Cost Optimization"],
          },
        ]}
      />
      <KeyFeatures
        benefits={PlatformBenefits}
        heading="Key Features of Choosing ZiosTech Platform Services"
        intro="Working with ZiosTech Solutions means getting more than a platform. You gain a growth partner"
      />
      <FAQ faqs={PlatformFAQ} />
    </>
  );
}
