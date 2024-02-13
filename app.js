const loginform = document.querySelector("#loginForm");
const longinInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username = longinInput.value;
    localStorage.setItem(USERNAME_KEY , username);
    showGreetings(username);
}

function showGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
     loginform.classList.remove(HIDDEN_CLASSNAME);
     loginform.addEventListener("submit", onLoginSubmit); 
} else {
   showGreetings(savedUsername);
}