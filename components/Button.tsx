import { cn } from '@/lib/utils';
import { tv } from 'tailwind-variants';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

const buttonVariants = tv({
  base: 'font-medium bg-blue-500 text-white rounded-lg active:opacity-80 transition-colors cursor-pointer',
  variants: {
    color: {
      primary: 'bg-black text-white hover:bg-neutral-900',
      secondary: 'bg-white text-black hover:bg-neutral-200',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-4 py-2',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const Button = ({
  variant,
  className,
  size,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(buttonVariants({ size, color: variant }), className)}
    >
      {label}
    </button>
  );
};
