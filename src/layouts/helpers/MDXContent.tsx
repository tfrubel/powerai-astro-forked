import { marked } from "marked";

const MDXContent = ({ content }: { content: string }) => {
  if (!content) return null;
  
  const htmlContent = marked.parse(content) as string;
  
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default MDXContent;
