const nav_main = document.querySelector(".nav_main");
const nav_sidebar = document.querySelector(".nav-sidebar");
const links = document.querySelector(".nav-sidebar ul li");

nav_main.addEventListener("click", () => {
    nav_sidebar.classList.toggle("open");
});