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

const questionBtns = document.querySelectorAll(".question");
const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector(".slider-btn-left");
const sliderBtnRight = document.querySelector(".slider-btn-right");
const sliderNavBtns = Array.from(
  document.querySelector(".slider-nav").children
);
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
      <button class="course-btn"><i class="fa-solid fa-arrow-right"></i> კურსის დეტალები</button>
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
    const nextIndex = (slidesArray.indexOf(currentSlide) + 1) % slides.length;
    setSlide(nextIndex);
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

    if (index === 0) {
      setSlide(slides.length - 1);
    } else {
      const newIndex = index - 1;
      setSlide(newIndex);
    }
    resetSlider();
  });

  sliderBtnRight.addEventListener("click", () => {
    const currentSlide = document.querySelector(".slide.active");
    currentSlide.classList.remove("active");
    let index = slidesArray.indexOf(currentSlide);

    if (index === slides.length - 1) {
      setSlide(0);
    } else {
      const newIndex = index + 1;
      setSlide(newIndex);
    }
    resetSlider();
  });

  sliderNavBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentSlide = document.querySelector(".slide.active");
      currentSlide.classList.remove("active");
      setSlide(e.target.dataset.id);
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

          answer.classList.remove("show");
          arrowDown.classList.add("show");
          arrowUp.classList.remove("show");
        }
      });

      answer.classList.toggle("show");
      arrowDown.classList.toggle("show");
      arrowUp.classList.toggle("show");
    });
  });
};

activateSlider();
activateQuestions();
