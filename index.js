// function that returns a random int between 1 and
function RandomOutOfThree() {

    return Math.floor(Math.random() * 3) + 1
}

function GetComputedChoice() {
    const answer = RandomOutOfThree()
    switch (answer) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            console.log("Not a number between 1-3 inclusive..")
    }
}


function playRound(playerSelection, computedSelection) {
    playerSelection = playerSelection.toLowerCase()
    computedSelection = computedSelection.toLowerCase()

    if (playerSelection === "rock") {
        if (computedSelection === "paper")
            return "You Lose! Paper wins Rock.."
        else if (computedSelection === "scissors") {
            return "You Win! Rock wins Scissors.."
        }
        else return "Tie! Rock and Rock.."
    }

    else if (playerSelection === "paper") {
        if (computedSelection === "rock")
            return "You Win! Paper wins Rock.."
        else if (computedSelection === "scissors") {
            return "You Lose! Scissors wins Rock.."
        }
        else return "Tie! Paper and Paper.."
    }

    else if (playerSelection === "scissors") {
        if (computedSelection === "paper")
            return "You Win! Scissors wins paper.."
        else if (computedSelection === "rock") {
            return "You Lose! Rock wins Scissors.."
        }
        else return "Tie! Scissors and Scissors.."
    }
}

function playGame(rounds) {
    let countPlayer = 0, countComputed = 0
    for (let i = 0; i < rounds; i++) {
        round_result = playRound(prompt("Rock,Paper or Scissors: "), GetComputedChoice())
        console.log(round_result)
        if (round_result.includes("Win"))
            countPlayer++
        else if (round_result.includes("Lose"))
            countComputed++
    }
    if (countPlayer > countComputed)
        console.log("You Won! " + countPlayer + ":" + countComputed)
    else if (countPlayer < countComputed)
        console.log("You lost.. " + countPlayer + ":" + countComputed)
    else ("Its a Tie! " + countPlayer + ":" + countComputed)
}