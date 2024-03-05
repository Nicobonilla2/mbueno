import Logo from "../Logo";
import NavbarDesk from "./NavbarDesk";
import NavbarSmart from "./NavbarSmart";

type Links = {
  section: string;
  subsection?: string[];
  href: string;
};

const links: Links[] = [
  {
    section: "Nosotros",
    href: "/nosotros",
  },
  {
    section: "CLimatización HVAC",
    subsection: ["Sector Salud", "Sector Habitacional", "Sector Industrial"],
    href: "/climatizacion_hvac",
  },
  {
    section: "Gerstión de Proyectos",
    subsection: [
      "Gerenciamiento",
      "Asesoramiento",
      "Equipamiento",
      "Ingeniería de Detalles",
    ],
    href: "/gestion_de_proyectos",
  },
  {
    section: "Inspección Técnica",
    subsection: [
      "Revisión de Ingeniería",
      "Inspección de la Ejecución",
      "Comisionamiento",
      "Recepción de Obras",
    ],
    href: "/inspeccion_tecnica_de_obra",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Logo />
        {/* Navegación para pantallas grandes, visible en lg y oculto en md y sm */}
          <NavbarDesk links={links} />
          <NavbarSmart links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
