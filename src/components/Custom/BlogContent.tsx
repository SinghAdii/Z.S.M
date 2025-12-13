"use client";

import React, { useState, useMemo } from "react";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";
import { BlogPost } from "./BlogCard";

interface BlogContentProps {
  initialBlogs: BlogPost[];
}

const BlogContent: React.FC<BlogContentProps> = ({ initialBlogs }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "App Development",
    "System Design",
    "IT Solutions",
    "AI & Intelligence"
  ];

  // Filter blogs based on selected category
  const filteredBlogs = useMemo(() => {
    if (!initialBlogs || initialBlogs.length === 0) return [];
    if (selectedCategory === "All") return initialBlogs;
    return initialBlogs.filter((blog) => blog.category === selectedCategory);
  }, [initialBlogs, selectedCategory]);

  if (!initialBlogs || initialBlogs.length === 0) {
    return (
      <section className="py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 text-zinc-800 dark:text-zinc-200">No blogs available yet</h2>
        <p className="text-zinc-600 dark:text-zinc-400">Check back soon for new insights!</p>
      </section>
    );
  }

  return (
    <>
      <BlogHero
        title="Our Latest Insights"
        subtitle="Explore our thoughts on technology, innovation, and digital transformation."
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-black/50 border-t border-zinc-200 dark:border-zinc-800 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredBlogs.length > 0 ? (
            <BlogList blogs={filteredBlogs} />
          ) : (
            <div className="text-center py-20">
              <p className="text-zinc-500">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogContent;
