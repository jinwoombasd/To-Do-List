const longinInput = document.querySelector("#loginForm input");
const longinButton = document.querySelector("#loginForm button");

function onLoginBtnClick(){
    const username = longinInput.value;
    console.log(username);
}

longinButton.addEventListener("click", onLoginBtnClick);