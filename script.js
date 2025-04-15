let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessfield");
const guessSlot=document.querySelector("#pre_guess");
const remaining=document.querySelector("#remain_count");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");
const p=document.createElement("p");
let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const gu=parseInt(userInput.value);
        validateGuess(gu);
    });
}
const validateGuess=(guess)=>{
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1){
        alert("Please enter a number which is more than or equal to 1");
    }
    else if(guess>100){
        alert("Please enter a number which is less than or equal to 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess);
            displayMessage(`Game Over...Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};
const checkGuess=(guess)=>{
    if(guess===randomNumber){
        displayMessage(`You guessed it right...!`);
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`The number you guessed is low`);
    }else if(guess>randomNumber){
        displayMessage(`The number you guessed is high`);
    }
};
const displayGuess=(guess)=>{
    userInput.value="";
    
    //  ek baar idhar bhi dhek lena h

    guessSlot.innerText+=` ${guess}`;
    numGuess++;
    remaining.innerText=`${11-numGuess}`;
};
const displayMessage=(message)=>{
    lowOrHi.innerHTML=`<h3>${message}</h3>`;
};
const endGame=()=>{
    userInput.vlaue="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML=`<h2 id="newGame">Start new game.</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();            
};
const newGame=()=>{
    const newGameButton=document.querySelector("#newGame");
    newGameButton.addEventListener("click",()=>{
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerText="";
        remaining.innerText=`${11-numGuess}`;
        displayMessage(``);
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame=true;
    });
};

