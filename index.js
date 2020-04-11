//Dice rolling

//Player 1 dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImg1 = "images/dice" + randomNumber1 + ".png";

let imgSelect1 = document.querySelectorAll('img')[0];

imgSelect1.setAttribute("src", randomImg1);


// Player 2 dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImg2 = "images/dice" + randomNumber2 + ".png";

let imgSelect2 = document.querySelectorAll('img')[1];

imgSelect2.setAttribute("src", randomImg2);


//Deciding who wins the dice game
let title = document.querySelectorAll("h1")[0];

if (randomNumber1 === randomNumber2) {
    title.innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 Wins!"
} else {
    title.innerHTML = "Player 2 Wins!"
}