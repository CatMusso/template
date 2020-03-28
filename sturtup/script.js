//author - сам блок автора
//background-img  - маска
//soc-block - социальные сети

let author = document.querySelector(".author");
let mask = document.querySelector(".background-img");
let social = document.querySelector(".soc-block");

window.onload = function(){
    //console.log("Страница загружена");
    author.onmouseover = function(){
        console.log("Наведение");
        mask.style.opacity = 0;
    }
}