let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber() {
    tries = tries + 1;
    displayTries.innerHTML = "Versuche:  " + tries;

    if(numberToGuess == mynumber.value) {
        headline.innerHTML = "Du hast gewonnen!!!🥳🥳";
    }


 if(numberToGuess > mynumber.value) {
        headline.innerHTML = "Die Zahl ist größer!";
    }


    if(numberToGuess < mynumber.value) {
        headline.innerHTML = "Die Zahl ist kleiner!";
    }
    mynumber.value="";
}
