const form = document.querySelector(".js-form"), 
input = form.querySelector("input"), 
gretting = document.querySelector(".js-grettings");

const USER_LocalStorage = "currentUser",
SHOWING_ClassName = "showing"; //css 가져옴

function saveName(text){
    localStorage.setItem(USER_LocalStorage, text);
}

function handleSubmit(event){
    event.preventDefault(); //기본동작 막기 ex) input에 타이핑하고 엔터 동작 후 input value 값 초기화 되는 현상
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_ClassName);
    form.addEventListener("submit", handleSubmit) 
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ClassName);
    gretting.classList.add(SHOWING_ClassName)
    gretting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LocalStorage);
    if (currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();