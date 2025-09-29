import Image from "next/image";

import ytSimulado from "../../public/img/tatami.png";

export default function SobreNosotros() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="">
          <h2 className="text-3xl md:text-5xl  font-climate uppercase mb-6">
            En japonés, Nagare significa fluir. Y fluir es también una forma de
            vivir.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-justify">
            Nagare es una comunidad de práctica que enseña jiu-jitsu brasileño,
            wrestling y boxeo desde una perspectiva técnica y filosófica. No
            somos un gimnasio, somos una escuela. Formamos personas.
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={ytSimulado}
            alt="Simulación de video de YouTube"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
