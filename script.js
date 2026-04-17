async function obtenerClasificacion() {
    try {
        const respuesta = await fetch('https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS/10');
        const json = await respuesta.json();
        const todos = json.data;

        const contenedor = document.getElementById('fila');

        if (!contenedor) return;

        let htmlPodio = `<div class="podio-container">`;
        let htmlLista = "";

        const orden = [1, 0, 2];
        const clases = ['plata', 'oro', 'bronce'];

        orden.forEach((posIndex) => {
            const jug = todos[posIndex];
            if (jug) {
                const claseCss = posIndex === 0 ? 'oro' : (posIndex === 1 ? 'plata' : 'bronce');

                htmlPodio += `
                    <div class="podio-item ${claseCss}">
                        <div class="avatar">${posIndex + 1}º</div>
                        <span class="nombre">${jug.name}</span>
                        <span class="puntos">${jug.puntuacion.toLocaleString()}</span>
                    </div>`;
            }
        });
        htmlPodio += `</div>`;

        const resto = todos.slice(3);
        resto.forEach((jugador, i) => {
            htmlLista += `
                <div class="fila">
                    <span>${i + 4}º</span>
                    <span style="font-weight: bold;">${jugador.name}</span>
                    <span></span><span></span><span></span>
                    <span style="text-align: right;">${jugador.puntuacion.toLocaleString()}</span>
                </div>`;
        });

        contenedor.innerHTML = htmlPodio + htmlLista;

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', obtenerClasificacion);
obtenerClasificacion();