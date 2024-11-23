export type Post = {
  data: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
  };
  content: string;
};
