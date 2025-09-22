import Image from 'next/image';
import { Button } from './Button';

const Banner = () => {
  return (
    <div className="group relative min-h-[450px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 transition-colors md:min-h-0 md:rounded-4xl dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex max-w-3xl flex-col gap-8 p-4 sm:p-8 md:gap-12 md:p-12 lg:p-16 xl:p-20">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-neutral-950 sm:text-3xl md:text-4xl dark:text-neutral-100">
            Ready to Build Something Amazing?
          </h1>
          <p className="max-w-[400px] text-sm text-neutral-800 sm:text-base md:text-lg dark:text-neutral-300">
            Start using our UI library today and bring your ideas to life
            faster, cleaner, and smarter. Your next project deserves the best
            tools.
          </p>
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="w-fit bg-neutral-950 from-neutral-100 to-neutral-300 text-neutral-100 dark:bg-gradient-to-b dark:text-neutral-950"
        >
          Documentation
        </Button>
      </div>
      <Image
        src="/copy.webp"
        alt="demo-image1"
        width={600}
        height={300}
        className="absolute -right-4 -bottom-24 h-auto w-[200px] -rotate-6 rounded-lg border border-neutral-800 transition-transform duration-300 group-hover:scale-[1.05] group-hover:-rotate-[8deg] sm:-right-4 sm:-bottom-24 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
      />
      <Image
        src="/demo-white.webp"
        alt="demo-image2"
        width={600}
        height={300}
        className="absolute -right-24 -bottom-12 h-auto w-[200px] -rotate-[4deg] rounded-lg border transition-transform duration-300 group-hover:scale-[1.05] group-hover:-rotate-[6deg] sm:-right-24 sm:-bottom-12 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
      />
    </div>
  );
};

export default Banner;
