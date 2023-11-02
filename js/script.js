
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

function compare(userChoice, compChoice){
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

function playRound(){
    let userChoice = prompt("Please enter Rock, Paper or Scissors");
    userChoice = getUserChoice(userChoice);
    console.log(`User: ${userChoice}`);
    let compChoice = getComputerChoice();
    console.log(`Computer: ${compChoice}`);
    console.log(compare(userChoice, compChoice));

}

function game(){
    for(let i=0; i<5; i++){
        playRound();
    }
}




function main(){
    console.log("Hello world");
    game();
}

main()