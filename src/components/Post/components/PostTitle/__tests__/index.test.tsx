import { render, screen } from "@testing-library/react";
import { PostTitle } from "@/components/Post/components/PostTitle";

describe("PostTitle", () => {
  it("should call click when pass prop", () => {
    const title = "Dan Abramov saiu da Meta";

    render(<PostTitle title={title}></PostTitle>);

    const titleField = screen.getByText(title);

    expect(titleField).toHaveTextContent(title);
  });
});
