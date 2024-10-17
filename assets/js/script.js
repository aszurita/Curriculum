document.addEventListener("DOMContentLoaded", function () {
  const darkMode = localStorage.getItem("darkMode") === "true"; // Simulación del darkMode

  // Cargar contenido de "About Me"
  const aboutMeContent = `
<div>
  <div class="about-text">
    <div class="name-header">
        <span class="texthover">A</span>
        <span class="texthover">N</span>
        <span class="texthover">G</span>
        <span class="texthover">E</span>
        <span class="texthover">L</span>
        <span class="texthover">O</span>
        <span>&nbsp;</span>
        <img src="./assets/logos/logo.png" alt="Logo" class="logo-img">
        <span>&nbsp;</span>
        <span class="texthover">Z</span>
        <span class="texthover">U</span>
        <span class="texthover">R</span>
        <span class="texthover">I</span>
        <span class="texthover">T</span>
        <span class="texthover">A</span>
    </div>
    <div class="separator" id="separator"></div>
    <div class="social-media">
      <div class="social-icon">
        <a href="https://github.com" target="_blank" class="center">
          <img src="./assets/icons/githubWhite.png" alt="GitHub" id="GitHub" />
        </a>
      </div>
      <div class="social-icon">
        <a href="https://linkedin.com" target="_blank" class="center">
          <img src="./assets/icons/linkedinWhite.png" alt="LinkedIn"  id="LinkedIn"/>
        </a>
      </div>
      <div class="social-icon">
        <a href="https://twitter.com" target="_blank" class="center">
          <img src="./assets/icons/xWhite.png" alt="x" id="X" class="xdimension" />
        </a>
      </div>
    </div>
  </div>
  <div class="center infoHome">
      <span>👋 Hi! <strong>I'm Angelo Saul Zurita Guerrero</strong>, a Computer Science student from Ecuador with a strong passion for programming and artificial intelligence. 
      Currently, I serve as the Vice President of TAWS and a Teaching Assistant at ESPOL, where I lead research projects and support students in their learning journey. 
      I am particularly interested in data science and computer vision, and I actively seek opportunities to apply my skills in real-world projects. 
      I'm excited to connect and collaborate with others in the tech community! 🚀</span>
  </div>
</div>
  `;

  // Asegúrate de que el elemento exista antes de intentar cambiar su contenido
  const aboutMePlaceholder = document.getElementById("about-me-placeholder");

  if (aboutMePlaceholder) {
    aboutMePlaceholder.innerHTML = aboutMeContent;
  } else {
    console.error("Element with ID 'about-me-placeholder' not found.");
  }

  // Cargar partículas y estadísticas
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.onload = resolve;
      script.onerror = () =>
        reject(new Error(`Error cargando el script: ${src}`));
      document.body.appendChild(script);
    });
  };

  Promise.all([
    loadScript("../assets/js/particles.js"),
    loadScript("../assets/js/stats.js"),
  ])
    .then(() => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#808080" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 6 },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error al cargar las partículas o estadísticas:", error);
    });
});
