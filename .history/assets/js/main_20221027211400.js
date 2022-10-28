const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputPeso = e.target.querySelector("#peso")
  const inputAltura = e.target.querySelector("#altura")

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    setResultado("Dados inválidos")
    return
  }

  if (!altura) {
    setResultado("Dados inválidos")
    return
  }
})

function createP() {
  const p = document.createElement("p")
  return p
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""

  const p = createP()
}
