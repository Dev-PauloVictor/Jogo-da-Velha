var simboloDoJogador = "X";
var simboloDaIA = "O";
var turno = true;
var vitoriasJogador = 0;
var vitoriasIA = 0;

function clique(identificador) {
    document.getElementById(identificador).innerHTML = simboloDoJogador;
    verificarVitoria(simboloDoJogador);
    if (!verificarEmpate()) {
        turno = !turno;
        if (!turno) {
            jogadaIA();
        }
    }
}

function jogadaIA() {
    var vazios = [];
    var botoes = document.getElementsByClassName("btn");
    for (var i = 0; i < botoes.length; i++) {
        if (!botoes[i].innerHTML) {
            vazios.push(botoes[i].id);
        }
    }

    var aleatorio = Math.floor(Math.random() * vazios.length);
    var identificador = vazios[aleatorio];
    document.getElementById(identificador).innerHTML = simboloDaIA;
    verificarVitoria(simboloDaIA);
    verificarEmpate();
    turno = !turno;
}

function verificarVitoria(simbolo) {
    var combinacoesVitoria = [
        ["btn1", "btn2", "btn3"],
        ["btn4", "btn5", "btn6"],
        ["btn7", "btn8", "btn9"],
        ["btn1", "btn4", "btn7"],
        ["btn2", "btn5", "btn8"],
        ["btn3", "btn6", "btn9"],
        ["btn1", "btn5", "btn9"],
        ["btn3", "btn5", "btn7"]
    ];

    for (var i = 0; i < combinacoesVitoria.length; i++) {
        var combinacao = combinacoesVitoria[i];
        var venceu = true;
        for (var j = 0; j < combinacao.length; j++) {
            var botao = document.getElementById(combinacao[j]);
            if (botao.innerHTML !== simbolo) {
                venceu = false;
                break;
            }
        }

        if (venceu) {
            if (simbolo === simboloDoJogador) {
                vitoriasJogador++;
                document.getElementById("vitoriasJogador").innerHTML = vitoriasJogador;
            } else if (simbolo === simboloDaIA) {
                vitoriasIA++;
                document.getElementById("vitoriasIA").innerHTML = vitoriasIA;
            }
            alert(`O jogador ${simbolo} venceu!`);
            reiniciarJogo();
            return;
        }
    }
    
}
function verificarEmpate() {
    var botoes = document.getElementsByClassName("btn");
    var preenchidos = 0;
    for (var i = 0; i < botoes.length; i++) {
        if (botoes[i].innerHTML) {
            preenchidos++;
        }
    }
}

function reiniciarJogo() {
    var botoes = document.getElementsByClassName("btn");
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].innerHTML = "";
    }
    turno = true;

    document.getElementById("vitoriasJogador").innerHTML = vitoriasJogador;
    document.getElementById("vitoriasIA").innerHTML = vitoriasIA;

}