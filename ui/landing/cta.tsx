import { Button } from '@/components/Button';
import Image from 'next/image';
import Motion from '../motion';
import { Heading } from './heading';

const Cta = () => {
  return (
    <section className="relative px-4 sm:px-8 lg:px-20 2xl:px-60">
      <div className="relative z-10 flex min-h-112 flex-col items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg"
          alt="logo"
          width={48}
          height={48}
          className="mb-4 hidden dark:inline"
        />
        <Image
          src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg"
          alt="logo"
          width={48}
          height={48}
          className="mb-4 inline dark:hidden"
        />
        <Heading as="h2">Ready to get started?</Heading>
        <p className="mt-3 max-w-xl text-center text-base text-neutral-600 dark:text-neutral-400">
          Explore the documentation and start using our simple, modern UI
          components for your next project.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6 px-6 text-sm font-normal"
        >
          Documentation
        </Button>
      </div>
      <Background />
    </section>
  );
};

const Background = () => {
  return (
    <>
      <Motion
        initial={{ opacity: 0, scale: 0.9, filter: 'blue(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blue(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 z-1 size-144 -translate-x-[50%] -translate-y-[50%] rounded-full bg-neutral-100/50 dark:bg-neutral-900/10"
      />
      <Motion
        initial={{ opacity: 0, scale: 0.9, filter: 'blue(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blue(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 z-1 size-124 -translate-x-[50%] -translate-y-[50%] rounded-full bg-neutral-200/30 dark:bg-neutral-800/10"
      />
      <Motion
        initial={{ opacity: 0, scale: 0.9, filter: 'blue(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blue(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 z-1 size-104 -translate-x-[50%] -translate-y-[50%] rounded-full bg-neutral-300/30 dark:bg-neutral-700/10"
      />
      <Motion
        initial={{ opacity: 0, scale: 0.9, filter: 'blue(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blue(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 z-1 size-84 -translate-x-[50%] -translate-y-[50%] rounded-full bg-neutral-400/10 dark:bg-neutral-600/10"
      />
    </>
  );
};

export default Cta;
