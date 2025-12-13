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
  cloudbenefits,
  cloudFAQ,
  cloudServices,
  cloudSteps,
  cloudTechStack,
  IntroCloudfeatures,
} from "@/components/Custom/Data";
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
      <IntroductionSection
        title="Scalable Cloud Services by Expert Cloud Architects"
        subtitle="In today’s fast-paced digital world, staying connected, secure, and scalable is essential for business growth. However, managing traditional on-premise systems can be expensive and time-consuming.
          At ZiosTech Solutions, we make cloud transformation effortless. Our experienced cloud computing architects design customized solutions that improve performance, security, and collaboration. Whether your business uses AWS, Azure, Google Cloud, or MultCloud, we ensure smooth migration, complete management, and optimized infrastructure for a smarter, faster future.
          "
        features={IntroCloudfeatures}
      />
      <Services services={cloudServices} />
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
      <WhyChooseOurSerivces
        title="Why Choose Our ZiosTech Cloud Services"
        subtitle="We deliver secure, scalable, and cost-efficient cloud solutions designed to optimize performance and accelerate digital transformation."
        features={[
          {
            id: 1,
            title: "End-to-End Expertise",
            short:
              "From migration to management, we handle every phase of your cloud journey.",
            badges: ["Migration", "Management"],
          },
          {
            id: 2,
            title: "Certified Cloud Architects",
            short:
              " Our professionals are trained in AWS, Azure, and hybrid cloud environments.",
            badges: ["AWS", "Azure", "Hybrid Cloud"],
          },
          {
            id: 3,
            title: "High Security Standards",
            short:
              " We use multi-layered protection and compliance-driven processes.",
            badges: ["Security", "Compliance"],
          },
          {
            id: 4,
            title: "Cost Optimization",
            short:
              "Smart cloud architecture reduces operational costs and improves ROI.",
            badges: ["Efficiency", "Cost-Effective"],
          },
          {
            id: 5,
            title: "Scalability and Performance",
            short:
              "Easily expand your cloud capacity as your business grows.",
            badges: ["Elastic Scaling", "High Performance"],
          },
          {
            id: 6,
            title: "Continuous Support",
            short:
              "Our proactive monitoring ensures consistent uptime and reliability.",
            badges: ["24/7 Monitoring", "Reliability"],
          },
        ]}
      />
      <KeyFeatures
        benefits={cloudbenefits}
        heading="Benefits of Choosing ZiosTech Cloud Services"
      />
      <FAQ faqs={cloudFAQ} />
    </>
  );
}
