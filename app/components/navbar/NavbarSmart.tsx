import React, { useState } from "react";
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
  return (
    <>
      <div className="flex lg:hidden flex-col items-center z-50 relative">
        <button onClick={toggleMenu} className="pb-2">
          <Image
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
