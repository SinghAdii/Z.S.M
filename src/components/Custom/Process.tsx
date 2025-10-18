"use client";

import { motion } from "framer-motion";
import { TracingBeam } from "../ui/tracing-beam";
import SectionHeading from "./Sectionheading";
import React from "react";
import { ChartNoAxesCombined } from "lucide-react";

interface Step {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

interface Props {
  steps: Step[];
  headingText: string;
  subHeadingText: string;
  topic: string;
  tagline?: string;
  tagicon?: React.ReactNode;
}

export default function DevelopmentProcess({
  steps,
  headingText,
  subHeadingText,
  topic,
  tagline,
  tagicon,
}: Props) {
  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-orange-500/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="mb-10">
          <SectionHeading
            topic={topic}
            title={headingText}
            description={subHeadingText}
          />
        </div>

        {/* Timeline with Cards */}
        <TracingBeam className="px-6">
          <div className="space-y-20 max-md:w-fit max-md:ml-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="group relative bg-gradient-to-r from-white/70 to-white/60 dark:from-gray-900/80 dark:to-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <div className="w-16 h-[3px] bg-gradient-to-r from-orange-500 to-blue-500 rounded-full" />
                      </div>
                      <div className="p-3 rounded-full bg-white/60 dark:bg-gray-800/60 shadow-md backdrop-blur-sm">
                        {step.icon}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-gray-700 dark:text-gray-300 space-y-2">
                      {step.description}
                    </div>
                  </div>

                  {/* Soft Glow Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 bg-gradient-to-r from-orange-500/40 to-blue-500/40 blur-2xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>

        {/* Final Tagline */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-orange-500 to-blue-500">
            <div className="flex items-center gap-2 rounded-full bg-white dark:bg-gray-950 px-6 py-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              <div>
                {tagicon || <ChartNoAxesCombined className="text-orange-500" />}
              </div>
              <div className="capitalize">{tagline}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}