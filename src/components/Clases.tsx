import Image from "next/image";

export default function CardGrid() {
  const cards = [
    {
      title: "BJJ TODOS LOS NIVELES.",
      content:
        "Entrenamiento colectivo de todos los niveles desde principiantes a avanzados.",
      image: "/img/robinson.jpg",
    },
    {
      title: "BJJ FUNDAMENTOS",
      content: "Entrenamiento enfocado en tecnicas y fundamentos primarios.",
      image: "/img/robinson.jpg",
    },
    {
      title: "BOX",
      content:
        "Entrenamiento espesifico en la diciplina del boxeo y el acondicionamiento fisico.",
      image: "/img/robinson.jpg",
    },
    {
      title: "WRESTLING",
      content:
        "Enfocado en la lucha entrenamiento enfocado en la lucha de pieoaa.",
      image: "/img/robinson.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative h-screen rounded-2xl overflow-hidden shadow-md group"
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
          <div className="relative z-10 p-6 text-white">
            <h2 className="text-xl text-red-700 font-bold mb-2">
              {card.title}
            </h2>
            <p className="text-sm">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
