const form = document.querySelector(".js-form"), 
input = form.querySelector("input"), 
gretting = document.querySelector(".js-grettings");

const USER_LocalStorage = "currentUser",
SHOWING_ClassName = "showing"; //css 가져옴

function paintGreeting(text){
    form.classList.remove(SHOWING_ClassName);
    gretting.classList.add(SHOWING_ClassName)
    gretting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LocalStorage);
    if (currentUser === null){
        // she is not
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();