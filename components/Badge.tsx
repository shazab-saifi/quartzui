import { cn } from '@/lib/utils';

import { tv } from 'tailwind-variants';

const badgeVariants = tv({
  base: 'gap-sm flex items-center justify-center rounded-md cursor-pointer text-xs overflow-hidden',
  variants: {
    color: {
      green: 'bg-green-500/20 text-green-500',
      cyan: 'bg-cyan-500/20 text-cyan-500',
      red: 'bg-red-500/20 text-red-500',
      blue: 'bg-blue-500/20 text-blue-500',
      yellow: 'bg-yellow-500/20 text-yellow-500',
      purple: 'bg-purple-500/20 text-purple-500',
    },
  },
  compoundVariants: [
    {
      class: 'px-2 py-1',
    },
  ],
  defaultVariants: {
    color: 'green',
  },
});

const Badge = ({
  label,
  variant,
  className,
}: {
  label: string;
  variant?: 'green' | 'cyan' | 'red' | 'blue' | 'yellow' | 'purple';
  className?: string;
}) => {
  const dotBgByVariant: Record<
    'green' | 'cyan' | 'red' | 'blue' | 'yellow' | 'purple',
    string
  > = {
    green: 'bg-green-500',
    cyan: 'bg-cyan-500',
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
  };
  const resolvedVariant:
    | 'green'
    | 'cyan'
    | 'red'
    | 'blue'
    | 'yellow'
    | 'purple' = variant ?? 'green';
  return (
    <div className={cn(badgeVariants({ color: variant }), className)}>
      <div
        className={cn('size-1.5 rounded-full', dotBgByVariant[resolvedVariant])}
      ></div>
      <span>{label}</span>
    </div>
  );
};

export default Badge;
