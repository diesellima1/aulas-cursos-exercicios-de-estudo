//FUNÇÕES - RETURN

//  DESCOBRIR SE UM NÚMERO É PAR OU ÍMPAR
function parImpar(n) { //"n = número " parImpar recebe um número
    if (n%2 == 0) { // dividido por 2 inteiro e resto igual a zero n é par  
        return "Par!"
    } else {
        return "Ímpar"
    }
}
//CHAMAR A FUNÇÃO FORA DO BLOCO COM UMA VARIÁVEL 1
console.log(parImpar(223)) //resto 1
//CHAMAR A FUNÇÃO FORA DO BLOCO COM UMA VARIÁVEL 2
let res = parImpar(4) // resto 0 
console.log(res) //"res = resultado"

//* ACHAMADA PODE SER FEITA DE DUAS MANEIRAS COMO VISTO NO EXEMPLO 1 E 2 

