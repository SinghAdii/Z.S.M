"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Feature = {
  title: string;
  short: string;
  id: number;
};

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "End-to-End Digital Expertise",
    short: "From discovery to deployment we craft full lifecycle solutions.",
  },
  {
    id: 2,
    title: "Experienced IT Consultants & Engineers",
    short:
      "Seasoned teams that blend domain knowledge with engineering excellence.",
  },
  {
    id: 3,
    title: "Scalable, Secure, and Future-Ready Solutions",
    short: "Built with security first architecture and horizontal scalability.",
  },
  {
    id: 4,
    title: "Focus on Innovation and Business Value",
    short: "We prioritize measurable impact not just shiny tech.",
  },
  {
    id: 5,
    title: "Proven Track Record Across Industries",
    short: "Verified deliveries across Finance, Healthcare, Retail and more.",
  },
  {
    id: 6,
    title: "Client Centric Partnership for Long Term Growth",
    short:
      "Beyond project delivery, we collaborate as technology partners ensuring sustained success and innovation for your business.",
  },
];

const INDUSTRIES = [
  "Information Technology",
  "Finance & Banking",
  "Retail & E-commerce",
  "Healthcare",
  "Manufacturing",
  "Education",
  "Startups & Enterprises",
];

export default function WhyChooseAndIndustriesEnhanced() {
  const navigate = useRouter();
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative py-16 sm:py-24 lg:py-28 px-6"
    >
      {/* Container */}
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2
              id="why-choose-heading"
              className="text-3xl sm:text-4xl leading-tight text-slate-900 dark:text-slate-100"
            >
              Why Choose{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Ziostech Solution
              </span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-xl">
              We don’t just deliver technology we deliver{" "}
              <span className="font-semibold capitalize text-orange-500">
                transformation
              </span>
              . Our focus is measurable business value, secure architectures,
              and scalable products.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate.push("#contact-section")}
              size="lg"
              aria-label="Contact sales"
              className="rounded-full cursor-pointer bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg ring-0 hover:opacity-95"
            >
              Contact Sales
            </Button>
            <Button
              onClick={() => navigate.push("/pages/projects")}
              variant="outline"
              size="lg"
              className="rounded-full cursor-pointer border-slate-200 dark:border-slate-700"
            >
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <Card className="h-full bg-background border border-slate-100 dark:border-white/20 backdrop-blur-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="py-2">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-lg grid place-items-center shadow-sm",
                        "bg-gradient-to-br from-white/60 dark:from-slate-700/30 to-transparent",
                        "border border-slate-100 dark:border-white/20"
                      )}
                      aria-hidden
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900">
                        <Check className="w-4 h-4 text-blue-500 dark:text-orange-500" />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {f.short}
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <Badge className="px-3 py-1 text-xs rounded-full text-black dark:text-white bg-muted/40 dark:bg-muted/30">
                          Trusted
                        </Badge>
                        <Badge className="px-3 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-700">
                          Enterprise
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Transformation callout */}
        <div className="mt-10">
          <div className="rounded-xl border border-slate-100 dark:border-white/20 bg-gradient-to-r from-white/40 dark:from-slate-800/40 to-transparent p-6 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold capitalize text-slate-900 dark:text-slate-100">
                We deliver transformation
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                Our engagements are outcome driven we align technology with your
                KPIs and build for measurable growth, resilience and speed to
                market.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Button
                onClick={() => navigate.push("#contact-section")}
                className="rounded-full bg-transparent border text-black dark:text-white hover:text-white dark:hover:text-black cursor-pointer border-slate-200 dark:border-slate-700"
              >
                Talk to an expert
              </Button>
            </div>
          </div>
        </div>

        {/* Industries */}
        <Separator className="my-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Industries We Serve
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-md">
              We bring domain specific solutions and toolkits built from
              experience across multiple sectors. Below are just a few areas
              where our teams deliver impact.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {INDUSTRIES.map((ind, idx) => (
                <motion.div
                  key={ind}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:dark:border-white/20 bg-white/50 dark:bg-slate-800/50 hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-md grid place-items-center bg-gradient-to-br from-white/60 dark:from-slate-700/30">
                      <span className="w-6 h-6 inline-grid place-items-center rounded-md bg-slate-100 dark:bg-slate-900 text-orange-500 dark:text-orange-500 font-semibold text-xs">
                        {idx + 1}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {ind}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
