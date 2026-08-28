
import SectionWrapper from "@/components/SectionWrapper";

export default function ProyectosPage() {
  return (
    <main>
      <SectionWrapper>
        <h1 className="page-title">Proyectos</h1>
        <p className="section-intro">Casos reales de automatización y datos en operaciones de transporte.</p>
      </SectionWrapper>

      <SectionWrapper delay={0.06}>
        <div className="page-shell">
          <div className="page-shell-grid" aria-hidden="true" />
          <div className="project">
            <div>
              <div className="project-num">01</div>
              <h2>Despachos KPIs</h2>
              <h3>Panel web de rendimiento</h3>
              <p>
                App en la nube para subir el Excel de despachos y generar gráficos de rendimiento real vs teórico,
                CC.OO, tractos y conductores. Incluye feedback de carga (“estructurando datos… / creando gráficos…”)
                y caché para respuesta rápida.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Plotly</span>
                <span className="tag">Render</span>
                <span className="tag">GitHub</span>
              </div>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="mock-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="mock-body">
                <div className="mock-kpi">
                  <div>
                    <strong>90%+</strong>
                    <span>Cumplimiento</span>
                  </div>
                  <div>
                    <strong>Top 20</strong>
                    <span>Tractos / km</span>
                  </div>
                  <div>
                    <strong>Real</strong>
                    <span>vs teórico</span>
                  </div>
                  <div>
                    <strong>1 click</strong>
                    <span>Subir Excel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <div>
              <div className="project-num">02</div>
              <h2>Combustible Primax / Redcol</h2>
              <h3>Extracción automática portable</h3>
              <p>
                Automatización con Playwright para descargar y limpiar consumos de estaciones, combinar reportes y dejar
                Excels listos sin intervención manual. Empaquetado para correr en distintos equipos.
              </p>
              <div className="tags">
                <span className="tag">Playwright</span>
                <span className="tag">Python</span>
                <span className="tag">Excel</span>
                <span className="tag">Portable</span>
              </div>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="mock-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="mock-body">
                <div className="mock-kpi">
                  <div>
                    <strong>Primax</strong>
                    <span>Descarga</span>
                  </div>
                  <div>
                    <strong>Redcol</strong>
                    <span>Descarga</span>
                  </div>
                  <div>
                    <strong>Limpio</strong>
                    <span>Excel listo</span>
                  </div>
                  <div>
                    <strong>0</strong>
                    <span>Clicks repetidos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <div>
              <div className="project-num">03</div>
              <h2>CECO · Costos por provincia</h2>
              <h3>Reporte de agosto (semanas 2 y 3)</h3>
              <p>
                Análisis de costos de combustible por departamento/provincia a partir de CECO-RENDIMIENTO: precios
                detallados, galones, subtotal e IGV filtrados a semanas operativas clave.
              </p>
              <div className="tags">
                <span className="tag">Excel</span>
                <span className="tag">openpyxl</span>
                <span className="tag">Costos</span>
                <span className="tag">Logística</span>
              </div>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="mock-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="mock-body">
                <div className="mock-kpi">
                  <div>
                    <strong>S2</strong>
                    <span>8–14 ago</span>
                  </div>
                  <div>
                    <strong>S3</strong>
                    <span>15–21 ago</span>
                  </div>
                  <div>
                    <strong>563</strong>
                    <span>Cargas agosto</span>
                  </div>
                  <div>
                    <strong>S/</strong>
                    <span>Costo por depto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
