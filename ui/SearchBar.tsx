'use client';

import { Dialog } from '@/components/Dialog';
import { IconCircle, IconSearch, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const components = [
  { name: 'Accordion', href: '/components/accordion' },
  { name: 'Animated Button', href: '/components/animated-button' },
  { name: 'Animated Text', href: '/components/animated-text' },
  { name: 'Badge', href: '/components/badge' },
  { name: 'Bento Grid', href: '/components/bento-grid' },
  { name: 'Button', href: '/components/button' },
  { name: 'Dialog', href: '/components/dialog' },
  { name: 'Expandable Card', href: '/components/expandable-card' },
  { name: 'Floating Dock', href: '/components/floating-dock' },
  { name: 'Lines Card', href: '/components/lines-card' },
  { name: 'Pointer Card', href: '/components/pointer-card' },
  { name: 'Price Switcher', href: '/components/price-switcher' },
  { name: 'Scale Card', href: '/components/scale-card' },
  { name: 'Scroll Progress', href: '/components/scroll-progress' },
  { name: 'Sidebar', href: '/components/sidebar' },
  { name: 'Tab Select', href: '/components/tab-select' },
  { name: 'Text Shimmer', href: '/components/text-shimmer' },
  { name: 'Tilt', href: '/components/tilt' },
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <Dialog
        trigger={
          <div className="gap-sm flex cursor-pointer items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
            <span className="mr-2">Search Commponents</span>
            <span className="rounded-sm bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-800">
              ctrl + k
            </span>
          </div>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="rounded-xl border border-neutral-200 bg-neutral-100 text-sm text-black sm:min-w-96 md:min-w-116 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-2 dark:border-neutral-800">
            <IconSearch
              size={18}
              className="text-neutral-600 dark:text-neutral-400"
            />
            <input
              autoFocus
              className="w-full bg-transparent py-2 focus:outline-none"
              placeholder="Search Components"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex max-h-64 flex-col gap-2 overflow-y-scroll p-2">
            <h6 className="px-2 text-xs text-neutral-600 dark:text-neutral-400">
              Components
            </h6>

            {filteredComponents.length > 0 ? (
              filteredComponents.map((component) => (
                <Link
                  href={component.href}
                  key={component.name}
                  className="flex items-center gap-2 rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-900"
                  onClick={() => setIsOpen(false)}
                >
                  <IconCircle size={18} />
                  <span>{component.name}</span>
                </Link>
              ))
            ) : (
              <div className="text-center text-neutral-500 dark:text-neutral-400">
                No components found
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 cursor-pointer rounded-full p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <IconX
              size={16}
              className="text-neutral-600 dark:text-neutral-400"
            />
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default SearchBar;
