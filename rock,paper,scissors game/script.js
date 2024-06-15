let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")
const showWinner=(winner,userChoice,comChoice)=>{
    if(winner){
        // console.log("YOU WIN");
        userScore++;
        userScorePara.innerText=userScore;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        msg.innerText=`YOU WIN! Your ${userChoice} beates ${comChoice}`;
    }
    else{
        // console.log("YOU LOSS");
        compScore++;
        compScorePara.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        msg.innerText=`YOU LOSS! ${comChoice} beates yours ${userChoice}`;
    }
}
const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}

const playGame=(userChoice)=>{
    // console.log("user choice is : ",userChoice);
    const comChoice=genComputerChoice();
    // console.log("computer choice is : ",comChoice);

    if(userChoice===comChoice){
        // console.log("game was draw");
        msg.innerText="game was draw";
        msg.style.backgroundColor="yellow";
        msg.style.color="black";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=comChoice==="scissors"?false:true;
        }else{
            userWin=comChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choise);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
});