"use client";

import React from "react";
import { UserCheck, Search, Code2, Rocket } from "lucide-react";

export default function ProcessSection() {
    const steps = [
        {
            icon: Search,
            title: "1. Share Requirements",
            description: "Discuss your project needs, tech stack, and team size with our experts."
        },
        {
            icon: UserCheck,
            title: "2. Resume Screening",
            description: "We shortlist the best candidates from our pre-vetted talent pool."
        },
        {
            icon: Code2,
            title: "3. Interview & Test",
            description: "Conduct technical interviews to ensure the perfect fit for your team."
        },
        {
            icon: Rocket,
            title: "4. Onboard & Start",
            description: "Seamless onboarding with 100% IP protection and NDA compliance."
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Simple 4-Step Hiring Process
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                        We've streamlined our hiring process to get you the right talent in as little as 48 hours.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] w-[80%] h-0.5 bg-zinc-200 dark:bg-zinc-800 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-orange-500 shadow-xl shadow-orange-500/20 flex items-center justify-center mb-6 relative">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <step.icon className="w-8 h-8 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
