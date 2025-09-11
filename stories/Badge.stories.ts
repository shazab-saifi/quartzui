import Badge from '@/components/Badge';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IconBrandReact } from '@tabler/icons-react';

const meta = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'React.js',
    icon: IconBrandReact,
    variant: 'cyan',
  },
};

export const Red: Story = {
  args: {
    label: 'React.js',
    icon: IconBrandReact,
    variant: 'red',
  },
};

export const Green: Story = {
  args: {
    label: 'React.js',
    icon: IconBrandReact,
    variant: 'green',
  },
};
