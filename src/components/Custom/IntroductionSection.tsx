"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, Users, BarChart } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  text: string;
}

interface UiUxIntroProps {
  title?: string;
  rightTitle?: string;
  subtitle?: string;
  features?: Feature[];
}

export default function UiUxIntroRedesigned({
  title = "UI/UX Designing and Consulting Services",
  rightTitle = "Transform Digital Experiences and Drive Business Growth",
  subtitle = "At Ziostech Solution, we blend creativity, research, and strategy to deliver innovative UI/UX design and consulting services that help businesses elevate their digital presence. Whether you’re building a new platform or redesigning an existing one, our goal is to create intuitive, visually appealing, and high-performing products that connect meaningfully with users.",
  features = [
    {
      icon: PenTool,
      title: "Human-Centered Design",
      text: "We go beyond visuals, focusing on human behavior and market dynamics to build intuitive products.",
    },
    {
      icon: Users,
      title: "User-Focused Research",
      text: "Our process is built on understanding your users, ensuring higher satisfaction and retention.",
    },
    {
      icon: BarChart,
      title: "Business-Driven Results",
      text: "We align every design element with your business goals to strengthen your brand and deliver measurable impact.",
    },
  ],
}: UiUxIntroProps) {
  const parentTransition = { staggerChildren: 0.12, ease: "easeOut" as const };
  const itemTransition = { duration: 0.55, ease: "easeOut" as const };

  return (
    <section
      className="relative py-24 md:py-32 
      bg-gradient-to-b from-white via-neutral-50 to-neutral-100 
      dark:from-[#0b0c10] dark:via-[#0f141b] dark:to-[#101820]
      overflow-hidden"
    >
      {/* background glow */}
      <div
        className="absolute left-1/2 top-0 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-gradient-to-br from-orange-100/40 to-blue-100/40 blur-[120px]
          dark:from-orange-900/20 dark:to-blue-900/20"
        aria-hidden="true"
      />

      <motion.div
        className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: parentTransition }}
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: main pitch */}
          <motion.div
            className="max-w-xl space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: itemTransition }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl leading-tight tracking-tight text-slate-900 dark:text-white">
              <span className="block capitalize text-blue-500 dark:text-orange-500">
                {title}
              </span>
              {rightTitle ? (
                <span className="block mt-2 capitalize md:text-2xl text-xl text-slate-900 dark:text-white dark:font-light">
                  {rightTitle}
                </span>
              ) : null}
            </h1>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed dark:font-light"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ...itemTransition, delay: 0.06 },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          {/* RIGHT: key value props */}
          <div>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { ...itemTransition, delay: i * 0.06 },
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div
                    className="flex-shrink-0 rounded-lg p-3 shadow-sm dark:shadow-white/10"
                    aria-hidden="true"
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg
                        bg-orange-100 dark:bg-blue-900/30 p-2"
                    >
                      <Icon className="h-5 w-5 text-orange-500 dark:text-blue-400" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-base text-slate-600 dark:text-slate-300">
                      {f.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
