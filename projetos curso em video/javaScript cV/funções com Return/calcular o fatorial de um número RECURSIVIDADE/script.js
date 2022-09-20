//CALCULAR O FATORIAL DE UM NÚMERO 
// ex: 5! "Cinco fatorial é igual a cinco vezes: 5x4x3x2x1" 
//O fatorial de 5 é 120 ("5!=120")
//ex:1
function fatorial(n) { //função fatorial recebe um número ("n+número")
    let fat = 1 //variável "fat = a fatorial"
    for(let c = n; c > 1; c--) {
        fat *= c
    } 
    return fat
} 
console.log(fatorial(5)) //mostrar o farorial de 5 
//5! = 5x4x3x2x1 = 120
//resposta: 120

/*
OFATORIAL DE UM NÚMERO PODE SER CALCULADO POR OUTRO
 O FATORIAL DE 5 É IGUAL A 5 VEZES O FATORIAL DE 4 
5! = 5X4!
MATEMATICAMENTE SABEMOS QUE O FATORIAL DE 1 É 1
n! = n x (n-1)!
1! = 1 
*/

//ex2:
//  FATORIAL QUE CHAMA FATORIA "CHAMA ELE MESMO"

//RECURSIVIDADE:
function fatorial2(n) {
    if (n == 1) {
        return 1 //"1! = 1"
    } else {
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(5)) //mostrar o farorial de 5 
//resposta: 120