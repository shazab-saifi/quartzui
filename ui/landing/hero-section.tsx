import { Button } from '@/components/Button';
import AnimatedText from '@/components/AnimatedText';
import { Heading } from './heading';
import HeroImages from './hero-images';
import Motion from '../motion';
import Link from 'next/link';
import HeroBadge from './hero-badge';

const HeroSection = () => {
  return (
    <div className="mt-16 flex flex-col items-center px-4 sm:px-8 lg:mt-28 lg:px-20 2xl:px-60">
      <div className="z-10 flex flex-col items-center gap-4 sm:px-8 lg:gap-6">
        <HeroBadge />
        <div className="max-w-2xl lg:max-w-3xl">
          <Heading as="h1">
            <AnimatedText>
              Get Components with Subtle Animations for React.js
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
      <HeroImages />
    </div>
  );
};

export default HeroSection;
