import { Button } from '@/components/Button';
import AnimatedText from '@/components/AnimatedText';
import { Heading } from './heading';
import Motion from '../motion';
import Link from 'next/link';
import HeroBadge from './hero-badge';
import { HeroLogos } from './hero-logos';

const HeroSection = () => {
  return (
    <div
      data-hero-section
      className="flex flex-col items-center px-4 pt-8 pb-28 sm:px-8 md:pt-0 md:pb-36 lg:px-20 2xl:px-60"
    >
      <div className="relative z-10 flex flex-col items-center gap-4 pt-[clamp(8rem,30vw,18rem)] sm:px-8 sm:pt-[clamp(12rem,30vw,18rem)] lg:gap-6">
        <HeroBadge />
        <HeroLogos />

        <div className="font-instru-serif max-w-2xl lg:max-w-3xl">
          <Heading as="h1">
            <AnimatedText>
              Upgrade Your UI with Subtle Animated React Components
            </AnimatedText>
          </Heading>
        </div>
        <Motion
          as="p"
          initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="max-w-xl text-center text-neutral-600 md:text-lg dark:text-neutral-400"
        >
          Our UI library gives you elegant, production-ready components built
          for speed, flexibility, and creativity. Design smarter, ship faster,
          and focus on what truly matters your product.
        </Motion>
      </div>
      <Motion
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="z-10 mt-12 space-x-4 md:mt-14 md:space-x-6"
      >
        <Link href="/docs">
          <Button variant="secondary" className="px-6 text-sm">
            Components
          </Button>
        </Link>
        <Link href="/docs/introduction">
          <Button className="px-5 text-sm">Introduction</Button>
        </Link>
      </Motion>
    </div>
  );
};

export default HeroSection;
