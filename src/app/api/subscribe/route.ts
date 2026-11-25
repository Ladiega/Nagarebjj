import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const website =
      typeof body?.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json(
        { message: "Suscripción no procesada." },
        { status: 400 },
      );
    }

    if (email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ message: "Correo inválido." }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!API_KEY || !LIST_ID || !DATACENTER) {
      console.error("Mailchimp no configurado");
      return NextResponse.json(
        { message: "Suscripción no disponible en este momento." },
        { status: 500 },
      );
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    if (!response.ok) {
      let title = "Error desconocido en Mailchimp";
      try {
        const errData = await response.json();
        console.error("Mailchimp error:", errData);
        title = errData?.title || title;
      } catch {
        console.error("Mailchimp error:", response.status);
      }

      const message = /exist/i.test(title)
        ? "Este correo ya está suscrito."
        : "No fue posible completar la suscripción.";

      return NextResponse.json({ message }, { status: 400 });
    }

    return NextResponse.json({ message: "¡Suscripción exitosa!" });
  } catch {
    return NextResponse.json({ message: "Solicitud inválida." }, { status: 400 });
  }
}
