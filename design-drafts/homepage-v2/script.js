const filterButtons = document.querySelectorAll("[data-filter]");
const publications = document.querySelectorAll(".publication");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");

const applyFilter = (filter) => {
  publications.forEach((publication) => {
    const isSelected = publication.classList.contains("selected");
    publication.classList.toggle("hidden", filter === "selected" && !isSelected);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    applyFilter(button.dataset.filter);
  });
});

applyFilter("selected");

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
