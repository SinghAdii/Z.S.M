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
  cmsSteps,
  cmsTechStack,
  EcommerceBenefits,
  EcommerceFAQ,
  EcommerceServices,
  IntroEcommerceFeatures,
} from "@/components/Custom/Data";
import { cmsHero } from "@/assets/services-hero-images/service-images-exports.js";

export default function CMSEcommerce() {
  return (
    <>
      <Herosection
        heroImage={cmsHero}
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
      <IntroductionSection
        title=" Scalable E-Commerce Platforms for Modern Businesses"
        features={IntroEcommerceFeatures}
        subtitle="In today’s digital-first world, customers expect seamless and secure shopping experiences across every device. Many businesses face challenges with outdated systems, slow websites, and limited integrations that reduce sales and customer satisfaction.
At ZiosTech Solutions, we help businesses overcome these challenges with powerful E-Commerce Platforms and Software-as-a-Service (SaaS) solutions. Our expert team builds fast, secure, and scalable online stores that boost engagement, conversions, and growth. If you need a simple retail site or a full-scale multi-vendor marketplace."
      />
      <Services services={EcommerceServices} />
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
      <WhyChooseOurSerivces
        title="Why Choose Our ZiosTech E-Commerce Services"
        subtitle="Businesses across industries trust ZiosTech because we bring innovation, expertise, and reliability to every e-commerce project."
        features={[
          {
            id: 1,
            title: "End-to-End Development Expertise",
            short:
              "We handle every stage from strategy and design to deployment and maintenance for seamless project execution.",
            badges: ["Full Stack", "Expert Team"],
          },
          {
            id: 2,
            title: "Tailored E-Commerce Software",
            short:
              "Custom-built solutions designed around your unique business model and target audience.",
            badges: ["Custom", "Business-Ready"],
          },
          {
            id: 3,
            title: "Mobile-First and Cross-Platform Compatibility",
            short:
              "Deliver a smooth, responsive shopping experience on all devices and platforms.",
            badges: ["Responsive", "Cross-Platform"],
          },
          {
            id: 4,
            title: "Secure, Scalable, and SEO-Optimized Solutions",
            short:
              "High-performance architecture ensuring top security, scalability, and visibility on search engines.",
            badges: ["Secure", "SEO Optimized"],
          },
          {
            id: 5,
            title: "Seamless Integrations",
            short:
              "Integrate smoothly with CRMs, ERPs, and payment gateways for unified business operations.",
            badges: ["Integration", "Automation"],
          },
          {
            id: 6,
            title: "Transparent Communication & Timely Delivery",
            short:
              "Stay informed at every step with agile workflows and on-schedule project completion.",
            badges: ["Agile", "Reliable Delivery"],
          },
        ]}
      />
      <KeyFeatures
        benefits={EcommerceBenefits}
        heading=" Benefits of Choosing ZiosTech E-Commerce Services"
        intro="Partnering with ZiosTech means getting more than just a website. It means unlocking sustainable digital growth"
      />
      <FAQ faqs={EcommerceFAQ} />
    </>
  );
}
