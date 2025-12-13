import React from "react";
import { getPostBySlug, getAllPosts, markdownToHtml } from "@/lib/blog";
import { SpotlightBackground, ContactUs } from "@/components/Custom/custom_components.exports";
import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"]);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug, [
        "title",
        "excerpt",
        "image",
        "author",
        "seoTitle",
        "seoDescription",
        "keywords"
    ]);

    const metaTitle = post.seoTitle || `${post.title} | Ziostech Solutions`;
    const metaDescription = post.seoDescription || post.excerpt;

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: post.keywords?.join(', '),
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            images: [{ url: post.image }],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: [post.image],
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const resolvedParams = await params;

    const post = getPostBySlug(resolvedParams.slug, [
        "slug",
        "title",
        "excerpt",
        "date",
        "author",
        "image",
        "category",
        "tags",
        "content"
    ]);

    const contentHtml = await markdownToHtml(post.content || "");
    const wordCount = post.content?.split(/\s+/).length || 0;
    const readingTime = Math.ceil(wordCount / 200);

    return (
        <>
            <div className="relative min-h-screen">
                <div className="absolute inset-0 -z-10 bg-white dark:bg-black">
                    <SpotlightBackground />
                </div>

                <BlogPostClient
                    post={post}
                    contentHtml={contentHtml}
                    readingTime={readingTime}
                />
            </div>
            <ContactUs />
        </>
    );
}
