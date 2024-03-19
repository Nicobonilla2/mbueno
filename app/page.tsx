"use client";
import Navbar from "./components/navbar/Navbar";
import CarouselHome from "./components/carousel/CarouselHome";
import Services from "./components/services/Services";
import Mercados from "./components/mercados/Mercados";
import MercadosSideEffect from "./components/mercados/MercadosSideEffect";

export default function Home() {
  return (
    <main>
        <Navbar />
        <CarouselHome />
        <Services />
        <div className="relative h-[25vw] w-screen overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 z-0 transform rotate-3 translate-y-1/4" />
        </div>
        <MercadosSideEffect />
        <Mercados />
{/*
        <ParallaxSection src={"/images/Detalle_vertical.webp"}>
          <></>
        </ParallaxSection>

        <div className="w-full h-[50svh] overflow-hidden object-fit">
        <Image 
          alt='MBA Ingeniería Home'
          src='/images/Detalle.jpeg'
          layout="responsive"
          height={400}
          width={1000}
        />
  </div>*/}
    </main>
  );
}
