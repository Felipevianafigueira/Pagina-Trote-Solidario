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
    let metakit //meta do kit de alimentacao de acordo com a equipe
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
        }
    }
    else {
        pontos = pontos + (qtdekits) * (5000/metakit)
    }
    
    //define a meta do suplemento
    let metaSuplemento
    
    if (metakit % 2 == 0){
        metaSuplemento = metakit / 2 //divisao de um inteiro por um inteiro resulta em outro inteiro
    }
    else{
        metaSuplemento = (metakit / 2) + 0.5
    }

    //obter valor do usuario
    let qtdeSuplementos = Number (document.getElementById("qtdeSuplementos").value)

    if (qtdeSuplementos == metaSuplemento){
        pontos = pontos + 5000
    }
    else if (qtdeSuplementos > metaSuplemento){
        pontos = pontos + 5000 + (qtdeSuplementos - metaSuplemento) * (5000/metaSuplemento)
    }
    else{
        pontos = pontos + qtdeSuplementos * (5000/metaSuplemento)
    }

    //define meta do leite
    let metaLeite = metakit
    
    //recupera qtde de leite digitada pelo usuario
    let qtdeLeite = Number (document.getElementById("qtdeLeite").value)

    //verifica a meta do leite
    if (qtdeLeite == metaLeite){
        pontos = pontos + 5000
    } else if (qtdeLeite > metakit) {
        pontos = pontos + 5000 + (qtdeLeite - metaLeite) * (5000/metaLeite)
    }
    else {
        pontos = pontos + qtdeLeite * (5000/metaLeite)
    }
    
    //define meta do sangue doado
    let metaSangue = metaSuplemento

    //recupera qtde de sangue doado digitado pelo usuario
    let qtdeSangue = Number (document.getElementById("qtdeSangue").value)

    //verificar a meta do sangue
    if (qtdeSangue == metaSangue){
        pontos = pontos + 5000
    }
    else if (qtdeSangue > metaSangue){
        pontos = pontos + 5000 + (qtdeSangue + metaSangue) * (5000/metaSangue)
    }
    else{
        pontos = pontos + qtdeSangue * (5000/metaSangue)
    }
    
    document.getElementById("result").innerText = "Pontuação: " + pontos.toFixed(2) //mostramos a pontuacao total ao usuario
}