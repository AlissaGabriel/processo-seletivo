function mostrarDados() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let mensagem = "Informações preenchidas: \n\nNome: " + nome + "\nE-mail: " + email + "\nSenha: " + senha;

    alert(mensagem);
}

function mostrarSenha() {
    let input = document.getElementById("senha");
    let mostrar = document.getElementById("btn-senha");

    if (input.type === 'password') {
        input.setAttribute('type', 'text');
        mostrar.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        input.setAttribute('type', 'password');
        mostrar.classList.replace('bi-eye-slash', 'bi-eye');
    }
}