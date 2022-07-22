const navToggle = document.getElementById('nav-toggle');
const bar = document.querySelector('.fa-bars');
const navContent = document.querySelector('.nav-content');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const cards = document.querySelector('.cards')

navToggle.addEventListener('click', () => {
  navContent.classList.toggle('active');
  bar.classList.toggle('fa-xmark');
});

right.addEventListener('click', () => {
  cards.scrollLeft += 250
});

left.addEventListener('click', () => {
  cards.scrollLeft -= 250
});