const elements = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color')
}

elements.button.addEventListener('click', onClick);

function onClick(evt) {
  elements.body.style.backgroundColor = getRandomHexColor();
  elements.spanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
