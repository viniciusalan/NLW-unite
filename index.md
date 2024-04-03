const participante = {
  nome: "Alan Cruz",
  email: "cruzalan600@gmail.com",
  dataInscricao: new Date(2024, 3, 2, 16, 30)
  dataCheckIn: new Date(2024, 3, 2, 12, 10)
}

let participantes = [
  {
  nome: "Alan Cruz",
  email: "cruzalan600@gmail.com",
  dataInscricao: new Date(2024, 3, 2, 16, 30)
  dataCheckIn: new Date(2024, 3, 2, 12, 10)
}
]





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
    <td>${participante.dataInscricao}</td>
    <td>${participante.dataCheckIn}</td>
    </tr>






    const fazerCheckIn = (event) => {
    
    const mensagemDeConfirmacao = 'Tem certeza que deseja fazer o check-in?'
    if(confirm(mensagemDeConfirmacao) == false) {
      return
    }

    alert(resultado)

    const participante = participantes.find(
      (p) => {
      return p.email == event.target.dataset.email
    })
    
    participante.dataCheckIn = new Date()

    atualizarlista(participantes)
  }


  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.https://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7."