const btn = document.querySelector('.change-color');
const changeColorSpan = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  changeColorSpan.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
