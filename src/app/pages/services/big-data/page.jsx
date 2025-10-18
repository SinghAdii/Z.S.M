"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { bigDataSteps, bigDataTechStack } from "@/components/Custom/Data";
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
    </>
  );
}
// ```// filepath: c:\Users\akash\OneDrive\Desktop\Ziostech Next\Z.S.M\src\app\pages\services\big-data\page.jsx
// "use client";
// import React from "react";
// import {
//   Herosection,
//   Process,
//   TechLogoDisplay,
// } from "@/components/Custom/custom_components.exports";
// import { FaPhoneAlt } from "react-icons/fa";
// import { Hero_Section_Image } from "@/assets/images/images.export";

// const bigDataSteps = [
//   {
//     title: "Discovery & Data Assessment",
//     description:
//       "Profile datasets, identify sources, define KPIs and compliance requirements.",
//   },
//   {
//     title: "Ingestion & Storage",
//     description:
//       "Design scalable ingestion pipelines and lay down resilient data lake/warehouse storage.",
//   },
//   {
//     title: "Processing & Transformation",
//     description:
//       "Apply batch and stream processing to clean, enrich and transform data for analytics.",
//   },
//   {
//     title: "Analytics & Visualization",
//     description:
//       "Deliver dashboards, reports and ML-ready datasets to unlock insights and decisions.",
//   },
//   {
//     title: "Governance & Optimization",
//     description:
//       "Enforce security, lineage, cost controls and continuously tune performance.",
//   },
// ];

// const bigDataTechStack = [
//   { name: "Apache Hadoop", icon: () => null, desc: "Distributed storage & batch processing" },
//   { name: "Apache Spark", icon: () => null, desc: "Fast in-memory analytics & ETL" },
//   { name: "Apache Kafka", icon: () => null, desc: "High-throughput event streaming" },
//   { name: "Flink / Beam", icon: () => null, desc: "Real-time stream processing" },
//   { name: "Databricks", icon: () => null, desc: "Unified analytics & ML platform" },
//   { name: "Snowflake / BigQuery", icon: () => null, desc: "Cloud data warehousing" },
// ];

// export default function BigDataServices() {
//   return (
//     <>
//       <Herosection
//         heroImage={Hero_Section_Image}
//         titlePrefix="Harness the Power of"
//         words={["Ingest", "Process", "Analyze", "Visualize"]}
//         titlesuffix="Big Data"
//         highlightText="Platforms"
//         subtitle="Turn massive, complex data into timely insights with scalable pipelines, advanced analytics and governed data platforms."
//         wordColors={[
//           "text-blue-500",
//           "text-green-500",
//           "text-orange-500",
//           "text-purple-500",
//         ]}
//         isPrimaryButton={true}
//         primaryButtonIcon={<FaPhoneAlt />}
//         primaryButtonText="Get Started"
//         features={[
//           "Data Lake & Warehouse Architecture",
//           "Real-time Stream Processing",
//           "Batch ETL & Data Pipelines",
//           "Governance, Security & Lineage",
//         ]}
//         primaryhref="#contact-section"
//         headingClassName="md:text-4xl text-3xl"
//       />
//       <Process
//         steps={bigDataSteps}
//         headingText="Our Big Data Approach"
//         subHeadingText="Scalable pipelines and pragmatic analytics for measurable outcomes."
//         topic="Big Data"
//         tagline="Scalable, Reliable, Governed"
//       />
//       <TechLogoDisplay
//         topic="Big Data"
//         title="Platforms & Tools We Use"
//         description="We design and build data platforms using proven open-source and cloud-native technologies."
//         techStacks={{ bigdata: bigDataTechStack }}
//       />
//     </>
//   );
// }
