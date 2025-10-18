"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { Hero_Section_Image } from "@/assets/images/images.export";
import { dataVisSteps, dataVisTechStack } from "@/components/Custom/Data";

export default function DataVisualizationServices() {
  return (
    <>
      <Herosection
        heroImage={Hero_Section_Image} // Recommended: Use a data-visualization-specific image
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
    </>
  );
}