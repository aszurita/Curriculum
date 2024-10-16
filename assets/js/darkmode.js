let darkMode = false;
window.onload = function () {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "true") {
    darkMode = true;
    document.body.classList.add("dark-mode");
    updateThemeIcon();
  } else {
    darkMode = false;
    updateThemeIcon();
  }
};
function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode");

  // Guardar el estado en localStorage
  localStorage.setItem("darkMode", darkMode);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeIconImg = document.getElementById("theme-icon-img");

  if (darkMode) {
    themeIconImg.src = "/assets/logos/soleado.png";
    themeIconImg.alt = "dark-mode-icon";
    themeIconImg.width = 25;
    themeIconImg.height = 25;
  } else {
    themeIconImg.src =
      "https://img.icons8.com/ios-filled/50/do-not-disturb-2.png";
    themeIconImg.alt = "light-mode-icon";
  }
}
