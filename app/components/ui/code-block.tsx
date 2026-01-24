interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  highlights?: { line: number; type: "added" | "removed" | "highlight" }[];
}

export function CodeBlock({ code, language = "typescript", fileName, highlights = [] }: CodeBlockProps) {
  const lines = code.split("\n");

  const getLineClass = (lineIndex: number) => {
    const highlight = highlights.find((h) => h.line === lineIndex + 1);
    if (!highlight) return "";
    switch (highlight.type) {
      case "added":
        return "bg-git-added/10 border-l-2 border-git-added";
      case "removed":
        return "bg-git-removed/10 border-l-2 border-git-removed";
      case "highlight":
        return "bg-accent/10";
      default:
        return "";
    }
  };

  return (
    <div className="code-block rounded-xl overflow-hidden">
      {fileName && (
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-text-secondary font-mono">{fileName}</span>
        </div>
      )}
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="font-mono">
          {lines.map((line, i) => (
            <div key={i} className={`px-2 -mx-2 ${getLineClass(i)}`}>
              <span className="text-text-secondary select-none mr-4">{(i + 1).toString().padStart(2, "0")}</span>
              <span>{line || " "}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
