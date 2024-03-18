"use client";
import imageByIndex from "./imageByIndex";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useEffect } from 'react';
type Props = {
  plugins?: EmblaPluginType[];
};

export default function CarouselIsapres({ plugins }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);
  
  const fullText = 'PARA HACER SUSTENTABLE EL NEGOCIO DE NUESTROS CLIENTES';
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setAnimatedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 2); // Ajusta este valor para controlar la velocidad de la animación

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Carousel
      opts={{ align: "center", loop: true, dragFree: false }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="relative  w-full h-[80vh] overflow-hidden ">
              <Image
                src={imageByIndex(index)}
                alt=""
                className="absolute w-full h-[80vh] object-cover top-0 left-0"
                style={{ objectPosition: "center" }}
                width={1000}
                height={1000}
              />
              <div className="absolute flex bottom-10 items-center h-[17vh] w-5/6 bg-black/60">
                <div className="w-fill text-start pl-2 md:w-2/4 md:pl-20 md:pb-20 lg:w-1/2 lg:pb-32">
                  <div className="flex grid gap-2">
                    {" "}
                    <p className="text-white text-2xl font-opensans ">
                      GRANDES SOLUCIONES
                    </p>
                    <p className="text-white w-4/5 pt-2 border-t-[1px] border-white  font-opensans font-thin text-sm lg:text-2xl">
                     {animatedText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
