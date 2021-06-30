
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

const keysMap = {
    '0' : "key0",
    '1' : "key1",
    '2' : "key2",
    '3' : "key3",
    '4' : "key4",
    '5' : "key5",
    '6' : "key6",
    '7' : "key7",
    '8' : "key8",
    '9' : "key9",
    '+' : "key+",
    '-' : "key-",
    '/' : "key/",
    '*' : "key*",
    'Backspace0': "key<",
    'Escape': "keyc"
}



function keyboardMap(e) {
    key = e.key

    const keysList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", ".", "Enter", "Escape", "Backspace"]


    if (keysList.indexOf(key) == key) {
        console.log(key)
        insert(key)
        console.log(keysList)
    } else if (key == 'Backspace') {
        back()
    }else if (key == 'Escape') {
        clean()
    }else if (key == 'Enter') {
        calc()
    }else if (key == '+') {
        insert('+')
    }else if (key == '-') {
        insert('-')
    }else if (key == '*') {
        insert('*')
    }else if (key == '/') {
        insert('/')
    }else if (key == '.') {
        insert('.')
    }
    
}

document.addEventListener('keydown', keyboardMap)