"use client";

import Image from "next/image";

const planes = [
  {
    id: 1,
    precio: "$220,000",
    titulo: "Plan Mensual ",
    categoria: "",
    categoria2: "Limitado ",
    modalidad: "BJJ,Lucha o boxeo",
    descripcion: "Incluye 3 clases por semana.",
    image: "/img/clases/img1.png",
  },
  {
    id: 2,
    precio: "$270.000",
    titulo: "Plan Mensual Ilimitado",
    categoria: "ilimitado ",
    modalidad: "BJJ, Lucha o Boxeo",
    descripcion: "Acceso sin restricción de días.",
    image: "/img/clases/img2.png",
  },
  {
    id: 3,
    precio: "$250.000",
    titulo: "Tiquetera 12 Clases",
    modalidad: "BJJ, Lucha o Boxeo",
    descripcion: "Válida por 2 meses.",
    image: "/img/clases/img3.png",
  },
  {
    id: 4,
    precio: "$40.000",
    titulo: "Clase Individual",
    modalidad: "BJJ, Lucha o Boxeo",
    descripcion: "Costo por clase.",
    image: "/img/clases/img4.png",
  },
  {
    id: 5,
    precio: "$380.000",
    titulo: "Plan Mensual",
    categoria: "ilimitado 2 modalidades ",
    modalidad: "BJJ,Lucha, o boxeo.",
    descripcion: "Acceso sin restricciones de días a 2 disciplinas",
    image: "/img/clases/img5.png",
  },
  {
    id: 6,
    precio: "$350.000",
    titulo: "Plan Mensual ",
    categoria2: "Limitado 2 modalidades ",
    modalidad: "BJJ, Lucha o Boxeo + Open mat",
    descripcion:
      "Entrena 5 veces por semana combinando las 3 disciplinas con acceso al open mat",
    image: "/img/clases/img6.png",
  },
];

export default function Planes() {
  return (
    <div>
      <div className="mt-3 mb-6 text-6xl font-black text-center text-white uppercase">
        <h1>Planes y Paquetes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-12">
        {planes.map((plan) => (
          <div
            key={plan.id}
            tabIndex={0}
            className="relative w-[350px] h-[350px] overflow-hidden rounded-2xl shadow-lg group mx-auto cursor-pointer focus:outline-none"
          >
            <Image
              src={plan.image}
              alt={plan.titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105 group-active:scale-105"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div
              className="absolute inset-x-0 bottom-[-100%] flex flex-col items-center justify-center text-white px-4 transition-all duration-500 ease-out 
              group-hover:bottom-1/2 group-hover:translate-y-1/2 
              group-focus:bottom-1/2 group-focus:translate-y-1/2 
              group-active:bottom-1/2 group-active:translate-y-1/2"
            >
              <h2 className="text-4xl font-extrabold mt-10">{plan.precio}</h2>
              <p className="mt-3 text-md">
                {plan.titulo}
                <span className="text-green-300 font-bold">
                  {plan.categoria}
                </span>
                <span className="text-red-500 font-bold">
                  {plan.categoria2}
                </span>
                <span className="font-bold">{plan.modalidad}</span> <br />
                <span className="text-sm text-gray-300">
                  {plan.descripcion}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
