import { Button } from '@/components/Button';
import Image from 'next/image';

const features = [
  {
    title: 'Copy & Paste',
    description:
      'Quick and effortless — simply grab the component code from our documentation and drop it directly into your project. It’s the fastest way to experiment, customize instantly, and see results right away without worrying about setup or configuration.',
    buttonText: 'Documentation',
    image: {
      src: '/copy.webp',
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
      src: '/cli.png',
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
    className={`flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12 lg:gap-40 ${reverse ? 'md:flex-row-reverse' : ''} `}
  >
    <div className="flex w-full flex-col space-y-8 md:w-1/2 md:space-y-16">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        <h3 className="text-xl font-bold text-neutral-950 md:text-3xl dark:text-neutral-100">
          {title}
        </h3>
        <p className="md:text-para lg:text-para-big max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <Button
        className="w-fit bg-neutral-950 from-neutral-100 to-neutral-300 text-neutral-100 dark:bg-gradient-to-b dark:text-neutral-950"
        size="sm"
        variant="secondary"
      >
        {buttonText}
      </Button>
    </div>
    <div className="flex w-full items-center justify-center md:w-1/2">
      <div className="w-full rounded-3xl bg-gradient-to-t from-neutral-100 to-white p-2 sm:p-4 dark:bg-gradient-to-t dark:from-neutral-950 dark:to-neutral-800">
        <Image
          src={image.src}
          className="h-auto w-full rounded-lg object-cover"
          alt={image.alt}
          width={764}
          height={300}
          sizes="(max-width: 768px) 100vw, 764px"
        />
      </div>
    </div>
  </div>
);

const UseSection = () => (
  <div className="space-y-16 rounded-3xl bg-white p-4 md:space-y-32 md:p-8 dark:bg-neutral-950">
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <h3 className="md:text-h4 text-h5 text-center leading-7 font-semibold text-neutral-950 dark:text-neutral-100">
        We&apos;ve Awesome Components for you
      </h3>
      <p className="md:text-para lg:text-para-big max-w-3xl text-center text-sm text-neutral-600 dark:text-neutral-400">
        There are two simple and flexible ways you can integrate Quartz UI into
        your project, depending on what best fits your workflow.
      </p>
    </div>
    <div className="space-y-20 md:space-y-32">
      {features.map((feature, idx) => (
        <FeatureSection key={idx} {...feature} />
      ))}
    </div>
  </div>
);

export default UseSection;
