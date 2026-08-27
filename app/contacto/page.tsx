
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactoPage() {
  return (
    <main>
      <SectionWrapper className="contact-grid">
        <section className="contact-card">
          <h2>Trabajemos juntos</h2>
          <p>
            Listo para aportar automatización, análisis de operaciones y reportes claros en un equipo de logística o
            transporte. Si tienes un reto de datos o procesos, conversemos.
          </p>
          <p style={{ color: "var(--accent)", fontSize: "0.9rem", margin: "0 0 1rem" }}>
            Escríbeme y demos el primer paso.
          </p>
          <ContactForm />
        </section>

        <aside className="side-info">
          <div className="info-block">
            <div className="info-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div>
              <strong>Ubicación</strong>
              <span>Puente Piedra · Lima, Perú</span>
            </div>
          </div>
          <div className="info-block">
            <div className="info-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </div>
            <div>
              <strong>GitHub</strong>
              <span>
                <a href="https://github.com/FaridRojas23" target="_blank" rel="noopener">
                  github.com/FaridRojas23
                </a>
              </span>
            </div>
          </div>
          <div className="info-block">
            <div className="info-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <div>
              <strong>Correo</strong>
              <span>faridrojas23@gmail.com</span>
            </div>
          </div>
        </aside>
      </SectionWrapper>
    </main>
  );
}
