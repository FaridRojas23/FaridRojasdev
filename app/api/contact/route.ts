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
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      return NextResponse.json(
        { ok: false, error: "El formulario aún no está configurado (falta WEB3FORMS_ACCESS_KEY)." },
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
    const fullName = `${nombre} ${apellido}`.trim();

    const payload = {
      access_key: accessKey,
      subject: `Contacto web — ${servicio}`,
      from_name: fullName,
      name: fullName,
      email: correo,
      phone: telefonoCompleto,
      servicio,
      message: [
        `Nombre: ${fullName}`,
        `Correo: ${correo}`,
        `Teléfono: ${telefonoCompleto}`,
        `Servicio: ${servicio}`,
        "",
        mensaje || "(Sin mensaje)",
      ].join("\n"),
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const raw = await response.text();
    let result: { success?: boolean; message?: string } = {};
    try {
      result = JSON.parse(raw) as { success?: boolean; message?: string };
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: `Web3Forms respondió inválido (${response.status}): ${raw.slice(0, 180)}`,
        },
        { status: 502 }
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          ok: false,
          error: result.message || `Web3Forms rechazó el envío (${response.status}).`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Error desconocido";
    return NextResponse.json(
      { ok: false, error: `Error del servidor: ${detail}` },
      { status: 500 }
    );
  }
}
