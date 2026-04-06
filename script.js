function toggleMenu() {
    document.querySelector(".main-menu").classList.toggle("activo");
}

document.querySelector(".tresBtotnes").addEventListener("click", function() {
    document.querySelector(".main-menu").classList.toggle("activo");
});


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
