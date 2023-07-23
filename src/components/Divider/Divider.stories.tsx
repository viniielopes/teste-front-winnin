import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./index";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    (Divider) => (
      <div style={{ width: "40rem" }}>
        <Divider></Divider>
      </div>
    ),
  ],
};
