import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
type Props = {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
  urlMercado: string;
};

export default function VerticalFeatureRow({
  title,
  description,
  image,
  reversed = false,
  urlMercado,
}: Props) {
  // Clases para controlar el orden basado en el tamaño de la pantalla
  const orderClass = reversed ? "md:flex-row-reverse" : "md:flex-row";
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the item is in view
  });

  const animation = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView
        ? `translateX(0)`
        : `translateX(-100%)`,
    },
    config: {
      mass: 1,
      tension: 210,
      friction: 20,
    },
  });
  return (
    <Link href={`/informacion-isapres-chile/${urlMercado}`}>
      <div ref={ref} className={` ${orderClass} flex flex-col md:flex-row`}>
        <animated.div
          style={animation}
          className="flex items-center text-center w-full md:w-1/2 px-6"
        >
          <div className="w-full p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
              {title}
            </h3>
            <div className="mt-6 text-sm leading-6 ">{description}</div>
          </div>
        </animated.div>
        <animated.div
          style={animation}
          className="w-full h-full object-cover object-center"
        >
          <Image
            className="w-full h-auto max-h-60 md:max-h-96 object-cover object-center"
            src={image}
            alt={title}
            layout="responsive"
            height={100} // Ajusta este valor según la relación de aspecto de tus imágenes
            width={200} // Ajusta este valor según la relación de aspecto de tus imágenes
          />
        </animated.div>
      </div>
    </Link>
  );
}
