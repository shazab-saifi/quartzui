'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function CodeBlock({
  code,
  language = 'tsx',
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

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
    <div className="group relative max-w-85 overflow-x-auto rounded-md bg-neutral-100 sm:max-w-full dark:bg-neutral-900">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 cursor-pointer rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-950 opacity-0 group-hover:opacity-100 dark:bg-neutral-800 dark:text-white"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <div className="w-full">
        <SyntaxHighlighter
          showLineNumbers
          language={language}
          style={theme === 'dark' ? vs2015 : vs}
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
