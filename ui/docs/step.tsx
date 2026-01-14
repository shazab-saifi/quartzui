'use client';

import useResolvedTheme from '@/hooks/useResolvedTheme';

export function Step({
  number,
  title,
  children,
  isLast = false,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  const resolvedTheme = useResolvedTheme();

  const getBorderImage = () => {
    if (resolvedTheme === 'dark') {
      return 'repeating-linear-gradient(to bottom, var(--color-neutral-800) 0, var(--color-neutral-800) 4px, transparent 4px, transparent 10px) 1';
    }
    return 'repeating-linear-gradient(to bottom, var(--color-neutral-200) 0, var(--color-neutral-200) 4px, transparent 4px, transparent 10px) 1';
  };

  return (
    <li className="relative mb-10 pl-8">
      <span className="bg-background absolute top-0 -left-4 flex h-8 w-8 items-center justify-center rounded-sm border text-sm font-medium">
        {number}
      </span>

      {!isLast && (
        <span
          aria-hidden
          className="border-muted-foreground/30 absolute top-8 -left-0.25 block h-[calc(100%+2.5rem)] w-px border-l-2"
          style={{
            borderImage: getBorderImage(),
          }}
        />
      )}

      <h3 className="mb-2 font-semibold">{title}</h3>

      <div className="prose prose-neutral dark:prose-invert">{children}</div>
    </li>
  );
}
