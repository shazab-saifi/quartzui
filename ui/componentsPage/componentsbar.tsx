'use client';

import { componentsData } from '@/lib/components-data';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

export const categories = [
  { title: 'Documentation' },
  { title: 'Buttons' },
  { title: 'Text' },
  { title: 'Cards' },
  { title: 'Other Components' },
];

const ComponentsBar = ({ slug }: { slug?: string }) => {
  const router = useRouter();

  return (
    <div className="scrollbar-thin scrollbar sticky top-[69px] h-[calc(100vh-4.5rem)] overflow-y-auto pt-8 pr-4 pb-4">
      <div className="relative flex flex-col gap-6 pl-3">
        {categories.map((sec, sectionIdx) => {
          const items = componentsData.filter((c) => c.category === sec.title);
          return (
            <div key={sectionIdx}>
              <div
                aria-hidden={true}
                className="absolute bottom-0 left-1.5 z-0 h-[96%] w-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800"
              />
              <div className="flex flex-col">
                <h4 className="px-2 text-sm font-semibold text-black dark:text-white">
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
                          className={`relative z-10 cursor-pointer rounded-md px-2 py-1.5 text-left text-sm font-medium transition-all hover:translate-x-1 ${
                            item.identifier === slug
                              ? 'translate-x-1 font-semibold text-black dark:text-white'
                              : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200'
                          } `}
                        >
                          {slug === item.identifier && (
                            <motion.span
                              aria-hidden={true}
                              layoutId="components-bar"
                              transition={{
                                type: 'spring',
                                bounce: 0.3,
                              }}
                              className="absolute top-1/2 -left-[11px] h-5 w-1 -translate-y-1/2 rounded-full bg-neutral-950 dark:bg-neutral-100"
                            />
                          )}

                          <span>{item.title}</span>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentsBar;
