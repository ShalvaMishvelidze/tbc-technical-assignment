const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector(".slider-btn-left");
const sliderBtnRight = document.querySelector(".slider-btn-right");
const sliderNavBtns = Array.from(
  document.querySelector(".slider-nav").children
);

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
