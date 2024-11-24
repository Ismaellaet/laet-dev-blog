import { Post } from '@interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export const getPostBySlug = (slug: string): Post | null => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data: { ...data, slug: realSlug }, content } as Post;
};

export const getPostSlugs = (): string[] | null => {
  try {
    return fs.readdirSync(postsDirectory);
  } catch {
    return null;
  }
};

export const getAllPosts = (): Post[] => {
  const slugs = getPostSlugs();

  if (!slugs) {
    return [];
  }

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1!.data.date > post2!.data.date ? -1 : 1));
  return posts as Post[];
};
