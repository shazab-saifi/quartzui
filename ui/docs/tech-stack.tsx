import { MotionSVG, ReactSVG, TypeScriptSVG, TailwindSVG } from '@/icons';
import { IconArrowUpRight } from '@tabler/icons-react';

const stack = [
  {
    name: 'React.js',
    link: 'https://react.dev',
    version: 'v19.1.0',
    image: <ReactSVG />,
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    version: 'v4.1.3',
    image: <TailwindSVG />,
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    version: 'v5.4',
    image: <TypeScriptSVG />,
  },
  {
    name: 'Motion.dev',
    link: 'https://www.framer.com/motion/',
    version: 'v12.23.12',
    image: <MotionSVG />,
  },
];

const TechStack = () => {
  return (
    <div className="grid w-fit grid-cols-1 items-center gap-4 md:grid-cols-2">
      {stack.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          className="group not-prose relative h-46 w-[364px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-4 no-underline transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
          <p className="not-prose font-semibold text-neutral-600 dark:text-white">
            {item.name}
          </p>
          <p className="not-prose text-xs text-neutral-500 dark:text-neutral-400">
            {item.version}
          </p>
          <IconArrowUpRight className="absolute top-2 right-2 text-neutral-300 group-hover:text-neutral-700 dark:text-neutral-800" />
          {item.image}
        </a>
      ))}
    </div>
  );
};

export default TechStack;
