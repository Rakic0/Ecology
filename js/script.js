"use strict";

function elScroll(el) {
  document
    .getElementById(`${el}`)
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

const menu = document.querySelector(".hamburger");
const navOpen = document.querySelector(".mobile-nav");
const scroll = document.querySelector(".scroll-link");

function toggleMenu() {
  menu.classList.toggle("open");
  navOpen.classList.toggle("nav-open");
}

menu.addEventListener("click", function () {
  toggleMenu();
});

scroll.addEventListener("click", function () {
  toggleMenu();
});
