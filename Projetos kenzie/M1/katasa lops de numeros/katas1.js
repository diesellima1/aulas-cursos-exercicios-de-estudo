
/* Entrega - Katas de JavaScript */ 


function oneThroughTwenty(numero) 
{
  let arr = []  
  let n = 1
  while (n <= numero) {
    arr.push(n)
    n++
  }
  console.log('O loop de números de 1 a 20 acabou.')
    return arr
}

//call function oneThroughTwenty
oneThroughTwenty(20) 



function evensToTwenty(){
  let arr = []  
  for (let i = 2; i <= 20; i = i+2){
    arr.push(i)
 }
  console.log('O loop de números pares de 1 a 20 acabou.')
  return arr

}
//call function evensToTwenty
evensToTwenty() 



function oddsToTwenty(){
  let arr = []  
  for (let i = 1; i <= 20; i = i+2){
    arr.push(i)
 }
  console.log('O loop de números ímpares de 1 a 20 acabou.')
  return arr

}
//call function oddsToTwenty
oddsToTwenty() 



function multiplesOfFive(){
  let arr = []  
  for (let i = 5; i <= 100; i = i+5){
    arr.push(i)
 }
  console.log('O loop de múltiplos de 5 até 100 acabou.')
  return arr

}
//call function multiplesOfFive
multiplesOfFive() 



function squareNumbers(){
  let arr = []  
  for (let i = 1; i <= 10; i++){
    arr.push(i*i)
 }
  console.log('O loop de números até 100 que forem quadrados perfeitos acabou.')
  return arr

}
//call function squareNumbers
squareNumbers()




function countingBackwards(){
  let arr = []  
  for (let i = 20; i >= 1; i -= 1){
    arr.push(i)
 }
  console.log('O loop de números contando de trás para frente de 20 até 1 acabou.')
  return arr

}
//call function countingBackwards
countingBackwards()  



function evenNumbersBackwards(){
  let arr = []  
  for (let i = 20; i >= 2; i = i-2){
    arr.push(i)
 }
  console.log('O loop de números pares de 20 até 1 acabou.')
  return arr

}
//call function evenNumbersBackwards
evenNumbersBackwards() 



function oddNumbersBackwards(){
  let arr = []  
  for (let i = 20; i >= 1; i--){
    if(i %2 != 0){
      arr.push(i)
    }
 }
  console.log('O loop de números ímpares de 20 até 1 acabou.')
  return arr

}
//call function oddNumbersBackwards
oddNumbersBackwards()  



function multiplesOfFiveBackwards(){
  let arr = []  
  for (let i = 100; i >= 5; i = i-5){
    arr.push(i)
 }
  console.log('O loop de múltiplos de 5 contando de trás para frente a partir de 100 acabou.')
  return arr

}
//call function multiplesOfFiveBackwards
multiplesOfFiveBackwards()  



function squareNumbersBackwards(){
  let arr = []  
  for (let i = 10; i >= 1; i--){
    arr.push(i*i)
 }
  console.log('O loop de quadrados perfeitos contando de trás para frente a partir de 100 acabou.')
  return arr

}
//call function squareNumbersBackwards
squareNumbersBackwards() 


  