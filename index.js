let participantes = [
{
  nome: "Alan Cruz",
  email: "cruzalan600@gmail.com",
  dataInscricao: new Date(2024, 3, 2, 16, 30),
  dataCheckIn: new Date(2024, 3, 2, 12, 10)
},
{
  nome: "Jonas Silva",
  email: "jonas00@gmail.com",
  dataInscricao: new Date(2024, 3, 15, 17, 30),
  dataCheckIn: new Date(2024, 4, 16, 12, 20) 
},
{
  nome: "Luiza Mel",
  email: "lm120@gmail.com",
  dataInscricao: new Date(2024, 3, 12, 20, 15),
  dataCheckIn: new Date(2024, 3, 13, 11, 25)
},
{
  nome: "Camila Queiros",
  email: "cami10@gmail.com",
  dataInscricao: new Date(2024, 3, 11, 13, 30),
  dataCheckIn: new Date(2024, 3, 13, 18, 07)
},
{
  nome: "joão Dias",
  email: "jao123@gmail.com",
  dataInscricao: new Date(2024, 3, 9, 15, 22),
  dataCheckIn: new Date(2024, 3, 10, 12, 55)
},
{
  nome: "Marcos Vini",
  email: "marcos1247@gmail.com",
  dataInscricao: new Date(2024, 3, 10, 9, 30),
  dataCheckIn: new Date(2024, 3, 15, 18, 10)
},
{
  nome: "Alana Dias",
  email: "alana00@gmail.com",
  dataInscricao: new Date(2024, 3, 7, 12, 20),
  dataCheckIn: new Date(2024, 3, 10, 12, 45)
},
{
  nome: "Ronaldo Junior",
  email: "ronaldinho@gmail.com",
  dataInscricao: new Date(2024, 3, 14, 16, 30),
  dataCheckIn: new Date(2024, 3, 2, 14, 10)
},
{
  nome: "Marta Souza",
  email: "martasz@gmail.com",
  dataInscricao: new Date(2024, 3, 18, 12, 30),
  dataCheckIn: new Date(2024, 3, 18, 18, 40)
},
{
  nome: "Julia Meira",
  email: "jujume@gmail.com",
  dataInscricao: new Date(2024, 3, 6, 14, 55),
  dataCheckIn: new Date(2024, 3, 7, 13, 50)
}

];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarlista = (participantes) => {
  let output = ""
  
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)

  }
  
  
  
  document
  .querySelector('tbody')
  .innerHTML = output

}

  atualizarlista(participantes)


  const adicionarParticipante = (event) => {
   event.preventDefault() 

   const dadosDoFormulario = new FormData(event.target)

   const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
   }

   const participanteExiste = participantes.find(
    (p) => {
      return p.email == participante.email
   }
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

   participantes = [participante, ...participantes]
   atualizarlista(participantes)

   event.target.querySelector('[name="nome"]').value = ""
   event.target.querySelector('[name="email"]').value = ""
  }

  const fazerCheckIn = (event) => {
  
  const mensagemDeConfirmacao = 'Tem certeza que deseja fazer o check-in?';
  if (!confirm(mensagemDeConfirmacao)) {
    return;
  }

  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email;
  });

  participante.dataCheckIn = new Date();

  atualizarlista(participantes);
}
  
