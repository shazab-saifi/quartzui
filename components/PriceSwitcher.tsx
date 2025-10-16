'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const PriceSwitcher = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        layout
        className="font-inter flex overflow-hidden text-6xl font-semibold text-black dark:text-white"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <motion.span layout className="w-fit">
          $
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            y: isMonthly ? '100%' : '0%',
          }}
          style={{
            display: isMonthly ? 'none' : 'inline-block',
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        >
          1
        </motion.span>
        <span className="flex h-[1em] w-auto min-w-0 flex-col overflow-hidden">
          <motion.span
            className="flex w-auto min-w-0 flex-col"
            initial={false}
            animate={{ y: isMonthly ? 0 : `-${(oneToNine.length - 1) * 1}em` }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 'auto',
              minWidth: 0,
              alignItems: 'center',
            }}
          >
            {oneToNine.map((num) => (
              <span
                key={num}
                style={{
                  height: '1em',
                  lineHeight: '1em',
                  width: 'fit-content',
                  minWidth: 0,
                  display: 'inline-block',
                  textAlign: 'center',
                }}
              >
                {num}
              </span>
            ))}
          </motion.span>
        </span>
        <motion.span layout className="w-fit">
          9
        </motion.span>
      </motion.div>
      {/* this div is just for testing */}
      <div className="space-x-8">
        <button
          onClick={() => setIsMonthly(true)}
          className={`rounded-lg px-4 py-2 ${isMonthly ? 'bg-neutral-100 text-black' : 'bg-black text-neutral-400'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`rounded-lg px-4 py-2 ${!isMonthly ? 'bg-neutral-100 text-black' : 'bg-black text-neutral-400'}`}
        >
          Annually
        </button>
      </div>
    </div>
  );
};

export default PriceSwitcher;
