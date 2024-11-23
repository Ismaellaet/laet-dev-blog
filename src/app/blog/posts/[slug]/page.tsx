import { getPostBySlug } from '@lib/api';
import { markdownToHtml } from '@lib/markdownToHtml';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main className="prose prose-slate mx-auto my-6 leading-relaxed dark:prose-invert">
      <h1>{post.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
