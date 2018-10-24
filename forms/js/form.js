//DOM Elements
let getStartedBtn = document.querySelector('#getStartedBtn');
let passwordInput = document.querySelector('#passwordInput');
let message = document.querySelector('#message');
let getStartedForm = document.querySelector('#getStartedForm');

let secretPassword = "/cat/";

//Event listeners
getStartedForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    passwordInput.style.display = "flex";
    getStartedBtn.style.display = "none";
    return false;
});

passwordInput.addEventListener('blur', (evt) => {
    passwordInput.value = "";
    let value = evt.target.value;
    if(value.match(secretPassword)){
        message.style.display = "flex";
    }
    
    // if(evt.keyCode == 13){
    //     if(evt === secretPassword){
    //         message.innerHTML = "Open sesame!";
    //     }else {
    //         message.innerHTML = "That was incorrect!";
    //     }
    //     message.style.display = "flex";
    // }
});