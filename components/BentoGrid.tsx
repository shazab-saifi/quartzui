import React, { useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const gridItems = [
  {
    className:
      'col-span-2 row-span-1 flex flex-col items-center rounded-2xl border border-neutral-700 bg-neutral-950 p-4',
    heading: 'Heading 1',
    desc: 'This is a description for the first bento grid item.',
  },
  {
    className:
      'col-span-1 row-span-1 flex aspect-square flex-col items-center rounded-2xl border border-neutral-700 bg-neutral-950 p-4',
    heading: 'Heading 2',
    desc: 'This is a description for the second bento grid item.',
  },
  {
    className:
      'col-span-1 row-span-1 flex aspect-square flex-col items-center rounded-2xl border border-neutral-700 bg-neutral-950 p-4',
    heading: 'Heading 3',
    desc: 'This is a description for the third bento grid item.',
  },
  {
    className:
      'col-span-2 row-span-1 flex flex-col items-center rounded-2xl border border-neutral-700 bg-neutral-950 p-4',
    heading: 'Heading 4',
    desc: 'This is a description for the fourth bento grid item.',
  },
];

const MAX_OFFSET = 16;

function getDirectionContinuous(
  x: number,
  y: number,
  rect: { left: number; top: number; width: number; height: number }
) {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = x - centerX;
  const dy = y - centerY;

  const halfW = rect.width / 2;
  const halfH = rect.height / 2;

  const normX = Math.max(-1, Math.min(1, dx / halfW));
  const normY = Math.max(-1, Math.min(1, dy / halfH));
  return { normX, normY };
}

const BentoGridItem = ({
  className,
  heading,
  desc,
}: {
  className: string;
  heading: string;
  desc: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    ) {
      const { normX, normY } = getDirectionContinuous(mouseX, mouseY, rect);

      animate(x, normX * MAX_OFFSET, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });

      animate(y, normY * MAX_OFFSET, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 30 });
    animate(y, 0, { type: 'spring', stiffness: 300, damping: 30 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[65%] w-full rounded-xl bg-gradient-to-l from-neutral-800 to-neutral-900"></div>
      <div className="mt-4 flex w-full flex-col items-start gap-1">
        <h3 className="font-semibold text-white">{heading}</h3>
        <p className="text-sm text-neutral-400">{desc}</p>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <div className="grid w-full grid-cols-3 grid-rows-2 gap-4">
      {gridItems.map((item, i) => (
        <BentoGridItem key={i} {...item} />
      ))}
    </div>
  );
};

export default BentoGrid;
