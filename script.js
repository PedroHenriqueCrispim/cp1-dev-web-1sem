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
	let answer4 = document.getElementById("answer3").value.toLowerCase();
	let answer5 = document.getElementById("answer3").value.toLowerCase();
	let answer6 = document.getElementById("answer3").value.toLowerCase();
	let answer7 = document.getElementById("answer3").value.toLowerCase();
	let answer8 = document.getElementById("answer3").value.toLowerCase();
	let answer9 = document.getElementById("answer3").value.toLowerCase();
	let answer10 = document.getElementById("answer3").value.toLowerCase();
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

	if (answer4 === "Carbonatação") {
		result += "Resposta correta para a pergunta 4!<br>";
	} else {
		result += "Resposta incorreta para a pergunta 4. O processo pelo qual as bolhas são adicionadas ao vinho é o Carbonatação.<br>";
	}

	if (answer5 === " Tanino") {
		result += "Resposta correta para a pergunta 5!<br>";
	} else {
		result += "Resposta incorreta para a pergunta 5. O nome da substância que causa o sabor amargo em alguns vinhos é o Tanino. <br>";
	}

	if (answer6 === "Éster") {
		result += "Resposta correta para a pergunta 6!<br>";
	} else {
		result += "Resposta incorreta para a pergunta 6. O nome da substância que causa o sabor frutado em alguns vinhos é Éster. <br>";
	}

	if (answer7 === "Enófilo") {
		result += "Resposta correta para a pergunta 7!<br>";
	} else {
		result += "Resposta incorreta para a pergunta 7. O nome dado à degustação de vinho para avaliar a qualidade é Enófilo. <br>";
	}

	if (answer8 === "Barrica") {
		result += "Resposta correta para a pergunta 8!<br>";
	} else {
		result += "Resposta incorreta para a pergunta 8. O nome dado ao recipiente onde o vinho é envelhecido é Barrica <br>";
	}

	if (answer9 === "Passito") {
		result += "Resposta correta para a pergunta 9!<br>";
	} else {
		result += "Resposta incorreta para a pergunta 9. O nome dado ao vinho feito a partir de uvas maduras colhidas tardiamente é Passito <br>";
	}

	if (answer10 === "GSM") {
		result += "Resposta correta para a pergunta 10!<br>";
	} else {
		result += "Resposta incorreta para a pergunta 10. O nome dado ao vinho tinto feito a partir de uvas Grenache, Syrah e Mourvèdre é GSM <br>";
	}

    document.getElementById("result").innerHTML = result;
}