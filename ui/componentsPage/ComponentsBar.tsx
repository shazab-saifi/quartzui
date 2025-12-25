'use client';

import { componentsData } from '@/lib/components-data';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import React, { memo } from 'react';

const ComponentsBar = memo(function ComponentsBar({ slug }: { slug?: string }) {
  const router = useRouter();

  const sections = [
    { title: 'Documentation' },
    { title: 'Buttons' },
    { title: 'Text' },
    { title: 'Cards' },
    { title: 'Other Components' },
  ];

  return (
    <div className="scrollbar-thin scrollbar sticky top-24 max-h-[750px] overflow-y-scroll pr-4">
      <div className="flex flex-col gap-6">
        {sections.map((sec, sectionIdx) => {
          const items = componentsData.filter((c) => c.category === sec.title);
          return (
            <div key={sectionIdx} className="flex flex-col">
              <h4 className="px-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {sec.title}
              </h4>
              <div className="mt-2 flex flex-col">
                {items.length === 0 ? (
                  <span className="p-2 text-sm text-neutral-500 dark:text-neutral-400">
                    No items
                  </span>
                ) : (
                  items.map((item, idx) => {
                    return (
                      <button
                        onClick={() => {
                          router.push(`/docs/${item.identifier}`);
                        }}
                        key={idx}
                        className={`relative cursor-pointer overflow-hidden rounded-md p-2 text-left text-sm ${
                          item.identifier === slug
                            ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900/90 dark:hover:text-neutral-200'
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
