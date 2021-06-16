let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissor");
const reset_button = document.getElementById("reset-btn");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}

function resetScore(){
    if (userScore!==0 || computerScore!==0){
        userScore = 0;
        computerScore = 0;
        result_p.innerHTML = "The score has been reset successfully."
        userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    } else {
        result_p.innerHTML = "The score is already zero."
    }
    reset_button.classList.add("reset-button-glow");
    setTimeout(function(){reset_button.classList.remove("reset-button-glow")}, 300);
    setTimeout(function() {document.getElementById(reset_button)});
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + ' [User] beats ' + computerChoice + ' [Comp].' + ' You win!';
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + ' [Comp] beats ' + userChoice + ' [User].' + ' You lost!';
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 300)
}

function draw(userChoice){
    result_p.innerHTML = "It's a draw!";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow")}, 300)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userChoice, computerChoice);
            break;
    }  
}

function main () {
    rock_div.addEventListener('click', function() {
        game("Rock");
    })
    
    paper_div.addEventListener('click', function() {
        game("Paper");
    })
    
    scissors_div.addEventListener('click', function() {
        game("Scissor");
    })

    reset_button.addEventListener('click', function(){
        resetScore();
    })
}

main();