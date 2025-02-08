const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const body = document.body;
const menuLinks = document.querySelectorAll(".nav-links a");

// Toggle menu visibility
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sideMenu.classList.toggle("active");
  body.classList.toggle("blur-active");
});

// Close menu and navigate on menu link click
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute("href").substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);

    // Smoothly scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Close the menu
    hamburger.classList.remove("active");
    sideMenu.classList.remove("active");
    body.classList.remove("blur-active");
  });
});




document.getElementById("hamburger").addEventListener("click", function() {
  
});
