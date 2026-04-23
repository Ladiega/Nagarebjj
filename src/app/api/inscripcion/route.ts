import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nombre = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const telefono = String(formData.get("telefono") || "").trim();
    const file = formData.get("file") as File | null;

    const website = formData.get("website");

    if (website) {
      return NextResponse.json(
        { error: "Bot detectado" },

        { status: 400 },
      );
    }

    if (!nombre || !email) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    let fileUrl = null;

    if (file) {
      // validar tipo
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        return NextResponse.json(
          { error: "Tipo de archivo inválido" },
          { status: 400 },
        );
      }

      // validar tamaño
      if (file.size > 2 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Archivo muy grande (máx 2MB)" },
          { status: 400 },
        );
      }

      const ext = file.name.split(".").pop();
      const fileName = `${Date.now()}.${ext}`;

      // convertir a buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      const { error: uploadError } = await supabaseServer.storage
        .from("comprobantes")
        .upload(fileName, buffer, {
          contentType: file.type,
        });

      if (uploadError) {
        console.log("UPLOAD ERROR:", uploadError);
        return NextResponse.json(
          { error: uploadError.message },
          { status: 500 },
        );
      }

      // URL temporal (segura)
      const { data } = await supabaseServer.storage
        .from("comprobantes")
        .createSignedUrl(fileName, 60 * 60);

      fileUrl = data?.signedUrl;
    }

    const { error } = await supabaseServer.from("inscripciones").insert([
      {
        nombre,
        email,
        telefono,
        comprobante_url: fileUrl,
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: "Error guardando datos" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("SERVER ERROR:", err);
    return NextResponse.json({ error: "Error en servidor" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const token = request.headers.get("x-api-key");

    if (token !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { data, error } = await supabaseServer
      .from("inscripciones")
      .select("*")
      .order("fecha", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: "Error obteniendo datos" },
        { status: 500 },
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.log("GET ERROR:", err);
    return NextResponse.json({ error: "Error en servidor" }, { status: 500 });
  }
}
