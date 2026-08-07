document.querySelectorAll(".page-header").forEach((header) => {
  const nav = header.querySelector(".main-nav");
  const quote = header.querySelector(".header-quote");

  if (nav) {
    nav.innerHTML = `
      <a href="index.html#colecciones">Colecciones</a>
      <a href="sobre-nosotros.html">Nosotros</a>
      <a href="contacto.html">Contacto</a>
    `;
  }

  if (quote) {
    quote.href = "solicitar-presupuesto.html";
    quote.innerHTML = "Hablemos de tu espacio <span>↗</span>";
  }
});

document.querySelectorAll(".topbar, .page-header").forEach((header) => {
  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".main-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});

const oldCollectionLinks = {
  "productos.html": "index.html#colecciones",
  "productos.html#mesas-coworking": "coworking.html",
  "productos.html#escritorios": "escritorios.html",
  "productos.html#mesas-de-bar": "bar.html",
};

document.querySelectorAll("a[href]").forEach((link) => {
  const replacement = oldCollectionLinks[link.getAttribute("href")];
  if (replacement) {
    link.href = replacement;
  }
});
