import { PostImageProps } from "./types";
import Image from "next/image";

export const PostImage = ({ imageURL }: PostImageProps) => {
  return (
    <Image
      className="mr-3 rounded-lg"
      src={imageURL}
      alt={"Post image"}
      width={77}
      height={77}
      data-testid={"post-image"}
    />
  );
};
