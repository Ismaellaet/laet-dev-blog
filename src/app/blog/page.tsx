import { Intro } from '@components/intro';
import { Posts } from '@components/posts';

export default function Blog() {
  return (
    <main className="my-6 flex flex-grow flex-col">
      <Intro />
      <Posts />
    </main>
  );
}
