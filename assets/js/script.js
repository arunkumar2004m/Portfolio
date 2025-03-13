// JavaScript for Mobile Menu Toggle

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeButton = document.querySelector(".x");
    const menuLinks = document.querySelectorAll(".menubarLinks a"); // Select all menu links

    // Open sidebar when clicking the menu button
    menuToggle.addEventListener("click", function () {
      sidebar.style.left = "0"; // Open sidebar
    });

    // Close sidebar when clicking the 'X' button
    closeButton.addEventListener("click", function () {
      sidebar.style.left = "-60%"; // Close sidebar
    });

    // Close sidebar when clicking a menu item
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        sidebar.style.left = "-60%"; // Hide sidebar after clicking
      });
    });
  });


function about() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function project() {
    document.getElementById("project").scrollIntoView({ behavior: "smooth" });
}

function skill() {
    document.getElementById("skill").scrollIntoView({ behavior: "smooth" });

}

function contact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}





const project1 = (url) => window.open(url, "_blank"); // Opens URL in a new tab
const project2 = (url) => (window.location.href = url); // Opens URL in a new tab
const project3 = (url) => window.open(url, "_blank"); // Opens URL in a new tab



