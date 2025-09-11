import { cn } from '@/lib/utils';
import { ElementType } from 'react';
import { tv } from 'tailwind-variants';

const badgeVariants = tv({
  base: 'gap-xs flex items-center justify-center rounded-md border  text-xs ',
  variants: {
    color: {
      green: 'border-green-500 bg-green-500/20 text-green-500',
      cyan: 'border-cyan-500 bg-cyan-500/20 text-cyan-500',
      red: 'border-red-500 bg-red-500/20 text-red-500',
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
  icon: Icon,
  variant,
  className,
}: {
  label: string;
  icon: ElementType;
  variant: 'green' | 'cyan' | 'red';
  className?: string;
}) => {
  return (
    <div className={cn(badgeVariants({ color: variant }), className)}>
      {Icon && <Icon size={14} />}
      <span>{label}</span>
    </div>
  );
};

export default Badge;
