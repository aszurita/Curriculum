let darkMode = false;
let isMenuOpen = false;

window.onload = function () {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "true") {
    darkMode = true;
    document.body.classList.add("dark-mode");
  } else {
    darkMode = false;
  }
  updateThemeIcon();
  updateSocialMediaIcons();
  updateSeparator();
  updateBackgroundIcon();
};

function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode");

  localStorage.setItem("darkMode", darkMode);
  updateThemeIcon();
  updateSocialMediaIcons();
  updateSeparator();
  updateBackgroundIcon();

  if (isMenuOpen) {
    const menu = document.getElementById("menu");
    if (darkMode) {
      menu.classList.remove("menu-open");
      menu.classList.add("menu-open-darkmode");
    } else {
      menu.classList.remove("menu-open-darkmode");
      menu.classList.add("menu-open");
    }
  }
}

function updateThemeIcon() {
  const themeIconImg = document.getElementById("theme-icon-img");
  
  if (darkMode) {
    themeIconImg.src = "/assets/logos/soleado.png";
    themeIconImg.alt = "dark-mode-icon";
    themeIconImg.width = 25;
    themeIconImg.height = 25;
  } else {
    themeIconImg.src = "https://img.icons8.com/ios-filled/50/do-not-disturb-2.png";
    themeIconImg.alt = "light-mode-icon";
    themeIconImg.width = 18;
    themeIconImg.height = 18;
  }
}

function updateSocialMediaIcons() {
  const githubImg = document.getElementById("GitHub");
  const linkedinImg = document.getElementById("LinkedIn");
  const xImg = document.getElementById("x");

  if (!darkMode) {
    githubImg.src = "/assets/icons/githubWhite.png";
    linkedinImg.src = "/assets/icons/linkedinWhite.png";
    xImg.src = "/assets/icons/xWhite.png";
  } else {
    githubImg.src = "/assets/icons/githubBlack.png";
    linkedinImg.src = "/assets/icons/linkedinBlack.png";
    xImg.src = "/assets/icons/xBlack.png";
  }
}

function updateSeparator(){
  const separator = document.getElementById("separator");
  if (darkMode) {
    separator.style.background="white";
  }
  else {
    separator.style.background="black";
  }
}

function updateBackgroundIcon(){
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    if (darkMode) {
      icon.classList.remove("backgroundBlack"); 
      icon.classList.add("backgroundWhite"); 
    } else {
      icon.classList.add("backgroundBlack");
      icon.classList.remove("backgroundWhite");
    }
  });
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  isMenuOpen = !isMenuOpen;

  if (darkMode) {
    menu.classList.toggle("menu-open-darkmode");
  } else {
    menu.classList.toggle("menu-open");
  }
}




// Asociar el evento de clic para cambiar el tema
document.getElementById("toggle-button").addEventListener("click", toggleTheme);
