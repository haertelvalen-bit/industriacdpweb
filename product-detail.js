const products = {
  omega: {
    name: "Omega",
    category: "Mesas coworking",
    categoryUrl: "productos.html#mesas-coworking",
    label: "Tarifa empresas",
    description:
      "Mesa de coworking con patas cerradas. Amplia, resistente y funcional para oficinas, estudios y espacios de trabajo compartido.",
    images: [
      "public/mesas omega/omega-horizontal-1.png",
      "public/mesas omega/omega-horizontal-2.png",
      "public/mesas omega/omega-horizontal-3.png",
      "public/mesas omega/omega-horizontal-4.png",
      "public/mesas omega/omega-horizontal-5.png",
      "public/mesas omega/omega-horizontal-6.png",
    ],
    containImages: true,
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
      "public/mesas prisma/horizontal/prisma-horizontal-1.png",
      "public/mesas prisma/horizontal/prisma-horizontal-2.png",
      "public/mesas prisma/horizontal/prisma-horizontal-3.png",
      "public/mesas prisma/horizontal/prisma-horizontal-4.jpeg",
      "public/mesas prisma/horizontal/prisma-horizontal-5.png",
      "public/mesas prisma/horizontal/prisma-horizontal-6.png",
      "public/mesas prisma/horizontal/prisma-horizontal-7.png",
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
      "public/escritorios-horizontal/escritorio-horizontal-1.png",
      "public/escritorios-horizontal/escritorio-horizontal-2.png",
      "public/escritorios-horizontal/escritorio-horizontal-3.JPG",
      "public/escritorios-horizontal/escritorio-horizontal-4.JPG",
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
    images: [
      "public/gerenciales-horizontal/gerencial-horizontal-1.png",
      "public/gerenciales-horizontal/gerencial-horizontal-2.jpeg",
    ],
    measures: ["160 x 70 cm", "180 x 80 cm", "200 x 80 cm"],
  },
  delta: {
    name: "Delta",
    category: "Mesas de bar",
    categoryUrl: "productos.html#mesas-de-bar",
    label: "Disponible",
    description:
      "Mesa de bar con base de hierro y tapa de melamina. Resistente, práctica y pensada para espacios comerciales de uso frecuente.",
    images: [
      "public/delta/delta-horizontal-1.png",
      "public/delta/delta-horizontal-2.png",
    ],
    containImages: true,
    measures: ["120 x 60 x 105 cm", "160 x 60 x 105 cm", "180 x 70 x 105 cm"],
  },
  gamma: {
    name: "Gamma",
    category: "Mesas de bar",
    categoryUrl: "productos.html#mesas-de-bar",
    label: "Disponible",
    description:
      "Mesa de bar con estructura de hierro y tapa de melamina. Ideal para cafeterías, barras y zonas de encuentro.",
    images: [
      "public/bar-horizontal/gamma-horizontal-1.png",
      "public/bar-horizontal/gamma-horizontal-2.png",
      "public/bar-horizontal/gamma-horizontal-3.png",
    ],
    measures: ["120 x 60 x 105 cm", "160 x 60 x 105 cm", "180 x 70 x 105 cm"],
  },
  sigma: {
    name: "Sigma",
    category: "Mesas de bar",
    categoryUrl: "productos.html#mesas-de-bar",
    label: "Disponible",
    description:
      "Mesa de bar robusta con base de hierro y tapa de melamina. Diseñada para acompañar ambientes dinámicos y de alto tránsito.",
    images: [
      "public/bar-horizontal/sigma-horizontal-1.png",
      "public/bar-horizontal/sigma-horizontal-2.png",
      "public/bar-horizontal/sigma-horizontal-3.png",
    ],
    measures: ["120 x 60 x 105 cm", "160 x 60 x 105 cm", "180 x 70 x 105 cm"],
  },
};

const params = new URLSearchParams(window.location.search);
const key = params.get("producto") || "omega";
const product = products[key] || products.omega;
const encodedName = encodeURIComponent(product.name);
const finishes = [
  { key: "natural", label: "Natural" },
  { key: "walnut", label: "Nogal" },
  { key: "dark", label: "Oscuro" },
  { key: "white", label: "Blanco" },
];
let selectedMeasure = product.measures[0];
let selectedFinish = finishes[0].label;

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
  <div class="product-main-image${product.containImages ? " contain-image" : ""}">
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
            <img${product.containImages ? ' class="contain-image"' : ""} src="${image}" alt="" />
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
  .map(
    (measure, index) =>
      `<button${index === 0 ? ' class="active" aria-pressed="true"' : ' aria-pressed="false"'} type="button" data-measure="${measure}">${measure}</button>`,
  )
  .join("");
document.querySelector("[data-product-finishes]").innerHTML = finishes
  .map(
    (finish, index) =>
      `<button class="finish ${finish.key}${index === 0 ? " active" : ""}" type="button" data-finish-label="${finish.label}" aria-label="Seleccionar color ${finish.label}" aria-pressed="${index === 0 ? "true" : "false"}"></button>`,
  )
  .join("");

const budgetLink = document.querySelector("[data-budget-link]");
const quoteLink = document.querySelector("[data-quote-link]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const measureButtons = [...document.querySelectorAll("[data-product-measures] button")];
const finishButtons = [...document.querySelectorAll("[data-product-finishes] button")];

function updateContactLinks() {
  const productQuery = encodeURIComponent(
    `${product.name} - ${selectedMeasure} - color ${selectedFinish}`,
  );
  const message = encodeURIComponent(
    `Hola, quiero consultar por ${product.name}. Medida: ${selectedMeasure}. Color: ${selectedFinish}.`,
  );

  budgetLink.href = `solicitar-presupuesto.html?producto=${productQuery}`;
  quoteLink.href = `solicitar-presupuesto.html?producto=${productQuery}`;
  whatsappLink.href = `https://wa.me/5491144959533?text=${message}`;
}

measureButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedMeasure = button.dataset.measure;

    measureButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    updateContactLinks();
  });
});

finishButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedFinish = button.dataset.finishLabel;

    finishButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    updateContactLinks();
  });
});

updateContactLinks();
