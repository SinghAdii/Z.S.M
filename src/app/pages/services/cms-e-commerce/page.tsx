"use client";
import React from "react";
import {
  Herosection,
  Process,
  TechLogoDisplay,
} from "@/components/Custom/custom_components.exports";
import { FaPhoneAlt } from "react-icons/fa";
import { Hero_Section_Image } from "@/assets/images/images.export";
import { cmsSteps, cmsTechStack } from "@/components/Custom/Data";

export default function CMSEcommerce() {
  return (
    <>
      <Herosection
        heroImage={Hero_Section_Image}
        titlePrefix="We Help Brands"
        words={["Build", "Customize", "Optimize", "Grow"]}
        titlesuffix="Scalable"
        highlightText="E-Commerce Experiences"
        subtitle="Manage content and sell effortlessly with robust, scalable CMS and E-Commerce solutions."
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
          "Headless CMS Solutions",
          "Shopify & WooCommerce Stores",
          "Content Analytics & Automation",
          "CRM & Marketing Integrations",
        ]}
        primaryhref="#contact-section"
        headingClassName="md:text-4xl text-3xl"
      />
      <Process
        steps={cmsSteps}
        headingText="Our CMS & E-Commerce Process"
        subHeadingText="Streamlined workflows from content management to conversion optimization."
        topic="CMS & E-Commerce"
        tagline="Content, Commerce & Conversion Combined"
      />
      <TechLogoDisplay
        topic="CMS"
        title="Platforms We Work With"
        description="We leverage the best CMS and E-Commerce tools for performance and flexibility."
        techStacks={cmsTechStack}
      />
    </>
  );
}
