import Badge from '@/components/Badge';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

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
    label: 'Tailwindcss',
    variant: 'cyan',
  },
};

export const Red: Story = {
  args: {
    label: 'Next.js',
    variant: 'red',
  },
};

export const Green: Story = {
  args: {
    label: 'React.js',
  },
};

export const Blue: Story = {
  args: {
    label: 'TypeScript',
    variant: 'blue',
  },
};

export const Yellow: Story = {
  args: {
    label: 'JavaScript',
    variant: 'yellow',
  },
};

export const Purple: Story = {
  args: {
    label: 'GraphQL',
    variant: 'purple',
  },
};
