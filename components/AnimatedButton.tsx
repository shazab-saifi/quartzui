'use client';

import { motion } from 'motion/react';

export type AnimatedButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  disabled?: boolean;
};

const AnimatedButton = ({
  label,
  onClick,
  className,
  type = 'button',
  ariaLabel,
  disabled = false,
}: AnimatedButtonProps) => {
  return (
    <motion.button
      type={type}
      aria-label={ariaLabel ?? label}
      disabled={disabled}
      initial={{
        backgroundImage:
          'linear-gradient(to right, black, black), linear-gradient(0deg, beige, blue, black 40%)',
      }}
      animate={{
        backgroundImage:
          'linear-gradient(360deg, beige, blue, black 40%), linear-gradient(360deg, beige, blue, black 40%)',
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 3,
        repeat: Infinity,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        border: '2px solid transparent',
        borderRadius: '20px',
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'padding-box, border-box',
        width: 160,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      onClick={onClick}
      className={className}
    >
      {label}
    </motion.button>
  );
};

export default AnimatedButton;
