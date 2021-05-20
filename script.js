let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//This function will be called at the start of each
//new round in order to generate the new secret target number.

const generateTarget = () => Math.floor(Math.random() * 9);

//Debug
//console.log(generateTarget());

//This function will be called each round to determine
//which guess is closest to the target number.
const compareGuesses = (humanNumber, computerNumber, secretNumber) => {
  if (humanNumber > 0 && humanNumber < 10) {
    if (
      getAbsoluteDistance(secretNumber - humanNumber) <
      getAbsoluteDistance(secretNumber - computerNumber)
    ) {
      return true;
    } else if (
      getAbsoluteDistance(secretNumber - humanNumber) >
      getAbsoluteDistance(secretNumber - computerNumber)
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    alert("Error! The number is out of range 0 - 9.");
    throw new Error("Error! The number is out of range 0 - 9.");
  }
};

//This function takes two numbers and returns the distance with Math.abs.
const getAbsoluteDistance = (tragetNumber, userNumber) =>
  Math.abs(tragetNumber - userNumber);

//Debug
//console.log(compareGuesses(5, 8, 9));
//console.log(compareGuesses(5, 5, 4));

//This function will be used to correctly increase the winner’s score after each round.
const updateScore = (winnerName) => {
  switch (winnerName) {
    case "human":
      humanScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
  }
};

//This function is used to update the round number after each round.
const advanceRound = () => (currentRoundNumber += 1);
