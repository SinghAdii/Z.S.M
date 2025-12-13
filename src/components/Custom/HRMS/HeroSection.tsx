
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";

const HeroSection = () => {
    // 3D Tilt Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative w-full overflow-hidden bg-background pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[90vh] flex flex-col justify-center">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-10">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-sm font-medium text-orange-600 dark:text-orange-400 ring-1 ring-inset ring-orange-500/10"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse box-shadow-orange" />
                        <span>Reimagining People Management</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]"
                    >
                        HR Management, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-blue-600 bg-300% animate-gradient">
                            Refined for Enterprise.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl leading-relaxed"
                    >
                        Experience the perfect synergy of automation and human connection.
                        A unified platform to streamline payroll, compliance, and culture.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 w-full justify-center sm:w-auto pt-4"
                    >
                        <Button
                            size="lg"
                            className="h-14 px-10 text-lg rounded-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-500 hover:to-blue-500 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 text-white border-0"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-10 text-lg rounded-full bg-background/50 backdrop-blur border-input hover:bg-muted/80 text-foreground hover:scale-105 transition-all duration-300"
                        >
                            Schedule Demo
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-8 text-sm font-medium text-muted-foreground"
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="p-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600">
                                <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                                <Zap className="h-4 w-4" />
                            </div>
                            <span>Setup in 5 minutes</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                <ShieldCheck className="h-4 w-4" />
                            </div>
                            <span>SOC2 & GDPR Ready</span>
                        </div>
                    </motion.div>
                </div>

                {/* 3D Interactive Browser Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 40 }}
                    className="relative mt-24 mx-auto max-w-6xl perspective-1000 py-10"
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-full aspect-[16/10] bg-background rounded-xl border border-white/10 shadow-2xl dark:shadow-blue-900/20"
                    >
                        {/* Browser Window Frame */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-muted/80 backdrop-blur-md rounded-t-xl border-b flex items-center px-4 z-20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-inner" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-inner" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-inner" />
                            </div>
                            {/* Address Bar */}
                            <div className="mx-auto w-1/2 max-w-md h-6 bg-background/50 rounded-md border border-white/10 flex items-center justify-center relative">
                                <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                                    <span className="text-green-500"><ShieldCheck className="w-3 h-3" /></span>
                                    ziostech-hrms.com/dashboard/overview
                                </div>
                            </div>
                        </div>

                        {/* Main Image content */}
                        <div className="relative w-full h-full pt-10 rounded-xl overflow-hidden bg-white/5">
                            <Image
                                src="/images/hrms/dashboard-main.png"
                                alt="HRMS Dashboard Interface"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* Reflection Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />
                        </div>

                        {/* Floating Stats Card 1: Payroll (Top Right) */}
                        <motion.div
                            style={{ transform: "translateZ(50px)" }}
                            className="absolute -top-6 -right-6 md:top-16 md:-right-16 p-4 rounded-xl bg-background/90 backdrop-blur-xl border border-white/20 shadow-2xl hidden lg:block"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg"><CheckCircle2 className="w-6 h-6" /></div>
                                <div>
                                    <div className="text-xs font-semibold text-muted-foreground">Payroll Status</div>
                                    <div className="text-sm font-bold text-foreground">Successfully Paid</div>
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-foreground tracking-tight">$142,500.00</div>
                        </motion.div>

                        {/* Floating Stats Card 2: Applicants (Bottom Left) */}
                        <motion.div
                            style={{ transform: "translateZ(75px)" }}
                            className="absolute -bottom-6 -left-6 md:bottom-20 md:-left-12 p-4 rounded-xl bg-background/90 backdrop-blur-xl border border-white/20 shadow-2xl hidden lg:block max-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white shadow-lg"><MousePointer2 className="w-4 h-4" /></div>
                                <div className="text-sm font-bold">New Applicants</div>
                            </div>
                            <div className="flex items-center -space-x-2 mb-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-200" />
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-background bg-blue-500 text-white flex items-center justify-center text-xs font-bold">+12</div>
                            </div>
                            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full w-[70%] bg-blue-500 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Floating Stats Card 3: Team Presence (Top Left) */}
                        <motion.div
                            style={{ transform: "translateZ(60px)" }}
                            className="absolute -top-10 -left-6 md:top-12 md:-left-16 p-4 rounded-xl bg-background/90 backdrop-blur-xl border border-white/20 shadow-2xl hidden lg:block"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-white shadow-lg"><Zap className="w-5 h-5" /></div>
                                <div>
                                    <div className="text-xs font-semibold text-muted-foreground">Team Presence</div>
                                    <div className="text-sm font-bold text-foreground text-green-500">98% Online</div>
                                </div>
                            </div>
                            <div className="flex gap-1 mt-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-2 h-8 rounded-full ${i === 4 ? 'bg-muted' : 'bg-green-500'}`} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating Stats Card 4: Pending Requests (Bottom Right) */}
                        <motion.div
                            style={{ transform: "translateZ(40px)" }}
                            className="absolute -bottom-10 -right-6 md:bottom-12 md:-right-10 p-4 rounded-xl bg-background/90 backdrop-blur-xl border border-white/20 shadow-2xl hidden lg:block"
                        >
                            <div className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Pending Requests</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-lg">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">JD</div>
                                    <div className="text-xs">
                                        <div className="font-semibold">John Doe</div>
                                        <div className="text-muted-foreground">Sick Leave • 2 Days</div>
                                    </div>
                                    <div className="ml-auto w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                </div>
                                <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-lg">
                                    <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">AS</div>
                                    <div className="text-xs">
                                        <div className="font-semibold">Alice Smith</div>
                                        <div className="text-muted-foreground">Expense • $50</div>
                                    </div>
                                    <div className="ml-auto w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Glow effect matching brand colors */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-[120px] -z-10 rounded-full" />

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
