let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"

function getValue(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()

    return request.responseText
}

let jsonValues = JSON.parse(getValue(url))

console.log(jsonValues)