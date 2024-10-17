const experiences = [
  {
      date: "30/09/2024 - Current",
      title: "Teaching Assistant for Design Software",
      place: "Escuela Superior Politécnica del Litoral (ESPOL), Guayaquil, Ecuador",
      description: [
          "Perform 2 hours of class-related tasks per week.",
          "Dedicate 2 hours per week to grading assignments and exams.",
          "Offer 1 hour of consultation per week for students."
      ]
  },
  {
      date: "01/05/2024 - Current",
      title: "Teaching Assistant for Fundamentals of Programming",
      place: "Escuela Superior Politécnica del Litoral (ESPOL), Guayaquil, Ecuador",
      description: [
          "Perform 2 hours of class-related tasks per week.",
          "Dedicate 2 hours per week to grading assignments and exams.",
          "Offer 1 hour of consultation per week for students."
      ]
  },
  {
      date: "01/04/2024 - Current",
      title: "Vice President TAWS",
      place: "Guayaquil, Ecuador",
      description: [
          "Direct applied research projects for publication in conferences.",
          "Coordinate workshops, meetings, talks, and hackathons to enhance the technical skills of members.",
          "Encourage the development of software projects and the learning of new technologies."
      ]
  },
  {
      date: "18/03/2024 - Current",
      title: "Leader of the Official WiDS ESPOL 2024 Website",
      place: "WIDS, Guayaquil, Ecuador",
      description: [
          "Oversee the development and maintenance of the WiDS ESPOL 2024 website.",
          "Lead a team to implement key functionalities, optimizing user experience and site performance."
      ]
  }
];

const experienceContainer = document.querySelector('.experiences');

experiences.forEach(exp => {
  const experienceDiv = document.createElement('div');
  experienceDiv.className = 'experience';
  
  const dateDiv = document.createElement('div');
  dateDiv.className = 'date';
  dateDiv.innerHTML = `<p>${exp.date}</p>`;
  
  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'details';
  
  detailsDiv.innerHTML = `
      <p class="title">${exp.title}</p>
      <p class="place">${exp.place}</p>
      <div class="description">
          ${exp.description.map(desc => `
              <div class="description-item">
                  <svg width="14" height="14" class="!min-w-[14px]">
                      <circle cx="7" cy="7" r="6" stroke="#f8f9fa" stroke-width="2" fill="#69b3a2" />
                  </svg>
                  <p class="descI">${desc}</p>
              </div>`).join('')}
      </div>
  `;
  
  experienceDiv.appendChild(dateDiv);
  experienceDiv.appendChild(detailsDiv);
  experienceContainer.appendChild(experienceDiv);
});
