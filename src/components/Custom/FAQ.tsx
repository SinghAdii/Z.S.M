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

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FAQItem[];
  topic?: string;
  title?: string;
  description?: string;
}

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

export default function FaqSection({
  faqs = [],
  topic = "FAQs",
  title = "Frequently Asked Questions",
  description = "Answers to the most common questions about our services, technologies, and engagement models.",
}: FaqSectionProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Sectionheading
            topic={topic}
            title={title}
            description={description}
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
