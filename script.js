const quizList = [
	{
		question: "Combien de planètes orbitent autour du soleil ? ",
		clue: "On parle bien de planètes !",
		answer1: ["12", false],
		answer2: ["9", false],
		answer3: ["8", true],
		answer4: ["6", false],
	},

	{
		question:
			"Laquelle de ces villes n'a jamais été la capitale de la France ?",
		clue: "L'Histoire est écrite par les vainqueurs...",
		answer1: ["Bordeaux", false],
		answer2: ["Tournai", false],
		answer3: ["Avignon", true],
		answer4: ["Brazzaville", false],
	},

	{
		question: "Quel est l'animal national de l'Écosse ?",
		clue: "Un animal national est choisi par une communauté comme son emblème.",
		answer1: ["Le lion", false],
		answer2: ["Le dragon", false],
		answer3: ["Le bélier", false],
		answer4: ["La licorne", true],
	},

	{
		question:
			"Quel réalisateur a inventé le célèbre personnage d'Indiana Jones ?",
		clue: "Trop facile !",
		answer1: ["Georges Lucas", true],
		answer2: ["Steven Spielberg", false],
		answer3: ["Quentin Tarantino", false],
		answer4: ["James Cameron", false],
	},

	{
		question: "Qui a créé en dix jours le langage JavaScript ?",
		clue: "On n'est pas encore à son niveau par ici...",
		answer1: ["Brendan Eich", true],
		answer2: ["Bryan Eisch", false],
		answer3: ["Brenton Eickhoff", false],
		answer4: ["Benjamin Eichel", false],
	},

	{
		question: "Quelle est la date d'anniversaire de mon ami Voldemort ?",
		clue: "On a vu qu'il y avait des potterhead par ici...",
		answer1: ["1er avril", false],
		answer2: ["31 décembre", true],
		answer3: ["30 octobre", false],
		answer4: ["29 février", false],
	},

	{
		question:
			"Lequel des ces types de données en Java est utilisé pour stocker un seul caractère ?",
		clue: "Vous avez bien dit Java ?",
		answer1: ["float", false],
		answer2: ["char", true],
		answer3: ["byte", false],
		answer4: ["int", false],
	},

	{
		question: "Quel est le plus grand pays d'Afrique ?",
		clue: "En termes de superficie bien entendu !",
		answer1: ["La Turquie", false],
		answer2: ["Le Mali", false],
		answer3: ["Le Soudan", false],
		answer4: ["l'Algérie", true],
	},

	{
		question: "Quel est le poids réglementaire d'un ballon de football ?",
		clue: "Selon les règles de la Fifa pour une taille 5.",
		answer1: ["300-320 grammes", false],
		answer2: ["350-370 grammes", false],
		answer3: ["450-470 grammes", false],
		answer4: ["400-420 grammes", true],
	},

	{
		question: "Quelle est la capitale de l'Australie ?",
		clue: "Allez, tout le monde la connaît celle là !",
		answer1: ["Sydney", false],
		answer2: ["Melbourne", false],
		answer3: ["Canberra", true],
		answer4: ["Brisbane", false],
	},

	{
		question:
			"Quel est le nom du personnage principal dans le roman 1984 de George Orwell ?",
		clue: "J'espère que tout le monde a lu ce bouquin !",
		answer1: ["Winston Churchill", false],
		answer2: ["Winston Smith", true],
		answer3: ["Winston Duke", false],
		answer4: ["Winston Bogarde", false],
	},

	{
		question: "Quelle est la langue la plus parlée dans le monde ?",
		clue: "Ne jouons pas avec les mots...",
		answer1: ["L'anglais", false],
		answer2: ["L'arabe", false],
		answer3: ["L'espagnol", false],
		answer4: ["le mandarin", true],
	},

	{
		question: "Quel est le symbole chimique de l'or ?",
		clue: "C'est loin les cours de physique ?",
		answer1: ["Au", true],
		answer2: ["Mo", false],
		answer3: ["Go", false],
		answer4: ["Or", false],
	},
];

///////////////////////////////////////////////////////////////

let currentQuestionIndex = 0;
let heartsCount = 13;
let redheartsCount = 3;



const multiplyBlackHeart = document.querySelector(".blackHeartClass");
function createdBlackHearts() {
	const blackHeart = document.createElement('img');
	blackHeart.src = "./Public/Images/heart-black-full.png" ;
	blackHeart.alt = "petit coeur noir";
	blackHeart.classList.add ("blackHeart");
	multiplyBlackHeart.appendChild(blackHeart);
	}

	for(let i=0; i < heartsCount -1; i++){
	createdBlackHearts();
	}

const multiplyRedHeart = document.querySelector(".redHeartClass")
function createdRedHearts(){
const redHeart = document.createElement('img');
redHeart.src= "./Public/Images/heart-red-full.png";
redHeart.alt = "petit coeur rouge";
redHeart.classList.add ("redHeart");
multiplyRedHeart.appendChild(redHeart);
}
for(let i=0; i < redheartsCount -1; i++){
	createdRedHearts();
	}

function loadQuestion() {
	const questionElement = document.getElementById("question");
	const clueElement = document.getElementById("clue");
	const buttons = document.querySelectorAll(".buttonResponse");

	questionElement.textContent = quizList[currentQuestionIndex].question;
	clueElement.textContent = quizList[currentQuestionIndex].clue;

	buttons.forEach((button) => {
		button.style.backgroundColor = "";
	});

	buttons.forEach((button, index) => {
		const answerIndex = `answer${index + 1}`;
		button.textContent = quizList[currentQuestionIndex][answerIndex][0];
		button.dataset.correct = quizList[currentQuestionIndex][answerIndex][1];
	});
}

const deathHearts = document.querySelectorAll(".blackHeart");
const characterHearts = document.querySelectorAll(".redHeart");
let hearthCharacterPoints = redheartsCount;


function checkAnswer(answerIndex) {
	const buttons = document.querySelectorAll(".buttonResponse");
	const selectedButton = buttons[answerIndex];
	const isCorrect = selectedButton.dataset.correct === "true";

	selectedButton.style.backgroundColor = isCorrect ? "green" : "red";

	if (heartsCount > 0) {
		const deathHearts = document.querySelectorAll(".blackHeart");
		deathHearts[heartsCount - 1].src = "./Public/Images/heart-black-breack.png";
		heartsCount--;
	}

	if (!isCorrect) {
		if (hearthCharacterPoints > 0) {
			document.querySelectorAll(".redHeart")[hearthCharacterPoints - 1].src =
				"./Public/Images/heart-black-breack.png";
			hearthCharacterPoints--;
		}
	}

	setTimeout(() => {
		currentQuestionIndex++;
		if (currentQuestionIndex < quizList.length && hearthCharacterPoints > 0) {
			loadQuestion();
		} else {
			endGame();
		}
	}, 1000);
}

	// Partie Game Over
	
	// obj: Définir 2 types de page (réussite ou échec du quizz)

function endGame() {
	// Vider la page
	const main = document.querySelector("main");
	main.textContent = "";

	// Création d'une nouvelle bulle
	const fullBubble = document.createElement("section");
	fullBubble.classList.add("fullBubble");
	main.appendChild(fullBubble);
	const bubbleQuestion = document.createElement("article");
	bubbleQuestion.classList.add("bubbleQuestion");
	fullBubble.appendChild(bubbleQuestion);
	//Aggrandir la bulle (responsive)

 	bubbleQuestion.style.height = "20em";
 	bubbleQuestion.style.width = "90%";
 	//Style de la bulle (responsive)
 	bubbleQuestion.style.margin = "3em";
 	bubbleQuestion.style.border = "3px solid";
 	bubbleQuestion.style.fontSize = "100%"; // Revoir la size
	 
 	if (hearthCharacterPoints === 0) {
		 //Inverser: défaite, le joueur n'a plus de coeur
		 bubbleQuestion.textContent = `Hahaha ! La faucheuse t'a vaincu ! Viens avec moi en enfer, ou retente ta chance !`;
		 /*const buttonStart = document.createElement('button');
		 buttonStart.classList.add('buttonResponse');
		 buttonStart.classList.add('bubbleQuestion');
		 main.appendChild(buttonStart);
		 buttonStart.textContent = "Recommencer";
		 buttonStart.addEventListener("click", location.reload());*/
		}
	else{
		// message de victoire
		bubbleQuestion.textContent = `Bien joué ! Vous avez vaincu la faucheuse !`;
		//intégration de la faucheuse vaincue
		const deathPixelOff = document.querySelector("#death");
		deathPixelOff.src = "Public/Images/deathPixel_off.png";
		deathPixelOff.alt = "Faucheuse vaincue";
	}
} 

loadQuestion();

