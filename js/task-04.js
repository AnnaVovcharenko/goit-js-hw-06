const elements = {
    clickMinus: document.querySelector('button[data-action="decrement"]'),
    span: document.querySelector('#value'),
    clickPlus: document.querySelector('button[data-action="increment"]')
}
let counterValue = 0;
elements.clickMinus.addEventListener('click', handlerClickMinus);
elements.clickPlus.addEventListener('click', handlerClickPlus);

function handlerClickMinus() {
    counterValue -= 1;
    elements.span.textContent = `${counterValue}`;
}
function handlerClickPlus() {
    counterValue += 1;
    elements.span.textContent = `${counterValue}`;

}