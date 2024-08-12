function showMessage() {
    alert("¡Estoy lista para aprender y crecer en el mundo de la programación!");
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('adoptMeButton');
    button.onclick = showMessage;
});
