'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

export const LinesCard = () => {
  const { resolvedTheme } = useTheme();

  const topLogos = [
    { src: '/nextjs.svg', alt: 'nextjs', width: 36, height: 32 },
    { src: '/motion.svg', alt: 'motion.dev', width: 36, height: 32 },
    { src: '/react.svg', alt: 'reactjs', width: 36, height: 32 },
  ];

  const bottomLogo = {
    src: 'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg',
    alt: 'Quartz UI',
    width: 36,
    height: 32,
  };

  const title = 'Quartz UI';
  const description =
    'Quartz UI is a modern, accessible React component library featuring animated.';

  return (
    <div className="relative flex max-w-108 flex-col gap-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <GridWhite />
      <GridDark />
      <div className="z-10 flex flex-col items-center justify-center gap-[2px]">
        <div className="flex gap-12">
          {topLogos.map((logo, index) => (
            <Image
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <SvgLeft resolvedTheme={resolvedTheme!} />
          <SvgMiddle resolvedTheme={resolvedTheme!} />
          <SvgRight resolvedTheme={resolvedTheme!} />
        </div>
        <Image
          src={bottomLogo.src}
          alt={bottomLogo.alt}
          width={bottomLogo.width}
          height={bottomLogo.height}
        />
      </div>
      <div className="z-10">
        <h6 className="mb-1 text-sm font-semibold dark:text-white">{title}</h6>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};

type SvgProps = {
  resolvedTheme: string;
};

const SvgLeft = ({ resolvedTheme }: SvgProps) => {
  const gradientId =
    resolvedTheme === 'dark'
      ? 'paint0_linear_87_148_dark'
      : 'paint0_linear_87_148';
  const pathStroke = `url(#${gradientId})`;

  return (
    <svg
      width="80"
      height="85"
      viewBox="0 0 80 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-[1px]"
    >
      <path
        d="M79 85V52C79 42.0589 70.9411 34 61 34L19 34C9.05887 34 1 25.9411 1 16L1 0"
        stroke={pathStroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear_87_148"
          initial={{ x1: '-60%', x2: '0%' }}
          animate={{ x1: '100%', x2: '160%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4" stopColor="var(--color-neutral-300)" />
          <stop offset="1" stopColor="var(--color-green-500)" />
          <stop offset="0.4" stopColor="var(--color-neutral-300)" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint0_linear_87_148_dark"
          initial={{ x1: '-60%', x2: '0%' }}
          animate={{ x1: '100%', x2: '160%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4" stopColor="var(--color-neutral-800)" />
          <stop offset="1" stopColor="var(--color-green-500)" />
          <stop offset="0.4" stopColor="var(--color-neutral-800)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const SvgMiddle = ({ resolvedTheme }: SvgProps) => {
  const gradientId =
    resolvedTheme === 'dark'
      ? 'paint0_linear_87_150_dark'
      : 'paint0_linear_87_150';
  const lineStroke = `url(#${gradientId})`;

  return (
    <svg
      width="2"
      height="85"
      viewBox="0 02 2 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.5"
        y1="85.0059"
        x2="0.5"
        y2="-2.28882e-05"
        stroke={lineStroke}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear_87_150"
          initial={{ y1: '-60%', y2: '0%' }}
          animate={{ y1: '100%', y2: '160%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4" stopColor="var(--color-neutral-300)" />
          <stop offset="0.8" stopColor="var(--color-red-500)" />
          <stop offset="0.4" stopColor="var(--color-neutral-300)" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint0_linear_87_150_dark"
          initial={{ y1: '-60%', y2: '0%' }}
          animate={{ y1: '100%', y2: '160%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4" stopColor="var(--color-neutral-800)" />
          <stop offset="0.8" stopColor="var(--color-red-500)" />
          <stop offset="0.4" stopColor="var(--color-neutral-800)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const SvgRight = ({ resolvedTheme }: SvgProps) => {
  const gradientId =
    resolvedTheme === 'dark'
      ? 'paint0_linear_87_151_dark'
      : 'paint0_linear_87_151';
  const pathStroke = `url(#${gradientId})`;

  return (
    <svg
      width="80"
      height="85"
      viewBox="0 0 80 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-[1px]"
    >
      <path
        d="M1 85V52C1 42.0589 9.05887 34 19 34L61 34C70.9411 34 79 25.9411 79 16L79 0"
        stroke={pathStroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear_87_151"
          initial={{ x1: '100%', x2: '160%' }}
          animate={{ x1: '-60%', x2: '0%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4" stopColor="var(--color-neutral-300, #d4d4d4)" />
          <stop offset="0.4" stopColor="var(--color-blue-500, #3b82f6)" />
          <stop offset="1" stopColor="var(--color-neutral-300, #d4d4d4)" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint0_linear_87_151_dark"
          initial={{ x1: '100%', x2: '160%' }}
          animate={{ x1: '-60%', x2: '0%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4" stopColor="var(--color-neutral-800, #262626)" />
          <stop offset="0.4" stopColor="var(--color-blue-500, #3b82f6)" />
          <stop offset="1" stopColor="var(--color-neutral-800, #262626)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const GridWhite = () => {
  return (
    <div
      className="absolute inset-0 z-0 dark:invisible"
      style={{
        backgroundImage: `
            linear-gradient(to right, var(--color-neutral-300) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-neutral-300) 1px, transparent 1px)
          `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 0',
        maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
        WebkitMaskImage: `
              repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
    />
  );
};

const GridDark = () => {
  return (
    <div
      className="invisible absolute inset-0 z-0 dark:visible"
      style={{
        backgroundImage: `
            linear-gradient(to right, var(--color-neutral-800) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-neutral-800) 1px, transparent 1px)
          `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 0',
        maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
        WebkitMaskImage: `
              repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
    />
  );
};
