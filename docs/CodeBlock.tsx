'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({
  code,
  language = 'tsx',
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="group relative rounded-md bg-neutral-900">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 cursor-pointer rounded bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          background: 'transparent',
          backgroundColor: 'transparent',
          margin: 0,
          padding: '1rem',
          borderRadius: '0.5rem',
        }}
        codeTagProps={{
          style: { background: 'transparent', backgroundColor: 'transparent' },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
