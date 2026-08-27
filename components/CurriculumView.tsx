"use client";

import { useState } from "react";

const tabs = [
  { id: "exp", label: "Experiencia" },
  { id: "edu", label: "Educación" },
  { id: "skills", label: "Habilidades" },
  { id: "certs", label: "Idiomas" },
  { id: "about", label: "Sobre mí" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function CurriculumView() {
  const [tab, setTab] = useState<TabId>("exp");

  return (
    <div className="cv-layout">
      <aside className="cv-nav" aria-label="Secciones del CV">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            className={tab === item.id ? "active" : ""}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </aside>

      <div>
        <section className={`cv-panel${tab === "exp" ? " active" : ""}`} id="exp">
          <h2>
            <span className="accent">▣</span> Mi experiencia
          </h2>
          <div className="cv-summary">
            Perfil híbrido: negocio + operaciones + automatización. Armo plataformas y scripts que extraen datos
            solos, generan KPIs de flota/combustible y dejan reportes listos para gerencia.
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="meta-row">
                <h3>Analista de Automatización de Procesos Logísticos</h3>
                <span className="when">2024 — Actualidad</span>
              </div>
              <div className="meta-row">
                <span className="where">Operaciones de transporte / Socorro Cargo</span>
              </div>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
                Automatización de descargas Primax/Redcol, paneles de rendimiento de despachos, análisis CECO y
                costos por provincia. Control de flota, Excel/Power BI y reportes sin fricción operativa.
              </p>
            </article>
            <article className="timeline-item">
              <div className="meta-row">
                <h3>Gestión documental y datos operativos</h3>
                <span className="when">Previo — 2024</span>
              </div>
              <div className="meta-row">
                <span className="where">Logística nacional</span>
              </div>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
                Seguimiento de guías, liquidaciones, TSM/ERP y consolidación de información para indicadores de
                entrega, costos y unidades.
              </p>
            </article>
          </div>
        </section>

        <section className={`cv-panel${tab === "edu" ? " active" : ""}`} id="edu">
          <h2>
            <span className="accent">▣</span> Educación
          </h2>
          <div className="timeline">
            <article className="timeline-item">
              <div className="meta-row">
                <h3>Administración de Negocios Internacionales</h3>
                <span className="when">UTP</span>
              </div>
              <div className="meta-row">
                <span className="where">Universidad Tecnológica del Perú</span>
              </div>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
                Formación en negocio, comercio y operaciones, aplicada hoy a digitalizar procesos logísticos.
              </p>
            </article>
          </div>
        </section>

        <section className={`cv-panel${tab === "skills" ? " active" : ""}`} id="skills">
          <h2>
            <span className="accent">▣</span> Habilidades
          </h2>
          <div className="skill-grid">
            <div className="skill">
              <div className="skill-top">
                <span className="skill-ico">⚙</span>
                <strong>Automatización</strong>
              </div>
              <span>Python · Playwright · scripts de extracción</span>
            </div>
            <div className="skill">
              <div className="skill-top">
                <span className="skill-ico">▣</span>
                <strong>Datos</strong>
              </div>
              <span>Excel avanzado · limpieza · reportes</span>
            </div>
            <div className="skill">
              <div className="skill-top">
                <span className="skill-ico">◈</span>
                <strong>BI</strong>
              </div>
              <span>Power BI (intermedio) · KPIs operativos</span>
            </div>
            <div className="skill">
              <div className="skill-top">
                <span className="skill-ico">⬡</span>
                <strong>Operaciones</strong>
              </div>
              <span>Flota · combustible · TSM/ERP</span>
            </div>
            <div className="skill">
              <div className="skill-top">
                <span className="skill-ico">⌘</span>
                <strong>Web</strong>
              </div>
              <span>Dashboards · FastAPI · GitHub · Vercel/Render</span>
            </div>
            <div className="skill">
              <div className="skill-top">
                <span className="skill-ico">✦</span>
                <strong>IA aplicada</strong>
              </div>
              <span>Agentes · productividad · documentación</span>
            </div>
          </div>

          <h3 className="tech-title">Tecnologías</h3>
          <div className="tech-grid">
            <div className="tech">
              <span className="tech-badge js">JS</span>
              <strong>JavaScript</strong>
            </div>
            <div className="tech">
              <span className="tech-badge node">N</span>
              <strong>Node.js</strong>
            </div>
            <div className="tech">
              <span className="tech-badge py">Py</span>
              <strong>Python</strong>
            </div>
            <div className="tech">
              <span className="tech-badge pw">Pw</span>
              <strong>Playwright</strong>
            </div>
            <div className="tech">
              <span className="tech-badge xl">Xl</span>
              <strong>Excel</strong>
            </div>
            <div className="tech">
              <span className="tech-badge bi">BI</span>
              <strong>Power BI</strong>
            </div>
            <div className="tech">
              <span className="tech-badge api">API</span>
              <strong>FastAPI</strong>
            </div>
            <div className="tech">
              <span className="tech-badge git">Gh</span>
              <strong>GitHub</strong>
            </div>
            <div className="tech">
              <span className="tech-badge html">H</span>
              <strong>HTML / CSS</strong>
            </div>
            <div className="tech">
              <span className="tech-badge sql">SQL</span>
              <strong>SQL</strong>
            </div>
          </div>
        </section>

        <section className={`cv-panel${tab === "certs" ? " active" : ""}`} id="certs">
          <h2>
            <span className="accent">▣</span> Idiomas
          </h2>
          <div className="skill-grid">
            <div className="skill">
              <strong>Español</strong>
              <span>Nativo</span>
            </div>
            <div className="skill">
              <strong>Inglés</strong>
              <span>Intermedio</span>
            </div>
            <div className="skill">
              <strong>Ruso</strong>
              <span>Básico</span>
            </div>
            <div className="skill">
              <strong>Italiano / Portugués</strong>
              <span>Básico</span>
            </div>
          </div>
        </section>

        <section className={`cv-panel${tab === "about" ? " active" : ""}`} id="about">
          <h2>
            <span className="accent">▣</span> Sobre mí
          </h2>
          <div className="cv-summary">
            Soy Carlos Farid Rojas Gonzales, de Puente Piedra (Lima). Me interesa convertir el caos operativo diario
            (Excels, estaciones, despachos) en sistemas simples que cualquiera del equipo pueda usar. Busco roles de
            automatización de procesos, análisis de operaciones o BI junior en logística/transporte.
          </div>
        </section>
      </div>
    </div>
  );
}
