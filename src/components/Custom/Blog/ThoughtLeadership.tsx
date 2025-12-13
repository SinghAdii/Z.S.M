
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Share2, Users, ArrowRight, Code2, Cpu, PenTool, Database, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

const ThoughtLeadership = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6">
                            <Lightbulb className="w-4 h-4" />
                            <span>Our Philosophy</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">
                            Engineering with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Purpose & Precision.</span>
                        </h2>

                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                            At Ziostech, we believe that great software is born from clear thinking and open collaboration.
                            This blog is where our engineers, designers, and product leaders share their
                            hard-earned lessons, architectural decisions, and the "why" behind what we build.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                                    <Share2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Open Knowledge</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">We contribute back to the community by documenting our challenges and solutions transparently.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 shrink-0">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Community First</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Empowering developers and businesses with the insights they need to scale effectively.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link href="/about" className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-white hover:text-orange-600 transition-colors group">
                                Read more about our culture
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Detailed Visual Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[500px] flex items-center justify-center perspective-1000"
                    >
                        {/* Central Core */}
                        <div className="relative z-20 w-32 h-32 bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full shadow-2xl border border-zinc-200 dark:border-zinc-700 flex flex-col items-center justify-center text-center">
                            <div className="absolute inset-0 bg-orange-500/10 rounded-full animate-pulse" />
                            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">Zios</span>
                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-1">Tech</span>
                        </div>

                        {/* Orbit Ring 1 (Inner) */}
                        <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-zinc-300 dark:border-zinc-800 animate-[spin_60s_linear_infinite]" />

                        {/* Nodes on Ring 1 */}
                        <OrbitNode radius={140} angle={0} delay={0} icon={<Code2 className="w-5 h-5" />} label="Engineering" color="bg-blue-500" />
                        <OrbitNode radius={140} angle={120} delay={0} icon={<PenTool className="w-5 h-5" />} label="Design" color="bg-purple-500" />
                        <OrbitNode radius={140} angle={240} delay={0} icon={<Globe className="w-5 h-5" />} label="Culture" color="bg-green-500" />


                        {/* Orbit Ring 2 (Outer) */}
                        <div className="absolute w-[450px] h-[450px] rounded-full border border-zinc-200 dark:border-zinc-800/50 opacity-50" />

                        {/* Nodes on Ring 2 (Counter rotating visually) */}
                        <OrbitNode radius={225} angle={60} delay={0} speed={-0.05} icon={<Database className="w-4 h-4" />} label="Data" color="bg-cyan-500" size="small" />
                        <OrbitNode radius={225} angle={180} delay={0} speed={-0.05} icon={<Cpu className="w-4 h-4" />} label="AI/ML" color="bg-rose-500" size="small" />
                        <OrbitNode radius={225} angle={300} delay={0} speed={-0.05} icon={<Layers className="w-4 h-4" />} label="stack" color="bg-amber-500" size="small" />

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-orange-500/5 blur-3xl -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Helper component for orbiting nodes
const OrbitNode = ({ radius, angle, icon, label, color, size = "normal", speed = 0.1 }: any) => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100 / Math.abs(speed), repeat: Infinity, ease: "linear", repeatType: "loop" }}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            className="pointer-events-none"
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
                }}
            >
                {/* Counter-rotate the inner content so it stays upright relative to the screen, 
                    BUT we need to counter the parent rotation too. 
                    Actually, easiest way for simple orbits is just absolute positioning with animation.
                */}
                <RotatingContent speed={speed}>
                    <div className={`relative flex items-center justify-center rounded-2xl shadow-lg border border-white/20 backdrop-blur-md ${color} ${size === 'normal' ? 'w-14 h-14' : 'w-10 h-10'}`}>
                        <div className="text-white">
                            {icon}
                        </div>
                        <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-white/90 dark:bg-zinc-800/90 text-[10px] font-bold shadow-sm whitespace-nowrap text-foreground ${size === 'small' ? 'scale-90' : ''}`}>
                            {label}
                        </div>
                    </div>
                </RotatingContent>
            </motion.div>
        </motion.div>
    )
}

// Separate component to handle the counter-rotation to keep icons upright
const RotatingContent = ({ children, speed }: { children: React.ReactNode, speed: number }) => {
    return (
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 100 / Math.abs(speed), repeat: Infinity, ease: "linear" }}
        >
            {children}
        </motion.div>
    )
}

export default ThoughtLeadership;
