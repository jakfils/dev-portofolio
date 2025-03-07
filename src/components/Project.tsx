import Image from "next/image";
const Project = ({
  title,
  imgUrl,
  description,
  imgAlt,
}: {
  title: string;
  imgUrl: string;
  description: string;
  imgAlt: string;
}) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex items-center justify-center flex-1">
        <Image
          src={imgUrl}
          width={250}
          height={250}
          alt={imgAlt}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col text-center flex-2 md:text-left">
        <h4>{title}</h4>
        <p className="text-[8px]">{description}</p>
      </div>
    </div>
  );
};

export default Project;
