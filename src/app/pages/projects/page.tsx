import { Hero_Section_Image } from "@/assets/images/images.export";
import {
  CaseStudy,
  ContactUs,
  FAQ,
  Herosection,
  Previousworks,
  Testimonials,
  WhyChooseUs,
} from "@/components/Custom/custom_components.exports";
import {
  avniChallenges,
  avniGoal,
  avniOverview,
  avniSolution,
  ektaChallenges,
  ektaGoal,
  ektaOverview,
  ektaSolution,
  fairyChallenges,
  fairyGoal,
  fairyOverview,
  fairySolution,
  homePageFAQ,
  medicityChallenges,
  medicityGoal,
  medicityOverview,
  medicitySolution,
  saurabhChallenges,
  saurabhGoal,
  saurabhOverview,
  saurabhSolution,
  sunriseChallenges,
  sunriseGoal,
  sunriseOverview,
  sunriseSolution,
  testimonialsData,
  works,
} from "@/components/Custom/Data";
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

      <Previousworks works={works} />

      <CaseStudy
        project={works[0]}
        overview={fairyOverview}
        goal={fairyGoal}
        challenges={fairyChallenges}
        solution={fairySolution}
        id="fairy-of-fortune"
      />

      <CaseStudy
        project={works[1]}
        overview={sunriseOverview}
        goal={sunriseGoal}
        challenges={sunriseChallenges}
        solution={sunriseSolution}
        testimonial={testimonialsData[0]}
        id="sunrise-diagnostic-services"
      />

      <CaseStudy
        project={works[2]}
        overview={saurabhOverview}
        goal={saurabhGoal}
        challenges={saurabhChallenges}
        solution={saurabhSolution}
        testimonial={testimonialsData[1]}
        id="saurabh-visionary-ventures"
      />

      {/*  Avni Hospital */}

      <CaseStudy
        project={works[3]}
        overview={avniOverview}
        goal={avniGoal}
        challenges={avniChallenges}
        solution={avniSolution}
        testimonial={testimonialsData[2]}
        id="avni-hospital"
      />

      {/* Ekta Janch Kendra */}

      <CaseStudy
        project={works[4]}
        overview={ektaOverview}
        goal={ektaGoal}
        challenges={ektaChallenges}
        solution={ektaSolution}
        id="ekta-janch-kendra"
      />

      {/*  Medicity Hospital (Unnao) */}

      <CaseStudy
        project={works[5]}
        overview={medicityOverview}
        goal={medicityGoal}
        challenges={medicityChallenges}
        solution={medicitySolution}
        id="medicity-hospital-unnao"
      />

      <WhyChooseUs />
      <Testimonials />
      <FAQ faqs={homePageFAQ} />
      <ContactUs />
    </>
  );
}
