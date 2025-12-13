import React from "react";
import BlogCard, { BlogPost } from "./BlogCard";
import { motion, AnimatePresence } from "framer-motion";

interface BlogListProps {
    blogs: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    return (
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
                {blogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default BlogList;


