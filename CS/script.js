function IrInfo() {
    window.location.href = "info.html";
}

if(document.getElementById('btInfo')) {
    document.getElementById('btInfo').onclick = IrInfo;
}

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".main-menu");
    const boton = document.querySelector(".tresBotones");
    const overlay = document.querySelector(".overlay");

    if (boton && menu && overlay) {
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
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggle");
    
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
    }

    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            let theme = "dark";
            if (document.body.classList.contains("light-mode")) {
                theme = "light";
            }
            localStorage.setItem("theme", theme);
        });
    }
});
