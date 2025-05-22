document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        // Usuários pré-definidos
        const credenciais = {
            admin: "1234",
            medico: "5678"
        };

        if (credenciais[usuario] && credenciais[usuario] === senha) {
            // Armazena o tipo de usuário na sessão antes de redirecionar
            sessionStorage.setItem("userRole", usuario);

            window.location.href = "/HTML/front_agendamentos.html"; // Redireciona
        } else {
            document.getElementById("mensagemErro").style.display = "block"; // Mostra mensagem de erro
        }
    });
});