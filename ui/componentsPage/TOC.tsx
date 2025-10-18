'use client';

import useHeadingsData from '@/hooks/useHeadingsData';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { IconTable } from '@tabler/icons-react';
import { useState } from 'react';
import { motion } from 'motion/react';

const NAVBAR_HEIGHT = 96;

const Headings = ({
  headings,
  activeId,
}: {
  headings: Element[];
  activeId: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + rect.top - NAVBAR_HEIGHT,
        behavior: 'smooth',
      });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
      {headings.map((heading) => (
        <li key={heading.id} className="flex items-center gap-4">
          <div className="relative flex h-4 w-1 items-center">
            {heading.id === activeId && (
              <motion.span
                layoutId="span-animation"
                transition={{ duration: 0.3, stiffness: 500, damping: 30 }}
                className="absolute h-5 w-1 rounded-full bg-sky-500"
              />
            )}
          </div>
          <a
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
            className={
              heading.id === activeId
                ? 'font-medium text-neutral-900 transition-colors dark:text-white'
                : ''
            }
          >
            {heading.textContent}
          </a>
        </li>
      ))}
    </ul>
  );
};

const TOC = () => {
  const { nestedHeadings } = useHeadingsData();
  const [activeId, setActiveId] = useState<string>('');
  useIntersectionObserver(setActiveId, activeId);

  return (
    <nav>
      <div className="mb-4 flex items-center gap-2 text-neutral-950 dark:text-white">
        <IconTable size={14} />
        <h3 className="text-sm font-bold">Table of Contents</h3>
      </div>
      <div className="relative flex items-stretch gap-2">
        <span
          className="absolute left-px w-[2px] rounded-full bg-neutral-200 dark:bg-neutral-800"
          style={{ minHeight: '100%' }}
        ></span>
        <Headings headings={nestedHeadings} activeId={activeId} />
      </div>
    </nav>
  );
};

export default TOC;
