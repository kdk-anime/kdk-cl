import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './Switch.tsx';
import {expect, fn, userEvent, within} from "storybook/test";

const onChangeMock = fn();

const meta = {
  title: 'Shared/Form/Switch',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',

    },
    checked: {
      control: 'boolean',
    }
  },
  args: {
    disabled: false,
    checked: undefined,
    onChange: onChangeMock,
    children: 'Switch',
  },
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  // TODO: perform props change test (useEffect value sync)
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole('switch');
    await expect(switchElement).toBeInTheDocument();
    await userEvent.click(switchElement);
    await userEvent.click(switchElement);
    await expect(onChangeMock).toBeCalledTimes(2);
  }
};

export const Checked: Story = {
  args: {
    checked: true
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole('switch');
    await expect(switchElement).toBeInTheDocument();
    await userEvent.click(switchElement);
    await expect(onChangeMock).toBeCalledTimes(0);
  }
}
