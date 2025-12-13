
"use client";
import React from "react";
import { Briefcase, Users2, User } from "lucide-react";
import { motion } from "motion/react";

const RoleBenefits = () => {
    const roles = [
        {
            title: "For HR Teams",
            description: "Eliminate repetitive tasks, automate compliance, and focus on building a great culture.",
            points: ["Automated Payroll & Tax", "Bulk Employee Onboarding", "Compliance Alerts"],
            icon: Briefcase,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            borderColor: "border-blue-200 dark:border-blue-800",
            checkColor: "bg-blue-500"
        },
        {
            title: "For Managers",
            description: "Get real-time insights into your team's performance, attendance, and needs.",
            points: ["Team Attendance View", "Performance Tracking", "Instant Leave Approvals"],
            icon: Users2,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            borderColor: "border-orange-200 dark:border-orange-800",
            checkColor: "bg-orange-500"
        },
        {
            title: "For Employees",
            description: "Empower your workforce with a self-service portal to manage their work life.",
            points: ["Mobile App Access", "Download Payslips", "Apply for Leave"],
            icon: User,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            borderColor: "border-blue-200 dark:border-blue-800",
            checkColor: "bg-blue-500"
        },
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Built for Everyone
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        A platform that delivers value across your entire organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-2xl bg-background border ${role.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${role.bg} ${role.color}`}>
                                <role.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
                            <p className="text-muted-foreground mb-6 h-20">
                                {role.description}
                            </p>

                            <ul className="space-y-3">
                                {role.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-2 font-medium text-sm">
                                        <div className={`w-1.5 h-1.5 rounded-full ${role.checkColor}`} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoleBenefits;
