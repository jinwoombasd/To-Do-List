const loginform = document.querySelector("#loginForm");
const longinInput = document.querySelector("#loginForm input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(longinInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}

loginform.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);