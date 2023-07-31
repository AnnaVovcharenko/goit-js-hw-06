const ControlImput = document.querySelector('#font-size-control');
const span = document.querySelector('#text');


ControlImput.addEventListener('input', handlerInput);
function handlerInput(event) {        
     span.style.fontSize = `${event.currentTarget.value}px`;
     console.dir(handlerInput);
    };

