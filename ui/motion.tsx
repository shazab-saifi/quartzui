'use client';

import { motion, MotionProps } from 'motion/react';

type MotionOwnProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
};

type MotionComponentProps<T extends React.ElementType> = MotionOwnProps<T> &
  Omit<React.ComponentPropsWithRef<T>, keyof MotionOwnProps<T>> &
  MotionProps;

export default function Motion<T extends React.ElementType = 'div'>(
  props: MotionComponentProps<T>
) {
  const { as, children, ...motionprops } = props;

  const Component = motion(as || 'div');

  return <Component {...motionprops}>{children}</Component>;
}
