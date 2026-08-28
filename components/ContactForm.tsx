"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/contact-links";

const phonePrefixes = [
  { value: "+51", label: "+51" },
  { value: "+1", label: "+1" },
  { value: "+52", label: "+52" },
  { value: "+57", label: "+57" },
  { value: "+54", label: "+54" },
  { value: "+56", label: "+56" },
  { value: "+34", label: "+34" },
];

/** Free Web3Forms key (public by design). Get yours at https://web3forms.com */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot
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

    setStatus("loading");
    setErrorMessage("");

    try {
      // Prefer Web3Forms when configured (most reliable free option)
      if (WEB3FORMS_ACCESS_KEY) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `Contacto web — ${servicio}`,
            from_name: "Portafolio Farid Rojas",
            name: `${nombre} ${apellido}`.trim(),
            email: correo,
            phone: telefonoCompleto,
            service: servicio,
            message: mensaje || "(Sin mensaje)",
            botcheck: false,
          }),
        });
        const result = (await res.json()) as { success?: boolean; message?: string };
        if (!result.success) {
          setStatus("error");
          setErrorMessage(result.message || "No se pudo enviar. Intenta de nuevo.");
          return;
        }
        setStatus("success");
        form.reset();
        return;
      }

      // Fallback: FormSubmit (free, no key) — from the browser, not Vercel
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${nombre} ${apellido}`.trim(),
          email: correo,
          _replyto: correo,
          _subject: `Contacto web — ${servicio}`,
          Telefono: telefonoCompleto,
          Servicio: servicio,
          Mensaje: mensaje || "(Sin mensaje)",
          _template: "table",
          _captcha: false,
        }),
      });

      const result = (await res.json()) as {
        success?: boolean | string;
        message?: string;
      };
      const ok = result.success === true || result.success === "true";

      if (!ok) {
        const msg = (result.message || "").toLowerCase();
        setStatus("error");
        if (msg.includes("confirm") || msg.includes("activate") || msg.includes("email")) {
          setErrorMessage(
            `Revisa tu Gmail (${CONTACT_EMAIL}) y confirma el enlace de FormSubmit (solo una vez). Luego vuelve a enviar.`
          );
        } else {
          setErrorMessage(result.message || "No se pudo enviar. Intenta de nuevo.");
        }
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Revisa tu internet e intenta de nuevo.");
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
