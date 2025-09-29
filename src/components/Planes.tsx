"use client";
import { useEffect, useRef, useState } from "react";
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
    precio: "$270,000",
    titulo: "Plan Mensual Ilimitado",
    categoria: "Ilimitado ",
    modalidad: "BJJ, Lucha o Boxeo",
    descripcion: "Acceso sin restricción de días.",
    image: "/img/clases/img2.png",
  },
  {
    id: 3,
    precio: "$250,000",
    titulo: "Tiquetera 12 Clases",
    modalidad: "BJJ, Lucha o Boxeo",
    descripcion: "Válida por 2 meses.",
    image: "/img/clases/img3.png",
  },
  {
    id: 4,
    precio: "$40,000",
    titulo: "Clase Individual",
    modalidad: "BJJ, Lucha o Boxeo",
    descripcion: "Costo por clase.",
    image: "/img/clases/img4.png",
  },
  {
    id: 5,
    precio: "$380,000",
    titulo: "Plan Mensual",
    categoria: "Ilimitado 2 modalidades ",
    modalidad: "BJJ,Lucha, o boxeo.",
    descripcion: "Acceso sin restricciones de días a 2 disciplinas",
    image: "/img/clases/img5.png",
  },
  {
    id: 6,
    precio: "$350,000",
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
    <div className="px-4">
      <div className="mt-3 mb-6 text-6xl text-center text-white uppercase font-climate">
        <h1>Planes y Paquetes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        {planes.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: (typeof planes)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={0}
      className="relative w-[350px] h-[350px] overflow-hidden rounded-2xl shadow-lg mx-auto cursor-pointer group"
    >
      <Image
        src={plan.image}
        alt={plan.titulo}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div
        className={`
          absolute inset-0 flex flex-col justify-center items-center px-4 text-center transition-all duration-700 ease-out
          
          /* móvil: aparece con scroll */
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}

          /* desktop: aparece con hover */
          md:opacity-0 md:translate-y-20
          md:group-hover:opacity-100 md:group-hover:translate-y-0
        `}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2  px-4 py-2 rounded-xl text-4xl font-climate text-white">
          {plan.precio}
        </div>

        <div className="mt-12 text-white">
          <h2 className="text-4xl font-bold">{plan.titulo}</h2>
          <p className="mt-2 text-sm">
            <span className="text-green-300 font-bold">{plan.categoria}</span>
            <span className="text-red-500 font-bold">{plan.categoria2}</span>
            <span className="font-bold">{plan.modalidad}</span> <br />
            <span className="text-gray-300">{plan.descripcion}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
