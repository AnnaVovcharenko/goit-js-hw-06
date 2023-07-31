const elements = {
  body : document.querySelector('body'),
  button : document.querySelector('.change-color'),
  spanColor : document.querySelector('.color')
}

elements.button.addEventListener('click', onClick)
function onClick(evt) {
  let randomColor = getRandomHexColor();
  elements.body.style.backgroundColor = randomColor;
  elements.spanColor.textContent = randomColor;

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
