import { PostRootProps } from "./types";

export const PostRoot = ({ children, postURL }: PostRootProps) => {
  const onClickPost = () => {
    window.open(postURL, "_blank");
  };
  return (
    <div className="my-3 flex cursor-pointer" onClick={onClickPost}>
      {children}
    </div>
  );
};
