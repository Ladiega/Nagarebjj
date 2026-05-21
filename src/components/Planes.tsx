"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const planes = [
  {
    id: 1,
    precio: "$240,000",
    titulo: "1 Modalidad Limitado",

    categoria2: "1 Modalidad",
    modalidad: "Jiu-Jitsu o Striking (Boxeo + MMA)",
    descripcion: "3 clases por semana.",
    image: "/img/clases/img1.png",
  },
  {
    id: 2,
    precio: "$285,000",
    titulo: "1 Modalidad Ilimitado",
    categoria: "1 Modalidad",
    modalidad: "Jiu-Jitsu o Striking (Boxeo + MMA)",
    descripcion: "Acceso ilimitado. En Jiu-Jitsu incluye Wrestling.",
    image: "/img/clases/img2.png",
  },
  {
    id: 3,
    precio: "$380,000",
    titulo: "Full Training Limitado",
    categoria: "Full Training",
    modalidad: "Jiu-Jitsu + Striking (Boxeo + MMA)",
    descripcion: "6 clases por semana e incluye Open Mat.",
    image: "/img/clases/img3.png",
  },
  {
    id: 4,
    precio: "$450,000",
    titulo: "Full Training Ilimitado",
    categoria: "Full Training",
    modalidad: "Jiu-Jitsu, Wrestling, Boxeo y MMA",
    descripcion: "Acceso ilimitado a todas las disciplinas.",
    image: "/img/clases/img4.png",
  },
  {
    id: 5,
    precio: "$260,000",
    titulo: "Tiquetera 12 Clases",
    categoria: "Acceso Flexible",
    modalidad: "Jiu-Jitsu o Striking (Boxeo + MMA)",
    descripcion: "12 clases con vigencia de 2 meses.",
    image: "/img/clases/img5.png",
  },
  {
    id: 6,
    precio: "$420,000",
    titulo: "Tiquetera 20 Clases",
    categoria: "Acceso Flexible",
    modalidad: "Jiu-Jitsu o Striking (Boxeo + MMA)",
    descripcion: "20 clases con vigencia de 3 meses.",
    image: "/img/clases/img6.png",
  },

  {
    id: 7,
    precio: "Consultar",
    titulo: "Plan Pareja",
    categoria: "Planes Especiales",
    modalidad: "1 o 2 modalidades",
    descripcion: "Opciones especiales para entrenar en pareja.",
    image: "/img/clases/img1.png",
  },
  {
    id: 8,
    precio: "Consultar",
    titulo: "Plan Familiar",
    categoria: "Planes Especiales",
    modalidad: "Grupos familiares",
    descripcion: "Planes grupales para familias y equipos.",
    image: "/img/clases/img2.png",
  },
  {
    id: 9,
    precio: "Consultar",
    titulo: "Convenios Corporativos",
    categoria: "Planes Especiales",
    modalidad: "Empresas y comunidades",
    descripcion: "Programas personalizados para grupos y empresas.",
    image: "/img/clases/img3.png",
  },
  {
    id: 10,
    precio: "Desde $160,000",
    titulo: "Clases Personalizadas",
    categoria: "VIP",
    modalidad: "Entrenamiento personalizado",
    descripcion:
      "Sesiones privadas enfocadas en técnica, rendimiento y competencia.",
    image: "/img/clases/img4.png",
  },
];

const categories = [
  {
    modalidad1: "Modalidad 1",
    modalidad2: "Full Tranning / 2 Modalidades",
    modalidad3: "Tiqueteras",
    modalidad4: "Clases Individuales",
    modalidad5: "Planes Pareja",
    modalidad6: "Planes Grupales",
    modalidad7: "Planes y Paquetes",
  },
];

export default function Planes() {
  return (
    <div className="px-4">
      <div className="mt-3 mb-6 text-4xl text-center text-white uppercase font-climate">
        <h1>{categories[0].modalidad7}</h1>
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
      { threshold: 0.3 },
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
      className="relative w-[350px]  h-[350px] overflow-hidden rounded-2xl shadow-lg mx-auto cursor-pointer group"
    >
      <Image
        src={plan.image}
        alt={plan.titulo}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30" />

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
