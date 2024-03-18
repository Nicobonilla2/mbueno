import React from 'react';
import Image from 'next/image';

type Section = {
  icon: string; // URL del icono
  title: string;
  description: string;
}

type IconMercadosProps = {
  sections: Section[];
}

const IconSection: React.FC<IconMercadosProps> = ({ sections }) => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full h-full">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          {/* Suponiendo que los iconos son imágenes. Ajusta según sea necesario. */}
          <Image src={section.icon} width={200} height={200} alt="Icon" className="w-10 h-10 mb-2" />
          <h3 className="text-white text-lg">{section.title}</h3>
          <p className="text-white text-sm">{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IconSection;
