'use client';

import { IconCheck, IconCopy } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'motion/react';

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
    <div className="group relative max-w-85 overflow-y-auto rounded-md bg-neutral-100 sm:max-w-full dark:bg-neutral-900">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          width={14}
          height={14}
          className="not-prose my-0 rounded-xs"
          alt="typescript-icon"
        />
        <button
          onClick={handleCopy}
          style={{ justifyContent: 'flex-' + (copied ? 'end' : 'start') }}
          className="flex h-6 cursor-pointer flex-col items-center gap-1 overflow-hidden rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-950 dark:bg-neutral-800 dark:text-white"
        >
          <motion.div layout className="flex items-center justify-center gap-1">
            <IconCopy size={12} />
            <span>Copy</span>
          </motion.div>
          <motion.div
            layout
            className="flex items-center justify-center gap-1 text-green-500"
          >
            <IconCheck size={12} />
            <span>Copied</span>
          </motion.div>
        </button>
      </div>

      <div className="max-h-136 w-full">
        <SyntaxHighlighter
          showLineNumbers
          language={language}
          style={theme === 'dark' ? atomDark : vs}
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
          }}
          codeTagProps={{
            style: {
              background: 'transparent',
              backgroundColor: 'transparent',
              minWidth: 0,
              width: '100%',
              boxSizing: 'border-box',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
