 //falta ligar no html

    function somar() {
        var tn1 = window.document.getElementById("txtn1");//tenho que saber qual é a caixa n1 e o n2 "fazendo a ligação com elas "
        var tn2 = window.document.querySelector("input#txtn2");
        var res = window.document.getElementById("res")
        var n1 = Number(tn1.value);
        var n2 = Number(tn2.value);
        var s = n1 + n2 //var soma concatenado n1 com n2 
        res.innerHTML = `A soma entre ${n1} e ${n2} é igual à: <strong>${s}<strong/>`;//template string e place holder
    }

  