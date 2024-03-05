import React from "react";
import Link from "next/link";

type Props = {
  section: string;
  subsection?: string[];
  href: string;
};

export default function DropdownMenuDesk({ section, subsection, href }: Props) {
  return (
    <div className="relative group">
      <button className="text-gray-700 px-2 rounded inline-flex items-center text-xs  hover:text-gray-400 transition duration-300">
        {section}
      </button>
      {subsection && (
        <div className="full-w absolute pt-2 right-0 w-48 bg-white shadow-xl z-10 hidden group-hover:block">
          {subsection.map((item, index) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-4 text-xs text-gray-700 hover:bg-[#6f97d9] hover:text-white 
            ${
              index === 0
                ? "border-t border-blue-500"
                : "border-t border-gray-500"
            }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
