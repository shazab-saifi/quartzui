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
    <div className="flex flex-col">
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
