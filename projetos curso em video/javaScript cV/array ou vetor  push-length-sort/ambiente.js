//ARRAY OU VETOR

/*
sintaxe let nome = [;;]
simplificando l=[;;] 
let num = [5;8;4]
array vazio: let nome = []
*/

//array VAZIO:
let num0 = []
console.log(num0)

//COM TEMPLATE STRINGS: 
let num1 = [5,8,2,9,3]  
console.log(`nosso vetor é ${num1}`)

//SEM TAMPLATE STRINGS:
let num2 = [5,8,2,9,3]
console.log(num2)

//PUSH
//ADD VALOR SEM PERDER OS OUTROS USAR [+]= ou .push()
/*
  let num = [5,8,4]
  let mum[3] = 6   //acrescentar valor manualmente "[3]=0;1;2;+3 que recebe o valor 6" 
  let num.push(7)  //acrescentar valor automaticamante emprando para dentro do array
*/

//------------------------------------------------------------------


//LENGTH - "Comprimento"
/*
num.length;    //não usa parenteses em javaScript
*/

// SORT - "Ordenar"
/*
num.sort()
*/

//EX lemgth:
let num = [5,8,2,9,3] //0 a 4 
console.log(`O vetor tem ${num.length} posições`)
//resposta:O vetor tem 5 posições
console.log(num[0]) //pedido para mostrar o que tem na pasição zero 
//resposta: 5 
console.log(`O segundo valor do vetor é ${num[1]}`)
//resposta: 8  

//EX sort():
let numS = [5,8,2,9,3] 
numS.sort() //ordenar
console.log(numS)
//resposta:[2,3,5,8,9]

//EX push()
let numP = [5,8,2,9,3]
numP.push(1) //empurando + 1 valor "add valor" 
console.log(numP)
//resposta:[5,8,2,9,3,1]

//ATENÇÃO COM A ORDEM DE COLOCAÇÃO 
//COLOCAÇÃO 1
//ao colocar sort() antes de push ele ordena e depois adiciona 
let numSp = [5,8,2,9,3]
numSp.sort()  //ordenar
numSp.push(1) //add valor 1
console.log(numSp) //respota 1
console.log(`sort antes de push:${numSp}`) //resposta 2
//resposta 1:[ 2, 3, 5, 8, 9, 1 ]
//resposta 2:sort antes de push:2,3,5,8,9,1

//COLOCAÇÃO 2
//ao colocar push() e depois sort
let numPs = [5,8,2,9,3]
numPs.push(1) //add valor 1
numPs.sort()  //ordenar
console.log(numPs)  //resposta 1
console.log(`Push antes de sort: ${numPs}`) // resposta 2 
//resposta 1: [ 1, 2, 3, 5, 8, 9 ]
//resposta 2: Push antes de sort: 1,2,3,5,8,9 



