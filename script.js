var input = document.querySelector("#input-text");

var botaoCripto = (document.querySelector("#button-cripto"));
botaoCripto.onclick = (startCripto);

var botaoDeCripto = (document.querySelector("#button-descripto"));
botaoDeCripto.onclick = (startDeCripto);

var botaoCopia = (document.querySelector("#button-copy"));
botaoCopia.onclick = (copia);

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
   return(textoCripto);
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
   return(textoDecripto);
}

function copia(){
   var copia = (document.querySelector("#output-text"));
   navigator.clipboard.writeText(copia.value);
   input.focus();
   limpa();
}

function limpa() {
   var limpa = (document.querySelector("#input-text"));
   limpa.value = ("");
   limpa.focus();
   var limpa = (document.querySelector("#output-text"));
   limpa.value = ("");
}

function startCripto() {
   if(input.value == "") {
       limpa();
   }else {
       cripto();
   }
}

function startDeCripto() {
   var textoStart = (document.querySelector("#input-text"));
   var palavrasChaves = ['enter', 'imes', 'ai', 'ober', 'ufat'];
   var textoValor = (textoStart.value);
   var verifica = palavrasChaves.some(chaves => textoValor.includes(chaves));
   if(input.value == "") {
       limpa();
   }else if(verifica) {
       deCripto(); 
   }else {
       alert("TEXTO NÃO CRIPTOGRAFADO!");
       limpa();
   }
}