const elements ={
    clickMinus : document.querySelector('button[data-action="decrement"]'),
    span : document.querySelector('#value'),
    clickPlus : document.querySelector('button[data-action="increment"]')
}

elements.clickMinus.addEventListener('click', handlerClickMinus);

let counterValue = 0;
function handlerClickMinus(){
    counterValue-=1;
elements.span.textContent = `${counterValue}`;
}
elements.clickPlus.addEventListener('click', handlerClickPlus);
function handlerClickPlus(){
    counterValue +=1;
    elements.span.textContent = `${counterValue}`;
        
    }