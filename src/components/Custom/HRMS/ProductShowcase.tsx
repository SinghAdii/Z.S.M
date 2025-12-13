
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, CreditCard, TrendingUp, BarChart3, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);

    const screens = [
        {
            id: 0,
            title: "Attendance & Leave",
            description: "Smart calendar view with one-click leave approvals and holiday mapping.",
            fullDescription: "Say goodbye to spreadsheets. Our intuitive calendar interface allows employees to view public holidays, apply for leave, and track their attendance balance in real-time. Managers get instant notifications for approvals.",
            image: "/images/hrms/attendance.png",
            icon: Calendar,
            color: "from-orange-500 to-red-500",
        },
        {
            id: 1,
            title: "Payroll Auotomation",
            description: "Run error-free payroll in minutes, not days. Automated tax calculations.",
            fullDescription: "Handle salaries, bonuses, and deductions with enterprise-grade accuracy. Our engine automatically calculates taxes, generates payslips, and ensures compliance with local labor laws.",
            image: "/images/hrms/payroll.png",
            icon: CreditCard,
            color: "from-blue-500 to-indigo-500",
        },
        {
            id: 2,
            title: "Performance Reviews",
            description: "Continuous feedback loops and 360-degree appraisal cycles.",
            fullDescription: "Move beyond annual reviews. Set dynamic goals, track progress weekly, and facilitate meaningful 1:1 conversations that drive employee growth and retention.",
            image: "/images/hrms/performance.png",
            icon: TrendingUp,
            color: "from-green-500 to-emerald-500",
        },
        {
            id: 3,
            title: "Deep Analytics",
            description: "Visual dashboards for headcount, attrition, and expenses.",
            fullDescription: "Make data-driven people decisions. Visualize trends in hiring, retention, and costs. Export custom reports for stakeholders with a single click.",
            image: "/images/hrms/dashboard-main.png",
            icon: BarChart3,
            color: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[0%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[0%] left-[0%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        A Complete HR Operating System
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Switch views to explore how we handle complex HR tasks with elegant simplicity.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 max-w-7xl mx-auto items-start">

                    {/* Left Side: Navigation Tabs */}
                    <div className="flex flex-col gap-4 w-full lg:w-1/3">
                        {screens.map((screen, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={cn(
                                    "group flex flex-col items-start p-6 rounded-xl transition-all duration-300 border text-left",
                                    activeTab === index
                                        ? "bg-muted border-primary/20 shadow-sm ring-1 ring-primary/5"
                                        : "bg-background border-transparent hover:bg-muted/50 hover:border-border"
                                )}
                            >
                                <div className="flex items-center gap-4 w-full">
                                    <div className={cn(
                                        "p-3 rounded-lg transition-colors",
                                        activeTab === index ? `bg-gradient-to-br ${screen.color} text-white` : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                                    )}>
                                        <screen.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={cn("text-lg font-bold transition-colors", activeTab === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                                            {screen.title}
                                        </h3>
                                    </div>
                                    <ChevronRight className={cn(
                                        "w-5 h-5 transition-transform",
                                        activeTab === index ? "text-primary opacity-100 translate-x-1" : "text-muted-foreground/50 opacity-0 group-hover:opacity-100"
                                    )} />
                                </div>

                                <div className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    activeTab === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                                )}>
                                    <div className="overflow-hidden">
                                        <p className="text-sm text-muted-foreground leading-relaxed pl-[3.25rem]">
                                            {screen.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Showcase Frame */}
                    <div className="w-full lg:w-2/3 h-full min-h-[500px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 transform rotate-1 rounded-3xl blur-2xl -z-10" />

                        <div className="rounded-2xl border bg-background/80 backdrop-blur-sm shadow-2xl overflow-hidden ring-1 ring-white/20 dark:ring-white/5 h-full flex flex-col">
                            {/* Browser Header Mockup */}
                            <div className="h-12 border-b bg-muted/30 flex items-center px-4 gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="h-6 w-3/4 max-w-[400px] bg-background/50 rounded-md mx-auto text-[10px] sm:text-xs flex items-center justify-center text-muted-foreground font-mono">
                                        ziostech-hrms.com/app/{screens[activeTab].title.toLowerCase().replace(" ", "-")}
                                    </div>
                                </div>
                            </div>

                            {/* Active Image with Transition */}
                            <div className="relative flex-1 w-full bg-muted/10 p-1">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full relative aspect-[16/10]"
                                    >
                                        <Image
                                            src={screens[activeTab].image}
                                            alt={screens[activeTab].title}
                                            fill
                                            className="object-cover object-top rounded-b-lg shadow-inner"
                                        />

                                        {/* Overlay Gradient for professionalism */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Descriptive Text floating below specific to image */}
                        <motion.div
                            key={`desc-${activeTab}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 p-6 rounded-xl bg-muted/20 border border-border/50 backdrop-blur-sm"
                        >
                            <h4 className="font-semibold text-lg mb-2">{screens[activeTab].title} Deep Dive</h4>
                            <p className="text-muted-foreground">{screens[activeTab].fullDescription}</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
