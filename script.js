var carta1 = {
    "nome": "Goku",
    "atributos": {
        "QI": 10,
        "velocidade": 9,
        "defesa": 6,
        "inteligencia": 6
    }
};
var carta2 = {
    "nome": "Vegeta",
    "atributos": {
        "QI": 9,
        "velocidade": 8,
        "defesa": 9,
        "inteligencia": 8
    }
};
var carta3 = {
    "nome": "Majimbu",
    "atributos": {
        "QI": 3,
        "velocidade": 7,
        "defesa": 4,
        "inteligencia": 2
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numCartaMaquina];
    console.log(cartaMaquina)

    var numCartaJogador = parseInt(Math.random() * 3);
    while (numCartaMaquina == numCartaJogador) {
        numCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numCartaJogador];
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
};

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    console.log(atributoSelecionado)
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    console.log("Valor da carta do Jogador " + valorCartaJogador);
    var valorcartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    console.log("Valor da carta da Máquina " + valorcartaMaquina);

    if (valorCartaJogador > valorcartaMaquina) {
        document.getElementById("resultado").innerHTML = "Você Venceu!";
    } else if (valorCartaJogador < valorcartaMaquina){
        document.getElementById("resultado").innerHTML = "Você Perdeu!";
    } else if (valorCartaJogador == atributoSelecionado && atributoSelecionado != undefined){
        document.getElementById("resultado").innerHTML = "Jogo Empatado.";
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, selecione um atributo!";
    }
}


//https://lifeanimes.com/dragon-ball/carta-de-dragon-ball