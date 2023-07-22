import { act, render, screen } from "@testing-library/react";
import { Button } from "..";

describe("Button", () => {
  it("should call click when pass prop", () => {
    const mockOnClick = jest.fn();

    render(
      <Button width="normal" onClick={mockOnClick}>
        Teste
      </Button>,
    );

    const button = screen.getByText("Teste");

    act(() => {
      button.click();
    });

    expect(mockOnClick).toBeCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should apply normal width class and bg primary class when active", () => {
    render(
      <Button width="normal" active onClick={() => {}}>
        Teste
      </Button>,
    );

    const button = screen.getByText("Teste");

    expect(button).toHaveClass("w-48", "bg-primary");
  });

  it("should use normal width when not pass width prop", () => {
    render(<Button onClick={() => {}}>Teste</Button>);

    const button = screen.getByText("Teste");

    expect(button).toHaveClass("w-48");
  });

  it("should apply full width class and bg gray class when not active", () => {
    render(
      <Button width="full" active={false} onClick={() => {}}>
        Teste
      </Button>,
    );

    const button = screen.getByText("Teste");

    expect(button).toHaveClass("w-full", "bg-gray");
  });
});
