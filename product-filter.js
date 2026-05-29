document.querySelectorAll(".product-showcase").forEach((showcase) => {
  const tabs = [...showcase.querySelectorAll(".category-tabs a[data-filter]")];
  const families = [...showcase.querySelectorAll(".product-family[data-category]")];
  const splitGroups = [...showcase.querySelectorAll(".split-families")];

  if (!tabs.length || !families.length) {
    return;
  }

  const hashFilters = {
    "#mesas-coworking": "coworking",
    "#escritorios": "escritorios",
    "#mesas-de-bar": "bar",
  };

  const applyFilter = (filter) => {
    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.filter === filter);
    });

    families.forEach((family) => {
      family.classList.toggle("is-hidden", filter !== "all" && family.dataset.category !== filter);
    });

    splitGroups.forEach((group) => {
      const visibleFamilies = [...group.querySelectorAll(".product-family[data-category]")].filter(
        (family) => !family.classList.contains("is-hidden"),
      );

      group.classList.toggle("is-hidden", visibleFamilies.length === 0);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      const filter = tab.dataset.filter;

      if (!filter) {
        return;
      }

      event.preventDefault();
      applyFilter(filter);

      if (filter === "all") {
        history.replaceState(null, "", tab.pathname.endsWith("/productos.html") ? "productos.html" : "#productos");
        return;
      }

      const targetHash = tab.hash || "";
      if (targetHash) {
        history.replaceState(null, "", targetHash);
      }
    });
  });

  applyFilter(hashFilters[window.location.hash] || "all");
});
