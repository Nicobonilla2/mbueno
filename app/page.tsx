'use client';
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Link from "next/link";
import CarouselIsapres from "./components/carousel/CarouselIsapres";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <CarouselIsapres />
      {/*<div className="w-full h-[50svh] overflow-hidden object-fit">
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
