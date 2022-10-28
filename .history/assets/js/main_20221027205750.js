const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Evento Previnido")
  setResultado("Olá")
})

function setResultado(msg) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""

  const p = document.createElement("p")
  p.classList.add("parafrafo-resultado")
  p.innerHTML = `Guilherme`
  resultado.appendChild(p)
}
