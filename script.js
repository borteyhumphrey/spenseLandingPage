"use strict";
window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });
  const mobileNav = document.querySelector(".nav-mobile");
  const hamburger = document.querySelector(".hamburger");

  const mobileMenu = function () {
    hamburger.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
  };

  hamburger.addEventListener("click", mobileMenu);
};

