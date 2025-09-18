import Banner from '@/components/Banner';
import HeroSection from './landing/HeroSection';
import Testimonials from './landing/Testimonials';
import UseSection from './landing/UseSection';

const Landing = () => {
  return (
    <div className="space-y-24 md:space-y-32 lg:space-y-40 xl:space-y-50">
      <HeroSection />
      <UseSection />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Landing;
