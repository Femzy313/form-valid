let form = document.getElementById('form');
let button = document.querySelector('.submit');
let inputs = document.querySelectorAll('input');
let names = document.getElementById('name');
console.log(form)

button.onclick = function (evt) {
    if (!form.checkValidity()) {
        console.log('Form is valid')
        //console.log('Form is invalid')
        inputs.forEach(elm => {
            if (!elm.checkValidity()) {
                if (elm.validity.valueMissing) {
                    if (elm.type === 'text') {
                        elm.setCustomValidity('You must enter a Name');
                    } else if (elm.type === 'email') {
                        elm.setCustomValidity('You must enter an email');
                    } else {
                        elm.setCustomValidity('This field is required');
                    }
                } else if (elm.validity.typeMismatch) {
                    if (elm.type === 'email') {
                        elm.setCustomValidity('You must enter a valid email address');
                    }
                } else if (elm.validity.tooShort) {
                    elm.setCustomValidity('Password is too short')
                } else {
                    elm.setCustomValidity('')
                }
            }
        })
    } else {

    }
}