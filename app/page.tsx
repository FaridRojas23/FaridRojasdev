import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export default function HomePage() {
  return (
    <main>
      <SectionWrapper className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Automatización · Datos · Logística</p>
          <h1>
            Hola, soy <span className="accent">Farid Rojas</span>
          </h1>
          <p className="lead">
            Administrador de Negocios Internacionales. Diseño flujos que extraen, limpian y reportan datos
            operativos sin trabajo manual — para bajar costos y subir control en flota, combustible y despachos.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-outline" href="/curriculum">
              Ver currículum
            </Link>
            <a
              className="icon-btn"
              href="https://github.com/FaridRojas23"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a
              className="icon-btn"
              href="https://www.linkedin.com/in/carlos-farid-rojas-gonzales-71b33a202/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4V8.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit" />
          <div className="avatar">
            <span>FR</span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="stats" delay={0.12}>
        <div className="stat">
          <strong>3+</strong>
          <span>
            Años en operaciones
            <br />y datos logísticos
          </span>
        </div>
        <div className="stat">
          <strong>6</strong>
          <span>
            Proyectos de
            <br />
            automatización
          </span>
        </div>
        <div className="stat">
          <strong>8</strong>
          <span>
            Herramientas
            <br />
            dominadas
          </span>
        </div>
        <div className="stat">
          <strong>100%</strong>
          <span>
            Enfoque en
            <br />
            resultados medibles
          </span>
        </div>
      </SectionWrapper>
    </main>
  );
}
