const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__form input");
const loginBtn = document.querySelector(".login__form button");
const welcome__text = document.querySelector(".welcome__text");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
const logoutBtn = document.querySelector(".logout__btn");
const logoutForm = document.querySelector(".logout__form");

function loginSubmit(argument){
    argument.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    welcome__text.classList.remove(HIDDEN_CLASSNAME);
    welcome__text.innerHTML = `Hello, ${username}`;
    localStorage.setItem(USERNAME_KEY, username);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.addEventListener("submit", logout);

}
function logout(logout__argument){
    localStorage.removeItem(USERNAME_KEY);
    logout__argument.preventDefault();
    logoutForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}


 if (localStorage.getItem(USERNAME_KEY) === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
 }
 else{
    welcome__text.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    welcome__text.innerText = `Hello, ${localStorage.getItem(USERNAME_KEY)}`
    logoutForm.addEventListener("submit", logout);

 }

