let avaliacaoEscolhas = `{
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

let opcoesImages={
    pedra:{
        nome:"pedra",
        img: "img/pedra.png"
    },
    papel:{
        nome:"papel",
        img: "img/papel.png"
    },
    tesoura:{
        nome:"tesoura",
        img: "img/tesoura.png"
    }

}


// variáveis dos objtetos do html que mostram o placar
let contPontosCompt =  document.getElementById("pontosComputador")
let contPontosUser =  document.getElementById("pontosUsuario")
//mostram resultado
let resultado = document.querySelector("#resultado")
let escolhaComputador = document.getElementById("escolhaComputador")
let escolhaUsuario = document.getElementById("escolhaUsuario")

let pontosComput = 0
let pontosUser = 0

//conversão de JSON para objeto
avaliacaoEscolhas = JSON.parse(avaliacaoEscolhas)
let escolhas = ['pedra', 'papel', 'tesoura']

function verificar(itemUser){
    let num = Math.floor(Math.random()*3)
    let itemComputador = escolhas[num]

    escolhaComputador.innerHTML= `O computador escolheu <strong> ${itemComputador} <\strong>`

    escolhaUsuario.innerHTML= `Você escolheu <strong> ${itemUser}<\strong>`

    switch (avaliacaoEscolhas[itemUser][itemComputador]) {
        case 'ganhou':
            resultado.innerHTML = 'GANHOU'
            resultado.classList = 'ganhou'
            pontosUser += 1
            contPontosUser.innerHTML = pontosUser
            
            break;
    
        case 'perdeu':
            resultado.innerHTML = 'PERDEU'
            resultado.classList = 'perdeu'
            pontosComput += 1
            contPontosCompt.innerHTML = pontosComput
            break;
    
        default:
            resultado.innerHTML = 'EMPATOU'
            resultado.classList = 'empatou'
            break;
    }

    let imgCompt = document.getElementById('imgComput')
    let imgUser = document.getElementById('imgUser')

    imgCompt.src = opcoesImages[itemComputador].img
    imgCompt.alt = opcoesImages[itemComputador].nome
    imgUser.src = opcoesImages[itemUser].img
    imgUser.alt = opcoesImages[itemUser].nome
}