const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

function setResultado(msg) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""
}

const pesoValue = document.querySelector("#peso")

pesoValue.addEventListener("key", () => {
  console.log(pesoValue)
})
