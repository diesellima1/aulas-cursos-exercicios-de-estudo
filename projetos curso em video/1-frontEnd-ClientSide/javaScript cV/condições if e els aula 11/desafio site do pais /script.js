function checking() { //nome da minha função que foi chamada linha 13 html
    var país = window.document.querySelector("input#país")//ligação com o html na linha 13 da caixa de texto txtvel
    var país = window.document.querySelector("div#rescx")//ligação com acaixa de texto linha 15 id# class.;
    rescx.innerHTML = "<p>Você é <strong>Imigrante</strong> Bem vindo ao Brasil!</p>" //resultado1 true
    if (país == "Brasil" || país == "brasil" ) { //condição 
        país.innerHTML += `<p>Sua nacionalidade é <strong>BRASILEIRA</strong> passe para o portão 2</p>`//resultado2 false +=concatenado com o resesultado1
    }
    país.innerHTML += "<p>Obrigatório o uso de mascara para fazer chek-in!</p>"
}


//falta concluir erro na linha 5 ele esta apenas concatendo a soma 
