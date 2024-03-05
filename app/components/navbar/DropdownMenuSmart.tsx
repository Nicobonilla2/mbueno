import React, { useState } from "react";
import Link from "next/link";
import Arrow from "../Arrow";

type Props = {
  section: string;
  subsection?: string[];
  href: string;
};

const DropdownMenuSmart: React.FC<Props> = ({ section, subsection, href }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubsection = (event:any) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSubsection}
        className="relative flex justify-between items-center w-full text-gray-700 px-2 py-4 rounded text-xs uppercase font-medium hover:text-gray-400 transition duration-300 border-t border-gray-300"
        aria-expanded={isOpen}
      >
        <span>{section}</span>
        {subsection && (
          <span className="cursor-pointer">
            {isOpen ? <Arrow src='/images/up.svg'/> : <Arrow src='/images/down.svg'/>} {/* Cambia el icono dependiendo del estado */}
          </span>
        )}
      </button>
      {isOpen && subsection && (
        <div className="relative top-full w-full bg-white z-10">
          {subsection.map((subItem, index) => (
            <Link key={`${subItem}-${index}`} href={`${href}/${subItem}`} passHref>
              <div
                className="block px-4 py-3 text-xs text-gray-700 hover:bg-[#6f97d9] hover:text-white border-t border-gray-300"
              >
                {subItem}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuSmart;
