import { Button } from '@/components/Button';
import TabSelect from '@/components/TabSelect';
import FAQ from '@/ui/pricing/FAQ';
import { IconCircleCheckFilled } from '@tabler/icons-react';

interface PlanType {
  title: string;
  price: string;
  desc: string;
  offerings: string[];
}

const PricingCard = ({ plan }: { plan: PlanType }) => {
  const isProfessional = plan.title === 'Professional';
  const isEnterprise = plan.title === 'Enterprise';

  let bgGradient =
    'bg-[radial-gradient(circle_at_top_right,theme(colors.neutral.100),theme(colors.white),theme(colors.white),theme(colors.white))] dark:bg-[radial-gradient(circle_at_top_right,theme(colors.neutral.700),theme(colors.neutral.950),theme(colors.neutral.950),theme(colors.neutral.950))]';

  if (isProfessional) {
    bgGradient =
      'bg-[radial-gradient(circle_at_top,theme(colors.neutral.100),theme(colors.white),theme(colors.white))] dark:bg-[radial-gradient(circle_at_top,theme(colors.neutral.700),theme(colors.neutral.950),theme(colors.neutral.950))]';
  } else if (isEnterprise) {
    bgGradient =
      'bg-[radial-gradient(circle_at_top_left,theme(colors.neutral.100),theme(colors.white),theme(colors.white),theme(colors.white))] dark:bg-[radial-gradient(circle_at_top_left,theme(colors.neutral.700),theme(colors.neutral.950),theme(colors.neutral.950),theme(colors.neutral.950))]';
  }

  return (
    <div
      className={`mx-auto flex w-84 flex-col justify-between gap-20 rounded-2xl border border-neutral-200 transition-colors md:rounded-3xl ${bgGradient} p-4 md:min-h-[800px] md:w-92 md:p-6 dark:border-neutral-800`}
    >
      <div className="space-y-9">
        <div className="space-y-md md:space-y-6">
          <div
            className={`text-lg font-semibold transition-colors ${
              isProfessional
                ? 'text-neutral-950 dark:text-neutral-100'
                : 'text-neutral-700 dark:text-neutral-400'
            }`}
          >
            {plan.title}
          </div>
          <div>
            <span className="text-4xl font-semibold text-neutral-950 transition-colors md:text-5xl dark:text-neutral-100">
              ${plan.price}
            </span>
            <span className="text-xs text-neutral-500 transition-colors md:text-sm dark:text-neutral-400">
              /month
            </span>
          </div>
          <p
            className={`text-sm transition-colors ${isProfessional ? 'text-neutral-800 dark:text-neutral-100' : 'text-neutral-600 dark:text-neutral-400'}`}
          >
            {plan.desc}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 transition-colors dark:text-neutral-400">
          <span className="h-[2px] w-full bg-neutral-300 transition-colors dark:bg-neutral-700"></span>
          <span className="transition-colors">Includes</span>
          <span className="h-[2px] w-full bg-neutral-300 transition-colors dark:bg-neutral-700"></span>
        </div>
        <div className="space-y-4">
          {plan.offerings.map((item, idx) => (
            <div
              key={idx}
              className={`flex gap-2 text-sm transition-colors ${
                isProfessional
                  ? 'text-neutral-950 dark:text-neutral-100'
                  : 'text-neutral-700 dark:text-neutral-400'
              }`}
            >
              <IconCircleCheckFilled className="transition-colors" />
              <p className="transition-colors">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant={isProfessional ? 'secondary' : 'primary'}
        className={
          (isProfessional
            ? 'border-none bg-neutral-950 text-neutral-100 hover:bg-neutral-800 hover:text-neutral-50 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-300 dark:text-neutral-950 dark:hover:from-neutral-200 dark:hover:to-neutral-400 dark:hover:text-neutral-900'
            : 'border-none bg-neutral-100 text-neutral-950 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-50') +
          ' transition-colors'
        }
      >
        Get {plan.title} Now
      </Button>
    </div>
  );
};

const page = () => {
  const plans: PlanType[] = [
    {
      title: 'Free',
      price: '0',
      desc: 'Great for solo developer and small projects.',
      offerings: [
        'Access to core components',
        'Copy & paste snippets from docs',
        'Basic customization options',
        'Community support',
        'MIT license for personal and small projects',
      ],
    },
    {
      title: 'Professional',
      price: '19',
      desc: 'Perfect for working professionals and freelancer.',
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
      title: 'Enterprise',
      price: '199',
      desc: 'Best for large teams and organizations with advanced needs.',
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
      ],
    },
  ];

  const faqs: { qes: string; ans: string }[] = [
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

  return (
    <div className="mt-16 space-y-24 bg-white transition-colors md:space-y-32 lg:space-y-40 xl:space-y-50 dark:bg-neutral-950">
      <div className="space-y-16 md:space-y-20">
        <div className="flex w-full flex-col items-center gap-6 md:gap-8">
          <h1 className="xl:text-h1 md:text-h3 lg:text-h2 max-w-4xl text-center text-3xl font-bold text-neutral-950 transition-colors dark:text-neutral-100">
            Simple, Transparent Pricing Built for Every Team
          </h1>
          <p className="md:text-para lg:text-para-big max-w-3xl text-center text-sm text-neutral-600 transition-colors dark:text-neutral-400">
            From solo devs to enterprises, we’ve got you covered.
          </p>
        </div>
        <div className="w-full space-y-8 md:space-y-12">
          <TabSelect tabs={['Monthly', 'Yearly']} />
          <div className="flex w-full flex-wrap gap-16 transition-colors">
            {plans.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-32 space-y-12 md:space-y-16">
        <h1 className="md:text-h4 text-h5 text-center leading-7 font-semibold text-neutral-950 transition-colors dark:text-neutral-100">
          Frequently Asked Questions
        </h1>
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default page;
