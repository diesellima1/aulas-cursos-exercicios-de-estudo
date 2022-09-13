// Vamos criar uma função que retorna um texto, algo bem simples

//     Crie uma função chamada textReturn

function textReturn (){
    return 'Olá'
}

console.log(textReturn())

// amos gerar o texto 'dinamicamente' passando por parâmetro

console.log(textReturn('Olá, estou sendo retornado pela função'))

function textReturn (text){
    console.log(text)
  }

textReturn('Olá')




// Exercício 1 - Somar valores


function somarDoisValores (a, b){
    let resultadoSoma = a + b;
    return resultadoSoma;
}

let resultado = somarDoisValores (15, 876);


console.log(somarDoisValores(15, 876))

