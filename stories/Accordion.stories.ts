import Accordion from '@/components/Accordion';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Accordian',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
