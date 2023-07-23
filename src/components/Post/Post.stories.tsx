import type { Meta, StoryObj } from "@storybook/react";

import { PostRoot } from "@/components/Post/components/PostRoot";
import PostComponents from "@/components/Post/components";

const meta = {
  title: "Post/All",
  component: PostRoot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PostRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompletePost: Story = {
  args: {
    postURL:
      "https://www.reddit.com/r/reactjs/comments/156m504/the_nextjs_13_app_router_has_been_a_frustrating/",
    children: (
      <>
        <PostComponents.Image
          imageURL={
            "https://w7.pngwing.com/pngs/379/457/png-transparent-computer-icons-reddit-logo-website-red-reddit-icon-miscellaneous-text-orange-thumbnail.png"
          }
        />
        <div>
          <PostComponents.Title title={"Post do storybook"} />
          <PostComponents.SendBy
            creationDate={new Date(2023, 4, 29)}
            author={"Vinicius"}
          />
          <PostComponents.Domain domain={"winnin.com"} />
        </div>
      </>
    ),
  },
};
