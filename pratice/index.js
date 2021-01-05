function handleResize(evnet){
    console.log(event)
    console.log("I have been resized")
}

// handleResize() 라고 적을경우 함수를 바로 호출하는 것.
// handleResize 라고했을 경우 resize 될 때마다 호출이 됨
window.addEventListener("resize", handleResize);

const title  = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);