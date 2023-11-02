
const CHOICES = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
    var choiceIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[choiceIndex];
}


function getUserChoice(userChoice){
    for (choice of CHOICES) {
        if(userChoice.toLowerCase() == choice.toLowerCase()) return choice;
    }
    return undefined;
}

function playRound(userChoice, compChoice){
    let userWin = "";
    if(userChoice == "Rock"){
        if (compChoice == "Paper") userWin = false;
        else if (compChoice == "Rock") return "Draw"
        else userWin = true;
    }
    else if(userChoice == "Paper"){
        if (compChoice == "Scissors") userWin = false;
        else if (compChoice == "Paper") return "Draw"
        else userWin = true;
    }
    else if(userChoice == "Scissors"){
        if (compChoice == "Rock") userWin = false;
        else if (compChoice == "Scissors") return "Draw"
        else userWin = true;
    }
    else return undefined;

    if(userWin) return `You Win! ${userChoice} beats ${compChoice}`;
    return `You Lose! ${compChoice} beats ${userChoice}`;
}


function main(){
    console.log("Hello world");
    let userChoice = prompt("Please enter Rock, Paper or Scissors");
    userChoice = getUserChoice(userChoice);
    console.log(userChoice);
    let compChoice = getComputerChoice();
    console.log(compChoice);
    console.log(playRound(userChoice, compChoice));


}

main()