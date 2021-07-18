//Definir modo de operação do conversor - padrão CtoF
let mode = "CtoF"

function convertButton() {
    if(mode == "CtoF") {
        celsiusToFahrenheit()
    }

    if(mode == "FtoC") {
        fahrenheitToCelsius()
    }
}

function celsiusToFahrenheit() {
    document.getElementById("input-display").innerHTML = "Celsius"
    document.getElementById("output-display").innerHTML = "Fahrenheit"

    mode = "CtoF"

    const celsius = parseFloat(document.getElementById("input-value").value)
    document.getElementById("input-value").value = `${celsius}°C`

    let fahrenheit = celsius * 9 / 5 + 32

    document.getElementById("output-value").value = `${fahrenheit} °F`

}

function fahrenheitToCelsius() {
    document.getElementById("input-display").innerHTML = "Fahrenheit"
    document.getElementById("output-display").innerHTML = "Celsius"

    mode = "FtoC"

    const fahrenheit = parseFloat(document.getElementById("input-value").value)
    document.getElementById("input-value").value = `${fahrenheit}°F`

    let celsius = (fahrenheit - 32) * 5 / 9

    document.getElementById("output-value").value = `${celsius.toFixed(4)} °C`
}