import Banner from '@/ui/landing/Banner';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
