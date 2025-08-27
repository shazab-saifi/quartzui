'use client';

import { motion } from 'motion/react';

const AnimatedButton = () => {
  return (
    <motion.div
      initial={{
        backgroundImage:
          'linear-gradient(to right, black, black), linear-gradient(0deg, yellow, purple, black 40%)',
      }}
      animate={{
        backgroundImage:
          'linear-gradient(to right, black, black), linear-gradient(360deg, yellow, purple, black 40%)',
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 3,
        repeat: Infinity,
      }}
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
      }}
    >
      Button
    </motion.div>
  );
};

export default AnimatedButton;
