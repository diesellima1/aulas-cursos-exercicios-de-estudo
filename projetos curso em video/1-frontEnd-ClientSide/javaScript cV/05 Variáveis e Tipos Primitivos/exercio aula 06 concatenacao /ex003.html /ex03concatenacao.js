// Convertendo com parseInt e parseFloat 



var n1 = Number.parseInt (prompt("Digite um número:")); //o comando prompt trata todas as variáveis como string
var n2 = Number.parseInt (prompt("Digite outro número:")); //n representa número mas não é uma regra!
var soma = n1 + n2; // soma poderia ser apenas S 
//alert("A soma dos dois números é " + soma );         // Sem Tamplate  String 
alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`) //Tamplate  String dentro do alerta 

//(number + number) adição ou seja soma os números 
//(string + string) junta as strings concatenação 

//para converter uma string em número usamos 3 comandos 
//1- Number.parseInt  ou apenas parseInt ; para números inteiros 
//2- Number.parsefloat ou apensa parseFloat; para múmeros com . e , ; 
//3- Number(); dectecta automaticamente sem forçar o resultado coma nas anteriores 


//alert("A soma dos dois números é " + soma );


// ordem de precedência cálculo combinado 

var a = 5 + 3 // 5 + 3 é igual a 8 ; a agora vale 8 

var b = a % 5 // subistitui a por 8; 8 % 5 é igual 1; 5 * 1 é igual a 5; 5 pra 8 falta 3; resta 3; b igual a 3;

var c = 5 * b**2 // prioridade da potência; 3 ao quadrado igual a 9; 5 vezes 9 igual a 45; c vale 45;

var d = 10 - a/2 // prioridade da divisão; a vale 8 então 8 dividido por 2 igual a 4; 10 menos 4 igual a 6; d vale 6

var e = 6* 2 / d // prioridade do que apareceu primeiro; 6 vezes 2 igual a 12; 12 dividido por 6 igual a 2; d vale 2 

var f = b % e + 4 / e // prioridade do que apareceu primeiro; 3 dividido% por 2 igual 1 inteiro ; 4 dividido por 2 igual a 2; 1 mais 2 igual a 3; 
//dica % dividido por inteiros : dividido e o resto ; 

// simplificando  

var n = 3 

n = n + 4;     n += 4 
n = n - 5;     n -= 5
n = n * 4;     n *= 4
n = n / 2;     n /= 2
n = n ** 2;    n **= 2 
n = n % 5;     n %= 5 

//auto-atribuição  "tirar o carro da vaga para colocar outro "

n = n + 4 // 3 + 4 igual a 7; aqui n passou a valer 7; 
let n = 3 // aqui n vale 3; 

//agora n vale 7 

// operadores relacionais estão ligados aos booleanos ! <=; >=;  


// exemplo de operadores 

> teste ?"":"";
Uncaught ReferenceError: texte is not defined
> var x = 8 
undefined
> var resultado = x % 2 == 0 ? 5: 9  // x % 2 é operador aritmético começa por ele 
undefined
> x
8
> resultado
5

// exemplo 2 
var idade = 19
var resultado2 = idade >= 18  ? "MAIOR" : "menor";
//resultado2 resebeu novo atributo agora ele é treu e passa a ser MAIOR 
// resultado2 == MAIOR ; 