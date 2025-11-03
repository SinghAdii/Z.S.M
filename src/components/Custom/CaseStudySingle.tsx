"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Info,
  Target,
  AlertTriangle,
  Wand2,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { TracingBeam } from "../ui/tracing-beam";

export default function CaseStudy({
  project,
  overview,
  goal,
  challenges,
  solution,
  testimonial,
  id,
}: {
  project: {
    title: string;
    domain?: string;
    imgSrc: string;
    href?: string;
  };
  overview: string;
  goal: string;
  challenges: string[];
  solution: string[];
  testimonial?: {
    img: string;
    name: string;
    title: string;
    quote: string;
  };
  id?: string;
}) {
  const ContentCard = ({
    icon: Icon,
    title,
    children,
    delay = 0,
  }: {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/40 p-6 md:p-8 shadow-lg backdrop-blur-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-blue-500 dark:text-orange-400 border border-black/5 dark:border-white/10">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <div className="pl-14">{children}</div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-24 border-b border-black/5 dark:border-white/10 scroll-mt-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-blue-500/5 blur-3xl pointer-events-none" />

      <div
        className="max-w-7xl mx-auto px-6 max-md:pl-6 max-md:pr-1 lg:px-10 relative"
        id={id}
      >
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-start">
          {/* LEFT SIDE (Image + Info) */}
          <div className="relative">
            <div className="lg:sticky lg:top-24 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-gray-900/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm">
              <div className="p-6 pb-2">
                <h4 className="text-sm uppercase tracking-wider text-orange-400 font-semibold mb-1">
                  {project.domain ?? "Web Application"}
                </h4>
                <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
                  {project.title}
                </h2>
              </div>
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
                priority
              />
              {project.href && (
                <div className="p-6">
                  <Button
                    size="lg"
                    className="w-32 text-white bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 rounded-full group cursor-pointer"
                    onClick={() => window.open(project.href, "_blank")}
                  >
                    Visit Live
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* MIDDLE SPACER */}
          <div className="hidden lg:flex justify-center"></div>

          {/* RIGHT SIDE (Tracing Beam + Details) */}
          <TracingBeam
            key={project.title}
            className="px-6 max-md:pr-1 max-md:pl-6"
          >
            <div className="space-y-5 relative max-md:ml-5 max-md:mr-1">
              {/* Overview */}
              <ContentCard icon={Info} title="Project Overview">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {overview}
                </p>
              </ContentCard>

              {/* Goal */}
              <ContentCard icon={Target} title="Primary Goal" delay={0.1}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {goal}
                </p>
              </ContentCard>

              {/* Challenges */}
              <ContentCard icon={AlertTriangle} title="Challenges" delay={0.2}>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {challenges.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </ContentCard>

              {/* Solution */}
              <ContentCard icon={Wand2} title="Our Solution" delay={0.3}>
                <div className="grid grid-cols-1 gap-4 text-gray-700 dark:text-gray-300">
                  {solution.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg border border-black/5 dark:border-white/10"
                    >
                      <div className="flex-shrink-0 w-8 h-8 grid place-items-center bg-gradient-to-br from-blue-500 to-orange-500 text-white font-bold rounded-full text-sm">
                        {i + 1}
                      </div>
                      <p className="text-sm leading-6">{pt}</p>
                    </div>
                  ))}
                </div>
              </ContentCard>

              {/* Testimonial */}
              {testimonial && (
                <ContentCard
                  icon={MessageSquare}
                  title="Client Testimonial"
                  delay={0.4}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-14 h-14 relative rounded-full overflow-hidden flex-shrink-0 ring-2 ring-orange-400/50">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="italic text-gray-700 dark:text-gray-300 border-l-4 border-orange-500/50 pl-4">
                        “{testimonial.quote}”
                      </p>
                      <div className="mt-4 text-right">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </ContentCard>
              )}
            </div>
          </TracingBeam>
        </div>
      </div>
    </section>
  );
}
