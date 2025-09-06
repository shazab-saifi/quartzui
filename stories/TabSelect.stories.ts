import TabSelect from '@/components/TabSelect';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Tab Select',
  component: TabSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: ['Home', 'Docs', 'Pricing', 'Join'],
  },
};
