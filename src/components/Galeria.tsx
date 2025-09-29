import Image from "next/image";

const imagenes = [
  "/img/galeria/galeria1.jpeg",
  "/img/galeria/galeria2.jpeg",
  "/img/galeria/galeria3.jpeg",
  "/img/galeria/galeria4.jpeg",
  "/img/galeria/galeria5.jpeg",
  "/img/galeria/galeria6.jpeg",
  "/img/galeria/galeria7.jpeg",
  "/img/galeria/galeria8.jpeg",
  "/img/galeria/galeria9.jpeg",
  "/img/galeria/galeria10.jpeg",
  "/img/galeria/galeria11.jpeg",
  "/img/galeria/galeria12.jpeg",
];

export default function Galeria() {
  return (
    <section className="bg-black py-16 px-4 text-white opacity-70">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl  text-center uppercase mb-12 font-climate">
          Galería
        </h2>

        <div className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6">
          {imagenes.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square min-w-[80vw] max-w-[300px] snap-center md:min-w-0 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Imagen galería ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
