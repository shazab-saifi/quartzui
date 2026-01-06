import { Button } from '@/components/Button';
import { Heading } from '@/ui/landing/heading';
import FAQ from '@/ui/pricing/FAQ';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Quartz UI',
  description:
    'Discover flexible pricing plans for Quartz UI. Choose the perfect plan to access a comprehensive library of modern, customizable UI components designed to accelerate your next project.',
  openGraph: {
    images:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760620351/ogimage_s4dmmb.png',
  },
};

interface PlanType {
  title: string;
  price: string;
  desc: string;
  offerings: string[];
}

interface FAQType {
  qes: string;
  ans: string;
}

const PricingCard = ({ plan }: { plan: PlanType }) => {
  const isBusiness = plan.title === 'Business';
  const isEnterprise = plan.title === 'Enterprise';

  return (
    <div
      className={`flex w-full min-w-[280px] flex-col justify-between gap-16 rounded-2xl border border-neutral-200 bg-neutral-50 md:w-auto md:min-w-[300px] md:rounded-3xl lg:max-w-xs dark:border-neutral-800 dark:bg-[#121212] ${
        isBusiness
          ? 'md:h-[900px] md:-translate-y-4 dark:bg-neutral-900'
          : 'md:h-[850px]'
      }`}
    >
      <div>
        <div>
          <div className="p-4 md:p-6">
            <div className="text-2xl font-semibold">{plan.title}</div>
            <div>
              <span
                className={`font-semibold ${
                  isEnterprise
                    ? 'text-base text-neutral-600 dark:text-neutral-400'
                    : 'text-lg text-neutral-950 dark:text-neutral-100'
                }`}
              >
                {isEnterprise ? 'Contact Us' : `$${plan.price}`}
              </span>
              {!isEnterprise && (
                <span className="text-xs text-neutral-500 md:text-sm dark:text-neutral-400">
                  /month
                </span>
              )}
            </div>
          </div>

          <p className="border-y border-neutral-100 p-4 font-medium text-neutral-600 md:p-6 dark:border-neutral-800 dark:text-neutral-400">
            {plan.desc}
          </p>
        </div>

        <div className="space-y-4 p-4 md:p-6">
          {plan.offerings.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 text-sm ${
                isBusiness
                  ? 'text-neutral-950 dark:text-white'
                  : 'text-neutral-700 dark:text-neutral-300'
              }`}
            >
              <IconCircleCheckFilled fill="var(--color-indigo-500)" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant={isBusiness ? 'secondary' : 'primary'}
        className={`mx-auto mb-4 w-full max-w-[192px] md:mb-6 ${
          !isBusiness &&
          'border-neutral-200 bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 hover:dark:bg-neutral-900 dark:hover:text-white'
        }`}
      >
        Get started
      </Button>
    </div>
  );
};

const PLANS: PlanType[] = [
  {
    title: 'Free',
    price: '0',
    desc: 'Great for solo developer.',
    offerings: [
      'Access to core components',
      'Copy & paste snippets from docs',
      'Basic customization options',
      'Community support',
      'MIT license for personal and small projects',
    ],
  },
  {
    title: 'Pro',
    price: '49',
    desc: 'For professionals and freelancer.',
    offerings: [
      'Everything in Free, plus:',
      'Copy & paste snippets from docs',
      'Full CLI access for quick setup',
      'Advanced components and layouts',
      'Theme customization & dark mode support',
      'Regular updates and new releases',
      'Priority email support',
      'Commercial license for client projects',
    ],
  },
  {
    title: 'Business',
    price: '149',
    desc: 'For startups and small businesses.',
    offerings: [
      'Everything in Professional, plus:',
      'Priority support',
      'Custom component development',
      'Onboarding & training',
      'Commercial license',
      'Dedicated account manager',
      'SLA-backed uptime guarantee',
      'Custom integrations',
      'Early access to new features',
      'Security & compliance reviews',
      'Personalized onboarding sessions',
      'Team collaboration features',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    desc: 'For enterprises with support.',
    offerings: [
      'Everything in Business, plus:',
      'Unlimited team members & seats',
      'Custom contract & invoicing',
      'Dedicated solutions architect',
      '24/7 priority support',
      'Custom SLAs',
      'On-premise/Private Cloud deployment',
      'Enterprise-grade security & compliance',
      'Integrations with enterprise systems',
      'Custom onboarding and migration',
      'Feature prioritization',
    ],
  },
];

const FAQS: FAQType[] = [
  {
    qes: 'What is Quartz UI and who is it for?',
    ans: 'Quartz UI is a modern, component-based UI library that helps developers and designers build sleek, responsive, and production-ready interfaces quickly. It’s designed for everyone — from solo developers who want to move fast, to startups and enterprises that need scalable, customizable solutions.',
  },
  {
    qes: 'How do I install Quartz UI in my project?',
    ans: 'You can start in two simple ways: copy & paste components directly from our docs, or use the Quartz CLI for a faster, automated setup. Both options are beginner-friendly and flexible.',
  },
  {
    qes: 'Can I use Quartz UI in commercial projects?',
    ans: 'Yes! You can use Quartz UI in personal, client, or commercial projects depending on your plan. The Free plan works for personal use, while Professional and Enterprise plans unlock licenses for commercial and large-scale applications.',
  },
  {
    qes: 'What’s the difference between the Free, Professional, and Enterprise plans?',
    ans: 'The Free plan gives you access to core components and community support. The Professional plan adds advanced components, CLI integration, and priority support. The Enterprise plan includes everything in Professional plus team collaboration, custom components, dedicated support, and enterprise-level licensing.',
  },
  {
    qes: 'Do I need to know React (or another framework) to use Quartz UI?',
    ans: 'Quartz UI is built to work seamlessly with modern frameworks like React. Basic knowledge of your chosen framework will help, but you don’t need to be an expert — our docs and examples make integration easy.',
  },
  {
    qes: 'Is Quartz UI customizable to match my brand design?',
    ans: 'Absolutely. You can customize colors, typography, themes, and even component structure to perfectly align with your brand. The Professional and Enterprise plans unlock advanced customization options like theming and dark mode.',
  },
];

const page = () => {
  return (
    <div className="mt-16 space-y-24 bg-white px-4 sm:px-8 md:space-y-32 lg:space-y-40 lg:px-20 xl:space-y-50 2xl:px-40 dark:bg-neutral-950">
      <div className="space-y-16 md:space-y-20 lg:space-y-24">
        <div className="flex w-full flex-col items-center gap-6">
          <Heading as="h1">Pricing</Heading>
          <p className="max-w-xl text-center text-lg text-neutral-600 dark:text-neutral-400">
            Use Quartz UI for free with your whole team. Upgrade to enable
            unlimited components, enhanced performance, and additional features.
          </p>
        </div>

        <div className="mx-auto grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 2xl:grid-cols-4">
          {PLANS.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
      <div className="mt-32 space-y-12 md:space-y-16">
        <Heading as="h2" className="text-center">
          Frequently Asked Questions
        </Heading>
        <FAQ faqs={FAQS} />
      </div>
    </div>
  );
};

export default page;
