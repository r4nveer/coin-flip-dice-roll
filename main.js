// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
var dicefirstoutcome = document.getElementById("ones-out");
var dicesecondoutcome = document.getElementById("twos-out");
var dicethirdoutcome = document.getElementById("threes-out");
var dicefourthoutcome = document.getElementById("fours-out");
var dicefifthoutcome = document.getElementById("fives-out");
var dicesixthoutcome = document.getElementById("sixes-out");

// Count Variables
let numHeads = 0;
let numTails = 0;
let diceOne = 0;
let diceTwo = 0;
let diceThree = 0;
let diceFour = 0;
let diceFive = 0;
let diceSix = 0;
var diceOutEl = document.getElementById("diceOutput");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("diceRoll").addEventListener("click", diceRollClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src = 'img/heads.png'>";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src = 'img/tails.png'>";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

function diceRollClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);
  console.log(diceOutEl);

  // Simulate a Dice Roll
  if (randNum <= 0.1666) {
    diceOutEl.innerHTML = "<img src = 'img/1.png'> ";
    diceOne++;
    dicefirstoutcome.innerHTML = diceOne;
  } else if (randNum <= 0.333) {
    diceOutEl.innerHTML = "<img src = 'img/2.png'>";
    diceTwo++;
    dicesecondoutcome.innerHTML = diceTwo;
  } else if (randNum <= 0.5) {
    diceOutEl.innerHTML = "<img src = 'img/3.png'>";
    diceThree++;
    dicethirdoutcome.innerHTML = diceThree;
  } else if (randNum <= 0.666) {
    diceOutEl.innerHTML = "<img src = 'img/4.png'>";
    diceFour++;
    dicefourthoutcome.innerHTML = diceFour;
  } else if (randNum <= 0.833) {
    diceOutEl.innerHTML = "<img src = 'img/5.png'>";
    diceFive++;
    dicefifthoutcome.innerHTML = diceFive;
  } else {
    diceOutEl.innerHTML = "<img src = 'img/6.png'>";
    diceSix++;
    dicesixthoutcome.innerHTML = diceSix;
  }
}
