
"use client";
import React from "react";
import { ShieldCheck, Lock, FileKey, Server } from "lucide-react";
import { motion } from "motion/react";

const SecurityCompliance = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Enterprise Grade Security</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Your Data is Safe, <br />
                            Secure, and Compliant.
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-lg">
                            We take security seriously. Our platform is built with industry-standard encryption and compliance protocols to ensure your sensitive HR data never falls into the wrong hands.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h4 className="text-xl font-bold text-blue-400 mb-1">SOC-2</h4>
                                <p className="text-sm text-slate-400">Type II Certified</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h4 className="text-xl font-bold text-orange-400 mb-1">GDPR</h4>
                                <p className="text-sm text-slate-400">Compliant Ready</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h4 className="text-xl font-bold text-blue-400 mb-1">ISO</h4>
                                <p className="text-sm text-slate-400">27001 Certified</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h4 className="text-xl font-bold text-orange-400 mb-1">AES-256</h4>
                                <p className="text-sm text-slate-400">Data Encryption</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 shrink-0 h-fit">
                                <Lock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Role-Based Access Control</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Granular permission settings ensure employees only see what they need to see.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 rounded-lg bg-orange-500/20 text-orange-400 shrink-0 h-fit">
                                <FileKey className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Audit Logs & Monitoring</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Track every change and access request with detailed, tamper-proof logs.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 shrink-0 h-fit">
                                <Server className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Daily Backups</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Automatic, redundant backups to ensure your data is recoverable in any scenario.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SecurityCompliance;
