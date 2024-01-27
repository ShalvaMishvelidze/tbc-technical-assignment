import "./index.html";
import "./sass/main.scss";
import ios from "./assets/images/ios.jpg";
import react from "./assets/images/react.jpg";
import pythonIntro from "./assets/images/python-intro.jpg";
import pythonAdvanced from "./assets/images/python-advanced.jpg";
import cybersecurity from "./assets/images/cybersecurity.jpg";
import tot from "./assets/images/tot.jpg";
import blockchain from "./assets/images/blockchain.jpg";
import devops from "./assets/images/devops.jpg";
import infoSecGov from "./assets/images/info-security-gov.jpg";

const data = [
  {
    img: ios,
    title: "iOS Development",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: react,
    title: "React",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: pythonIntro,
    title: "Intro to Python",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: pythonAdvanced,
    title: "Advanced Python",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: cybersecurity,
    title: "Advanced Cybersecurity Course",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: tot,
    title: "ToT - Training of Trainers",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: blockchain,
    title: "Blockchain",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: devops,
    title: "DevOps",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    img: infoSecGov,
    title: "Information Security Governance",
    status: "რეგისტრაცია დასრულებულია",
  },
];

const nav = document.querySelector(".nav");
const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector(".slider-btn-left");
const sliderBtnRight = document.querySelector(".slider-btn-right");
const sliderNavBtns = Array.from(
  document.querySelector(".slider-nav").children
);
const questionBtns = document.querySelectorAll(".question");
const coursesContainer = document.querySelector(".courses-container");
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

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

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

const activateSlider = () => {
  let intervalId;
  const slidesArray = Array.from(slides);

  const setSlide = (id) => {
    slides[id].classList.add("active");
  };

  const showNextSlide = () => {
    const currentSlide = document.querySelector(".slide.active");
    currentSlide.classList.remove("active");
    const index = slidesArray.indexOf(currentSlide);
    const nextIndex = (index + 1) % slides.length;
    sliderNavBtns[index].classList.remove("active");
    setSlide(nextIndex);
    sliderNavBtns[nextIndex].classList.add("active");
  };

  const startSlider = () => {
    intervalId = setInterval(showNextSlide, 4000);
  };

  const resetSlider = () => {
    clearInterval(intervalId);
    startSlider();
  };

  startSlider();

  sliderBtnLeft.addEventListener("click", () => {
    const currentSlide = document.querySelector(".slide.active");
    currentSlide.classList.remove("active");
    let index = slidesArray.indexOf(currentSlide);
    sliderNavBtns[index].classList.remove("active");

    if (index === 0) {
      setSlide(slides.length - 1);
      sliderNavBtns[slides.length - 1].classList.add("active");
    } else {
      const newIndex = index - 1;
      setSlide(newIndex);
      sliderNavBtns[newIndex].classList.add("active");
    }
    resetSlider();
  });

  sliderBtnRight.addEventListener("click", () => {
    const currentSlide = document.querySelector(".slide.active");
    currentSlide.classList.remove("active");
    let index = slidesArray.indexOf(currentSlide);

    if (index === slides.length - 1) {
      setSlide(0);
      sliderNavBtns[0].classList.add("active");
    } else {
      const newIndex = index + 1;
      setSlide(newIndex);
      sliderNavBtns[newIndex].classList.add("active");
    }
    resetSlider();
  });

  sliderNavBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentSlide = document.querySelector(".slide.active");
      currentSlide.classList.remove("active");
      let index = slidesArray.indexOf(currentSlide);
      sliderNavBtns[index].classList.remove("active");
      setSlide(e.target.dataset.id);
      sliderNavBtns[e.target.dataset.id].classList.add("active");
      resetSlider();
    });
  });
};

const activateQuestions = () => {
  questionBtns.forEach((questionBtn) => {
    const answer = questionBtn.parentElement.querySelector(".answer");
    const arrowDown = questionBtn.querySelector(".fa-chevron-down");
    const arrowUp = questionBtn.querySelector(".fa-chevron-up");

    questionBtn.addEventListener("click", () => {
      questionBtns.forEach((btn) => {
        if (questionBtn !== btn) {
          const answer = btn.parentElement.querySelector(".answer");
          const arrowDown = btn.querySelector(".fa-chevron-down");
          const arrowUp = btn.querySelector(".fa-chevron-up");

          answer.classList.remove("shown");
          arrowDown.classList.add("shown");
          arrowUp.classList.remove("shown");
        }
      });

      answer.classList.toggle("shown");
      arrowDown.classList.toggle("shown");
      arrowUp.classList.toggle("shown");
    });
  });
};

activateSlider();
activateQuestions();
