const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

const pesoValue = document.querySelector("#peso")

pesoValue.addEventListener("keyboard", () => {
  console.log(pesoValue)
})
