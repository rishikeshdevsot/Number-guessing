var randomNum = Math.floor((Math.random()*1000) + 1);
var guesses = document.createElement('p');
var Result = document.createElement('p');

var attempts = 0;

guesses.textContent = "Guesses: ";
document.body.appendChild(guesses);
document.body.appendChild(Result);



var submitButton = document.querySelector("button");


submitButton.onclick = function() {
    var enteredNumber = Number(document.querySelector("input").value);
    attempts += 1;
    if(attempts <= 10){
        
        if (enteredNumber === randomNum){
            Attempt(1, enteredNumber);
        }
        else{
            Attempt(0, enteredNumber);
        }
    }
    else{
        gameOver(state=0);
    }
}

function guesses(){
    document.body.appendChild(Guesses);
}

function lowOrHigh(entry){
    if(entry > randomNum){
        return " too high";
    }
    else{
        return " too low";
    }
}

function gameOver(state){
   if(!state){
        Result.textContent = "GameOver :(";
        var restart = document.createElement("button");
        restart.textContent = "Restart";
        document.body.appendChild(restart);
        restart.onclick = function(){
            attempts = 0;
            document.body.removeChild(restart);
            guesses.textContent = "Guesses: "
            Result.textContent = "";
        }
    }
    else{
        var restart = document.createElement("button");
        restart.textContent = "Restart";
        document.body.appendChild(restart);
        restart.onclick = function(){
            attempts = 0;
            document.body.removeChild(restart);
            guesses.textContent = "Guesses: "
            Result.textContent = "";

        }
    }


}




function Attempt(result, entry){
    if(result === 1){
        guesses.textContent += String(entry) + " ";
        Result.textContent = "Right Answer! You won!";
        gameOver(state=1);
    }
    else{
        guesses.textContent += String(entry) + " ";
        Result.textContent = "Wrong Answer! Try Again" + lowOrHigh(entry);
    }

}

