function calcular() { //nome da minha função
    var txtv = window.document.querySelector("input#txtvel")//ligação com o html na linha 11 da caixa de texto txtvel
    var res = window.document.querySelector("div#res")//ligação com acaixa de texto linha 14 id# class.;
    var vel = Number(txtv.value) //comversão joga o texto para a variável vel que passa a valer o valor atribuído 
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`//resultado1
    if (vel > 60) { //condição
        res.innerHTML += "<p>Vovê está <strong>MULTADO</strong> por excesso de velocidade</p>"//resultado2 +=concatenado com o resesultado1
    }
    res.innerHTML += "<p>Dirija sempre com cinto de segurança!</p>"
}