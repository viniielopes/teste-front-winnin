import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { redditInstance } from "@/api/axios";
import { GetSubredditInfoParams, GetSubredditInfoResponse } from "./types";
import { AxiosResponse } from "axios";

const prefix = "reddit";

export const useGetSubredditInfo = (
  { type }: GetSubredditInfoParams,
  options?: UseInfiniteQueryOptions<GetSubredditInfoResponse, unknown>,
) => {
  return useInfiniteQuery<GetSubredditInfoResponse, unknown>(
    [prefix, type],
    ({ pageParam }) =>
      redditInstance
        .get<AxiosResponse<GetSubredditInfoResponse>>(
          `/r/reactjs/${type}.json?limit=10&raw_json=1${
            pageParam ? `&after=${pageParam}` : ""
          }`,
        )
        .then((data) => data.data.data),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.after === null ? undefined : lastPage.after;
      },
      retry: 2,
      ...options,
    },
  );
};
