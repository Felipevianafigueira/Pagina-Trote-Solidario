function calcular(){
                let qtdeArroz = Number (document.getElementById("qtdeArroz").value)
                let qtdeFeijao = Number (document.getElementById("qtdeFeijao").value)
                let qtdeMacarrao = Number (document.getElementById("qtdeMacarrao").value)
                let qtdeOleo = Number (document.getElementById("qtdeOleo").value)

                let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4) + (qtdeOleo * 2)

                document.getElementById("result").innerText = "Pontuação: " + pontos
}