"use client";

import { useState, type FormEvent } from "react";

const phonePrefixes = [
  { value: "+51", label: "+51" },
  { value: "+1", label: "+1" },
  { value: "+52", label: "+52" },
  { value: "+57", label: "+57" },
  { value: "+54", label: "+54" },
  { value: "+56", label: "+56" },
  { value: "+34", label: "+34" },
];

// Web3Forms access keys are designed to be public (alias to your email).
// Submitting from the browser avoids Cloudflare blocking Vercel server IPs.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "d42479d6-277a-41cc-9156-2151c2d215c7";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") || "")) {
      setStatus("success");
      form.reset();
      return;
    }

    const nombre = String(data.get("nombre") || "").trim();
    const apellido = String(data.get("apellido") || "").trim();
    const correo = String(data.get("correo") || "").trim();
    const prefijo = String(data.get("prefijo") || "+51").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const servicio = String(data.get("servicio") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const telefonoCompleto = telefono ? `${prefijo} ${telefono}` : "No indicado";
    const fullName = `${nombre} ${apellido}`.trim();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
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
          botcheck: false,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(result.message || "No se pudo enviar el mensaje. Intenta de nuevo.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <input name="nombre" required placeholder="Nombre" aria-label="Nombre" />
        </div>
        <div className="form-field">
          <input name="apellido" placeholder="Apellido" aria-label="Apellido" />
        </div>
        <div className="form-row-contact">
          <div className="form-field">
            <input
              name="correo"
              type="email"
              required
              placeholder="Correo electrónico"
              aria-label="Correo electrónico"
            />
          </div>
          <div className="form-field">
            <div className="phone-input-group">
              <select name="prefijo" defaultValue="+51" className="phone-prefix" aria-label="Prefijo telefónico">
                {phonePrefixes.map((prefix) => (
                  <option key={prefix.value} value={prefix.value}>
                    {prefix.label}
                  </option>
                ))}
              </select>
              <input name="telefono" placeholder="Teléfono" aria-label="Teléfono" />
            </div>
          </div>
        </div>
        <div className="form-field full">
          <select name="servicio" required defaultValue="" aria-label="Servicio">
            <option value="">Seleccione un servicio</option>
            <option>Automatización de procesos</option>
            <option>Análisis de flota y costos</option>
            <option>Dashboards / reportes web</option>
            <option>IA aplicada a operaciones</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="form-field full">
          <textarea name="mensaje" placeholder="Cuéntame qué necesitas…" aria-label="Mensaje" />
        </div>
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="form-honeypot"
        />
        <div className="full">
          <button className="btn btn-solid" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando…" : "Enviar mensaje"}
          </button>
          {status === "success" ? (
            <p className="form-status form-status--ok">
              Mensaje enviado. Te responderé pronto a tu correo.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="form-status form-status--error">{errorMessage}</p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
