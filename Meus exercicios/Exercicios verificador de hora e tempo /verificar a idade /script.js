//  TESTE DE FUNÇÃO
// function verificar() {
//     alert("FUNCIONOU!")
// } 

function verificar() {
    var data = new Date
    var ano = data.getFullYear() //ANO ATUAL COM 4 DIGITOS QUE PUXA OS DADOS DO <p>Ano de Nacimento<p> L18
    var fano = document.getElementById("txtano") //fano = FORMUÁRIO DO ANO OU SEJA DADOS RECEBIDOS E DIGITADOS NO INPUT NUMBER L18
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value) //CÁLCULO DO ANO COM A INDADE
        //res.innerHTML = `idade calculada: ${idade}` //TESTE DE IDADE
        var gênero = ""
        var img = document.createElement("img") //add imagem dinâmicamente
        img.setAttribute("id", "foto") 
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute("src", "foto-bebe-m.png")
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute("src", "foto-jovem-m.png")
            } else if (idade < 50) {
                //ADULTO 
                img.setAttribute("src", "foto-adulto-m.png")
            } else {
                //IDOSO
                img.setAttribute("src", "foto-idoso-m.png")
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute("src", "foto-bebe-f.png")
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute("src", "foto-jovem-f.png")
            } else if (idade < 50) {
                //ADULTO 
                img.setAttribute("src", "foto-adulto-f.png")
            } else {
                //IDOSO
                img.setAttribute("src", "foto-idosa-f.png")
            }
        }
        res.style.textAlign = "center" //aliando texto dentro do java
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` //TEXTO COM PLACER HOLDER
        res.appendChild(img) //COMANDO PARA MANDAR APARECER AS IMAGENS APÓS O TEXTO 
    }
}

//FUNCIONANDO TODAS AS FOTOS ! falta centralizar a foto e fazer um flex box.

