"use client";

import { useGetSubredditInfo } from "@/queries/useSubreddit";
import { fromUnixTime } from "date-fns";
import { useActiveTopicStore } from "@/stores/useActiveTopic";
import Divider from "@/components/Divider";
import PostComponents from "@/components/Post/components";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingPost } from "../LoadingPost";

export const Post = () => {
  const topicType = useActiveTopicStore((state) => state.topicType);

  const { data, isLoading, isError, fetchNextPage } = useGetSubredditInfo({
    type: topicType,
    pageParam: undefined,
  });

  if (isLoading) {
    return <LoadingPost size={10} />;
  }

  if (true) {
    return <h1>rolou um erro</h1>;
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={data.pages.length}
        next={() => fetchNextPage()}
        hasMore={true}
        loader={<LoadingPost size={4} />}
      >
        {data.pages.map((page) => (
          <>
            {page.children.map((info) => (
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
        ))}
      </InfiniteScroll>
    </div>
  );
};
