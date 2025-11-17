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
        subtitle="At ZiosTech Solutions, we provide platform services designed to make your business faster, smarter, and more scalable. Our expert team helps organizations build, deploy, and manage applications with cutting-edge Platform as a Service (PaaS) technologies. Whether you're a startup or a global enterprise, our solutions simplify complexity, reduce infrastructure costs, and enable innovation at speed"
        features={IntroPlatformFeatures}
      />
      <Services services={platformServices} />
      <Process
        steps={platformSteps}
        headingText="Our Platform Development Process"
        subHeadingText="From architecture to deployment we build scalable cloud-ready platforms."
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
              "Scale effortlessly with advanced platform services designed for high performance and flexibility.",
            badges: ["PaaS", "Scalable"],
          },
          {
            id: 2,
            title: "Seamless Integration",
            short:
              "Experience smooth performance across multi-cloud and hybrid environments for unified operations.",
            badges: ["Multi-Cloud", "Interoperability"],
          },
          {
            id: 3,
            title: "Secure & Compliant",
            short:
              "Built-in encryption, compliance, and continuous monitoring ensure data integrity and reliability.",
            badges: ["Security", "Compliance"],
          },
          {
            id: 4,
            title: "Faster Time to Market",
            short:
              "Deploy applications in days instead of months with automated deployment pipelines.",
            badges: ["Agile", "Rapid Deployment"],
          },
          {
            id: 5,
            title: "Cost-Effective Solutions",
            short:
              "Reduce overhead and optimize resources through intelligent infrastructure management.",
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
