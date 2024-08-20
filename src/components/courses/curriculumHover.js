document.addEventListener("DOMContentLoaded", function () {
    const modules = document.querySelectorAll(".curriculum-list li");
  
    modules.forEach((module) => {
      module.addEventListener("mouseover", function () {
        const subtopicsDisplay = this.querySelector(".subtopics-display");
        if (subtopicsDisplay) {
          subtopicsDisplay.style.display = "block";
        }
      });
  
      module.addEventListener("mouseleave", function () {
        const subtopicsDisplay = this.querySelector(".subtopics-display");
        if (subtopicsDisplay) {
          subtopicsDisplay.style.display = "none";
        }
      });
    });
  });
  