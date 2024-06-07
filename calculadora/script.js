function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function calcularResultado() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        alert('Erro na expressão');
        clearDisplay();
    }
}

function mostrarPi() {
    document.getElementById('display').value = Math.PI;
}
