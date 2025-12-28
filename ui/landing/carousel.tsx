import LogoCarousel from '@/components/logo-carousel';
import {
  AppleMusic,
  Facebook,
  Instagram,
  Linkedin,
  Netflix,
  Oracle,
  Samsung,
  Sony,
  Tinder,
} from '@/icons';
import { Heading } from './heading';

const Carousel = () => {
  return (
    <div className="z-15 mx-auto flex w-fit flex-col items-center justify-between gap-18">
      <div>
        <Heading as="h2" className="text-center">
          Our Customers
        </Heading>
        <p className="mt-2 text-center text-neutral-600 dark:text-neutral-400">
          Trusted by leading companies and professionals around the world.
        </p>
      </div>
      <div className="mx-auto flex w-full flex-col items-center gap-10 sm:w-fit sm:flex-row sm:gap-20">
        <LogoCarousel
          logos={[
            <Sony key="sony-carousel-1" />,
            <Samsung key="samsung-carousel-1" />,
            <Instagram key="instagram-carousel-1" />,
          ]}
        />
        <LogoCarousel
          logos={[
            <AppleMusic key="applemusic-carousel-2" />,
            <Netflix key="netflix-carousel-2" />,
            <Linkedin key="linkedin-carousel-2" />,
          ]}
          delay={0.1}
        />
        <LogoCarousel
          logos={[
            <Facebook key="facebook-carousel-3" />,
            <Tinder key="tinder-carousel-3" />,
            <Oracle key="oracle-carousel-3" />,
          ]}
          delay={0.2}
        />
        <LogoCarousel
          logos={[
            <AppleMusic key="applemusic-carousel-4" />,
            <Samsung key="samsung-carousel-4" />,
            <Instagram key="instagram-carousel-4" />,
          ]}
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default Carousel;
