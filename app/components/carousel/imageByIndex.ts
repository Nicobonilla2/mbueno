const image1 = '/images/Calefaccion-ventilacion-y-aire-condicionado.avif';
const image2 = '/images/Gestion-de-proyectos.avif';
const image3 = '/images/Inspeccion-tecnica-de-obra.avif';
const image4 = '/images/Detalle.avif';
const image5 = '/images/ventilacion-aire-condicionado.avif';

export const images: string[] = [image1, image2, image3, image4, image5]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
