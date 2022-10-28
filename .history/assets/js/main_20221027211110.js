const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputPeso = e.target.querySelector("#peso")
  const inputAltura = e.target.querySelector("#altura")

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso && !altura) {
    setResultado("Dados inválidos")
  }
})

function createP() {
  const p = document.createElement("p")
  return p
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""

  const p = createP()
  p.innerHTML = `Guilherme`
  p.classList.add("parafrafo-resultado")

  resultado.appendChild(p)
}
