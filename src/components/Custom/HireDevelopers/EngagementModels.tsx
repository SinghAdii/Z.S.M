"use client";

import React from "react";
import { Check } from "lucide-react";

export default function EngagementModels() {
    return (
        <section className="py-20 bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Flexible Engagement Models
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                        Choose the hiring model that best fits your project needs and budget.
                        We offer total flexibility to scale up or down.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Dedicated Team */}
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <div className="w-24 h-24 bg-orange-500 rounded-full blur-3xl"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Dedicated Team</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 uppercase tracking-wider font-semibold">Best for Long-term</p>
                        <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                            Build your own remote development team. You manage them directly, or we handle the management for you. Works like your in-house team.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Full-time dedication", "Direct communication", "Scalable resources", "Long-term stability"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                                    <span className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                        <Check className="w-3 h-3" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2: Fixed Price (Highlighted) */}
                    <div className="bg-zinc-900 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-800 relative overflow-hidden shadow-2xl transform scale-105 z-10">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Fixed Price</h3>
                        <p className="text-sm text-zinc-400 mb-6 uppercase tracking-wider font-semibold">Best for Defined Scope</p>
                        <p className="text-zinc-300 mb-8 leading-relaxed">
                            Perfect for projects with well-defined requirements and timelines. We deliver the complete project within a fixed budget and deadline.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Clear deliverables", "Fixed budget", "Defined timeline", "No hidden costs"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300">
                                    <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white">
                                        <Check className="w-3 h-3" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 3: Hourly / T&M */}
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <div className="w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Time & Material</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 uppercase tracking-wider font-semibold">Best for Agility</p>
                        <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                            Pay only for the hours worked. Ideal for projects with evolving requirements or when you need specialized expertise for a short period.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Pay as you go", "Flexible scope", "Hourly billing", "Adaptable changes"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <Check className="w-3 h-3" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
