"use client";

import { useGetSubredditInfo } from "@/queries/useSubreddit";
import { fromUnixTime } from "date-fns";
import { useActiveTopicStore } from "@/stores/useActiveTopic";
import Divider from "@/components/Divider";
import PostComponents from "@/components/Post/components";

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
          <Divider />
          <PostComponents.Root>
            {info.data.thumbnail !== "self" &&
              info.data.thumbnail !== "default" && (
                <PostComponents.Image imageURL={info.data.thumbnail} />
              )}
            <div>
              <PostComponents.Title title={info.data.title} />
              <PostComponents.SendBy
                creationDate={fromUnixTime(info.data.created_utc)}
                author={info.data.author}
              />
              <PostComponents.Domain domain={info.data.domain} />
            </div>
          </PostComponents.Root>
        </>
      ))}
    </>
  );
};
