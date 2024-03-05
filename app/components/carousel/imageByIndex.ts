const image1 = '/images/Calefaccion-ventilacion-y-aire-condicionado.jpg';
const image2 = '/images/Gestion-de-proyectos.jpg';
const image3 = '/images/Inspeccion-tecnica-de-obra.jpeg';
const image4 = '/images/Detalle.jpeg';
const image5 = '/images/ventilacion-aire-condicionado.webp';

export const images: string[] = [image1, image2, image3, image4, image5]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
