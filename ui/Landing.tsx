import Banner from '@/ui/landing/Banner';
import HeroSection from './landing/HeroSection';
import Testimonials from './landing/Testimonials';
import UseSection from './landing/UseSection';
import DemoSection from './landing/DemoSection';

const Landing = () => {
  return (
    <div className="space-y-24 md:space-y-32 lg:space-y-40 xl:space-y-50">
      <HeroSection />
      <DemoSection />
      <UseSection />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Landing;
