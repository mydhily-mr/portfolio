const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

// Toggle + save
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


// ===== ACTIVE NAVIGATION =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  const scrollMiddle = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollMiddle >= sectionTop && scrollMiddle <= sectionBottom) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ===== HAMBURGER MENU =====

const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");

  const isOpen = navLinksContainer.classList.contains("active");

  // Change icon
  hamburger.textContent = isOpen ? "✖" : "☰";
});

// Auto close after click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
    hamburger.textContent = "☰"; // reset icon
  });
});