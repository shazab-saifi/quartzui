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
          Trusted By
        </Heading>
        <p className="mt-2 max-w-md px-2 text-center text-neutral-600 sm:mt-4 md:text-lg dark:text-neutral-400">
          Trusted by leading companies and professionals around the world.
        </p>
      </div>
      <div className="mx-auto grid w-fit grid-cols-2 justify-center gap-8 px-4 md:grid-cols-4 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32">
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
            <Instagram key="instagram-carousel-4" />,
            <AppleMusic key="applemusic-carousel-4" />,
            <Samsung key="samsung-carousel-4" />,
          ]}
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default Carousel;
