const title = document.getElementById("title");
// id가 title인 첫번째 자식을 데려옴
const title2 = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
//console.log(title)
title.style.color = "red";
document.title = "I own you now";
console.dir(title)