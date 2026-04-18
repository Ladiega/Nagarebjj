"use client";

import { useState, useEffect } from "react";

export default function LeadModal() {
  const [file, setFile] = useState<File | null>(null);
  const [show, setShow] = useState(false);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("telefono", telefono);

    if (file) {
      formData.append("file", file);
    }

    const res = await fetch("/api/inscripcion", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Error");
      return;
    }

    alert("Inscripción enviada");
    setShow(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="w-full max-w-md  text-white bg-black/70 p-6 rounded-xl"
        style={{
          backgroundImage: "url('/img/seminarios/NagareSeminar2026.jpeg')",

          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 bg-white/30"
        >
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border p-2 rounded text-white font-bold bg-red-500/60"
            required
          />

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded text-black font-bold bg-white/50"
            required
          />

          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border p-2 rounded text-white font-black"
          />

          <input
            className="border p-2 rounded text-white bg-black/50"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];

              if (!selectedFile) return;

              if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
                alert("Solo se permiten imágenes JPG o PNG");

                return;
              }

              if (selectedFile.size > 2 * 1024 * 1024) {
                alert("La imagen es muy pesada (máx 2MB)");

                return;
              }

              setFile(selectedFile);
            }}
          />
          <input type="text" name="website" style={{ display: "none" }} />

          <button
            type="submit"
            className="bg-red-700/50 hover:bg-red-600/70 text-white p-2 rounded border-white border-2"
          >
            Enviar
          </button>
        </form>

        <div className="bg-black/40 mt-2">
          <h2 className="text-xl font-bold mb-2 ">Seminario Nagare BJJ</h2>

          <p className="text-sm mb-4">
            24 de abril · Ascensos + Seminario Valor: $70.000 Cupos limitados
          </p>
          <p className="font-black">Consignaciones a la llave Nu: @RJP320</p>
        </div>

        <button
          onClick={() => setShow(false)}
          className="mt-4 text-xs text-red-700 font-bold"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
