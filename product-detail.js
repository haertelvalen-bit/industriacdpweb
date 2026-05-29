const products = {
  omega: {
    name: "Omega",
    category: "Mesas coworking",
    categoryUrl: "productos.html#mesas-coworking",
    label: "Tarifa empresas",
    description:
      "Mesa de coworking con patas cerradas. Amplia, resistente y funcional para oficinas, estudios y espacios de trabajo compartido.",
    images: [
      "public/mesas omega/WhatsApp Image 2026-05-27 at 20.58.15.jpeg",
      "public/mesas omega/WhatsApp Image 2026-05-27 at 20.58.16.jpeg",
      "public/mesas omega/WhatsApp Image 2026-05-27 at 20.58.16 (1).jpeg",
      "public/mesas omega/WhatsApp Image 2026-05-27 at 20.58.16 (2).jpeg",
      "public/mesas omega/WhatsApp Image 2026-05-27 at 20.58.16 (3).jpeg",
      "public/mesas omega/WhatsApp Image 2026-05-27 at 20.58.16 (4).jpeg",
    ],
    measures: ["180 x 90 cm", "200 x 100 cm", "240 x 100 cm", "300 x 120 cm"],
  },
  prisma: {
    name: "Prisma",
    category: "Mesas coworking",
    categoryUrl: "productos.html#mesas-coworking",
    label: "Tarifa empresas",
    description:
      "Mesa de coworking de 4 patas con base de hierro y tapa de melamina. Una solución simple, firme y adaptable para espacios colaborativos.",
    images: [
      "public/mesas prisma/WhatsApp Image 2026-05-27 at 20.56.53.jpeg",
      "public/mesas prisma/WhatsApp Image 2026-05-27 at 20.56.54.jpeg",
      "public/mesas prisma/WhatsApp Image 2026-05-27 at 20.56.54 (1).jpeg",
      "public/mesas prisma/WhatsApp Image 2026-05-27 at 20.56.54 (2).jpeg",
      "public/mesas prisma/WhatsApp Image 2026-05-27 at 20.56.54 (3).jpeg",
      "public/mesas prisma/WhatsApp Image 2026-05-27 at 20.56.55.jpeg",
      "public/mesas prisma/WhatsApp Image 2026-05-27 at 20.56.55 (1).jpeg",
    ],
    measures: ["180 x 90 cm", "200 x 100 cm", "240 x 100 cm", "300 x 120 cm"],
  },
  escritorio: {
    name: "Escritorio",
    category: "Escritorios",
    categoryUrl: "productos.html#escritorios",
    label: "Disponible",
    description:
      "Escritorio de uso diario con base de hierro y tapa de melamina. Pensado para oficinas, estudios y espacios de home office.",
    images: [
      "public/escritorio1.JPG",
      "public/escritorio2.JPG",
      "public/escritorio3.JPG",
      "public/escritorio4.JPG",
    ],
    measures: ["120 x 60 cm", "140 x 60 cm", "160 x 60 cm"],
  },
  gerencial: {
    name: "Escritorio gerencial",
    category: "Escritorios",
    categoryUrl: "productos.html#escritorios",
    label: "Disponible",
    description:
      "Escritorio gerencial con base de hierro y tapa de melamina. Mayor presencia visual y superficie cómoda para espacios de dirección.",
    images: ["public/gerencialesL.jpeg", "public/gerencialesL2.jpeg"],
    measures: ["160 x 70 cm", "180 x 80 cm", "200 x 80 cm"],
  },
  delta: {
    name: "Delta",
    category: "Mesas de bar",
    categoryUrl: "productos.html#mesas-de-bar",
    label: "Disponible",
    description:
      "Mesa de bar con base de hierro y tapa de melamina. Resistente, práctica y pensada para espacios comerciales de uso frecuente.",
    images: ["public/delta1.JPG", "public/delta2.JPG", "public/delta3.JPG"],
    measures: ["120 x 60 x 105 cm", "160 x 60 x 105 cm", "180 x 70 x 105 cm"],
  },
  gamma: {
    name: "Gamma",
    category: "Mesas de bar",
    categoryUrl: "productos.html#mesas-de-bar",
    label: "Disponible",
    description:
      "Mesa de bar con estructura de hierro y tapa de melamina. Ideal para cafeterías, barras y zonas de encuentro.",
    images: ["public/gamma1.JPG", "public/gamma2.JPG", "public/gamma3.JPG"],
    measures: ["120 x 60 x 105 cm", "160 x 60 x 105 cm", "180 x 70 x 105 cm"],
  },
  sigma: {
    name: "Sigma",
    category: "Mesas de bar",
    categoryUrl: "productos.html#mesas-de-bar",
    label: "Disponible",
    description:
      "Mesa de bar robusta con base de hierro y tapa de melamina. Diseñada para acompañar ambientes dinámicos y de alto tránsito.",
    images: ["public/sigma1.jpg", "public/sigma2.JPG", "public/sigma3.JPG"],
    measures: ["120 x 60 x 105 cm", "160 x 60 x 105 cm", "180 x 70 x 105 cm"],
  },
};

const params = new URLSearchParams(window.location.search);
const key = params.get("producto") || "omega";
const product = products[key] || products.omega;
const encodedName = encodeURIComponent(product.name);

document.title = `CDP | ${product.name}`;

document.querySelector("[data-breadcrumb]").innerHTML = `
  <a href="index.html">Inicio</a>
  <span>/</span>
  <a href="productos.html">Productos</a>
  <span>/</span>
  <a href="${product.categoryUrl}">${product.category}</a>
  <span>/</span>
  <span>${product.name}</span>
`;

document.querySelector("[data-product-gallery]").innerHTML = `
  <div class="product-main-image">
    ${product.images
      .map(
        (image, index) =>
          `<img${index === 0 ? ' class="active"' : ""} src="${image}" alt="${product.name} vista ${index + 1}" />`,
      )
      .join("")}
    <span>${product.label}</span>
    <button class="gallery-arrow prev" type="button" aria-label="Foto anterior"></button>
    <button class="gallery-arrow next" type="button" aria-label="Foto siguiente"></button>
  </div>
  <div class="product-thumbs">
    ${product.images
      .map(
        (image, index) => `
          <button${index === 0 ? ' class="active"' : ""} type="button" aria-label="Ver foto ${index + 1}">
            <img src="${image}" alt="" />
          </button>
        `,
      )
      .join("")}
  </div>
`;

document.querySelector("[data-product-title]").textContent = product.name;
document.querySelector("[data-product-description]").textContent = product.description;
document.querySelector("[data-product-features]").innerHTML = `
  <div>
    <span>▧</span>
    <strong>Estructura metálica</strong>
    <p>Pintura epoxi</p>
  </div>
  <div>
    <span>▱</span>
    <strong>Tapa de melamina</strong>
    <p>18 mm de espesor</p>
  </div>
  <div>
    <span>⌂</span>
    <strong>Pasacables</strong>
    <p>Opcional</p>
  </div>
`;
document.querySelector("[data-product-measures]").innerHTML = product.measures
  .map((measure) => `<button type="button">${measure}</button>`)
  .join("");

document.querySelector("[data-budget-link]").href = `solicitar-presupuesto.html?producto=${encodedName}`;
document.querySelector("[data-quote-link]").href = `solicitar-presupuesto.html?producto=${encodedName}`;
document.querySelector(
  "[data-whatsapp-link]",
).href = `https://wa.me/5491140742596?text=Hola%2C%20quiero%20consultar%20por%20${encodedName}`;
