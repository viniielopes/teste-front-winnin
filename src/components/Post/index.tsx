"use client";

import { fromUnixTime } from "date-fns";
import Divider from "@/components/Divider";
import PostComponents from "@/components/Post/components";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingPost } from "../LoadingPost";
import { usePost } from "@/hooks/usePost";
import { Fragment } from "react";

export const Post = () => {
  const { data, isLoading, isError, fetchMoreData, hasNextPage } = usePost();

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

  if (!data) {
    return (
      <div className="flex justify-center">
        <h1 className="text-xl font-bold text-error">
          Parece que não foi encontrado posts.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={data.pages.length}
        next={() => fetchMoreData()}
        hasMore={!!hasNextPage}
        loader={<LoadingPost size={4} />}
      >
        {data.pages.map((page) => (
          <Fragment key={page.children[0].data.title}>
            {page.children.map((info) => (
              <Fragment key={info.data.created_utc}>
                <Divider />
                <PostComponents.Root postURL={info.data.url}>
                  {info.data.thumbnail.includes("https://") && (
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
              </Fragment>
            ))}
          </Fragment>
        ))}
      </InfiniteScroll>
    </div>
  );
};
