const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});
