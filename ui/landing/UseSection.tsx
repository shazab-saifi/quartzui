import { Button } from '@/components/Button';
import Image from 'next/image';

const features = [
  {
    title: 'Copy & Paste',
    description:
      'Quick and effortless — simply grab the component code from our documentation and drop it directly into your project. It’s the fastest way to experiment, customize instantly, and see results right away without worrying about setup or configuration.',
    buttonText: 'Documentation',
    image: {
      src: 'copy.png',
      alt: 'Copy & Paste',
    },
    reverse: false,
  },
  {
    title: 'CLI Installation',
    description:
      'For a faster and more scalable setup — use our CLI to install components with a single command. It automatically pulls in the right styles, handles dependencies, and keeps everything consistent, making it perfect for larger projects or long-term development.',
    buttonText: 'CLI Installation',
    image: {
      src: 'cli.png',
      alt: 'CLI Installation',
    },
    reverse: true,
  },
];

const FeatureSection = ({
  title,
  description,
  buttonText,
  image,
  reverse,
}: {
  title: string;
  description: string;
  buttonText: string;
  image: { src: string; alt: string };
  reverse?: boolean;
}) => (
  <div
    className={`flex items-center gap-40 ${reverse ? 'flex-row-reverse' : ''}`}
  >
    <div className="flex-1 space-y-12">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="md:text-para lg:text-para-big max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <Button
        className="bg-gradient-to-b from-neutral-100 to-neutral-300"
        size="sm"
        variant="secondary"
      >
        {buttonText}
      </Button>
    </div>
    <div className="flex-1 rounded-3xl bg-gradient-to-t from-neutral-100 to-white p-4 dark:from-neutral-950 dark:to-neutral-900">
      <Image
        src={image.src}
        className="rounded-lg"
        alt={image.alt}
        width={764}
        height={300}
      />
    </div>
  </div>
);

const UseSection = () => (
  <div className="space-y-32">
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-h4 text-center font-semibold">
        We&apos;ve Awesome Components for you
      </h3>
      <p className="md:text-para lg:text-para-big max-w-3xl text-center text-sm text-neutral-600 dark:text-neutral-400">
        There are two simple and flexible ways you can integrate Quartz UI into
        your project, depending on what best fits your workflow.
      </p>
    </div>
    <div className="space-y-32">
      {features.map((feature, idx) => (
        <FeatureSection key={idx} {...feature} />
      ))}
    </div>
  </div>
);

export default UseSection;
