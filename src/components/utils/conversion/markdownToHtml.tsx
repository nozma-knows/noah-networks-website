import { remark } from "remark";
import html from "remark-html";

interface MarkdownToHtmlProps {
  markdown: string;
}

export async function markdownToHtml({ markdown }: MarkdownToHtmlProps) {
  const processedContent = await remark().use(html).process(markdown);

  return processedContent.toString();
}
