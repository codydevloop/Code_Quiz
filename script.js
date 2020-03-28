

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

var stupidIndex = 0;
// console.log(allQandA[indexTracking].q);


// ***Element Variables
var userQuestion = document.querySelector("#question");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var buttonEl = document.querySelector("button");
var topScoreEl = document.querySelector("#topscore");
var userScoreEl = document.querySelector("#score");
var stateOfStartButton = true;


// GIVEN I am taking a code quiz
// WHEN I click the start button


//create start button variable
var startButtonEl = document.querySelector("#start");
var timeForQuiz = 45;


// eventListener Button

startButtonEl.addEventListener("click", function(){
    if (stateOfStartButton === true){
    // start timer
    //code working at this point
    // console.log(startButtonEl);
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
        var timerEl = document.querySelector("#timer");
        timerEl.textContent = "  -  Time Remaining: "+ timeForQuiz;
        timeForQuiz--;
        // console.log("why oh why");
        // console.log(timeForQuiz);
        if(timeForQuiz===0){
        clearInterval(timeInterval); 
        };
    },1000)
};

// load questions and answers

function randomQuestion(){
    var randomNumber=Math.floor(Math.random()*allQandA.length);
    stupidIndex=randomNumber;
};

// check answers

function check(element){
    // console.log(element.id)
    // console.log(allQandA[stupidIndex].correct);

    if (element.id === allQandA[stupidIndex].correct){
        // alert("Correct");
        var oneLevelUp = element.parentNode;
        var twoLevelUp = oneLevelUp.parentNode;
        twoLevelUp.setAttribute("class", "bg-success");
        
        
    }
    else {
        var oneLevelUp = element.parentNode;
        var twoLevelUp = oneLevelUp.parentNode;
        twoLevelUp.setAttribute("class", "bg-danger");
        // __subtract time
        
    };
};


function getUserQandA(){
    randomQuestion();
    // console.log(stupidIndex);
    // console.log(allQandA[stupidIndex].q);
    userQuestion.innerHTML = allQandA[stupidIndex].q;
    answer1El.innerHTML = allQandA[stupidIndex].a[0];
    answer2El.innerHTML = allQandA[stupidIndex].a[1];
    answer3El.innerHTML = allQandA[stupidIndex].a[2];
    // userQuestion.innerHTML = allQandA[tupidIndex].correct;
    // // index++;
    // console.log(userQuestion);
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




