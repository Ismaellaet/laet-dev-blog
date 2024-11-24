import { PostPreview } from '@components/post-preview';
import { getAllPosts } from '@lib/api';

export const Posts = () => {
  const allPosts = getAllPosts();

  return (
    <section className="mt-5 flex w-full flex-1 flex-col space-y-2">
      {!!allPosts.length &&
        allPosts.map((post) => (
          <PostPreview
            key={post.data.slug}
            slug={post.data.slug}
            title={post.data.title}
            excerpt={post.data.excerpt}
            date={post.data.date}
            tags={post.data.tags}
          />
        ))}
    </section>
  );
};
