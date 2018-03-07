var myArray = ["rock", "paper", "scissors"];
var e;
document.getElementById('#rock').addEventListener("click", playRound(rock));
document.getElementById('#paper').addEventListener("click", playRound(paper));
document.getElementById('#scissors').addEventListener("click", playRound(scissors));

function playRound(e){
  const playerSelection = e
  let computerPlay = myArray[Math.floor(Math.random()*myArray.length)];
  const computerSelection = computerPlay;
  if (playerSelection === "rock" && computerSelection === "scissors"){
      return "you win! rock beats scissors!"
  } else if (playerSelection === "rock" && computerSelection === "paper"){
      return "you lose! paper beats rock!"
  } else if (playerSelection === "rock" && computerSelection === "rock"){
      return "tie!"
  } else if (playerSelection === "paper" && computerSelection === "rock"){
      return "you win! paper beats rock!"
  } else if (playerSelection === "paper" && computerSelection === "scissors"){
      return "you lose! scissors beats paper!"
  } else if (playerSelection === "paper" && computerSelection === "paper"){
      return "tie!"
  } else if (playerSelection === "scissors" && computerSelection === "paper"){
      return "you win! scissors beats paper!"
  } else if (playerSelection === "scissors" && computerSelection === "rock"){
      return "you lose! rock beats scissors!"
  } else if (playerSelection === "scissors" && computerSelection === "scissors"){
      return "tie!"
  }
}


// maybe i need to write "let i = 0"
//the loop is running for 5 iterations, but is not returning the results of each round
//function game(){
//  for (i=0; i < 5; i++){
//    playRound();
//  }
//}
