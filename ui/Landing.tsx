import {
  Cta,
  Carousel,
  DemoSection,
  HeroSection,
  Testimonials,
  UseSection,
} from './landing';

const Landing = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Carousel />
      <DemoSection />
      <UseSection />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Landing;
