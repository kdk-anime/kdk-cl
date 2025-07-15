import type { Meta, StoryObj } from '@storybook/react-vite';

import { HeaderBody } from './HeaderBody';
import {HeaderItem} from "./HeaderItem";
import {Icon} from "@/shared/ui";

const meta = {
  title: 'Entities/Header/HeaderBody',
  component: HeaderBody,
  decorators: [
      (Story) => (
          <div style={{ height: "100vh", display: 'flex' }}>
              <Story />
          </div>
      )
  ]
} satisfies Meta<typeof HeaderBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      Array(5).fill(
          <HeaderItem title="Button">
            <Icon name="home" />
          </HeaderItem>
      ),
      <div style={{ flex: 1 }} />,
      Array(5).fill(
          <HeaderItem title="Button">
            <Icon name="home" />
          </HeaderItem>
      ),
    ].flat()
  }
};

export const Overflow: Story = {
  args: {
    children: Array(20).fill(
        <HeaderItem title="Button">
          <Icon name="home" />
        </HeaderItem>
    )
  }
}
