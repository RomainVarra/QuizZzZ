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