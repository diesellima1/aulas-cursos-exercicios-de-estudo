//array com loop for in
/*
for(let pos in num) {
  console.log(num[pos])
}
*/
let valores = [8,1,7,4,2,9]
for (let pos in valores) { //pos é igual a posição e valores é o nome da variável
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
/*
 resposta:
  A posição 0 tem o valor 8 ambiente.js:9:11
  A posição 1 tem o valor 1 ambiente.js:9:11
  A posição 2 tem o valor 7 ambiente.js:9:11
  A posição 3 tem o valor 4 ambiente.js:9:11
  A posição 4 tem o valor 2 ambiente.js:9:11
  A posição 5 tem o valor 9 ambiente.js:9:11
*/

//  ordenar .sort()
let valoresOrdem = [8,1,7,4,2,9]
valoresOrdem.sort() //odenando os números 
for (let pos in valoresOrdem) { //pos é igual a posição e valores é o nome da variável
  console.log(`A posição ${pos} tem o valor ${valoresOrdem[pos]}`)
}
/*
 Resposta
  A posição 0 tem o valor 1 ambiente.js:25:11
  A posição 1 tem o valor 2 ambiente.js:25:11
  A posição 2 tem o valor 4 ambiente.js:25:11
  A posição 3 tem o valor 7 ambiente.js:25:11
  A posição 4 tem o valor 8 ambiente.js:25:11
  A posição 5 tem o valor 9 ambiente.js:25:11
 */

//addicionar + .push()
let valoresAdd = [8,1,7,4,2,9]
valoresAdd.push(3,6) //add múmeros (+,+,...)
for (let pos in valoresAdd) { //pos é igual a posição e valores é o nome da variável
  console.log(`A posição ${pos} tem o valor ${valoresAdd[pos]}`)
}
/*
 resposta:
  A posição 0 tem o valor 8 ambiente.js:41:11
  A posição 1 tem o valor 1 ambiente.js:41:11
  A posição 2 tem o valor 7 ambiente.js:41:11
  A posição 3 tem o valor 4 ambiente.js:41:11
  A posição 4 tem o valor 2 ambiente.js:41:11
  A posição 5 tem o valor 9 ambiente.js:41:11
  A posição 6 tem o valor 3 ambiente.js:41:11
  A posição 7 tem o valor 6 ambiente.js:41:11
*/

//PUSH COM SORT "ADD E OREDENA"
let valoresAS = [8,1,7,4,2,9]
valoresAS.push(0,3,5,6)  //add+
valoresAS.sort()    //ordenando os números
for (let pos in valoresAS) { //pos é igual a posição e valores é o nome da variável
  console.log(`A posição ${pos} tem o valor ${valoresAS[pos]}`)
}
/*
respota:
A posição 0 tem o valor 0 ambiente.js:60:11
A posição 1 tem o valor 1 ambiente.js:60:11
A posição 2 tem o valor 2 ambiente.js:60:11
A posição 3 tem o valor 3 ambiente.js:60:11
A posição 4 tem o valor 4 ambiente.js:60:11
A posição 5 tem o valor 5 ambiente.js:60:11
A posição 6 tem o valor 6 ambiente.js:60:11
A posição 7 tem o valor 7 ambiente.js:60:11
A posição 8 tem o valor 8 ambiente.js:60:11
A posição 9 tem o valor 9 ambiente.js:60:11
 
obs: "pos = posição"
*/