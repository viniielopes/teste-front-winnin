import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { PostSendByProps } from "./types";

export const PostSendBy = ({ author, creationDate }: PostSendByProps) => {
  const onClickAuthor = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    window.open(`https://www.reddit.com/user/${author}`);
  };
  return (
    <p
      className="text-base font-normal leading-5 text-gray-dark2"
      data-testid="sendby-test"
    >
      enviado há{" "}
      {formatDistance(creationDate, new Date(), {
        locale: ptBR,
      })}{" "}
      por
      <span className="text-primary hover:underline" onClick={onClickAuthor}>
        {" "}
        u/{author}
      </span>
    </p>
  );
};
