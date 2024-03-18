import Link from "next/link";
import Image from "next/image";

type Article = {
  h1: string;
  urlMercado: string;
  urlImage: string;
  content: string;
};

const MercadosItem: React.FC<Article> = ({
  h1,
  content,
  urlMercado,
  urlImage,
}) => {
  return (
    <Link href={`/informacion-isapres-chile/${urlMercado}`}>
      <div className="p-4 max-w-96 z-60">
        <div className="h-full font-opensans group overflow-hidden ">
          <div className="flex justify-center items-center ">
            <Image
              className="max-w-20 group-hover:scale-110  group-hover:brightness-110 brightness-90  transition duration-300 "
              height={100}
              width={200}
              src={urlImage}
              alt={urlImage}
            />
          </div>
          <div className="p-6 ease-in">
            <h1 className="text-xl text-center mb-3">{h1}</h1>
            <p className="leading-relaxed text-justify">
              {" "}
              {content.substring(0, 500)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { MercadosItem };
