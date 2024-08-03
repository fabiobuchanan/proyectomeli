   // Realizar la solicitud GET al servidor para obtener el array de objetos
   fetch('/get_videos')
   .then(response => response.json())
   .then(data => {
       const videosContainer = document.getElementById('videos');
       
       data.forEach(video => {
           // Crear un contenedor para cada video
           const videoContainer = document.createElement('div');
           videoContainer.className = 'video-container';

           // Añadir el nombre y la descripción del video
           const videoTitle = document.createElement('h2');
           videoTitle.textContent = video.nombre;
           const videoDescription = document.createElement('p');
           videoDescription.textContent = video.descripcion;

           // Crear el iframe para el video
           const iframe = document.createElement('iframe');
           iframe.width = "560";
           iframe.height = "315";
           iframe.src = video.url;
           iframe.frameBorder = "0";
           iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
           iframe.allowFullscreen = true;

           // Añadir los elementos al contenedor del video
           videoContainer.appendChild(videoTitle);
           videoContainer.appendChild(videoDescription);
           videoContainer.appendChild(iframe);

           // Añadir el contenedor del video al contenedor principal
           videosContainer.appendChild(videoContainer);
       });
   })
   .catch(error => console.error('Error fetching videos:', error));