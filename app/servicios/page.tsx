
import SectionWrapper from "@/components/SectionWrapper";

export default function ServiciosPage() {
  return (
    <main>
      <SectionWrapper>
        <h1 className="page-title">Servicios</h1>
        <p className="section-intro">
          Soluciones prácticas para operaciones de transporte y logística: menos trabajo manual, más control con datos.
        </p>
      </SectionWrapper>

      <SectionWrapper delay={0.08}>
        <div className="page-shell">
          <div className="page-shell-grid" aria-hidden="true" />
          <div className="cards">
        <article className="card">
          <div className="card-top">
            <div className="card-num">01</div>
            <div className="card-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 20h8" />
                <path d="M12 18v2" />
              </svg>
            </div>
          </div>
          <h3>Automatización de procesos</h3>
          <p>
            Scripts y flujos que descargan, validan y limpian reportes (combustible, despachos, liquidaciones) sin
            depender de una persona cada día.
          </p>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">Playwright</span>
            <span className="tag">Excel</span>
            <span className="tag">RPA ligero</span>
          </div>
        </article>

        <article className="card">
          <div className="card-top">
            <div className="card-num">02</div>
            <div className="card-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 19V5" />
                <path d="M4 19h16" />
                <path d="M8 15l3-4 3 2 4-6" />
              </svg>
            </div>
          </div>
          <h3>Análisis de flota y costos</h3>
          <p>
            Indicadores de rendimiento real vs teórico, consumo, kilometraje y costo por departamento/provincia para
            decisiones operativas.
          </p>
          <div className="tags">
            <span className="tag">Power BI</span>
            <span className="tag">Excel avanzado</span>
            <span className="tag">KPIs</span>
            <span className="tag">CECO</span>
          </div>
        </article>

        <article className="card">
          <div className="card-top">
            <div className="card-num">03</div>
            <div className="card-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h10" />
                <rect x="3" y="4" width="18" height="16" rx="2" />
              </svg>
            </div>
          </div>
          <h3>Dashboards y reportes web</h3>
          <p>
            Paneles en la nube para subir Excel y ver gráficos al instante: cumplimiento, tractos, conductores y
            alertas de brecha.
          </p>
          <div className="tags">
            <span className="tag">FastAPI</span>
            <span className="tag">Plotly</span>
            <span className="tag">Vercel/Render</span>
            <span className="tag">GitHub</span>
          </div>
        </article>

        <article className="card">
          <div className="card-top">
            <div className="card-num">04</div>
            <div className="card-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
          </div>
          <h3>IA aplicada a operaciones</h3>
          <p>
            Uso de IA y agentes para acelerar limpieza de datos, documentación y reportes — siempre con validación
            humana en el resultado.
          </p>
          <div className="tags">
            <span className="tag">Cursor</span>
            <span className="tag">MCP</span>
            <span className="tag">Productividad</span>
            <span className="tag">Automatización</span>
          </div>
        </article>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
