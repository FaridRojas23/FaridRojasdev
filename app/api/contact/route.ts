import { NextResponse } from "next/server";

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
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        { ok: false, error: "El formulario aún no está configurado." },
        { status: 503 }
      );
    }

    const body = (await request.json()) as ContactPayload;

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

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Contacto web — ${servicio}`,
        from_name: "Portafolio Farid Rojas",
        name: `${nombre} ${apellido}`.trim(),
        email: correo,
        phone: telefonoCompleto,
        service: servicio,
        message: mensaje || "(Sin mensaje)",
      }),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { ok: false, error: result.message || "No se pudo enviar el mensaje. Intenta de nuevo." },
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
