    document.getElementById('formularioAdmin').addEventListener('submit', function(e) {
    e.preventDefault();

    const archivoUsuario = document.getElementById('archivo').files[0];
    const descripcionArchivo = document.getElementById('descripcion').value;

    const formData = new FormData();

     formData.append('archivo-usuario', archivoUsuario, 'fileName');
     formData.append('descripcion-archivo', descripcionArchivo);

    fetch('http://....', {
        method: "POST",
        body: formData,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

