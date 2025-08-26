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
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Loading: Story = {
  args: {
    size: 'md',
    loader: true,
    label: 'Button',
  },
};

export const Gradient: Story = {
  args: {
    size: 'md',
    variant: 'gradient',
    label: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    size: 'md',
    variant: 'destructive',
    label: 'Button',
  },
};
