import React from "react";
import {
    SpotlightBackground,
    ContactUs
} from "@/components/Custom/custom_components.exports";
import BlogContent from "@/components/Custom/Blog/BlogContent";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
    title: "Blog | Ziostech Solutions",
    description: "Stay updated with the latest trends, insights, and news from Ziostech Solutions.",
};

const BlogPage = () => {
    // Fetch all required fields from markdown files
    const allPosts = getAllPosts([
        "slug",
        "title",
        "excerpt",
        "date",
        "author",
        "image",
        "category",
        "tags"
    ]);

    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 -z-10 bg-white dark:bg-black">
                    <SpotlightBackground />
                </div>

                <BlogContent initialBlogs={allPosts} />
            </div>

            <ContactUs />
        </>
    );
};

export default BlogPage;


