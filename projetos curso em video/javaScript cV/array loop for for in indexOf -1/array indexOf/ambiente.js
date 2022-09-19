  //PESQUISAR DENTRO DO VETOR "ARRAY"
   
let num = [4,5,6,7,8]
// num.push(1) //ADD+
// num.sort()  //ORDDENA
console.log(num) //RESPOSTA ARRAY: Array(5) [ 4, 5, 6, 7, 8 ]ambiente.js:6:9
console.log(`O vetor tem ${num.length} posições`) //RESPOSTA: O vetor tem 5 posições ambiente.js:7:9
console.log(`O primeiro valor do vetor é ${num[0]}`) //RESPOSTA: O primeiro valor do vetor é 4 ambiente.js:8:9
let pos = num.indexOf(8) //   PROCURA...O VALOR 8
console.log(`O valor 8 está na posição ${pos}`) //RESPOSTA: O valor 8 está na posição 4 ambiente.js:10:9

// ADD IF ELSE

let num2 = [4,5,6,7,8]
// num2.push(1) //ADD+
// num2.sort()  //ORDDENA
console.log(num2) //RESPOSTA ARRAY: Array(5) [ 4, 5, 6, 7, 8 ]ambiente.js:17:9
console.log(`O vetor tem ${num2.length} posições`) //RESPOSTA: O vetor tem 5 posições ambiente.js:18:9
console.log(`O primeiro valor do vetor é ${num2[0]}`) //RESPOSTA: O primeiro valor do vetor é 4 ambiente.js:19:9
let pos2 = num2.indexOf(8) //   PROCURA...O VALOR 8 se mudar para 3 não sera encontrado!
if (pos2 == -1) { //-1 não encontrado 
  console.log(`O valor não foi encontrado!`) 
} else {
  console.log(`O valor está na posição ${pos2}`) //RESPOSTA: O valor  está na posição 4 ambiente.js:24:11
}


/**
 * -1 significa "não encontrado"
 * letra "o" sempre em maiúscula
 * se ADD+ e ORDENAR o nosso código os valores serão diferentes  
*/

//funcionado 