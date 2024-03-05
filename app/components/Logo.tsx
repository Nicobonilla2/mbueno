import Link from "next/link";
import Image from "next/image";
import '../globals.css';
export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      {/* Logo en la parte superior */}
      <div className="m-2">
        <Link href="/">
          <div className="flex items-center justify-center m-2">
            <h1 className="font-logo text-blue-logo text-6xl"> MBA</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
