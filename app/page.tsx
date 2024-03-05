'use client';
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <main>
     <Navbar/>
     <Image
     alt='MBA Ingeniería Home'
     src='/images/'
     height={}
     width={}
     />
    </main>
  );
}
