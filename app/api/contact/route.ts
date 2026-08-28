import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/contact-links";

type ContactPayload = {
  nombre?: string;
  apellido?: string;
  correo?: string;
  prefijo?: string;
  telefono?: string;
  servicio?: string;
  mensaje?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot anti-spam
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const nombre = String(body.nombre || "").trim();
    const apellido = String(body.apellido || "").trim();
    const correo = String(body.correo || "").trim();
    const prefijo = String(body.prefijo || "+51").trim();
    const telefono = String(body.telefono || "").trim();
    const servicio = String(body.servicio || "").trim();
    const mensaje = String(body.mensaje || "").trim();

    if (!nombre || !correo || !servicio) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      return NextResponse.json(
        { ok: false, error: "Correo no válido." },
        { status: 400 }
      );
    }

    const telefonoCompleto = telefono ? `${prefijo} ${telefono}` : "No indicado";
    const subject = `Contacto web — ${servicio}`;

    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `${nombre} ${apellido}`.trim(),
        email: correo,
        _replyto: correo,
        _subject: subject,
        telefono: telefonoCompleto,
        servicio,
        mensaje: mensaje || "(Sin mensaje)",
        _template: "table",
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el mensaje. Intenta de nuevo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error del servidor. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
