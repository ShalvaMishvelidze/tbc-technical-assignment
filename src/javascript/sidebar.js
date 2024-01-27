const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarContainer = document.querySelector(".sidebar-container");

sidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sidebarBtn.classList.remove("active");
  sidebarContainer.classList.remove("active");
});
sidebarContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
sidebarBtn.addEventListener("click", () => {
  sidebarBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidebarContainer.classList.toggle("active");
});
