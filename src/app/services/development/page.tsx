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
import { devHero } from "@/assets/services-hero-images/service-images-exports.js";
import {
  Devbenefits,
  DevelopmentFAQ,
  developmentSteps,
  developmentTechStack,
  DevServices,
  IntroDevfeatures,
} from "@/components/Custom/Data";

export default function Development() {
  return (
    <>
      <Herosection
        heroImage={devHero}
        titlePrefix="We Design And"
        words={["Develop", "Engineer", "Craft", "Deliver"]}
        titlesuffix="High-Impact"
        highlightText="Software Solutions"
        subtitle="Empower your business with top notch development solutions, including web and mobile applications. Build seamless digital experiences with modern technologies."
        wordColors={[
          "text-blue-500",
          "text-orange-500",
          "text-blue-500",
          "text-orange-500",
        ]}
        isPrimaryButton={true}
        isSecondaryButton={false}
        primaryButtonIcon={<FaPhoneAlt />}
        primaryButtonText="Contact Us"
        features={[
          "Custom Web & App Development",
          "Cloud-Ready Scalable Solutions",
          "Modern UI/UX Design Systems",
          "End-to-End Product Engineering",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <IntroductionSection
        title="Result Driven Website and App Development Services"
        rightTitle="to Power Your Business"
        subtitle="At ZiosTech Solutions, we deliver high performing web and mobile application development services that help businesses grow faster and smarter. Whether you need a robust eCommerce platform, a custom mobile app, or enterprise grade software, our expert team ensures flawless execution from concept to launch. As a trusted website and app development company, we create digital products that are secure, user friendly, and designed to evolve with your business. With expertise in custom software development and cross platform app creation, ZiosTech ensures that every digital product performs seamlessly across devices and environments."
        features={IntroDevfeatures}
      />
      <Services services={DevServices} />
      <Process
        steps={developmentSteps}
        headingText="Our Development Process"
        subHeadingText="A proven, end-to-end approach that transforms ideas into world class software"
        topic="Development Process"
        tagline=" From Idea to Launch We Handle Everything"
      />
      <TechLogoDisplay
        topic="Development"
        title="Technologies We Use"
        description="Our development process uses modern, scalable, and high-performance tools for web and mobile applications."
        techStacks={developmentTechStack}
      />
      <WhyChooseOurSerivces />
      <KeyFeatures
        benefits={Devbenefits}
        heading="Key Features of Choosing ZiosTech Website and App Development"
        intro="Partnering with ZiosTech means gaining a digital partner committed to your success:"
      />
      <FAQ faqs={DevelopmentFAQ} />
    </>
  );
}
