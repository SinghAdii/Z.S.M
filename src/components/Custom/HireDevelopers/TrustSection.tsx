"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Globe, Users, Coins, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
    const reasons = [
        {
            icon: Zap,
            title: "Rapid Deployment",
            description: "Get your team up and running in as little as 48 hours. We streamline onboarding so you can start building immediately.",
            color: "text-yellow-500",
            bg: "bg-yellow-50 dark:bg-yellow-950/20"
        },
        {
            icon: ShieldCheck,
            title: "100% Risk Free",
            description: "2-week satisfaction guarantee. If you're not completely satisfied with the performance, we replace the resource for free.",
            color: "text-green-500",
            bg: "bg-green-50 dark:bg-green-950/20"
        },
        {
            icon: CheckCircle2,
            title: "Top 1% Talent",
            description: "Our rigorous 4-step vetting process ensures you only get elite developers with proven technical and communication skills.",
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-950/20"
        },
        {
            icon: Globe,
            title: "Timezone Aligned",
            description: "Our teams work in your timezone to ensure seamless collaboration, real-time communication, and agile overlapping hours.",
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-950/20"
        },
        {
            icon: Coins,
            title: "Cost Effective",
            description: "Save up to 60% on development costs compared to local hiring without compromising on quality or code standards.",
            color: "text-orange-500",
            bg: "bg-orange-50 dark:bg-orange-950/20"
        },
        {
            icon: Users,
            title: "Scalable Teams",
            description: "Scale your team up or down on demand. We offer total flexibility to adapt to your changing project requirements.",
            color: "text-red-500",
            bg: "bg-red-50 dark:bg-red-950/20"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-orange-600 dark:text-orange-500 font-bold uppercase tracking-wider text-sm mb-4 block">
                                Why Choose Ziostech?
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                                More Than Just Staffing, We Are Your <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Growth Partner.</div>
                            </h2>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                We handle the complexities of recruitment, payroll, and management so you can focus on building great products.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full flex items-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative w-full max-w-md shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Client Retention Rate</div>
                                    <div className="text-4xl font-bold text-zinc-900 dark:text-white">98%</div>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium">
                                        <span className="text-zinc-700 dark:text-zinc-300">Project Success</span>
                                        <span className="text-zinc-900 dark:text-white">100%</span>
                                    </div>
                                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full rounded-full" style={{ width: "100%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium">
                                        <span className="text-zinc-700 dark:text-zinc-300">On-Time Delivery</span>
                                        <span className="text-zinc-900 dark:text-white">99.5%</span>
                                    </div>
                                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "99.5%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all cursor-default relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                <reason.icon className={`w-32 h-32 ${reason.color}`} />
                            </div>

                            <div className={`w-14 h-14 rounded-2xl ${reason.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <reason.icon className={`w-7 h-7 ${reason.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
