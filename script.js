let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess(){
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    let hint = document.getElementById("hint");

    if(userGuess === ""){
        message.textContent = " Please enter a number!";
        return;
    }

    attempts++;

    if(userGuess == randomNumber){
        message.textContent = "Congratulations! You guessed it right!";
        hint.textContent = "";
    }
    else if(userGuess > randomNumber){
        message.textContent = "oopss too big no., you're Wrong!";
        hint.textContent = "Hint: Try a smaller number ⬇";
    }
    else{
        message.textContent = "sorry babe, you're Wrong!";
        hint.textContent = "Hint: Try a bigger number ⬆";
    }

    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;
}

function restartGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("hint").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
}
