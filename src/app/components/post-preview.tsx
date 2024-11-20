import { Tags } from "lucide-react";
import Link from "next/link";
import { DateFormatter } from "@components/date-formatter";

type PostPreviewProps = {
  title: string;
  intro: string;
  tags: string[];
  date: string;
};

export const PostPreview = ({ title, intro, tags, date }: PostPreviewProps) => {
  const truncateText = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <article className="bg-card p-5 border-border border rounded-lg shadow-md hover:shadow-lg transition transform">
      <Link
        href="#"
        className="text-3xl text-primary-foreground hover:text-foreground"
      >
        <h3>{title}</h3>
      </Link>

      <p className="mt-3 leading-relaxed">
        {`${truncateText(intro, 280)} `}
        <Link
          href="#"
          className="text-blue-400 hover:text-blue-500 hover:underline transition duration-200"
        >
          leia mais →
        </Link>
      </p>

      <div className="border-t mt-3 pt-3 flex justify-between">
        <div className="flex items-center gap-2">
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
