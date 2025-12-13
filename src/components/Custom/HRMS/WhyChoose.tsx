
"use client";
import React from "react";
import { Check, X, Clock, Zap, Headphones, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const WhyChoose = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Why Leaders Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Ziostech HRMS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        We don't just digitize your HR processes. We transform them into your competitive advantage.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Card 1: Implementation Speed (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-muted/20 border border-border/50 hover:border-orange-500/30 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Clock className="w-32 h-32 text-orange-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Lightning Fast Implementation</h3>
                            <p className="text-muted-foreground mb-8 max-w-md">
                                Get up and running in weeks, not months. Our automated migration tools import your data seamlessly.
                            </p>

                            {/* Visual Comparison Bar */}
                            <div className="space-y-4 max-w-lg">
                                <div>
                                    <div className="flex justify-between text-sm mb-1 font-medium">
                                        <span className="text-orange-600">Us (2 Weeks)</span>
                                    </div>
                                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "15%" }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1 text-muted-foreground">
                                        <span>Legacy Competitors (6 Months)</span>
                                    </div>
                                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1, delay: 0.7 }}
                                            className="h-full bg-gray-300 dark:bg-gray-700 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Support (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 p-8 rounded-3xl bg-blue-600 text-white relative overflow-hidden group shadow-lg shadow-blue-500/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
                        {/* Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                                    <Headphones className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">24/7 Dedicated Support</h3>
                                <p className="text-blue-100 text-sm">
                                    No bots. No tickets. Real humans solving your problems instantly.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-white/20">
                                <div className="text-3xl font-bold"> {"<"} 1 min</div>
                                <div className="text-blue-200 text-sm">Average Response Time</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: UX (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 p-8 rounded-3xl bg-muted/20 border border-border/50 hover:border-blue-500/30 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-6">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Modern UX</h3>
                        <p className="text-muted-foreground text-sm mb-6">
                            An interface your employees will actually love using. No training manuals needed.
                        </p>
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-background flex items-center justify-center text-[10px] font-bold text-gray-600">
                                    U{i}
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 border-2 border-background">
                                +5k
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Happy daily users</p>
                    </motion.div>

                    {/* Card 4: ROI (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-background border border-border/50 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-orange-50/50 to-transparent dark:from-orange-900/10" />

                        <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                            <div className="flex-1">
                                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-6">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Unbeatable ROI</h3>
                                <p className="text-muted-foreground">
                                    Reduce administrative overhead and save costs on multiple disjointed tools.
                                </p>
                            </div>
                            <div className="flex-1 w-full bg-muted/30 rounded-2xl p-6 border border-border/50">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <span className="text-sm font-medium">Tool Consolidation</span>
                                        <span className="text-green-600 font-bold">-40% Cost</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <span className="text-sm font-medium">Admin Efficiency</span>
                                        <span className="text-green-600 font-bold">+60% Faster</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Compliance Fines</span>
                                        <span className="text-green-600 font-bold">$0 Risk</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
