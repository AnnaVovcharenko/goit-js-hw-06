const elements = {
    formEl: document.querySelector('.login-form')
}
elements.formEl.addEventListener('submit', onSubmit)
function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return;
    }

    const meaning = {
        email: email.value,
        password: password.value
    }
    console.log(meaning)
    event.currentTarget.reset();
}