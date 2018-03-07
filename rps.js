var myArray = ["rock", "paper", "scissors"];
var btnrock = document.querySelector("#btnrock");
var btnpaper = document.querySelector("#btnpaper");
var btnscissors = document.querySelector("#btnscissors");
var results = document.querySelector(".results");

function playRound(e){
  const playerSelection = e
  let computerPlay = myArray[Math.floor(Math.random()*myArray.length)];
  const computerSelection = computerPlay;
  if (playerSelection === "rock" && computerSelection === "scissors"){
      var result = "you win! rock beats scissors!";
      results.textContent = result;
  } else if (playerSelection === "rock" && computerSelection === "paper"){
      var result = "you lose! paper beats rock!";
      results.textContent = result;
  } else if (playerSelection === "rock" && computerSelection === "rock"){
      var result = "tie!";
      results.textContent = result;
  } else if (playerSelection === "paper" && computerSelection === "rock"){
      var result = "you win! paper beats rock!";
      results.textContent = result;
  } else if (playerSelection === "paper" && computerSelection === "scissors"){
      var result = "you lose! scissors beats paper!";
      results.textContent = result;
  } else if (playerSelection === "paper" && computerSelection === "paper"){
      var result = "tie!";
      results.textContent = result;
  } else if (playerSelection === "scissors" && computerSelection === "paper"){
      var result = "you win! scissors beats paper!";
      results.textContent = result;
  } else if (playerSelection === "scissors" && computerSelection === "rock"){
      var result = "you lose! rock beats scissors!";
      results.textContent = result;
  } else if (playerSelection === "scissors" && computerSelection === "scissors"){
      var result = "tie!"
      results.textContent = result;
  }
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
