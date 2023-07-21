import Image from "next/image";

export const Post = () => {
  return (
    <div className="my-3 flex">
      <Image
        className="rounded-lg"
        src="https://b.thumbs.redditmedia.com/g2d6Ie2paZKOxwbjRl6AZn0XsenNbPTv8llc67IHa6c.jpg"
        alt={"Post image"}
        width={77}
        height={77}
      />
      <div className="ml-3">
        <h2 className="text-xl font-semibold leading-6">Titulo do post</h2>
        <p className="text-base font-normal leading-5 text-gray-dark2">
          enviado há 6 horas por{" "}
          <span className="text-primary">usuario_nickname</span>
        </p>
        <p className="mt-2 text-base font-bold leading-5">dominio.io</p>
      </div>
    </div>
  );
};
