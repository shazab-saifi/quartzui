import { ReactNode } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="prose prose-headings:font-semibold prose-headings:text-black prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-md dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-neutral-300 dark:prose-li:text-neutral-300">
      {children}
    </div>
  );
}
