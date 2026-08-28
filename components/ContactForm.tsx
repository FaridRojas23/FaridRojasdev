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

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.get("nombre"),
          apellido: data.get("apellido"),
          correo: data.get("correo"),
          prefijo: data.get("prefijo"),
          telefono: data.get("telefono"),
          servicio: data.get("servicio"),
          mensaje: data.get("mensaje"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error || "No se pudo enviar el mensaje.");
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
