import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      {/* Logo en la parte superior */}
      <div className="m-2">
        <Link href="/">
          <div className="flex items-center justify-center m-2">
            <Image
              src={"/images/logo2.png"}
              alt="Marcelo Bueno A. Ingeniería en climatización"
              width={250}
              height={250}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
