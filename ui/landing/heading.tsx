import { cn } from '@/lib/utils';
import Balance from 'react-wrap-balancer';

export const Heading = ({
  children,
  className,
  as = 'h2',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  const Tag = as;
  const sizeClass =
    Tag === 'h1'
      ? 'text-3xl md:text-4xl lg:text-5xl'
      : 'text-xl md:text-2xl lg:text-3xl';
  return (
    <Tag
      className={cn(sizeClass, 'font-bold tracking-tight', className)}
      {...props}
    >
      <Balance>{children}</Balance>
    </Tag>
  );
};
