"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { Hero_Section_Image } from "@/assets/images/images.export";
import { containerSteps, containerTechStack } from "@/components/Custom/Data";

export default function ContainerizationServices() {
  return (
    <>
      <Herosection
        heroImage={Hero_Section_Image}
        titlePrefix="Empowering Teams To"
        words={["Deploy", "Scale", "Automate", "Manage"]}
        titlesuffix="Containerized"
        highlightText="Infrastructures"
        subtitle="Deploy faster, scale smarter, and automate your infrastructure with modern DevOps toolchains."
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
          "Docker & Kubernetes Setup",
          "Automated CI/CD Pipelines",
          "Infrastructure as Code (IaC)",
          "Monitoring & Deployment Optimization",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={containerSteps}
        headingText="Our Containerization Workflow"
        subHeadingText="Automated, scalable, and portable environments for modern applications."
        topic="Containerization"
        tagline="Build Once, Run Anywhere"
      />
      <TechLogoDisplay
        topic="Containerization"
        title="Tools & Technologies We Use"
        description="We rely on proven tools for automation, orchestration, and infrastructure management."
        techStacks={containerTechStack}
      />
    </>
  );
}
