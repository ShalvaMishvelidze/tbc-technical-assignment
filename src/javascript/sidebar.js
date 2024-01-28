const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarContainer = document.querySelector(".sidebar-container");

sidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sidebarBtn.classList.remove("active");
  sidebarContainer.classList.remove("active");
});

sidebarContainer.addEventListener("click", (e) => {
  // if we don't stop porpagation on the sidebar container
  // the sidebar will close when we click on one of the nav links
  e.stopPropagation();
});

sidebarBtn.addEventListener("click", () => {
  sidebarBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidebarContainer.classList.toggle("active");
});
