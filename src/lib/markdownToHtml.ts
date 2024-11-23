import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import { unified } from 'unified';
import { transformerCopyButton } from '@rehype-pretty/transformers';

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'material-theme-ocean',
      transformers: [transformerCopyButton()],
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
};
