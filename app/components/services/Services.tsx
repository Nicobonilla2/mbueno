import { Section } from "../layout/Section";
import { ServicesItem } from "./ServicesItem";

type Article = {
  h1: string;
  urlService: string;
  urlImg: string;
  content: string;
};

export default function Page() {
  const articles: Article[] = [
    {
      h1: "CALEFACCIÓN",
      content:
        "Instalamos sistemas de calefacción eficientes y personalizados, enfocándonos en calidad y seguridad. Expertos en soluciones a medida para todo tipo de espacios, garantizamos confort y eficiencia energética óptimos.",
      urlService: "servicios-de-calefaccion",
      urlImg: "/images/Calefaccion.avif",
    },
    {
      h1: "VENTILACIÓN",
      content:
        "Brindamos instalación y mantenimiento de sistemas de ventilación para diversos ambientes. Nuestros expertos aseguran una calidad de aire óptima y confort, adaptando soluciones energéticamente eficientes a cada necesidad.",
      urlService: "servicios-de-ventilacion",
      urlImg: "/images/servicios-de-ventilacion.avif",
    },
    {
      h1: "CALEFACCIÓN",
      content:
        "Instalamos sistemas de calefacción eficientes y personalizados, enfocándonos en calidad y seguridad. Expertos en soluciones a medida para todo tipo de espacios, garantizamos confort y eficiencia energética óptimos",
      urlService: "servicios-de-calefaccion",
      urlImg: "/images/Calefaccion.avif",
    },
  ];
  return (
    <>
      <Section>
        <section className="md:h-full flex items-center">
          <div className="container grid px-5 pb-24 font-opensans text-gray-600 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl pt-10 text-center md:text-6xl ">
                SERVICIOS DE CLIMATIZACIÓN
              </h1>
            </div>
            <div className="flex flex-wrap -m-10  justify-center items-center">
              {articles.map((article: Article) => (
                <ServicesItem
                  key={article.urlService}
                  h1={article.h1}
                  content={article.content ? article.content : ""}
                  urlService={article.urlService}
                  urlImg={article.urlImg}
                />
              ))}
            </div>
          </div>
        </section>
      </Section>
    </>
  );
}
