import HeroSection from './landing/HeroSection';
import Testimonials from './landing/Testimonials';
import UseSection from './landing/UseSection';

const Landing = () => {
  return (
    <div className="space-y-50">
      <HeroSection />
      <UseSection />
      <Testimonials />
    </div>
  );
};

export default Landing;
