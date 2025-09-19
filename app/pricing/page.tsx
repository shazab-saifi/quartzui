import { Button } from '@/components/Button';
import TabSelect from '@/components/TabSelect';
import { IconCircleCheckFilled } from '@tabler/icons-react';

interface PlanType {
  title: string;
  price: string;
  desc: string;
  offerings: string[];
}

const PricingCard = ({ plan }: { plan: PlanType }) => {
  return (
    <div className="flex w-full flex-col justify-between gap-20 rounded-2xl border-2 border-transparent bg-[conic-gradient(at_top_left,_theme(colors.neutral.700),_theme(colors.neutral.950),_theme(colors.neutral.950),_theme(colors.neutral.700))] p-4 md:min-h-[800px] md:p-6">
      <div className="space-y-9">
        <div className="space-y-md">
          <div className="text-lg font-semibold text-neutral-400">
            {plan.title}
          </div>
          <div>
            <span className="text-4xl font-semibold">${plan.price}</span>
            <span className="text-xs text-neutral-400 md:text-sm">/month</span>
          </div>
          <p className="text-sm text-neutral-400">{plan.desc}</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-neutral-700">
          <span className="h-[2px] w-full bg-neutral-700"></span>
          <span>Includes</span>
          <span className="h-[2px] w-full bg-neutral-700"></span>
        </div>
        <div className="space-y-4 md:space-y-6">
          {plan.offerings.map((item, idx) => (
            <div key={idx} className="flex gap-2 text-sm text-neutral-400">
              <IconCircleCheckFilled />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <Button size="sm" variant="secondary">
        Start With Free Now
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

  return (
    <div className="mt-16 space-y-12 md:space-y-24">
      <div className="flex w-full flex-col items-center gap-6 md:gap-8">
        <h1 className="xl:text-h1 md:text-h3 lg:text-h2 max-w-4xl text-center text-3xl font-bold">
          Simple, Transparent Pricing Built for Every Team
        </h1>
        <p className="md:text-para lg:text-para-big max-w-3xl text-center text-sm text-neutral-600 dark:text-neutral-400">
          From solo devs to enterprises, we’ve got you covered.
        </p>
      </div>
      <div className="space-y-8">
        <TabSelect tabs={['Monthly', 'Yearly']} />
        <div className="flex flex-wrap gap-16 md:gap-24">
          {plans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
