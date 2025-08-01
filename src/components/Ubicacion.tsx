import Image from "next/image";
import ubicacion from "../../public/img/ubicacion.png";
import Link from "next/link";

export default function Ubicacion() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="absolute">
          <Link
            href="https://www.google.com/maps/dir/4.6591216,-74.0636358/Nagare+Brazilian+Jiujitsu+-+Defensa+Personal/@4.6625139,-74.0661493,16.76z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x8e3f9b78cff70663:0x1379954f6271a50c!2m2!1d-74.0655724!2d4.6642058!3e0?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <h1 className=" mb-5 text-red-700 hover:text-red-800 text-center text-5xl font-black">
              UBICACIÓN
            </h1>
          </Link>
        </div>
        <div className="hover:bg-red-500/10">
          <Link
            href="https://www.google.com/maps/place/Nagare+Brazilian+Jiujitsu+-+Defensa+Personal/@4.6623744,-74.0628981,17z/data=!4m6!3m5!1s0x8e3f9b78cff70663:0x1379954f6271a50c!8m2!3d4.6623744!4d-74.0628981!16s%2Fg%2F11smvm52gs?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <Image src={ubicacion} alt="Ubicacion" className="" />
          </Link>
        </div>
      </div>
      <div className="ml-5 mb-20 mt-5 ">
        <h4 className=" font-bold">Bogotá D.C</h4>
        <p>Cra. 20b #73-52, Bogotá, Barrio San Felipe. </p>
        <p>Piso 3.</p>
      </div>
    </section>
  );
}
