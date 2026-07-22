const toggle_btn = document.getElementById("toggle-btn");
const toggle_menu = document.getElementById("toggle-menu");
const curtain = document.getElementById("curtain");
const Discover_more = document.getElementById("btn-gray");
const Hire_me = document.getElementById("btn-white");

toggle_btn.addEventListener("click", function () {
  toggle_menu.classList.toggle("show-menu");
  curtain.classList.toggle("show-curtain");
});

curtain.addEventListener("click", function () {
  toggle_menu.classList.toggle("show-menu");
  curtain.classList.toggle("show-curtain");
});

Discover_more.addEventListener("click", function () {
  location.href = "home.html";
});

Hire_me.addEventListener("click", function () {
  location.href = "home.html#contact";
});