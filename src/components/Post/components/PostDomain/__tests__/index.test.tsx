import { render, screen } from "@testing-library/react";
import { PostDomain } from "@/components/Post/components/PostDomain";

describe("PostDomain", () => {
  it("should show domain text", () => {
    const domain = "self.reactjs";

    render(<PostDomain domain={domain}></PostDomain>);

    const domainField = screen.getByText(domain);

    expect(domainField).toHaveTextContent(domain);
  });
});
