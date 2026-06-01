document.querySelectorAll("[data-product-gallery]").forEach((gallery) => {
  const images = Array.from(gallery.querySelectorAll(".product-main-image img"));
  const thumbs = Array.from(gallery.querySelectorAll(".product-thumbs button"));
  const previous = gallery.querySelector(".prev");
  const next = gallery.querySelector(".next");
  let current = 0;

  function show(index) {
    current = (index + images.length) % images.length;

    images.forEach((image, imageIndex) => {
      image.classList.toggle("active", imageIndex === current);
    });

    thumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle("active", thumbIndex === current);
    });
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => show(index));
  });

  previous?.addEventListener("click", () => show(current - 1));
  next?.addEventListener("click", () => show(current + 1));

  show(current);
});
