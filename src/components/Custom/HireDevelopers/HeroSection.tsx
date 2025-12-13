"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight, Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Trust Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm mb-8"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white dark:border-black" />
                            ))}
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                            <span className="text-orange-600 font-bold">50+</span> Developers Hired
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8 leading-[1.1]"
                    >
                        Hire Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">1% Tech Talent</span> within 48 Hours
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-3xl leading-relaxed"
                    >
                        Skip the recruiting hassle. Scale your team instantly with pre-vetted senior developers, engineers, and architects.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto min-w-[200px] h-14 text-lg bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg hover:shadow-orange-500/25 transition-all group"
                            onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Start Hiring
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto min-w-[200px] h-14 text-lg rounded-full border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 backdrop-blur-sm"
                            onClick={() => document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Explore Expertise
                        </Button>
                    </motion.div>

                    {/* Benefits List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                    >
                        {[
                            "100% IP Protection",
                            "Timezone Aligned",
                            "2-Week Risk-Free Trial"
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                {benefit}
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
