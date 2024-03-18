import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

type Article = {
    h1: string;
    urlService: string;
    urlImg: string;
    content: string;
  };


const ServicesItem: FC<Article> = ({
  h1,
  content,
  urlService,
  urlImg,
}) => {
  return (
    <Link href={`/informacion-isapres-chile/${urlService}`}>
      <div className="p-4 max-w-96">
        <div className="h-full border-2  font-opensans group border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="max-h-48 w-full object-cover object-center group-hover:scale-110  group-hover:brightness-110 brightness-90  transition duration-300 "
            height={100}
            width={200}
            src={urlImg}
            alt={urlImg}
          />
          <div className="p-6 ease-in">
            <h1 className="text-xl text-center mb-3">{h1}</h1>
            <p className="leading-relaxed text-justify">
              {" "}
              {content.substring(0, 300)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { ServicesItem };