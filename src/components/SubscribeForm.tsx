"use client";

import { useState } from "react";

import Image from "next/image";
import moneda from "../../public/img/blackCoin.png";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Enviando...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 rounded-md space-y-4 bg-red-700 p-5 flex flex-col md:flex-row items-center md:justify-between justify-center"
    >
      <div className="absolute md:relative">
        <div className="text-white">
          <h1 className="text-2xl md:text-4xl font-climate">NEWSLETTER:</h1>
          <p className="w-60 md:w-90  mt-5 mb-5 font-extralight">
            Mantente al día con todas nuestras novedades, promociones y eventos
            exclusivos.
          </p>
        </div>
        <div className="flex flex-col gap-5 ">
          <label htmlFor="" className="text-white">
            E-mail:
          </label>
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" p-2 rounded mt-[-20] bg-white w-60"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black font-bold px-4 py-2 w-40 rounded disabled:opacity-50 cursor-pointer hover:bg-gray-200"
          >
            {loading ? "Enviando..." : "Suscribirme"}
          </button>
          {message && (
            <p className="text-sm text-white font-light">{message}</p>
          )}
        </div>
      </div>
      <div>
        <Image src={moneda} alt="moneda" />
      </div>
    </form>
  );
}
