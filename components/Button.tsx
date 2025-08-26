import { cn } from '@/lib/utils';
import { tv } from 'tailwind-variants';
import { LuLoaderCircle } from 'react-icons/lu';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'gradient' | 'destructive';
  loader?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

const buttonVariants = tv({
  base: 'font-medium bg-blue-500 text-white rounded-lg active:opacity-80 transition-colors cursor-pointer inline-flex gap-2 items-center justify-center',
  variants: {
    color: {
      primary: 'bg-black hover:bg-neutral-900 border-1 border-neutral-800',
      secondary: 'bg-white text-black hover:bg-neutral-200',
      gradient:
        'bg-linear-65 from-purple-500 to-pink-500 rounded-full font-semibold hover:ring-1',
      destructive: 'bg-red-500 hover:bg-red-400',
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
  loader,
  ...props
}: ButtonProps) => {
  const loaderSizeMap: Record<'sm' | 'md' | 'lg', number> = {
    sm: 16,
    md: 18,
    lg: 20,
  };
  const loaderIconSize = loaderSizeMap[size ?? 'md'];

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(buttonVariants({ size, color: variant }), className)}
      {...props}
    >
      {loader && (
        <span className="animate-spin">
          <LuLoaderCircle size={loaderIconSize} />
        </span>
      )}
      {label}
    </button>
  );
};
