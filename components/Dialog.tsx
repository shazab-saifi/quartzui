import { IconX } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export const Dialog = ({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  return (
    <div className="max-w-3xl">
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        <button
          className="cursor-pointer rounded-lg bg-neutral-950 px-4 py-2 text-sm font-semibold text-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
          onClick={() => setIsOpen(true)}
        >
          Open Dialog
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              exit={{ filter: 'blur(10px)', opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            {/* Dialog */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ pointerEvents: 'none', perspective: '1000px' }}
            >
              <motion.div
                initial={{
                  filter: 'blur(6px)',
                  opacity: 0,
                  rotateY: '20deg',
                  rotateX: '20deg',
                  transformOrigin: 'left center',
                }}
                animate={{
                  filter: 'blur(0px)',
                  opacity: 1,
                  rotateY: '0deg',
                  rotateX: '0deg',
                  transformOrigin: 'left center',
                }}
                exit={{
                  filter: 'blur(6px)',
                  opacity: 0,
                  rotateY: '20deg',
                  rotateX: '20deg',
                  transformOrigin: 'left center',
                  transition: { duration: 0.3 },
                }}
                transition={{
                  duration: 0.6,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                  pointerEvents: 'auto',
                }}
                ref={dialogRef}
                className="relative max-w-3xl space-y-2 rounded-2xl border border-neutral-200 bg-neutral-100 p-6 text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
                onClick={(e) => e.stopPropagation()}
              >
                {children}

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 cursor-pointer rounded-full p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                >
                  <IconX
                    size={16}
                    className="text-neutral-600 dark:text-neutral-400"
                  />
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
