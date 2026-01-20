'use client';

import {
  IconArrowUpRight,
  IconCircle,
  IconSearch,
  IconX,
} from '@tabler/icons-react';
import { componentsData } from '@/lib/components-data';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'motion/react';

export const SearchBarSkeleton = () => {
  const filteredDocs = componentsData.filter((item) => item.isDoc === true);
  const filteredComponents = componentsData.filter((item) => !item.isDoc);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative min-w-[80vw] -translate-y-12 rotate-x-45 rotate-y-0 rounded-xl border border-neutral-200 bg-neutral-100 text-sm text-black shadow-xl sm:min-w-118 md:min-w-180 lg:min-w-4xl xl:min-w-5xl dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
        className="absolute -top-0.5 left-0 h-0.5 w-full bg-linear-to-r from-transparent from-20% via-neutral-500 via-50% to-transparent to-80% dark:via-white"
      />
      <div className="flex items-center gap-2.5 border-b border-neutral-200 px-4 py-3 text-lg md:gap-3 md:px-8 md:py-5 md:text-xl dark:border-neutral-800">
        <IconSearch
          size={20}
          className="text-neutral-600 md:size-[24px] dark:text-neutral-400"
        />
        <div className="w-full bg-transparent py-1.5 focus:outline-none md:py-2">
          {isInView && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('installation').start();
              }}
            />
          )}
        </div>
      </div>
      <div className="flex max-h-164 flex-col gap-1.5 overflow-y-clip p-2.5 text-lg md:gap-2 md:p-4 md:text-xl">
        <h6 className="mt-1 px-2 text-neutral-600 md:mt-2 md:px-4 dark:text-neutral-400">
          Documents
        </h6>
        {filteredDocs.length > 0 &&
          filteredDocs.map((doc) => (
            <Link
              href={doc.link as string}
              key={doc.title}
              className={`group flex items-center justify-between rounded-xl p-2 md:p-4 ${doc.title === 'Installation' ? 'w-[calc(100%+4rem)] -translate-x-8 -translate-y-3 border border-neutral-200 bg-neutral-100 shadow-lg dark:border-neutral-700 dark:bg-neutral-900' : ''}`}
            >
              <div className="flex items-center gap-2.5 md:gap-3">
                <IconCircle size={20} className="md:size-[24px]" />
                <span>{doc.title}</span>
              </div>
              <IconArrowUpRight
                size={20}
                className={`${doc.title === 'Installation' ? 'opacity-100' : 'opacity-0'} md:size-[24px]`}
              />
            </Link>
          ))}

        <h6 className="mt-1 px-2 text-neutral-600 md:mt-2 md:px-4 dark:text-neutral-400">
          Components
        </h6>
        {filteredComponents.length > 0 &&
          filteredComponents.map((component) => (
            <Link
              href={component.link as string}
              key={component.title}
              className="group flex items-center justify-between rounded-xl p-2 md:p-4"
            >
              <div className="flex items-center gap-2.5 md:gap-3">
                <IconCircle size={20} className="md:size-[24px]" />
                <span>{component.title}</span>
              </div>
            </Link>
          ))}
      </div>
      <button className="absolute top-2.5 right-2.5 cursor-pointer rounded-full p-0.5 hover:bg-neutral-200 md:top-4 md:right-4 md:p-1 dark:hover:bg-neutral-800">
        <IconX
          size={20}
          className="text-neutral-600 md:size-[24px] dark:text-neutral-400"
        />
      </button>
    </div>
  );
};
