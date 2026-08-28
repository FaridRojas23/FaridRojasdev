"use client";

import { useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const TechGrid = dynamic(() => import("@/components/TechGrid"), { ssr: false });

const WIPE_IN = 0.17;
const WIPE_OUT = 0.15;

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
              Formación en negocio, comercio exterior y operaciones internacionales, aplicada hoy a digitalizar
              procesos logísticos.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Inglés — nivel intermedio</h3>
              <span className="when">ICPNA</span>
            </div>
            <div className="meta-row">
              <span className="where">Instituto Cultural Peruano Norteamericano</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Inglés técnico y conversacional para comercio internacional y documentación operativa.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Auxiliar de despacho aduanero</h3>
              <span className="when">ERCA</span>
            </div>
            <div className="meta-row">
              <span className="where">Escuela de Comercio Aduanero</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Procedimientos aduaneros, documentación de importación/exportación y operaciones de comercio exterior.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Python para automatización y datos</h3>
              <span className="when">Curso</span>
            </div>
            <div className="meta-row">
              <span className="where">Formación tecnológica</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Scripts, limpieza de datos, automatización de reportes y extracción de información operativa.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>MySQL y bases de datos</h3>
              <span className="when">Curso</span>
            </div>
            <div className="meta-row">
              <span className="where">Formación tecnológica</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Consultas, modelado básico y manejo de datos para reportes y dashboards.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Excel avanzado y Power BI</h3>
              <span className="when">Curso</span>
            </div>
            <div className="meta-row">
              <span className="where">Análisis de negocios</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              KPIs, tablas dinámicas, dashboards y reportes para decisiones en logística y costos.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Automatización web con Playwright</h3>
              <span className="when">Curso</span>
            </div>
            <div className="meta-row">
              <span className="where">Formación tecnológica</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Descarga automática de reportes, RPA ligero y flujos sin intervención manual.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>APIs REST con FastAPI</h3>
              <span className="when">Curso</span>
            </div>
            <div className="meta-row">
              <span className="where">Desarrollo web</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Servicios backend para dashboards, carga de Excel y despliegue en la nube.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Git, GitHub y control de versiones</h3>
              <span className="when">Curso</span>
            </div>
            <div className="meta-row">
              <span className="where">Formación tecnológica</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Repositorios, branches y colaboración en proyectos de automatización y datos.
            </p>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Comercio internacional y cadena de suministro</h3>
              <span className="when">Complemento</span>
            </div>
            <div className="meta-row">
              <span className="where">Negocios internacionales</span>
            </div>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
              Incoterms, logística internacional, costos de importación y coordinación con operaciones de transporte.
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
        <div className="timeline">
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Español</h3>
              <span className="when">Nativo</span>
            </div>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Inglés</h3>
              <span className="when">Intermedio</span>
            </div>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Ruso</h3>
              <span className="when">Básico</span>
            </div>
          </article>
          <article className="timeline-item">
            <div className="meta-row">
              <h3>Italiano / Portugués</h3>
              <span className="when">Básico</span>
            </div>
          </article>
        </div>
      </>
    );
  }

  return (
    <>
      <h2>
        <span className="accent">▣</span> Sobre mí
      </h2>
      <div className="timeline">
        <article className="timeline-item">
          <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.55 }}>
            Soy Carlos Farid Rojas Gonzales, de Puente Piedra (Lima). Me interesa convertir el caos operativo diario
            (Excels, estaciones, despachos) en sistemas simples que cualquiera del equipo pueda usar. Busco roles de
            automatización de procesos, análisis de operaciones o BI junior en logística/transporte.
          </p>
        </article>
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
  const contentRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<gsap.core.Timeline | null>(null);
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

  function playPanelTransition(nextTab: TabId) {
    const wipe = wipeRef.current;
    const content = contentRef.current;
    const progress = progressRef.current;

    if (!wipe || !content) {
      setTab(nextTab);
      return;
    }

    if (transitionRef.current) {
      transitionRef.current.kill();
    }

    setIsSwitching(true);

    gsap.set(wipe, { xPercent: 100 });
    gsap.set(progress, { width: "0%" });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(wipe, { xPercent: 100 });
        gsap.set(progress, { width: "0%" });
        gsap.set(content, { opacity: 1 });
        setIsSwitching(false);
        transitionRef.current = null;
      },
    });

    transitionRef.current = tl;

    tl.to(progress, { width: "100%", duration: WIPE_IN, ease: "power2.in" }, 0);
    tl.to(
      wipe,
      { xPercent: 0, duration: WIPE_IN, ease: "power3.in" },
      0
    );
    tl.to(content, { opacity: 0, duration: WIPE_IN * 0.65, ease: "power1.in" }, 0);

    tl.call(() => setTab(nextTab));

    tl.set(content, { opacity: 0 });
    tl.to(
      wipe,
      { xPercent: -100, duration: WIPE_OUT, ease: "power3.out" }
    );
    tl.to(content, { opacity: 1, duration: WIPE_OUT * 0.85, ease: "power2.out" }, `-=${WIPE_OUT * 0.7}`);
    tl.to(progress, { width: "0%", duration: WIPE_OUT * 0.5, ease: "power2.out" }, `-=${WIPE_OUT}`);
  }

  function handleTabChange(nextTab: TabId) {
    if (nextTab === tab || isSwitching) return;

    if (prefersReducedMotion()) {
      setTab(nextTab);
      return;
    }

    playPanelTransition(nextTab);
  }

  useLayoutEffect(() => {
    moveIndicator(tab);
  }, [tab]);

  useLayoutEffect(() => {
    const wipe = wipeRef.current;
    const progress = progressRef.current;
    if (wipe) gsap.set(wipe, { xPercent: 100 });
    if (progress) gsap.set(progress, { width: "0%" });
  }, []);

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
        <div className="cv-stage-progress" ref={progressRef} aria-hidden="true" />
        <div className="cv-stage-grid" aria-hidden="true" />
        <div className="cv-content" ref={contentRef}>
          <TabContent tab={tab} />
        </div>
        <div className="cv-wipe" ref={wipeRef} aria-hidden="true">
          <span className="cv-wipe-edge" />
        </div>
      </div>
    </div>
  );
}
