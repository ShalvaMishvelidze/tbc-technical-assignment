const questionBtns = document.querySelectorAll(".question");

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

        // we need to remove shown class from the current active element
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
