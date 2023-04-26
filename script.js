/*index.html*/
var background = ["red", "green", "blue"];
var i = 0;

function changeBackground() {
	document.body.style.backgroundColor = background[i];
	i = (i + 1) % background.length;
}

setInterval(changeBackground, 3000);

function validateForm() {
	var nome = document.forms["contato"]["nome"].value;
	var telefone = document.forms["contato"]["telefone"].value;
	var email = document.forms["contato"]["email"].value;

	if (nome == "" || telefone == "" || email == "") {
		alert("Por favor, preencha todos os campos.");
		return false;
	}
}

function quiz() {
	var pontuacao = 0;

	var resposta1 = prompt("Qual é a uva mais plantada no mundo?");
	if (resposta1.toLowerCase() == "cabernet sauvignon") {
		pontuacao += 1;
	}

	// Continuar com as outras perguntas do quiz...

	alert("Sua pontuação final é " + pontuacao + ".");
}

/*sobre.html*/


/*contato.html*/

function validarFormulario() {
	var nome = document.forms["formulario"]["nome"].value;
	var email = document.forms["formulario"]["email"].value;
	var telefone = document.forms["formulario"]["telefone"].value;
	if (nome == "" || email == "" || telefone == "") {
		alert("Por favor, preencha todos os campos obrigatórios.");
		return false;}
	}