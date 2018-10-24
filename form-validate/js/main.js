//Regex Validation
let validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let validTelNo = /^\d+$/;
let validUrl = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

//DOM Elements
let inputEmailEl = document.querySelector('#inputEmail');
let inputTelEl = document.querySelector('#inputTel');
let inputUrlEl = document.querySelector('#inputUrl'); 
let emailErrorMessage = document.querySelector('#email-err-msg');
let telErrorMessage = document.querySelector('#tel-err-msg');
let urlErrorMessage = document.querySelector('#url-err-msg');

function validate(){
    let emailValidation = validateEmail(),
        telValidation = validateTelNo(),
        urlValidation = validateUrl();
    if(!emailValidation){
        emailErrorMessage.style.display = "grid";
    }
    else{
        emailErrorMessage.style.display = "none";
    }
    if(!telValidation){
        telErrorMessage.style.display = "grid";
    }else{
        telErrorMessage.style.display = "none";
    }
    if(!urlValidation){
        urlErrorMessage.style.display = "grid";
    }else{
        urlErrorMessage.style.display = "none";
    }
    return emailValidation && telValidation && urlValidation;
}

function validateEmail(){
    if(validEmail.test(inputEmailEl.value)){
        return true;
    }
    return false;
}

function validateTelNo(){
    if(validTelNo.test(inputTelEl.value)){
        return true;
    }
    return false;
}

function validateUrl(){
    if(validUrl.test(inputUrlEl.value)){
        return true;
    }
    return false;
}


inputEmailEl.addEventListener('blur', () => {
    if(!validateEmail()){
        emailErrorMessage.style.display = "grid";
    }
    else {
        emailErrorMessage.style.display = "none";
    }

});

inputTelEl.addEventListener('blur', () => {
    if(!validateTelNo()){
        telErrorMessage.style.display = "grid";
    }
    else {
        telErrorMessage.style.display = "none";
    }
});

inputUrlEl.addEventListener('blur', () => {
    if(!validateUrl()){
        urlErrorMessage.style.display = "grid";
    }
    else {
        urlErrorMessage.style.display = "none";
    }
});