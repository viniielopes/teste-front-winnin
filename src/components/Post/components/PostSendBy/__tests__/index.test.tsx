import { fireEvent, render, screen } from "@/test-utils";
import { PostSendBy } from "@/components/Post/components/PostSendBy";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { NextIntlProvider } from "next-intl";
import messages from "@/messages/pt.json";

describe("PostSendBy", () => {
  it("should call author profile when click", () => {
    const onClickAuthor = jest.fn();
    const spyWindowOpen = jest.spyOn(window, "open");
    spyWindowOpen.mockImplementation(onClickAuthor);

    const creationDate = new Date(2023, 2, 21);
    const author = "Vinicius";

    const locale = "pt";

    render(
      <NextIntlProvider messages={messages} locale={locale}>
        <PostSendBy author={author} creationDate={creationDate} />
      </NextIntlProvider>
    );

    const sendByField = screen.getByTestId("author-test");
    fireEvent.click(sendByField);

    expect(onClickAuthor).toBeCalledWith(
      "https://www.reddit.com/user/Vinicius"
    );
  });

  it("should show autor and creation date formated", () => {
    const creationDate = new Date(2023, 2, 21);
    const author = "Vinicius";

    const sendByText = `Enviado há ${formatDistance(creationDate, new Date(), {
      locale: ptBR,
    })} por u/${author}`;

    render(<PostSendBy author={author} creationDate={creationDate} />);

    const sendByField = screen.getByTestId("sendby-test").textContent;

    expect(sendByField).toBe(sendByText);
  });
});
