"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AboutCompanySection() {
  const coreValues = [
    {
      title: "Innovation",
      desc: "We constantly evolve and innovate to stay ahead of the curve.",
    },
    {
      title: "Integrity",
      desc: "We build trust through transparency, reliability, and commitment.",
    },
    {
      title: "Collaboration",
      desc: "We believe great results come from strong partnerships.",
    },
    {
      title: "Excellence",
      desc: "We deliver high-quality solutions that exceed expectations.",
    },
    { title: "Customer Success", desc: "Your success defines our success." },
  ];

  const services = [
    "IT Staffing and Consulting -> Skilled technology talent for your growth.",
    "Platform Services -> Complete digital development and deployment.",
    "Web & App Development -> Custom, scalable digital solutions.",
    "CMS and E-commerce Platforms -> Secure, intuitive online platforms.",
    "Cloud Services -> Agile and scalable cloud transformation.",
    "UI/UX Design -> Intuitive and visually appealing experiences.",
    "Testing Services -> Reliability, security, and seamless performance.",
    "Big Data and DataOps -> Transform data into actionable insights.",
    "AI Integration and Data Visualization -> Intelligent automation for smarter decisions.",
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0a0a0a] text-slate-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* === ABOUT HEADING === */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-orange-500">Ziostech solutions</span>
          </h2>
          <Separator className="mx-auto my-6 w-20 bg-blue-500 h-[2px]" />
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            At{" "}
            <span className="font-semibold text-orange-500">
              Ziostech solutions
            </span>
            , we believe technology should empower businesses to grow smarter,
            faster, and stronger. We’re not just a service provider — we are
            your
            <span className="text-blue-500 font-medium">
              {" "}
              digital transformation partner
            </span>
            , committed to building scalable, secure, and intelligent solutions
            that drive measurable results.
          </p>
        </div>

        {/* === WHO WE ARE === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Ziostech solutions is a forward-thinking IT consulting and
              technology services company dedicated to helping organizations
              harness the full potential of digital innovation. From startups to
              global enterprises, we design and deliver tailored solutions that
              enhance efficiency, optimize performance, and create sustainable
              business value.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our team of passionate technologists, designers, and strategists bring together deep expertise across multiple domains, from IT staffing and consulting to end-to-end platform services like web and app development, cloud computing, AI integration, and data-driven intelligence.
            </p>
          </div>
          <Card className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-md">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-semibold mb-2 text-blue-500">
                Our Philosophy
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                We combine creativity, strategy, and technology to empower
                businesses with transformative digital solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* === MISSION & VISION === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          <Card className="p-8 bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 hover:shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Our mission is simple: to transform ideas into impactful digital realities. We strive to empower businesses through technology innovation, strategic consulting, and world-class execution that ensures long-term growth and success.

            </p>
          </Card>

          <Card className="p-8 bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 hover:shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-2xl font-bold text-blue-500 mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To become a global leader in delivering intelligent, scalable, and
              future-ready digital solutions, setting new benchmarks for
              excellence in the IT industry.
            </p>
          </Card>
        </motion.div>

        {/* === CORE VALUES === */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <h4
                      className={cn(
                        "text-xl font-semibold mb-2",
                        i % 2 === 0 ? "text-orange-500" : "text-blue-500"
                      )}
                    >
                      {val.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === WHAT WE DO === */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">What We Do</h3>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 mb-10">
            We combine creativity, technology, and strategy to deliver results
            that matter.
          </p>
          <TooltipProvider delayDuration={200}>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((srv, i) => {
                const [title, description] = srv.split(" -> ").map(s => s.trim());
                return (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <button
                        className={cn(
                          "px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out",
                          "border-2 bg-white dark:bg-[#111] border-slate-300 dark:border-slate-700",
                          "text-slate-700 dark:text-slate-300",
                          "hover:border-orange-500 dark:hover:border-blue-500 hover:bg-orange-50 dark:hover:bg-blue-500/10",
                          "hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        )}
                      >
                        {title}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      sideOffset={12}
                      className="rounded-xl border-2 border-orange-500 bg-orange-500 text-white p-0 shadow-xl"
                    >
                      <div className="px-4 py-3 max-w-xs">
                        <p className="text-sm font-medium leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </div>

        {/* === WHY CHOOSE US === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 p-[2px] rounded-3xl"
        >
          <div className="bg-white dark:bg-[#0c0c0c] rounded-3xl p-10 md:p-16 text-center border border-slate-200 dark:border-white/10">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
              Why Choose Us
            </h3>
            <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
              We don’t just build solutions we build relationships. Our customer-centric approach ensures every project aligns with your vision, business goals, and technical requirements. With a proven record of innovation and excellence, Ziostech Solution stands as a trusted partner in your digital journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
