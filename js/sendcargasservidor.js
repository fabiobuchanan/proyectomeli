document.getElementById('videoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const url = document.getElementById('url').value;

    const videoData = { nombre, descripcion, url };

    if (id) {
        // Update video
        fetch(`/videos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(videoData)
        })
        .then(response => response.json())
        .then(video => {
            console.log('Video actualizado:', video);
            loadVideos();
        })
        .catch(error => console.error('Error actualizando video:', error));
    } else {
        // Create new video
        fetch('/videos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(videoData)
        })
        .then(response => response.json())
        .then(video => {
            console.log('Video creado:', video);
            loadVideos();
        })
        .catch(error => console.error('Error creando video:', error));
    }

    // Reset form
    document.getElementById('videoForm').reset();
    document.getElementById('videoId').value = '';
});

document.getElementById('loadVideos').addEventListener('click', loadVideos);

function loadVideos() {
    fetch('/videos')
    .then(response => response.json())
    .then(data => {
        const videosContainer = document.getElementById('videos');
        videosContainer.innerHTML = '';
        data.forEach(video => {
            const videoContainer = document.createElement('div');
            videoContainer.className = 'video-container';
            
            const videoTitle = document.createElement('h2');
            videoTitle.textContent = video.nombre;
            const videoDescription = document.createElement('p');
            videoDescription.textContent = video.descripcion;
            
            const iframe = document.createElement('iframe');
            iframe.width = '560';
            iframe.height = '315';
            iframe.src = video.url;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Editar';
            updateButton.addEventListener('click', () => {
                document.getElementById('videoId').value = video.id;
                document.getElementById('nombre').value = video.nombre;
                document.getElementById('descripcion').value = video.descripcion;
                document.getElementById('url').value = video.url;
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                fetch(`/videos/${video.id}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(() => {
                    console.log('Video eliminado');
                    loadVideos();
                })
                .catch(error => console.error('Error eliminando video:', error));
            });

            videoContainer.appendChild(videoTitle);
            videoContainer.appendChild(videoDescription);
            videoContainer.appendChild(iframe);
            videoContainer.appendChild(updateButton);
            videoContainer.appendChild(deleteButton);
            
            videosContainer.appendChild(videoContainer);
        });
    })
    .catch(error => console.error('Error cargando videos:', error));
}
