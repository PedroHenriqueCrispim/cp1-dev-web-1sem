var background = ["pink"];
var i = 0;

function changeBackground() {
	document.body.style.backgroundColor = background[i];
	i = (i + 1) % background.length;
}

setInterval(changeBackground, 3000);

function quiz() {
	var pontuacao = 0;

	var resposta1 = prompt("Qual é a uva mais plantada no mundo?");
	if (resposta1.toLowerCase() == "cabernet sauvignon") {
		pontuacao += 1;
	}

	// Continuar com as outras perguntas do quiz...

	alert("Sua pontuação final é " + pontuacao + ".");
}

/*quiz.html*/


function checkAnswers() {
    let answer1 = document.getElementById("answer1").value.toLowerCase();
    let answer2 = document.getElementById("answer2").value.toLowerCase();
    let answer3 = document.getElementById("answer3").value.toLowerCase();

    let result = "";

    if (answer1 === "chardonnay") {
        result += "Resposta correta para a pergunta 1!<br>";
    } else {
        result += "Resposta incorreta para a pergunta 1. A uva mais plantada do mundo é a Chardonnay.<br>";
    }

    if (answer2 === "cor") {
        result += "Resposta correta para a pergunta 2!<br>";
    } else {
        result += "Resposta incorreta para a pergunta 2. A diferença entre um vinho tinto e um vinho branco é a cor.<br>";
    }

    if (answer3 === "bordeaux") {
        result += "Resposta correta para a pergunta 3!<br>";
    } else {
        result += "Resposta incorreta para a pergunta 3. A região produtora de vinho mais famosa da França é Bordeaux.<br>";
    }

    document.getElementById("result").innerHTML = result;
}