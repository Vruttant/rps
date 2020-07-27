let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissor");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(choices[randomNumber]);
    return choices[randomNumber];
    
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + ' [User] beats ' + computerChoice + ' [Comp].' + ' You win!';
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300)
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + ' [Comp] beats ' + userChoice + ' [User].' + ' You lost!';
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 300)
}

function draw(){
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
}

main();