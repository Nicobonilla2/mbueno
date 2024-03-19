import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  image: string;
  urlMercado: string;
  reversed?: boolean;
};

export default function VerticalFeatureRow({ title, description, image, urlMercado, reversed = false }: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the item is in view
  });

  const animation = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? `translateX(0)` : `translateX(${reversed ? '-100%' : '100%'})`,
    },
    config: {
      mass: 1,
      tension: 210,
      friction: 20,
    },
  });

  return (
    <Link href={`/informacion-isapres-chile/${urlMercado}`}>
      <div ref={ref} className="flex flex-col  md:flex-row cursor-pointer">
        <animated.div style={animation} className="flex items-center text-center w-full md:w-1/2 px-6">
          <div className="w-full p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600">{title}</h3>
            <div className="mt-6 text-sm leading-6">{description}</div>
          </div>
        </animated.div>
        <animated.div style={animation} className="w-full md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            objectFit="cover"
          />
        </animated.div>
      </div>
    </Link>
  );
}
