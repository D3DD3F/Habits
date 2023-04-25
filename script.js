const form = document.querySelector("#form-habits")
const mainForm = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = mainForm.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  mainForm.addDay(today)
}

function save() {
  localStorage.setItem("MarcosComar@habits", JSON.stringify(mainForm.data))
}

const data = JSON.parse(localStorage.getItem("MarcosComar@habits")) || {}
mainForm.setData(data)
mainForm.load()
