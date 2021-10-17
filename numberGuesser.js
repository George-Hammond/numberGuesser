let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//function to generate random numbers between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
// function determines which guess is closest to target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess-humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);

  if (humanDifference <= computerDifference){
    return true;
  } else {
    return false;
  };
}

//function to increase winner's score after each round

const updateScore = winner =>{
    if (winner === 'human'){
      humanScore++;
    } else if (winner === 'computer'){
      computerScore++;
    }
}

//function to update round after each round

const advanceRound =() =>{
  currentRoundNumber++;
}
