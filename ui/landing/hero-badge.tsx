'use client';

import Link from 'next/link';
import Motion from '../motion';
import Image from 'next/image';
import TextShimmer from '@/components/TextShimmer';
import useResolvedTheme from '@/hooks/useResolvedTheme';

const HeroBadge = () => {
  const theme = useResolvedTheme();

  return (
    <Link href="/docs">
      <Motion
        as="button"
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        className="mb-4 flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs dark:border-neutral-800 dark:bg-neutral-900"
      >
        <Image
          src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg"
          alt="logo"
          width={12}
          height={12}
          className="hidden dark:inline"
        />
        <Image
          src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg"
          alt="logo"
          width={12}
          height={12}
          className="inline dark:hidden"
        />
        <TextShimmer
          baseColor={
            theme === 'dark' ? 'var(--color-white)' : 'var(--color-black)'
          }
          shimmerColor={
            theme === 'dark' ? 'var(--color-black)' : 'var(--color-white)'
          }
        >
          Beautiful components. Effortless experience. »
        </TextShimmer>
      </Motion>
    </Link>
  );
};

export default HeroBadge;
