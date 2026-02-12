import ComponentsNav from '@/ui/docs/components-nav';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="docs-content prose prose-headings:font-semibold prose-headings:text-black prose-headings:mb-2 prose-p:mt-2 prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl prose-h4:text-base sm:prose-h4:text-lg prose-h5:text-sm sm:prose-h5:text-base prose-h6:text-xs sm:prose-h6:text-sm prose-a:no-underline prose-a:hover:underline dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-neutral-300 dark:prose-li:text-neutral-300 max-w-full">
      {children}
      <ComponentsNav />
    </div>
  );
}
