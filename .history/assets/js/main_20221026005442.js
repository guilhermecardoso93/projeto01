const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

function setResultado() {
  const resultado = document.querySelector("#resultado")
}

const pesoValue = document.querySelector("#peso")

pesoValue.addEventListener("key", () => {
  console.log(pesoValue)
})
