/*
//ARRAY 
let numArray = [5,8,4]

//OBJECT
let Object = {nome:"José", sexo:"M", peso:85.4, engordar(p){}}
"A Própria variável tem funcionalidades dentro dela"
*/

let amigo = {nome: "José",
sexo:"M",
peso: 85.4,
engordar (p = 0){
    console.log("engordou")
    this.peso += p //this é referencia direta ao objeto
}}
amigo.engordar(2) //ativando a funcionalidade atribuida para a variável
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
//resposta: engordou script.JS:14:13
//          José pesa 87.4kg script.JS:18:9

//funcionando! 