const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Evento Previnido")
  setResultado("Olá")
})

function createP(p) {
  const p = document.createElement("p")
  p.classList.add("parafrafo-resultado")
  p.innerHTML = `Guilherme`
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""

  resultado.appendChild(p)
}
