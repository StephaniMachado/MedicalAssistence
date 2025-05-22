import { pacienteService } from "../service/paciente-service.js";

function adicionarNaTabela(nome, email, medico, data, horario, telefone, id) {
    const linha_Novo_Agendamento = document.createElement("tr");
    linha_Novo_Agendamento.innerHTML = `
        <td class="td" data-td="3">${nome}</td>
        <td>${email}</td>
        <td>${medico}</td>
        <td>${data}</td>
        <td>${horario}</td>
        <td>${telefone}</td>
        <td><a href="#" class="botao-simples botao-simples--editar">Editar</a></td>
        <td><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></td>
    `;
    linha_Novo_Agendamento.dataset.id = id;
    return linha_Novo_Agendamento;
}

// Seleciona a tabela onde os dados serão inseridos
const tabela = document.querySelector("[data-tabela]");

tabela.addEventListener("click", (evento) => {
    const elemento = evento.target;

    if (elemento.classList.contains("botao-simples--excluir")) {
        const linha = elemento.closest("tr");
        const id = linha ? linha.dataset.id : null;
        if (id) {
            pacienteService.RemoverAgendamento(id)
                .then(() => {
                    linha.remove(); // Remove a linha da tabela após exclusão
                })
                .catch(erro => {
                    console.error("Erro ao excluir agendamento:", erro);
                });
        }
    }

    if (elemento.classList.contains("botao-simples--editar")) {
        evento.preventDefault();
        const linha = elemento.closest("tr");
        const id = linha ? linha.dataset.id : null;
        if (id) {
            // Aqui você pode abrir um formulário para edição, por exemplo:
            console.log("Editar agendamento com id:", id);
            // implementar funcionalidade de editar...
        }
    }
});

pacienteService.ListaAgendamentos()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(adicionarNaTabela(
                elemento.Paciente,
                elemento.Email,
                elemento.Médico,
                elemento.Data,
                elemento.Horário,
                elemento.Telefone,
                elemento.id
            ));
        });
    })
    .catch(erro => {
        console.error("Erro ao carregar agendamentos:", erro);
    });
