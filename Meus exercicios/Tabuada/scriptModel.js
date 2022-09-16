//while
function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("selTab")
    if (num.value.length == 0) {
        alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)//convertendo
        let c = 1
        tab.innerHTML = "" //limpando a tabela com valor vazio
        while ( c <= 10) {
            let item = document.createElement("option") //elemento option define o numero de colunas
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //transforma na barra de selção para mostrar onde vai ser clicado 
            tab.appendChild(item)
            c++
        }
    }
}

//funcionado 