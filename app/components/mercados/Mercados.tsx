import { Section } from "../layout/Section";
import { MercadosItem } from "./MercadosItem";

type Mercado = {
  h1: string;
  urlMercado: string;
  urlImage: string;
  content: string;
};

const Mercados: React.FC = () => {
    const mercados:Mercado[] = [
      {
        h1: 'SECTOR HABITACIONAL',
        urlMercado: '/sector-habitacional',
        urlImage: '/icon/house-icon.svg', 
        content: 'Nos especializamos en proyectos habitacionales que combinan confort y funcionalidad. Nuestro enfoque en seguridad, profesionalismo y diseño personalizado se refleja en cada vivienda, creando espacios únicos.',
      },
      {
        h1: 'SECTOR INDUSTRIAL',
        urlMercado: '/sector-industrial',
        urlImage: '/icon/industrial.svg', 
        content: 'MBA se destaca en el sector industrial como proveedor de servicios de montaje mecánico, eléctrico, instrumentación y comunicaciones. MBA es sinónimo de excelencia y sustentabilidad en proyectos industriales.',
      },
      {
        h1: 'SECTOR SALUD',
        urlMercado: '/sector-salud',
        urlImage: '/icon/hospital-2.svg', 
        content: 'Con 20 años de experiencia, MBA lidera en modernización y construcción de clínicas y hospitales a nivel global. Nos enfocamos en la eficiencia operacional y la seguridad, implementando sistemas avanzados como BMS y soluciones de climatización.',
      }
    ];
  return (
    <>
      <Section>
        <section className="h-full flex z-100 justify-center items-center">
          <div className="container grid px-5 font-opensans text-gray-600 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl pt-10 md:text-4xl xl:pt-28 text-center">
                EXPERTOS EN GESTIÓN DE PROYECTOS
              </h1>
            </div>
            <div className="flex flex-wrap -m-10 pt-5 justify-center items-center">
              {mercados.map((mercado: Mercado) => (
                <MercadosItem
                  key={mercado.urlMercado}
                  h1={mercado.h1}
                  content={mercado.content ? mercado.content : ""}
                  urlMercado={mercado.urlMercado}
                  urlImage={mercado.urlImage}
                />
              ))}
              
            </div>
            
          </div>
        </section>
      </Section>
    </>
  );
};
export default Mercados ;