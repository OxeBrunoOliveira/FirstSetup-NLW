const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button') // fucao para o butao

// Executar algo ao evento quando ouver um click
button.addEventListener('click', add)
// Salvar quando ouver alguma mudanca
form.addEventListener("change", save)

function add() {
  // Armazena o dia atual na variavel today
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5)
  // verificar se o dia ja existe
  const dayExists = nlwSetup.dayExists(today)
  // Se dayExists for TRUE executa essa condicao
  if(dayExists) {
    alert("O dia já está adicionado gota 😑")
    return
  }

  // Adicionar o dia
  nlwSetup.addDay(today)
}

function save() {
  // Guardar no localStorege sempre que ouver alteracao 
  localStorage.setItem('NLWSetup@habits',JSON.stringify (nlwSetup.data))
}

// Buscar as informacoes no localStorage e converter em objeto
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
// Carregar as infirmacoes
nlwSetup.setData(data)
nlwSetup.load()
