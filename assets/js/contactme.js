document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alert = document.getElementById("alert");
  const subject = document.getElementById("subject");
  const otherSubjectContainer = document.getElementById("other-subject-container");

  subject.addEventListener("change", (e) => {
    if (e.target.value === "Other") {
      otherSubjectContainer.classList.remove("hidden");
    } else {
      otherSubjectContainer.classList.add("hidden");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    alert.classList.remove("hidden");

    // Reset form fields
    form.reset();
    
    // Hide the alert after 3 seconds
    setTimeout(() => {
      alert.classList.add("hidden");
    }, 3000);
  });
});
