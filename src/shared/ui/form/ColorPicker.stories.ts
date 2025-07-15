import type { Meta, StoryObj } from '@storybook/react-vite';

import { ColorPicker } from './ColorPicker';
import {expect, fn, userEvent, within} from "storybook/test";

const onClickMock = fn();

const meta = {
  title: 'Shared/Form/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'color',
    }
  },
  args: {
    children: 'ColorPicker',
    onClick: onClickMock,
  }
} satisfies Meta<typeof ColorPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  // TODO: cover with detailed tests
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const picker = canvas.getByRole('img');
    await expect(picker).toBeInTheDocument();
    await userEvent.click(picker);
    await expect(onClickMock).toBeCalledTimes(1);
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
}
