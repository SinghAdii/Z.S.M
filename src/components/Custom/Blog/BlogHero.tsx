
"use client";
import React from "react";
import { Newspaper, ChevronRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";

interface BlogHeroProps {
    title: string;
    subtitle: string;
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({
    title,
    subtitle,
    categories,
    selectedCategory,
    onSelectCategory
}) => {
    return (
        <div className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-32 bg-background border-b border-white/5">
            {/* Spotlight Effect */}
            <div className="absolute inset-0 w-full h-full bg-background/[0.96] bg-grid-white/[0.02] pointer-events-none -z-10">
                <Spotlight />
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold mb-8 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-default"
                >
                    <Newspaper className="w-3.5 h-3.5 text-orange-500" />
                    <span>Ziostech Engineering Blog</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-1" />
                    <span className="text-zinc-400">Read time: 5m avg</span>
                </motion.div>

                {/* Main Title with Gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]"
                >
                    Exploring the Frontiers of <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 animate-gradient bg-300%">
                        Digital Innovation
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
                >
                    Deep dives into software architecture, AI integration, and the future of work.
                    Written by the engineers building it.
                </motion.p>

                {/* Search / Filter Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Categories Scroll */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-1">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onSelectCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${selectedCategory === category
                                    ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                                    : "bg-white/5 border-zinc-200 dark:border-zinc-800 text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground hover:border-zinc-300 dark:hover:border-zinc-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogHero;
