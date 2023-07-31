const elements = {
formEl : document.querySelector('.login-form')
}
elements.formEl.addEventListener('submit', onSubmit)
function onSubmit(evt) {
    evt.preventDefault();
    const {email,password } = evt.currentTarget.elements
   
    const meaning = {
        email : email.value,
        password : password.value
    }
    console.log(meaning)
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");  
    }
    console.log(`email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}