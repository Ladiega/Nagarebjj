import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

const EVENTO = "Ceremonia de Ascensos - Seminario de Grados 2026";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFONO_REGEX = /^[0-9+()\s-]{7,20}$/;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nombre = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const telefono = String(formData.get("telefono") || "").trim();
    const file = formData.get("file") as File | null;
    const evento = EVENTO;

    const website = String(formData.get("website") || "").trim();

    if (website) {
      return NextResponse.json(
        { error: "Bot detectado" },
        { status: 400 },
      );
    }

    if (
      !nombre ||
      nombre.length > 100 ||
      email.length > 254 ||
      !EMAIL_REGEX.test(email)
    ) {
      return NextResponse.json(
        { error: "Datos incompletos o inválidos" },
        { status: 400 },
      );
    }

    if (telefono && !TELEFONO_REGEX.test(telefono)) {
      return NextResponse.json(
        { error: "Teléfono inválido" },
        { status: 400 },
      );
    }

    const { count, error: countError } = await supabaseServer
      .from("inscripciones")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("evento", evento);

    if (countError) {
      return NextResponse.json(
        { error: "No fue posible verificar los cupos" },
        { status: 500 },
      );
    }

    if ((count ?? 0) >= 50) {
      return NextResponse.json(
        { error: "Lo sentimos, este seminario ya completó sus 50 cupos." },
        { status: 400 },
      );
    }

    const { data: existente, error: existeError } = await supabaseServer
      .from("inscripciones")
      .select("id")
      .eq("email", email)
      .eq("evento", evento)
      .maybeSingle();

    if (existeError) {
      return NextResponse.json(
        { error: "No fue posible verificar la inscripción." },
        { status: 500 },
      );
    }

    if (existente) {
      return NextResponse.json(
        {
          error: "Este correo ya está inscrito para este seminario.",
        },
        { status: 400 },
      );
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

      const ext = file.type === "image/png" ? "png" : "jpg";
      const fileName = `${Date.now()}-${crypto.randomUUID()}.${ext}`;

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
        evento,
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
    const secret = process.env.API_SECRET_KEY;

    const provided = Buffer.from(token ?? "");
    const expected = Buffer.from(secret ?? "");

    if (
      !secret ||
      provided.length !== expected.length ||
      !timingSafeEqual(provided, expected)
    ) {
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
