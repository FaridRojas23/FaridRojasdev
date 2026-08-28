import SectionWrapper from "@/components/SectionWrapper";
import HeroActions from "@/components/HeroActions";

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
          <HeroActions />
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
