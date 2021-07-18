function calculate() {

    let height = document.getElementById("input-height").value
    let weight = document.getElementById("input-weight").value



    let imc = parseFloat(weight) / (parseFloat(height.replace(',', '.')) * parseFloat(height.replace(',', '.'))).toFixed(2)

    console.log(imc)

    console.log(height.value)

}