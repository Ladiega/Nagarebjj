"use client";

import { useState } from "react";

import Image from "next/image";
import moneda from "../../public/img/blackCoin.png";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Enviando...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) setEmail("");
    } catch {
      setMessage("Error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="m-5 rounded-xl bg-red-700 p-4 shadow-lg sm:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-lg bg-black md:h-72 md:w-48">
          <Image
            src="/img/seminarios/SeminarioDeGrados2026.jpeg"
            alt="Flyer del Seminario de Grados 2026"
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 text-white">
          <h1 className="text-2xl font-climate sm:text-3xl lg:text-4xl">
            PRÓXIMO SEMINARIO
          </h1>

          <div className="space-y-1 rounded-lg bg-black/25 p-4 text-sm font-semibold sm:text-base">
            <p>
              Ceremonia de ascensos de fin de año · Seminario de Grados 2026
            </p>
            <p>Viernes 4 de diciembre · 6:00 p.m. · Aporte: $70.000 COP</p>
            <p>Cra. 20B #73-52, piso 3</p>
            <p>Seminario técnico con Marcela Sánchez y Monkey Alejandro Sevilla</p>
          </div>

          <label htmlFor="newsletter-email" className="mt-1 text-sm font-semibold">
            Recibe novedades e información de inscripción. E-mail:
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="w-full max-w-sm rounded-lg p-3 text-base text-black placeholder:text-neutral-500 md:w-72"
          />

          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full max-w-sm rounded-lg bg-white px-4 py-3 text-base font-bold text-black cursor-pointer hover:bg-gray-200 disabled:opacity-50 md:w-72"
          >
            {loading ? "Enviando..." : "Suscribirme"}
          </button>

          {message && (
            <p
              role="status"
              className="inline-block rounded-lg bg-black/25 px-3 py-2 text-sm font-semibold text-white"
            >
              {message}
            </p>
          )}
        </form>

        <div className="self-center">
          <Image src={moneda} alt="moneda" />
        </div>
      </div>
    </section>
  );
}
