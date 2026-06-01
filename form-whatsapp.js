const whatsappNumber = "5491144959533";

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = form.querySelector("h1")?.textContent.trim() || "Consulta";
    const formData = new FormData(form);
    const lines = [`Hola, quiero hacer una consulta: ${title}`];

    formData.forEach((value, key) => {
      const text = String(value).trim();

      if (text) {
        lines.push(`${key}: ${text}`);
      }
    });

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
});
