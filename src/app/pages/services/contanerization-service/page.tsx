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
  ContainerBenefits,
  ContainerFAQ,
  containerServices,
  containerSteps,
  containerTechStack,
  IntroContainerFeatures,
} from "@/components/Custom/Data";
import { containerisationHero } from "@/assets/services-hero-images/service-images-exports.js";

export default function ContainerizationServices() {
  return (
    <>
      <Herosection
        heroImage={containerisationHero}
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
      <IntroductionSection
        title=" Scalable and Efficient Containerization Services"
        rightTitle="for Modern Businesses"
        subtitle="Transform the way you build, deploy, and scale applications with ZiosTech Solution’s containerization services. We help enterprises, startups, and SaaS companies containerize applications using tools such as Docker and Kubernetes. Our approach ensures faster deployment, improved performance, and reduced operational costs.
At ZiosTech, we believe innovation begins with agility. Our experts simplify your digital transformation journey by helping you adopt containerization as a service, making your infrastructure cloud-ready, secure, and built for the future.
"
        features={IntroContainerFeatures}
      />
      <Services services={containerServices} />
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
      <WhyChooseOurSerivces
        title="Why Choose ZiosTech Containerization Services"
        subtitle="At ZiosTech, we do more than containerize applications — we make them scalable, secure, and ready for evolving business needs."
        features={[
          {
            id: 1,
            title: "Certified DevOps and Cloud Engineers",
            short:
              "Our team of experts specializes in modern DevOps practices and cloud-native infrastructure to ensure seamless deployment.",
            badges: ["DevOps", "Certified Experts"],
          },
          {
            id: 2,
            title: "Proven Expertise in Docker & Kubernetes",
            short:
              "Leverage industry-leading experience in container orchestration and cloud-native technologies for maximum efficiency.",
            badges: ["Docker", "Kubernetes"],
          },
          {
            id: 3,
            title: "End-to-End Containerization Solutions",
            short:
              "From consulting to deployment and support, we provide a complete containerization lifecycle service.",
            badges: ["Full Lifecycle", "Consulting"],
          },
          {
            id: 4,
            title: "Scalable and Flexible Engagement Models",
            short:
              "Choose engagement models that fit your project needs — from short-term assistance to full-scale implementation.",
            badges: ["Flexible", "Scalable"],
          },
          {
            id: 5,
            title: "Cost-Efficient and Future-Ready Infrastructure",
            short:
              "Optimize resource usage, reduce overhead, and prepare your systems for future scalability and innovation.",
            badges: ["Cost Optimization", "Future-Ready"],
          },
        ]}
      />
      <KeyFeatures
        benefits={ContainerBenefits}
        heading="Benefits of Choosing ZiosTech Containerization Services"
      />
      <FAQ faqs={ContainerFAQ} />
    </>
  );
}
