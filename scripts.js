/*quiz.html*/
const questions = [
	{
		question: "Qual é a uva mais plantada no mundo?",
		choices: ["Chardonnay", "Merlot", "Cabernet Sauvignon", "Pinot Noir"],
		answer: "Chardonnay"
	},
	{
		question: "Qual é a diferença entre um vinho tinto e um vinho branco?",
		choices: ["A cor", "O sabor", "A região de origem", "O tipo de uva"],
		answer: "A cor"
	},
	{
		question: "Qual é a região produtora de vinho mais famosa da França?",
		choices: ["Bordeaux", "Burgundy", "Rhone", "Loire"],
		answer: "Bordeaux"
	}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

function showQuestion() {
	const question = questions[currentQuestion];
	questionElement.innerText = question.question;

	choicesElement.innerHTML = "";
	for (let i = 0; i < question.choices.length; i++) {
		const choice = question.choices[i];
		const label = document.createElement("label");
		const radio = document.createElement("input");
		radio.type = "radio";
		radio.name = "choice";
		radio.value = choice;
		label.appendChild(radio);
		label.appendChild(document.createTextNode(choice));
		choicesElement.appendChild(label);
	}
}

function submitAnswer() {
	const selectedChoice = document.querySelector('input[name="choice"]:checked');
	if (!selectedChoice) {
		return;
	}
	
	if (selectedChoice.value === questions[currentQuestion].answer) {
		score++;
	}
	
	currentQuestion++;
	
	if (currentQuestion === questions.length) {
		showScore();
	} else {
		showQuestion();
	}
}

function showScore() {
	questionElement.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
	choicesElement.style.display = "none";
	submitButton.style.display = "none";
	scoreElement.style.display = "block";
	scoreElement.innerText = `Sua pontuação é ${score} de ${questions.length}`;
	restartButton.style.display = "block";
}