export default function Planes() {
  return (
    <section className="relative overflow-hidden text-black py-16 px-4 bg-white diagonal-section ">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-10">
          PLANES DE ENTRENAMIENTO NAGARE BJJ
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              titulo: "Plan Mensual Limitado (BJJ/Wrestling o Boxeo)",
              precio: "$220.000",
              descripcion: "Incluye 3 clases por semana.",
            },
            {
              titulo: "Plan Mensual Ilimitado (BJJ/Wrestling o Boxeo)",
              precio: "$270.000",
              descripcion: "Acceso sin restricción de días.",
            },
            {
              titulo: "Tiquetera 12 Clases (BJJ/Wrestling o Boxeo)",
              precio: "$250.000",
              descripcion: "Válida por 2 meses.",
            },
            {
              titulo: "Clase Individual (BJJ/Wrestling o Boxeo)",
              precio: "$40.000",
              descripcion: "Costo por clase.",
            },
            {
              titulo:
                "Plan Mensual Ilimitado (2 Modalidades: BJJ/Wrestling y Boxeo)",
              precio: "$380.000",
              descripcion:
                "Acceso sin restricción de días a ambas disciplinas.",
            },
            {
              titulo:
                "Plan Mensual Limitado (5 Clases por Semana, Dos Modalidades + Open Mat)",
              precio: "$350.000",
              descripcion:
                "Entrena 5 veces por semana combinando BJJ/Wrestling y Boxeo, con acceso al Open Mat.",
            },
          ].map((plan, i) => (
            <div
              key={plan.titulo}
              className="bg-white shadow p-6 rounded-lg border-2 border-black text-center transform transition duration-700 hover:scale-105 opacity-0 animate-fadeIn ml-2 mr-2"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <h4 className="text-lg md:text-xl font-bold mb-2">
                {plan.titulo}
              </h4>
              <p className="text-lg font-semibold mb-2 text-green-700">
                {plan.precio}
              </p>
              <p className="text-sm md:text-base text-black">
                {plan.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
