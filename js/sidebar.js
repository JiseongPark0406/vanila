const sideBar = document.querySelector("sidebar")
const sideBarRightArrow = document.querySelector(".sidebar__right__arrow__btn");
const sideBarRightArrowIcon = document.querySelector(".sidebar__right__arrow__icon")
function changeBackImgF(){
    let chosen__image = images[Math.floor(Math.random() * images.length)];
    bg__img.src= `img/${chosen__image}`;
    document.body.appendChild(bg__img);
}
sideBar.addEventListener("click", changeBackImgF)

sideBarRightArrow.addEventListener("mouseenter", sideBarRightArrowEnterF)

function sideBarRightArrowEnterF(){
    sideBarRightArrowIcon.classList.add("bg__rightArrow__hover")
    sideBarRightArrowIcon.classList.remove("bg__rightArrow__leave")

}

