"use client";

import Image from "next/image";

const images = [
  "/img/horarios/img1.png",
  "/img/horarios/img2.png",
  "/img/horarios/img3.png",
  "/img/horarios/img4.png",
  "/img/horarios/img5.png",
  "/img/horarios/img6.jpeg",
];

export default function Horarios() {
  return (
    <section className="w-full bg-black py-10">
      <h2 className="text-white text-4xl text-center mb-6 font-climate">
        HORARIOS
      </h2>
      <div className="overflow-x-auto flex gap-4 px-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative min-w-[90%] md:min-w-[50%] lg:min-w-[33.33%] h-[70vh] snap-center rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
