'use client';

import { Button } from '@/components/Button';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const UseSection = () => {
  const [selected, setSelected] = useState<'cli' | 'manual'>('cli');

  return (
    <div className="flex flex-col gap-12 px-4 sm:px-8 md:flex-row lg:gap-16 lg:px-20 2xl:px-60">
      <div className="space-y-12">
        <div className="max-w-sm space-y-4 md:space-y-6">
          <h3 className="md:text-h4 text-h5 leading-12 font-semibold text-neutral-950 dark:text-neutral-100">
            We&apos;ve Awesome Components for you
          </h3>
          <p className="md:text-para max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
            There are two simple and flexible ways you can integrate Quartz UI
            into your project, depending on what best fits your workflow.
            Whether you want the quickest option or prefer full control,
            we&apos;ve got you completely covered either way.
          </p>
        </div>
        <div>
          <button
            className="flex cursor-pointer items-center gap-2"
            onClick={() => setSelected('cli')}
          >
            <span
              className={`size-3 rounded-full border transition-colors ${selected === 'cli' ? 'border-none bg-sky-500' : 'border-neutral-600 bg-neutral-800'}`}
            />
            <span
              className={`text-sm font-semibold ${selected === 'cli' ? 'text-neutral-700 dark:text-neutral-100' : 'text-neutral-600 dark:text-neutral-400'}`}
            >
              Cli
            </span>
          </button>
          <button
            className="mt-2 flex cursor-pointer items-center gap-2"
            onClick={() => setSelected('manual')}
          >
            <span
              className={`size-3 rounded-full border transition-colors ${selected === 'manual' ? 'border-none bg-sky-500' : 'border-neutral-600 bg-neutral-800'}`}
            />
            <span
              className={`text-sm font-semibold ${selected === 'manual' ? 'text-neutral-700 dark:text-neutral-100' : 'text-neutral-600 dark:text-neutral-400'}`}
            >
              Manual
            </span>
          </button>
        </div>
        <Button className="mt-16" variant="secondary">
          Documentations
        </Button>
      </div>
      <div className="h-96 w-full sm:h-124 lg:h-126 xl:w-4xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.5, filter: 'blur(12px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {selected === 'cli' ? (
              <video
                src="https://res.cloudinary.com/dlpjh3fcx/video/upload/v1762344990/cli_ccugly.mp4"
                className="w-full rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <video
                src="https://res.cloudinary.com/dlpjh3fcx/video/upload/v1762344958/manual_hhr93y.mp4"
                className="w-full rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UseSection;
