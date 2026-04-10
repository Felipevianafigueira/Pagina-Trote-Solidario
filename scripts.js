function calcular(){

    let qtdeArroz = Number (document.getElementById("qtdeArroz").value)
    let qtdeFeijao = Number (document.getElementById("qtdeFeijao").value)
    let qtdeMacarrao = Number (document.getElementById("qtdeMacarrao").value)
    let qtdeOleo = Number (document.getElementById("qtdeOleo").value)

    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4) + (qtdeOleo * 2)

    // pontuação dos kits de alimentação
    //recupera a cor escolhida pelo usuário
    let cor = document.getElementById("cor").value
    
    //estrutura de seleção
    //meta do kit de alimentacao de acordo com a equipe
    let metakit
    if (cor == "amarelo"){
        metakit = 54
    }
    else if (cor == "cinza"){
        metakit = 51
    }
    else if (cor == "laranja" ){
        metakit = 21
    }
    else if (cor == "marrom" ){
        metakit = 88
    }
    else if (cor == "preto" ){
        metakit = 60
    }
    else if (cor == "rosa" ){
        metakit = 44
    }
    else if (cor == "roxo" ){
        metakit = 42
    }
    else if (cor == "verde" ){
        metakit = 61
    }
    else if (cor == "vermelho" ){
        metakit = 32
    }
    
    //obter o valor que o usuario informou da qtde de kits

    let qtdekits = Number (document.getElementById("qtdekits").value)

    //verificar se bateu a meta de kit de alimentacao

    if (qtdekits >= metakit ){
        pontos = pontos + 5000 //acumulador
        if (qtdekits > metakit){
            pontos = pontos + (qtdekits - metakit) * (5000/metakit)
            pontos = pontos.toFixed(2)

        }
    }
    else {
        pontos = pontos + (qtdekits) * (5000/metakit)
        pontos = pontos.toFixed(2)
    }
    

    
    
    
    
    document.getElementById("result").innerText = "Pontuação: " + pontos //mostramos a pontuacao total ao usuario
}