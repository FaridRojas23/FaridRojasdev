# Farid Rojas — Portafolio

Sitio personal para Vercel: Inicio, Servicios, Currículum, Proyectos y Contacto.

## Stack
Next.js (App Router) + CSS + Framer Motion.

## Local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy en Vercel
1. Entra a https://vercel.com/new
2. Importa el repo `FaridRojas23/FaridRojasdev`
3. Framework: **Next.js** (Auto)
4. Deploy

Si el proyecto ya está conectado, Vercel vuelve a desplegar solo con cada push a `main`.

## Personalizar
- Nombre / textos: archivos en `app/`
- Correo del formulario: `components/ContactForm.tsx`
- Colores: `app/globals.css` (`--accent`)
- Transiciones al hacer scroll: `components/SectionWrapper.tsx`
