import { useEffect, useState } from "react";
import { Check, Copy, Download } from "lucide-react";

interface ExportButtonProps {
  markdown: string;
}

export default function ExportButton({ markdown }: ExportButtonProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  useEffect(() => {
    if (copyStatus === "idle") return;

    const timeout = window.setTimeout(() => setCopyStatus("idle"), 1800);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "README.md";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={copyMarkdown}
        className="action-button secondary"
        aria-live="polite"
      >
        {copyStatus === "copied" ? <Check size={15} /> : <Copy size={15} />}
        {copyStatus === "copied"
          ? "Copied"
          : copyStatus === "error"
            ? "Try again"
            : "Copy"}
      </button>
      <button
        type="button"
        onClick={downloadMarkdown}
        className="action-button primary"
      >
        <Download size={15} />
        Download
      </button>
    </div>
  );
}
