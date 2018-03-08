var myArray = ["rock", "paper", "scissors"];
var btnrock = document.querySelector("#btnrock");
var btnpaper = document.querySelector("#btnpaper");
var btnscissors = document.querySelector("#btnscissors");
var results = document.querySelector(".results");
var score = document.querySelector(".score");
var playerScore = 0
var computerScore = 0
score.textContent = "You: 0 | Computer: 0"

function playRound(e){
  const playerSelection = e
  let computerPlay = myArray[Math.floor(Math.random()*myArray.length)];
  const computerSelection = computerPlay;
  if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"){
      var result = "you win! " + playerSelection + " beats " + computerSelection;
      playerScore += 1
  } else if (playerSelection === "rock" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "scissors" ||
      playerSelection === "scissors" && computerSelection === "rock"){
      var result = "you lose! " + computerSelection + " beats " + playerSelection
      computerScore += 1
  } else if (playerSelection === computerSelection){
      var result = "tie!";
  } results.textContent = result;
  score.textContent = "You: " + playerScore + " | Computer: " + computerScore;
}

btnrock.addEventListener("click", () => {playRound("rock");});
btnpaper.addEventListener("click", () => {playRound("paper");});
btnscissors.addEventListener("click", () => {playRound("scissors");});





// maybe i need to write "let i = 0"
//the loop is running for 5 iterations, but is not returning the results of each round
//function game(){
//  for (i=0; i < 5; i++){
//    playRound();
//  }
//}
