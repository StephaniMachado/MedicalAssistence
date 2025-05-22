document.getElementById("botaoAgendar").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura dos valores do formulário
    const paciente = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    // Referência à tabela (corrigida para acessar diretamente o <tbody>)
    const tabela = document.querySelector("#tabelaAgendamentos tbody");

    // Verificando se a tabela foi encontrada
    console.log("Tabela encontrada:", tabela);

    if (!tabela) {
        alert("Erro: Tabela não encontrada!");
        return; // Impede que o código continue se a tabela não existir
    }

    // Criando uma nova linha
    const novaLinha = tabela.insertRow();

    // Criando células e inserindo os dados
    novaLinha.insertCell(0).textContent = paciente;
    novaLinha.insertCell(1).textContent = data;
    novaLinha.insertCell(2).textContent = horario;
    novaLinha.insertCell(3).textContent = email;

    // Criando botão de ação (exemplo: Remover)
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", function() {
        tabela.deleteRow(novaLinha.rowIndex);
    });

    novaLinha.insertCell(4).appendChild(botaoRemover);

    // Limpando os campos após o envio
    document.getElementById("formAgendar").reset();
});
console.log("O script foi carregado corretamente!");
