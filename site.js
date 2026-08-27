(function () {
  const path = (location.pathname.replace(/\/$/, "") || "/").toLowerCase();
  const is = (name) =>
    path.endsWith(name) || (name === "/index.html" && (path === "/" || path.endsWith("/faridrojasdev")));

  const navHtml = `
  <header class="top">
    <div class="wrap top-inner">
      <a class="brand" href="/">Farid<span>.</span></a>
      <button class="menu-toggle" type="button" id="menuBtn" aria-label="Menú">Menú</button>
      <nav class="nav" id="mainNav">
        <a href="/" class="${is("/") || is("/index.html") ? "active" : ""}">Inicio</a>
        <a href="/servicios.html" class="${is("/servicios.html") ? "active" : ""}">Servicios</a>
        <a href="/curriculum.html" class="${is("/curriculum.html") ? "active" : ""}">Currículum</a>
        <a href="/proyectos.html" class="${is("/proyectos.html") ? "active" : ""}">Proyectos</a>
        <a href="/contacto.html" class="${is("/contacto.html") ? "active" : ""}">Contacto</a>
      </nav>
      <a class="btn btn-solid" href="/contacto.html">Contáctame</a>
    </div>
  </header>`;

  const footerHtml = `
  <footer class="site-footer">
    <div class="wrap">
      <div>© ${new Date().getFullYear()} Carlos Farid Rojas Gonzales</div>
      <div>Automatización · Datos · Logística · Lima, Perú</div>
    </div>
  </footer>`;

  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  if (navRoot) navRoot.outerHTML = navHtml;
  if (footerRoot) footerRoot.outerHTML = footerHtml;

  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (btn && nav) {
    btn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll("[data-cv-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-cv-tab");
      document.querySelectorAll("[data-cv-tab]").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".cv-panel").forEach((p) => p.classList.remove("active"));
      button.classList.add("active");
      const panel = document.getElementById(id);
      if (panel) panel.classList.add("active");
    });
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = data.get("nombre") || "";
      const apellido = data.get("apellido") || "";
      const correo = data.get("correo") || "";
      const telefono = data.get("telefono") || "";
      const servicio = data.get("servicio") || "";
      const mensaje = data.get("mensaje") || "";
      const body = encodeURIComponent(
        `Hola Farid,\n\nSoy ${nombre} ${apellido}.\nCorreo: ${correo}\nTeléfono: ${telefono}\nServicio: ${servicio}\n\n${mensaje}`
      );
      const subject = encodeURIComponent(`Contacto web — ${servicio || "consulta"}`);
      window.location.href = `mailto:faridrojas23@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
