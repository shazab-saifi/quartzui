import { MotionSVG, ReactSVG, TailwindSVG, TypeScriptSVG } from '@/icons';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Heading } from './heading';

const stack = [
  {
    name: 'React.js',
    link: 'https://react.dev',
    version: 'v19.1.0',
    Icon: ReactSVG,
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    version: 'v4.1.3',
    Icon: TailwindSVG,
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    version: 'v5.4',
    Icon: TypeScriptSVG,
  },
  {
    name: 'Motion.dev',
    link: 'https://www.framer.com/motion/',
    version: 'v12.23.12',
    Icon: MotionSVG,
  },
];

export const BuildWith = () => {
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-8 px-4 pt-28 sm:px-8 md:pt-36 lg:px-20 2xl:px-60 dark:border-neutral-800">
      <Heading as="h2" className="text-center">
        Build with Modern Stack
      </Heading>

      <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-6">
        {stack.map((item) => {
          const Icon = item.Icon;

          return (
            <a
              key={item.name}
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
              className="group not-prose hover:bg-radial-to-br relative h-52 w-full min-w-0 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 from-40% p-5 no-underline shadow-md transition-colors hover:from-white hover:to-neutral-100 sm:max-w-104 xl:w-88 2xl:h-64 2xl:w-136 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:from-neutral-950 dark:hover:to-neutral-900"
            >
              <p className="not-prose relative z-10 text-base font-semibold text-neutral-600 dark:text-white">
                {item.name}
              </p>
              <p className="not-prose relative z-10 mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {item.version}
              </p>
              <IconArrowUpRight className="absolute top-3 right-3 z-10 text-neutral-300 transition-colors group-hover:text-neutral-700 dark:text-neutral-800" />
              <Icon
                className={`z-20 ${item.name !== 'Motion.dev' ? 'h-28 w-28 2xl:h-36 2xl:w-36' : '-bottom-4 h-28 w-28 2xl:h-42 2xl:w-42'}`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
