"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { JSX, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  features: { icon: JSX.Element; text: string }[];
  cards: { icon: JSX.Element; title: string; desc: string }[];
  stats: {
    icon: JSX.Element;
    value: number | string;
    suffix?: string;
    label: string;
  }[];
  primaryCta?: string;
  secondaryCta?: string;
  primaryhref?: string;
  secondaryhref?: string;
}

export default function Solutions({
  title,
  description,
  features,
  cards,
  stats,
  primaryCta,
  secondaryCta,
  primaryhref,
  secondaryhref,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const navigate = useRouter();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {title}
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
              {description}
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-orange-400">
                    {feature.icon}
                  </span>
                  <span className="ml-3 capitalize text-zinc-700 dark:text-zinc-200">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Button
                  className="hover:cursor-pointer capitalize"
                  onClick={() => primaryhref && navigate.push(primaryhref)}
                >
                  {primaryCta}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  className="hover:cursor-pointer capitalize"
                  variant="ghost"
                  onClick={() => secondaryhref && navigate.push(secondaryhref)}
                >
                  {secondaryCta}
                </Button>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <Card
                key={i}
                className="p-5 hover:shadow-lg transition-shadow dark:bg-zinc-900"
              >
                <CardHeader className="p-0">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-md bg-indigo-50 dark:bg-indigo-900/20 p-2">
                      {card.icon}
                    </div>
                    <CardTitle className="text-base text-zinc-900 dark:text-white">
                      {card.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pt-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {card.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* KPI Row */}
        <div ref={ref}>
          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: i * 0.2 },
                  },
                }}
                className="flex flex-col items-center"
              >
                <div className="mb-3">{stat.icon}</div>
                <motion.dt
                  className="text-3xl font-extrabold text-zinc-900 dark:text-white"
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  {stat.value}
                  {stat.suffix}
                </motion.dt>
                <dd className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
