'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQProps {
  faqs: { qes: string; ans: string }[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

const FAQ = ({
  faqs,
  className,
  questionClassName = '',
  answerClassName = 'py-2 text-neutral-700 dark:text-neutral-300',
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={cn('space-y-6', className)}>
      {faqs.map((item, idx) => (
        <div
          key={idx}
          className="mx-auto max-w-192 border-b border-neutral-200 pb-4 last:border-b-0 dark:border-white/10"
        >
          <button
            className="flex w-full cursor-pointer items-center justify-between py-3 text-left text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-white dark:focus-visible:ring-white/30"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-content-${idx}`}
            id={`accordion-header-${idx}`}
            type="button"
          >
            <span className={cn('text-base font-medium', questionClassName)}>
              {item.qes}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-plus shrink-0"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M12 5l0 14"
                className="transition-transform duration-300"
                style={{
                  transformOrigin: '12px 12px',
                  transform:
                    openIndex === idx ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
              <path d="M5 12l14 0" />
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                id={`accordion-content-${idx}`}
                role="region"
                aria-labelledby={`accordion-header-${idx}`}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {
                    height: 'auto',
                    opacity: 1,
                  },
                  collapsed: {
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="overflow-hidden"
                style={{ willChange: 'height, opacity, padding' }}
              >
                <div className={cn(answerClassName)}>{item.ans}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
