const toggle_btn = document.getElementById("toggle-btn");
const toggle_menu = document.getElementById("toggle-menu");
const curtain = document.getElementById("curtain");

toggle_btn.addEventListener("click", function () {
    toggle_menu.classList.toggle("show-menu")
    curtain.classList.toggle("show-curtain")
})

curtain.addEventListener("click", function () {
    toggle_menu.classList.toggle("show-menu")
    curtain.classList.toggle("show-curtain")
})