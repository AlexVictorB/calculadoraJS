const url = "http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"

function getValue(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()


    return request.responseText
}


function realToUsd() {
    let jsonValues = JSON.parse(getValue(url))
    let jsonUsd = jsonValues["USDBRL"]

    document.getElementById("input-display").innerHTML = "Real"
    document.getElementById("output-display").innerHTML = "Dolar"
    

    const dolarValue = parseFloat(jsonUsd["bid"])

    let realValue = document.getElementById("input-value").value

    let conversionResult = parseFloat(realValue).toFixed(2) * dolarValue

    //DEBUGGING

    console.log(dolarValue)
    console.log(realValue)
    console.log(conversionResult)

    document.getElementById("output-value").value = conversionResult.toLocaleString('en-IN', { style: 'currency', currency: 'USD' });

    return conversionResult
}

function usdToReal() {
    let jsonValues = JSON.parse(getValue(url))
    let jsonUsd = jsonValues["USDBRL"]

    document.getElementById("input-display").innerHTML = "Dolar"
    document.getElementById("output-display").innerHTML = "Real"
    

    const dolarValue = parseFloat(jsonUsd["bid"])

    let realValue = document.getElementById("input-value").value

    let conversionResult = parseFloat(realValue).toFixed(2) / dolarValue

    //DEBUGGING

    console.log(dolarValue)
    console.log(realValue)
    console.log(conversionResult)

    document.getElementById("output-value").value = conversionResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return conversionResult
}

function btcToReal() {

    let jsonValues = JSON.parse(getValue(url))
    let jsonUsd = jsonValues["BTCBRL"]

    document.getElementById("input-display").innerHTML = "Bitcoin"
    document.getElementById("output-display").innerHTML = "Real"
    

    const dolarValue = parseFloat(jsonUsd["bid"])

    let realValue = document.getElementById("input-value").value

    let conversionResult = parseFloat(realValue).toFixed(4) * dolarValue

    //DEBUGGING

    console.log(dolarValue)
    console.log(realValue)
    console.log(conversionResult)

    document.getElementById("output-value").value = `R$ ${conversionResult},00`//conversionResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return conversionResult

}

function realToBtc() {
    let jsonValues = JSON.parse(getValue(url))
    let jsonUsd = jsonValues["BTCBRL"]

    document.getElementById("input-display").innerHTML = "Real"
    document.getElementById("output-display").innerHTML = "Bitcoin"
    

    const dolarValue = parseFloat(jsonUsd["bid"])

    let realValue = document.getElementById("input-value").value

    let conversionResult = parseFloat(realValue).toFixed(2) / dolarValue.toFixed(7)

    //DEBUGGING

    console.log(dolarValue)
    console.log(realValue)
    console.log(conversionResult)

    document.getElementById("output-value").value = conversionResult.toFixed(7) //conversionResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return conversionResult
}




//Para testes
let jsonValues = JSON.parse(getValue(url))

let jsonUsd = jsonValues["USDBRL"]
console.log(jsonValues)



