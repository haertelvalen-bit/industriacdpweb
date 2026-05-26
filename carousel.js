document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const images = Array.from(carousel.querySelectorAll("img"));
  const previous = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  let current = 0;

  function show(index) {
    current = (index + images.length) % images.length;

    images.forEach((image, imageIndex) => {
      image.classList.toggle("active", imageIndex === current);
    });
  }

  previous?.addEventListener("click", () => show(current - 1));
  next?.addEventListener("click", () => show(current + 1));
});
