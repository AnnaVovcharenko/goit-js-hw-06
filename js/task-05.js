const elements = {
    nInput : document.querySelector('#name-input'),
    span : document.querySelector('#name-output')
};
elements.nInput.addEventListener("input", handlerInput);
function handlerInput (evt) {
elements.span.textContent = evt.currentTarget.value;
if (evt.currentTarget.value === "") {
    elements.span.textContent = "Anonymous";
}
};
