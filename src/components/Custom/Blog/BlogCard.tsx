
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, User, Calendar, Clock } from "lucide-react";
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
            return "text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400";
        case "App Development":
            return "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400";
        case "System Design":
            return "text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-900/30 dark:border-purple-800 dark:text-purple-400";
        case "IT Solutions":
            return "text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/30 dark:border-orange-800 dark:text-orange-400";
        case "AI & Intelligence":
            return "text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400";
        default:
            return "text-zinc-600 bg-zinc-100 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400";
    }
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col h-full bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-colors duration-300"
        >
            {/* Image Container */}
            <Link href={`/blog/${blog.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md shadow-sm ${getCategoryColor(blog.category)}`}>
                        {blog.category}
                    </span>
                </div>
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.date}</span>
                    </div>
                </div>

                <Link href={`/blog/${blog.slug}`} className="block group/title mb-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                        {blog.title}
                    </h3>
                </Link>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {blog.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                            <User className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">{blog.author}</span>
                    </div>

                    <Link
                        href={`/blog/${blog.slug}`}
                        className="flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                        Read Post
                        <ArrowUpRight className="w-4 h-4 ml-0.5" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;
