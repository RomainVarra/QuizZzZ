function checkAnswer(answer) {
    const buttons = document.querySelectorAll(".buttonResponse");
    
    buttons.forEach(button => {
            button.disabled = true;

        if (button.textContent === answer) {
            if (answer === "8") {
                button.style.backgroundColor = 'green'; 
            } 
            if (answer !== "8") {
                button.style.backgroundColor = 'red'; 
            }
        } else {
            if (button.textContent !== "8") {
                button.style.backgroundColor = 'red';
            }
        }
    });
}

// Partie Game Over

// obj: Définir 2 types de page (réussite ou échec du quizz)
const goodAnswer ="8";

function answers (answer){
    if(answers === goodAnswer){
        const congratulationMessage= document.createElement('section');
        congratulationMessage.classList.add('congratulation');
        congratulationMessage.innerHTML = `Bien joué ! Vous avez vaincu la faucheuse !`
        main.appendChild(congratulationMessage);
    }
    else{
    const failMessage = document.createElement('section');
    failMessage.classList.add('wrongMessage');
    failMessage.innerHTML = `Hahaha ! La faucheuse t'a vaincu ! Viens avec moi en enfer, ou retente ta chance!`;
    main.appendChild(failMessage);
    }
}
