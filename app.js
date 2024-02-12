const loginform = document.querySelector("#loginForm");
const longinInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username = longinInput.value;
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}

loginform.addEventListener("submit", onLoginSubmit); 