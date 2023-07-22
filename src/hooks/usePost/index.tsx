import { useGetSubredditInfo } from "@/queries/useSubreddit";
import { useActiveTopicStore } from "@/stores/useActiveTopic";
import { toast } from "react-toastify";

export const usePost = () => {
  const topicType = useActiveTopicStore((state) => state.topicType);

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetSubredditInfo(
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

  const fetchMoreData = () => {
    fetchNextPage();
  };

  return { data, isLoading, isError, fetchMoreData, hasNextPage };
};
