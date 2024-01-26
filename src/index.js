import "./index.html";
import "./sass/main.scss";

const questionBtns = document.querySelectorAll(".question");
const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector(".slider-btn-left");
const sliderBtnRight = document.querySelector(".slider-btn-right");
const sliderNavBtns = Array.from(
  document.querySelector(".slider-nav").children
);

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
