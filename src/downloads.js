document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".download-tab");
  const panels = document.querySelectorAll(".download-panel");
  const searchInput = document.getElementById("downloadSearch");
  const noResults = document.getElementById("downloadNoResults");

  if (!tabs.length || !panels.length || !searchInput || !noResults) return;

  let activeTab = "emudhra";

  function filterDownloads() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    panels.forEach(function (panel) {
      const isActive = panel.id === "panel-" + activeTab;

      panel.classList.toggle("hidden", !isActive);

      if (!isActive) return;

      const cards = panel.querySelectorAll(".download-card");

      cards.forEach(function (card) {
        const matches = card.textContent.toLowerCase().includes(query);
        card.classList.toggle("hidden", !matches);

        if (matches) visibleCount++;
      });

      // Hide category headings when all cards under them are hidden.
      panel.querySelectorAll(".download-list").forEach(function (list) {
        const visibleCards = list.querySelectorAll(".download-card:not(.hidden)");
        const group = list.parentElement;

        if (group) {
          group.classList.toggle("hidden", visibleCards.length === 0);
        }
      });
    });

    noResults.classList.toggle("hidden", visibleCount !== 0);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activeTab = tab.dataset.tab;

      tabs.forEach(function (item) {
        const selected = item === tab;

        item.classList.toggle("bg-emerald-600", selected);
        item.classList.toggle("text-white", selected);
        item.classList.toggle("text-slate-600", !selected);
        item.classList.toggle("hover:bg-slate-100", !selected);
      });

      filterDownloads();
    });
  });

  searchInput.addEventListener("input", filterDownloads);

  filterDownloads();
});