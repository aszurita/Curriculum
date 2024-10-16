let isMenuOpen = false;
const savedDarkMode = localStorage.getItem("darkMode");

function toggleMenu() {
  const menu = document.getElementById('menu');
  isMenuOpen = !isMenuOpen;

  if (savedDarkMode === "true") {
    menu.classList.toggle('menu-open-darkmode');
  }else{
    menu.classList.toggle('menu-open');
  }
}