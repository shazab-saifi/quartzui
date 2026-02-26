import LiveCode from '@/docs/LiveCode';
import { Heading } from './heading';
import { CodeBlock } from '@/docs/CodeBlock';

const CLI_COMMAND = `npx shadcn@latest add http://quartzui.shazab.site/r/text-shimmer.json`;
const COMPONENT_CODE = `'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useMemo } from 'react';

interface TextShimmerProps {
  duration?: number;
  children: string;
  className?: string;
  spread?: number;
  baseColor?: string;
  shimmerColor?: string;
}

const TextShimmer = ({
  duration = 3,
  children,
  className,
  spread = 2,
  baseColor = '#FFF',
  shimmerColor = '#000',
}: TextShimmerProps) => {
  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <motion.p
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={
        {
          '--spread': \`\${dynamicSpread}px\`,
          '--base-color': baseColor,
          '--base-gradient-color': shimmerColor,
          backgroundImage: \`var(--bg), linear-gradient(var(--base-color), var(--base-color))\`,
        } as React.CSSProperties
      }
      className={cn(
        'relative inline-block bg-size-[250%_100%,auto] bg-clip-text',
        'text-transparent',
        '[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className
      )}
    >
      {children}
    </motion.p>
  );
};

export default TextShimmer;`;

const UseSection = () => (
  <div className="mt-24 flex flex-col items-center gap-16 border-t border-neutral-200 px-4 pt-28 sm:px-8 md:mt-36 md:pt-36 lg:px-20 2xl:px-60 dark:border-neutral-800 dark:bg-neutral-950">
    <div>
      <Heading as="h2" className="text-center">
        Just Copy Paste Our CLI or Code
      </Heading>
      <p className="mx-auto mt-2 max-w-md text-center text-neutral-600 sm:mt-4 md:text-lg dark:text-neutral-400">
        We provide you with the CLI and code to easily install and use our
        components.
      </p>
    </div>
    <div className="flex flex-col items-center gap-4 md:gap-12 lg:gap-16 xl:flex-row xl:gap-28 2xl:gap-32">
      <div className="space-y-4">
        <p className="mt-2 max-w-lg text-neutral-600 dark:text-neutral-400">
          You can install any of our components using our CLI. We use{' '}
          <a
            href="https://ui.shadcn.com/"
            className="text-white no-underline hover:underline"
          >
            shadcn
          </a>{' '}
          registry for CLI installation.
        </p>
        <CodeBlock code={CLI_COMMAND} className="max-w-2xl" />
        <p className="mt-2 max-w-lg text-neutral-600 dark:text-neutral-400">
          Or you can manually copy and paste the whole component.
        </p>
        <CodeBlock className="max-h-64 max-w-2xl" code={COMPONENT_CODE} />
        <p className="mt-2 max-w-lg text-neutral-600 dark:text-neutral-400">
          Both ways are fairly simple and can be done within seconds. If you
          face any problem, you can reach out to me here{' '}
          <a
            href="https://x.com/shazabsaifi_s9"
            className="text-white no-underline hover:underline"
          >
            Twitter (now 𝕏)
          </a>
          .
        </p>
      </div>
      <div>
        <LiveCode code={`<PointerCard />`} />
      </div>
    </div>
  </div>
);

export default UseSection;
