const startBtn = document.querySelector(".start-button");
const showcase = document.querySelector(".showcase");
const playerTag = document.querySelector(".player-name");
const playerHand = document.querySelector(".player-hand__img");
const computerHand = document.querySelector(".computer-hand__img");
const playGame = document.querySelector(".play-game");
const scorePlayer = document.querySelector(".score-player");
const scoreComp = document.querySelector(".score-computer");
const resultText = document.querySelector(".result-text");
const playAgainBtn = document.querySelector(".play-button");
const result = document.querySelector(".result");
const option = document.querySelector(".option");
let playerName;
let score1 = 0;
let score2 = 0;

startBtn.addEventListener("click", ()=> {
    console.log("ok");
    showcase.classList.add("showcase-hidden");
    playGame.classList.remove("game-hidden");
    let playerInput = document.getElementById("player-name__input").value;
    console.log(playerInput);
    playerTag.innerHTML = playerInput;
    playerName = playerInput;
});

playAgainBtn.addEventListener("click", ()=> {
    result.style.visibility = "hidden";
    result.style.opacity = "0";
    option.style.pointerEvents = "all";
    result.style.transition = "all 0.5s ease-in";
});

function rock() {
    play(0);
}

function paper() {
    play(1);
}

function scissors() {
    play(2);
}

function play(playerChoice) {
    console.log("works");
    let choice = playerChoice;
    setImg(choice, playerHand);
    choice = getRandom();
    console.log(choice);
    setImg(choice, computerHand);
    let msg = checkWinner(playerChoice, choice);
    resultText.innerHTML = msg;
}

function getRandom() {
    return Math.round(Math.random() * 2);
}

function setImg(choice, player) {
    const hand = player; 
    if(choice === 0) {
        hand.src = "/assets/rock.png";
    } else if(choice === 1) {
        hand.src = "/assets/paper.png";
    } else if(choice === 2) {
        hand.src = "/assets/scissors.png";
    }
}

function checkWinner(playerChoice, computerChoice) {
    let msg;
    if(playerChoice === computerChoice) {
        msg = "It's a Draw!!";
    } else if(playerChoice === 0 && computerChoice == 1 ||
        playerChoice === 1 && computerChoice == 2 ||
        playerChoice === 2 && computerChoice == 0) {
        msg = "Computer Wins!!";
        score2++;
        scoreComp.innerHTML = score2;
    } else if(playerChoice === 0 && computerChoice == 2 ||
        playerChoice === 1 && computerChoice == 0 ||
        playerChoice === 2 && computerChoice == 1) {
        msg = playerName + " Wins!!";
        score1++;
        scorePlayer.innerHTML = score1;
    }
    result.style.visibility = "visible";
    result.style.opacity = "1";
    playAgainBtn.style.pointerEvents = "all";
    result.style.transition = "all 0.5s ease-in";
    option.style.pointerEvents = "none";
    return msg;
}