import { useInfiniteQuery } from "@tanstack/react-query";
import { redditInstance } from "@/api/axios";
import { GetSubredditInfoParams, GetSubredditInfoResponse } from "./types";
import { AxiosResponse } from "axios";

const prefix = "reddit";

export const useGetSubredditInfo = ({ type }: GetSubredditInfoParams) => {
  return useInfiniteQuery(
    [prefix, type],
    (teste) =>
      redditInstance
        .get<AxiosResponse<GetSubredditInfoResponse>>(
          `/r/reactjs/${type}.json?limit=10&raw_json=1${
            teste.pageParam ? `&after=${teste.pageParam}` : ""
          }`,
        )
        .then((data) => data.data.data),
    { getNextPageParam: (lastPage) => lastPage.after },
  );
};
