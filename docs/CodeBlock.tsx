'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
    <div className="group relative max-w-85 overflow-x-auto rounded-md bg-neutral-900 sm:max-w-full">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 cursor-pointer rounded bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <div className="w-full">
        <SyntaxHighlighter
          language={language}
          style={a11yDark}
          customStyle={{
            background: 'transparent',
            backgroundColor: 'transparent',
            margin: 0,
            padding: '1rem',
            borderRadius: '0.5rem',
            minWidth: 0,
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '0.95rem',
            overflowX: 'auto',
          }}
          codeTagProps={{
            style: {
              background: 'transparent',
              backgroundColor: 'transparent',
              minWidth: 0,
              width: '100%',
              boxSizing: 'border-box',
              overflowX: 'auto',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
