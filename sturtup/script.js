//author - сам блок автора
//background-img  - маска
//soc-block - социальные сети

const author = document.querySelectorAll(".author");


window.onload = () => {
    author.forEach(card => {
        card.onmouseover = function(){
            //console.log(card.children[0].lastChild.previousSibling);
            card.children[0].firstChild.nextSibling.style.opacity = 1;
            card.children[0].lastChild.previousSibling.style.opacity = 1;
            
        }

        card.onmouseout = function(){
            card.children[0].firstChild.nextSibling.style.opacity = 0;
            card.children[0].lastChild.previousSibling.style.opacity = 0;
        }


    });
}
