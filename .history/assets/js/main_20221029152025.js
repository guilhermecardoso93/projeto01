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

  const imc = getIMC(peso, altura)
  const nivelImc = getNivelImc(imc)
})

function getNivelIMC(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ]

  if (imc >= 39.9) {
    return nivel[5]
  } else if (imc >= 34.9) {
    return nivel[4]
  } else if (imc >= 29.9) {
    return nivel[3]
  } else if (imc >= 24.9) {
    return nivel[2]
  } else if (imc >= 18.5) {
    return nivel[1]
  } else if (imc < 18.5) {
    return nivel[0]
  }
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}

function createP() {
  const p = document.createElement("p")
  return p
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""

  const p = createP()
  p.innerHTML = msg
  resultado.appChild("p")
}
