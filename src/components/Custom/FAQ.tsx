"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Sectionheading from "./Sectionheading";
import { CircleCheck } from "lucide-react";

export const faqs = [
  {
    question: "What services does Ziostech Solution provide?",
    answer: `Ziostech Solution offers a complete range of IT consulting, staffing, and technology services designed to help businesses innovate and scale.
Our key offerings include Platform Services, Web & App Development, CMS and E-commerce Solutions, Cloud Services, UI/UX Design, Testing, Big Data Services, Data Visualization, DataOps, and AI Integration.
We also provide custom software development and end-to-end digital transformation consulting for enterprises and startups.`,
  },
  {
    question: "What kind of software solutions can Ziostech Solution build?",
    answer: `We build custom software solutions tailored to meet your business needs from web applications, mobile apps, and enterprise platforms to AI-powered tools and cloud-based systems.
Whether you need an e-commerce platform, data analytics dashboard, or workflow automation system, our team can design, develop, and deploy scalable solutions using the latest technologies.`,
  },
  {
    question: "What industries does Ziostech Solution specialize in?",
    answer: `Ziostech Solution works across a diverse range of industries, including:
* Information Technology and Software
* Finance and Banking
* Retail and E-commerce
* Healthcare
* Manufacturing
* Education and Training
* Startups and SMEs
Our flexible approach allows us to adapt our services to any industry’s unique challenges and requirements.`,
  },
  {
    question: "How do you ensure quality, security, and compliance?",
    answer: `At Ziostech Solution, quality and security are at the core of everything we do.
We follow agile development practices, continuous testing, and code review processes to ensure high-quality delivery.
For security, we adhere to industry standards like ISO, GDPR, and OWASP guidelines.
Every solution we build undergoes rigorous performance, vulnerability, and compliance checks to protect your data and meet global standards.`,
  },
  {
    question: "What technologies and tools do you work with?",
    answer: `Our team works with a wide range of modern technologies and frameworks, including:
* Frontend: React, Angular, Vue.js
* Backend: Node.js, Python, Java, .NET
* Mobile: Flutter, React Native, Kotlin, Swift
* Cloud: AWS, Azure, Google Cloud
* Databases: MySQL, MongoDB, PostgreSQL, Firebase
* Big Data & AI: Hadoop, Spark, TensorFlow, Power BI
We choose the tech stack based on your project’s goals, scalability needs, and long-term vision.`,
  },
  {
    question: "What are the engagement models available for businesses?",
    answer: `Ziostech Solution offers flexible engagement and collaboration models to suit every business type:
* Dedicated Team Model: Hire a full-time development team for ongoing projects.
* Fixed-Price Model: Ideal for clearly defined projects with set timelines and budgets.
* Time & Material Model: Pay based on actual work hours and evolving requirements.
* Staff Augmentation: Expand your internal team with skilled IT professionals on demand.`,
  },
  {
    question: "Why should you choose Ziostech Solution?",
    answer: `You should choose Ziostech Solution because we combine innovation, expertise, and reliability to deliver results that matter.
* We provide end-to-end IT consulting and development services
* We have a skilled team of certified engineers and designers
* We ensure quality, scalability, and security in every project
* We focus on long-term partnerships and measurable outcomes
With us, your business gets the right technology foundation to grow and lead.`,
  },
  {
    question: "Do you assist with software integration and data migration?",
    answer: `Yes, absolutely. We specialize in software integration and data migration services to help businesses modernize smoothly.
Whether you’re moving from legacy systems to the cloud, integrating new tools into existing workflows, or consolidating data across platforms, our team ensures zero downtime, full compatibility, and data security.`,
  },
  {
    question: "What’s your approach to developing mobile apps and software?",
    answer: `Our approach follows a strategic and agile development process:
* Requirement Analysis & Planning
* UI/UX Design and Wireframing
* Development & Integration
* Testing and Quality Assurance
* Deployment and Continuous Support
We prioritize user experience, performance, and scalability at every step, ensuring your product succeeds in the real world.`,
  },
  {
    question: "Do you offer app maintenance and support services?",
    answer: `Yes. Ziostech Solution provides ongoing maintenance and post-launch support to ensure your applications remain secure, updated, and high-performing.
Our support includes bug fixes, performance optimization, system upgrades, and feature enhancements so your business continues running smoothly without interruption.`,
  },
];

function renderAnswer(answer: string) {
  return answer.split("\n").map((line, idx) => {
    line = line.trim();
    if (line.startsWith("* ")) {
      const text = line.replace("* ", "");
      return (
        <div key={idx} className="flex items-start gap-2 mb-2">
          <CircleCheck className="w-4 h-4 mt-1 text-blue-500 dark:text-orange-500 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {text}
          </p>
        </div>
      );
    } else if (line !== "") {
      return (
        <p
          key={idx}
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2"
        >
          {line}
        </p>
      );
    }
    return null;
  });
}

export default function FaqSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Sectionheading
            topic="FAQs"
            title="Frequently Asked Questions"
            description="Answers to the most common questions about our services, technologies, and engagement models."
          />
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl transition cursor-pointer no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                {renderAnswer(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
