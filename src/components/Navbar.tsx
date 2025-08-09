"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import nagarenav from "../../public/img/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header>
      <nav className="p-5 flex justify-between shadow items-center">
        <div>
          <Link href="/">
            <Image src={nagarenav} alt="Nagare logo navbar" width={120} />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex  gap-3  font-light text-xs ">
            <li className="text-white">
              <Link href="/nosotros">NOSOTROS</Link>
            </li>
            <li className="text-white">
              <Link href="/clases">CLASES</Link>
            </li>
            <li className="text-white">
              <Link href="/horarios">HORARIOS</Link>
            </li>

            <li className="text-white">
              <Link href="/ubicacion">UBICACIÓN</Link>
            </li>
            <li>
              <Link href="/" className=" text-red-700">
                NAGARE BJJ
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="block md:hidden z-50 cursor-pointer text-white "
            onClick={toggleMenu}
            aria-label="Toogle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <nav className="md:hidden flex flex-col  bg-white px-6  py-4 space-y-4 uppercase font-semibold shadow-lg text-black">
          <ul className="">
            <li>
              <Link href="/nosotros" onClick={toggleMenu}>
                NOSOTROS
              </Link>
            </li>
            <li>
              <Link href="/clases" onClick={toggleMenu}>
                CLASES
              </Link>
            </li>
            <li>
              <Link href="/horarios" onClick={toggleMenu}>
                HORARIOS
              </Link>
            </li>
            <li>
              <Link href="/ubicacion" onClick={toggleMenu}>
                UBICACIÓN
              </Link>
            </li>
            <li>
              <Link href="/" className=" text-red-700" onClick={toggleMenu}>
                NAGARE BJJ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
