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
  dataVisSteps,
  dataVisTechStack,
  DataVisualizationBenefits,
  DataVisualizationFAQ,
  dataVisualizationServices,
  IntroDataVisualizationFeatures,
} from "@/components/Custom/Data";
import { dataVisualHero } from "@/assets/services-hero-images/service-images-exports.js";

export default function DataVisualizationServices() {
  return (
    <>
      <Herosection
        heroImage={dataVisualHero}
        titlePrefix="Transforming Data into"
        words={["Clarity", "Stories", "Insights", "Action"]}
        titlesuffix="Compelling"
        highlightText="Visualizations"
        subtitle="We craft intuitive and interactive dashboards that turn complex data into clear, actionable insights for smarter decision-making."
        wordColors={[
          "text-blue-500",
          "text-teal-500",
          "text-orange-500",
          "text-purple-500",
        ]}
        isPrimaryButton={true}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Visualize Your Data"
        features={[
          "Custom Dashboard Development",
          "Interactive KPI Reporting",
          "Business Intelligence Solutions",
          "Data Storytelling & Narratives",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <IntroductionSection
        title="Data Visualization Services Company"
        subtitle="Transform complex datasets into clear, actionable insights with Ziostech Solutions’ Data Visualization Services. We help businesses turn raw data into visually engaging dashboards and reports that simplify decision-making and enhance data understanding."
        features={IntroDataVisualizationFeatures}
      />
      <Services services={dataVisualizationServices} />
      <Process
        steps={dataVisSteps}
        headingText="Our Data Visualization Workflow"
        subHeadingText="A user-centric approach to designing impactful data experiences."
        topic="Data Visualization"
        tagline="Clarity, Insight, Impact"
      />
      <TechLogoDisplay
        topic="Data Visualization"
        title="Tools We Use to Tell Your Data's Story"
        description="We are proficient with the industry's leading business intelligence and data visualization platforms to meet your needs."
        techStacks={{ datavis: dataVisTechStack }}
      />
      <WhyChooseOurSerivces
        title="Why Choose Ziostech Solution as Your Data Visualization Partner"
        subtitle="Transforming complex data into clear, actionable insights through powerful visualization and analytics solutions."
        features={[
          {
            id: 1,
            title: "Expertise Across Tools",
            short:
              "Our team is skilled in Power BI, Tableau, and modern visualization frameworks to deliver impactful dashboards.",
            badges: ["Power BI", "Tableau", "Modern Tools"],
          },
          {
            id: 2,
            title: "Data-Centric Approach",
            short:
              "We focus on turning your data into meaningful visual stories that drive decision-making and business growth.",
            badges: ["Data-Driven", "Insights"],
          },
          {
            id: 3,
            title: "Scalable Solutions",
            short:
              "Our visualization solutions are designed to scale effortlessly as your data and business expand.",
            badges: ["Scalable", "Future-Ready"],
          },
          {
            id: 4,
            title: "Collaborative Process",
            short:
              "We maintain transparent communication and use agile methods to ensure smooth delivery at every stage.",
            badges: ["Agile", "Collaborative"],
          },
          {
            id: 5,
            title: "Proven Results",
            short:
              "Trusted by global organizations for reliable, high-performance visualization and reporting systems.",
            badges: ["Reliable", "Enterprise-Grade"],
          },
        ]}
      />
      <KeyFeatures
        benefits={DataVisualizationBenefits}
        heading="Key Features and Business Benefits of Our Visualization Services"
      />
      <FAQ faqs={DataVisualizationFAQ} />
    </>
  );
}
