"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    "IT Staffing and Consulting",
    "Platform Services",
    "Web & App Development",
    "CMS and E-commerce Platforms",
    "Cloud Services",
    "UI/UX Design",
    "Testing Services",
    "Big Data and DataOps",
    "AI Integration and Data Visualization",
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
              Our team of passionate technologists, designers, and strategists
              brings deep expertise across IT staffing, consulting, cloud
              computing, AI integration, and full-stack digital platforms.
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
              To transform ideas into impactful digital realities. We empower
              businesses through technology innovation, strategic consulting,
              and world-class execution to ensure long-term growth and success.
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
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 mb-8">
            We combine creativity, technology, and strategy to deliver results
            that matter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((srv, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full text-sm font-medium border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-[#111]/60 hover:border-blue-500 dark:hover:border-orange-500 transition-colors"
              >
                {srv}
              </span>
            ))}
          </div>
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
              We don’t just build solutions — we build relationships. Our
              customer-centric approach ensures every project aligns with your
              vision and business goals. With a proven record of innovation and
              excellence, Ziostech Solutions stands as your trusted partner in
              digital transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
