'use client';

import {
  IconHome,
  IconTerminal2,
  IconNewSection,
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
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export type DockLink = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type FloatingDockProps = {
  links?: DockLink[];
  breakpoint?: number; // px, for mobile detection
  maxMobileItems?: number; // how many links to show on mobile
  className?: string; // wrapper classes
  itemClassName?: string; // per-icon container classes
  desktopRange?: number; // hover influence range on desktop
  mobileRange?: number; // hover influence range on mobile
  baseItemSize?: number; // default diameter of circle
  maxItemSize?: number; // expanded diameter of circle
  baseIconSize?: number; // default icon size
  maxIconSize?: number; // expanded icon size
};

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener('resize', handleResize);
    // Set on mount in case SSR mismatch
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

const defaultLinks: DockLink[] = [
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
    icon: (
      <Image
        src="/quartzui.svg"
        alt="Quartz.UI"
        width={24}
        height={24}
        className="h-full w-full"
        style={{ objectFit: 'contain' }}
      />
    ),
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

const FloatingDockCore = ({
  links = defaultLinks,
  breakpoint = 640,
  maxMobileItems = 5,
  className,
  itemClassName,
  desktopRange = 150,
  mobileRange = 50,
  baseItemSize = 40,
  maxItemSize = 80,
  baseIconSize = 20,
  maxIconSize = 40,
}: FloatingDockProps) => {
  const isMobile = useIsMobile(breakpoint);
  const visibleLinks = isMobile ? links.slice(0, maxMobileItems) : links;
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto flex h-16 w-fit items-center justify-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-950',
        className
      )}
    >
      {visibleLinks.map((el, idx) => (
        <IconContainer
          key={idx}
          el={el}
          mouseX={mouseX}
          isMobile={isMobile}
          mobileRange={mobileRange}
          desktopRange={desktopRange}
          baseItemSize={baseItemSize}
          maxItemSize={maxItemSize}
          baseIconSize={baseIconSize}
          maxIconSize={maxIconSize}
          itemClassName={itemClassName}
        />
      ))}
    </motion.div>
  );
};

const IconContainer = ({
  el,
  mouseX,
  isMobile,
  mobileRange,
  desktopRange,
  baseItemSize,
  maxItemSize,
  baseIconSize,
  maxIconSize,
  itemClassName,
}: {
  el: DockLink;
  mouseX: MotionValue<number>;
  isMobile: boolean;
  mobileRange: number;
  desktopRange: number;
  baseItemSize: number;
  maxItemSize: number;
  baseIconSize: number;
  maxIconSize: number;
  itemClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(
    distance,
    isMobile
      ? [-mobileRange, 0, mobileRange]
      : [-desktopRange, 0, desktopRange],
    [baseItemSize, maxItemSize, baseItemSize]
  );
  const heightTransform = useTransform(
    distance,
    isMobile
      ? [-mobileRange, 0, mobileRange]
      : [-desktopRange, 0, desktopRange],
    [baseItemSize, maxItemSize, baseItemSize]
  );

  const iconWidthTransform = useTransform(
    distance,
    isMobile
      ? [-mobileRange, 0, mobileRange]
      : [-desktopRange, 0, desktopRange],
    [baseIconSize, maxIconSize, baseIconSize]
  );
  const iconHeightTransform = useTransform(
    distance,
    isMobile
      ? [-mobileRange, 0, mobileRange]
      : [-desktopRange, 0, desktopRange],
    [baseIconSize, maxIconSize, baseIconSize]
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
      className="cursor-none"
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className={cn(
          'relative flex items-center justify-center rounded-full bg-neutral-100 transition-colors dark:bg-neutral-800',
          itemClassName
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-200 px-2 py-0.5 text-xs whitespace-pre text-neutral-800 shadow-md dark:bg-neutral-900 dark:text-neutral-100"
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

const FloatingDock = (props: FloatingDockProps) => {
  return (
    <div className="flex items-center justify-center">
      <FloatingDockCore {...props} />
    </div>
  );
};

export default FloatingDock;
