'use client';
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Link from "next/link";
import CarouselHome from "./components/carousel/CarouselHome";
import Services from "./components/services/Services";
import ParallaxSection from "./components/parallax/ParallaxSection";
import IconSection from "./components/parallax/IconMercados";
import { ParallaxProvider } from 'react-scroll-parallax';
import Mercados from "./components/mercados/Mercados";

export default function Home() {
 

  return (
    <main>
       <ParallaxProvider>
      <Navbar/>
      <CarouselHome />
      <Services />

      <ParallaxSection
        src="/images/Obra.jpg"
      ><></>
      </ParallaxSection>
      <Mercados/>

      <Services />

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
