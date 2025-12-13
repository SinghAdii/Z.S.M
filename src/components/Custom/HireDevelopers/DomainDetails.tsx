"use client";

import React, { useState, useRef } from "react";
import { Check, ChevronRight, Code2, Globe, Laptop, Server, Smartphone, ShoppingBag, Database, Layout, Search, BarChart, Brain, MessageSquareText, LayoutGrid, Webhook, Layers, Network, TestTube2, ClipboardCheck } from "lucide-react";
import {
    FaReact, FaNodeJs, FaVuejs, FaAngular, FaAws, FaPython,
    FaShopify, FaWordpress, FaAndroid, FaMicrosoft
} from "react-icons/fa6";
import {
    SiNextdotjs, SiFlutter, SiSwift, SiKotlin,
    SiGooglecloud, SiTensorflow, SiOpenai, SiMagento, SiWoocommerce,
    SiSelenium, SiCypress, SiJest, SiDocker, SiServerless
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINS = [
    {
        id: "web-dev",
        title: "Web Development",
        icon: Globe,
        desc: "Scalable web apps tailored for performance.",
        content: "Hire specialized web developers proficient in modern frameworks. We build scalable, high-performance web applications tailored to your business goals.",
        skills: ["React.js", "Next.js", "Node.js", "Vue.js", "Angular"],
        roles: ["Frontend Developer", "Backend Developer", "Full Stack Engineer"],
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: "mobile-dev",
        title: "Mobile App Development",
        icon: Smartphone,
        desc: "Native & cross-platform mobile experiences.",
        content: "Launch top-rated iOS and Android apps. Our mobile experts create seamless, native-like experiences using the latest cross-platform technologies.",
        skills: ["React Native", "Flutter", "Swift", "Kotlin", "iOS/Android"],
        roles: ["Mobile Architect", "iOS Developer", "Android Developer"],
        gradient: "from-green-500 to-emerald-500"
    },
    {
        id: "cloud-services",
        title: "Cloud Services",
        icon: Cloud,
        desc: "Secure, scalable cloud infrastructure.",
        content: "Accelerate your cloud journey with certified architects. We handle migration, optimization, and management of secure cloud infrastructures.",
        skills: ["AWS", "Azure", "Google Cloud", "DevOps", "Serverless"],
        roles: ["Cloud Architect", "DevOps Engineer", "Site Reliability Engineer"],
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        id: "ai-integration",
        title: "AI Integration",
        icon: Code2, // Using Code2 as generic tech icon if Bot/Brain not avail in subset
        desc: "Smart AI & ML solutions.",
        content: "Leverage the power of Artificial Intelligence. Our AI engineers build smart solutions, from chatbots to predictive analytics models.",
        skills: ["Machine Learning", "NLP", "Python", "TensorFlow", "OpenAI API"],
        roles: ["AI Engineer", "ML Specialist", "Data Scientist"],
        gradient: "from-rose-500 to-red-500"
    },
    {
        id: "platform-services",
        title: "Platform Services",
        icon: Server,
        desc: "Robust enterprise SaaS & PaaS.",
        content: "Build robust enterprise platforms. We design and develop scalable SaaS and PaaS solutions that drive operational efficiency.",
        skills: ["Microservices", "API Design", "SaaS Architecture", "Enterprise Integration"],
        roles: ["Platform Engineer", "Solutions Architect", "Integration Specialist"],
        gradient: "from-orange-500 to-amber-500"
    },
    {
        id: "cms-ecommerce",
        title: "CMS & E-commerce",
        icon: ShoppingBag,
        desc: "Powerful digital storefronts.",
        content: "Create powerful digital storefronts. We customize and deploy e-commerce platforms that maximize sales and user engagement.",
        skills: ["Shopify", "WordPress", "Magento", "WooCommerce", "Headless CMS"],
        roles: ["E-commerce Developer", "CMS Specialist", "Shopify Expert"],
        gradient: "from-pink-500 to-rose-500"
    },
    {
        id: "testing",
        title: "Testing & QA",
        icon: Search,
        desc: "Flawless product delivery.",
        content: "Ensure flawless product delivery. Our QA teams use automated and manual testing to identify and fix issues before they reach your users.",
        skills: ["Selenium", "Cypress", "Appium", "Jest", "Manual Testing"],
        roles: ["QA Engineer", "Test Automation Engineer", "Performance Tester"],
        gradient: "from-teal-500 to-cyan-500"
    }
];

// Helper for Cloud icon since I used it above but didn't import strict match from previous file
import { Cloud } from "lucide-react";

const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: any } = {
        "React.js": FaReact,
        "Next.js": SiNextdotjs,
        "Node.js": FaNodeJs,
        "Vue.js": FaVuejs,
        "Angular": FaAngular,
        "React Native": FaReact,
        "Flutter": SiFlutter,
        "Swift": SiSwift,
        "Kotlin": SiKotlin,
        "iOS/Android": FaAndroid,
        "AWS": FaAws,
        "Azure": FaMicrosoft,
        "Google Cloud": SiGooglecloud,
        "DevOps": SiDocker,
        "Serverless": SiServerless,
        "Machine Learning": Brain,
        "NLP": MessageSquareText,
        "Python": FaPython,
        "TensorFlow": SiTensorflow,
        "OpenAI API": SiOpenai,
        "Microservices": LayoutGrid,
        "API Design": Webhook,
        "SaaS Architecture": Layers,
        "Enterprise Integration": Network,
        "Shopify": FaShopify,
        "WordPress": FaWordpress,
        "Magento": SiMagento,
        "WooCommerce": SiWoocommerce,
        "Headless CMS": Database,
        "Selenium": SiSelenium,
        "Cypress": SiCypress,
        "Appium": TestTube2,
        "Jest": SiJest,
        "Manual Testing": ClipboardCheck
    };
    return iconMap[skill] || Check;
};

export default function DomainDetails() {
    const [activeTab, setActiveTab] = useState(DOMAINS[0].id);
    const activeDomain = DOMAINS.find(d => d.id === activeTab) || DOMAINS[0];
    const contentRef = useRef<HTMLDivElement>(null);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        if (typeof window !== 'undefined' && window.innerWidth < 1024 && contentRef.current) {
            const yOffset = -100;
            const element = contentRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                        Detailed Domain Expertise
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Deep technical knowledge across the most in-demand technology stacks.
                        Explore our specialized capabilities.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/3 flex flex-col gap-2">
                        {DOMAINS.map((domain) => (
                            <button
                                key={domain.id}
                                onClick={() => handleTabClick(domain.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl transition-all text-left group ${activeTab === domain.id
                                    ? "bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-800"
                                    : "hover:bg-zinc-100 dark:hover:bg-zinc-900/50"
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${domain.gradient} shadow-md`}>
                                    <domain.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-semibold text-sm md:text-base ${activeTab === domain.id ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}`}>
                                        {domain.title}
                                    </h3>
                                </div>
                                {activeTab === domain.id && (
                                    <ChevronRight className="w-5 h-5 text-zinc-400 animate-in slide-in-from-left-2" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3" ref={contentRef}>
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-2xl h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDomain.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeDomain.gradient} flex items-center justify-center text-white mb-8 shadow-lg`}>
                                        <activeDomain.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                                        {activeDomain.title}
                                    </h3>
                                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
                                        {activeDomain.content}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div>
                                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wide mb-4 flex items-center gap-2">
                                                <Code2 className="w-4 h-4 text-zinc-400" />
                                                Tech Stack
                                            </h4>
                                            <ul className="space-y-3">
                                                {activeDomain.skills.map((skill, idx) => {
                                                    const SkillIcon = getSkillIcon(skill);
                                                    return (
                                                        <li key={idx} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800">
                                                            <SkillIcon className="w-5 h-5 text-orange-500" />
                                                            <span className="font-medium">{skill}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wide mb-4 flex items-center gap-2">
                                                <Check className="w-4 h-4 text-zinc-400" />
                                                Roles Available
                                            </h4>
                                            <div className="flex flex-col gap-3">
                                                {activeDomain.roles.map((role, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                        {role}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
