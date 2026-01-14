'use client';

import { IconCheck, IconCopy } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import useResolvedTheme from '@/hooks/useResolvedTheme';

export function CodeBlock({
  code,
  language = 'tsx',
  className,
}: {
  code: string;
  language?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const resolvedTheme = useResolvedTheme();

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
    <div
      className={cn(
        'group relative max-w-[calc(100vw-2rem)] overflow-y-auto rounded-md border border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-950'
      )}
    >
      <div className="absolute top-1 right-1 flex items-center justify-end gap-2 p-2">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          width={16}
          height={16}
          className="not-prose my-0 rounded-xs"
          alt="typescript-icon"
        />
        <button
          onClick={handleCopy}
          style={{ justifyContent: 'flex-' + (copied ? 'end' : 'start') }}
          className="flex h-6 cursor-pointer flex-col items-center gap-1 overflow-hidden rounded p-1 text-xs text-neutral-950 dark:bg-neutral-900 dark:text-white"
        >
          <motion.div layout className="flex items-center justify-center gap-1">
            <IconCopy size={14} />
            <span>Copy</span>
          </motion.div>
          <motion.div
            layout
            className="flex items-center justify-center gap-1 text-green-500"
          >
            <IconCheck size={14} />
            <span>Copied</span>
          </motion.div>
        </button>
      </div>

      <div className={cn('max-h-136 w-full', className)}>
        <SyntaxHighlighter
          showLineNumbers
          language={language}
          style={resolvedTheme === 'dark' ? atomDark : vs}
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
