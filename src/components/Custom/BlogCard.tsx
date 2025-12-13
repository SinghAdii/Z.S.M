import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export interface BlogPost {
    id?: number;
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
    author: string;
    date: string;
    image: string;
    tags: string[];
    category: string;
    seoTitle?: string;
    seoDescription?: string;
    keywords?: string[];
}

interface BlogCardProps {
    blog: BlogPost;
}

const getCategoryColor = (category: string) => {
    switch (category) {
        case "Web Development":
            return "text-blue-600 bg-blue-50 dark:bg-blue-900/20";
        case "App Development":
            return "text-green-600 bg-green-50 dark:bg-green-900/20";
        case "System Design":
            return "text-purple-600 bg-purple-50 dark:bg-purple-900/20";
        case "IT Solutions":
            return "text-orange-600 bg-orange-50 dark:bg-orange-900/20";
        case "AI & Intelligence":
            return "text-rose-600 bg-rose-50 dark:bg-rose-900/20";
        default:
            return "text-zinc-600 bg-zinc-100 dark:bg-zinc-800";
    }
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group h-full relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col"
        >
            <div className="aspect-[16/9] overflow-hidden relative">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md border border-white/10 ${getCategoryColor(blog.category)}`}>
                        {blog.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-50 dark:bg-orange-950/30 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <Link href={`/blog/${blog.slug}`} className="block mb-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {blog.title}
                    </h3>
                </Link>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
                    <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
                        <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {blog.author}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {blog.date}
                        </div>
                    </div>

                    <Link
                        href={`/blog/${blog.slug}`}
                        className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:gap-2 transition-all"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;

