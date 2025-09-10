import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Button } from '../components/Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    size: 'md',
    loader: true,
    children: 'Button',
  },
};

export const Gradient: Story = {
  args: {
    size: 'md',
    variant: 'gradient',
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    size: 'md',
    variant: 'destructive',
    children: 'Button',
  },
};
