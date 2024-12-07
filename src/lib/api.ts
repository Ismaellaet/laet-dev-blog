import { Post } from '@interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export const getPostBySlug = (slug: string, locale: string): Post | null => {
  const fullPath = join(postsDirectory, locale, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data: { ...data, slug }, content } as Post;
};

export const getPostSlugs = (locale: string): string[] | null => {
  try {
    const dir = join(postsDirectory, locale);
    return fs.readdirSync(dir).map((file) => file.replace(/\.md$/, ''));
  } catch {
    return null;
  }
};

export const getAllPosts = (locale: string): Post[] => {
  const slugs = getPostSlugs(locale);

  if (!slugs) {
    return [];
  }

  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .sort((post1, post2) => (post1!.data.date > post2!.data.date ? -1 : 1));
  return posts as Post[];
};
