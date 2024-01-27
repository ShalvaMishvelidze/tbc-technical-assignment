import { data } from "./data.js";

const coursesContainer = document.querySelector(".courses-container");

coursesContainer.innerHTML = data
  .map((course) => {
    return `
    <article class="course">
      <img
        src="${course.img}"
        alt="${course.title}"
        class="course-img"
      />
      <p class="course-header">${course.title}</p>
      <p class="course-status">${course.status}</p>
      <button class="course-btn"><i class="fa-solid fa-arrow-right"></i><span>კურსის დეტალები</span></button>
    </article>
  `;
  })
  .join("");
