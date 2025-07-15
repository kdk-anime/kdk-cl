import type { Meta, StoryObj } from '@storybook/react-vite';

import {expect, fn, userEvent, within} from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    }
  },
  args: {
    onClick: fn(),
    disabled: false,
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
  }
};
