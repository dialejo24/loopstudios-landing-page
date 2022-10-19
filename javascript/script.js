let menu = document.querySelector(".hamburguer_menu");
let mobile_nav = document.querySelector(".mobile_nav");
let main_screen = document.querySelector(".main_screen");
let icon_close = document.querySelector(".icon_close");

menu.addEventListener("click", displayNavBar);
icon_close.addEventListener("click", displayMainScreen);

function displayNavBar(e) {
    console.log(e.target);
    main_screen.style.display = "none";
    mobile_nav.style.display = "block";
}

function displayMainScreen(e) {
    main_screen.style.display = "block";
    mobile_nav.style.display = "none";
}