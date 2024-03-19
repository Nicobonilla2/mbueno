"use client";
import Navbar from "./components/navbar/Navbar";
import CarouselHome from "./components/carousel/CarouselHome";
import Services from "./components/services/Services";
import ParallaxSection from "./components/parallax/ParallaxSection";
import { ParallaxProvider } from "react-scroll-parallax";
import Mercados from "./components/mercados/Mercados";
import VerticalFeatureRow from "./components/mercados/VerticalFeatureRow";
import MercadosSideEffect from "./components/mercados/MercadosSideEffect";

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <Navbar />
        <CarouselHome />
        <Services />
       
        <MercadosSideEffect />
        <Mercados />

        <ParallaxSection src={"/images/Detalle_vertical.webp"}>
          <></>
        </ParallaxSection>

        {/*<div className="w-full h-[50svh] overflow-hidden object-fit">
        <Image 
          alt='MBA Ingeniería Home'
          src='/images/Detalle.jpeg'
          layout="responsive"
          height={400}
          width={1000}
        />
  </div>*/}
      </ParallaxProvider>
    </main>
  );
}
