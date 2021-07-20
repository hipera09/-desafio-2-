var simbolos = ['+', '-', '*', '/', '.']

function botao(num) {
    let numero = document.getElementById('valor').innerHTML;
    if (simbolos.includes(numero.slice(-1)) && simbolos.includes(num)) {
        document.getElementById('valor').innerHTML = numero
    } else {
        document.getElementById('valor').innerHTML = numero + num;
    }

}

function limpar() {
    let expressao = document.getElementById('valor').innerHTML;
    if (expressao.length > 0) {
        document.getElementById('valor').innerHTML = expressao.slice(0, -1);
    } else {
        document.getElementById('valor').innerHTML = expressao;
    }

}

function limpar_tela() {
    document.getElementById('valor').innerHTML = '';
}

function calcula() {
    let expressao = document.getElementById('valor').innerHTML;
    if (expressao) {
        document.getElementById('valor').innerHTML = eval(expressao);
    }
}