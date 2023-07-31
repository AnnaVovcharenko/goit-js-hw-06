

const input = document.querySelector('#validation-input');
input.addEventListener("blur", handlerInput);

function handlerInput(evt) {
     if (evt.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    
   
     } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        
     }
     
   console.dir(evt.currentTarget.value);
    //console.log(evt.currentTarget.value);
 }