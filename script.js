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

