// CURSOS

// URL del servidor (cambia esto según la configuración de tu servidor)
const serverUrl = 'http://tu-servidor.com';

// Función para obtener los cursos desde el servidor
async function fetchCursos() {
    try {
        const response = await fetch(`${serverUrl}/api/cursos`);
        if (!response.ok) {
            throw new Error('Error al obtener los cursos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

function mostrarCursos(cursos, clases) {
    const contenedorCursos = document.getElementById('cursos');
    cursos.forEach(cursos => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <h2>${cursos.nombre}</h2>
            <p>${cursos.descripcion}</p>
            <p>Precio: $${cursos.precio.toFixed(2)}</p>
            <h3>Clases incluidas:</h3>
            <ul>
                ${cursos.clases.map(idClase => {
                    const clase = clases.find(c => c.id === idClase);
                    return `<li>${clase.nombre}</li>`;
                }).join('')}
            </ul>
        `;
        contenedorCursos.appendChild(div);
    });
}

// Función principal para obtener y mostrar los datos
async function main() {
    const clases = await fetchClases();
    const cursos = await fetchCursos();

    mostrarClases(clases);
    mostrarCursos(cursos, clases);
}

// Ejecutar la función principal cuando se cargue la página
document.addEventListener('DOMContentLoaded', main);




// CLASES

// Función para obtener las clases desde el servidor
async function fetchClases() {
    try {
        const response = await fetch(`${serverUrl}/api/clases`);
        if (!response.ok) {
            throw new Error('Error al obtener las clases');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// Función para mostrar las clases en el HTML
function mostrarClases(clases) {
    const contenedorClases = document.getElementById('clases');
    clases.forEach(clase => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <h2>${clase.nombre}</h2>
            <p>${clase.descripcion}</p>
            <p>Duración: ${clase.duracion} minutos</p>
            <p>Precio: $${clase.precio.toFixed(2)}</p>
            <p>Fecha: ${clase.fecha}</p>
        `;
        contenedorClases.appendChild(div);
    });
}