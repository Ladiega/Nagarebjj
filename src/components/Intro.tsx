// import Link from "next/link";

// import Image from "next/image";
// import wapp from "../../public/img/WhatsApp.svg";

// export default function Intro() {
//   return (
//     <section className="p-5 text-white">
//       <div className="flex flex-col items-center">
//         <h1 className="font-black text-5xl uppercase">EL ARTE DE FLUIR</h1>

//         <p className="text-sm mt-5 ">
//           Jiu-Jitsu, boxeo, wrestling en el corazón de Bogotá, con técnica,
//           filosofía y comunidad.
//         </p>
//       </div>

//       <div>
//         <div className="flex flex-col items-center ">
//           <div>
//             <p className="mt-7 font-light">¿Estas en Bogotá?</p>
//           </div>
//           <Link href="https://wa.me/573505473752" target="_blank">
//             <div className=" flex gap-2 p-2 mt-2 border-2 border-white rounded-sm text-white font-bold cursor-pointer">
//               <div>
//                 <p className="">AGENDA TU CLASE DE PRUEBA</p>
//               </div>
//               <div>
//                 <Image src={wapp} alt="whatsapp" width={20} />
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import wapp from "../../public/img/WhatsApp.svg";
import bgImage from "../../public/img/nagarenogicrew.jpeg"; // reemplaza con tu imagen principal
import overlay1 from "../../public/img/robinson.jpg"; // reemplaza con tus imágenes veladura
import overlay2 from "../../public/img/robinson.jpg";
import overlay3 from "../../public/img/robinson.jpg";

export default function Intro() {
  return (
    <section className="relative w-full overflow-visible bg-black">
      {/* Imagen de fondo */}
      <div className="relative w-full min-h-[80vh] md:min-h-screen">
        <Image
          src={bgImage}
          alt="Fondo hero"
          fill
          priority
          className="object-cover object-center filter grayscale brightness-75"
          sizes="100vw"
        />

        {/* Contenido centrado */}
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

      {/* Fondo negro + carrusel */}
      {/* <div className="relative w-full bg-black pt-10 pb-20 flex justify-center">
        <div className="w-full max-w-6xl px-4 -translate-y-1/3">
          <div className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory justify-center md:grid md:grid-cols-3 md:gap-6">
            {[overlay1, overlay2, overlay3].map((overlay, i) => (
              <div
                key={i}
                className="relative aspect-[2/3] min-w-[70vw] max-w-[250px] md:min-w-0 snap-center animate-fadeInUp"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationFillMode: "forwards",
                }}
              >
                <Image
                  src={overlay}
                  alt={`Imagen ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
