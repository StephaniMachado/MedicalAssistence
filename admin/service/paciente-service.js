

 const ListaAgendamentos = () => {
    return fetch("http://localhost:3000/profile")
    .then((response) => {
        return response.json();
    });
}

 const NovoAgendamento = (Paciente, Email, Médico, Data, Horário,Telefone) => {
    return fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Paciente: Paciente,
            Email: Email,
            Telefone: Telefone,
            Médico: Médico,
            Data: Data,
            Horário: Horário
        })
    }).then((response) => {
        return response.body();
    });
}

const RemoverAgendamento = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE"
    })
}    


export  const pacienteService = {
    ListaAgendamentos,
    NovoAgendamento,
    RemoverAgendamento
}