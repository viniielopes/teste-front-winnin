import { PostDomainProps } from "./types";

export const PostDomain = ({ domain }: PostDomainProps) => {
  return <p className="mt-2 text-base font-bold leading-5">{domain}</p>;
};
