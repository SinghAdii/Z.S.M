"use client";
import React from "react";
import { Users, Calendar, CreditCard, UserPlus, TrendingUp, Shield } from "lucide-react";
import { motion } from "motion/react";

const CoreModules = () => {
    const modules = [
        {
            title: "Employee Management",
            description: "Centralized database for all employee records, documents, and history.",
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Attendance & Leave",
            description: "Real-time tracking with biometric integration and automated leave policies.",
            icon: Calendar,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
        {
            title: "Payroll Processing",
            description: "One-click payroll generation with tax compliance and salary slips.",
            icon: CreditCard,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Recruitment & Onboarding",
            description: "Streamlined applicant tracking and seamless onboarding workflows.",
            icon: UserPlus,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
        {
            title: "Performance Management",
            description: "Goal tracking, 360-degree reviews, and skills assessment.",
            icon: TrendingUp,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Compliance & Security",
            description: "Automated regulatory compliance updates and enterprise-grade security.",
            icon: Shield,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Everything You Need to Example
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive suite of tools designed to handle every aspect of modern HR operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-2xl border bg-card hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                <module.icon className={`w-24 h-24 ${module.color}`} />
                            </div>

                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${module.bg} ${module.color}`}>
                                <module.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {module.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreModules;
