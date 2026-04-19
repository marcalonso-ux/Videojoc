document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".main-menu");
    const boton = document.querySelector(".tresBotones");
    const overlay = document.querySelector(".overlay");
    const btnCerrar = document.querySelector(".btn-cerrar-menu"); // <--- NUEVO

    boton.addEventListener("click", () => {
        menu.classList.toggle("activo");
        boton.classList.toggle("activo");
        overlay.classList.toggle("activo");
    });

    btnCerrar.addEventListener("click", () => {
        menu.classList.remove("activo");
        boton.classList.remove("activo");
        overlay.classList.remove("activo");
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".main-menu");
    const boton = document.querySelector(".tresBotones");
    const overlay = document.querySelector(".overlay");

    boton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic se propague al fondo
        menu.classList.add("activo");
        overlay.classList.add("activo");
    });

    overlay.addEventListener("click", (e) => {
        console.log("¡Clic detectado en el overlay!"); // Mira la consola (F12)
        menu.classList.remove("activo");
        overlay.classList.remove("activo");
    });

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});