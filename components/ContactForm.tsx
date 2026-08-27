"use client";

import type { FormEvent } from "react";

const EMAIL = "carlosfarirojasgonzal@gmail.com";

export default function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = data.get("nombre") || "";
    const apellido = data.get("apellido") || "";
    const correo = data.get("correo") || "";
    const telefono = data.get("telefono") || "";
    const servicio = data.get("servicio") || "";
    const mensaje = data.get("mensaje") || "";
    const body = encodeURIComponent(
      `Hola Farid,\n\nSoy ${nombre} ${apellido}.\nCorreo: ${correo}\nTeléfono: ${telefono}\nServicio: ${servicio}\n\n${mensaje}`
    );
    const subject = encodeURIComponent(`Contacto web — ${servicio || "consulta"}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Nombre
          <input name="nombre" required placeholder="Tu nombre" />
        </label>
        <label>
          Apellido
          <input name="apellido" placeholder="Tu apellido" />
        </label>
        <label>
          Correo electrónico
          <input name="correo" type="email" required placeholder="correo@empresa.com" />
        </label>
        <label>
          Teléfono
          <input name="telefono" placeholder="+51 …" />
        </label>
        <label className="full">
          Servicio
          <select name="servicio" required defaultValue="">
            <option value="">Seleccione un servicio</option>
            <option>Automatización de procesos</option>
            <option>Análisis de flota y costos</option>
            <option>Dashboards / reportes web</option>
            <option>IA aplicada a operaciones</option>
            <option>Otro</option>
          </select>
        </label>
        <label className="full">
          Mensaje
          <textarea name="mensaje" placeholder="Cuéntame qué necesitas…" />
        </label>
        <div className="full">
          <button className="btn btn-solid" type="submit">
            Enviar mensaje
          </button>
        </div>
      </div>
    </form>
  );
}
