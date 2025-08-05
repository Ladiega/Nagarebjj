import Link from "next/link";
import Image from "next/image";
import wapp from "../../public/img/WhatsApp.svg";
import bgImage from "../../public/img/nagarenogicrew.jpeg";

export default function Intro() {
  return (
    <section className="relative w-full overflow-visible bg-black">
      <div className="relative w-full min-h-[80vh] md:min-h-screen">
        <Image
          src={bgImage}
          alt="Fondo hero"
          fill
          priority
          className="object-cover object-center filter grayscale brightness-75"
          sizes="100vw"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-black text-4xl md:text-6xl uppercase drop-shadow-lg">
            EL ARTE DE FLUIR
          </h1>

          <p className="text-base md:text-lg mt-5 max-w-xl drop-shadow-lg">
            Jiu-Jitsu, boxeo, wrestling en el corazón de Bogotá, con técnica,
            filosofía y comunidad.
          </p>

          <div className="flex flex-col items-center mt-8">
            <p className="font-light mb-2">¿Estas en Bogotá?</p>
            <Link href="https://wa.me/573505473752" target="_blank">
              <div className="flex items-center gap-2 p-3 border-2 border-white rounded-sm text-white font-bold cursor-pointer hover:bg-white hover:text-black transition">
                <p>AGENDA TU CLASE DE PRUEBA</p>
                <Image src={wapp} alt="whatsapp" width={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
