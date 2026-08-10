const filterButtons = document.querySelectorAll("[data-filter]");
const publications = document.querySelectorAll(".publication");
const newsToggle = document.querySelector("[data-news-toggle]");
const extraNewsItems = document.querySelectorAll(".news-extra");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");

const applyFilter = (filter) => {
  publications.forEach((publication) => {
    const isSelected = publication.classList.contains("selected");
    const shouldHide = filter === "selected" && !isSelected;

    publication.classList.toggle("hidden", shouldHide);
    publication.hidden = shouldHide;
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    applyFilter(button.dataset.filter);
  });
});

applyFilter("selected");

const setNewsExpanded = (isExpanded) => {
  extraNewsItems.forEach((item) => {
    item.hidden = !isExpanded;
  });

  if (newsToggle) {
    newsToggle.setAttribute("aria-expanded", String(isExpanded));
    newsToggle.textContent = isExpanded ? "show less" : "show more";
  }
};

if (newsToggle && extraNewsItems.length) {
  newsToggle.hidden = false;
  newsToggle.addEventListener("click", () => {
    setNewsExpanded(newsToggle.getAttribute("aria-expanded") !== "true");
  });
  setNewsExpanded(false);
}

const currentTheme = () => {
  return document.documentElement.dataset.theme || (themeMedia.matches ? "dark" : "light");
};

const updateThemeToggle = () => {
  if (!themeToggle) return;

  const theme = currentTheme();
  const icon = themeToggle.querySelector("i");
  const label = themeToggle.querySelector("span");

  icon.className = theme === "dark" ? "fa-regular fa-sun" : "fa-regular fa-moon";
  label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {}

    updateThemeToggle();
  });

  themeMedia.addEventListener("change", () => {
    if (!document.documentElement.dataset.theme) updateThemeToggle();
  });

  updateThemeToggle();
}
