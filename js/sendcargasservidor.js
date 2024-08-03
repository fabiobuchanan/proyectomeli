const videoData = [
    { id: 1, nombre: 'Video 1', descripcion: 'Descripción del Video 1', url: 'https://www.youtube.com/embed/video_id_1' },
    { id: 2, nombre: 'Video 2', descripcion: 'Descripción del Video 2', url: 'https://www.youtube.com/embed/video_id_2' },
    { id: 3, nombre: 'Video 3', descripcion: 'Descripción del Video 3', url: 'https://www.youtube.com/embed/video_id_3' },
    { id: 4, nombre: 'Video 4', descripcion: 'Descripción del Video 4', url: 'https://www.youtube.com/embed/video_id_4' }
]

document.getElementById('enviarSubir').addEventListener('click', () => {
    // Realizar la solicitud POST al servidor para enviar el array de objetos
    fetch('/save_videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(videoData)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => console.error('Error enviando videos:', error));
});