"use client";
import imageByIndex from "./imageByIndex";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Props = {
  plugins?: EmblaPluginType[];
};
export default function CarouselIsapres({ plugins }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);
  return (
    <Carousel
      opts={{ align: "center", loop: true, dragFree: false }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[70vh] overflow-hidden ">
              <Image
                src={imageByIndex(index)}
                alt=""
                className="absolute w-full h-full object-cover top-0 left-0"
                style={{ objectPosition: 'center' }}
                width={1000}
                height={1000}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
