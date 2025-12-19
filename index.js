const questionSection = document.querySelectorAll('.js-question-section');
   
questionSection.forEach((question) => {
  question.addEventListener('click', () => {
    const id = question.dataset.answerId;
    const answer = document.querySelector(`.js-answer[data-answer-id="${id}"]`);
    const icon = question.querySelector('.plus-icon');

    answer.classList.toggle('visible');

    if(answer.classList.contains('visible')) {
      icon.src = "assets/images/icon-minus.svg";
    } else {
      icon.src = "assets/images/icon-plus.svg";
    }
  })
});