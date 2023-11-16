
let menuMobile = document.querySelector(".menu-mobile")
let menuIcon = document.querySelector(".menu-icon img")

function menu(){
    if (menuIcon.getAttribute("src") === "./imagens/close.svg"){
        menuIcon.setAttribute("src", "./imagens/menu.svg")
        menuMobile.style.left = '-100%'
    }
        
}