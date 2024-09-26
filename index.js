var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")
var SetaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Samantha.style = "display:flex"
    SetaEsquerda.style = "display:flex ; margin: 55%"
    SetaDireita.style = "display:none"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Samantha.style = "display:none"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex ; margin: 25%"
}