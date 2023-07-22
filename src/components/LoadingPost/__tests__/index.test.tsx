import { LoadingPost } from "@/components/LoadingPost";
import { act, render, screen } from "@testing-library/react";

describe("LoadingPost", () => {
  it("should render only 1 when not pass size", () => {
    render(<LoadingPost></LoadingPost>);

    const loadings = screen.queryAllByTestId("loading-test");

    expect(loadings.length).toBe(1);
  });

  it("should render same size passed by prop", () => {
    render(<LoadingPost size={3}></LoadingPost>);

    const loadings = screen.getAllByTestId("loading-test");

    expect(loadings.length).toBe(3);
  });
});
