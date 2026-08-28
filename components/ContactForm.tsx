"use client";

import type { FormEvent } from "react";

const EMAIL = "rojasgonzales2022@gmail.com";

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
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = data.get("nombre") || "";
    const apellido = data.get("apellido") || "";
    const correo = data.get("correo") || "";
    const prefijo = data.get("prefijo") || "+51";
    const telefono = data.get("telefono") || "";
    const servicio = data.get("servicio") || "";
    const mensaje = data.get("mensaje") || "";
    const telefonoCompleto = telefono ? `${prefijo} ${telefono}` : "";
    const body = encodeURIComponent(
      `Hola Farid,\n\nSoy ${nombre} ${apellido}.\nCorreo: ${correo}\nTeléfono: ${telefonoCompleto}\nServicio: ${servicio}\n\n${mensaje}`
    );
    const subject = encodeURIComponent(`Contacto web — ${servicio || "consulta"}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
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
        <div className="form-field">
          <input
            name="correo"
            type="email"
            required
            placeholder="Correo electrónico"
            aria-label="Correo electrónico"
          />
        </div>
        <div className="form-field phone-field">
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
          <textarea
            name="mensaje"
            placeholder="Cuéntame qué necesitas…"
            aria-label="Mensaje"
          />
        </div>
        <div className="full">
          <button className="btn btn-solid" type="submit">
            Enviar mensaje
          </button>
        </div>
      </div>
    </form>
  );
}
