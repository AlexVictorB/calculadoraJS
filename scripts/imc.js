function calculate() {

    let height = document.getElementById("input-height").value
    let weight = document.getElementById("input-weight").value



    let imc = parseFloat(weight) / (parseFloat(height.replace(',', '.')) * parseFloat(height.replace(',', '.'))).toFixed(2)

    document.getElementById("value-imc").innerHTML = `Seu IMC é: ${imc.toFixed(2)}`

    if(imc < 18.5) {
        document.getElementById("reference").innerHTML = "Magreza <br> Você precisa ganhar peso"

    }else if(imc >= 18.5 && imc < 24.9 ) {
        document.getElementById("reference").innerHTML = "Normal <br> Você está no peso ideal"

    }else if(imc >= 24.9 && imc < 30) {
        document.getElementById("reference").innerHTML = "Sobrepeso <br> Você Precisa perder peso"

    }else if(imc > 30) {
        document.getElementById("reference").innerHTML = "Obesidade <br> Você Precisa perder peso"
    }

    console.log(imc)

    console.log(height.value)

}