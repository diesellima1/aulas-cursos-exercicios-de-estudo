//FUNÇÕES - RETURN  SOMA+
function soma(n1,n2) {
    return n1 + n2
}
console.log(soma(2,5))
//respasta: 7 


//NaN: Not a Number
function somaNan(n1,n2) {
    return n1 + n2
}
console.log(somaNan(2,)) //Nan faltou um parametro para somar
//resposta: Nan


//PARAMETROS OPCIONAIS PARA EVITAR O NAN "=0"
function somaOp(n1=0,n2=0) { //add =0
    return n1 + n2
}
console.log(somaOp(7)) //soma 7 com nada é nada 
//resposta: 7 