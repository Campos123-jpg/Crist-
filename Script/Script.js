const slides = document.querySelectorAll('.slide');
let current = 0;
let timer;

function goTo(index) {
  slides[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
}

function startAuto() {
  timer = setInterval(() => {
    goTo((current + 1) % slides.length);
  }, 5000);
}

// passa pro próximo ao clicar
document.querySelector('.slider').addEventListener('click', () => {
  clearInterval(timer);
  goTo((current + 1) % slides.length);
  startAuto(); // reinicia o timer depois do clique
});

startAuto();