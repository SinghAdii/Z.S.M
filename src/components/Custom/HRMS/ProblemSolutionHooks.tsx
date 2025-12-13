
"use client";
import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";

const ProblemSolutionHooks = () => {
    const problems = [
        "Manual data entry & spreadsheets errors",
        "Compliance risks & legal penalties",
        "Disjointed systems for payroll & HR",
        "Lack of visibility into workforce data",
    ];

    const solutions = [
        "Automated data syncing & validation",
        "Built-in compliance checks & alerts",
        "Unified platform for all HR needs",
        "Real-time analytics & insights dashboard",
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Stop Fighting with <span className="text-orange-500">Outdated Systems</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Upgrade to a platform that solves your biggest HR headers, not adds to them.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
                    {/* Problem Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8 p-8 rounded-2xl bg-background border border-orange-100 dark:border-orange-900/30 shadow-lg"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/50">
                                <XCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold">The Old Way</h3>
                        </div>
                        <ul className="space-y-4">
                            {problems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Solution Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8 p-8 rounded-2xl bg-background border border-blue-100 dark:border-blue-900/30 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8" />

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold">The HRMS Way</h3>
                        </div>
                        <ul className="space-y-4 relative z-10">
                            {solutions.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionHooks;
