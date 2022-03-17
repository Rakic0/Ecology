"use strict";

function elScroll(el) {
  document
    .getElementById(`${el}`)
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

const menu = document.querySelector(".hamburger");
const navOpen = document.querySelector(".mobile-nav");

menu.addEventListener("click", function () {
  menu.classList.toggle("open");
  navOpen.classList.toggle("nav-open");
});
