import VerticalFeatureRow from "./VerticalFeatureRow";

export default function MercadosSideEffect() {
  return (
    <>
      <VerticalFeatureRow
        title={"SECTOR HABITACIONAL"}
        description={
          "Nos especializamos en proyectos habitacionales que combinan confort y funcionalidad. Nuestro enfoque en seguridad, profesionalismo y diseño personalizado se refleja en cada vivienda, creando espacios únicos."
        }
        image={"/images/Aire-condicionado-habitacional-4.jpg"}
        urlMercado={"/sector-habitacional"}
      />

      <VerticalFeatureRow
        title={"SECTOR INDUSTRIAL"}
        description={
          "MBA se destaca en el sector industrial como proveedor de servicios de montaje mecánico, eléctrico, instrumentación y comunicaciones. MBA es sinónimo de excelencia y sustentabilidad en proyectos industriales."
        }
        image={"/images/Obra.jpg"}
        reversed
        urlMercado={"/sector-industrial"}
      />

      <VerticalFeatureRow
        title={"SECTOR SALUD"}
        description={
          "Con 20 años de experiencia, MBA lidera en modernización y construcción de clínicas y hospitales a nivel global. Nos enfocamos en la eficiencia operacional y la seguridad, implementando sistemas avanzados como BMS y soluciones de climatización."
        }
        image={"/images/Sector-salud-2.jpg"}
        urlMercado={"/sector-salud"}
      />
    </>
  );
}
