import { CSSProperties } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CODE_STYLE: {
  [key: string]: CSSProperties;
} = {
  'code[class*="language-"]': {
    color: "",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "2rem",
    overflow: "auto",
    borderRadius: "1.5rem",
    background: "#18181b",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#1d1f21",
  },
  comment: {
    color: "#a1a1aa",
  },
  prolog: {
    color: "#a1a1aa",
  },
  doctype: {
    color: "#a1a1aa",
  },
  cdata: {
    color: "#a1a1aa",
  },
  punctuation: {
    color: "",
  },
  property: {
    color: "#f4f4f5",
  },
  keyword: {
    color: "#f472b6",
  },
  tag: {
    color: "#f472b6",
  },
  "class-name": {
    color: "#FFFFB6",
    textDecoration: "underline",
  },
  boolean: {
    color: "#5eead4",
  },
  constant: {
    color: "#5eead4",
  },
  symbol: {
    color: "#f92672",
  },
  deleted: {
    color: "#f92672",
  },
  number: {
    color: "#f472b6",
  },
  selector: {
    color: "#f472b6",
  },
  "attr-name": {
    color: "#f472b6",
  },
  string: {
    color: "#f472b6",
  },
  char: {
    color: "#f472b6",
  },
  builtin: {
    color: "#f472b6",
  },
  inserted: {
    color: "#f472b6",
  },
  variable: {
    color: "#f472b6",
  },
  operator: {
    color: "#a1a1aa",
  },
  entity: {
    color: "#FFFFB6",
    cursor: "help",
  },
  url: {
    color: "#f472b6",
  },
  ".language-css .token.string": {
    color: "",
  },
  ".style .token.string": {
    color: "#f472b6",
  },
  atrule: {
    color: "#F9EE98",
  },
  "attr-value": {
    color: "#F9EE98",
  },
  function: {
    color: "#5eead4",
  },
  regex: {
    color: "#f472b6",
  },
  important: {
    color: "#fd971f",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

interface Props {
  markdown: string;
}

const MarkdownOutput = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      className="prose prose-gray p-4 py-20 sm:p-8 w-full max-w-2xl !flex-1 sm:prose-lg sm:py-24 mx-auto prose-headings:tracking-tight prose-h1:font-bold prose-h1:tracking-tight prose-pre:p-0"
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className ?? "language-js");
          return !inline && match ? (
            <SyntaxHighlighter
              style={CODE_STYLE}
              language={match[1]}
              PreTag="div"
              spread={props}
            >
              {children}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownOutput;
