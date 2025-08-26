'use client';

import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconSquareRoundedLetterQFilled,
  IconExchange,
  IconBrandX,
  IconBrandGithub,
} from '@tabler/icons-react';
import {
  AnimatePresence,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRef, useState } from 'react';

type DockLink = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const FloatingDockCore = () => {
  const links: DockLink[] = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full" />,
      href: '/',
    },
    {
      title: 'Products',
      icon: <IconTerminal2 className="h-full w-full" />,
      href: '/products',
    },
    {
      title: 'Components',
      icon: <IconNewSection className="h-full w-full" />,
      href: '/components',
    },
    {
      title: 'Quartz.UI',
      icon: <IconSquareRoundedLetterQFilled className="h-full w-full" />,
      href: '/',
    },
    {
      title: 'Changelog',
      icon: <IconExchange className="h-full w-full" />,
      href: '/cangelog',
    },
    {
      title: 'Twitter',
      icon: <IconBrandX className="h-full w-full" />,
      href: '/twitter',
    },
    {
      title: 'Github',
      icon: <IconBrandGithub className="h-full w-full" />,
      href: '/github',
    },
  ];

  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed inset-x-0 bottom-10 mx-auto flex h-16 w-fit items-center justify-center gap-4 rounded-2xl bg-neutral-900 p-4"
    >
      {links.map((el, idx) => (
        <IconContainer key={idx} el={el} mouseX={mouseX} />
      ))}
    </motion.div>
  );
};

const IconContainer = ({
  el,
  mouseX,
}: {
  el: DockLink;
  mouseX: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const iconWidthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const iconHeightTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(iconWidthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightIcon = useSpring(iconHeightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={el.href}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className="relative flex items-center justify-center rounded-full bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-800 px-2 py-0.5 text-xs whitespace-pre"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            width: widthIcon,
            height: heightIcon,
          }}
        >
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};

const FloatingDock = () => {
  return (
    <div className="flex items-center justify-center">
      <FloatingDockCore />
    </div>
  );
};

export default FloatingDock;
