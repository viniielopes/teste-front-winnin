import type { Meta, StoryObj } from "@storybook/react";

import { LoadingPost } from "./index";

const meta = {
  title: "Components/Loading Post",
  component: LoadingPost,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoadingPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: { size: 3 },
  decorators: [
    (LoadingPost) => (
      <div style={{ width: "40rem" }}>
        <LoadingPost></LoadingPost>
      </div>
    ),
  ],
};
