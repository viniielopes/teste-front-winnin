import { render, screen } from "@testing-library/react";
import { PostSendBy } from "@/components/Post/components/PostSendBy";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

describe("PostSendBy", () => {
  it("should show autor and creation date formated", () => {
    const creationDate = new Date(2023, 2, 21);
    const author = "Vinicius";

    const search_message = `enviado há ${formatDistance(
      creationDate,
      new Date(),
      {
        locale: ptBR,
      },
    )} por u/${author}`;

    render(<PostSendBy author={author} creationDate={creationDate} />);

    const sendByText = screen.getByTestId("sendby-test").textContent;

    expect(sendByText).toBe(search_message);
  });
});
