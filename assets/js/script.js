let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll === 0) {
        // Estamos en la parte superior
        header.classList.remove("bg-white");
    } else if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo -> ocultar
        header.style.transform = "translateY(-100%)";
    } else {
        // Scroll hacia arriba -> mostrar
        header.style.transform = "translateY(0)";
        header.classList.add("bg-white");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
