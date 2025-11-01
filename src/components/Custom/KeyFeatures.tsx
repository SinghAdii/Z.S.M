"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "./Sectionheading";

interface Benefit {
  title: string;
  description: string;
}

interface KeyBenefitsSectionSplitProps {
  heading?: string;
  intro?: string;
  benefits?: Benefit[];
  accentColor?: "orange" | "blue" | "emerald" | "violet";
}

export default function KeyBenefitsSectionSplit({
  heading = "Key Benefits of Choosing Ziostech Solution for UI UX Designing Services",
  intro = "Partnering with Ziostech Solution gives your business a strategic design advantage:",
  benefits = [
    {
      title: "Human-Centered Approach",
      description:
        "Every design decision is informed by empathy and user insight.",
    },
    {
      title: "Increased Conversion and Retention",
      description:
        "Well-designed interfaces reduce drop-offs and enhance engagement.",
    },
    {
      title: "Brand Consistency Across Platforms",
      description: "Unified visuals across web and mobile touchpoints.",
    },
    {
      title: "Faster Development Cycles",
      description:
        "Our design systems accelerate production and reduce rework.",
    },
    {
      title: "Scalable and Future-Ready Designs",
      description: "Optimized for adaptability and long-term performance.",
    },
    {
      title: "Improved Accessibility",
      description:
        "We ensure designs are inclusive and compliant with modern accessibility standards.",
    },
  ],
  accentColor = "orange",
}: KeyBenefitsSectionSplitProps) {
  const colorClasses = {
    orange: "text-orange-500 dark:text-orange-400 bg-orange-500/10",
    blue: "text-blue-500 dark:text-blue-400 bg-blue-500/10",
    emerald: "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10",
    violet: "text-violet-500 dark:text-violet-400 bg-violet-500/10",
  }[accentColor];

  const itemTransition = { duration: 0.5, ease: "easeOut" as const };
  const firstHalf = benefits.slice(0, 4);
  const secondHalf = benefits.slice(4);

  const renderBenefitList = (items: Benefit[], delayOffset = 0) => (
    <motion.ul
      className="relative space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300/40 to-transparent dark:via-slate-600/40" />
      {items.map((benefit, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ...itemTransition,
              delay: (index + delayOffset) * 0.1,
            },
          }}
          viewport={{ once: true }}
          className="relative flex gap-6 items-start"
        >
          <div
            className={cn(
              "relative z-10 flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 shadow-md backdrop-blur-sm",
              colorClasses
            )}
          >
            <CircleCheck className={cn("w-5 h-5", colorClasses)} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              {benefit.title}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 dark:from-[#0b0c10] dark:via-[#0f141b] dark:to-[#101820] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: itemTransition }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <SectionHeading
            topic="Key Features"
            title={heading}
            description={intro}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>{renderBenefitList(firstHalf)}</div>
          {secondHalf.length > 0 && (
            <div>{renderBenefitList(secondHalf, 4)}</div>
          )}
        </div>
      </div>
    </section>
  );
}
