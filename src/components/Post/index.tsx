"use client";

import { useGetSubredditInfo } from "@/queries/useSubreddit";
import { fromUnixTime } from "date-fns";
import { useActiveTopicStore } from "@/stores/useActiveTopic";
import Divider from "@/components/Divider";
import PostComponents from "@/components/Post/components";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingPost } from "../LoadingPost";
import { toast } from "react-toastify";

export const Post = () => {
  const topicType = useActiveTopicStore((state) => state.topicType);

  const { data, isLoading, isError, fetchNextPage } = useGetSubredditInfo(
    {
      type: topicType,
    },
    {
      onError: () => {
        toast.error("Aconteceu um erro!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    },
  );

  if (isLoading) {
    return <LoadingPost size={10} />;
  }

  if (!data && isError) {
    return (
      <div className="flex justify-center">
        <h1 className="text-xl font-bold text-error">
          Aconteceu um erro, tente novamente em alguns minutos...
        </h1>
      </div>
    );
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
