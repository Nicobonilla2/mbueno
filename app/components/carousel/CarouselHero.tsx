'use client';
import { Carousel } from "@material-tailwind/react";
import CarouselHeroItem from "./CarouselHeroItem";

type ICarousel = {
  autoplay?: false | true;
};

export default function CarouselHero({ autoplay }: ICarousel) {
  return (
    <div>
      <Carousel
        autoplay={false}
        placeholder={"thePlaceHolder"}
        loop={true}
        autoplayDelay={5000}
        transition={{ duration: 0.5 }}
      >
        <CarouselHeroItem
          title={"ASESORÍA PERSONALIZADA"}
          description={"ENCUENTRA LA MEJOR OPCION DE SALUD EN BASE A TU PERFIL"}
          description1={"CONTRÁTALO 100% REMOTO"}
          description2={"SIN COSTO ADICIONAL"}
          image={"/images/family-1.jpg"}
        />
      </Carousel>
    </div>
  );
}
