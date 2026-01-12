import { Button } from '@/components/Button';
import Image from 'next/image';
import { Heading } from './heading';

const Cta = () => {
  return (
    <section className="mt-36 mb-16 flex flex-col items-center justify-center px-4 sm:px-8 md:mt-64 md:mb-24 lg:px-20 2xl:px-60">
      <Image
        src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg"
        alt="Quartz UI logo light"
        width={48}
        height={48}
        className="mb-4 hidden dark:inline"
      />
      <Image
        src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg"
        alt="Quartz UI logo dark"
        width={48}
        height={48}
        className="mb-4 inline dark:hidden"
      />
      <Heading as="h2">Ready to get started?</Heading>
      <p className="mt-3 max-w-xl text-center text-base text-neutral-600 dark:text-neutral-400">
        Explore the documentation and start using our simple, modern UI
        components for your next project.
      </p>
      <Button variant="secondary" size="sm" className="mt-6 px-6 text-sm">
        Documentation
      </Button>
    </section>
  );
};

export default Cta;
