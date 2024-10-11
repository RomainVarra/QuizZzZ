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