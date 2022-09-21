let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista") //pode usar getElement "let res = document.getElementById("select#flista")"
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //limita de 1 até 100
        return true //não mostra na tela
    } else {
        return false //não mostra na tela
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //-1 representa o valor invalido 
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {  //esclamação ! significa não em js
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //limpa o resultado anterior para calcular o novo resultado 
        res.innerHTML = ""
    } else {
        alert(`\u{26D4} Valor inválido ou já encontrado na lista.`)
    }
    num.value = "" //clean valor digiyado no input
    num.focus()    //foca o ponteiro sem precisar clicar
}

    
function finalizar() { //ligado com let valores = [] L.4
    if (valores.length == 0) {
        alert(`\u{26A0} ATENÇÃO: Adicione valores antes de finalizar!`)
    } else {
        let tot = valores.length //variável total
        let maior = valores[0] //maior numero é o primeiro "zero" 
        let menor =valores[0]  //menor número é o primeiro "zero" 
        let soma = 0
        let media = 0 
        for(let pos in valores) { //teste para cada posição
            soma += valores[pos] //soma o primerio valor "zero" com o restante das posiçoões"pos"
            if(valores[pos] > maior) //valor da posição for maior que o menor..
                maior = valores[pos] //.o maior valor passa a ser valores pos
            if (valores[pos] < menor)//se o menor for menor que o menor..
                menor = valores[pos]//.o moner passa a ser o valor pos
        }
        media = soma / tot //media dividida pelo total 
        res.innerHTML = ""
        res.innerHTML += `<p>\u{1F7E2} Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>\u{1F4C8}. O Maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>\u{1F4C9}. O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>\u{1F4F1}. Somando todos os valores temos: ${soma}</p>`
        res.innerHTML += `<p>\u{2696}. A Média dos valores digitados é: ${media}</p>`
    }
}

/*
  funcionado!  
 */