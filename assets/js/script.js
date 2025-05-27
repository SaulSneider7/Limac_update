let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let id_logo = document.getElementById("logo");
    let btn_login = document.getElementById("btn_login");

    if (currentScroll === 0) {
        // Estamos en la parte superior
        header.classList.remove("bg-white");
        header.classList.add("navbar-dark");
        id_logo.classList.add("text-white");
        btn_login.classList.add("btn-white");
        btn_login.classList.remove("btn-primary");
    } else if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo -> ocultar
        header.style.transform = "translateY(-100%)";
    } else {
        // Scroll hacia arriba -> mostrar
        header.style.transform = "translateY(0)";
        header.classList.add("bg-white");
        header.classList.remove("navbar-dark");
        id_logo.classList.remove("text-white");
        btn_login.classList.remove("btn-white");
        btn_login.classList.add("btn-primary");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
