var agora = new Date()
var diaSem = agora.getDay()

diaSem = 0
/*
        0 = Domingo
        1 = Segunda
        2 = Terça
        3 = Quarta
        4 = Quinta
        5 = Sexta
        6 = Sábado
*/

//console.log(diaSem)

switch(diaSem){
    case 0 :
        console.log("Domingo")
        break
    case 1 :
        console.log("Segunda")
        break
    case 2 :
        console.log("Terça")
        break
    case 3 :
        console.log("Quarta")
        break
    case 4 :
        console.log("Quinta")
        break
    case 5 :
        console.log("Sexta")
        break
    case 6 :
        console.log("Sábado")
        break
    default:  // caso nem uma alternativa sefa valido pode ter uma instrução ou msg de [ERRO]
        console.log("[ERRO] Dia inválido :(")
        break // esse break é opcional pois não tem mais comandos abaixo 
}