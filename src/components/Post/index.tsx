import Image from "next/image";

export const Post = () => {
  return (
    <div className="flex my-3">
      <Image
        className="rounded-lg"
        src="https://b.thumbs.redditmedia.com/g2d6Ie2paZKOxwbjRl6AZn0XsenNbPTv8llc67IHa6c.jpg"
        alt={"Post image"}
        width={77}
        height={77}
      />
      <div className="ml-3">
        <h2 className="font-semibold text-xl leading-6">Titulo do post</h2>
        <p className="font-normal text-gray-dark2 text-base leading-5">
          enviado há 6 horas por{" "}
          <span className="text-primary">usuario_nickname</span>
        </p>
        <p className="text-base font-bold leading-5 mt-2">dominio.io</p>
      </div>
    </div>
  );
};
