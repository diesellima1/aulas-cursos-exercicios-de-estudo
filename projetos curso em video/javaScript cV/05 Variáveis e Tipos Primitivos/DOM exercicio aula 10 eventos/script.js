// //a1 do html
// function clicar() {
//  var area = window.document.getElementById("area")
//  area.innerText = "Clicou!"
// }

// Exemplo para trocar de cor 

// bloco
var area = window.document.getElementById("area") //escopo global não recomendado

function clicar() {
    area.innerText = "Clicou!";
    area.style.background = "red";
}

function entrar() {
    area.innerText = "Entrou!";
}

function sair() {
area.innerText = "saiu!";
area.style.background = "green";
}
//bloco