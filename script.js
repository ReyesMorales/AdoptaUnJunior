function showMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "¡Estoy lista para aprender y crecer en el mundo de la programación! Gracias por considerarme.";

    messageDiv.className = 'message-popup';

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('adoptMeButton');
    button.onclick = showMessage;
});

//Función modo oscuro
function toogleDarkMode (){
    const body = document.body;
    const elements = document.querySelectorAll('nav, h1, h2, h3, ul, p, button');

    body.classList.toggle('dark-mode');

    elements.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const button = document.getElementById('darkModeButton');
    if (body.classList.contains('dark-mode')) {
        button.textContent = "Modo Claro";
    } else {
        button.textContent = "Modo Oscuro";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('adoptMeButton');
    button.onclick = showMessage;

    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.onclick = toogleDarkMode;
});

document.addEventListener("DOMContentLoaded", function () {
    const formularioComentarios = document.getElementById("formularioComentarios");
    const listaComentarios = document.getElementById("listaComentarios");
  
    formularioComentarios.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtener los datos del formulario
      const nombre = document.getElementById("nombre").value;
      const mensaje = document.getElementById("mensaje").value;
  
      // Crear un nuevo elemento de comentario
      const comentario = document.createElement("div");
      comentario.classList.add("comentario");
  
      // Dar formato "Usuario: comentario"
      const contenidoComentario = `
        <p><strong>${nombre}:</strong> ${mensaje}</p>
        <hr>
      `;
  
      comentario.innerHTML = contenidoComentario;
  
      // Añadir el nuevo comentario al principio de la lista
      listaComentarios.insertBefore(comentario, listaComentarios.firstChild);
  
      // Limpiar el formulario
      formularioComentarios.reset();
    });
  });
  
