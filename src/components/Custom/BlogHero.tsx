import React from "react";
import { Sparkles, Newspaper } from "lucide-react";
import { motion } from "framer-motion";

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
        <div className="relative overflow-hidden pt-32 pb-20 text-center md:pt-48 md:pb-32 bg-zinc-50/50 dark:bg-black/50">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-orange-500/10 dark:bg-orange-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/30 text-orange-600 text-xs font-semibold mb-8 border border-orange-100 dark:border-orange-500/20 uppercase tracking-wide"
                >
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>Ziostech Insights</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 tracking-tight leading-[1.1]"
                >
                    {title.split(' ').map((word, i) => (
                        <span key={i} className={i >= title.split(' ').length - 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 inline" : "block lg:text-5xl md:text-4xl text-3xl"}>
                            {word}{" "}
                        </span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12"
                >
                    {subtitle}
                </motion.p>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                                ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/25"
                                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-orange-500/50 hover:text-orange-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BlogHero;
