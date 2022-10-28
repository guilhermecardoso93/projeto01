const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Evento Previnido")
  setResultado("Olá")
})

function createP() {
  const p = document.createElement("p")
  return p
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""

  p.innerHTML = `Guilherme`
  p.classList.add("parafrafo-resultado")

  resultado.appendChild(p)
}
