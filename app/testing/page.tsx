import LogoCarousel from '@/components/logo-carousel';

const TestingPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-16">
      <LogoCarousel
        logos={[
          'https://cdn.worldvectorlogo.com/logos/duolingo-black.svg',
          'https://cdn.worldvectorlogo.com/logos/continental-logo-2.svg',
          'https://cdn.worldvectorlogo.com/logos/great-clips-stores.svg',
          'https://cdn.worldvectorlogo.com/logos/ebsco-logo.svg',
        ]}
      />
      <LogoCarousel
        delay={0.1}
        logos={[
          'https://cdn.worldvectorlogo.com/logos/continental-logo-2.svg',
          'https://cdn.worldvectorlogo.com/logos/great-clips-stores.svg',
          'https://cdn.worldvectorlogo.com/logos/ebsco-logo.svg',
          'https://cdn.worldvectorlogo.com/logos/duolingo-black.svg',
        ]}
      />
      <LogoCarousel
        delay={0.2}
        logos={[
          'https://cdn.worldvectorlogo.com/logos/great-clips-stores.svg',
          'https://cdn.worldvectorlogo.com/logos/ebsco-logo.svg',
          'https://cdn.worldvectorlogo.com/logos/duolingo-black.svg',
          'https://cdn.worldvectorlogo.com/logos/continental-logo-2.svg',
        ]}
      />
      <LogoCarousel
        delay={0.3}
        logos={[
          'https://cdn.worldvectorlogo.com/logos/ebsco-logo.svg',
          'https://cdn.worldvectorlogo.com/logos/duolingo-black.svg',
          'https://cdn.worldvectorlogo.com/logos/continental-logo-2.svg',
          'https://cdn.worldvectorlogo.com/logos/great-clips-stores.svg',
        ]}
      />
    </div>
  );
};

export default TestingPage;
