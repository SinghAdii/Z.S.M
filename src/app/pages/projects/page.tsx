import { Hero_Section_Image } from "@/assets/images/images.export";
import {
  CaseStudy,
  ContactUs,
  Herosection,
  Testimonials,
} from "@/components/Custom/custom_components.exports";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function page() {
  return (
    <>
      <div className="mt-20 py-10">
        <Herosection
          heroImage={Hero_Section_Image}
          titlePrefix="Our Expertise In"
          words={[
            "Web Development",
            "Mobile Apps",
            "Cloud Solutions",
            "UI/UX Design",
          ]}
          titlesuffix="Delivered With"
          highlightText="Excellence"
          subtitle="Explore our portfolio of high-impact software solutions crafted for clients across industries. From innovative startups to enterprise grade applications, we bring ideas to life with modern technologies and seamless execution."
          wordColors={[
            "text-green-500",
            "text-purple-500",
            "text-green-500",
            "text-purple-500",
          ]}
          isPrimaryButton={true}
          isSecondaryButton={false}
          primaryButtonIcon={<FaArrowRight />}
          primaryButtonText="Contact Us"
          primaryhref="#contact-section"
          features={[
            "Custom Software Development",
            "Scalable Web & Mobile Apps",
            "Modern Design & UX Systems",
            "End-to-End Project Delivery",
          ]}
          headingClassName="md:text-4xl text-3xl"
        />
      </div>
      <CaseStudy />
      <Testimonials />
      <ContactUs />
    </>
  );
}
