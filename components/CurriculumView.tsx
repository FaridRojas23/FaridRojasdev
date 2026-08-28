"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import TechGrid from "@/components/TechGrid";

const SHUTTER_COLS = 9;
const SHUTTER_CLOSE = 0.11;
const SHUTTER_OPEN = 0.1;
const SHUTTER_STAGGER = 0.018;

const tabs = [
  { id: "exp", label: "Experiencia" },
  { id: "edu", label: "Educación" },
  { id: "skills", label: "Habilidades" },
  { id: "certs", label: "Idiomas" },
  { id: "about", label: "Sobre mí" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function TabContent({ tab }: { tab: TabId }) {
  if (tab === "exp") {
    return (
      <>
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
      </>
    );
  }

  if (tab === "edu") {
    return (
      <>
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
      </>
    );
  }

  if (tab === "skills") {
    return (
      <>
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
        <p className="tech-subtitle">
          Tecnologías que he utilizado en proyectos personales y profesionales.
        </p>
        <TechGrid />
      </>
    );
  }

  if (tab === "certs") {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <h2>
        <span className="accent">▣</span> Sobre mí
      </h2>
      <div className="cv-summary">
        Soy Carlos Farid Rojas Gonzales, de Puente Piedra (Lima). Me interesa convertir el caos operativo diario
        (Excels, estaciones, despachos) en sistemas simples que cualquiera del equipo pueda usar. Busco roles de
        automatización de procesos, análisis de operaciones o BI junior en logística/transporte.
      </div>
    </>
  );
}

export default function CurriculumView() {
  const [tab, setTab] = useState<TabId>("exp");
  const [isSwitching, setIsSwitching] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const shutterRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Partial<Record<TabId, HTMLButtonElement>>>({});

  function moveIndicator(tabId: TabId) {
    const btn = buttonRefs.current[tabId];
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!btn || !nav || !indicator) return;

    const navTop = nav.getBoundingClientRect().top;
    const btnRect = btn.getBoundingClientRect();

    gsap.to(indicator, {
      y: btnRect.top - navTop,
      height: btnRect.height,
      duration: 0.28,
      ease: "power3.out",
    });
  }

  function getShutterCols() {
    const shutter = shutterRef.current;
    if (!shutter) return null;
    return shutter.querySelectorAll<HTMLElement>(".cv-shutter-col");
  }

  function playShutterTransition(nextTab: TabId) {
    const cols = getShutterCols();
    if (!cols?.length) {
      setTab(nextTab);
      return;
    }

    setIsSwitching(true);
    gsap.set(cols, { xPercent: 100 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(cols, { xPercent: 100 });
        setIsSwitching(false);
      },
    });

    tl.to(cols, {
      xPercent: 0,
      duration: SHUTTER_CLOSE,
      stagger: { each: SHUTTER_STAGGER, from: "end" },
      ease: "power4.in",
    });

    tl.call(() => setTab(nextTab));

    tl.to(cols, {
      xPercent: -100,
      duration: SHUTTER_OPEN,
      stagger: { each: SHUTTER_STAGGER, from: "start" },
      ease: "power4.out",
    });
  }

  function handleTabChange(nextTab: TabId) {
    if (nextTab === tab || isSwitching) return;

    if (prefersReducedMotion()) {
      setTab(nextTab);
      return;
    }

    playShutterTransition(nextTab);
  }

  useLayoutEffect(() => {
    moveIndicator(tab);
    const cols = getShutterCols();
    if (cols) gsap.set(cols, { xPercent: 100 });
  }, [tab]);

  useLayoutEffect(() => {
    const onResize = () => moveIndicator(tab);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [tab]);

  return (
    <div className="cv-layout">
      <aside className="cv-nav" ref={navRef} aria-label="Secciones del CV">
        <div className="cv-nav-indicator" ref={indicatorRef} aria-hidden="true" />
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            ref={(el) => {
              if (el) buttonRefs.current[item.id] = el;
            }}
            className={tab === item.id ? "active" : ""}
            onClick={() => handleTabChange(item.id)}
            aria-current={tab === item.id ? "page" : undefined}
            disabled={isSwitching}
          >
            {item.label}
          </button>
        ))}
      </aside>

      <div className="cv-content-stage" ref={stageRef}>
        <div className="cv-stage-grid" aria-hidden="true" />
        <div className="cv-content">
          <TabContent tab={tab} />
        </div>
        <div className="cv-shutter" ref={shutterRef} aria-hidden="true">
          {Array.from({ length: SHUTTER_COLS }, (_, i) => (
            <div className="cv-shutter-col" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
