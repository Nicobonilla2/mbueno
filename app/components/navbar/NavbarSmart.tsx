import React, { useState, useEffect } from "react";
import Image from "next/image";
import DropdownMenuSmart from "./DropdownMenuSmart";

type Link = {
  section: string;
  subsection?: string[];
  href: string;
};

type Props = {
  links: Link[];
};

const NavbarSmart: React.FC<Props> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      // Convertir a any para acceder a la propiedad path que es específica de eventos de navegador
      if (!(e.target as any).closest(".menu-container")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("click", closeMenu);
    }

    return () => window.removeEventListener("click", closeMenu);
  }, [isMenuOpen]); // Dependencias para que se ejecute cada vez que isMenuOpen cambie.

  return (
    <>
      <div className="relative flex flex-col items-center z-50 menu-container lg:hidden">
        <button onClick={toggleMenu} className="pb-2">
          <Image 
          className='blue-logo'
            alt="menu_bar_button"
            src="/images/app_bar.svg"
            width={30}
            height={30}
          />
        </button>
        {isMenuOpen && (
          <div
            className={`absolute top-7 z-40 w-[85vw] bg-white shadow-lg transition-opacity duration-700  ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            {links.map((link, index) => (
              <DropdownMenuSmart
                key={index}
                section={link.section}
                subsection={link.subsection || []}
                href={link.href}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarSmart;
