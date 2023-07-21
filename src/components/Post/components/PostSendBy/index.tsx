import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { PostSendByProps } from "./types";

export const PostSendBy = ({ author, creationDate }: PostSendByProps) => {
  return (
    <p className="text-base font-normal leading-5 text-gray-dark2">
      enviado há{" "}
      {formatDistance(creationDate, new Date(), {
        locale: ptBR,
      })}{" "}
      por
      <span className="text-primary"> u/{author}</span>
    </p>
  );
};
