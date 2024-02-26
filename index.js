const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const body = document.querySelector(".body");
menu.addEventListener("click", () => {
  nav.classList.add("nav--open");
  menu.classList.add("menu--hidden");
  close.classList.add("close--show");
  body.classList.add("body--no-scroll");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav--open");
  menu.classList.remove("menu--hidden");
  close.classList.remove("close--show");
  body.classList.remove("body--no-scroll");
});
