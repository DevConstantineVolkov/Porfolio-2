const search_Btn_Open = document.getElementById("search-bt-open");
const backgroundBlur = document.getElementById("background-blur");
const searchBtnClose = document.getElementById("search-btn-close");
const menuSocialLinks = document.getElementById("menu-social-links");
const searchMobileConteiner = document.getElementById("search-conteiner");

window.addEventListener("load", function (){
    console.log("onLoad()");
})

search_Btn_Open.addEventListener("click", function () {
    backgroundBlur.style.display = "block";
    let offsetX = "";
    if (menuSocialLinks.checkVisibility())
        offsetX = menuSocialLinks.offsetWidth + 64;
    else offsetX = menuSocialLinks.offsetWidth;
    searchMobileConteiner.style.paddingRight = offsetX + "px";
});

searchBtnClose.addEventListener("click", function () {
    backgroundBlur.style.display = "none";
});


/*
function componentSearch() {
    let idComponent = "search";
    let idComponentInput= "search-input";
    let idComponentIcon = "search-icon";
    let iconSrc = "src/icon/search.png";

    let component = document.createElement("div");
    component.setAttribute("id", idComponent);
    component.setAttribute("class", "search background-color-white");

    let elementInput = document.createElement("input");
    elementInput.setAttribute("type", "text");
    elementInput.setAttribute("id", idComponentInput);
    elementInput.setAttribute("class", "search-input background-color-white");
    elementInput.setAttribute("placeholder", "Search");
    component.appendChild(elementInput);

    let elementImg = document.createElement("img");
    elementImg.setAttribute("id", idComponentIcon);
    elementImg.setAttribute("src", iconSrc);
    elementImg.setAttribute("alt", "search");
    component.appendChild(elementImg);

    return component;
}*/

console.log('Happy developing ✨')
