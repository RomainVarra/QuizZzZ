let hearthDeathPoints = 10;
let hearthCharacterPoints = 3;

function checkAnswer(answer) {
    const buttons = document.querySelectorAll(".buttonResponse");
    const deathHearts = document.querySelectorAll(".blackHeart");
    const characterHearts = document.querySelectorAll(".redHeart");
    
    buttons.forEach(button => {
            button.disabled = true;

        if (button.textContent === answer) {
            if (answer === "8") {
                button.style.backgroundColor = 'green';    
            } 
            if (answer !== "8") {
                button.style.backgroundColor = 'red'; 
                if (hearthCharacterPoints>0){
                    characterHearts[hearthCharacterPoints - 1].src = "./Public/Images/heart-black-breack.png";
                hearthCharacterPoints--;
                }
            }
        } else {
            if (button.textContent !== "8") {
                button.style.backgroundColor = 'red';
            }
        }
    });
    
    if (hearthDeathPoints>0){
        deathHearts[hearthDeathPoints - 1].src = "./Public/Images/heart-black-breack.png";
    hearthDeathPoints--;
    }
}

// Partie Game Over

// obj: Définir 2 types de page (réussite ou échec du quizz)
const goodAnswer ="8";

function answers (answer){
    // Vider la page
    const main =document.querySelector("main");
    main.textContent = ""; 

    // Création d'une nouvelle bulle
    const fullBubble = document.createElement('section');
    fullBubble.classList.add('fullBubble');
    main.appendChild(fullBubble);
    const bubbleQuestion = document.createElement('article');
    bubbleQuestion.classList.add('bubbleQuestion');
    fullBubble.appendChild(bubbleQuestion);
    //Aggrandir la bulle (responsive)
    
    bubbleQuestion.style.height = '20em';
    bubbleQuestion.style.width = '90%';
    //Style de la bulle (responsive)
    bubbleQuestion.style.margin='3em';
    bubbleQuestion.style.border = '3px solid';
    bubbleQuestion.style.fontSize = '100%'; // Revoir la size


    if(answer === goodAnswer){
        //victoire
        bubbleQuestion.textContent = `Bien joué ! Vous avez vaincu la faucheuse !` 
        //intégration de la faucheuse vaincue
        const deathPixelOff = document.querySelector('#death');
        deathPixelOff.src = 'Public/Images/deathPixel_off.png';
        deathPixelOff.alt = 'Faucheuse vaincue';
    }
    else{
        //défaite
    bubbleQuestion.textContent = `Hahaha ! La faucheuse t'a vaincu ! Viens avec moi en enfer, ou retente ta chance !`;
    }
}

// Création d'une boucle pour les boutons
document.querySelectorAll('.buttonResponse').forEach(button =>{
    button.addEventListener('click', function(){
        const userAnswer = this.textContent;
        answers(userAnswer);
    })
});

