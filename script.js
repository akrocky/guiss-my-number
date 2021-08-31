

const number= document.querySelector('.number');
const guess= document.querySelector('.guess');
const message= document.querySelector('.message');
const score= document.querySelector('.score');

const highscore= document.querySelector('.highscore');
highscore.innerText=0;
 
document.querySelector('.again').addEventListener('click',function(){
    number.innerText= parseInt(Math.random()*10);
    guess.value=0;
})


document.querySelector('.check').addEventListener('click',function(){
   const guessValue= parseInt(guess.value)
   const numberValue = number.innerText;
   if(guessValue == numberValue){
    message.innerText='good job! win!' 
    highscore.innerText= score.innerText;
    
   }
   else if (guessValue <1){
      message.innerText='press any number Between 1 and 10';
      guess.value=0;
   }
   else if(guessValue < numberValue){
    message.innerText=' no!your number is low';
    score.innerText-=1;
   }
   else if(guessValue> numberValue){
    message.innerText=' no! your number is high';
    score.innerText-=1;
   }


});
console.log(highscore.innerText)


