
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { motion } from "motion/react";

const CallToAction = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black text-white">
            {/* Dynamic Background Beams/Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Glowing Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-orange-500/30 via-blue-500/30 to-purple-500/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium text-slate-200">Start your 14-day free trial</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                    >
                        Ready to transform your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">
                            Workforce Experience?
                        </span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join 500+ forward-thinking companies that have modernized their HR operations.
                        No setup fees, cancel anytime.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
                    >
                        <Button
                            size="lg"
                            className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-slate-200 hover:scale-105 transition-all duration-300 font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                        >
                            Get Started Now
                            <Rocket className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-16 px-10 text-lg rounded-full bg-transparent border-white/20 text-white hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                            Book a Live Demo
                        </Button>
                    </motion.div>

                    {/* Footer Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm text-slate-500 pt-8"
                    >
                        Fully compliant with SOC2, GDPR, and ISO 27001 standards.
                    </motion.p>
                </div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    );
};

export default CallToAction;
