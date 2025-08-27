import ExpandableCard from '@/components/ExpandableCard';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Expandable Card',
  component: ExpandableCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpandableCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
