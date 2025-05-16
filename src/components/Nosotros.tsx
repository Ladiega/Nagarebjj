import Image from "next/image";
import tatami from "../../public/img/tatami.png";

export default function Nosotros() {
  return (
    <section>
      <div>
        <div className="flex justify-center align-middle">
          <h2 className="text-6xl font-extrabold text-red-700 absolute mt-10">
            NOSOTROS
          </h2>
        </div>
        <div>
          <Image src={tatami} alt="Tatami" />
        </div>
      </div>
    </section>
  );
}
