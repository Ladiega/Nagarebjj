import Image from "next/image";

export default function CardGrid() {
  const cards = [
    {
      title: "ROBINSON JIMÉNEZ PERTUS",
      content: "Profesor y Head Coach de Jiu-Jitsu Brasileño. Segundo Dan.",
      image: "/img/robinson.jpg",
    },
    {
      title: "DOBLEA LEAL",
      content:
        "Profesor de Boxeo, cinturón negro de BJJ y peleador profesional de MMA.",
      image: "/img/doblea.jpg",
    },
    {
      title: "JHON TACHA",
      content: "Profesor de Wrestling, luchador profesional y peleador de MMA.",
      image: "/img/tacha.jpg",
    },
  ];

  return (
    <section className="bg-black py-10">
      <h1 className="text-4xl font-extrabold md:text-6xl text-white text-center mb-10">
        INSTRUCTORES
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative min-h-[600px] rounded-2xl overflow-hidden shadow-md group"
          >
            <Image
              sizes="(max-width: 768px) 100vw, 33vw"
              src={card.image}
              alt={card.title}
              fill
              className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-300"
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
    </section>
  );
}
