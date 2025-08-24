const rootSrcIcons = "src/icon/";
const iconsDefault = [
                                "navbar_default_home.png","navbar_default_about_me.png",
                                "navbar_default_skills.png", "navbar_default_works.png",
                                "navbar_default_blogs.png", "navbar_default_contact.png"
                            ];
const iconsActive = [
                                "navbar_active_home.png", "navbar_active_about_me.png",
                                "navbar_active_skills.png", "navbar_active_works.png",
                                "navbar_active_blogs.png","navbar_active_contact.png"
                            ];

var currentIndex = 0;
var lastIndex = 0;

const navbarItemsIcon=[
    document.getElementById("navbar-item-home-icon"),
    document.getElementById("navbar-item-about-me-icon"),
    document.getElementById("navbar-item-skills-icon"),
    document.getElementById("navbar-item-works-icon"),
    document.getElementById("navbar-item-blogs-icon"),
    document.getElementById("navbar-item-contact-icon"),
];

const itemHome = document.getElementById("navbar-item-home");
var currentItem= {
    index: 0,
    item: itemHome,
    icon: navbarItemsIcon[0]
}

var lastItem = {
    index: 0,
    item: itemHome,
    icon: navbarItemsIcon[0]
}

const navbar = document.getElementById("navbar");
const wrapper = document.getElementById("wrapper");

window.addEventListener("load", function (){
    onFocusedCurrentItem();
    resetPositionNavbar();
})

window.addEventListener("resize", function (){
    resetPositionNavbar();
})

function resetPositionNavbar(){
    let offsetLeft = wrapper.getBoundingClientRect().x + 60;
    navbar.style.left = offsetLeft + "px";
}

itemHome.addEventListener("click", function () {
    setCurrentItem(0,itemHome,navbarItemsIcon[0]);
    onNavbarItemClick();
    scrollToBlock(scrollToHero());
})
const itemAboutMe = document.getElementById("navbar-item-about-me");
itemAboutMe.addEventListener("click", function () {
    setCurrentItem(1,itemAboutMe,navbarItemsIcon[1]);
    onNavbarItemClick();
    scrollToBlock(scrollToAboutMe());
})
const itemSkills = document.getElementById("navbar-item-skills");
itemSkills.addEventListener("click", function () {
    setCurrentItem(2,itemSkills, navbarItemsIcon[2]);
    onNavbarItemClick();
    scrollToBlock(scrollToSkills());
})
const itemWorks = document.getElementById("navbar-item-works");
itemWorks.addEventListener("click", function () {
    setCurrentItem(3,itemWorks, navbarItemsIcon[3]);
    onNavbarItemClick();
    scrollToBlock(scrollToWorks());
})
const itemBlogs = document.getElementById("navbar-item-blogs");
itemBlogs.addEventListener("click", function () {
    setCurrentItem(4,itemBlogs, navbarItemsIcon[4]);
    onNavbarItemClick();
    scrollToBlock(scrollToBlogs());
})
const itemContact = document.getElementById("navbar-item-contact")
itemContact.addEventListener("click", function () {
    setCurrentItem(5,itemContact, navbarItemsIcon[5]);
    onNavbarItemClick();
    scrollToBlock(scrollToContact());
})

function setCurrentItem(index, item, icon){
    lastItem.index = currentItem.index;
    lastItem.item = currentItem.item;
    lastItem.icon = currentItem.icon;
    currentItem.index = index;
    currentItem.item = item;
    currentItem.icon = icon;
}

function onNavbarItemClick() {
    onLossFocusedLastItem();
    onFocusedCurrentItem();
    return 0;
}
function onFocusedCurrentItem(){
    currentItem.item.style.background = "#FFFFFF";
    currentItem.icon.src = rootSrcIcons + iconsActive[currentItem.index];
    return 0;
}
function onLossFocusedLastItem(){
    lastItem.item.style.background = "#1A1E23";
    lastItem.icon.src = rootSrcIcons + iconsDefault[lastItem.index];
    return 0;
}

const idTop = document.getElementById("top");
const idHero = document.getElementById("hero");
const idAboutMe = document.getElementById("about-me");
const idSkills = document.getElementById("skills");
const idWorks = document.getElementById("works");
const idBlogs = document.getElementById("blogs");

function scrollToHero(){
    return 0;
}

function scrollToAboutMe(){
    return idHero.clientHeight + scrollToHero();
}
function scrollToSkills(){
    return idAboutMe.clientHeight + scrollToAboutMe();
}
function scrollToWorks(){
    return idSkills.clientHeight + scrollToSkills();
}
function scrollToBlogs() {
    return idWorks.clientHeight + scrollToWorks();
}
function scrollToContact(){
    return idBlogs.clientHeight + scrollToBlogs();
}

function scrollToBlock(block) {
    window.scrollTo({
        top: block,
        behavior: "smooth"
    })
}