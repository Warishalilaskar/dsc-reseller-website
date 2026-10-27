
/* =========================================
   FAQ PAGE START
   File: FAQ.JS
   ========================================= */

function showContent(type) {
  const digitalFaq = document.getElementById("digital-faq");
  const etokenFaq = document.getElementById("etoken-faq");

  const digitalTab = document.getElementById("tab-digital");
  const etokenTab = document.getElementById("tab-etoken");

  if (!digitalFaq || !etokenFaq || !digitalTab || !etokenTab) {
    console.error("FAQ Error: Required FAQ elements not found.");
    return;
  }

  if (type === "digital") {
    digitalFaq.classList.remove("hidden");
    etokenFaq.classList.add("hidden");

    digitalTab.classList.add("bg-emerald-600", "text-white");
    digitalTab.classList.remove(
      "border", "border-slate-300", "bg-white", "text-slate-700"
    );

    etokenTab.classList.remove("bg-emerald-600", "text-white");
    etokenTab.classList.add(
      "border", "border-slate-300", "bg-white", "text-slate-700"
    );
  } else if (type === "etoken") {
    digitalFaq.classList.add("hidden");
    etokenFaq.classList.remove("hidden");

    etokenTab.classList.add("bg-emerald-600", "text-white");
    etokenTab.classList.remove(
      "border", "border-slate-300", "bg-white", "text-slate-700"
    );

    digitalTab.classList.remove("bg-emerald-600", "text-white");
    digitalTab.classList.add(
      "border", "border-slate-300", "bg-white", "text-slate-700"
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showContent("digital");
});

/* FAQ PAGE END */
