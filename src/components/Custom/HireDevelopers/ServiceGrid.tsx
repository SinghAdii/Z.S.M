"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code, Smartphone, Cloud, Layers, ShoppingCart,
    Box, Palette, TestTube, Database, BarChart3, Bot
} from "lucide-react";

const SERVICES = [
    {
        icon: Code,
        title: "Web Development",
        description: "Scalable web apps built with React, Next.js, and Node.js.",
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Native and cross-platform apps for iOS and Android.",
        color: "text-green-500",
        bg: "bg-green-50 dark:bg-green-950/20"
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "AWS, Azure, and Google Cloud infrastructure management.",
        color: "text-cyan-500",
        bg: "bg-cyan-50 dark:bg-cyan-950/20"
    },
    {
        icon: Layers,
        title: "Platform Services",
        description: "Enterprise SaaS and PaaS solution architecture.",
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
        icon: ShoppingCart,
        title: "CMS & E-commerce",
        description: "Custom Shopify, WordPress, and Magento solutions.",
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
        icon: Box,
        title: "DevOps & Containers",
        description: "CI/CD, Docker, and Kubernetes orchestration.",
        color: "text-red-500",
        bg: "bg-red-50 dark:bg-red-950/20"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centric interaction design and prototyping.",
        color: "text-pink-500",
        bg: "bg-pink-50 dark:bg-pink-950/20"
    },
    {
        icon: TestTube,
        title: "QA & Testing",
        description: "Automated and manual testing for bug-free releases.",
        color: "text-yellow-500",
        bg: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
        icon: Database,
        title: "Big Data Solutions",
        description: "Data processing, Hadoop, and analytics pipelines.",
        color: "text-indigo-500",
        bg: "bg-indigo-50 dark:bg-indigo-950/20"
    },
    {
        icon: Bot,
        title: "AI Integration",
        description: "Machine Learning models and smart automation.",
        color: "text-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-950/20"
    }
];

export default function ServiceGrid() {
    return (
        <section id="services-grid" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Our Core Technology Expertise
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                        We provide specialized talent across the entire technology spectrum.
                        Whatever your stack, we have the experts to build it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all cursor-pointer group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-6 h-6 ${service.color}`} />
                            </div>
                            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
