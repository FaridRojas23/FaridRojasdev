"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import TechGrid from "@/components/TechGrid";

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
        <h2 className="cv-anim">
          <span className="accent">▣</span> Mi experiencia
        </h2>
        <div className="cv-summary cv-anim">
          Perfil híbrido: negocio + operaciones + automatización. Armo plataformas y scripts que extraen datos
          solos, generan KPIs de flota/combustible y dejan reportes listos para gerencia.
        </div>
        <div className="timeline">
          <article className="timeline-item cv-anim">
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
          <article className="timeline-item cv-anim">
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
        <h2 className="cv-anim">
          <span className="accent">▣</span> Educación
        </h2>
        <div className="timeline">
          <article className="timeline-item cv-anim">
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
        <h2 className="cv-anim">
          <span className="accent">▣</span> Habilidades
        </h2>
        <div className="skill-grid">
          <div className="skill cv-anim">
            <div className="skill-top">
              <span className="skill-ico">⚙</span>
              <strong>Automatización</strong>
            </div>
            <span>Python · Playwright · scripts de extracción</span>
          </div>
          <div className="skill cv-anim">
            <div className="skill-top">
              <span className="skill-ico">▣</span>
              <strong>Datos</strong>
            </div>
            <span>Excel avanzado · limpieza · reportes</span>
          </div>
          <div className="skill cv-anim">
            <div className="skill-top">
              <span className="skill-ico">◈</span>
              <strong>BI</strong>
            </div>
            <span>Power BI (intermedio) · KPIs operativos</span>
          </div>
          <div className="skill cv-anim">
            <div className="skill-top">
              <span className="skill-ico">⬡</span>
              <strong>Operaciones</strong>
            </div>
            <span>Flota · combustible · TSM/ERP</span>
          </div>
          <div className="skill cv-anim">
            <div className="skill-top">
              <span className="skill-ico">⌘</span>
              <strong>Web</strong>
            </div>
            <span>Dashboards · FastAPI · GitHub · Vercel/Render</span>
          </div>
          <div className="skill cv-anim">
            <div className="skill-top">
              <span className="skill-ico">✦</span>
              <strong>IA aplicada</strong>
            </div>
            <span>Agentes · productividad · documentación</span>
          </div>
        </div>
        <h3 className="tech-title cv-anim">Tecnologías</h3>
        <p className="tech-subtitle cv-anim">
          Tecnologías que he utilizado en proyectos personales y profesionales.
        </p>
        <TechGrid />
      </>
    );
  }

  if (tab === "certs") {
    return (
      <>
        <h2 className="cv-anim">
          <span className="accent">▣</span> Idiomas
        </h2>
        <div className="skill-grid">
          <div className="skill cv-anim">
            <strong>Español</strong>
            <span>Nativo</span>
          </div>
          <div className="skill cv-anim">
            <strong>Inglés</strong>
            <span>Intermedio</span>
          </div>
          <div className="skill cv-anim">
            <strong>Ruso</strong>
            <span>Básico</span>
          </div>
          <div className="skill cv-anim">
            <strong>Italiano / Portugués</strong>
            <span>Básico</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="cv-anim">
        <span className="accent">▣</span> Sobre mí
      </h2>
      <div className="cv-summary cv-anim">
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
  const contentRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
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
      duration: 0.5,
      ease: "power3.out",
    });
  }

  function playScanline() {
    const scan = scanRef.current;
    if (!scan || prefersReducedMotion()) return;

    gsap.fromTo(
      scan,
      { opacity: 0.55, yPercent: -120 },
      { opacity: 0, yPercent: 120, duration: 0.65, ease: "power1.inOut" }
    );
  }

  function animatePanelEnter() {
    const content = contentRef.current;
    if (!content || prefersReducedMotion()) return;

    const items = content.querySelectorAll(".cv-anim");

    gsap.fromTo(
      content,
      { opacity: 0, x: 36, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.55,
        ease: "power3.out",
        onComplete: () => {
          setIsSwitching(false);
        },
      }
    );

    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 22, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.48,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }

  function handleTabChange(nextTab: TabId) {
    if (nextTab === tab || isSwitching) return;

    const content = contentRef.current;
    if (!content || prefersReducedMotion()) {
      setTab(nextTab);
      return;
    }

    setIsSwitching(true);

    gsap.to(content, {
      opacity: 0,
      x: -28,
      filter: "blur(8px)",
      duration: 0.24,
      ease: "power2.in",
      onComplete: () => {
        setTab(nextTab);
      },
    });

    playScanline();
  }

  useLayoutEffect(() => {
    moveIndicator(tab);
  }, [tab]);

  useEffect(() => {
    animatePanelEnter();
  }, [tab]);

  useEffect(() => {
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
        <div className="cv-scanline" ref={scanRef} aria-hidden="true" />
        <div className="cv-content" ref={contentRef}>
          <TabContent tab={tab} />
        </div>
      </div>
    </div>
  );
}
