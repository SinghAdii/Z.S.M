import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  content?: string;
  contentHtml?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string, fields: string[] = []): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  // Always include slug
  items.slug = realSlug;

  // Process requested fields
  fields.forEach((field) => {
    if (field === "slug") {
      items.slug = realSlug;
    } else if (field === "content") {
      items.content = content;
    } else if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items as BlogPost;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getAllPosts(fields: string[] = []): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
