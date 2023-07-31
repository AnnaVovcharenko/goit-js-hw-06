const elements = {
    NInput : document.querySelector('#name-input'),
    span : document.querySelector('#name-output')
};
elements.NInput.addEventListener("input", handlerInput);
function handlerInput (evt) {
elements.span.textContent = evt.currentTarget.value;
};
