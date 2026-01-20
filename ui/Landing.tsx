import {
  Cta,
  Carousel,
  DemoSection,
  HeroSection,
  Testimonials,
  UseSection,
  SearchSection,
} from './landing';

const Landing = () => {
  return (
    <div className="flex min-h-screen max-w-screen flex-col overflow-hidden">
      <HeroSection />
      <Carousel />
      <SearchSection />
      <DemoSection />
      <UseSection />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Landing;
