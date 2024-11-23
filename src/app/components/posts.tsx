import { PostPreview } from '@components/post-preview';

export const Posts = () => {
  return (
    <section className="mt-5 flex w-full flex-1 flex-col space-y-2">
      <PostPreview
        title="Primeiros passos no Javascript"
        excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived"
        tags={['javascript', 'typescript', 'python']}
        date="2024-11-20"
      />
      <PostPreview
        title="Primeiros passos no Javascript"
        excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived"
        tags={['javascript', 'typescript', 'python']}
        date="2024-11-20"
      />
      <PostPreview
        title="Primeiros passos no Javascript"
        excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived"
        tags={['javascript', 'typescript', 'python']}
        date="2024-11-20"
      />
    </section>
  );
};
