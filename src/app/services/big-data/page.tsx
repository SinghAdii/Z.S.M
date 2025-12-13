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
  bigDataSteps,
  bigDataTechStack,
  DataWarehouseBenefits,
  DataWarehouseFAQ,
  DataWarehouseServices,
  IntroDataWarehouseFeatures,
} from "@/components/Custom/Data";
import { bigDataHero } from "@/assets/services-hero-images/service-images-exports.js";

export default function BigDataServices() {
  return (
    <>
      <Herosection
        heroImage={bigDataHero}
        titlePrefix="Harness the Power of"
        words={["Ingest", "Process", "Analyze", "Visualize"]}
        titlesuffix="Big Data"
        highlightText="Platforms"
        subtitle="Turn massive, complex data into timely insights with scalable pipelines, advanced analytics and governed data platforms."
        wordColors={[
          "text-blue-500",
          "text-green-500",
          "text-orange-500",
          "text-purple-500",
        ]}
        isPrimaryButton={true}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Get Started"
        features={[
          "Data Lake & Warehouse Architecture",
          "Real-time Stream Processing",
          "Batch ETL & Data Pipelines",
          "Governance, Security & Lineage",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <IntroductionSection
        title="Big Data Warehouse Consulting Services & Solutions Company"
        features={IntroDataWarehouseFeatures}
        subtitle="Unlock the true potential of your business data with Ziostech Solutions’ Big Data Warehouse Consulting Services. We help organizations design, build, and manage intelligent data warehouse solutions that transform raw data into powerful insights. Whether you’re a startup, enterprise, or SaaS company, our team ensures your data architecture is scalable, secure, and performance-driven.
At Ziostech, we simplify complex data warehouse architecture into an efficient ecosystem that supports analytics, automation, and smarter business decisions. Data is the new currency of the digital world. But only if we know how to organize and analyze it  properly. That’s where our data warehouse consulting services come in.
We help businesses centralize and streamline their data systems to achieve seamless integration, faster reporting, and better decision-making. From strategic planning to architecture design and implementation, Ziostech Solutions delivers end-to-end big data consulting for growing businesses across industries. Our experts understand that every business has unique data needs. That’s why we create custom-built data warehouse strategies that align perfectly with your business objectives, technology stack, and long-term vision.
"
      />
      <Services services={DataWarehouseServices} />
      <Process
        steps={bigDataSteps}
        headingText="Our Big Data Approach"
        subHeadingText="Scalable pipelines and pragmatic analytics for measurable outcomes."
        topic="Big Data"
        tagline="Scalable, Reliable, Governed"
      />
      <TechLogoDisplay
        topic="Big Data"
        title="Platforms & Tools We Use"
        description="We design and build data platforms using proven open-source and cloud-native technologies."
        techStacks={{ bigdata: bigDataTechStack }}
      />
      <WhyChooseOurSerivces
        title="Why Choose Ziostech Solution for Big Data Consulting"
        subtitle="Empowering businesses with data-driven strategies, scalable architecture, and actionable insights for smarter decision-making."
        features={[
          {
            id: 1,
            title: "Comprehensive Expertise",
            short:
              "From data warehouse consulting to big data architecture, our experts handle every stage of your data journey.",
            badges: ["Data Warehouse", "Architecture"],
          },
          {
            id: 2,
            title: "Customized Solutions",
            short:
              "We design tailored data solutions aligned with your business goals, scale, and complexity.",
            badges: ["Tailored", "Business-Focused"],
          },
          {
            id: 3,
            title: "Data-Driven Decision Support",
            short:
              "Turn raw data into powerful insights that enable faster, smarter, and more strategic business decisions.",
            badges: ["Insights", "Analytics"],
          },
          {
            id: 4,
            title: "Agile & Scalable Delivery",
            short:
              "Our modular and agile approach ensures quick deployment, easy scaling, and future readiness.",
            badges: ["Agile", "Scalable"],
          },
          {
            id: 5,
            title: "Proven Industry Experience",
            short:
              "Trusted by startups, enterprises, and SaaS companies for delivering high-impact data-driven solutions.",
            badges: ["Enterprise", "SaaS", "Startups"],
          },
          {
            id: 6,
            title: "Affordable & Transparent Pricing",
            short:
              "We provide world-class consulting with clear pricing and flexible engagement models.",
            badges: ["Affordable", "Transparent"],
          },
        ]}
      />
      <KeyFeatures
        heading="Key Features Of Big-Data"
        benefits={DataWarehouseBenefits}
      />
      <FAQ faqs={DataWarehouseFAQ} />
    </>
  );
}
