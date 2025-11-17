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
  aiIntegrationSteps,
  aiTechStack,
  IntroSmartBotFeatures,
  SmartBotBenefits,
  SmartBotFAQ,
  SmartBotServices,
} from "@/components/Custom/Data";
import { aiIntegrationHero } from "@/assets/services-hero-images/service-images-exports.js";
export default function AIIntegrationServices() {
  return (
    <>
      <Herosection
        heroImage={aiIntegrationHero}
        titlePrefix="Transforming Businesses With"
        words={["Automate", "Augment", "Personalize", "Accelerate"]}
        titlesuffix="AI-Powered"
        highlightText="Solutions"
        subtitle="Integrate intelligent systems that drive efficiency, personalize experiences, and unlock new value from your data."
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
          "Custom Model Development & Fine-tuning",
          "Conversational AI & Chatbots",
          "AI-Powered Automation & RPA",
          "Data Pipelines, MLOps & Monitoring",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <IntroductionSection
        title="Innovative Smart Bot Solutions Company Transforming Businesses"
        rightTitle="with Intelligent Automation"
        subtitle="Enhance customer engagement and streamline operations with Smart Bot services from Ziostech Solutions. Our advanced smart chat bots and AI-powered virtual assistants help businesses automate repetitive tasks, provide instant support, and deliver personalized user experiences.
Whether you are a startup, enterprise, or SaaS company, our smart bot solutions are designed to improve efficiency, reduce operational costs, and scale effortlessly. We combine cutting-edge AI, natural language processing, and intuitive design to build intelligent bots that understand, learn, and interact seamlessly with your users.
"
        features={IntroSmartBotFeatures}
      />
      <Services services={SmartBotServices} />
      <Process
        steps={aiIntegrationSteps}
        headingText="Our AI Integration Process"
        subHeadingText="Practical, responsible, and scalable approach to adopting AI."
        topic="AI Integration"
        tagline="Reliable, Responsible & Business-Focused"
      />
      <TechLogoDisplay
        topic="AI"
        title="AI Tools & Frameworks We Use"
        description="We leverage modern AI frameworks and platforms to build reliable, production-ready solutions."
        techStacks={{ ai: aiTechStack }}
      />
      <WhyChooseOurSerivces
        title="Why Choose Ziostech AI Integration Services"
        subtitle="Partner with Ziostech Solutions to transform your business using intelligent automation, NLP, and AI-driven innovation."
        features={[
          {
            id: 1,
            title: "Expert AI and NLP Developers",
            short:
              "A skilled team with deep expertise in artificial intelligence, machine learning, and smart bot development.",
            badges: ["AI", "NLP", "Automation"],
          },
          {
            id: 2,
            title: "Custom-Built Solutions",
            short:
              "We design and deploy AI bots and automation tools tailored to your business goals and workflows.",
            badges: ["Tailored", "Workflow-Ready"],
          },
          {
            id: 3,
            title: "Enhanced User Engagement",
            short:
              "Boost customer satisfaction and retention with AI-driven interactions that feel natural and intelligent.",
            badges: ["User Experience", "Engagement"],
          },
          {
            id: 4,
            title: "Scalable and Secure Framework",
            short:
              "Our AI systems are built with enterprise-grade security and scalability for long-term growth.",
            badges: ["Secure", "Scalable"],
          },
          {
            id: 5,
            title: "Transparent and Affordable Pricing",
            short:
              "We deliver powerful automation solutions designed to fit your business size and budget.",
            badges: ["Affordable", "Transparent"],
          },
        ]}
      />
      <KeyFeatures
        heading="Benefits of Choosing Ziostech Ai Integration Services"
        benefits={SmartBotBenefits}
      />
      <FAQ faqs={SmartBotFAQ} />
    </>
  );
}
