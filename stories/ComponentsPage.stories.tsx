import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ComponentsPage from '../app/components/page';
import RootLayout from '../app/layout';

const meta = {
  title: 'Pages/Components Page',
  component: ComponentsPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RootLayout>
      <ComponentsPage />
    </RootLayout>
  ),
};
