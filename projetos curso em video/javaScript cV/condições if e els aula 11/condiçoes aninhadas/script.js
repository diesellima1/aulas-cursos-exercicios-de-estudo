// var idade = 22
// if (idade < 18) {
//     console.log("menor de idade")
// }else {
//     console.log("Maior de idade")
// }  // codigo certo funcionando 

// var idade = 22
// if (idade < 18) {
//     console.log("Não Vota")
// }else {
//     console.log("Vota")
// }// código certo mas para essa lógica ele não serve 

// var idade = 18
// if (idade < 16) { //temos que completar para acima de 65 que o voto é opciona també
//     console.log("Não Vota.")
// } else if (idade >= 16 && idade < 18) { //antes do && podemos remover pois o if em cima já diz isso >= 16
//     console.log("Voto Opcional")
// } else {
//     console.log("Voto Obrigatório")    
// }

var idade = 67
if (idade < 16) {
    console.log("Não Vota")
} else if (idade < 18 || idade > 65 ) {
    console.log("Voto Opcional")
}else {
    console.log("Voto obrigatório")
}