function insert(num) {

    let number = document.getElementById('result').innerHTML;

    document.getElementById("result").innerHTML = number + num;

}

function clean() {
    document.getElementById("result").innerHTML = "";
}

function back() {

    let display = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = display.substring(0, display.length -1);
}

function calc() {

    let display = document.getElementById('result').innerHTML;

    if(display) {
        document.getElementById('result').innerHTML = eval(display)
    }
    else {
        document.getElementById('result').innerHTML = ""
    }
}