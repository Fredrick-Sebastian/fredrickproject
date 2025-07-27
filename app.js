// app.js

// Select toggle button and nav links
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Add click event to toggle the menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
