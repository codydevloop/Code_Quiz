

//********************************** */

// ****GAME & TIMER DESIGN

// **********************************

//Question Bank Array of objects

alert("Welcome to my timed quiz!")
alert("After you answer each question the timer will stop.  It will resume after you click on Next.");
alert("Be carefull NOT to hit the Next button at any other time!!");

const allQandA = [
    {
    q: "What dimension do the Endermane come from?",
    a: ["The End", "Narnia", "Kansas"],
    correct:"answer1"
    },

    {
    q:"How do you make a large chest?", 
    a: ["Gather some wood.", "Craft them.", "Put two chests together"],
    correct:"answer3"
    },

    {
    q:"What animals are creepers scared of?", 
    a: ["Cows", "Cats", "Pigs"],
    correct:"answer2"
    },

    {
    q:"How tall is a Ghast?", 
    a: ["4 blocks", "6 blocks", "3 blocks"],
    correct:"answer1"
    },

    {
    q:"What are can you build complicated machines with?", 
    a: ["Gold", "Obsidian", "Redstone"],
    correct:"answer3"
    }    
];

// *** Variables

var stopWatch = true;
var timeForQuiz = 35;
var timerEl = document.querySelector("#timer");
var userQuestion = document.querySelector("#question");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var buttonEl = document.querySelector("button");
var topScoreEl = document.querySelector("#topscore");
var userScoreEl = document.querySelector("#score");
var stateOfStartButton = true;
var startButtonEl = document.querySelector("#start");
var nextButtonEl = document.querySelector("#next");
var endOfGame = false;
var randomBank = [];

// Array of numbers to help Randomize questions
// and make sure none of them repeat
for( var i=0; i<allQandA.length;i++){
    randomBank.push(i);
};

// eventListener Start Element
// starts timer, gets question

startButtonEl.addEventListener("click", function(){
    if (stateOfStartButton === true){
    // start timer
    showTime();
    getUserQandA();
    startButtonEl.innerHTML = 'Reset';
    // startButtonEl.id = "reset";
    stateOfStartButton = false;
    }

    // start buttion turns into reset button once
    // application is running
    else{
        location.reload(true);
        return false;
    };
});


//timer - manages the time

function showTime() {

    var timeInterval = setInterval(function() {
        if (stopWatch === true){
            timerEl.textContent = "Time Remaining: " + timeForQuiz;
            timeForQuiz--;
        }
        else{
            clearInterval(timeInterval);
        }

        if(timeForQuiz<=0){
            clearInterval(timeInterval); 
            gameOver();
        };
    },1000)
};


// ***check answers, stops clock until next is selected

function check(element){    
    
    // console.log(element.id)
    // console.log(allQandA[stupidIndex].correct);
    if (element.id === allQandA[stupidIndex].correct){

        //***was trying to style with Bootstrap properties
        //*** this had issues like: delayed styling and 
        //*** difficults changing back to normal on the next question

        // var oneLevelUp = element.parentNode;
        // var twoLevelUp = oneLevelUp.parentNode;
        // twoLevelUp.setAttribute("class", "bg-danger"); 
        
        alert("Correct");  

        // after selection, the time interval is paused 
        // by using clearInterval and then restarting
        stopWatch=false;  

        if(endOfGame===true)  {
            gameOver();
        };  
       
    }
    else {

        //***same here for Bootstrap styling, red for incorrect
        // var oneLevelUp = element.parentNode;
        // var twoLevelUp = oneLevelUp.parentNode;
        // // twoLevelUp.setAttribute("class", "bg-danger"); 

        // when you select incorrect
        alert("Incorrect: Sorry that is a 10 second penalty");
        
        // // subtract 10 sec penalty to time for quiz
        timeForQuiz = timeForQuiz-10; 
        timerEl.textContent = "Time Remaining: " + timeForQuiz;

        // //time interval is paused
        stopWatch=false;        
        
        // check for End Of Game
        if(endOfGame===true)  {
            gameOver();
        };         

    };      
};

// this helps with controling the timer
nextButtonEl.addEventListener("click",function(){
    
    stopWatch=true;
    getUserQandA();
    showTime(); 
    

});

// load questions and answers

function getUserQandA(){

    randomQuestion();
    userQuestion.innerHTML = allQandA[stupidIndex].q;
    answer1El.innerHTML = allQandA[stupidIndex].a[0];
    answer2El.innerHTML = allQandA[stupidIndex].a[1];
    answer3El.innerHTML = allQandA[stupidIndex].a[2];
};

//create array values 0-length of questionbank

function randomQuestion(){
  
    // choose random value from array
    var randomNumber=Math.floor(Math.random()*randomBank.length);

    //remove that number from the question bank array
    stupidIndex=randomBank[randomNumber];
    randomBank.splice([randomNumber],1);
    
    if(randomBank.length===0){
        // alert("end of game");
        endOfGame = true;  
    };
};
   
function gameOver(){
    location.replace("./creeper.html");
    localStorage.setItem("timeForQuiz", timeForQuiz);
};


             
//add event listener for clicked answers
// answer1El.addEventListener("click",function(){
//     indexCounter();    
// });

// answer1E2.addEventListener("click",function(){
//     getUserQandA();
// });

// answer1E3.addEventListener("click",function(){
//     getUserQandA();
// });


    

// THEN a timer starts (done) and I am presented with a question
// // create, show timer, show question, and multi-choice ansers

// WHEN I answer a question
// THEN I am presented with another question

// //add eventlisteners to questions
// // if not at the end of questions,  show another one



// WHEN I answer a question incorrectly

// // if question answer is correct
// THEN time is subtracted from the clock

// // then subtract 5 seconds
// // event timer on incorrct answers,  or all answers except the correct one

// WHEN all questions are answered or the timer reaches 0

// // if end of questions array/object || timer reaches 0


// THEN the game is over
// // game over
// WHEN the game is over
// // if score is top 3-enter in
// THEN I can save my initials and score




