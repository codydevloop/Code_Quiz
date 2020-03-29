





//********************************** */

// ****GAME & TIMER DESIGN

// **********************************

const allQandA = [
    {
    q: "Do you like dogs?",
    a: ["yes", "no", "maybe"],
    correct:"answer1"
    },

    {
    q:"Do you like cats?", 
    a: ["yes", "no", "maybe"],
    correct:"answer1"
    },

    {
    q:"Do you like fish?", 
    a: ["yes", "no", "maybe"],
    correct:"answer1"
    }
]


// console.log(allQandA[indexTracking].q);


// ***Element Variables

var stopWatch = true;
var timeForQuiz = 45;
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
for( var i=0; i<allQandA.length;i++){
    randomBank.push(i);
};
// var timeInterval = setInterval(showTime,1000);
// clearInterval(timeInterval);


// eventListener Button



startButtonEl.addEventListener("click", function(){
    if (stateOfStartButton === true){
    // start timer
    showTime();
    getUserQandA();
    startButtonEl.innerHTML = 'Reset';
    // startButtonEl.id = "reset";
    stateOfStartButton = false;
    }
    else{
        location.reload(true);
        return false;
    };
});


//timer

function showTime() {

    var timeInterval = setInterval(function() {
        if (stopWatch === true){
            timerEl.textContent = "Time Remaining: " + timeForQuiz;
            timeForQuiz--;
            // console.log("why oh why");
            // console.log(timeForQuiz);
        }
        else{
            clearInterval(timeInterval);
        }

        if(timeForQuiz===0){
            timerEl.textContent ="blah ";
            clearInterval(timeInterval); 
        };
    },1000)
};









// ***check answers, stop clock until next is selected
// timer issue not here

function check(element){    

    // console.log(element.id)
    // console.log(allQandA[stupidIndex].correct);
    if (element.id === allQandA[stupidIndex].correct){

        //style  correct
        var oneLevelUp = element.parentNode;
        var twoLevelUp = oneLevelUp.parentNode;
        twoLevelUp.setAttribute("class", "bg-success");
        
        alert("Correct");  

        // when you select correct, the time interval is paused
        stopWatch=false;  

        if(endOfGame===true)  {
            // localStorage.setItem("timeForQuiz", timeForQuiz);
            location.replace("./creeper.html")
        };  
       
    }
    else {
        //style incorrect
        var oneLevelUp = element.parentNode;
        var twoLevelUp = oneLevelUp.parentNode;
        twoLevelUp.setAttribute("class", "bg-danger"); 

        // when you select incorrect
        alert("Incorrect: Sorry that is a 10 second penalty");
        
        // // subtract 10 sec penalty to time for quiz
        timeForQuiz = timeForQuiz-10; 
        timerEl.textContent = "Time Remaining: " + timeForQuiz;

        // //time interval is paused
        stopWatch=false;        
        //  timerEl.textContent = "  -  Time Remaining: "+ timeForQuiz; 
        if(endOfGame===true)  {
            // localStorage.setItem("timeForQuiz", timeForQuiz);
            location.replace("./creeper.html")
        };         

    };

        // this is the last place the selected object is us
        // before next questio is loaded, deleting object from
        // array so random does not choose it again
      
};

nextButtonEl.addEventListener("click",function(){
    stopWatch=true;
    getUserQandA();
    showTime(); 

});
// load questions and answers

function getUserQandA(){

    // set background colors to white

    // var oneLevelUpEl1 = answer1El.parentNode;
    // var twoLevelUpEl1 = oneLevelUpEl1.parentNode;
    // twoLevelUpEl1.setAttribute("class", "bg-white");

    // answer3El.setAttribute("class", "bg-transparent");
    // answer3El.setAttribute("class", "bg-transparent");
    randomQuestion();
    // console.log("stupidIndex inside random question :" + stupidIndex);
    userQuestion.innerHTML = allQandA[stupidIndex].q;
    answer1El.innerHTML = allQandA[stupidIndex].a[0];
    answer2El.innerHTML = allQandA[stupidIndex].a[1];
    answer3El.innerHTML = allQandA[stupidIndex].a[2];

};

//create array values 0-length of questionbank



function randomQuestion(){
  
    // choose random value from array
    var randomNumber=Math.floor(Math.random()*randomBank.length);

    //remove that number from the array - question bank
    stupidIndex=randomBank[randomNumber];
    randomBank.splice([randomNumber],1);
    
    if(randomBank.length===0){
        // alert("end of game");
        endOfGame = true;  
    };
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




