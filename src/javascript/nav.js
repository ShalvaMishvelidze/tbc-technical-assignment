const nav = document.querySelector(".nav");

// code for making nav transparent when scrolling
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});
