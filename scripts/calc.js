
// Funções básicas da calculadora
function DOMDisplay() {
    let display = document.getElementById('display').value;

    return display;
}

function insert(num) {

    let display = DOMDisplay();

    document.getElementById('display').value = display + num

}

function clean() {
    document.getElementById('display').value = "";
}

function back() {

    let display = document.getElementById('display').value;

    document.getElementById('display').value = display.substring(0, display.length -1);
}

function calc() {

    let display = document.getElementById('display').value;

    if(display) {
        document.getElementById('display').value = eval(display)
    }
    else {
        document.getElementById('display').value = ""
    }
}

// Bloco para fazer teclas funcionarem

let texto = document.getElementById('display');

console.log(texto);

texto.addEventListener("keypress", function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.which);

    console.log(keyCode)

    //Exclui letras e mantém apenas números e simbolos

    if (keyCode > 58) {
        e.preventDefault();
        insert(String.fromCharCode(keyCode))

    }

    if (keyCode < 41) {
        e.preventDefault();
        insert(String.fromCharCode(keyCode))

    }

    
})


function write() {

    let texto = document.getElementById('display');

    addEventListener("keypress", function(e){
        const keyCode = (e.keyCode ? e.keyCode : e.which);

        document.getElementById('display').value = "ola";
    })
}