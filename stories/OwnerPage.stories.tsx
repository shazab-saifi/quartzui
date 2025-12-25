import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import OwnerPage from '../app/(with-footer)/owner/page';
import RootLayout from '../app/layout';

const meta = {
  title: 'Pages/Owner Page',
  component: OwnerPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RootLayout>
      <OwnerPage />
    </RootLayout>
  ),
};
