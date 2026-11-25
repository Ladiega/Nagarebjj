"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LeadModal() {
  const [file, setFile] = useState<File | null>(null);
  const [show, setShow] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("telefono", telefono);

    if (file) {
      formData.append("file", file);
    }

    try {
      const res = await fetch("/api/inscripcion", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "No fue posible enviar la inscripción.");
        return;
      }

      alert("Inscripción enviada");
      setShow(false);
    } catch {
      setError("Error de conexión. Intenta nuevamente.");
    } finally {
      setSending(false);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="seminario-titulo"
    >
      <div className="grid max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-neutral-950 text-white shadow-2xl ring-1 ring-white/10 md:grid-cols-2">
        <div className="relative h-64 bg-black md:h-auto md:min-h-full">
          <Image
            src="/img/seminarios/SeminarioDeGrados2026.jpeg"
            alt="Flyer del Seminario de Grados 2026: ceremonia de ascensos de fin de año"
            fill
            className="object-contain p-3"
            sizes="(max-width: 768px) 100vw, 384px"
            priority
          />
        </div>

        <div className="p-5 sm:p-7">
          <h2
            id="seminario-titulo"
            className="mb-3 text-xl leading-tight font-bold sm:text-2xl"
          >
            Ceremonia de ascensos de fin de año · Seminario de Grados 2026
          </h2>

          <div className="mb-5 space-y-1 rounded-xl bg-white/10 p-4 text-sm sm:text-base">
            <p className="font-semibold">Viernes 4 de diciembre · 6:00 p.m.</p>
            <p className="font-semibold">Aporte: $70.000 COP</p>
            <p className="font-semibold">Cra. 20B #73-52, piso 3</p>
            <p>
              Seminario técnico con Marcela Sánchez y Monkey Alejandro Sevilla
            </p>
            <p>Pagos llave: @rjp320 </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 sm:p-5"
          >
            <div>
              <label
                htmlFor="lead-nombre"
                className="mb-1 block text-sm font-semibold"
              >
                Nombre
              </label>
              <input
                id="lead-nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoComplete="name"
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-base text-black placeholder:text-neutral-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/40 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lead-email"
                className="mb-1 block text-sm font-semibold"
              >
                Correo
              </label>
              <input
                id="lead-email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-base text-black placeholder:text-neutral-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/40 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lead-telefono"
                className="mb-1 block text-sm font-semibold"
              >
                Teléfono (opcional)
              </label>
              <input
                id="lead-telefono"
                type="tel"
                placeholder="300 000 0000"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                autoComplete="tel"
                className="w-full rounded-lg border border-white/20 bg-white px-3 py-2.5 text-base text-black placeholder:text-neutral-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/40 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="lead-comprobante"
                className="mb-1 block text-sm font-semibold"
              >
                Comprobante de pago (JPG o PNG, máx. 2MB)
              </label>
              <input
                id="lead-comprobante"
                type="file"
                accept="image/jpeg, image/png"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];

                  if (!selectedFile) return;

                  if (
                    !["image/jpeg", "image/png"].includes(selectedFile.type)
                  ) {
                    setError("Solo se permiten imágenes JPG o PNG");
                    setFile(null);
                    return;
                  }

                  if (selectedFile.size > 2 * 1024 * 1024) {
                    setError("La imagen es muy pesada (máx 2MB)");
                    setFile(null);
                    return;
                  }

                  setError("");
                  setFile(selectedFile);
                }}
                className="w-full rounded-lg border border-white/20 bg-white p-2 text-sm text-black file:mr-3 file:rounded-md file:border-0 file:bg-red-700 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-red-600"
              />
            </div>

            <input
              type="text"
              name="website"
              value=""
              readOnly
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-lg bg-red-600 px-4 py-3 text-base font-bold text-white hover:bg-red-500 disabled:opacity-50 cursor-pointer"
            >
              {sending ? "Enviando..." : "Enviar inscripción"}
            </button>

            {error && (
              <p className="rounded-lg bg-red-950 p-3 text-sm font-semibold text-red-100">
                {error}
              </p>
            )}
          </form>

          <button
            onClick={() => setShow(false)}
            className="mt-4 w-full rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
