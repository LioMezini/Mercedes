document.getElementById("client-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Valide os campos do formulário aqui, se necessário...

    // Redireciona para mercedes.html após o envio do formulário
    window.location.href = "mercedes.html";
});
