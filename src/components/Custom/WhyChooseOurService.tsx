"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Feature = {
  id: number;
  title: string;
  short: string;
  badges?: string[];
};

interface WhyChooseServicesSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  features?: Feature[];
}

export default function WhyChooseServicesSection({
  title = "Why Choose Our Web & App Development Services",
  subtitle = "We build scalable, high-performance, and SEO-friendly solutions tailored to your business model.",
  ctaPrimary = "Contact Sales",
  ctaSecondary = "View Projects",
  features = [
    {
      id: 1,
      title: "Custom Solutions",
      short: "Tailored custom software development to fit your business model.",
      badges: ["Tailored", "Business-Ready"],
    },
    {
      id: 2,
      title: "Scalable Architecture",
      short: "Designed for future growth without costly rebuilds.",
      badges: ["Future-Proof", "High Availability"],
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      short: "Build once, deploy seamlessly on multiple platforms.",
      badges: ["Web", "Mobile", "Cloud"],
    },
    {
      id: 4,
      title: "Faster Time to Market",
      short:
        "Agile delivery approach for quick launches and continuous iterations.",
      badges: ["Agile", "Rapid Delivery"],
    },
    {
      id: 5,
      title: "SEO & Performance Optimized",
      short:
        "High speed, responsive, and search-engine-friendly digital experiences.",
      badges: ["SEO", "Performance"],
    },
    {
      id: 6,
      title: "End-to-End Support",
      short:
        "From ideation to maintenance, we handle every stage of your product lifecycle.",
      badges: ["Full Lifecycle", "Support"],
    },
  ],
}: WhyChooseServicesSectionProps) {
  const router = useRouter();

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative py-16 sm:py-24 lg:py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2
              id="why-choose-heading"
              className="text-2xl sm:text-3xl leading-tight text-orange-500 dark:text-blue-500"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {(ctaPrimary || ctaSecondary) && (
            <div className="flex items-center gap-3">
              {ctaPrimary && (
                <Button
                  onClick={() => router.push("#contact-section")}
                  size="lg"
                  aria-label={ctaPrimary}
                  className="rounded-full bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg hover:opacity-95 cursor-pointer"
                >
                  {ctaPrimary}
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  onClick={() => router.push("/pages/projects")}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-slate-200 dark:border-slate-700 cursor-pointer"
                >
                  {ctaSecondary}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <Card className="h-full bg-background border border-slate-100 dark:border-white/20 backdrop-blur-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="py-4">
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
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {feature.short}
                      </p>

                      {feature.badges && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {feature.badges.map((badge) => (
                            <Badge
                              key={badge}
                              className="px-3 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-muted/40 dark:bg-muted/30"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Optional Transformation Callout */}
        <div className="mt-10">
          <div className="rounded-xl border border-slate-100 dark:border-white/20 bg-gradient-to-r from-white/40 dark:from-slate-800/40 to-transparent p-6 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold capitalize text-slate-900 dark:text-slate-100">
                We deliver transformation
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                Our engagements are outcome driven we align technology with your
                KPIs and build for measurable growth, resilience, and speed to
                market.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Button
                onClick={() => router.push("#contact-section")}
                className="rounded-full bg-transparent border text-black dark:text-white hover:text-white dark:hover:text-black border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                Talk to an expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
