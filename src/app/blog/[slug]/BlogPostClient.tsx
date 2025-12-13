"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowLeft, Tag, Clock, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface BlogPostClientProps {
    post: {
        slug: string;
        title: string;
        excerpt: string;
        date: string;
        author: string;
        image: string;
        category: string;
        tags: string[];
    };
    contentHtml: string;
    readingTime: number;
}

export default function BlogPostClient({ post, contentHtml, readingTime }: BlogPostClientProps) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = post.title;

    const handleShare = (platform: string) => {
        const urls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        };

        if (platform === 'copy') {
            navigator.clipboard.writeText(shareUrl);
            toast.success('Link copied to clipboard!');
        } else {
            window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pt-20 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black border-b border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 max-w-5xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 mb-6 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Category Badge */}
                    <div className="mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-3xl">
                        {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-zinc-600 dark:text-zinc-400 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-zinc-900 dark:text-zinc-100">{post.author}</p>
                                <p className="text-xs text-zinc-500">Author</p>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>

                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-orange-600" />
                            <span>{post.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-orange-600" />
                            <span>{readingTime} min read</span>
                        </div>

                        <div className="ml-auto flex items-center gap-2">
                            <button
                                onClick={() => handleShare('twitter')}
                                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-blue-600 transition-colors"
                                title="Share on Twitter"
                            >
                                <FaXTwitter className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-blue-700 transition-colors"
                                title="Share on LinkedIn"
                            >
                                <FaLinkedin className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleShare('copy')}
                                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-orange-100 dark:hover:bg-orange-950 hover:text-orange-600 transition-colors"
                                title="Copy link"
                            >
                                <LinkIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center gap-3 flex-wrap mt-6">
                            <Tag className="w-4 h-4 text-zinc-500" />
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 rounded-full border border-orange-200 dark:border-orange-900/50 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Image */}
            {post.image && (
                <section className="py-8 md:py-12 bg-white dark:bg-black">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Content Section */}
            <section className="py-12 md:py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="prose prose-lg dark:prose-invert max-w-none
                                prose-headings:font-bold prose-headings:tracking-tight
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-zinc-900 dark:prose-h2:text-zinc-100 prose-h2:border-b-2 prose-h2:border-orange-500/20 dark:prose-h2:border-orange-500/20 prose-h2:pb-3
                                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-zinc-900 dark:prose-h3:text-zinc-100
                                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-zinc-800 dark:prose-h4:text-zinc-200
                                prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[1.1rem]
                                prose-a:text-orange-600 dark:prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-all
                                prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 prose-strong:font-semibold
                                prose-ul:my-6 prose-ul:space-y-3 prose-ul:list-none prose-ul:pl-0
                                prose-li:relative prose-li:pl-6 prose-li:text-zinc-700 dark:prose-li:text-zinc-300 prose-li:leading-relaxed 
                                prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.6em] prose-li:before:h-2 prose-li:before:w-2 prose-li:before:rounded-full prose-li:before:bg-orange-500
                                prose-ol:my-6 prose-ol:space-y-3
                                prose-code:text-orange-600 dark:prose-code:text-orange-400 prose-code:bg-orange-50 dark:prose-code:bg-orange-950/30 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] prose-code:border prose-code:border-orange-200 dark:prose-code:border-orange-900/50
                                prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:p-6
                                prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-orange-50 prose-blockquote:to-transparent dark:prose-blockquote:from-orange-950/20 dark:prose-blockquote:to-transparent prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:text-zinc-700 dark:prose-blockquote:text-zinc-300 prose-blockquote:font-medium
                                prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800 prose-hr:my-12 prose-hr:border-t-2
                                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800
                                prose-table:border-collapse prose-table:w-full prose-table:my-8
                                prose-th:bg-zinc-50 dark:prose-th:bg-zinc-900 prose-th:p-4 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-zinc-200 dark:prose-th:border-zinc-800 prose-th:text-zinc-900 dark:prose-th:text-zinc-100
                                prose-td:p-4 prose-td:border prose-td:border-zinc-200 dark:prose-td:border-zinc-800 prose-td:text-zinc-700 dark:prose-td:text-zinc-300"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-24 space-y-6">
                                {/* Author Card */}
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-4">About the Author</h3>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{post.author}</p>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400">Content Writer</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                        Expert in technology and digital transformation, sharing insights to help businesses grow.
                                    </p>
                                </div>

                                {/* Share Card */}
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/10 border border-orange-200 dark:border-orange-900/50">
                                    <h3 className="text-sm font-semibold text-orange-900 dark:text-orange-400 uppercase tracking-wide mb-4">Share this article</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => handleShare('twitter')}
                                            className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm group"
                                        >
                                            <FaXTwitter className="w-4 h-4 group-hover:text-blue-500" />
                                            Twitter X
                                        </button>
                                        <button
                                            onClick={() => handleShare('linkedin')}
                                            className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm group"
                                        >
                                            <FaLinkedin className="w-4 h-4 group-hover:text-blue-700" />
                                            LinkedIn
                                        </button>
                                        <button
                                            onClick={() => handleShare('facebook')}
                                            className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm group"
                                        >
                                            <FaFacebook className="w-4 h-4 group-hover:text-blue-600" />
                                            Facebook
                                        </button>
                                    </div>
                                </div>

                                {/* CTA Card */}
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl">
                                    <h3 className="text-lg font-bold mb-2">Ready to Transform Your Business?</h3>
                                    <p className="text-sm text-orange-100 mb-4">
                                        Let's discuss how we can help you achieve your goals.
                                    </p>
                                    <Link
                                        href="#contact-section"
                                        className="block w-full py-3 px-4 bg-white text-orange-600 rounded-lg font-semibold text-center hover:bg-orange-50 transition-colors"
                                    >
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
