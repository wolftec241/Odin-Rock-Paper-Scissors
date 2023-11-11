
// Global variables
// Initialise player score to zero
let userScore = 0;
// Initialise computer score to zero
let compScore = 0;
// Initialise games played to zero
let gamesPlayed = 0;

const CHOICES = ["Rock", "Paper", "Scissors"];

const userScoreText = document.getElementById("userScore")
const compScoreText = document.getElementById("compScore")

function getComputerChoice(){
    var choiceIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[choiceIndex];
}

//Check if users choice is valid
function checkUserChoice(userChoice){
    for (choice of CHOICES) {
        if(userChoice.toLowerCase() == choice.toLowerCase()) return choice;
    }
    return undefined;
}


//Check who win and adding one point for win side
function compare(userChoice, compChoice, userChoiceButton){
    let userWin = false;
    let Draw = false;
    //Check who win or it is draw
    if(userChoice == "Rock"){
        if (compChoice == "Paper") userWin = false;
        else if (compChoice == "Rock") Draw = true;
        else userWin = true;
    }
    else if(userChoice == "Paper"){
        if (compChoice == "Scissors") userWin = false;
        else if (compChoice == "Paper") Draw = true;
        else userWin = true;
    }
    else if(userChoice == "Scissors"){
        if (compChoice == "Rock") userWin = false;
        else if (compChoice == "Scissors") Draw = true;
        else userWin = true;
    }
    else return undefined;

    //Adding point to player who won
    if(!(userScore >= 5 || compScore >=5)){
        if(userWin){
            console.log(`You Win this round! ${userChoice} beats ${compChoice}`);
            userScore++;
            userChoiceButton.classList.add("winRound");
        }
        else if(Draw) console.log("It is draw on this round");
        else{
            console.log(`You Lose this round! ${compChoice} beats ${userChoice}`);
            compScore++;
            userChoiceButton.classList.add("lostRound");
        }

        changeScoreText();
    }
    endGame();
}


function changeScoreText(){
    userScoreText.textContent = `Score: ${userScore}`;
    compScoreText.textContent = `Score: ${compScore}`;
}

//Check if the game is over and alert valid massage on the screen
function endGame(){
    if(userScore >= 5 ){
        alert ("User win");
        alert("Refresh the side if you want to play again");
    }
    else if (compScore >= 5 ){
        alert ("Comp win");
        alert("Refresh the side if you want to play again");
    }
}

function restartPreviousButton(previousButton){
    if(previousButton != '')
        previousButton.classList.remove("winRound", "lostRound");
}

function game(){
    /* Old code
    let userChoice = prompt("Please enter Rock, Paper or Scissors");
    userChoice = checkUserChoice(userChoice);
    console.log(`User: ${userChoice}`);
    let compChoice = getComputerChoice();
    console.log(`Computer: ${compChoice}`);
    console.log(compare(userChoice, compChoice));
    */
    let userChoice = '';
    let compChoice = '';
    let previousResult = '';

    //check if one of the buttons were press
    document.querySelectorAll('button').forEach((btn) =>{
    btn.addEventListener('click', () =>{
        userChoice = btn.value;
        compChoice = getComputerChoice();
        console.log(`Computer: ${compChoice}`);
        compare(userChoice, compChoice, btn);
        restartPreviousButton(previousResult);
        previousResult = btn;
    })
});

}




function main(){
    console.log("Hello world");
    game();


}

main()