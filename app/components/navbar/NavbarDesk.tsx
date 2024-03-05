import React from 'react';
import DropdownMenu from "./DropdownMenuDesk";

type Link = {
    section: string;
    subsection?: string[];
    href: string;
};

type Props = {
    links: Link[];
};

const NavbarDesk: React.FC<Props> = ({ links }) => {
    return (
        <div className="hidden lg:flex flex-col items-center">
            <div className="hiden lg:flex items-center space-x-2 pb-5">
                {links.map((link, index) => (
                    <DropdownMenu
                        key={index}
                        section={link.section} // Asegúrate de que DropdownMenu espera una prop 'title'
                        subsection={link.subsection || []} // Asegúrate de que DropdownMenu espera una prop 'items'
                        href={link.href} // Verifica si DropdownMenu utiliza esta prop
                    />
                ))}
            </div>
        </div>
    );
};

export default NavbarDesk;
