//alert("Olá!")
function contar() {
    let ini = document.getElementById("txti") //puxando o id do html
    let fim = document.getElementById("txtf")
    let passo =document.getElementById("txtp")
    let res = document.getElementById("res") //id da div res no html para mudar ela para Contando#div

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // verificador obrigando a colocar um número < ou > que zero! 
        alert(`[ERRO SEU] \u{1F916} "Olá!!! Sou o Botizinho, vim avisar que Faltam dados".`)
        res.innerHTML = `\u{26A0} AVISO: Preencha todos os campos corretamente!`
    } else {
        res.innerHTML = "Contando: <br>" //Preparando a contagem agora passa a ser contando#div
        let i = Number(ini.value) //convertando para números
        let f = Number(fim.value)
        let p = Number(passo.value)
            //PASSO IGUAL E ABAIXO DE ZERO NÃO ACEITA 
        if (p <= 0) {
            alert(`\u{1F916} Passo Inválido! Considerando Passo 1`)
            p = 1
        }
        if(i < f) { // se inicio menor que fim 
            //CONTAGEM CRESCENTE
        for(let c = i; c <= f; c += p) { //c = inicio; quando for menor ou igual ao fim vai recever ele mesmo + o passo 
            res.innerHTML += `${c} \u{1F449}`  // add emojis `\u{}` dentro de crases colocar o codigo do emoji dentro do bloco {}
        }
    } else {
            //CONTAGEM REGRESSIVA
        for(let c = i; c >= f; c -= p) {
        }
     }
     res.innerHTML +=  `\u{1F3C1} \u{1F9B8}`
    }
}