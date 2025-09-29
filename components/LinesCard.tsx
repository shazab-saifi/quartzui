import Image from 'next/image';
import { motion } from 'motion/react';

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LinesCardProps = {
  topLogos?: Logo[];
  bottomLogo?: Logo;
  title?: string;
  description?: string;
};

const defaultTopLogos: Logo[] = [
  { src: '/nextjs.svg', alt: 'nextjs', width: 36, height: 32 },
  { src: '/motion.svg', alt: 'motion.dev', width: 36, height: 32 },
  { src: '/react.svg', alt: 'reactjs', width: 36, height: 32 },
];

const defaultBottomLogo: Logo = {
  src: '/quartzui-dark.svg',
  alt: 'Quartz UI',
  width: 36,
  height: 32,
};

const LinesCard = ({
  topLogos = defaultTopLogos,
  bottomLogo = defaultBottomLogo,
  title = 'Quartz UI',
  description = 'Quartz UI is a modern, accessible React component library featuring animated.',
}: LinesCardProps) => {
  return (
    <div className="relative flex max-w-108 flex-col gap-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
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
      <div className="z-10 flex flex-col items-center justify-center gap-[2px]">
        <div className="flex gap-12">
          {topLogos.map((logo, index) => (
            <Image
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 36}
              height={logo.height ?? 32}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <SvgLeft />
          <SvgMiddle />
          <SvgRight />
        </div>
        <Image
          src={bottomLogo.src}
          alt={bottomLogo.alt}
          width={bottomLogo.width ?? 36}
          height={bottomLogo.height ?? 32}
        />
      </div>
      <div className="z-10">
        <h6 className="font-sm mb-2 font-semibold">{title}</h6>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const SvgLeft = () => {
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
        stroke="url(#paint0_linear_87_148)"
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
          <stop offset="0.4" stop-color="var(--color-neutral-300)" />
          <stop offset="1" stop-color="var(--color-green-500)" />
          <stop offset="0.4" stop-color="var(--color-neutral-300)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const SvgMiddle = () => {
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
        stroke="url(#paint0_linear_87_150)"
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
          <stop offset="0.4" stop-color="var(--color-neutral-300)" />
          <stop offset="0.8" stop-color="var(--color-red-500)" />
          <stop offset="0.4" stop-color="var(--color-neutral-300)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

const SvgRight = () => {
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
        stroke="url(#paint0_linear_87_151)"
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
      </defs>
    </svg>
  );
};

export default LinesCard;
