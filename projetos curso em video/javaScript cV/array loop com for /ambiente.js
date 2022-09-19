//array com loop for 


//codigo tradicional com percurso em vetores 
/*
for (let pos = 0; pos < num.length; pos++) {
  console.log(num[pos])
}
*/

//  TESTE COM O LOOP for:
let valores = [8,1,7,4,2,9]
for(let pos=0; pos < valores.length; pos++) { //"pos = posição"
  console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
/*
  Respostas:
  a posição 0 tem o valor 8 ambiente.js:11:11
  a posição 1 tem o valor 1 ambiente.js:11:11
  a posição 2 tem o valor 7 ambiente.js:11:11
  a posição 3 tem o valor 4 ambiente.js:11:11
  a posição 4 tem o valor 2 ambiente.js:11:11
  a posição 5 tem o valor 9 ambiente.js:11:11
*/


//TESTE SEM O LOOP for:
let valoresSemFor = [8,1,7,4,2,9]
console.log(valoresSemFor[0])
console.log(valoresSemFor[1])
console.log(valoresSemFor[2])
console.log(valoresSemFor[3])
console.log(valoresSemFor[4])
console.log(valoresSemFor[5])
console.log(`O valor é: ${valoresSemFor[5]}`) 

/*
respastas:
8 ambiente.js:26:9
1 ambiente.js:27:9
7 ambiente.js:28:9
4 ambiente.js:29:9
2 ambiente.js:30:9
9 ambiente.js:31:9
O valor é: 9 ambiente.js:32:9
*/