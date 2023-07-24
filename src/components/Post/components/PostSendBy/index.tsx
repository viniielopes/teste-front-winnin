import { Locale, formatDistance } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import { PostSendByProps } from "./types";
import { useLocale, useTranslations } from "next-intl";
import { Locales } from "@/types/locales";

export const PostSendBy = ({ author, creationDate }: PostSendByProps) => {
  const t = useTranslations("SendBy");
  const locale = useLocale();

  const localeDate: { [key in Locales]: Locale } = {
    en: enUS,
    pt: ptBR,
  };

  const localeSelected = localeDate[locale as Locales];

  const onClickAuthor = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    window.open(`https://www.reddit.com/user/${author}`);
  };
  return (
    <p
      className="text-base font-normal leading-5 text-gray-dark2"
      data-testid="sendby-test"
    >
      {t("sent")}{" "}
      {formatDistance(creationDate, new Date(), {
        locale: localeSelected,
      })}{" "}
      {t("by")}
      <span
        data-testid="author-test"
        className="text-primary hover:underline"
        onClick={onClickAuthor}
      >
        {" "}
        u/{author}
      </span>
    </p>
  );
};
