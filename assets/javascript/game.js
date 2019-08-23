// Creates an array that lists out all of the options (Alphabet Letters).
var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesLeft = 9;
var UserLetterSelection = null;
var ComputerChoice;
var wins = 0;
var losses = 0;
var userGuesses = [];
function updatewins() {
    document.querySelector("#wins").innerHTML = wins;
}
function updatelosses() {
    document.querySelector("#losses").innerHTML = losses;
}
function updateGuessesLeft() {
    document.querySelector("#guesses_left").innerHTML = guessesLeft;
}

function chooseletter() {
    var randomNumber = Math.floor((Math.random() * 25) + 1)
    ComputerChoice = Letters[randomNumber]
    console.log(ComputerChoice);
}

function updateGuesses() {
    document.querySelector("#guesses").innerHTML = userGuesses;
}

document.onkeydown = function (event) {
    var guessedLetter = event.key;
    userGuesses.push(guessedLetter);
    updateGuesses();
    guessesLeft--;
    console.log(guessesLeft);
    updateGuessesLeft();
    console.log(userGuesses);
    var userKey = event.key.toLowerCase();
    if (ComputerChoice == userKey) {
        wins++;
        updatewins();
        chooseletter();

    } else {

        losses++;
        updatelosses();
    }
}

// Creating variables to hold the number of wins and losses They start at 0.


updateGuessesLeft()
chooseletter()
