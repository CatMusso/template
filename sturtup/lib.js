/**
 * Выводит карточку на страницу
 * 
 * @param {int} number - Номер кртинки
 * @param {str} name - Имя автора
 *  @param {str} work - Должность автора
 */

let cardAuthor = (number, name, work) => {
    let card_template =
    `<div class="author">
            <div class="author-img author-img-${number}">
                <img src="images/background_3.png" alt="" class="background-img">
                <div class="soc-block">
                    <img src="images/icon_facebook.png" alt="">
                    <img src="images/icon_twitter.png" alt="">
                    <img src="images/icon_google.png" alt="">
                    <img src="images/icon_in.png" alt="">
                </div>
            </div>
            <span class="author-text-1"><p>${name}</p><br></span>
            <span class="author-text-2"><p>${work}</p></span>
        </div>`;

    containAuthor.insertAdjacentHTML("afterBegin", card_template)
}


let 