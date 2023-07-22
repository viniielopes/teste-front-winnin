import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Divider from "@/components/Divider";
import { LoadingPostProps } from "./types";
import { Fragment } from "react";

export const LoadingPost = ({ size = 1 }: LoadingPostProps) => {
  const loadings = Array.from({ length: size }, () => {
    const widthTitle = Math.random() * (50 - 30) + 30;
    const widthSendBy = Math.random() * (60 - 35) + 35;
    const widthDomain = Math.random() * (25 - 15) + 15;

    return {
      widthTitle,
      widthSendBy,
      widthDomain,
    };
  });

  return (
    <>
      {loadings.map(({ widthSendBy, widthDomain, widthTitle }) => (
        <Fragment key={widthDomain + widthSendBy + widthTitle}>
          <Divider />
          <div className="my-3 flex" data-testid="loading-test">
            <Skeleton width={77} height={77} className="mr-3" />
            <div className="w-full">
              <Skeleton count={1} width={`${widthTitle}%`} />
              <Skeleton count={1} width={`${widthSendBy}%`} />
              <Skeleton count={1} width={`${widthDomain}%`} />
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
};
