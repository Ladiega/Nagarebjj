"use client";

import { useState } from "react";
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
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative w-screen h-screen bg-black ">
      <div className="relative  w-screen h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              fill
              className=" object-contain "
              sizes=""
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute ml-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black p-2 rounded-full hover:bg-red-700 cursor-pointer font-black"
      >
        -
      </button>
      <button
        onClick={nextSlide}
        className="absolute w-10 h-10 right-10 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-red-700 cursor-pointer font-black"
      >
        +
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-red-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
