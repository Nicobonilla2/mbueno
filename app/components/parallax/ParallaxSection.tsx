import React, { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Mercados from "../mercados/Mercados";

type ParallaxProps = {
  src: string;
  children: React.ReactNode;
};

const ParallaxSection: React.FC<ParallaxProps> = ({ src }) => {

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute flex top-0 bottom-0 right-0 left-0 w-full h-full"
       style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center"
       }}/>
        <div 
        className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-70'>
        </div>

      <Parallax pages={1}>
        <ParallaxLayer
          offset={0}
          speed={1}
        >
          <Mercados />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
};

export default ParallaxSection;
