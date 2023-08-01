const controlImput = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

controlImput.addEventListener('input', handlerInput);
function handlerInput(event) {
     span.style.fontSize = `${event.currentTarget.value}px`;
};