import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  gmailComposeUrl,
  googleMapsSearchUrl,
} from "@/lib/contact-links";

export default function ContactoPage() {
  return (
    <main>
      <SectionWrapper>
        <div className="page-shell">
          <div className="page-shell-grid" aria-hidden="true" />
          <div className="contact-grid">
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
          <a className="info-block" href={CONTACT_PHONE_HREF}>
            <div className="info-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 2-2 2C9 19.5 4.5 15 4.5 5.5c0-1 1-2 2-2z" />
              </svg>
            </div>
            <div className="info-copy">
              <span className="info-label">Teléfono</span>
              <strong className="info-value">{CONTACT_PHONE_DISPLAY}</strong>
            </div>
          </a>
          <a
            className="info-block"
            href={gmailComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="info-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <div className="info-copy">
              <span className="info-label">Correo</span>
              <strong className="info-value info-value--email">{CONTACT_EMAIL}</strong>
            </div>
          </a>
          <a
            className="info-block"
            href={googleMapsSearchUrl(CONTACT_LOCATION)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="info-ico" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div className="info-copy">
              <span className="info-label">Ubicación</span>
              <strong className="info-value">{CONTACT_LOCATION}</strong>
            </div>
          </a>
        </aside>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
