import { Locale } from '@/i18n/routing';
import { getAllPosts, getPostBySlug } from '@lib/api';
import { markdownToHtml } from '@lib/markdownToHtml';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function Post({ params }: Props) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main className="prose prose-slate mx-auto my-6 w-full leading-relaxed dark:prose-invert">
      <h1>{post.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return notFound();
  }

  const title = `${post.data.title} | laet.dev`;
  const description = post.data.excerpt;

  return {
    title,
    description,
  };
}

export async function generateStaticParams({ params }: Props) {
  const { locale } = await params;
  const posts = getAllPosts(locale);
  return posts.map((slug) => ({ slug }));
}
