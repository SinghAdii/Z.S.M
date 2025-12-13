"use client";

import React, { useState, useMemo } from "react";
import BlogHero from "./BlogHero";
import ThoughtLeadership from "./ThoughtLeadership";
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
      <section className="py-32 text-center min-h-screen flex flex-col items-center justify-center bg-background">
        <h2 className="text-3xl font-bold mb-4 text-foreground">No blogs available yet</h2>
        <p className="text-muted-foreground">Check back soon for new insights!</p>
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

      <section className="py-20 md:py-28 bg-zinc-50 dark:bg-black relative min-h-[calc(100vh-20rem)]">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Results Info */}
          <div className="flex items-center justify-between mb-10 px-2">
            <h3 className="text-2xl font-bold tracking-tight">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h3>
            <span className="text-sm text-muted-foreground font-medium bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full">
              {filteredBlogs.length} posts found
            </span>
          </div>

          {filteredBlogs.length > 0 ? (
            <BlogList blogs={filteredBlogs} />
          ) : (
            <div className="text-center py-20 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800">
              <p className="text-zinc-500 text-lg">No posts found in this category.</p>
            </div>
          )}

          {/* Pagination / Load More (Visual only for now) */}
          {filteredBlogs.length > 9 && (
            <div className="flex justify-center mt-16">
              <button className="px-8 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
      <ThoughtLeadership />
    </>
  );
};

export default BlogContent;
