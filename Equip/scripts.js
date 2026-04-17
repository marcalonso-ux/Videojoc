document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".main-menu");
    const boton = document.querySelector(".tresBtotnes");
    const overlay = document.querySelector(".overlay");
    const btnCerrar = document.querySelector(".btn-cerrar-menu"); // <--- NUEVO

    // Abrir/Cerrar con el botón hamburguesa
    boton.addEventListener("click", () => {
        menu.classList.toggle("activo");
        boton.classList.toggle("activo");
        overlay.classList.toggle("activo");
    });

    // Cerrar al hacer clic en la X (NUEVO)
    btnCerrar.addEventListener("click", () => {
        menu.classList.remove("activo");
        boton.classList.remove("activo");
        overlay.classList.remove("activo");
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".main-menu");
    const boton = document.querySelector(".tresBtotnes");
    const overlay = document.querySelector(".overlay");

    // 1. ABRIR EL MENÚ
    boton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic se propague al fondo
        menu.classList.add("activo");
        overlay.classList.add("activo");
    });

    // 2. CERRAR AL CLICAR EL OVERLAY (La clave)
    overlay.addEventListener("click", (e) => {
        console.log("¡Clic detectado en el overlay!"); // Mira la consola (F12)
        menu.classList.remove("activo");
        overlay.classList.remove("activo");
    });

    // 3. EVITAR QUE EL MENÚ SE CIERRE SI CLICAS DENTRO DE ÉL
    // (Sin esto, al clicar una opción del menú, el overlay podría cerrarlo todo)
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

function irX() {
    window.location.href = "https://x.com/?lang=es";
}

function irInstagram() {
    window.location.href = "https://www.instagram.com";
}

function irLinkedin() {
    window.location.href = "https://es.linkedin.com/";
}