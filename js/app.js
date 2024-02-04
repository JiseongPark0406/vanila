const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__form input");
const loginBtn = document.querySelector(".login__form button");
const welcome__text = document.querySelector(".welcome__text");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
const logoutBtn = document.querySelector(".logout__btn");
const logoutForm = document.querySelector(".logout__form");
const clockContainer = document.querySelector(".clock__container");
const clockText = document.querySelector(".clock");

function loginSubmit(argument){
    argument.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    welcome__text.innerHTML = `Hello, ${username}`;
    localStorage.setItem(USERNAME_KEY, username);
}
function logout(logout__argument){
    localStorage.removeItem(USERNAME_KEY);
    logout__argument.preventDefault();
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

 if (localStorage.getItem(USERNAME_KEY) === null){

 }
 else{
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    welcome__text.innerText = `Hello, ${localStorage.getItem(USERNAME_KEY)}`
 }
 
 loginForm.addEventListener("submit", loginSubmit);
 logoutForm.addEventListener("submit", logout);

 clockContainer.addEventListener(`mouseover`, function(){
    clockText.classList.add("clock__hover");
    clockText.classList.remove("clock__leave");
 })
 clockContainer.addEventListener(`mouseleave`, function(){
    clockText.classList.remove("clock__hover");
    clockText.classList.add("clock__leave");
 })