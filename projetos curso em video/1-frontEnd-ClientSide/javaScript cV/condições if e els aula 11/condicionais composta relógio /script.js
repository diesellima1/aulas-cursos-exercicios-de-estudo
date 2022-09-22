// var hora = 8
// console.log(`Agora são exatamente ${hora} horas.`);
// if ( hora < 12) {
//     console.log("Bom Dia!!!");
// } else if ( hora <= 18) {
//     console.log("Boa Tarde!!!");
// } else {
//     console.log("Boa Noite!!!");
// } else { 
//      console.log("Boa Madrugada!")     //pedido do professor erro falta corrigir 
// }

var agora = new Date()
var hora = agora.getHours  
console.log(`agora são exatamente ${hora} horas.`);
if ( hora < 12) {
    console.log("Bom Dia!!!");
} else if ( hora <= 18) {
    console.log("Boa Tarde!!!");
} else {
    console.log("Boa Noite!!!");
}

// código estranho roda manco  