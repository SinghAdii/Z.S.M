"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./Sectionheading";

interface TechItem {
  name: string;
  icon: React.ElementType;
  desc: string;
}

interface TechStacks {
  [key: string]: TechItem[];
}

interface TechnologiesWeUseProps {
  gradientFrom?: string;
  gradientTo?: string;
  techStacks: TechStacks;
  topic: string;
  title: string;
  description: string;
}

export default function TechnologiesWeUse({
  gradientFrom = "from-blue-500/30",
  gradientTo = "to-orange-500/20",
  techStacks,
  topic,
  title,
  description,
}: TechnologiesWeUseProps) {
  const categories = Object.keys(techStacks);
  const showTabs = categories.length > 1;

  const renderTechGrid = (stack: TechItem[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {stack.map((tech, i) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md hover:border-blue-500/40 transition-all duration-300">
              <CardHeader className="flex justify-center items-center py-6">
                <Icon className="w-10 h-10 text-gray-900 dark:text-gray-100" />
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tech.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${gradientFrom} via-transparent ${gradientTo} blur-3xl pointer-events-none`}
      />

      {/* Section Header */}
      <div className="mb-12">
        <SectionHeading topic={topic} title={title} description={description} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {showTabs ? (
          <Tabs defaultValue={categories[0]} className="w-full">
            {/* Tabs List */}
            <div className="flex justify-center mb-8">
              <TabsList className="flex bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg rounded-full border border-gray-200 dark:border-gray-700 p-1">
                {categories.map((key) => {
                  const icon =
                    key.toLowerCase() === "web" ? (
                      <Globe className="w-4 h-4" />
                    ) : key.toLowerCase() === "android" ? (
                      <Smartphone className="w-4 h-4" />
                    ) : key.toLowerCase() === "ios" ? (
                      <MonitorSmartphone className="w-4 h-4" />
                    ) : null;

                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex items-center gap-2 px-4 py-2 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-blue-500 data-[state=active]:text-white cursor-pointer"
                    >
                      {icon}
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tabs Content */}
            {categories.map((key) => (
              <TabsContent key={key} value={key} className="mt-12">
                {renderTechGrid(techStacks[key])}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          renderTechGrid(Object.values(techStacks).flat())
        )}
      </div>
    </section>
  );
}
