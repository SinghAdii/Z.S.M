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
        subtitle="Transform complex datasets into clear, actionable insights with Ziostech Solutions’ Data Visualization Services. We help businesses turn raw data into visually engaging dashboards and reports that simplify decision-making and enhance data understanding. Our team designs customized visualization solutions that empower organizations to identify trends, monitor performance, and communicate insights effectively across all levels. Whether it’s for operations, strategy, or analytics, Ziostech ensures your data tells a meaningful story.
At Ziostech Solutions, our approach blends technical precision with visual clarity. Delivering data visualization that is insightful, interactive, and easy to interpret.
"
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
              "Skilled professionals in Power BI, Tableau, and modern visualization frameworks.",
            badges: ["Power BI", "Tableau", "Modern Tools"],
          },
          {
            id: 2,
            title: "Data-Centric Approach",
            short:
              "Focused on transforming information into actionable insights.",
            badges: ["Data-Driven", "Insights"],
          },
          {
            id: 3,
            title: "Scalable Solutions",
            short:
              "Designed to grow alongside your data and business expansion.",
            badges: ["Scalable", "Future-Ready"],
          },
          {
            id: 4,
            title: "Collaborative Process",
            short:
              "Transparent communication and agile delivery at every stage.",
            badges: ["Agile", "Collaborative"],
          },
          {
            id: 5,
            title: "Proven Results",
            short:
              " Trusted by organizations across industries for reliable data visualization and reporting.",
            badges: ["Reliable", "Enterprise-Grade"],
          },
          {
            id: 6,
            title: "Business Impact Focused",
            short:
              "Ziostech Solutions ensures that your data visualization initiatives support smarter business operations and measurable outcomes.",
            badges: [" Business Impact", "Smarter Decisions"],
          }
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
