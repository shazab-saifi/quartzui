'use client';

import React, { useState, useRef, useEffect } from 'react';
import { IconChevronUp } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

const defaultItems: AccordionItem[] = [
  {
    title: 'Why chosse QuartzUI?',
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, nisi vel consectetur. Mauris non tempor quam, et lacinia
        sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit
        elit, elementum sed varius at, adipiscing vitae est. Sed nec felis
        pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci
        lectus, consectetur vel posuere posuere, rutrum eu ipsum.
      </div>
    ),
  },
  {
    title: 'How many components QuartzUI has?',
    content: (
      <div>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </div>
    ),
  },
  {
    title: 'How built QuartzUI',
    content: (
      <div>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Curabitur pretium tincidunt lacus.
        Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
        est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
        Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus
        vulputate vehicula.
      </div>
    ),
  },
];

const GRADIENT_RADIUS = 160;

export const Accordion = ({
  items = defaultItems,
}: {
  items?: AccordionItem[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [gradientPos, setGradientPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setIsInside(true);
        setGradientPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setIsInside(false);
      }
    };

    if (isInside) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
    } else {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
    };
  }, [isInside]);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    setGradientPos({ x: localX, y: localY });
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsInside(true);
    handleMouseMove(e);
  };
  const handleMouseLeave = () => setIsInside(false);

  const gradientStyle: React.CSSProperties = isInside
    ? {
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        borderRadius: 'inherit',
        background: `
          radial-gradient(
            circle ${GRADIENT_RADIUS}px at ${gradientPos.x}px ${gradientPos.y}px,
            rgba(59,130,246,0.22) 22%,
            rgba(59,130,246,0.13) 45%,
            rgba(59,130,246,0.06) 70%,
            rgba(255,255,255,0.01) 90%,
            transparent 100%
          )
        `,
        transition: 'background 0.2s',
      }
    : {
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        borderRadius: 'inherit',
        background: 'none',
      };

  return (
    <div
      ref={containerRef}
      className="relative max-w-136 rounded-md bg-white text-sm md:w-192 dark:bg-neutral-950"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: 'hidden' }}
    >
      <div style={gradientStyle} aria-hidden="true" />
      <div className="relative z-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-neutral-200 last:border-b-0 dark:border-white/10"
          >
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-white dark:focus-visible:ring-white/30"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-content-${idx}`}
              id={`accordion-header-${idx}`}
              type="button"
            >
              <span>{item.title}</span>
              <motion.span
                className="ml-2"
                animate={{
                  rotate: openIndex === idx ? 180 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ display: 'inline-flex' }}
              >
                <IconChevronUp size={18} />
              </motion.span>
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
                  className="overflow-hidden px-4"
                  style={{ willChange: 'height, opacity, padding' }}
                >
                  <div className="py-2 text-neutral-700 dark:text-neutral-200">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
