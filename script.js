

// 
// CREATE CREEPER ***
// 




var h1El = document.querySelector("h1");

//***Building Creaper with Javascript */

//create arrays to draw eyes and face - color black
// eyes
row1 = [];
row2 = [];
row3 = [2,3,10,11];
row4 = [2,3,10,11];
row5 = [];

//nose
row6 = [6,7];
row7 = [4,5,6,7,8,9];
row8 = [4,5,6,7,8,9];
row9 = [4,5,8,9];
row10 = [];
row11 = [];
row12 = [];

creeperRows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12];



var divSection = document.createElement("div");
document.body.appendChild(divSection);
// divContainer.setAttribute("class", "container");

// console.log(creeperRows);
// var bodyEl = document.querySelector("body");
var divContainer = document.createElement("div");
divContainer.setAttribute("class", "creeper");
divContainer.setAttribute("class", "col-6");
// divContainer.setAttribute("class", "container");
// append to divContainer



// ? shouldn't i be able to insert this parent element anywhere? YUP!
var insertCreeper = document.querySelector("#insert-creeper");

 

insertCreeper.appendChild(divContainer);
// insert container between h1 and script tags
// bodyEl.insertBefore(divContainer, bodyEl[0]);



// console.log(divContainer);


// loop throught array length times(creating 12 x 12 grid) 
// create new rows... set class as 'row' and append to div class-container

// **Create 12 ROWS
for (var i = 0; i < 12; i++){
   
    var rowCreation = document.createElement("div");
    rowCreation.setAttribute("class", "row");
    divContainer.appendChild(rowCreation);
    
    // creating COL for each row,  detect black squares with creeperRows Array data

    // ** Check check for all green rows in array and create them
    if(creeperRows[i].length===0){
        for(var j = 0; j < creeperRows.length; j++){
            var colCreation = document.createElement("div");
            rowCreation.appendChild(colCreation);
            colCreation.style.height = "40px";
            colCreation.style.width = "40px";
            colCreation.style.backgroundColor = 'green';
            colCreation.setAttribute("class", "row-sm-1");
        }     
    }
    else {
        // console.log(creeperRows[i]);

        // ***column counter for rows with black
        for(var k = 0; k < 12; k++){
            
            // create bool set to false
            var arrayBlackPosition = false;

            // loop check to see if col value is in current arrays array 4x
            for (var ki =0; ki <creeperRows[i].length; ki++){


                // if there was a match set bool to true
                if (creeperRows[i][ki]===k+1){

                    arrayBlackPosition=true;  

                    // console.log("index i: " + i + "  index k: " + k + "  index ki" + ki + " arrayBlackPosition: " + arrayBlackPosition);             
                };
               
                // console.log(arrayBlackPosition);
            };

            // console.log("index i: " + i + "  index k: " + k + "  index ki" + ki + " arrayBlackPosition: " + arrayBlackPosition);

            if(arrayBlackPosition===true){

                var colCreation = document.createElement("div");
                rowCreation.appendChild(colCreation);
                colCreation.style.height = "40px";
                colCreation.style.width = "40px";
                colCreation.style.backgroundColor = 'black';
                colCreation.setAttribute("class", "row-sm-1");
                // colCreation.style.border = "2px solid black";    
            }
            else{
                // style green
                var colCreation = document.createElement("div");
                rowCreation.appendChild(colCreation);
                colCreation.style.height = "40px";
                colCreation.style.width = "40px";
                colCreation.style.backgroundColor = 'green';
                colCreation.setAttribute("class", "row-sm-1");

            };

            // console.log("index i: " + i + "  index k: " + k + "  index ki" + ki + " arrayBlackPosition: " + arrayBlackPosition);           
        };
    };  

};



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
    userQuestion.innerHTML = allQandA[stupidIndex].q;
    answer1El.innerHTML = allQandA[stupidIndex].a[0];
    answer2El.innerHTML = allQandA[stupidIndex].a[1];
    answer3El.innerHTML = allQandA[stupidIndex].a[2];

};

//create array values 0-length of questionbank



function randomQuestion(){
    if(randomBank.length===0){
        alert("end of game");
        stopWatch = false;
    //endof game function   
    };

    console.log(randomBank);
    // choose random value from array
    var randomNumber=Math.floor(Math.random()*randomBank.length);
    console.log(randomNumber);
    //remove that number from the array - question bank
    randomBank.splice([randomNumber],1);
    stupidIndex=randomNumber;
    console.log(randomBank);
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




