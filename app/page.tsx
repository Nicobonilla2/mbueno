'use client';
import Navbar from "./components/navbar/Navbar";
import CarouselHome from "./components/carousel/CarouselHome";
import Services from "./components/services/Services";
import ParallaxSection from "./components/parallax/ParallaxSection";
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
