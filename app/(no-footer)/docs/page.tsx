import { componentsData } from '@/lib/components-data';
import ComponentPreviewCard from '@/ui/componentsPage/component-preview-card';
import ComponentsBar from '@/ui/componentsPage/componentsbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components - Quartz UI',
  description:
    'Browse a collection of reusable, modern UI components for your next project. Explore sidebars, tabs, accordions, animated buttons, badges, and more—all designed for seamless integration and customization.',
  openGraph: {
    images:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760620351/ogimage_s4dmmb.png',
  },
};

const page = () => {
  return (
    <div className="flex w-full px-4 sm:px-6">
      <div className="hidden w-54 shrink-0 lg:inline">
        <ComponentsBar />
      </div>
      <div className="my-16 w-full md:px-6 lg:px-12 xl:px-18">
        <div>
          <h5 className="mb-2 font-semibold">Components</h5>
          <p className="mb-5 max-w-lg text-neutral-700 dark:text-neutral-400">
            High-performance, modern components built with{' '}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-800 transition-colors hover:text-black hover:underline dark:text-neutral-300 dark:hover:text-white"
            >
              React.js
            </a>{' '}
            and{' '}
            <a
              href="https://motion.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-800 transition-colors hover:text-black hover:underline dark:text-neutral-300 dark:hover:text-white"
            >
              motion.dev
            </a>
          </p>
        </div>
        <div className="3xl:grid-cols-4 mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {componentsData
            .filter((item) => !item.isDoc)
            .map((item, idx) => (
              <ComponentPreviewCard
                key={item.title + idx}
                src={item.image as string}
                heading={item.title}
                desc={item.desc as string}
                link={item.link as string}
                idx={idx}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
