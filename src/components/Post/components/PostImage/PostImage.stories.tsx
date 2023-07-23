import type { Meta, StoryObj } from "@storybook/react";

import { PostImage } from "@/components/Post/components/PostImage";

const meta = {
  title: "Post/Image",
  component: PostImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PostImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    imageURL:
      "https://w7.pngwing.com/pngs/379/457/png-transparent-computer-icons-reddit-logo-website-red-reddit-icon-miscellaneous-text-orange-thumbnail.png",
  },
};
