import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PricingPage from '../app/pricing/page';
import RootLayout from '../app/layout';

const meta = {
  title: 'Pages/Pricing Page',
  component: PricingPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PricingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RootLayout>
      <PricingPage />
    </RootLayout>
  ),
};
