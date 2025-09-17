'use client';

import { AnimatePresence, motion } from 'motion/react';
import React, { memo } from 'react';

interface HoverObjTypes {
  idx: number | null;
  sectionIdx: number | null;
}

const ComponentsBar = memo(function ComponentsBar({
  setClickedItem,
  clickedItem,
}: {
  setClickedItem: (item: HoverObjTypes) => void;
  clickedItem: HoverObjTypes;
}) {
  const sections = [
    { title: 'Buttons' },
    { title: 'Cards' },
    { title: 'Other Components' },
  ];

  const components = [
    {
      title: 'Accordion',
      category: 'Other Components',
    },
    {
      title: 'Animated Button',
      category: 'Buttons',
    },
    {
      title: 'Animated Text',
      category: 'Other Components',
    },
    {
      title: 'Banner',
      category: 'Other Components',
    },
    {
      title: 'Bento Grid',
      category: 'Other Components',
    },
    {
      title: 'Button',
      category: 'Buttons',
    },
    {
      title: 'Expandable Card',
      category: 'Cards',
    },
    {
      title: 'Floating Dock',
      category: 'Other Components',
    },
    {
      title: 'Pointer Card',
      category: 'Cards',
    },
    {
      title: 'Price Switcher',
      category: 'Other Components',
    },
    {
      title: 'Scale Card',
      category: 'Cards',
    },
    {
      title: 'Scroll Progress',
      category: 'Other Components',
    },
    {
      title: 'Sidebar',
      category: 'Other Components',
    },
    {
      title: 'Tab Select',
      category: 'Other Components',
    },
    {
      title: 'Badge',
      category: 'Other Components',
    },
  ];

  return (
    <div className="space-y-lg no-scrollbar sticky top-24 max-h-[700px] overflow-y-scroll">
      <h3 className="text-para mb-4 font-semibold">Components</h3>
      <div className="gap-md flex flex-col">
        {sections.map((sec, sectionIdx) => {
          const items = components.filter((c) => c.category === sec.title);
          return (
            <div key={sectionIdx} className="flex flex-col">
              <h4 className="text-small font-semibold">{sec.title}</h4>
              <div className="mt-2 flex flex-col">
                {items.length === 0 ? (
                  <span className="text-small p-2 text-neutral-500">
                    No items
                  </span>
                ) : (
                  items.map((item, idx) => {
                    const isClicked =
                      clickedItem?.sectionIdx === sectionIdx &&
                      clickedItem.idx === idx;
                    return (
                      <button
                        onClick={() => setClickedItem({ sectionIdx, idx })}
                        key={idx}
                        className={`text-small relative min-w-48 cursor-pointer overflow-hidden rounded-md p-2 text-left text-neutral-600 transition-colors dark:text-neutral-400 dark:hover:text-neutral-200`}
                      >
                        <AnimatePresence>
                          {isClicked && (
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
                        <span
                          className={`relative z-10 ${
                            isClicked
                              ? 'text-neutral-600 dark:text-neutral-200'
                              : ''
                          }`}
                        >
                          {item.title}
                        </span>
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
