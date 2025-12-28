import {
  Banner,
  Carousel,
  DemoSection,
  HeroSection,
  Testimonials,
  UseSection,
} from './landing';

const Landing = () => {
  return (
    <div className="flex flex-col px-4 sm:px-8 lg:px-20 2xl:px-60">
      <HeroSection />
      <Carousel />
      <DemoSection />
      <UseSection />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Landing;
