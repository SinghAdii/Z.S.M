
"use client";
import React from "react";
import { UserPlus, Settings, BarChart3, Check } from "lucide-react";
import { motion } from "motion/react";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Add Your Employees",
            description: "Bulk upload employee data or sync with your existing systems in minutes.",
            icon: UserPlus,
        },
        {
            id: 2,
            title: "Configure Polices",
            description: "Set up leave rules, shift timings, and payroll structures to match your company.",
            icon: Settings,
        },
        {
            id: 3,
            title: "Automate Operations",
            description: "Let the system handle attendance, payroll calculation, and compliance checks automatically.",
            icon: Check,
        },
        {
            id: 4,
            title: "Get Actionable Insights",
            description: "View real-time reports on workforce health, expenses, and performance.",
            icon: BarChart3,
        },
    ];

    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Get Started in 4 Simple Steps
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Implementation so smooth, you'll be up and running in no time.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-gradient-to-r from-orange-200 to-blue-200 dark:from-orange-900 dark:to-blue-900 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center bg-background/50 md:bg-transparent p-6 rounded-xl md:p-0"
                        >
                            <div className={`w-16 h-16 rounded-full bg-background border-4 ${index % 2 === 0 ? "border-orange-100 dark:border-orange-900/50" : "border-blue-100 dark:border-blue-900/50"} flex items-center justify-center mb-6 shadow-sm z-10 relative`}>
                                <step.icon className={`w-8 h-8 ${index % 2 === 0 ? "text-orange-500" : "text-blue-500"}`} />
                                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${index % 2 === 0 ? "bg-orange-500" : "bg-blue-500"} text-white flex items-center justify-center text-sm font-bold shadow-lg`}>
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
