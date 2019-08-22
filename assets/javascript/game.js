// Creates an array that lists out all of the options (Alphabet Letters).
var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesLeft = 9;
var UserLetterSelection=null;

function updateGuessesLeft() {
    document.querySelector("#guesses_left").innerHTML = guessesLeft;
}

function chooseletter() {
    var randomNumber =  Math.floor((Math.random() * 25) + 1)
    var ComputerChoice = Letters[randomNumber]
   console.log(ComputerChoice);  
}
document.onkeydown = function(event) {
 guessesLeft--;
 console.log(guessesLeft);   
}

// Creating variables to hold the number of wins and losses They start at 0.
var wins = 0;
var losses = 0;

updateGuessesLeft()
chooseletter()
