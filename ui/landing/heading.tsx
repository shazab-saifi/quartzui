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
      ? 'text-3xl md:text-4xl lg:text-5xl 2xl:6xl leading-14'
      : 'text-2xl lg:text-3xl 2xl:text-4xl';
  return (
    <Tag
      className={cn(
        sizeClass,
        'font-semibold tracking-tight text-balance',
        className
      )}
      {...props}
    >
      <Balance>{children}</Balance>
    </Tag>
  );
};
