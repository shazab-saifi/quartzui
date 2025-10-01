'use client';

import useHeadingsData from '@/hooks/useHeadingsData';
import React from 'react';

const NAVBAR_HEIGHT = 96;

const Headings = ({ headings }: { headings: Element[] }) => {
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
    <ul>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
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

  return (
    <nav className="text-sm text-neutral-600 dark:text-neutral-400">
      <Headings headings={nestedHeadings} />
    </nav>
  );
};

export default TOC;
