
document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".main-menu");
    const boton = document.querySelector(".tresBtotnes");
    const overlay = document.querySelector(".overlay");

    boton.addEventListener("click", () => {
        menu.classList.toggle("activo");
        boton.classList.toggle("activo");
        overlay.classList.toggle("activo");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("activo");
        boton.classList.remove("activo");
        overlay.classList.remove("activo");
    });

});
