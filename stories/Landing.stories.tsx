import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Landing from '../app/page';
import RootLayout from '../app/layout';

const meta = {
  title: 'Pages/Landing Page',
  component: Landing,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RootLayout>
      <Landing />
    </RootLayout>
  ),
};
