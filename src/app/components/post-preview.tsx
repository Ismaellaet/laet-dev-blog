import { Tags } from 'lucide-react';
import Link from 'next/link';
import { DateFormatter } from '@components/date-formatter';

type PostPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
};

export const PostPreview = ({
  slug,
  title,
  excerpt,
  tags,
  date,
}: PostPreviewProps) => {
  const truncateText = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <article className="transform rounded-lg border border-border bg-card p-5 shadow-md transition hover:shadow-lg">
      <Link
        href={`/blog/posts/${slug}`}
        className="text-3xl text-primary-foreground hover:text-foreground"
      >
        <h3>{title}</h3>
      </Link>

      <p
        className="mt-3 leading-relaxed"
        title={excerpt}
      >
        {`${truncateText(excerpt, 280)} `}
        <Link
          href={`/blog/posts/${slug}`}
          className="text-blue-700 transition duration-200 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
        >
          leia mais →
        </Link>
      </p>

      <div className="mt-3 flex flex-col justify-between gap-2 border-t pt-3 sm:flex-row">
        <div className="flex flex-wrap items-center gap-2">
          <Tags className="text-border" />
          {tags.map((tag) => (
            <div
              key={tag}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs"
            >
              {tag}
            </div>
          ))}
        </div>
        <DateFormatter dateString={date} />
      </div>
    </article>
  );
};
