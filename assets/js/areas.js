const info = {
  areas: [
    {
      name: "Data Science / AI",
      imagen: "assets/skills/DataScience.png",
      phrase: "Artificial intelligence is the new electricity.",
      author: "Andrew Ng",
      placework: "Stanford University",
    },
    {
      name: "Full Stack Developer",
      imagen: "assets/skills/Fronted.png",
      phrase: "The web is a canvas for creativity.",
      author: "Evan You",
      placework: "Creator of Vue.js"
    },
    {
      name: "Designer UX",
      imagen: "assets/skills/Desing.png",
      phrase: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Don Norman",
      placework: "Nielsen Norman Group"
    }
  ]
};

const skillsSection = document.getElementById("area-section");

info.areas.forEach(area => {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skills-section";
  
  skillDiv.innerHTML = `
    <div class="skills-content">
      <div class="skills-icon">
        <img src="${area.imagen}" alt="${area.name}">
      </div>
      <h2 class="skills-name">${area.name}</h2>
      <div class="skills-phrase">
        <p><i>"${area.phrase}"</i></p>
        <p><strong>${area.author}, </strong>${area.placework}</p>
      </div>
    </div>
  `;

  skillsSection.appendChild(skillDiv);
});
