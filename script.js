var input = document.querySelector("#input-text");

var botaoCripto = (document.querySelector("#button-cripto"));
botaoCripto.onclick = (verificaTexto);

var botaoDeCripto = (document.querySelector("#button-descripto"));
botaoDeCripto.onclick = (startDeCripto);

var botaoCopia = (document.querySelector("#button-copy"));
botaoCopia.onclick = (copia);

function verificaTexto() {
    if ((verificaNumero() * verificaMaiscula() * verificaCaractere()) == 1) {
        cripto();
        exibeErro();
    } else {
        limpaOutput();
        exibeErro();
    }
}

function startDeCripto() {
    var textoStart = (document.querySelector("#input-text"));
    var palavrasChaves = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    var textoValor = (textoStart.value);
    var verifica = palavrasChaves.some(chaves => textoValor.includes(chaves));
    if (input.value == "") {
        limpaInput();
    } else if (verifica) {
        deCripto();
        limpaInput();
    }
}

function copia() {
    var copia = (document.querySelector("#output-text"));
    navigator.clipboard.writeText(copia.value);
    input.focus();
    limpaInput();
    limpaOutput();
}

function cripto() {
    var textoCripto = input.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    var output = (document.querySelector("#output-text"));
    output.value = (textoCripto);
    input.focus();
    return (textoCripto);
}

function deCripto() {
    var textoDecripto = input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    var output = (document.querySelector("#output-text"));
    output.value = (textoDecripto);
    return (textoDecripto);
}

function limpaInput() {
    var limpaInput = (document.querySelector("#input-text"));
    limpaInput.value = ("");
    limpaInput.focus();

}

function limpaOutput() {
    var limpaOutput = (document.querySelector("#output-text"));
    limpaOutput.value = ("");
}

function verificaNumero() {
    var verificaNumero = input.value;
    for (var auxNum = 0; auxNum < verificaNumero.length; auxNum++) {
        var conversao = verificaNumero[auxNum].charCodeAt(0);

        if (conversao == 32) auxNum++

        else if (!isNaN(verificaNumero[auxNum])) return 0;
    }
    return 1;
}

function verificaMaiscula() {
    var verificaText = input.value;
    for (var auxText = 0; auxText < verificaText.length; auxText++) {
        var conversao = verificaText[auxText].charCodeAt(0);

        if (conversao == 32) {
            auxText++;
            console.log("cheguei aqui");
        }
        
        
        else if (conversao >= 65 && conversao <= 90) return 0;
    }
    return 1;
}

function verificaCaractere() {
    var verificaText = input.value;
    for (var auxText = 0; auxText < verificaText.length; auxText++) {
        var conversao = verificaText[auxText].charCodeAt(0);
        
        if (conversao == 32 || (conversao >= 65 && conversao <= 90) || !isNaN(verificaText[auxText])) auxText++;
        
        else if (conversao > 122 || conversao < 97) return 0;
    }
    return 1;
}

function exibeErro() {
    var erroNumero = document.querySelector("#erroNumero");
    var erroMaiscula = document.querySelector("#erroMaiscula");
    var erroCaractere = document.querySelector("#erroCaractere");

    var erroDecript = document.querySelector("#erroDecripto");
    erroDecript.classList.remove("erro")

    if (verificaNumero() == 0) erroNumero.classList.remove("erro");
    else erroNumero.classList.add("erro");

    if (verificaMaiscula() == 0) erroMaiscula.classList.remove("erro");
    else erroMaiscula.classList.add("erro");

    if (verificaCaractere() == 0) erroCaractere.classList.remove("erro");
    else erroCaractere.classList.add("erro");
}