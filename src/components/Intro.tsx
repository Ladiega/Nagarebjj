import Link from "next/link";

import Image from "next/image";
import wapp from "../../public/img/WhatsApp.svg";

export default function Intro() {
  return (
    <section className="p-5">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="font-black text-5xl uppercase">Nagare Bjj</h1>
        <h4 className="text-red-700 text-2xl font-bold">El arte de fluir</h4>
        <p className="text-sm mt-5 md:w-2xl">
          Te ofrecemos la mejor experiencia y un ambiente muy fraternal .
          Tenemos clases con los mejores profesores, capacitados para llevar tu
          proceso a otro nivel. Encontraras clases de JIU-JITSU Brasileño,
          Wrestling, Boxeo.
        </p>
      </div>

      <div>
        <div className="flex flex-col items-center md:items-start">
          <div>
            <p className="mt-7 font-light">¿Estas en Bogotá?</p>
          </div>
          <Link href="https://wa.me/573505473752" target="_blank">
            <div className="w-40 flex gap-2 p-2 mt-2 bg-red-700 hover:bg-red-800 rounded-sm text-white font-bold cursor-pointer">
              <div>
                <p className="">ESCRIBENOS</p>
              </div>
              <div>
                <Image src={wapp} alt="whatsapp" width={20} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
