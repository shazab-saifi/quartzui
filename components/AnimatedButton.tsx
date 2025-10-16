'use client';

import { cn } from '@/lib/utils';

export type AnimatedButtonProps = {
  children: string;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  disabled?: boolean;
};

const AnimatedButton = ({
  children,
  onClick,
  className,
  type = 'button',
  ariaLabel,
  disabled = false,
}: AnimatedButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel ?? children}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'relative h-12 w-32 overflow-hidden rounded-full bg-neutral-100 p-[2px] dark:bg-black',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,#00b4d8_20%,transparent_30%)] [animation-duration:2s]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 h-full w-full scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,#0077b6_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"
        aria-hidden="true"
      />
      <div className="relative z-20 flex h-full w-full items-center justify-center rounded-full bg-white px-6 py-2 text-black dark:bg-black dark:text-white">
        {children}
      </div>
    </button>
  );
};

export default AnimatedButton;
