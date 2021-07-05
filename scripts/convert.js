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

    const dolarValue = parseFloat(jsonUsd["bid"])

    let realValue = document.getElementById("input-value").value

    let conversionResult = parseFloat(realValue).toFixed(2) * dolarValue

    //DEBUGGING

    console.log(dolarValue)
    console.log(realValue)
    console.log(conversionResult)

    document.getElementById("output-value").value = conversionResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return conversionResult
}

function usdToReal() {}

function btcToReal() {}

function realToBtc() {}




//Para testes
let jsonValues = JSON.parse(getValue(url))

let jsonUsd = jsonValues["USDBRL"]
console.log(jsonValues)



