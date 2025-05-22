 import {pacienteService} from"../service/paciente-service.js"
 const formulario = document.querySelector("[data-form]")

 formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const Paciente = evento.target.querySelector("[data-nome]").value ;
    const  Email=  evento.target.querySelector("[data-email]").value; 
    const Médico= evento.target.querySelector("[data-medico]").value;
    const Data= evento.target.querySelector("[data-data]").value; 
    const Horário= evento.target.querySelector("[data-horario]").value;
    const Telefone = evento.target.querySelector("[data-telefone]").value;

   pacienteService.NovoAgendamento(Paciente, Email, Médico, Data, Horário, Telefone)  
   .then(() => { 
    window.location.href = "../HTML/registro_agendamento.html";
   });

})