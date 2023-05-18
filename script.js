function calculate () {
    const peso = (document.getElementById("peso").value)/100
    const altura = document.getElementById("altura").value

    let imc = altura / peso ** 2

    if (imc < 18.5) {
        window.alert(`Seu imc é ${imc.toFixed(2)} Você está magro.`)
    } else if (imc < 24.9) {
        window.alert(`Seu imc é ${imc.toFixed(2)} Você está com o peso ideal.`)
    } else if (imc = 25) {
        window.alert(`Seu imc é ${imc.toFixed(2)} Você está Sobrepeso.`)
    } else if (imc < 29.9) {
        window.alert(`Seu imc é ${imc.toFixed(2)} Você está Pré-Obeso.`)
    } else if (imc < 34.9) {
        window.alert(`Seu imc é ${imc.toFixed(2)} Você está Obeso 1.`)
    } else if (imc < 39.9) {
        window.alert(`Seu imc é ${imc.toFixed(2)} Você está Obeso 2.`)
    } else if (imc > 40) {
        window.alert(`Seu imc é ${imc.toFixed(2)} Você está Obeso 3.`)
    } else {
        window.alert("Seu imc está inválido")
    }
}

