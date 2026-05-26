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
