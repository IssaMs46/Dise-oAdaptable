function generarResume() {
    let archivo = document.getElementById('archivo-resume').files[0];
    if (archivo) {
        alert('Generando resume para: ' + archivo.name);
    } else {
        alert('Por favor sube un archivo.');
    }
}

function generarCoverLetter() {
    let archivo = document.getElementById('archivo-cover-letter').files[0];
    if (archivo) {
        alert('Generando cover letter para: ' + archivo.name);
    } else {
        alert('Por favor sube un archivo.');
    }
}

function agregarResena() {
    let nuevaResena = document.getElementById('nueva-resena').value;
    if (nuevaResena.trim()) {
        let reseñasZona = document.getElementById('zona-reseñas');
        let nuevaZona = document.createElement('p');
        nuevaZona.textContent = nuevaResena;
        reseñasZona.appendChild(nuevaZona);
        document.getElementById('nueva-resena').value = '';  // Limpiar el campo
    } else {
        alert('Por favor escribe una reseña.');
    }
}
