'use client';

import {
  IconBold,
  IconItalic,
  IconTextSize,
  IconHandFinger,
} from '@tabler/icons-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const toolTips = [
  { icon: <IconHandFinger />, tooltip: 'Select' },
  { icon: <IconBold />, tooltip: 'Bold' },
  { icon: <IconItalic />, tooltip: 'Italic' },
  { icon: <IconTextSize />, tooltip: 'Text Size' },
];

const ToolTip = () => {
  const [activeTool, setActiveTool] = useState<number | null>(null);

  return (
    <div className="relative flex flex-col items-center gap-2">
      <div className="flex items-center gap-1 rounded-xl bg-white p-1 text-black dark:bg-neutral-950 dark:text-neutral-100">
        {toolTips.map((item, idx) => (
          <div
            onMouseEnter={() => setActiveTool(idx)}
            onMouseLeave={() => setActiveTool(null)}
            key={idx}
            className="relative flex cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <span>{item.icon}</span>
            <AnimatePresence>
              {activeTool === idx && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="absolute -top-9 rounded-md bg-neutral-100 px-1.5 py-0.5 text-sm text-nowrap"
                >
                  {item.tooltip}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolTip;
