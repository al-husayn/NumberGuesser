let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

const alert=(number)=> {
  if (number <= 0 || number > 9) {
    window.alert(
      "The number you entered is out of range. Enter value ranging from 1 to 9."
    );
  }
}


const compareGuesses = (human, computer, secret) => {
  const humanDifference = getAbsoluteDistance(human, secret);
  alert(human);
  const computerDifference = getAbsoluteDistance(computer, secret);
  return humanDifference <= computerDifference;
  
};


const updateScore = (winner)=> {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}


const advanceRound = () => currentRoundNumber++;
