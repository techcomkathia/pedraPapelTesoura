avaliacaoEscolhas = `{
    "pedra": {
        "pedra": "empatou",
        "tesoura": "ganhou",
        "papel": "perdeu"
    },
    "tesoura": {
        "pedra": "perdeu",
        "tesoura": "empatou",
        "papel": "ganhou"
    },
    "papel": {
        "pedra": "ganhou",
        "tesoura": "perdeu",
        "papel": "empatou"
    }
}`

let opcoesImages=[
    {
        nome:"pedra",
        img: "img/pedra.png"
    },
    {
        nome:"papel",
        img: "img/papel.png"
    },
    {
        nome:"tesoura",
        img: "img/tesoura.png"
    }

]


let opcoesObjeto = JSON.parse(avaliacaoEscolhas)

let escolhaComputador = document.getElementById("escolhaComputador")
let escolhaUsuario = document.getElementById("escolhaUsuario")
let resultado = document.getElementById("resultado")
let contPontosCompt =  document.getElementById("pontosComputador")
let contPontosUser =  document.getElementById("pontosUsuario")

let pontuacaoComputador = 0
let pontuacaoUsuario = 0 

function verificar(input) {
    let opcoes = opcoesImages

    let num = Math.floor(Math.random() * 3)

    let nomeItemComput = opcoes[num].nome
    let nomeItemUser = input
    let situacao = opcoesObjeto[nomeItemUser][nomeItemComput]


    escolhaComputador.innerHTML = `O computador escolheu <strong> ${nomeItemComput}  <\strong>`
    escolhaUsuario.innerHTML = `Você escolheu <strong> ${nomeItemUser}  <\strong>`

    switch (situacao) {
        case 'ganhou':
            resultado.classList = 'ganhou'
            resultado.innerHTML = "GANHOU!"
            pontuacaoUsuario++
            break

        case 'perdeu':
            resultado.classList = 'perdeu'
            
            resultado.innerHTML = "PERDEU!"
            pontuacaoComputador++
            break;
 
        default:
            resultado.classList = 'empatou';
            resultado.innerHTML = "EMPATOU!"
            break
    }

    


    contPontosCompt.innerHTML = pontuacaoComputador
    contPontosUser.innerHTML = pontuacaoUsuario

    



}