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
            console.log("Not a number between 1-3 inclusive..");
    }
}

//helper function to Capitalize a string - "string" => "String"
function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let countPlayer = 0, countComputed = 0;

function playRound(playerSelection, computedSelection) {
    playerSelection = playerSelection.toLowerCase()
    computedSelection = computedSelection.toLowerCase()

    // adding to scoreboard:
    const playerChoice = document.getElementById('player-choice');
    const compChoice = document.getElementById('computed-choice');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = Capitalize(playerSelection);
    p2.textContent = Capitalize(computedSelection);
    playerChoice.appendChild(p1);
    compChoice.appendChild(p2);

    if (playerSelection === "rock") {
        if (computedSelection === "scissors") {
            countPlayer++;
            return "You Win! Rock wins Scissors..";
        }
        else if (computedSelection === "paper") {
            countComputed++;
            return "You Lose! Paper wins Rock..";
        }
        return "Tie! Rock and Rock..";
    }

    else if (playerSelection === "paper") {
        if (computedSelection === "rock") {
            countPlayer++;
            return "You Win! Paper wins Rock..";
        }
        else if (computedSelection === "scissors") {
            countComputed++;
            return "You Lose! Scissors wins Paper..";
        }
        return "Tie! Paper and Paper..";
    }

    else if (playerSelection === "scissors") {
        if (computedSelection === "paper") {
            countPlayer++;
            return "You Win! Scissors wins Paper..";
        }
        else if (computedSelection === "rock") {
            countComputed++;
            return "You Lose! Rock wins Scissors..";
        }
        return "Tie! Scissors and Scissors..";
    }
}

// function playGame(rounds) {
//     let countPlayer = 0, countComputed = 0
//     for (let i = 0; i < rounds; i++) {
//         round_result = playRound(prompt("Rock,Paper or Scissors: "), GetComputedChoice())
//         console.log(round_result)
//         if (round_result.includes("Win"))
//             countPlayer++
//         else if (round_result.includes("Lose"))
//             countComputed++
//     }
//     if (countPlayer > countComputed)
//         console.log("You Won! " + countPlayer + ":" + countComputed)
//     else if (countPlayer < countComputed)
//         console.log("You lost.. " + countPlayer + ":" + countComputed)
//     else ("Its a Tie! " + countPlayer + ":" + countComputed)
// }

const buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', handleClick);
})

function handleClick(e) {
    const id = e.target['id'];
    const result = playRound(id, GetComputedChoice());
    // console.log(result);
    const roundDiv = document.querySelector('div.round');
    const scoreDiv = document.querySelector('div.score');
    roundDiv.textContent = result;
    roundDiv.style.color = 'black';
    // scoreDiv.textContent = `${countPlayer} : ${countComputed}`;
    scoreDiv.innerHTML = `<div>${countPlayer}</div> - <div>${countComputed}</div>`;

    if (countPlayer === 5) {
        roundDiv.style.color = 'green';
        roundDiv.textContent = `You have won!`;
        countPlayer = 0;
        countComputed = 0;
    }
    else if (countComputed === 5) {
        roundDiv.style.color = 'red';
        roundDiv.textContent = `You have Lost..`;
        countPlayer = 0;
        countComputed = 0;
    }
}