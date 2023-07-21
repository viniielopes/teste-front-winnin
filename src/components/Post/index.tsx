"use client";

import { useGetSubredditInfo } from "@/queries/useSubreddit";
import Image from "next/image";
import { formatDistance, fromUnixTime } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useActiveTopicStore } from "@/stores/useActiveTopic";

export const Post = () => {
  const topicType = useActiveTopicStore((state) => state.topicType);

  const { data, isLoading, isError } = useGetSubredditInfo({
    after: undefined,
    type: topicType,
  });

  if (isLoading) {
    return <h1>carregando ....</h1>;
  }
  if (isError) {
    return <h1>rolou um erro</h1>;
  }

  return (
    <>
      {data.data.children.map((info) => (
        <>
          <hr className="border-gray" />
          <div className="my-3 flex">
            {info.data.thumbnail !== "self" &&
              info.data.thumbnail !== "default" && (
                <Image
                  className="rounded-lg"
                  src={info.data.thumbnail}
                  alt={"Post image"}
                  width={77}
                  height={77}
                />
              )}
            <div className="ml-3">
              <h2 className="text-xl font-semibold leading-6">
                {info.data.title}
              </h2>
              <p className="text-base font-normal leading-5 text-gray-dark2">
                enviado há{" "}
                {formatDistance(
                  fromUnixTime(info.data.created_utc),
                  new Date(),
                  {
                    locale: ptBR,
                  },
                )}{" "}
                por
                <span className="text-primary"> u/{info.data.author}</span>
              </p>
              <p className="mt-2 text-base font-bold leading-5">
                {info.data.domain}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
