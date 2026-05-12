"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const planes = [
  {
    id: 1,
    precio: "$240,000",
    titulo: "Plan Mensual Limitado",
    categoria: "Limitado",
    modalidad: "BJJ o Striking",
    descripcion: "3 clases por semana.",
    image: "/img/clases/img1.png",
  },
  {
    id: 2,
    precio: "$285,000",
    titulo: "Plan Mensual Ilimitado",
    categoria: "Ilimitado",
    modalidad: "BJJ, Wrestling o Striking",
    descripcion: "Acceso ilimitado a todas las clases de una modalidad.",
    image: "/img/clases/img2.png",
  },
  {
    id: 3,
    precio: "$726,750",
    titulo: "Plan Trimestral Ilimitado",
    categoria: "Prepago",
    modalidad: "1 modalidad",
    descripcion: "3 meses ilimitados con 15% de descuento.",
    image: "/img/clases/img3.png",
  },
  {
    id: 4,
    precio: "$1,368,000",
    titulo: "Plan Semestral Ilimitado",
    categoria: "Prepago",
    modalidad: "1 modalidad",
    descripcion: "6 meses ilimitados con 20% de descuento.",
    image: "/img/clases/img4.png",
  },
  {
    id: 5,
    precio: "$2,804,000",
    titulo: "Plan Anual Ilimitado",
    categoria: "Prepago",
    modalidad: "1 modalidad",
    descripcion: "12 meses ilimitados con 18% de descuento.",
    image: "/img/clases/img5.png",
  },
  {
    id: 6,
    precio: "$380,000",
    titulo: "Plan Full Training Limitado",
    categoria: "Limitado",
    modalidad: "BJJ + Striking",
    descripcion: "6 clases por semana + Open Mat.",
    image: "/img/clases/img6.png",
  },

  {
    id: 7,
    precio: "$450,000",
    titulo: "Plan Full Training Ilimitado",
    categoria: "Ilimitado",
    modalidad: "BJJ, Wrestling, Boxeo y MMA",
    descripcion: "Acceso ilimitado a todas las modalidades.",
    image: "/img/clases/img1.png",
  },
  {
    id: 8,
    precio: "$1,215,000",
    titulo: "Plan Trimestral Full Training",
    categoria: "Prepago",
    modalidad: "2 modalidades",
    descripcion: "3 meses ilimitados con 10% de descuento.",
    image: "/img/clases/img2.png",
  },
  {
    id: 9,
    precio: "$2,295,000",
    titulo: "Plan Semestral Full Training",
    categoria: "Prepago",
    modalidad: "2 modalidades",
    descripcion: "6 meses ilimitados con 15% de descuento.",
    image: "/img/clases/img3.png",
  },
  {
    id: 10,
    precio: "$4,320,000",
    titulo: "Plan Anual Full Training",
    categoria: "Prepago",
    modalidad: "2 modalidades",
    descripcion: "12 meses ilimitados con 20% de descuento.",
    image: "/img/clases/img4.png",
  },
  {
    id: 11,
    precio: "$260,000",
    titulo: "Tiquetera 12 Clases",
    categoria: "Tiquetera",
    modalidad: "BJJ o Striking",
    descripcion: "12 clases con vigencia de 2 meses.",
    image: "/img/clases/img5.png",
  },
  {
    id: 12,
    precio: "$420,000",
    titulo: "Tiquetera 20 Clases",
    categoria: "Tiquetera",
    modalidad: "BJJ o Striking",
    descripcion: "20 clases con vigencia de 3 meses.",
    image: "/img/clases/img6.png",
  },
  // clases individuales
  {
    id: 13,
    precio: "$45,000",
    titulo: "Clase del Día",
    categoria: "Clase Individual",
    modalidad: "Clase Regular",
    descripcion: "Acceso a una clase grupal.",
    image: "/img/clases/img1.png",
  },
  {
    id: 14,
    precio: "$160,000",
    titulo: "Clase Personalizada VIP",
    categoria: "Privada",
    modalidad: "Personal Training",
    descripcion: "Clase personalizada de 1 a 1.5 horas.",
    image: "/img/clases/img2.png",
  },
  {
    id: 15,
    precio: "$720,000",
    titulo: "Pack 5 Privadas",
    categoria: "Privada",
    modalidad: "Personal Training",
    descripcion: "5 clases privadas con 10% de descuento.",
    image: "/img/clases/img3.png",
  },
  {
    id: 16,
    precio: "$1,280,000",
    titulo: "Pack 10 Privadas",
    categoria: "Privada",
    modalidad: "Personal Training",
    descripcion: "10 clases privadas con 20% de descuento.",
    image: "/img/clases/img4.png",
  },
  {
    id: 17,
    precio: "$2,240,000",
    titulo: "Pack 20 Privadas",
    categoria: "Privada",
    modalidad: "Personal Training",
    descripcion: "20 clases privadas con 30% de descuento.",
    image: "/img/clases/img5.png",
  },
  {
    id: 18,
    precio: "$500,000",
    precioRegular: "$570,000",
    titulo: "Plan Pareja Mensual",
    categoria: "Pareja",
    modalidad: "1 modalidad",
    descripcion: "Plan mensual para 2 personas.",
    image: "/img/clases/img6.png",
  },

  {
    id: 19,
    precio: "$2,520,000",
    precioRegular: "$3,420,000",
    titulo: "Plan Pareja Semestral",
    categoria: "Pareja",
    modalidad: "1 modalidad",
    descripcion: "6 meses para 2 personas.",
    image: "/img/clases/img1.png",
  },
  {
    id: 20,
    precio: "$700,000",
    precioRegular: "$900,000",
    titulo: "Plan Pareja Full Training",
    categoria: "Pareja",
    modalidad: "2 modalidades",
    descripcion: "Acceso ilimitado para 2 personas.",
    image: "/img/clases/img2.png",
  },
  {
    id: 21,
    precio: "$660,000",
    precioPorPersona: "$220,000",
    titulo: "Grupo 3 Personas Limitado",
    categoria: "Grupo",
    modalidad: "1 modalidad",
    descripcion: "Plan limitado para 3 personas.",
    image: "/img/clases/img3.png",
  },
  {
    id: 22,
    precio: "$840,000",
    precioPorPersona: "$210,000",
    titulo: "Grupo 4 Personas Limitado",
    categoria: "Grupo",
    modalidad: "1 modalidad",
    descripcion: "Plan limitado para 4 personas.",
    image: "/img/clases/img4.png",
  },
  {
    id: 23,
    precio: "$780,000",
    precioPorPersona: "$260,000",
    titulo: "Grupo 3 Personas Ilimitado",
    categoria: "Grupo",
    modalidad: "1 modalidad",
    descripcion: "Acceso ilimitado para 3 personas.",
    image: "/img/clases/img5.png",
  },
  {
    id: 24,
    precio: "$1,000,000",
    precioPorPersona: "$250,000",
    titulo: "Grupo 4 Personas Ilimitado",
    categoria: "Grupo",
    modalidad: "1 modalidad",
    descripcion: "Acceso ilimitado para 4 personas.",
    image: "/img/clases/img6.png",
  },

  {
    id: 25,
    precio: "$1,050,000",
    precioPorPersona: "$350,000",
    titulo: "Grupo 3 Personas Full Training",
    categoria: "Grupo",
    modalidad: "2 modalidades",
    descripcion: "Plan limitado para 3 personas.",
    image: "/img/clases/img3.png",
  },
  {
    id: 26,
    precio: "$1,320,000",
    precioPorPersona: "$330,000",
    titulo: "Grupo 4 Personas Full Training",

    categoria2: "Limitado",
    modalidad: "2 modalidades",
    descripcion: "Plan limitado para 4 personas.",
    image: "/img/clases/img4.png",
  },
  {
    id: 27,
    precio: "$1,230,000",
    precioPorPersona: "$410,000",
    titulo: "Grupo 3 Personas Full Training Ilimitado",
    categoria: "Grupo",
    modalidad: "2 modalidades",
    descripcion: "Acceso ilimitado para 3 personas.",
    image: "/img/clases/img5.png",
  },
  {
    id: 28,
    precio: "$1,560,000",
    precioPorPersona: "$390,000",
    titulo: "Grupo 4 Personas Full Training Ilimitado",
    categoria: "Grupo",
    modalidad: "2 modalidades",
    descripcion: "Acceso ilimitado para 4 personas.",
    image: "/img/clases/img6.png",
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
