'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import React, { memo } from 'react';

const ComponentsBar = memo(function ComponentsBar({ slug }: { slug?: string }) {
  const router = useRouter();

  const sections = [
    { title: 'Buttons' },
    { title: 'Text' },
    { title: 'Cards' },
    { title: 'Other Components' },
  ];

  const components = [
    {
      title: 'Accordion',
      category: 'Other Components',
      identifier: 'accordion',
    },
    {
      title: 'Animated Button',
      category: 'Buttons',
      identifier: 'animated-button',
    },
    {
      title: 'Animated Text',
      category: 'Text',
      identifier: 'animated-text',
    },
    {
      title: 'Bento Grid',
      category: 'Other Components',
      identifier: 'bento-grid',
    },
    {
      title: 'Button',
      category: 'Buttons',
      identifier: 'button',
    },
    {
      title: 'Expandable Card',
      category: 'Cards',
      identifier: 'expendable-card',
    },
    {
      title: 'Floating Dock',
      category: 'Other Components',
      identifier: 'floating-dock',
    },
    {
      title: 'Pointer Card',
      category: 'Cards',
      identifier: 'pointer-card',
    },
    {
      title: 'Price Switcher',
      category: 'Other Components',
      identifier: 'price-switcher',
    },
    // {
    //   title: 'Scale Card',
    //   category: 'Cards',
    //   identifier: 'scale-card',
    // },
    // {
    //   title: 'Scroll Progress',
    //   category: 'Other Components',
    //   identifier: 'scroll-progress',
    // },
    {
      title: 'Sidebar',
      category: 'Other Components',
      identifier: 'sidebar',
    },
    {
      title: 'Tab Select',
      category: 'Other Components',
      identifier: 'tab-select',
    },
    {
      title: 'Badge',
      category: 'Other Components',
      identifier: 'badge',
    },
    {
      title: 'Dialog',
      category: 'Other Components',
      identifier: 'dialog',
    },
    {
      title: 'Lines Card',
      category: 'Cards',
      identifier: 'lines-card',
    },
    {
      title: 'Text Shimmer',
      category: 'Text',
      identifier: 'text-shimmer',
    },
    {
      title: 'Tilt',
      category: 'Other Components',
      identifier: 'tilt',
    },
  ];

  return (
    <div className="scrollbar-thin scrollbar sticky top-24 max-h-[750px] overflow-y-scroll pr-4">
      <h3 className="text-para mb-4 font-semibold text-neutral-900 dark:text-neutral-100">
        Components
      </h3>
      <div className="flex flex-col gap-8">
        {sections.map((sec, sectionIdx) => {
          const items = components.filter((c) => c.category === sec.title);
          return (
            <div key={sectionIdx} className="flex flex-col">
              <h4 className="text-small font-semibold text-neutral-800 dark:text-neutral-200">
                {sec.title}
              </h4>
              <div className="mt-2 flex flex-col">
                {items.length === 0 ? (
                  <span className="text-small p-2 text-neutral-500 dark:text-neutral-400">
                    No items
                  </span>
                ) : (
                  items.map((item, idx) => {
                    return (
                      <button
                        onClick={() => {
                          console.log(slug);
                          router.push(`/components/${item.identifier}`);
                        }}
                        key={idx}
                        className={`text-small relative min-w-48 cursor-pointer overflow-hidden rounded-md p-2 text-left ${
                          item.identifier === slug
                            ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900/40 dark:hover:text-neutral-200'
                        } `}
                      >
                        <AnimatePresence>
                          {item.identifier === slug && (
                            <motion.span
                              layoutId="hovered-span"
                              className="absolute inset-0 rounded-md bg-neutral-200/70 dark:bg-neutral-800"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                              }}
                            />
                          )}
                        </AnimatePresence>
                        <span className={`relative z-10`}>{item.title}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ComponentsBar;
