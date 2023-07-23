import { fireEvent, render, screen } from "@testing-library/react";
import { PostRoot } from "@/components/Post/components/PostRoot";
import { PostTitle } from "../../PostTitle";

describe("PostRoot", () => {
  it("should call open post url on click", () => {
    const postURL =
      "https://www.reddit.com/r/reactjs/comments/156m504/the_nextjs_13_app_router_has_been_a_frustrating/";
    const onClickPost = jest.fn();
    const spyWindowOpen = jest.spyOn(window, "open");
    spyWindowOpen.mockImplementation(onClickPost);

    render(
      <PostRoot postURL={postURL}>
        <PostTitle title="Teste do click"></PostTitle>
      </PostRoot>
    );

    const postRootField = screen.getByTestId("postroot-test");
    fireEvent.click(postRootField);

    expect(onClickPost).toBeCalledWith(postURL);
  });
});
