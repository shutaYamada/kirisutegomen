const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const menuIconBars = document.getElementById('menuIconBars');
const menuIconX = document.getElementById('menuIconX');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('translate-x-full');
  menuIconBars.classList.toggle('invisible');
  menuIconX.classList.toggle('invisible');

});