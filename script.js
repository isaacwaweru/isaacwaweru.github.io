// Define animation functions
function fadeIn(element) {
  element.style.opacity = "0";
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.1;
    element.style.opacity = opacity.toString();
    if (opacity >= 1) {
      clearInterval(interval);
    }
  }, 100);
}

function slideInFromLeft(element) {
  element.style.transform = "translateX(-100%)";
  let position = -100;
  const interval = setInterval(() => {
    position += 10;
    element.style.transform = `translateX(${position}%)`;
    if (position >= 0) {
      clearInterval(interval);
    }
  }, 50);
}

function slideInFromRight(element) {
  element.style.transform = "translateX(100%)";
  let position = 100;
  const interval = setInterval(() => {
    position -= 10;
    element.style.transform = `translateX(${position}%)`;
    if (position <= 0) {
      clearInterval(interval);
    }
  }, 50);
}

// Trigger animations when the page is loaded
window.onload = function () {
  const aboutSection = document.getElementById("about");
  const projectsSection = document.getElementById("projects");
  const aboutContent = document.querySelector(".about-content");
  const projectsContent = document.querySelector(".projects-content");

  fadeIn(aboutSection);
  fadeIn(projectsSection);
  slideInFromLeft(aboutContent);
  slideInFromRight(projectsContent);
};
