'use client'
import React from "react";
import HeroSection from "../../../components/HeroSection/HeroSection";
import TopNavbar from "../../../components/TopNavbar/TopNavbar";
import AboutSection from "../../../components/AboutSection/AboutSection";
import AnimationNumber from "../../../components/AnimationNumber/AnimationNumber";
import MissionSection from "../../../components/MissionSection/MissionSection";
import Management from "../../../components/Management/Management";
import FooterSection from "../../../components/FooterSection/FooterSection";
import ContactSection from "../../../components/ContactSection/ContactSection";
import aboutHeroSectionImage from "../../../assets/images/aboutHeroSectionImage.png";

const About = () => {
  const heroSectionContent = {
    paragraph:
      "Ziostech Solutions provide specialized IT services and business consulting solutions designed to help companies optimize their technology and drive growth. From designing to software development  end-to-end services that enable businesses to thrive. We ensuring that your businesses or startups are equipped with the right tools to thrive in a digital world for long-term success.",
    normalHeading: "Know more",
    coloredHeading: "About Us",
    image: aboutHeroSectionImage,
  };
  const aboutobj = {
    description:
      "Ziostech Solutions Private Limited offers a comprehensive range of specialized IT services and business consulting solutions tailored to help companies leverage technology effectively and drive sustainable growth. From initial concept and design to full-scale software development, our end-to-end services are designed to empower businesses and startups alike. Whether you are re launching a new venture or optimizing an established company, we provide the tools, expertise, and support necessary to navigate the complexities of the digital landscape. Our commitment ensures that your business is not only positioned to thrive in today’s fast-paced, tech-driven environment but also achieves long-term success through innovative, scalable solutions. ",
  };
  return (
    <>
      <TopNavbar />
      <HeroSection
        paragraph={heroSectionContent.paragraph}
        normalHeading={heroSectionContent.normalHeading}
        coloredHeading={heroSectionContent.coloredHeading}
        image={heroSectionContent.image}
        buttonTitle="Get In Touch"
        showButton={true}
        routePath="/contact"
      />
      <AboutSection obj={aboutobj} />
      <AnimationNumber />
      <MissionSection />
      {/* <Management /> */}
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default About;
