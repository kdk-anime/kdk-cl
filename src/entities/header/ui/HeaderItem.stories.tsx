import type {Meta, StoryObj} from '@storybook/react-vite';

import { HeaderItem } from './HeaderItem.tsx';
import {Icon} from "@/shared/ui";
import styles from './HeaderBody.module.scss';
import {expect, userEvent, within} from "storybook/test";

const meta = {
  title: 'Entities/Header/HeaderItem',
  component: HeaderItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <div className={styles.content} style={{ padding: '1rem' }}>
          <Story />
        </div>
    )
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
    }
  },
  args: {
    title: 'Button',
    children: <Icon name="home" />,
  }
} satisfies Meta<typeof HeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};

export const Active: Story = {
  args: {
    className: 'active',
  }
}

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
