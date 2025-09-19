'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const TabSelect = ({ tabs }: { tabs: string[] }) => {
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  return (
    <div className="mx-auto flex w-fit rounded-full border border-neutral-200 bg-black/30 p-2 text-sm backdrop-blur-xs dark:border-neutral-800 dark:bg-black/40">
      {tabs.map((str, idx) => (
        <button
          onClick={() => setClickedIndex(idx)}
          key={idx}
          className="relative z-10 px-4 py-2"
        >
          <span
            className={`${clickedIndex === idx ? 'text-black' : 'text-white'} relative z-10 transition-colors duration-300`}
          >
            {str}
          </span>
          <AnimatePresence>
            {clickedIndex === idx && (
              <motion.div
                layoutId="clicked"
                transition={{
                  type: 'spring',
                  duration: 0.3,
                  damping: 50,
                  stiffness: 300,
                }}
                className="absolute top-0 left-0 z-0 h-full w-full rounded-full bg-neutral-100"
              ></motion.div>
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

export default TabSelect;
