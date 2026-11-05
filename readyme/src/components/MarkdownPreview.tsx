import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewProps {
     markdown: string;
}

export default function MarkdownPreview({
    markdown,
}: MarkdownPreviewProps) {
    return (
        <article className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkdown>
        </article>
    );
}