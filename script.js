function quiz(){

    let msg = document.getElementById('msg')

    let score = 0;

    let q1 = prompt('Qual é a uva mais plantada do mundo? \n [1] Cabernet Sauvignon \n [2] Chardonnay \n [3] Merlot \n [4] Pinot Noir')
    if (q1 == 2) {
    score++;
    }

    let q2 = prompt('Qual é a diferença entre um vinho tinto e um branco? \n [1] Teor alcoólico \n [2] Acidez \n [3] Cor \n [4] Aroma')
    if (q2 == 3) {
    score++;
    }

    let q3 = prompt('Qual é o processo pelo qual as bolhas são adicionadas ao vinho? \n [1] Fermentação malolática \n [2] Fermentação alcoólica \n [3] Fermentação secundária \n [4] Carbonatação')
    if (q3 == 4) {
    score++;
    }

    let q4 = prompt("Qual é a região produtora de vinho mais famosa da França? \n [1] Bordeaux \n [2] Champagne \n [3] Alsácia  \n [4] Vale do Loire")
    if (q4 == 1) {
    score++;
    }

    let q5 = prompt("Qual é o nome da substância que causa o sabor frutado em alguns vinhos? \n [1] Aroma \n [2] Álcool \n [3] Éster  \n [4] Acidez")
    if (q5 == 3) {
    score++;
    }

    let q6 = prompt('Qual é o nome dado à degustação de vinho para avaliar a qualidade? \n [1] Degustação cega \n [2] Ánalise sensorial \n [3] Prova vertical  \n [4] Enófilo')
    if (q6 == 4) {
    score++;
    }

    let q7 = prompt('Qual é o nome dado ao recipiente onde o vinho é envelhecido? \n [1] Barril \n [2] Garrafa \n [3] Tanque \n [4] Barrica')
    if (q7 == 4) {
    score++;
    }

    let q8 = prompt('Qual é o nome dado ao vinho feito a partir de uvas maduras? \n [1] Late Harvest \n [2] Vin de Paille \n [3] Passisto \n [4] Botrytis')
    if (q8 == 3) {
    score++;
    }

    let q9 = prompt('Qual é o nome dado ao vinho tinto feito a partir das uvas Grenache, Syrah e Mourvèdre? \n [1] Bordeaux \n [2] Rioja \n [3] Chianti \n [4] GSM ' )
    if (q9 == 4) {
    score++;
    }

    let q10 = prompt('Qual é o nome da substância que causa o sabor amargo em alguns vinhos? \n [1] Acidez \n [2] Álcool \n [3] Tanino \n [4] Doçura')
    if (q10 == 3) {
    score++;
    }


    msg.innerHTML = `<p>Você acertou ${score} perguntas de 10.\n \n <br> <br> Respostas: \n <br> \n
    Questão 1: Chardonnay \n<br>
    Questão 2: Cor \n<br>
    Questão 3:  Carbonatação \n<br>
    Questão 4: Bordeaux \n<br>
    Questão 5: Éster \n<br>
    Questão 6: Enófilo \n<br>
    Questão 7: Barrica \n<br>
    Questão 8: Passisto \n<br>
    Questão 9: GSM \n<br
    Questão 10: Tanino \n<br>  </p>`
    alert(`Você acertou ${score} perguntas de 10.`)
    
}

var background = ["pink"];
var i = 0;

function changeBackground() {
	document.body.style.backgroundColor = background[i];
	i = (i + 1) % background.length;
}

setInterval(changeBackground, 3000);

